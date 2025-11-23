#include <iostream>
using namespace std;

// # Reverse an integer
// We are going to use n%10 modulus to extract the last digit of the number.
// Reverse digit will be equal to inside a loop, 10*reversedDigit + lastDigit

// To access next digit of the n, update n by eliminating its last digit using n/10 (i.e., right shift n).
// May use copy of n, to preserve original n.

int main()
{
    int n;
    cout << "Enter an integer to reverse it: ";
    cin >> n;
    int copyN = n;

    if (n < 0)
    {
        cout << "Please enter the positive integer.";
        return 0;
    }

    int reversedInteger = copyN % 10;
    copyN = copyN / 10;

    // While will evaluate the condition, and only if it is true, will it execute the body, even for the first time.
    // So, if n was initially less than 9, it won't enter the function body.
    while (copyN > 0)
    {
        int lastDigit = copyN % 10;
        copyN = copyN / 10;

        // Using *10 to push reversed integer to left (i.e., left shift n).
        reversedInteger = reversedInteger * 10 + lastDigit;
    };

    cout << "Reversed Integer is: " << reversedInteger << endl;

    return 0;
}
