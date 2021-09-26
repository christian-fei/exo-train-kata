Given a string representation of a train, print an ASCII-art representation of this train.

```
H: locomotive <HHHH
P: passenger car |OOOO|
Cars are attached together by ::
```

```
HPP —> <HHHH::|OOOO|::|OOOO|
```

```
R: restaurant car |hThT|
HPRP —> <HHHH::|OOOO|::|hThT|::|OOOO|
```

```
H: locomotive attached at the end HHHH>
HPRPH —> <HHHH::|OOOO|::|hThT|::|OOOO|::HHHH>
```

A car can be deatached from the head or the end of the train

```
HPRPH —> <HHHH::|OOOO|::|hThT|::|OOOO|::HHHH>
—> detachEnd —> <HHHH::|OOOO|::|hThT|::|OOOO|
—> detachHead —> |OOOO|::|hThT|::|OOOO|
```

```
C: cargo car |____| (when empty) |^^^^| (when full)
HCCC —> <HHHH::|____|::|____|::|____|
—> fill —> <HHHH::|^^^^|::|____|::|____|
—> fill —> <HHHH::|^^^^|::|^^^^|::|____|
—> fill —> <HHHH::|^^^^|::|^^^^|::|^^^^|
—> fill —> error: cannot fill a full train
```