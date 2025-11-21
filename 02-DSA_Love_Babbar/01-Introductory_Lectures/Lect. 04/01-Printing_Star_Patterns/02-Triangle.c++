#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "Enter the number of rows: ";
    cin >> n;
    int i = 1;
    while (i <= n)
    {
        int j = 1;
        while (j <= i) // Only change is here, only printing at column places equal to i.
        {
            cout << j << " ";
            j++;
        }
        cout << endl;
        i++;
    };
    return 0;
}