﻿using Microsoft.EntityFrameworkCore;
using System;

namespace bhCandidates.Data
{

    public class CandidatesDataContext : DbContext
    {
        private readonly string _connectionString;

        public CandidatesDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }


        public DbSet<Candidate> Candidates { get; set; }

    }

}
