grammar RickLang;
program: declList;
declList: decl declList | decl;
decl: varDecl | funDecl;

varDecl: LET varDeclList;
varDeclList: varDeclList ',' varDeclInit | varDeclInit;
varDeclInit: varDeclId ASSIGN simpleExp | varDeclId;
varDeclId: ID;

funDecl: FUN ID params stmt;
params: ID ',' params | ID;

stmt: expStmt
    | compoundStmt
    | selectStmt
    | iterStmt
    | returnStmt
    | tryStmt
    | importStmt
    | breakStmt
    | continueStmt;
expStmt: exp;
compoundStmt: '{' stmtList '}';
stmtList: stmtList stmt | stmt;
selectStmt: IF simpleExp THEN stmt END;
iterStmt: WHILE simpleExp THEN stmt END;
returnStmt: RETURNOP exp RETURNCL;
tryStmt: TRY stmt CATCH ID THEN stmt END;
importStmt: IMPORTOP ID IMPORTCL;
breakStmt: BREAK;
continueStmt: CONTINUE;

exp: mutable ASSIGN exp
   | mutable '+=' exp
   | mutable '-=' exp
   | mutable '*=' exp
   | mutable '/=' exp
   | mutable '++'
   | mutable '--'
   | simpleExp;

simpleExp: simpleExp 'or' andExp | andExp;
andExp: andExp 'and' unaryRelExp | unaryRelExp;
unaryRelExp: 'not' unaryRelExp | relExp;
relExp: minmaxExp relop minmaxExp | minmaxExp;
relop: 'islessthan'
     | 'islessthanorequalto'
     | 'isgreaterthan'
     | 'isgreaterthanorequalto'
     | 'is'
     | 'aint';
minmaxExp: minmaxExp minmaxop sumExp | sumExp;
minmaxop: ':>:' | ':<:';
sumExp: sumExp sumop mulExp | mulExp;
sumop: '+' | '-';
mulExp: mulExp mulop unaryExp | unaryExp;
mulop: '*' | '/';
unaryExp: unaryop unaryExp | factor;
unaryop: '-' | '*' | '?';
factor: mutable | immutable;
mutable: ID | ID '[' exp ']' | ID ('.' ID)*;
immutable: call | const | array | object | '(' exp ')';

call: ID '(' args ')';
args: args ',' exp | exp;
array: '[' arrayInit ']';
arrayInit: arrayInit ',' exp | exp;
object: '{' objectInit '}';
objectInit: objectInit ',' objectField | objectField;
objectField: ID ':' exp;
const: NUMCONST | STRINGCONST | 'true' | 'false';

LETTER: [a-zA-Z];
DIGITS: [0-9];
LETDIG: LETTER | DIGITS;
ID: LETTER LETDIG*;
NUMCONST: DIGITS+;
STRINGCONST: QUOTES LETTER* QUOTES;

QUOTES: '"' | '\'';
WS: [ \n\t]+ -> skip;
COMMENT: '//' .*? '\n' -> skip;
INLINECOMMENT: '/*' .*? '*/' -> skip;

LET: 'give';
ASSIGN: 'up';
FUN: 'gonna';
THEN: 'then';
IF: 'andifuaskmehowimfeeling';
END: 'saygoodbye';
RETURNOP: 'whenigivemy';
RETURNCL: 'itwillbecompletely';
WHILE: 'togetherforeverwith';
TRY: 'thereaintnomistaking';
CATCH: 'iftheyevergetudown';
IMPORTOP: 'weknowthe';
IMPORTCL: 'andwe\'regonnaplayit';
BREAK: 'desertu';
CONTINUE: 'runaround';