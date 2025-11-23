#include <iostream>
using namespace std;

// # nCr = n!/(r!(n-r)!)
// 00. The nCr formula, also known as the combination formula, calculates the number of ways to choose r items from a set of n distinct items without regard to the order of selection.
// n = Number of Total Objects.
// r = Number of Objects Chosen at Once.
// 0 <= r <=n

// 1. Now, how to achieve above calculation.
// 2. We are going to create two functions:
// 2.1. One to calculate the factorial of the passed number.
// 2.2. Other one to calculate the nCr using above expression and using factorial function.

//  5! = 5 X 4 X 3 X 2 X 1 = 120
int factorial(int n)
{
    long long answer = 1;
    int copyN = n;

    for (int i = n; i != 0; i--)
    {
        answer = answer * copyN;
        copyN = copyN - 1;
    }
    return answer;
}

// nCr = n!/(r!(n-r)!)
int nCr(int n, int r)
{

    long long numerator = factorial(n);
    long long denominator = factorial(r) * factorial(n - r);
    long long answer = numerator / denominator;

    return answer;
}

int main()
{
    int n, r;
    cout << "Provide the value of n and r to calculate the nCr: ";
    cin >> n >> r;

    if (n < r)
    {
        cout << "n must be greater than r" << endl;
        return 0;
    }

    long long answer = nCr(n, r);

    cout << "nCr for the given values of " << n << " and " << r << " are: " << answer << endl;

    return 0;
}
