#include <iostream>
#include <string>
using namespace std;

// # Binary to Decimal.
// 1. Take user input in the int.
// 2. Extract each digit using % modulus operator

int main()
{
    string bin;
    cout << "Enter a binary number to calculate its decimal value: ";
    cin >> bin;

    int decimal = 0;
    int base = 1; // 2^0

    for (char digit : bin)
    {
        decimal = decimal + (digit - '0') * base;
        base = base * 2;
    }

    cout << "Decimal value of the given " << bin << " is " << decimal << endl;

    return 0;
}
