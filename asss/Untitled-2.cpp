
int checkCPU()
{
    union w{
        int a;
        char b;
    }c;

    c.a = 1;
    return (c.b == 1);
}

int main()
{
    printf("This CPU is %s\n", checkCPU() ? "little" : "big");
    return 0;
}