#include <stdio.h>
#include <stdlib.h>

// # 4. Return Structure Variable from a function.
// ---

struct point {
    int x;
    int y;
};

struct point edit(struct point P) {
    P.x = P.x + 1;
    P.y = P.y + 5;
    return P;
}

void printPoint(struct point P) {
    printf("%d %d\n", P.x, P.y);
}

int main() {
    struct point P1 = {23, 45};
    struct point P2 = {56, 90};

    P1 = edit(P1);
    P2 = edit(P2);

    printPoint(P1);
    printPoint(P2);

    return 0;
}
