#include <iostream>
using namespace std;

// Checking whether given number is prime or not.
int main()
{
    int n;
    cout << "Enter the number to check whether it's prime or not: ";
    cin >> n;

    if (n == 2)
    {
        cout << "Entered number " << n << " is a prime number." << endl;
    }
    
    if (n % 2 == 0)
    {
        cout << "Entered number " << n << " is not a prime number." << endl;
        return 0;
    }

    for (int i = 3; i < n; i = i + 2)
    {
        int mod = n % i;

        if (mod == 0)
        {
            cout << "Entered number " << n << " is not a prime number." << endl;
            return 0;
        }
    }
    cout << "Entered number " << n << " is a prime number." << endl;

    return 0;
}