# Design Patterns


## Interceptor

``` python
from functools import wraps


def iterceptor(func):
    print('this is executed at function definition time (def my_func)')

    @wraps(func)
    def wrapper(*args, **kwargs):
        print('this is executed before function call')
        result = func(*args, **kwargs)
        print('this is executed after function call')
        return result

    return wrapper


@iterceptor
def my_func(n):
    print('this is my_func')
    print('n =', n)


my_func(4)
```

## Facade