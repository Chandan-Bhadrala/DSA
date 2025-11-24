#include <iostream>
using namespace std;

// # Print the sum of all elements of the array.

int main()
{
    int n;
    cout << "Enter how many Fibonacci terms to print: ";
    cin >> n;

    if (n <= 0)
    {
        cout << "Invalid input." << endl;
        cout << "Please enter positive integer." << endl;
        return 0;
    }

    int a = 0;
    int b = 1;
    int sum = 0;

    cout << a << endl;
    cout << b << endl;

    for (int i = 2; i < n; i++)
    {
        sum = a + b;
        cout << sum << endl;
        a = b;
        b = sum;
    }

    cout << "Fibonacci series sum for number n is " << sum << endl;

    return 0;
}
