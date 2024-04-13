# Iterable

Iterables has `__iter__` and can be used in `for` loops.

??? Note "How to flatten [1,2,3, range(3), [1,2,3]]‍‌‍‌‍‍‍‌‍‌‍‌‍‍‌‍‍‍‍‍?"
    === "Question"
        Write a function to flatten [1,2,3, range(3), [1,2,3]]‍‌‍‌‍‍‍‌‍‌‍‌‍‍‌‍‍‍‍‍.
    === "Solution"
        ```Python
        def flatten(arr):
            for item in arr:
                if getattr(item, '__iter__', None):
                    for x in item:
                        yield x
                else:
                    yield item
        ```