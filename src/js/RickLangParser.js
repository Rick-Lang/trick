// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RickLangListener from './RickLangListener.js';
const serializedATN = [4,1,58,393,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,1,0,1,0,1,1,1,1,1,1,1,1,3,1,97,8,1,1,2,1,2,
3,2,101,8,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,112,8,4,10,4,12,4,115,
9,4,1,5,1,5,1,5,1,5,1,5,3,5,122,8,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,
1,8,1,8,3,8,135,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,146,8,9,1,10,
1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,5,12,159,8,12,10,12,12,
12,162,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,
1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,
17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,3,20,223,8,20,1,21,1,21,1,21,1,21,1,21,1,21,5,21,231,8,
21,10,21,12,21,234,9,21,1,22,1,22,1,22,1,22,1,22,1,22,5,22,242,8,22,10,22,
12,22,245,9,22,1,23,1,23,1,23,3,23,250,8,23,1,24,1,24,1,24,1,24,1,24,3,24,
257,8,24,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,268,8,26,10,26,
12,26,271,9,26,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,5,28,282,8,28,
10,28,12,28,285,9,28,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,296,
8,30,10,30,12,30,299,9,30,1,31,1,31,1,32,1,32,1,32,1,32,3,32,307,8,32,1,
33,1,33,1,34,1,34,3,34,313,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,5,35,324,8,35,10,35,12,35,327,9,35,3,35,329,8,35,1,36,1,36,1,36,1,36,
1,36,1,36,1,36,1,36,3,36,339,8,36,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,
1,38,1,38,1,38,5,38,352,8,38,10,38,12,38,355,9,38,1,39,1,39,1,39,1,39,1,
40,1,40,1,40,1,40,1,40,1,40,5,40,367,8,40,10,40,12,40,370,9,40,1,41,1,41,
1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,5,42,382,8,42,10,42,12,42,385,9,
42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,0,10,8,24,42,44,52,56,60,76,80,84,
45,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,0,6,1,0,13,18,
1,0,19,20,1,0,21,22,1,0,23,24,2,0,22,23,25,25,2,0,32,33,38,39,387,0,90,1,
0,0,0,2,96,1,0,0,0,4,100,1,0,0,0,6,102,1,0,0,0,8,105,1,0,0,0,10,121,1,0,
0,0,12,123,1,0,0,0,14,125,1,0,0,0,16,134,1,0,0,0,18,145,1,0,0,0,20,147,1,
0,0,0,22,149,1,0,0,0,24,153,1,0,0,0,26,163,1,0,0,0,28,169,1,0,0,0,30,175,
1,0,0,0,32,179,1,0,0,0,34,187,1,0,0,0,36,191,1,0,0,0,38,193,1,0,0,0,40,222,
1,0,0,0,42,224,1,0,0,0,44,235,1,0,0,0,46,249,1,0,0,0,48,256,1,0,0,0,50,258,
1,0,0,0,52,260,1,0,0,0,54,272,1,0,0,0,56,274,1,0,0,0,58,286,1,0,0,0,60,288,
1,0,0,0,62,300,1,0,0,0,64,306,1,0,0,0,66,308,1,0,0,0,68,312,1,0,0,0,70,328,
1,0,0,0,72,338,1,0,0,0,74,340,1,0,0,0,76,345,1,0,0,0,78,356,1,0,0,0,80,360,
1,0,0,0,82,371,1,0,0,0,84,375,1,0,0,0,86,386,1,0,0,0,88,390,1,0,0,0,90,91,
3,2,1,0,91,1,1,0,0,0,92,93,3,4,2,0,93,94,3,2,1,0,94,97,1,0,0,0,95,97,3,4,
2,0,96,92,1,0,0,0,96,95,1,0,0,0,97,3,1,0,0,0,98,101,3,6,3,0,99,101,3,14,
7,0,100,98,1,0,0,0,100,99,1,0,0,0,101,5,1,0,0,0,102,103,5,44,0,0,103,104,
3,8,4,0,104,7,1,0,0,0,105,106,6,4,-1,0,106,107,3,10,5,0,107,113,1,0,0,0,
108,109,10,2,0,0,109,110,5,1,0,0,110,112,3,10,5,0,111,108,1,0,0,0,112,115,
1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,9,1,0,0,0,115,113,1,0,0,0,116,
117,3,12,6,0,117,118,5,45,0,0,118,119,3,42,21,0,119,122,1,0,0,0,120,122,
3,12,6,0,121,116,1,0,0,0,121,120,1,0,0,0,122,11,1,0,0,0,123,124,5,37,0,0,
124,13,1,0,0,0,125,126,5,46,0,0,126,127,5,37,0,0,127,128,3,16,8,0,128,129,
3,18,9,0,129,15,1,0,0,0,130,131,5,37,0,0,131,132,5,1,0,0,132,135,3,16,8,
0,133,135,5,37,0,0,134,130,1,0,0,0,134,133,1,0,0,0,135,17,1,0,0,0,136,146,
3,20,10,0,137,146,3,22,11,0,138,146,3,26,13,0,139,146,3,28,14,0,140,146,
3,30,15,0,141,146,3,32,16,0,142,146,3,34,17,0,143,146,3,36,18,0,144,146,
3,38,19,0,145,136,1,0,0,0,145,137,1,0,0,0,145,138,1,0,0,0,145,139,1,0,0,
0,145,140,1,0,0,0,145,141,1,0,0,0,145,142,1,0,0,0,145,143,1,0,0,0,145,144,
1,0,0,0,146,19,1,0,0,0,147,148,3,40,20,0,148,21,1,0,0,0,149,150,5,2,0,0,
150,151,3,24,12,0,151,152,5,3,0,0,152,23,1,0,0,0,153,154,6,12,-1,0,154,155,
3,18,9,0,155,160,1,0,0,0,156,157,10,2,0,0,157,159,3,18,9,0,158,156,1,0,0,
0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,25,1,0,0,0,162,160,
1,0,0,0,163,164,5,48,0,0,164,165,3,42,21,0,165,166,5,47,0,0,166,167,3,18,
9,0,167,168,5,49,0,0,168,27,1,0,0,0,169,170,5,52,0,0,170,171,3,42,21,0,171,
172,5,47,0,0,172,173,3,18,9,0,173,174,5,49,0,0,174,29,1,0,0,0,175,176,5,
50,0,0,176,177,3,40,20,0,177,178,5,51,0,0,178,31,1,0,0,0,179,180,5,53,0,
0,180,181,3,18,9,0,181,182,5,54,0,0,182,183,5,37,0,0,183,184,5,47,0,0,184,
185,3,18,9,0,185,186,5,49,0,0,186,33,1,0,0,0,187,188,5,55,0,0,188,189,5,
37,0,0,189,190,5,56,0,0,190,35,1,0,0,0,191,192,5,57,0,0,192,37,1,0,0,0,193,
194,5,58,0,0,194,39,1,0,0,0,195,196,3,70,35,0,196,197,5,45,0,0,197,198,3,
40,20,0,198,223,1,0,0,0,199,200,3,70,35,0,200,201,5,4,0,0,201,202,3,40,20,
0,202,223,1,0,0,0,203,204,3,70,35,0,204,205,5,5,0,0,205,206,3,40,20,0,206,
223,1,0,0,0,207,208,3,70,35,0,208,209,5,6,0,0,209,210,3,40,20,0,210,223,
1,0,0,0,211,212,3,70,35,0,212,213,5,7,0,0,213,214,3,40,20,0,214,223,1,0,
0,0,215,216,3,70,35,0,216,217,5,8,0,0,217,223,1,0,0,0,218,219,3,70,35,0,
219,220,5,9,0,0,220,223,1,0,0,0,221,223,3,42,21,0,222,195,1,0,0,0,222,199,
1,0,0,0,222,203,1,0,0,0,222,207,1,0,0,0,222,211,1,0,0,0,222,215,1,0,0,0,
222,218,1,0,0,0,222,221,1,0,0,0,223,41,1,0,0,0,224,225,6,21,-1,0,225,226,
3,44,22,0,226,232,1,0,0,0,227,228,10,2,0,0,228,229,5,10,0,0,229,231,3,44,
22,0,230,227,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,
43,1,0,0,0,234,232,1,0,0,0,235,236,6,22,-1,0,236,237,3,46,23,0,237,243,1,
0,0,0,238,239,10,2,0,0,239,240,5,11,0,0,240,242,3,46,23,0,241,238,1,0,0,
0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,45,1,0,0,0,245,243,
1,0,0,0,246,247,5,12,0,0,247,250,3,46,23,0,248,250,3,48,24,0,249,246,1,0,
0,0,249,248,1,0,0,0,250,47,1,0,0,0,251,252,3,52,26,0,252,253,3,50,25,0,253,
254,3,52,26,0,254,257,1,0,0,0,255,257,3,52,26,0,256,251,1,0,0,0,256,255,
1,0,0,0,257,49,1,0,0,0,258,259,7,0,0,0,259,51,1,0,0,0,260,261,6,26,-1,0,
261,262,3,56,28,0,262,269,1,0,0,0,263,264,10,2,0,0,264,265,3,54,27,0,265,
266,3,56,28,0,266,268,1,0,0,0,267,263,1,0,0,0,268,271,1,0,0,0,269,267,1,
0,0,0,269,270,1,0,0,0,270,53,1,0,0,0,271,269,1,0,0,0,272,273,7,1,0,0,273,
55,1,0,0,0,274,275,6,28,-1,0,275,276,3,60,30,0,276,283,1,0,0,0,277,278,10,
2,0,0,278,279,3,58,29,0,279,280,3,60,30,0,280,282,1,0,0,0,281,277,1,0,0,
0,282,285,1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,57,1,0,0,0,285,283,
1,0,0,0,286,287,7,2,0,0,287,59,1,0,0,0,288,289,6,30,-1,0,289,290,3,64,32,
0,290,297,1,0,0,0,291,292,10,2,0,0,292,293,3,62,31,0,293,294,3,64,32,0,294,
296,1,0,0,0,295,291,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,
0,0,298,61,1,0,0,0,299,297,1,0,0,0,300,301,7,3,0,0,301,63,1,0,0,0,302,303,
3,66,33,0,303,304,3,64,32,0,304,307,1,0,0,0,305,307,3,68,34,0,306,302,1,
0,0,0,306,305,1,0,0,0,307,65,1,0,0,0,308,309,7,4,0,0,309,67,1,0,0,0,310,
313,3,70,35,0,311,313,3,72,36,0,312,310,1,0,0,0,312,311,1,0,0,0,313,69,1,
0,0,0,314,329,5,37,0,0,315,316,5,37,0,0,316,317,5,26,0,0,317,318,3,40,20,
0,318,319,5,27,0,0,319,329,1,0,0,0,320,325,5,37,0,0,321,322,5,28,0,0,322,
324,5,37,0,0,323,321,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,325,326,1,0,
0,0,326,329,1,0,0,0,327,325,1,0,0,0,328,314,1,0,0,0,328,315,1,0,0,0,328,
320,1,0,0,0,329,71,1,0,0,0,330,339,3,74,37,0,331,339,3,88,44,0,332,339,3,
78,39,0,333,339,3,82,41,0,334,335,5,29,0,0,335,336,3,40,20,0,336,337,5,30,
0,0,337,339,1,0,0,0,338,330,1,0,0,0,338,331,1,0,0,0,338,332,1,0,0,0,338,
333,1,0,0,0,338,334,1,0,0,0,339,73,1,0,0,0,340,341,5,37,0,0,341,342,5,29,
0,0,342,343,3,76,38,0,343,344,5,30,0,0,344,75,1,0,0,0,345,346,6,38,-1,0,
346,347,3,40,20,0,347,353,1,0,0,0,348,349,10,2,0,0,349,350,5,1,0,0,350,352,
3,40,20,0,351,348,1,0,0,0,352,355,1,0,0,0,353,351,1,0,0,0,353,354,1,0,0,
0,354,77,1,0,0,0,355,353,1,0,0,0,356,357,5,26,0,0,357,358,3,80,40,0,358,
359,5,27,0,0,359,79,1,0,0,0,360,361,6,40,-1,0,361,362,3,40,20,0,362,368,
1,0,0,0,363,364,10,2,0,0,364,365,5,1,0,0,365,367,3,40,20,0,366,363,1,0,0,
0,367,370,1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,81,1,0,0,0,370,368,
1,0,0,0,371,372,5,2,0,0,372,373,3,84,42,0,373,374,5,3,0,0,374,83,1,0,0,0,
375,376,6,42,-1,0,376,377,3,86,43,0,377,383,1,0,0,0,378,379,10,2,0,0,379,
380,5,1,0,0,380,382,3,86,43,0,381,378,1,0,0,0,382,385,1,0,0,0,383,381,1,
0,0,0,383,384,1,0,0,0,384,85,1,0,0,0,385,383,1,0,0,0,386,387,5,37,0,0,387,
388,5,31,0,0,388,389,3,40,20,0,389,87,1,0,0,0,390,391,7,5,0,0,391,89,1,0,
0,0,23,96,100,113,121,134,145,160,222,232,243,249,256,269,283,297,306,312,
325,328,338,353,368,383];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RickLangParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "','", "'{'", "'}'", "'+='", "'-='", "'*='", 
                            "'/='", "'++'", "'--'", "'or'", "'and'", "'not'", 
                            "'islessthan'", "'islessthanorequalto'", "'isgreaterthan'", 
                            "'isgreaterthanorequalto'", "'is'", "'aint'", 
                            "':>:'", "':<:'", "'+'", "'-'", "'*'", "'/'", 
                            "'?'", "'['", "']'", "'.'", "'('", "')'", "':'", 
                            "'true'", "'false'", null, null, null, null, 
                            null, null, null, null, null, null, "'give'", 
                            "'up'", "'gonna'", "'then'", "'andifuaskmehowimfeeling'", 
                            "'saygoodbye'", "'whenigivemy'", "'itwillbecompletely'", 
                            "'togetherforeverwith'", "'thereaintnomistaking'", 
                            "'iftheyevergetudown'", "'weknowthe'", "'andwe'regonnaplayit'", 
                            "'desertu'", "'runaround'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "LETTER", "DIGITS", "LETDIG", "ID", 
                             "NUMCONST", "STRINGCONST", "QUOTES", "WS", 
                             "COMMENT", "INLINECOMMENT", "LET", "ASSIGN", 
                             "FUN", "THEN", "IF", "END", "RETURNOP", "RETURNCL", 
                             "WHILE", "TRY", "CATCH", "IMPORTOP", "IMPORTCL", 
                             "BREAK", "CONTINUE" ];
    static ruleNames = [ "program", "declList", "decl", "varDecl", "varDeclList", 
                         "varDeclInit", "varDeclId", "funDecl", "params", 
                         "stmt", "expStmt", "compoundStmt", "stmtList", 
                         "selectStmt", "iterStmt", "returnStmt", "tryStmt", 
                         "importStmt", "breakStmt", "continueStmt", "exp", 
                         "simpleExp", "andExp", "unaryRelExp", "relExp", 
                         "relop", "minmaxExp", "minmaxop", "sumExp", "sumop", 
                         "mulExp", "mulop", "unaryExp", "unaryop", "factor", 
                         "mutable", "immutable", "call", "args", "array", 
                         "arrayInit", "object", "objectInit", "objectField", 
                         "const" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RickLangParser.ruleNames;
        this.literalNames = RickLangParser.literalNames;
        this.symbolicNames = RickLangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.varDeclList_sempred(localctx, predIndex);
    	case 12:
    	    		return this.stmtList_sempred(localctx, predIndex);
    	case 21:
    	    		return this.simpleExp_sempred(localctx, predIndex);
    	case 22:
    	    		return this.andExp_sempred(localctx, predIndex);
    	case 26:
    	    		return this.minmaxExp_sempred(localctx, predIndex);
    	case 28:
    	    		return this.sumExp_sempred(localctx, predIndex);
    	case 30:
    	    		return this.mulExp_sempred(localctx, predIndex);
    	case 38:
    	    		return this.args_sempred(localctx, predIndex);
    	case 40:
    	    		return this.arrayInit_sempred(localctx, predIndex);
    	case 42:
    	    		return this.objectInit_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    varDeclList_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    stmtList_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    simpleExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    andExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    minmaxExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    sumExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    mulExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 6:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    args_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 7:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arrayInit_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    objectInit_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 9:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RickLangParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.declList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declList() {
	    let localctx = new DeclListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RickLangParser.RULE_declList);
	    try {
	        this.state = 96;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.decl();
	            this.state = 93;
	            this.declList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.decl();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RickLangParser.RULE_decl);
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.varDecl();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.funDecl();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDecl() {
	    let localctx = new VarDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RickLangParser.RULE_varDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(RickLangParser.LET);
	        this.state = 103;
	        this.varDeclList(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	varDeclList(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new VarDeclListContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, RickLangParser.RULE_varDeclList, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.varDeclInit();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 113;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new VarDeclListContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_varDeclList);
	                this.state = 108;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 109;
	                this.match(RickLangParser.T__0);
	                this.state = 110;
	                this.varDeclInit(); 
	            }
	            this.state = 115;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	varDeclInit() {
	    let localctx = new VarDeclInitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RickLangParser.RULE_varDeclInit);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.varDeclId();
	            this.state = 117;
	            this.match(RickLangParser.ASSIGN);
	            this.state = 118;
	            this.simpleExp(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.varDeclId();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDeclId() {
	    let localctx = new VarDeclIdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RickLangParser.RULE_varDeclId);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(RickLangParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funDecl() {
	    let localctx = new FunDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RickLangParser.RULE_funDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(RickLangParser.FUN);
	        this.state = 126;
	        this.match(RickLangParser.ID);
	        this.state = 127;
	        this.params();
	        this.state = 128;
	        this.stmt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RickLangParser.RULE_params);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.match(RickLangParser.ID);
	            this.state = 131;
	            this.match(RickLangParser.T__0);
	            this.state = 132;
	            this.params();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.match(RickLangParser.ID);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RickLangParser.RULE_stmt);
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.expStmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.compoundStmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 138;
	            this.selectStmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 139;
	            this.iterStmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 140;
	            this.returnStmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 141;
	            this.tryStmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 142;
	            this.importStmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 143;
	            this.breakStmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 144;
	            this.continueStmt();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expStmt() {
	    let localctx = new ExpStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, RickLangParser.RULE_expStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.exp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compoundStmt() {
	    let localctx = new CompoundStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, RickLangParser.RULE_compoundStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(RickLangParser.T__1);
	        this.state = 150;
	        this.stmtList(0);
	        this.state = 151;
	        this.match(RickLangParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	stmtList(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new StmtListContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, RickLangParser.RULE_stmtList, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.stmt();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 160;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new StmtListContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_stmtList);
	                this.state = 156;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 157;
	                this.stmt(); 
	            }
	            this.state = 162;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	selectStmt() {
	    let localctx = new SelectStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, RickLangParser.RULE_selectStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(RickLangParser.IF);
	        this.state = 164;
	        this.simpleExp(0);
	        this.state = 165;
	        this.match(RickLangParser.THEN);
	        this.state = 166;
	        this.stmt();
	        this.state = 167;
	        this.match(RickLangParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iterStmt() {
	    let localctx = new IterStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, RickLangParser.RULE_iterStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(RickLangParser.WHILE);
	        this.state = 170;
	        this.simpleExp(0);
	        this.state = 171;
	        this.match(RickLangParser.THEN);
	        this.state = 172;
	        this.stmt();
	        this.state = 173;
	        this.match(RickLangParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStmt() {
	    let localctx = new ReturnStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, RickLangParser.RULE_returnStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(RickLangParser.RETURNOP);
	        this.state = 176;
	        this.exp();
	        this.state = 177;
	        this.match(RickLangParser.RETURNCL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tryStmt() {
	    let localctx = new TryStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, RickLangParser.RULE_tryStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(RickLangParser.TRY);
	        this.state = 180;
	        this.stmt();
	        this.state = 181;
	        this.match(RickLangParser.CATCH);
	        this.state = 182;
	        this.match(RickLangParser.ID);
	        this.state = 183;
	        this.match(RickLangParser.THEN);
	        this.state = 184;
	        this.stmt();
	        this.state = 185;
	        this.match(RickLangParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStmt() {
	    let localctx = new ImportStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, RickLangParser.RULE_importStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(RickLangParser.IMPORTOP);
	        this.state = 188;
	        this.match(RickLangParser.ID);
	        this.state = 189;
	        this.match(RickLangParser.IMPORTCL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	breakStmt() {
	    let localctx = new BreakStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, RickLangParser.RULE_breakStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(RickLangParser.BREAK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	continueStmt() {
	    let localctx = new ContinueStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, RickLangParser.RULE_continueStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(RickLangParser.CONTINUE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, RickLangParser.RULE_exp);
	    try {
	        this.state = 222;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.mutable();
	            this.state = 196;
	            this.match(RickLangParser.ASSIGN);
	            this.state = 197;
	            this.exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.mutable();
	            this.state = 200;
	            this.match(RickLangParser.T__3);
	            this.state = 201;
	            this.exp();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 203;
	            this.mutable();
	            this.state = 204;
	            this.match(RickLangParser.T__4);
	            this.state = 205;
	            this.exp();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 207;
	            this.mutable();
	            this.state = 208;
	            this.match(RickLangParser.T__5);
	            this.state = 209;
	            this.exp();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 211;
	            this.mutable();
	            this.state = 212;
	            this.match(RickLangParser.T__6);
	            this.state = 213;
	            this.exp();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 215;
	            this.mutable();
	            this.state = 216;
	            this.match(RickLangParser.T__7);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 218;
	            this.mutable();
	            this.state = 219;
	            this.match(RickLangParser.T__8);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 221;
	            this.simpleExp(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	simpleExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SimpleExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, RickLangParser.RULE_simpleExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.andExp(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 232;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SimpleExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_simpleExp);
	                this.state = 227;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 228;
	                this.match(RickLangParser.T__9);
	                this.state = 229;
	                this.andExp(0); 
	            }
	            this.state = 234;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	andExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AndExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, RickLangParser.RULE_andExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.unaryRelExp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 243;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AndExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_andExp);
	                this.state = 238;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 239;
	                this.match(RickLangParser.T__10);
	                this.state = 240;
	                this.unaryRelExp(); 
	            }
	            this.state = 245;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unaryRelExp() {
	    let localctx = new UnaryRelExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, RickLangParser.RULE_unaryRelExp);
	    try {
	        this.state = 249;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.match(RickLangParser.T__11);
	            this.state = 247;
	            this.unaryRelExp();
	            break;
	        case 2:
	        case 22:
	        case 23:
	        case 25:
	        case 26:
	        case 29:
	        case 32:
	        case 33:
	        case 37:
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 248;
	            this.relExp();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relExp() {
	    let localctx = new RelExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, RickLangParser.RULE_relExp);
	    try {
	        this.state = 256;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 251;
	            this.minmaxExp(0);
	            this.state = 252;
	            this.relop();
	            this.state = 253;
	            this.minmaxExp(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            this.minmaxExp(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relop() {
	    let localctx = new RelopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, RickLangParser.RULE_relop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 516096) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	minmaxExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MinmaxExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 52;
	    this.enterRecursionRule(localctx, 52, RickLangParser.RULE_minmaxExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.sumExp(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 269;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new MinmaxExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_minmaxExp);
	                this.state = 263;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 264;
	                this.minmaxop();
	                this.state = 265;
	                this.sumExp(0); 
	            }
	            this.state = 271;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	minmaxop() {
	    let localctx = new MinmaxopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, RickLangParser.RULE_minmaxop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	sumExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SumExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 56;
	    this.enterRecursionRule(localctx, 56, RickLangParser.RULE_sumExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.mulExp(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 283;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SumExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_sumExp);
	                this.state = 277;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 278;
	                this.sumop();
	                this.state = 279;
	                this.mulExp(0); 
	            }
	            this.state = 285;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	sumop() {
	    let localctx = new SumopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, RickLangParser.RULE_sumop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	mulExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MulExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, RickLangParser.RULE_mulExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.unaryExp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 297;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new MulExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_mulExp);
	                this.state = 291;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 292;
	                this.mulop();
	                this.state = 293;
	                this.unaryExp(); 
	            }
	            this.state = 299;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	mulop() {
	    let localctx = new MulopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, RickLangParser.RULE_mulop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryExp() {
	    let localctx = new UnaryExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, RickLangParser.RULE_unaryExp);
	    try {
	        this.state = 306;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	        case 23:
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 302;
	            this.unaryop();
	            this.state = 303;
	            this.unaryExp();
	            break;
	        case 2:
	        case 26:
	        case 29:
	        case 32:
	        case 33:
	        case 37:
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.factor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryop() {
	    let localctx = new UnaryopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, RickLangParser.RULE_unaryop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 46137344) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, RickLangParser.RULE_factor);
	    try {
	        this.state = 312;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 310;
	            this.mutable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 311;
	            this.immutable();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mutable() {
	    let localctx = new MutableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, RickLangParser.RULE_mutable);
	    try {
	        this.state = 328;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 314;
	            this.match(RickLangParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 315;
	            this.match(RickLangParser.ID);
	            this.state = 316;
	            this.match(RickLangParser.T__25);
	            this.state = 317;
	            this.exp();
	            this.state = 318;
	            this.match(RickLangParser.T__26);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 320;
	            this.match(RickLangParser.ID);
	            this.state = 325;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 321;
	                    this.match(RickLangParser.T__27);
	                    this.state = 322;
	                    this.match(RickLangParser.ID); 
	                }
	                this.state = 327;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	immutable() {
	    let localctx = new ImmutableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, RickLangParser.RULE_immutable);
	    try {
	        this.state = 338;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 330;
	            this.call();
	            break;
	        case 32:
	        case 33:
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 331;
	            this.const_();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 332;
	            this.array();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 333;
	            this.object();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 334;
	            this.match(RickLangParser.T__28);
	            this.state = 335;
	            this.exp();
	            this.state = 336;
	            this.match(RickLangParser.T__29);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, RickLangParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(RickLangParser.ID);
	        this.state = 341;
	        this.match(RickLangParser.T__28);
	        this.state = 342;
	        this.args(0);
	        this.state = 343;
	        this.match(RickLangParser.T__29);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	args(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ArgsContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 76;
	    this.enterRecursionRule(localctx, 76, RickLangParser.RULE_args, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.exp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ArgsContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_args);
	                this.state = 348;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 349;
	                this.match(RickLangParser.T__0);
	                this.state = 350;
	                this.exp(); 
	            }
	            this.state = 355;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, RickLangParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(RickLangParser.T__25);
	        this.state = 357;
	        this.arrayInit(0);
	        this.state = 358;
	        this.match(RickLangParser.T__26);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	arrayInit(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ArrayInitContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 80;
	    this.enterRecursionRule(localctx, 80, RickLangParser.RULE_arrayInit, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.exp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 368;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ArrayInitContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_arrayInit);
	                this.state = 363;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 364;
	                this.match(RickLangParser.T__0);
	                this.state = 365;
	                this.exp(); 
	            }
	            this.state = 370;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, RickLangParser.RULE_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(RickLangParser.T__1);
	        this.state = 372;
	        this.objectInit(0);
	        this.state = 373;
	        this.match(RickLangParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	objectInit(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ObjectInitContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 84;
	    this.enterRecursionRule(localctx, 84, RickLangParser.RULE_objectInit, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.objectField();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 383;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ObjectInitContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_objectInit);
	                this.state = 378;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 379;
	                this.match(RickLangParser.T__0);
	                this.state = 380;
	                this.objectField(); 
	            }
	            this.state = 385;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	objectField() {
	    let localctx = new ObjectFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, RickLangParser.RULE_objectField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(RickLangParser.ID);
	        this.state = 387;
	        this.match(RickLangParser.T__30);
	        this.state = 388;
	        this.exp();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	const_() {
	    let localctx = new ConstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, RickLangParser.RULE_const);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        _la = this._input.LA(1);
	        if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 195) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RickLangParser.EOF = antlr4.Token.EOF;
RickLangParser.T__0 = 1;
RickLangParser.T__1 = 2;
RickLangParser.T__2 = 3;
RickLangParser.T__3 = 4;
RickLangParser.T__4 = 5;
RickLangParser.T__5 = 6;
RickLangParser.T__6 = 7;
RickLangParser.T__7 = 8;
RickLangParser.T__8 = 9;
RickLangParser.T__9 = 10;
RickLangParser.T__10 = 11;
RickLangParser.T__11 = 12;
RickLangParser.T__12 = 13;
RickLangParser.T__13 = 14;
RickLangParser.T__14 = 15;
RickLangParser.T__15 = 16;
RickLangParser.T__16 = 17;
RickLangParser.T__17 = 18;
RickLangParser.T__18 = 19;
RickLangParser.T__19 = 20;
RickLangParser.T__20 = 21;
RickLangParser.T__21 = 22;
RickLangParser.T__22 = 23;
RickLangParser.T__23 = 24;
RickLangParser.T__24 = 25;
RickLangParser.T__25 = 26;
RickLangParser.T__26 = 27;
RickLangParser.T__27 = 28;
RickLangParser.T__28 = 29;
RickLangParser.T__29 = 30;
RickLangParser.T__30 = 31;
RickLangParser.T__31 = 32;
RickLangParser.T__32 = 33;
RickLangParser.LETTER = 34;
RickLangParser.DIGITS = 35;
RickLangParser.LETDIG = 36;
RickLangParser.ID = 37;
RickLangParser.NUMCONST = 38;
RickLangParser.STRINGCONST = 39;
RickLangParser.QUOTES = 40;
RickLangParser.WS = 41;
RickLangParser.COMMENT = 42;
RickLangParser.INLINECOMMENT = 43;
RickLangParser.LET = 44;
RickLangParser.ASSIGN = 45;
RickLangParser.FUN = 46;
RickLangParser.THEN = 47;
RickLangParser.IF = 48;
RickLangParser.END = 49;
RickLangParser.RETURNOP = 50;
RickLangParser.RETURNCL = 51;
RickLangParser.WHILE = 52;
RickLangParser.TRY = 53;
RickLangParser.CATCH = 54;
RickLangParser.IMPORTOP = 55;
RickLangParser.IMPORTCL = 56;
RickLangParser.BREAK = 57;
RickLangParser.CONTINUE = 58;

RickLangParser.RULE_program = 0;
RickLangParser.RULE_declList = 1;
RickLangParser.RULE_decl = 2;
RickLangParser.RULE_varDecl = 3;
RickLangParser.RULE_varDeclList = 4;
RickLangParser.RULE_varDeclInit = 5;
RickLangParser.RULE_varDeclId = 6;
RickLangParser.RULE_funDecl = 7;
RickLangParser.RULE_params = 8;
RickLangParser.RULE_stmt = 9;
RickLangParser.RULE_expStmt = 10;
RickLangParser.RULE_compoundStmt = 11;
RickLangParser.RULE_stmtList = 12;
RickLangParser.RULE_selectStmt = 13;
RickLangParser.RULE_iterStmt = 14;
RickLangParser.RULE_returnStmt = 15;
RickLangParser.RULE_tryStmt = 16;
RickLangParser.RULE_importStmt = 17;
RickLangParser.RULE_breakStmt = 18;
RickLangParser.RULE_continueStmt = 19;
RickLangParser.RULE_exp = 20;
RickLangParser.RULE_simpleExp = 21;
RickLangParser.RULE_andExp = 22;
RickLangParser.RULE_unaryRelExp = 23;
RickLangParser.RULE_relExp = 24;
RickLangParser.RULE_relop = 25;
RickLangParser.RULE_minmaxExp = 26;
RickLangParser.RULE_minmaxop = 27;
RickLangParser.RULE_sumExp = 28;
RickLangParser.RULE_sumop = 29;
RickLangParser.RULE_mulExp = 30;
RickLangParser.RULE_mulop = 31;
RickLangParser.RULE_unaryExp = 32;
RickLangParser.RULE_unaryop = 33;
RickLangParser.RULE_factor = 34;
RickLangParser.RULE_mutable = 35;
RickLangParser.RULE_immutable = 36;
RickLangParser.RULE_call = 37;
RickLangParser.RULE_args = 38;
RickLangParser.RULE_array = 39;
RickLangParser.RULE_arrayInit = 40;
RickLangParser.RULE_object = 41;
RickLangParser.RULE_objectInit = 42;
RickLangParser.RULE_objectField = 43;
RickLangParser.RULE_const = 44;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_program;
    }

	declList() {
	    return this.getTypedRuleContext(DeclListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DeclListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_declList;
    }

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	declList() {
	    return this.getTypedRuleContext(DeclListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterDeclList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitDeclList(this);
		}
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_decl;
    }

	varDecl() {
	    return this.getTypedRuleContext(VarDeclContext,0);
	};

	funDecl() {
	    return this.getTypedRuleContext(FunDeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitDecl(this);
		}
	}


}



class VarDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_varDecl;
    }

	LET() {
	    return this.getToken(RickLangParser.LET, 0);
	};

	varDeclList() {
	    return this.getTypedRuleContext(VarDeclListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitVarDecl(this);
		}
	}


}



class VarDeclListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_varDeclList;
    }

	varDeclInit() {
	    return this.getTypedRuleContext(VarDeclInitContext,0);
	};

	varDeclList() {
	    return this.getTypedRuleContext(VarDeclListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterVarDeclList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitVarDeclList(this);
		}
	}


}



class VarDeclInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_varDeclInit;
    }

	varDeclId() {
	    return this.getTypedRuleContext(VarDeclIdContext,0);
	};

	ASSIGN() {
	    return this.getToken(RickLangParser.ASSIGN, 0);
	};

	simpleExp() {
	    return this.getTypedRuleContext(SimpleExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterVarDeclInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitVarDeclInit(this);
		}
	}


}



class VarDeclIdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_varDeclId;
    }

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterVarDeclId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitVarDeclId(this);
		}
	}


}



class FunDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_funDecl;
    }

	FUN() {
	    return this.getToken(RickLangParser.FUN, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	stmt() {
	    return this.getTypedRuleContext(StmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterFunDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitFunDecl(this);
		}
	}


}



class ParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_params;
    }

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitParams(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_stmt;
    }

	expStmt() {
	    return this.getTypedRuleContext(ExpStmtContext,0);
	};

	compoundStmt() {
	    return this.getTypedRuleContext(CompoundStmtContext,0);
	};

	selectStmt() {
	    return this.getTypedRuleContext(SelectStmtContext,0);
	};

	iterStmt() {
	    return this.getTypedRuleContext(IterStmtContext,0);
	};

	returnStmt() {
	    return this.getTypedRuleContext(ReturnStmtContext,0);
	};

	tryStmt() {
	    return this.getTypedRuleContext(TryStmtContext,0);
	};

	importStmt() {
	    return this.getTypedRuleContext(ImportStmtContext,0);
	};

	breakStmt() {
	    return this.getTypedRuleContext(BreakStmtContext,0);
	};

	continueStmt() {
	    return this.getTypedRuleContext(ContinueStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitStmt(this);
		}
	}


}



class ExpStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_expStmt;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterExpStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitExpStmt(this);
		}
	}


}



class CompoundStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_compoundStmt;
    }

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterCompoundStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitCompoundStmt(this);
		}
	}


}



class StmtListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_stmtList;
    }

	stmt() {
	    return this.getTypedRuleContext(StmtContext,0);
	};

	stmtList() {
	    return this.getTypedRuleContext(StmtListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterStmtList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitStmtList(this);
		}
	}


}



class SelectStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_selectStmt;
    }

	IF() {
	    return this.getToken(RickLangParser.IF, 0);
	};

	simpleExp() {
	    return this.getTypedRuleContext(SimpleExpContext,0);
	};

	THEN() {
	    return this.getToken(RickLangParser.THEN, 0);
	};

	stmt() {
	    return this.getTypedRuleContext(StmtContext,0);
	};

	END() {
	    return this.getToken(RickLangParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterSelectStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitSelectStmt(this);
		}
	}


}



class IterStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_iterStmt;
    }

	WHILE() {
	    return this.getToken(RickLangParser.WHILE, 0);
	};

	simpleExp() {
	    return this.getTypedRuleContext(SimpleExpContext,0);
	};

	THEN() {
	    return this.getToken(RickLangParser.THEN, 0);
	};

	stmt() {
	    return this.getTypedRuleContext(StmtContext,0);
	};

	END() {
	    return this.getToken(RickLangParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterIterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitIterStmt(this);
		}
	}


}



class ReturnStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_returnStmt;
    }

	RETURNOP() {
	    return this.getToken(RickLangParser.RETURNOP, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	RETURNCL() {
	    return this.getToken(RickLangParser.RETURNCL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterReturnStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitReturnStmt(this);
		}
	}


}



class TryStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_tryStmt;
    }

	TRY() {
	    return this.getToken(RickLangParser.TRY, 0);
	};

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	CATCH() {
	    return this.getToken(RickLangParser.CATCH, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	THEN() {
	    return this.getToken(RickLangParser.THEN, 0);
	};

	END() {
	    return this.getToken(RickLangParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterTryStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitTryStmt(this);
		}
	}


}



class ImportStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_importStmt;
    }

	IMPORTOP() {
	    return this.getToken(RickLangParser.IMPORTOP, 0);
	};

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	IMPORTCL() {
	    return this.getToken(RickLangParser.IMPORTCL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterImportStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitImportStmt(this);
		}
	}


}



class BreakStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_breakStmt;
    }

	BREAK() {
	    return this.getToken(RickLangParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterBreakStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitBreakStmt(this);
		}
	}


}



class ContinueStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_continueStmt;
    }

	CONTINUE() {
	    return this.getToken(RickLangParser.CONTINUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterContinueStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitContinueStmt(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_exp;
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	ASSIGN() {
	    return this.getToken(RickLangParser.ASSIGN, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	simpleExp() {
	    return this.getTypedRuleContext(SimpleExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitExp(this);
		}
	}


}



class SimpleExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_simpleExp;
    }

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	simpleExp() {
	    return this.getTypedRuleContext(SimpleExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterSimpleExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitSimpleExp(this);
		}
	}


}



class AndExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_andExp;
    }

	unaryRelExp() {
	    return this.getTypedRuleContext(UnaryRelExpContext,0);
	};

	andExp() {
	    return this.getTypedRuleContext(AndExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterAndExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitAndExp(this);
		}
	}


}



class UnaryRelExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_unaryRelExp;
    }

	unaryRelExp() {
	    return this.getTypedRuleContext(UnaryRelExpContext,0);
	};

	relExp() {
	    return this.getTypedRuleContext(RelExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterUnaryRelExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitUnaryRelExp(this);
		}
	}


}



class RelExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_relExp;
    }

	minmaxExp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MinmaxExpContext);
	    } else {
	        return this.getTypedRuleContext(MinmaxExpContext,i);
	    }
	};

	relop() {
	    return this.getTypedRuleContext(RelopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterRelExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitRelExp(this);
		}
	}


}



class RelopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_relop;
    }


	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterRelop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitRelop(this);
		}
	}


}



class MinmaxExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_minmaxExp;
    }

	sumExp() {
	    return this.getTypedRuleContext(SumExpContext,0);
	};

	minmaxExp() {
	    return this.getTypedRuleContext(MinmaxExpContext,0);
	};

	minmaxop() {
	    return this.getTypedRuleContext(MinmaxopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMinmaxExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMinmaxExp(this);
		}
	}


}



class MinmaxopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_minmaxop;
    }


	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMinmaxop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMinmaxop(this);
		}
	}


}



class SumExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_sumExp;
    }

	mulExp() {
	    return this.getTypedRuleContext(MulExpContext,0);
	};

	sumExp() {
	    return this.getTypedRuleContext(SumExpContext,0);
	};

	sumop() {
	    return this.getTypedRuleContext(SumopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterSumExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitSumExp(this);
		}
	}


}



class SumopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_sumop;
    }


	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterSumop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitSumop(this);
		}
	}


}



class MulExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_mulExp;
    }

	unaryExp() {
	    return this.getTypedRuleContext(UnaryExpContext,0);
	};

	mulExp() {
	    return this.getTypedRuleContext(MulExpContext,0);
	};

	mulop() {
	    return this.getTypedRuleContext(MulopContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMulExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMulExp(this);
		}
	}


}



class MulopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_mulop;
    }


	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMulop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMulop(this);
		}
	}


}



class UnaryExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_unaryExp;
    }

	unaryop() {
	    return this.getTypedRuleContext(UnaryopContext,0);
	};

	unaryExp() {
	    return this.getTypedRuleContext(UnaryExpContext,0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterUnaryExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitUnaryExp(this);
		}
	}


}



class UnaryopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_unaryop;
    }


	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterUnaryop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitUnaryop(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_factor;
    }

	mutable() {
	    return this.getTypedRuleContext(MutableContext,0);
	};

	immutable() {
	    return this.getTypedRuleContext(ImmutableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitFactor(this);
		}
	}


}



class MutableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_mutable;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RickLangParser.ID);
	    } else {
	        return this.getToken(RickLangParser.ID, i);
	    }
	};


	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterMutable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitMutable(this);
		}
	}


}



class ImmutableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_immutable;
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	const_() {
	    return this.getTypedRuleContext(ConstContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	object() {
	    return this.getTypedRuleContext(ObjectContext,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterImmutable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitImmutable(this);
		}
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_call;
    }

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitCall(this);
		}
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_args;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitArgs(this);
		}
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_array;
    }

	arrayInit() {
	    return this.getTypedRuleContext(ArrayInitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitArray(this);
		}
	}


}



class ArrayInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_arrayInit;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	arrayInit() {
	    return this.getTypedRuleContext(ArrayInitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterArrayInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitArrayInit(this);
		}
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_object;
    }

	objectInit() {
	    return this.getTypedRuleContext(ObjectInitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitObject(this);
		}
	}


}



class ObjectInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_objectInit;
    }

	objectField() {
	    return this.getTypedRuleContext(ObjectFieldContext,0);
	};

	objectInit() {
	    return this.getTypedRuleContext(ObjectInitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterObjectInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitObjectInit(this);
		}
	}


}



class ObjectFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_objectField;
    }

	ID() {
	    return this.getToken(RickLangParser.ID, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterObjectField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitObjectField(this);
		}
	}


}



class ConstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_const;
    }

	NUMCONST() {
	    return this.getToken(RickLangParser.NUMCONST, 0);
	};

	STRINGCONST() {
	    return this.getToken(RickLangParser.STRINGCONST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterConst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitConst(this);
		}
	}


}




