internal class Program
{
    static void Main(string[] args)
    {

        NarysujProstokat();
    }

    static void NarysujProstokat()
    {
        // WYŚWIETL W KONSOLI PROSTOKĄT O SZEROKOŚCI X ORAZ WYSOKOŚCI Y
        // X ORAZ Y PODAJE UŻYTKOWNIK, PROSTOKĄT ZBUDOWANY JEST Z "*"
        Console.Write("Podaj szerokość: ");
        string xs = Console.ReadLine();
        Console.Write("Podaj wysokość: ");
        string ys = Console.ReadLine();
        int x = int.Parse(xs);

        int y = int.Parse(ys);

        for (int i = 0; i < y; i++)
        {
            for (int j = 0; j < x; j++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }

        Console.ReadKey();
}

static void ZgadnijLiczbe()
    {

        Random rnd = new Random();
        int los = rnd.Next(1, 11);
        int mojaLiczba;
        int ileRazy = 0;
        Console.WriteLine("Zgadnij liczbę z zakresu 1-10");

        do
        {
            Console.Write("Podaj liczbę: ");
            mojaLiczba = int.Parse(Console.ReadLine());

            if (mojaLiczba > 10 || mojaLiczba < 1)
            {
                Console.WriteLine("Liczba z poza zakresu");
            }
            else
            {
                ileRazy++;

                if (mojaLiczba > los)
                {
                    Console.WriteLine("Podałeś zbyt dużą liczbę!");
                }
                else if (mojaLiczba < los)
                {
                    Console.WriteLine("Podałeś zbyt małą liczbę!");
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine("Brawo odgadłeś moją liczbę!!! Za {0} razem", ileRazy);
                }
            }
        } while (los != mojaLiczba);
         
        Console.ReadKey();
    }       
}

