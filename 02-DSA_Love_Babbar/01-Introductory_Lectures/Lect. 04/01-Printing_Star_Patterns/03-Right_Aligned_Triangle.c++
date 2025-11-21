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
        // Printing empty spaces.
        while (j < (n - i + 1))
        {
            cout << " ";
            j++;
        }

        // Printing Pattern.
        int print = 1;
        // int print1 = n;
        while (j >= (n - i + 1))
        {
            cout << print++;
            // cout << j;
            // cout<< i;
            // cout << "*";
            // cout << print1--;
            if (j == n)
            {
                break;
            }
            j++;
        }
        cout << endl;
        i++;
    }
    return 0;
};