RickLangParser.ProgramContext = ProgramContext; 
RickLangParser.DeclListContext = DeclListContext; 
RickLangParser.DeclContext = DeclContext; 
RickLangParser.VarDeclContext = VarDeclContext; 
RickLangParser.VarDeclListContext = VarDeclListContext; 
RickLangParser.VarDeclInitContext = VarDeclInitContext; 
RickLangParser.VarDeclIdContext = VarDeclIdContext; 
RickLangParser.FunDeclContext = FunDeclContext; 
RickLangParser.ParamsContext = ParamsContext; 
RickLangParser.StmtContext = StmtContext; 
RickLangParser.ExpStmtContext = ExpStmtContext; 
RickLangParser.CompoundStmtContext = CompoundStmtContext; 
RickLangParser.StmtListContext = StmtListContext; 
RickLangParser.SelectStmtContext = SelectStmtContext; 
RickLangParser.IterStmtContext = IterStmtContext; 
RickLangParser.ReturnStmtContext = ReturnStmtContext; 
RickLangParser.TryStmtContext = TryStmtContext; 
RickLangParser.ImportStmtContext = ImportStmtContext; 
RickLangParser.BreakStmtContext = BreakStmtContext; 
RickLangParser.ContinueStmtContext = ContinueStmtContext; 
RickLangParser.ExpContext = ExpContext; 
RickLangParser.SimpleExpContext = SimpleExpContext; 
RickLangParser.AndExpContext = AndExpContext; 
RickLangParser.UnaryRelExpContext = UnaryRelExpContext; 
RickLangParser.RelExpContext = RelExpContext; 
RickLangParser.RelopContext = RelopContext; 
RickLangParser.MinmaxExpContext = MinmaxExpContext; 
RickLangParser.MinmaxopContext = MinmaxopContext; 
RickLangParser.SumExpContext = SumExpContext; 
RickLangParser.SumopContext = SumopContext; 
RickLangParser.MulExpContext = MulExpContext; 
RickLangParser.MulopContext = MulopContext; 
RickLangParser.UnaryExpContext = UnaryExpContext; 
RickLangParser.UnaryopContext = UnaryopContext; 
RickLangParser.FactorContext = FactorContext; 
RickLangParser.MutableContext = MutableContext; 
RickLangParser.ImmutableContext = ImmutableContext; 
RickLangParser.CallContext = CallContext; 
RickLangParser.ArgsContext = ArgsContext; 
RickLangParser.ArrayContext = ArrayContext; 
RickLangParser.ArrayInitContext = ArrayInitContext; 
RickLangParser.ObjectContext = ObjectContext; 
RickLangParser.ObjectInitContext = ObjectInitContext; 
RickLangParser.ObjectFieldContext = ObjectFieldContext; 
RickLangParser.ConstContext = ConstContext; 
