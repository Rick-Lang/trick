grammar RickLang;

@header {
    package src.lib;
}

WS: [ \n\t]+ -> skip;
COMMENT: '//' .*? '\n' -> skip;
INLINECOMMENT: '/*' .*? '*/' -> skip;

LET: 'give';
ASSIGN: 'up';
FUN: 'gonna';
THEN: 'then';
IF: 'andifuaskmehowimfeeling';
ELSE: 'wheneveryouneedsomebody';
RETURNOP: 'whenigivemy';
RETURNCL: 'itwillbecompletely';
WHILE: 'togetherforeverwith';
TRY: 'thereaintnomistaking';
CATCH: 'iftheyevergetudown';
IMPORTOP: 'weknowthe';
IMPORTCL: 'andwe\'regonnaplayit';
BREAK: 'desertu';
CONTINUE: 'runaround';
PRINT: 'ijustwannatelluhowimfeeling';

GT: 'greaterthan';
LT: 'lessthan';
GE: 'greaterthanequalto';
LE: 'lessthanequalto';
EQ: 'is';
NE: 'aint';
AND: 'and';
OR: 'or';
NOT: 'not';

PLUS: '+';
MINUS: '-';
MULT: '*';
DIV: '/';
MOD: '%';
POW: '^';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACKET: '[';
RBRACKET: ']';
COMMA: ',';
QUOTES: '"' | '\'';

ID: [a-zA-Z_][a-zA-Z0-9_]*;
NUMCONST: [0-9]+ ('.' [0-9]+)?;
STRINGCONST: '"' .*? '"' | '\'' .*? '\'';

program: (statement)*;

statement
        : importStmt
        | funStmt
        | ifStmt
        | whileStmt
        | tryStmt
        | catchStmt
        | breakStmt
        | continueStmt
        | printStmt
        | returnStmt
        | exprStmt
        | varStmt
        ;

importStmt
        : IMPORTOP STRINGCONST IMPORTCL 'as' ID
        ;

funStmt
        : FUN ID LPAREN (exprList)? RPAREN LBRACE (statement)* RBRACE
        ;

varStmt
        : LET ID (ASSIGN expr)?
        ;

ifStmt
        : IF expr THEN LBRACE (statement)* RBRACE (ELSE LBRACE (statement)* RBRACE)?
        ;

whileStmt
        : WHILE expr LBRACE (statement)* RBRACE
        ;

tryStmt
        : TRY LBRACE (statement)* RBRACE
        ;

catchStmt
        : CATCH ID LBRACE (statement)* RBRACE
        ;

breakStmt
        : BREAK
        ;

continueStmt
        : CONTINUE
        ;

printStmt
        : PRINT expr
        ;

returnStmt
        : RETURNOP expr RETURNCL
        ;

exprStmt
        : expr
        ;

expr
    : left=mutable op=ASSIGN right=expr # AssignExpr
    | left=mutable op='+='   right=expr # AddAssignExpr
    | left=mutable op='-='   right=expr # SubAssignExpr
    | left=mutable op='*='   right=expr # MulAssignExpr
    | left=mutable op='/='   right=expr # DivAssignExpr
    | left=mutable op='++'              # IncExpr
    | left=mutable op='--'              # DecExpr
    | simpleExpr                        # SimpleExpr_
    ;

exprList
    : expr (COMMA expr)*
    ;

simpleExpr
    : simpleExpr OR andExpr
    | andExpr
    ;

andExpr
    : andExpr AND unaryRelExpr
    | unaryRelExpr
    ;

unaryRelExpr
    : NOT unaryExpr
    | relExpr
    ;

relExpr
    : left=relExpr op=GT right=addExpr
    | left=relExpr op=LT right=addExpr
    | left=relExpr op=GE right=addExpr
    | left=relExpr op=LE right=addExpr
    | left=relExpr op=EQ right=addExpr
    | left=relExpr op=NE right=addExpr
    | addExpr
    ;

addExpr
    : addExpr PLUS multExpr
    | addExpr MINUS multExpr
    | multExpr
    ;

multExpr
    : multExpr MULT unaryExpr
    | multExpr DIV unaryExpr
    | multExpr MOD unaryExpr
    | powExpr
    ;

powExpr
    : powExpr POW unaryExpr
    | unaryExpr
    ;

unaryExpr
    : unaryOp unaryExpr
    | factor
    ;

unaryOp
    : '++'
    | '--'
    ;

factor
    : immutable
    | mutable
    ;

mutable
    : ID
    | ID LBRACKET expr RBRACKET
    ;

immutable
    : LPAREN expr RPAREN
    | call
    | constant
    ;

call
    : ID LPAREN (exprList)? RPAREN
    ;

constant
    : NUMCONST
    | STRINGCONST
    | 'true'
    | 'false'
    ;