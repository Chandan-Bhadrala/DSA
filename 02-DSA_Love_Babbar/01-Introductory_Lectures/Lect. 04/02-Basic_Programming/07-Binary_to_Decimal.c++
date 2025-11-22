#include <iostream>
#include <string>
using namespace std;

// # Binary to Decimal.
// 1. Will take user binary input in the string, as if binary input from the user is taken as int, then CPU will consider that binary as an int and will further convert it to its binary.
// 1.1. So, have to take user binary input as a string to process it to the decimal value.
// 2.

int main()
{
    string bin;
    cout << "Enter a binary number to calculate its decimal value: ";
    cin >> bin;

    int decimal = 0;
    int base = 1; // 2^0

    for (char digit : bin)
    {
        decimal = decimal + digit * base;
        base = base * 2;
    }

    cout << "Decimal value of the given " << bin << " is " << decimal << endl;

    return 0;
}
