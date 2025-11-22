#include <iostream>
using namespace std;

// # 2's Compliment
// 1. Use ~ Not operator to get 1's compliment of a number.
// 2. Add 1 to the 1's compliment to get 2's compliment.

int main()
{
    int n;
    cout << "Enter an integer to claculate its 2's complement: ";
    cin >> n;
  

    if (n < 0)
    {        cout << "Please enter the positive integer.";
        return 0;
    }

   
    cout << "Reversed Integer is: " <<  endl;

    return 0;
}
