#include <iostream>
using namespace std;

// # Check whether user input n is a number that is a result of the powers of 2 or not.
// 1. Meaning n must be 2^0, 2^1, 2^2, 2^3, 2^4, and so on.
// 2. All these powers of n have one thing in common.
// 2.1. Their binary representation is:
// 2.2. 1, 10, 100, 1000, 10000, and so on.
// 2.3. So we can see that if a number "n" is a result of a power of 2, then it must have only one 1 in its binary format.
// 3. So, for the given number "n", this is the condition that we will verify and yield our boolean result of true or false for the given "n".

int main()
{
    int n;
    cout << "Enter an integer to check whether it's a result of a power of two or not: ";
    cin >> n;

    if (n == 1) // Solving straight away for n input as 1.
    {
        cout << "Given number " << n << " is a result of the power of 2" << endl;
        return 0;
    }

    int copyN = n;
    int count = 0;

    while (copyN > 0)
    {
        int lastBit = copyN & 1;

        copyN = copyN >> 1;

        if (lastBit == 1 && copyN > 0)
        {
            cout << "Given number " << n << " is not a result of the power of 2" << endl;
            return 0;
        }
    };

    cout << "Given number " << n << " is a result of the power of 2" << endl;

    return 0;
}
