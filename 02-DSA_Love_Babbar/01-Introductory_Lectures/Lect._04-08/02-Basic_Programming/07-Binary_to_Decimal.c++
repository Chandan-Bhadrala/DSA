#include <iostream>
#include <string>
using namespace std;

// # Binary to Decimal.
// 1. Take user binary input in the int.
// 2. Extract each binary digit using % modulus operator.
// 3. Add each digit multiplied by the base value into a sum variable.
// 4. That sum variable is your decimal value.

int main()
{
    int n;
    cout << "Enter a binary number to calculate its decimal value: ";
    cin >> n;

    int sum = 0;
    int base = 1; // 2^0

    int copyN = n;

    while (copyN)
    {
        int extractedDigit = copyN % 10;
        copyN = copyN / 10;

        // Fail check: If user enters any number other than 0 or 1 in the binary input, like 102301. Then this is not an binary input from the user.
        // This if block will help.
        if (extractedDigit != 0 && extractedDigit != 1)
        {
            cout << "Invalid binary number!" << endl;
            return 0;
        }

        sum = sum + extractedDigit * base;
        base = base * 2;
    }

    cout << "Decimal value of the given " << n << " is " << sum << endl;

    return 0;
}
