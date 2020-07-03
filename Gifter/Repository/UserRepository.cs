using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class UserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile.ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile.FirstOrDefault(p => p.Id == id);
        }
        public List<UserProfile> GetByUserProfileId(int id)
        {
            return _context.UserProfile.Include(p => p.Id)
                            .Where(p => p.Id == id)
                            .OrderBy(p => p.Name)
                            .ToList();
        }
        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

        public void Update(UserProfile userProfile)
        {
            _context.Entry(userProfile).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var userProfile = GetById(id);
            _context.UserProfile.Remove(userProfile);
            _context.SaveChanges();
        }
        public List<UserProfile> Search(string criterion, bool sortDescending)
        {
            var query = _context.UserProfile
                                .Where(p => p.Name.Contains(criterion));

            return sortDescending
                ? query.OrderByDescending(p => p.DateCreated).ToList()
                : query.OrderBy(p => p.DateCreated).ToList();
        }
    }
}