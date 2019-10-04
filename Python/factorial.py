def factorial(numero):
    if numero == 0:
        return  1
    return numero * factorial(numero -1)


if __name__ == '__main__':
    number = int(input("Escribe un numero: "))

    result = factorial(number)
    print("El factorial de {} es {} " .format(number,result))
