#include <iostream>
using namespace std;

// Efficient nCr using multiplicative formula.
// This way we are not calling factorial function 3 times.
// In my function, calling 20! is even a big task.
// In this ChatGPT function, calling 60! is even possible.
// And I checked my function can't work for value of n = 120 and r = 52.
// However, ChatGPT function can work for value of n = 120 and r = 52.

long long nCr(int n, int r)
{
    if (r > n)
        return 0;
    if (r == 0 || r == n)
        return 1;

    // nCr is same as nC(n-r), choose smaller r for less computation
    if (r > n - r)
        r = n - r;

    long long answer = 1;

    for (int i = 1; i <= r; i++)
    {
        answer = answer * (n - r + i);
        answer = answer / i;
    }

    return answer;
}

int main()
{
    int n, r;
    cout << "Provide value of n and r to calculate nCr: ";
    cin >> n >> r;

    cout << "nCr(" << n << ", " << r << ") = " << nCr(n, r) << endl;

    return 0;
}
