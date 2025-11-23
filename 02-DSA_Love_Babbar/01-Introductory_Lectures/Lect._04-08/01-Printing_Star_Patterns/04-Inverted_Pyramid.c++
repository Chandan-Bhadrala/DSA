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
        // Printing Pattern command.
        while (j <= n)
            if (j >= i)
            {
                cout << j << " ";
                j++;
            }
            else
            {
                (cout << " ");
                j++;
            }
        cout << endl;
        i++;
    };
    return 0;
}