using bhCandidates.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bhCandidate.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CandidatesController : ControllerBase
    {
        private string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.AddCandidate(candidate);
        }

        [HttpGet]
        [Route("getcandidatesbystatus")]
        public List<Candidate> GetCandidatesByStatus(Status status)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidatesByStatus(status);
        }

        [HttpGet]
        [Route("updatestatus")]
        public bool UpdateStatus(int id, Status status)
        {
            var repo = new CandidatesRepository(_connectionString);
            repo.UpdateStatus(id, status);
            return true;
        }

        [HttpGet]
        [Route("getcandidate")]
        public Candidate GetCandidate(int id)
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetCandidate(id);
        }

        [HttpGet]
        [Route("getstatuscount")]
        public object GetStatusCount()
        {
            var repo = new CandidatesRepository(_connectionString);
            return repo.GetStatusCount();
        }
    }
}
