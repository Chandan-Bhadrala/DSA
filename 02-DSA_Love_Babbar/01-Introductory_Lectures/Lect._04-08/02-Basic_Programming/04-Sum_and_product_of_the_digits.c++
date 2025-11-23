#include <iostream>
using namespace std;

// Sum and product of the digits of the number.
// We are going to use n%10 modulus to extract the last digit of the number.
// and we are going to use n/10 to eliminate the last digit of the integer.

int main()
{
    int n;
    cout << "Enter an integer to find the sum and product of its digits: ";
    cin >> n;

    if (n < 0)
    {
        cout << "Please enter the positive integer.";
        return 0;
    }

    int sum = 0;
    int product = 1;

    int pendingDigits = n;

    for (; pendingDigits > 0;)
    {
        int lastDigit = pendingDigits % 10;
        pendingDigits = pendingDigits / 10;

        sum = sum + lastDigit;
        product = product * lastDigit;
    };

    cout << "Sum of digits = " << sum << endl;
    cout << "Product of digits = " << product << endl;

    return 0;
}
