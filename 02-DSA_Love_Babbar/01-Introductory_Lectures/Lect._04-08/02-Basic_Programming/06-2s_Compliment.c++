#include <iostream>
using namespace std;

// # 2's Compliment
// 1. Use ~ Not operator to get 1's compliment of a number.
// 2. Add 1 to the 1's compliment to get 2's compliment.

int main()
{
    int n;
    cout << "Enter an integer to calculate its 2's complement: ";
    cin >> n;

    int onesCompliment = ~n;
    int twosCompliment = onesCompliment + 1;

    cout << "2's compliment of the " << n << " is " << twosCompliment << endl;

    return 0;
}
