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

        sum = sum + extractedDigit * base;
        base = base * 2;
    }

    cout << "Decimal value of the given " << n << " is " << sum << endl;

    return 0;
}
