using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bhCandidates.Data
{
    public class CandidatesRepository
    {
        private readonly string _connectionString;

        public CandidatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            candidate.Status = Status.Pending;
            using var context = new CandidatesDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetCandidatesByStatus(Status status)
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == status).ToList();
        }

        public void UpdateStatus(int id, Status status)
        {
            using var context = new CandidatesDataContext(_connectionString);
            var candidate = context.Candidates.FirstOrDefault(c => c.Id == id);
            candidate.Status = status;
            context.SaveChanges();
        }

        public Candidate GetCandidate(int id)
        {
            using var context = new CandidatesDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }


        public object GetStatusCount()
        {
            using var context = new CandidatesDataContext(_connectionString);
            return new
            {
                Pending = context.Candidates.Where(c => c.Status == Status.Pending).Count(),
                Confirmed = context.Candidates.Where(c => c.Status == Status.Confirm).Count(),
                Cancelled = context.Candidates.Where(c => c.Status == Status.Cancelled).Count()
            };
        }


    }
}
