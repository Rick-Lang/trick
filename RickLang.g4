grammar RickLang;
import RLTokens;

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

stmtList: (statement)*;

importStmt
        : IMPORTOP fName=STRINGCONST IMPORTCL 'as' fAlias=ID
        ;

funStmt
        : FUN funName=ID LPAREN funParams=exprList? RPAREN LBRACE funBlock=stmtList RBRACE
        ;

varStmt
        : LET varName=ID (ASSIGN varVal=expr)?
        ;

ifStmt
        : IF ifCondition=expr THEN LBRACE ifBlock=stmtList RBRACE (ELSE LBRACE elseBlock=stmtList RBRACE)?
        ;

whileStmt
        : WHILE whileCondition=expr LBRACE whileBlock=stmtList RBRACE
        ;

tryStmt
        : TRY LBRACE tryBlock=stmtList RBRACE
        ;

catchStmt
        : CATCH errName=ID LBRACE catchBlock=stmtList RBRACE
        ;

breakStmt
        : BREAK
        ;

continueStmt
        : CONTINUE
        ;

printStmt
        : PRINT printVal=expr
        ;

returnStmt
        : RETURNOP returnVal=expr RETURNCL
        ;

exprStmt
        : expr
        ;

expr
    : left=mutable op=ASSIGN right=expr
    | left=mutable op='+='   right=expr
    | left=mutable op='-='   right=expr
    | left=mutable op='*='   right=expr
    | left=mutable op='/='   right=expr
    | left=mutable op='++'
    | left=mutable op='--'
    | simpleExpr
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