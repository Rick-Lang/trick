// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import RickLangListener from './RickLangListener.js';
const serializedATN = [4,1,57,381,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,1,0,1,0,1,1,1,1,1,1,1,1,3,1,95,8,1,1,2,1,2,3,2,99,8,
2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,110,8,4,10,4,12,4,113,9,4,1,5,
1,5,1,5,1,5,1,5,3,5,120,8,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
3,8,133,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,145,8,9,1,10,1,10,
1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,5,12,158,8,12,10,12,12,12,161,
9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,
15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,3,21,225,8,21,1,22,1,22,1,22,1,22,1,22,1,22,5,22,
233,8,22,10,22,12,22,236,9,22,1,23,1,23,1,23,1,23,1,23,1,23,5,23,244,8,23,
10,23,12,23,247,9,23,1,24,1,24,1,24,3,24,252,8,24,1,25,1,25,1,25,1,25,1,
25,3,25,259,8,25,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,5,27,270,8,
27,10,27,12,27,273,9,27,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,5,29,
284,8,29,10,29,12,29,287,9,29,1,30,1,30,1,31,1,31,1,31,1,31,3,31,295,8,31,
1,32,1,32,1,33,1,33,3,33,301,8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
1,34,5,34,312,8,34,10,34,12,34,315,9,34,3,34,317,8,34,1,35,1,35,1,35,1,35,
1,35,1,35,1,35,1,35,3,35,327,8,35,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,
1,37,1,37,1,37,5,37,340,8,37,10,37,12,37,343,9,37,1,38,1,38,1,38,1,38,1,
39,1,39,1,39,1,39,1,39,1,39,5,39,355,8,39,10,39,12,39,358,9,39,1,40,1,40,
1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,5,41,370,8,41,10,41,12,41,373,9,
41,1,42,1,42,1,42,1,42,1,43,1,43,1,43,0,9,8,24,44,46,54,58,74,78,82,44,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,0,5,1,0,13,18,1,0,19,
20,1,0,21,22,3,0,8,9,20,20,23,23,2,0,30,31,36,37,376,0,88,1,0,0,0,2,94,1,
0,0,0,4,98,1,0,0,0,6,100,1,0,0,0,8,103,1,0,0,0,10,119,1,0,0,0,12,121,1,0,
0,0,14,123,1,0,0,0,16,132,1,0,0,0,18,144,1,0,0,0,20,146,1,0,0,0,22,148,1,
0,0,0,24,152,1,0,0,0,26,162,1,0,0,0,28,168,1,0,0,0,30,174,1,0,0,0,32,178,
1,0,0,0,34,186,1,0,0,0,36,190,1,0,0,0,38,192,1,0,0,0,40,194,1,0,0,0,42,224,
1,0,0,0,44,226,1,0,0,0,46,237,1,0,0,0,48,251,1,0,0,0,50,258,1,0,0,0,52,260,
1,0,0,0,54,262,1,0,0,0,56,274,1,0,0,0,58,276,1,0,0,0,60,288,1,0,0,0,62,294,
1,0,0,0,64,296,1,0,0,0,66,300,1,0,0,0,68,316,1,0,0,0,70,326,1,0,0,0,72,328,
1,0,0,0,74,333,1,0,0,0,76,344,1,0,0,0,78,348,1,0,0,0,80,359,1,0,0,0,82,363,
1,0,0,0,84,374,1,0,0,0,86,378,1,0,0,0,88,89,3,2,1,0,89,1,1,0,0,0,90,91,3,
4,2,0,91,92,3,2,1,0,92,95,1,0,0,0,93,95,3,4,2,0,94,90,1,0,0,0,94,93,1,0,
0,0,95,3,1,0,0,0,96,99,3,6,3,0,97,99,3,14,7,0,98,96,1,0,0,0,98,97,1,0,0,
0,99,5,1,0,0,0,100,101,5,42,0,0,101,102,3,8,4,0,102,7,1,0,0,0,103,104,6,
4,-1,0,104,105,3,10,5,0,105,111,1,0,0,0,106,107,10,2,0,0,107,108,5,1,0,0,
108,110,3,10,5,0,109,106,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,
1,0,0,0,112,9,1,0,0,0,113,111,1,0,0,0,114,115,3,12,6,0,115,116,5,43,0,0,
116,117,3,44,22,0,117,120,1,0,0,0,118,120,3,12,6,0,119,114,1,0,0,0,119,118,
1,0,0,0,120,11,1,0,0,0,121,122,5,35,0,0,122,13,1,0,0,0,123,124,5,44,0,0,
124,125,5,35,0,0,125,126,3,16,8,0,126,127,3,18,9,0,127,15,1,0,0,0,128,129,
5,35,0,0,129,130,5,1,0,0,130,133,3,16,8,0,131,133,5,35,0,0,132,128,1,0,0,
0,132,131,1,0,0,0,133,17,1,0,0,0,134,145,3,20,10,0,135,145,3,22,11,0,136,
145,3,26,13,0,137,145,3,28,14,0,138,145,3,30,15,0,139,145,3,32,16,0,140,
145,3,34,17,0,141,145,3,36,18,0,142,145,3,38,19,0,143,145,3,40,20,0,144,
134,1,0,0,0,144,135,1,0,0,0,144,136,1,0,0,0,144,137,1,0,0,0,144,138,1,0,
0,0,144,139,1,0,0,0,144,140,1,0,0,0,144,141,1,0,0,0,144,142,1,0,0,0,144,
143,1,0,0,0,145,19,1,0,0,0,146,147,3,42,21,0,147,21,1,0,0,0,148,149,5,2,
0,0,149,150,3,24,12,0,150,151,5,3,0,0,151,23,1,0,0,0,152,153,6,12,-1,0,153,
154,3,18,9,0,154,159,1,0,0,0,155,156,10,2,0,0,156,158,3,18,9,0,157,155,1,
0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,25,1,0,0,0,161,
159,1,0,0,0,162,163,5,46,0,0,163,164,3,44,22,0,164,165,5,45,0,0,165,166,
3,18,9,0,166,167,5,47,0,0,167,27,1,0,0,0,168,169,5,50,0,0,169,170,3,44,22,
0,170,171,5,45,0,0,171,172,3,18,9,0,172,173,5,47,0,0,173,29,1,0,0,0,174,
175,5,48,0,0,175,176,3,42,21,0,176,177,5,49,0,0,177,31,1,0,0,0,178,179,5,
51,0,0,179,180,3,18,9,0,180,181,5,52,0,0,181,182,5,35,0,0,182,183,5,45,0,
0,183,184,3,18,9,0,184,185,5,47,0,0,185,33,1,0,0,0,186,187,5,53,0,0,187,
188,5,35,0,0,188,189,5,54,0,0,189,35,1,0,0,0,190,191,5,55,0,0,191,37,1,0,
0,0,192,193,5,56,0,0,193,39,1,0,0,0,194,195,5,57,0,0,195,196,3,42,21,0,196,
41,1,0,0,0,197,198,3,68,34,0,198,199,5,43,0,0,199,200,3,42,21,0,200,225,
1,0,0,0,201,202,3,68,34,0,202,203,5,4,0,0,203,204,3,42,21,0,204,225,1,0,
0,0,205,206,3,68,34,0,206,207,5,5,0,0,207,208,3,42,21,0,208,225,1,0,0,0,
209,210,3,68,34,0,210,211,5,6,0,0,211,212,3,42,21,0,212,225,1,0,0,0,213,
214,3,68,34,0,214,215,5,7,0,0,215,216,3,42,21,0,216,225,1,0,0,0,217,218,
3,68,34,0,218,219,5,8,0,0,219,225,1,0,0,0,220,221,3,68,34,0,221,222,5,9,
0,0,222,225,1,0,0,0,223,225,3,44,22,0,224,197,1,0,0,0,224,201,1,0,0,0,224,
205,1,0,0,0,224,209,1,0,0,0,224,213,1,0,0,0,224,217,1,0,0,0,224,220,1,0,
0,0,224,223,1,0,0,0,225,43,1,0,0,0,226,227,6,22,-1,0,227,228,3,46,23,0,228,
234,1,0,0,0,229,230,10,2,0,0,230,231,5,10,0,0,231,233,3,46,23,0,232,229,
1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,45,1,0,0,0,236,
234,1,0,0,0,237,238,6,23,-1,0,238,239,3,48,24,0,239,245,1,0,0,0,240,241,
10,2,0,0,241,242,5,11,0,0,242,244,3,48,24,0,243,240,1,0,0,0,244,247,1,0,
0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,47,1,0,0,0,247,245,1,0,0,0,248,249,
5,12,0,0,249,252,3,48,24,0,250,252,3,50,25,0,251,248,1,0,0,0,251,250,1,0,
0,0,252,49,1,0,0,0,253,254,3,54,27,0,254,255,3,52,26,0,255,256,3,54,27,0,
256,259,1,0,0,0,257,259,3,54,27,0,258,253,1,0,0,0,258,257,1,0,0,0,259,51,
1,0,0,0,260,261,7,0,0,0,261,53,1,0,0,0,262,263,6,27,-1,0,263,264,3,58,29,
0,264,271,1,0,0,0,265,266,10,2,0,0,266,267,3,56,28,0,267,268,3,58,29,0,268,
270,1,0,0,0,269,265,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,
0,0,272,55,1,0,0,0,273,271,1,0,0,0,274,275,7,1,0,0,275,57,1,0,0,0,276,277,
6,29,-1,0,277,278,3,62,31,0,278,285,1,0,0,0,279,280,10,2,0,0,280,281,3,60,
30,0,281,282,3,62,31,0,282,284,1,0,0,0,283,279,1,0,0,0,284,287,1,0,0,0,285,
283,1,0,0,0,285,286,1,0,0,0,286,59,1,0,0,0,287,285,1,0,0,0,288,289,7,2,0,
0,289,61,1,0,0,0,290,291,3,64,32,0,291,292,3,62,31,0,292,295,1,0,0,0,293,
295,3,66,33,0,294,290,1,0,0,0,294,293,1,0,0,0,295,63,1,0,0,0,296,297,7,3,
0,0,297,65,1,0,0,0,298,301,3,68,34,0,299,301,3,70,35,0,300,298,1,0,0,0,300,
299,1,0,0,0,301,67,1,0,0,0,302,317,5,35,0,0,303,304,5,35,0,0,304,305,5,24,
0,0,305,306,3,42,21,0,306,307,5,25,0,0,307,317,1,0,0,0,308,313,5,35,0,0,
309,310,5,26,0,0,310,312,5,35,0,0,311,309,1,0,0,0,312,315,1,0,0,0,313,311,
1,0,0,0,313,314,1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,316,302,1,0,0,0,
316,303,1,0,0,0,316,308,1,0,0,0,317,69,1,0,0,0,318,327,3,72,36,0,319,327,
3,86,43,0,320,327,3,76,38,0,321,327,3,80,40,0,322,323,5,27,0,0,323,324,3,
42,21,0,324,325,5,28,0,0,325,327,1,0,0,0,326,318,1,0,0,0,326,319,1,0,0,0,
326,320,1,0,0,0,326,321,1,0,0,0,326,322,1,0,0,0,327,71,1,0,0,0,328,329,5,
35,0,0,329,330,5,27,0,0,330,331,3,74,37,0,331,332,5,28,0,0,332,73,1,0,0,
0,333,334,6,37,-1,0,334,335,3,42,21,0,335,341,1,0,0,0,336,337,10,2,0,0,337,
338,5,1,0,0,338,340,3,42,21,0,339,336,1,0,0,0,340,343,1,0,0,0,341,339,1,
0,0,0,341,342,1,0,0,0,342,75,1,0,0,0,343,341,1,0,0,0,344,345,5,24,0,0,345,
346,3,78,39,0,346,347,5,25,0,0,347,77,1,0,0,0,348,349,6,39,-1,0,349,350,
3,42,21,0,350,356,1,0,0,0,351,352,10,2,0,0,352,353,5,1,0,0,353,355,3,42,
21,0,354,351,1,0,0,0,355,358,1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,0,357,
79,1,0,0,0,358,356,1,0,0,0,359,360,5,2,0,0,360,361,3,82,41,0,361,362,5,3,
0,0,362,81,1,0,0,0,363,364,6,41,-1,0,364,365,3,84,42,0,365,371,1,0,0,0,366,
367,10,2,0,0,367,368,5,1,0,0,368,370,3,84,42,0,369,366,1,0,0,0,370,373,1,
0,0,0,371,369,1,0,0,0,371,372,1,0,0,0,372,83,1,0,0,0,373,371,1,0,0,0,374,
375,5,35,0,0,375,376,5,29,0,0,376,377,3,42,21,0,377,85,1,0,0,0,378,379,7,
4,0,0,379,87,1,0,0,0,22,94,98,111,119,132,144,159,224,234,245,251,258,271,
285,294,300,313,316,326,341,356,371];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class RickLangParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "','", "'{'", "'}'", "'+='", "'-='", "'*='", 
                            "'/='", "'++'", "'--'", "'or'", "'and'", "'not'", 
                            "'islessthan'", "'islessthanorequalto'", "'isgreaterthan'", 
                            "'isgreaterthanorequalto'", "'is'", "'aint'", 
                            "'+'", "'-'", "'*'", "'/'", "'!'", "'['", "']'", 
                            "'.'", "'('", "')'", "':'", "'true'", "'false'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'give'", "'up'", "'gonna'", "'then'", 
                            "'andifuaskmehowimfeeling'", "'saygoodbye'", 
                            "'whenigivemy'", "'itwillbecompletely'", "'togetherforeverwith'", 
                            "'thereaintnomistaking'", "'iftheyevergetudown'", 
                            "'weknowthe'", "'andwe'regonnaplayit'", "'desertu'", 
                            "'runaround'", "'ijustwannatelluhowimfeeling'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "LETTER", "DIGITS", "LETDIG", "ID", "NUMCONST", 
                             "STRINGCONST", "QUOTES", "WS", "COMMENT", "INLINECOMMENT", 
                             "LET", "ASSIGN", "FUN", "THEN", "IF", "END", 
                             "RETURNOP", "RETURNCL", "WHILE", "TRY", "CATCH", 
                             "IMPORTOP", "IMPORTCL", "BREAK", "CONTINUE", 
                             "PRINT" ];
    static ruleNames = [ "program", "declList", "decl", "varDecl", "varDeclList", 
                         "varDeclInit", "varDeclId", "funDecl", "params", 
                         "stmt", "expStmt", "compoundStmt", "stmtList", 
                         "selectStmt", "iterStmt", "returnStmt", "tryStmt", 
                         "importStmt", "breakStmt", "continueStmt", "printStmt", 
                         "exp", "simpleExp", "andExp", "unaryRelExp", "relExp", 
                         "relop", "sumExp", "sumop", "mulExp", "mulop", 
                         "unaryExp", "unaryop", "factor", "mutable", "immutable", 
                         "call", "args", "array", "arrayInit", "object", 
                         "objectInit", "objectField", "const" ];

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
    	case 22:
    	    		return this.simpleExp_sempred(localctx, predIndex);
    	case 23:
    	    		return this.andExp_sempred(localctx, predIndex);
    	case 27:
    	    		return this.sumExp_sempred(localctx, predIndex);
    	case 29:
    	    		return this.mulExp_sempred(localctx, predIndex);
    	case 37:
    	    		return this.args_sempred(localctx, predIndex);
    	case 39:
    	    		return this.arrayInit_sempred(localctx, predIndex);
    	case 41:
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

    sumExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    mulExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    args_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 6:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arrayInit_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 7:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    objectInit_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
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
	        this.state = 88;
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
	        this.state = 94;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.decl();
	            this.state = 91;
	            this.declList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
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
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.varDecl();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
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
	        this.state = 100;
	        this.match(RickLangParser.LET);
	        this.state = 101;
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
	        this.state = 104;
	        this.varDeclInit();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 111;
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
	                this.state = 106;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 107;
	                this.match(RickLangParser.T__0);
	                this.state = 108;
	                this.varDeclInit(); 
	            }
	            this.state = 113;
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
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.varDeclId();
	            this.state = 115;
	            this.match(RickLangParser.ASSIGN);
	            this.state = 116;
	            this.simpleExp(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
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
	        this.state = 121;
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
	        this.state = 123;
	        this.match(RickLangParser.FUN);
	        this.state = 124;
	        this.match(RickLangParser.ID);
	        this.state = 125;
	        this.params();
	        this.state = 126;
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
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.match(RickLangParser.ID);
	            this.state = 129;
	            this.match(RickLangParser.T__0);
	            this.state = 130;
	            this.params();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
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
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.expStmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.compoundStmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            this.selectStmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 137;
	            this.iterStmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 138;
	            this.returnStmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 139;
	            this.tryStmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 140;
	            this.importStmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 141;
	            this.breakStmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 142;
	            this.continueStmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 143;
	            this.printStmt();
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
	        this.state = 146;
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
	        this.state = 148;
	        this.match(RickLangParser.T__1);
	        this.state = 149;
	        this.stmtList(0);
	        this.state = 150;
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
	        this.state = 153;
	        this.stmt();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 159;
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
	                this.state = 155;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 156;
	                this.stmt(); 
	            }
	            this.state = 161;
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
	        this.state = 162;
	        this.match(RickLangParser.IF);
	        this.state = 163;
	        this.simpleExp(0);
	        this.state = 164;
	        this.match(RickLangParser.THEN);
	        this.state = 165;
	        this.stmt();
	        this.state = 166;
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
	        this.state = 168;
	        this.match(RickLangParser.WHILE);
	        this.state = 169;
	        this.simpleExp(0);
	        this.state = 170;
	        this.match(RickLangParser.THEN);
	        this.state = 171;
	        this.stmt();
	        this.state = 172;
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
	        this.state = 174;
	        this.match(RickLangParser.RETURNOP);
	        this.state = 175;
	        this.exp();
	        this.state = 176;
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
	        this.state = 178;
	        this.match(RickLangParser.TRY);
	        this.state = 179;
	        this.stmt();
	        this.state = 180;
	        this.match(RickLangParser.CATCH);
	        this.state = 181;
	        this.match(RickLangParser.ID);
	        this.state = 182;
	        this.match(RickLangParser.THEN);
	        this.state = 183;
	        this.stmt();
	        this.state = 184;
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
	        this.state = 186;
	        this.match(RickLangParser.IMPORTOP);
	        this.state = 187;
	        this.match(RickLangParser.ID);
	        this.state = 188;
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
	        this.state = 190;
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
	        this.state = 192;
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



	printStmt() {
	    let localctx = new PrintStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, RickLangParser.RULE_printStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(RickLangParser.PRINT);
	        this.state = 195;
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



	exp() {
	    let localctx = new ExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, RickLangParser.RULE_exp);
	    try {
	        this.state = 224;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.mutable();
	            this.state = 198;
	            this.match(RickLangParser.ASSIGN);
	            this.state = 199;
	            this.exp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.mutable();
	            this.state = 202;
	            this.match(RickLangParser.T__3);
	            this.state = 203;
	            this.exp();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 205;
	            this.mutable();
	            this.state = 206;
	            this.match(RickLangParser.T__4);
	            this.state = 207;
	            this.exp();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 209;
	            this.mutable();
	            this.state = 210;
	            this.match(RickLangParser.T__5);
	            this.state = 211;
	            this.exp();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 213;
	            this.mutable();
	            this.state = 214;
	            this.match(RickLangParser.T__6);
	            this.state = 215;
	            this.exp();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 217;
	            this.mutable();
	            this.state = 218;
	            this.match(RickLangParser.T__7);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 220;
	            this.mutable();
	            this.state = 221;
	            this.match(RickLangParser.T__8);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 223;
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
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, RickLangParser.RULE_simpleExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.andExp(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 234;
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
	                this.state = 229;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 230;
	                this.match(RickLangParser.T__9);
	                this.state = 231;
	                this.andExp(0); 
	            }
	            this.state = 236;
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
	    const _startState = 46;
	    this.enterRecursionRule(localctx, 46, RickLangParser.RULE_andExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.unaryRelExp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 245;
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
	                this.state = 240;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 241;
	                this.match(RickLangParser.T__10);
	                this.state = 242;
	                this.unaryRelExp(); 
	            }
	            this.state = 247;
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
	    this.enterRule(localctx, 48, RickLangParser.RULE_unaryRelExp);
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 248;
	            this.match(RickLangParser.T__11);
	            this.state = 249;
	            this.unaryRelExp();
	            break;
	        case 2:
	        case 8:
	        case 9:
	        case 20:
	        case 23:
	        case 24:
	        case 27:
	        case 30:
	        case 31:
	        case 35:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 250;
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
	    this.enterRule(localctx, 50, RickLangParser.RULE_relExp);
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 253;
	            this.sumExp(0);
	            this.state = 254;
	            this.relop();
	            this.state = 255;
	            this.sumExp(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
	            this.sumExp(0);
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
	    this.enterRule(localctx, 52, RickLangParser.RULE_relop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
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


	sumExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SumExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 54;
	    this.enterRecursionRule(localctx, 54, RickLangParser.RULE_sumExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.mulExp(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 271;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SumExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_sumExp);
	                this.state = 265;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 266;
	                this.sumop();
	                this.state = 267;
	                this.mulExp(0); 
	            }
	            this.state = 273;
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



	sumop() {
	    let localctx = new SumopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, RickLangParser.RULE_sumop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
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


	mulExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MulExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 58;
	    this.enterRecursionRule(localctx, 58, RickLangParser.RULE_mulExp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.unaryExp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 285;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new MulExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_mulExp);
	                this.state = 279;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 280;
	                this.mulop();
	                this.state = 281;
	                this.unaryExp(); 
	            }
	            this.state = 287;
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



	mulop() {
	    let localctx = new MulopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, RickLangParser.RULE_mulop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
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



	unaryExp() {
	    let localctx = new UnaryExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, RickLangParser.RULE_unaryExp);
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 20:
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.unaryop();
	            this.state = 291;
	            this.unaryExp();
	            break;
	        case 2:
	        case 24:
	        case 27:
	        case 30:
	        case 31:
	        case 35:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
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
	    this.enterRule(localctx, 64, RickLangParser.RULE_unaryop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 9437952) !== 0))) {
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
	    this.enterRule(localctx, 66, RickLangParser.RULE_factor);
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.mutable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 299;
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
	    this.enterRule(localctx, 68, RickLangParser.RULE_mutable);
	    try {
	        this.state = 316;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 302;
	            this.match(RickLangParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 303;
	            this.match(RickLangParser.ID);
	            this.state = 304;
	            this.match(RickLangParser.T__23);
	            this.state = 305;
	            this.exp();
	            this.state = 306;
	            this.match(RickLangParser.T__24);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 308;
	            this.match(RickLangParser.ID);
	            this.state = 313;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 309;
	                    this.match(RickLangParser.T__25);
	                    this.state = 310;
	                    this.match(RickLangParser.ID); 
	                }
	                this.state = 315;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	    this.enterRule(localctx, 70, RickLangParser.RULE_immutable);
	    try {
	        this.state = 326;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 318;
	            this.call();
	            break;
	        case 30:
	        case 31:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 319;
	            this.const_();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 320;
	            this.array();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 321;
	            this.object();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 322;
	            this.match(RickLangParser.T__26);
	            this.state = 323;
	            this.exp();
	            this.state = 324;
	            this.match(RickLangParser.T__27);
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
	    this.enterRule(localctx, 72, RickLangParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(RickLangParser.ID);
	        this.state = 329;
	        this.match(RickLangParser.T__26);
	        this.state = 330;
	        this.args(0);
	        this.state = 331;
	        this.match(RickLangParser.T__27);
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
	    const _startState = 74;
	    this.enterRecursionRule(localctx, 74, RickLangParser.RULE_args, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.exp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 341;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ArgsContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_args);
	                this.state = 336;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 337;
	                this.match(RickLangParser.T__0);
	                this.state = 338;
	                this.exp(); 
	            }
	            this.state = 343;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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
	    this.enterRule(localctx, 76, RickLangParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(RickLangParser.T__23);
	        this.state = 345;
	        this.arrayInit(0);
	        this.state = 346;
	        this.match(RickLangParser.T__24);
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
	    const _startState = 78;
	    this.enterRecursionRule(localctx, 78, RickLangParser.RULE_arrayInit, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.exp();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 356;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ArrayInitContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_arrayInit);
	                this.state = 351;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 352;
	                this.match(RickLangParser.T__0);
	                this.state = 353;
	                this.exp(); 
	            }
	            this.state = 358;
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



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, RickLangParser.RULE_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this.match(RickLangParser.T__1);
	        this.state = 360;
	        this.objectInit(0);
	        this.state = 361;
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
	    const _startState = 82;
	    this.enterRecursionRule(localctx, 82, RickLangParser.RULE_objectInit, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.objectField();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 371;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ObjectInitContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, RickLangParser.RULE_objectInit);
	                this.state = 366;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 367;
	                this.match(RickLangParser.T__0);
	                this.state = 368;
	                this.objectField(); 
	            }
	            this.state = 373;
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



	objectField() {
	    let localctx = new ObjectFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, RickLangParser.RULE_objectField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.match(RickLangParser.ID);
	        this.state = 375;
	        this.match(RickLangParser.T__28);
	        this.state = 376;
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
	    this.enterRule(localctx, 86, RickLangParser.RULE_const);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & 195) !== 0))) {
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
RickLangParser.LETTER = 32;
RickLangParser.DIGITS = 33;
RickLangParser.LETDIG = 34;
RickLangParser.ID = 35;
RickLangParser.NUMCONST = 36;
RickLangParser.STRINGCONST = 37;
RickLangParser.QUOTES = 38;
RickLangParser.WS = 39;
RickLangParser.COMMENT = 40;
RickLangParser.INLINECOMMENT = 41;
RickLangParser.LET = 42;
RickLangParser.ASSIGN = 43;
RickLangParser.FUN = 44;
RickLangParser.THEN = 45;
RickLangParser.IF = 46;
RickLangParser.END = 47;
RickLangParser.RETURNOP = 48;
RickLangParser.RETURNCL = 49;
RickLangParser.WHILE = 50;
RickLangParser.TRY = 51;
RickLangParser.CATCH = 52;
RickLangParser.IMPORTOP = 53;
RickLangParser.IMPORTCL = 54;
RickLangParser.BREAK = 55;
RickLangParser.CONTINUE = 56;
RickLangParser.PRINT = 57;

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
RickLangParser.RULE_printStmt = 20;
RickLangParser.RULE_exp = 21;
RickLangParser.RULE_simpleExp = 22;
RickLangParser.RULE_andExp = 23;
RickLangParser.RULE_unaryRelExp = 24;
RickLangParser.RULE_relExp = 25;
RickLangParser.RULE_relop = 26;
RickLangParser.RULE_sumExp = 27;
RickLangParser.RULE_sumop = 28;
RickLangParser.RULE_mulExp = 29;
RickLangParser.RULE_mulop = 30;
RickLangParser.RULE_unaryExp = 31;
RickLangParser.RULE_unaryop = 32;
RickLangParser.RULE_factor = 33;
RickLangParser.RULE_mutable = 34;
RickLangParser.RULE_immutable = 35;
RickLangParser.RULE_call = 36;
RickLangParser.RULE_args = 37;
RickLangParser.RULE_array = 38;
RickLangParser.RULE_arrayInit = 39;
RickLangParser.RULE_object = 40;
RickLangParser.RULE_objectInit = 41;
RickLangParser.RULE_objectField = 42;
RickLangParser.RULE_const = 43;

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

	printStmt() {
	    return this.getTypedRuleContext(PrintStmtContext,0);
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



class PrintStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RickLangParser.RULE_printStmt;
    }

	PRINT() {
	    return this.getToken(RickLangParser.PRINT, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.enterPrintStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RickLangListener ) {
	        listener.exitPrintStmt(this);
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

	sumExp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SumExpContext);
	    } else {
	        return this.getTypedRuleContext(SumExpContext,i);
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
RickLangParser.PrintStmtContext = PrintStmtContext; 
RickLangParser.ExpContext = ExpContext; 
RickLangParser.SimpleExpContext = SimpleExpContext; 
RickLangParser.AndExpContext = AndExpContext; 
RickLangParser.UnaryRelExpContext = UnaryRelExpContext; 
RickLangParser.RelExpContext = RelExpContext; 
RickLangParser.RelopContext = RelopContext; 
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
