using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace A5_SegalMadeline
{
    class Program
    {
        static void Main(string[] args)
        {
               {
                CheckingAccount c1 = new CheckingAccount("Sam", 100);
                SavingsAccount s1 = new SavingsAccount("John", 500, 100);

                Console.WriteLine("Account Information #1");
                Console.WriteLine(c1.ToString());
                Console.WriteLine(s1.ToString());

                Console.WriteLine("\n\nTransactions on c1:");
                Console.WriteLine("Withdraw $200 from c1: " + c1.Withdraw(200));
                Console.WriteLine(c1.ToString());
                Console.WriteLine("Withdraw $60 from c1: " + c1.Withdraw(60));
                Console.WriteLine(c1.ToString());
                Console.WriteLine("Deposit $500 to c1: " + c1.Deposit(500));
                Console.WriteLine(c1.ToString());
                Console.WriteLine("Withdraw $200 from c1: " + c1.Withdraw(200));
                Console.WriteLine(c1.ToString());

                Console.WriteLine("\n\nTransactions on s1:");
                Console.WriteLine("Withdraw $400: " + s1.Withdraw(400));
                Console.WriteLine(s1.ToString());
                Console.WriteLine("Withdraw $200: " + s1.Withdraw(200));
                Console.WriteLine(s1.ToString());
                Console.WriteLine("Deposit $600: " + s1.Deposit(600));
                Console.WriteLine(s1.ToString());
                Console.WriteLine("Withdraw $400: " + s1.Withdraw(400));
                Console.WriteLine(s1.ToString());
                Console.WriteLine("Apply Interest: " + s1.ApplyInterest());
                Console.WriteLine(s1.ToString());

                Console.Write("\n\nPress Enter to exit the program:");
                Console.ReadLine();
            }
        }
    }
}
