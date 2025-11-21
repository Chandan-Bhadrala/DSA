#include <iostream>
using namespace std;

// In mathematics, the Fibonacci sequence is a sequence in which each element is the sum of the two elements that precede it.
//  The sequence begins 0,1,1,2,3,5,8,13,21,34,55,89,144, and continues infinitely as you add the last two numbers to get the next one. 

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
