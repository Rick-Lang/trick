lexer grammar RLTokens;

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
