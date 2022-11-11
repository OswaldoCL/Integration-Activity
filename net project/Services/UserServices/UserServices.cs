using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace net_test.Services.UserServices
{
    public class UserServices : IUserServices
    {
        
        public User users = new User{};
        public List<User> AddUser(User newUser)
        {
            throw new NotImplementedException();
        }

        public User DeleteUser(User user)
        {
            throw new NotImplementedException();
        }

        public User GetUserById(int id)
        {
            //foreach(c => c.Id == id);
            return users;
        }

        public User UpdateUser(User user)
        {
            throw new NotImplementedException();
        }
    }
}