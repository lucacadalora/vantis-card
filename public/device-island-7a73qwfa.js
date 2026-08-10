var OY=Object.create;var{getPrototypeOf:EY,defineProperty:P8,getOwnPropertyNames:sQ,getOwnPropertyDescriptor:DY}=Object,S6=Object.prototype.hasOwnProperty;function j6(J){return this[J]}var BN=(J,Q,$)=>{var Z=sQ(Q);for(let K of Z)if(!S6.call(J,K)&&K!=="default")P8(J,K,{get:j6.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!S6.call($,K)&&K!=="default")P8($,K,{get:j6.bind(Q,K),enumerable:!0});return $}},kY,RY,MN=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?kY??=new WeakMap:RY??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?OY(EY(J)):{};let X=Q||!J||!J.__esModule?P8($,"default",{value:J,enumerable:!0}):$;for(let Y of sQ(J))if(!S6.call(X,Y))P8(X,Y,{get:j6.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},IN=(J)=>{var Q=(AK??=new WeakMap).get(J),$;if(Q)return Q;if(Q=P8({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of sQ(J))if(!S6.call(Q,Z))P8(Q,Z,{get:j6.bind(J,Z),enumerable:!($=DY(J,Z))||$.enumerable})}return AK.set(J,Q),Q},AK,AN=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var VY=(J)=>J;function LY(J,Q){this[J]=VY.bind(null,Q)}var PN=(J,Q)=>{for(var $ in Q)P8(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:LY.bind(Q,$)})};var wN=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var _N=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var ZW="185";var KW=0,A$=1,WW=2;var J6=1,XW=2,R7=3,V7=0,aJ=1,b9=2,h9=0,Q6=1,P$=2,w$=3,_$=4,YW=5;var L7=100,UW=101,HW=102,qW=103,NW=104,GW=200,FW=201,OW=202,EW=203,DW=204,kW=205,RW=206,VW=207,LW=208,zW=209,BW=210,MW=211,IW=212,AW=213,PW=214,wW=0,_W=1,CW=2,C$=3,TW=4,SW=5,jW=6,vW=7,fW=0,yW=1,bW=2,C9=0,T$=1,S$=2,j$=3,$6=4,v$=5,f$=6,y$=7;var z7=301,f8=302,XQ=303,YQ=304,Z6=306,UQ=1000,HQ=1001,hW=1002,E8=1003,xW=1004;var K6=1005;var fJ=1006,qQ=1007;var e9=1008;var T9=1009,gW=1010,pW=1011,W6=1012,b$=1013,D8=1014,J8=1015,Q8=1016,h$=1017,x$=1018,B7=1020,mW=35902,lW=35899,dW=1021,uW=1022,x9=1023,y8=1026,b8=1027,cW=1028,g$=1029,h8=1030,p$=1031;var m$=1033,NQ=33776,GQ=33777,FQ=33778,OQ=33779,l$=35840,d$=35841,u$=35842,c$=35843,n$=36196,s$=37492,i$=37496,o$=37488,a$=37489,EQ=37490,r$=37491,t$=37808,e$=37809,JZ=37810,QZ=37811,$Z=37812,ZZ=37813,KZ=37814,WZ=37815,XZ=37816,YZ=37817,UZ=37818,HZ=37819,qZ=37820,NZ=37821,GZ=36492,FZ=36494,OZ=36495,EZ=36283,DZ=36284,DQ=36285,kZ=36286;var RZ=0,nW=1,x8="",S9="srgb",VZ="srgb-linear",LZ="linear",VJ="srgb";var sW=512,iW=513,oW=514,kQ=515,aW=516,rW=517,RQ=518,tW=519;var zZ="300 es",BZ=2000;function zY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function BY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function E7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function eW(){let J=E7("canvas");return J.style.display="block",J}var PK={},D7=null;function MZ(...J){let Q="THREE."+J.shift();if(D7)D7("log",Q,...J);else console.log(Q,...J)}function JX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function m0(...J){J=JX(J);let Q="THREE."+J.shift();if(D7)D7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function p0(...J){J=JX(J);let Q="THREE."+J.shift();if(D7)D7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function j8(...J){let Q=J.join(" ");if(Q in PK)return;PK[Q]=!0,m0(...J)}function QX(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var $X={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class $8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var nJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var iQ=Math.PI/180,ZQ=180/Math.PI;function M7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(nJ[J&255]+nJ[J>>8&255]+nJ[J>>16&255]+nJ[J>>24&255]+"-"+nJ[Q&255]+nJ[Q>>8&255]+"-"+nJ[Q>>16&15|64]+nJ[Q>>24&255]+"-"+nJ[$&63|128]+nJ[$>>8&255]+"-"+nJ[$>>16&255]+nJ[$>>24&255]+nJ[Z&255]+nJ[Z>>8&255]+nJ[Z>>16&255]+nJ[Z>>24&255]).toLowerCase()}function ZJ(J,Q,$){return Math.max(Q,Math.min($,J))}function MY(J,Q){return(J%Q+Q)%Q}function oQ(J,Q,$){return(1-$)*J+$*Q}function m7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function $9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class D0{static{D0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(ZJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class E9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],U=$[Z+1],H=$[Z+2],N=$[Z+3],G=K[W+0],q=K[W+1],F=K[W+2],R=K[W+3];if(N!==R||Y!==G||U!==q||H!==F){let I=Y*G+U*q+H*F+N*R;if(I<0)G=-G,q=-q,F=-F,R=-R,I=-I;let O=1-X;if(I<0.9995){let E=Math.acos(I),C=Math.sin(E);O=Math.sin(O*E)/C,X=Math.sin(X*E)/C,Y=Y*O+G*X,U=U*O+q*X,H=H*O+F*X,N=N*O+R*X}else{Y=Y*O+G*X,U=U*O+q*X,H=H*O+F*X,N=N*O+R*X;let E=1/Math.sqrt(Y*Y+U*U+H*H+N*N);Y*=E,U*=E,H*=E,N*=E}}J[Q]=Y,J[Q+1]=U,J[Q+2]=H,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],U=$[Z+2],H=$[Z+3],N=K[W],G=K[W+1],q=K[W+2],F=K[W+3];return J[Q]=X*F+H*N+Y*q-U*G,J[Q+1]=Y*F+H*G+U*N-X*q,J[Q+2]=U*F+H*q+X*G-Y*N,J[Q+3]=H*F-X*N-Y*G-U*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,U=X($/2),H=X(Z/2),N=X(K/2),G=Y($/2),q=Y(Z/2),F=Y(K/2);switch(W){case"XYZ":this._x=G*H*N+U*q*F,this._y=U*q*N-G*H*F,this._z=U*H*F+G*q*N,this._w=U*H*N-G*q*F;break;case"YXZ":this._x=G*H*N+U*q*F,this._y=U*q*N-G*H*F,this._z=U*H*F-G*q*N,this._w=U*H*N+G*q*F;break;case"ZXY":this._x=G*H*N-U*q*F,this._y=U*q*N+G*H*F,this._z=U*H*F+G*q*N,this._w=U*H*N-G*q*F;break;case"ZYX":this._x=G*H*N-U*q*F,this._y=U*q*N+G*H*F,this._z=U*H*F-G*q*N,this._w=U*H*N+G*q*F;break;case"YZX":this._x=G*H*N+U*q*F,this._y=U*q*N+G*H*F,this._z=U*H*F-G*q*N,this._w=U*H*N-G*q*F;break;case"XZY":this._x=G*H*N-U*q*F,this._y=U*q*N-G*H*F,this._z=U*H*F+G*q*N,this._w=U*H*N+G*q*F;break;default:m0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],U=Q[2],H=Q[6],N=Q[10],G=$+X+N;if(G>0){let q=0.5/Math.sqrt(G+1);this._w=0.25/q,this._x=(H-Y)*q,this._y=(K-U)*q,this._z=(W-Z)*q}else if($>X&&$>N){let q=2*Math.sqrt(1+$-X-N);this._w=(H-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+U)/q}else if(X>N){let q=2*Math.sqrt(1+X-$-N);this._w=(K-U)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+H)/q}else{let q=2*Math.sqrt(1+N-$-X);this._w=(W-Z)/q,this._x=(K+U)/q,this._y=(Y+H)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(ZJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,U=Q._z,H=Q._w;return this._x=$*H+W*X+Z*U-K*Y,this._y=Z*H+W*Y+K*X-$*U,this._z=K*H+W*U+$*Y-Z*X,this._w=W*H-$*X-Z*Y-K*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let U=Math.acos(X),H=Math.sin(U);Y=Math.sin(Y*U)/H,Q=Math.sin(Q*U)/H,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{static{j.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(wK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(wK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,U=2*(W*Z-X*$),H=2*(X*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+Y*U+W*N-X*H,this.y=$+Y*H+X*U-K*N,this.z=Z+Y*N+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return aQ.copy(this).projectOnVector(J),this.sub(aQ)}reflect(J){return this.sub(aQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(ZJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var aQ=new j,wK=new E9;class o0{static{o0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U)}set(J,Q,$,Z,K,W,X,Y,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=X,H[3]=Q,H[4]=K,H[5]=Y,H[6]=$,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],U=$[1],H=$[4],N=$[7],G=$[2],q=$[5],F=$[8],R=Z[0],I=Z[3],O=Z[6],E=Z[1],C=Z[4],P=Z[7],L=Z[2],A=Z[5],w=Z[8];return K[0]=W*R+X*E+Y*L,K[3]=W*I+X*C+Y*A,K[6]=W*O+X*P+Y*w,K[1]=U*R+H*E+N*L,K[4]=U*I+H*C+N*A,K[7]=U*O+H*P+N*w,K[2]=G*R+q*E+F*L,K[5]=G*I+q*C+F*A,K[8]=G*O+q*P+F*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8];return Q*W*H-Q*X*U-$*K*H+$*X*Y+Z*K*U-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=H*W-X*U,G=X*Y-H*K,q=U*K-W*Y,F=Q*N+$*G+Z*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=N*R,J[1]=(Z*U-H*$)*R,J[2]=(X*$-Z*W)*R,J[3]=G*R,J[4]=(H*Q-Z*Y)*R,J[5]=(Z*K-X*Q)*R,J[6]=q*R,J[7]=($*Y-U*Q)*R,J[8]=(W*Q-$*K)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),U=Math.sin(K);return this.set($*Y,$*U,-$*(Y*W+U*X)+W+J,-Z*U,Z*Y,-Z*(-U*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return j8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rQ.makeScale(J,Q)),this}rotate(J){return j8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rQ.makeRotation(-J)),this}translate(J,Q){return j8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var rQ=new o0,_K=new o0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),CK=new o0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function IY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=t9(K.r),K.g=t9(K.g),K.b=t9(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=O7(K.r),K.g=O7(K.g),K.b=O7(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return j8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return j8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:_K,fromXYZ:CK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:_K,fromXYZ:CK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var WJ=IY();function t9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function O7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var J7;class IZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(J7===void 0)J7=E7("canvas");J7.width=J.width,J7.height=J.height;let Z=J7.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=J7}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=E7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=t9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(t9(Q[$]/255)*255);else Q[$]=t9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return m0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var AY=0;class X6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AY++}),this.uuid=M7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(tQ(Z[W].image));else K.push(tQ(Z[W]))}else K=tQ(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function tQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return IZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return m0("Texture: Unable to serialize Texture."),{}}var PY=0,eQ=new j;class gJ extends $8{constructor(J=gJ.DEFAULT_IMAGE,Q=gJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,U=gJ.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:PY++}),this.uuid=M7(),this.name="",this.source=new X6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new D0(0,0),this.repeat=new D0(1,1),this.center=new D0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new o0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eQ).x}get height(){return this.source.getSize(eQ).y}get depth(){return this.source.getSize(eQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){m0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){m0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}gJ.DEFAULT_IMAGE=null;gJ.DEFAULT_MAPPING=300;gJ.DEFAULT_ANISOTROPY=1;class IJ{static{IJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,U=Y[0],H=Y[4],N=Y[8],G=Y[1],q=Y[5],F=Y[9],R=Y[2],I=Y[6],O=Y[10];if(Math.abs(H-G)<0.01&&Math.abs(N-R)<0.01&&Math.abs(F-I)<0.01){if(Math.abs(H+G)<0.1&&Math.abs(N+R)<0.1&&Math.abs(F+I)<0.1&&Math.abs(U+q+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(U+1)/2,P=(q+1)/2,L=(O+1)/2,A=(H+G)/4,w=(N+R)/4,_=(F+I)/4;if(C>P&&C>L)if(C<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(C),Z=A/$,K=w/$;else if(P>L)if(P<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),$=A/Z,K=_/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(L),$=w/K,Z=_/K;return this.set($,Z,K,Q),this}let E=Math.sqrt((I-F)*(I-F)+(N-R)*(N-R)+(G-H)*(G-H));if(Math.abs(E)<0.001)E=1;return this.x=(I-F)/E,this.y=(N-R)/E,this.z=(G-H)/E,this.w=Math.acos((U+q+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this.w=ZJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this.w=ZJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(ZJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AZ extends $8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new IJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new IJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new gJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new X6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class D9 extends AZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class VQ extends gJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class PZ extends gJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kJ{static{kJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,F,R,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,F,R,I)}set(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,F,R,I){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=K,O[5]=W,O[9]=X,O[13]=Y,O[2]=U,O[6]=H,O[10]=N,O[14]=G,O[3]=q,O[7]=F,O[11]=R,O[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/Q7.setFromMatrixColumn(J,0).length(),K=1/Q7.setFromMatrixColumn(J,1).length(),W=1/Q7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let G=W*H,q=W*N,F=X*H,R=X*N;Q[0]=Y*H,Q[4]=-Y*N,Q[8]=U,Q[1]=q+F*U,Q[5]=G-R*U,Q[9]=-X*Y,Q[2]=R-G*U,Q[6]=F+q*U,Q[10]=W*Y}else if(J.order==="YXZ"){let G=Y*H,q=Y*N,F=U*H,R=U*N;Q[0]=G+R*X,Q[4]=F*X-q,Q[8]=W*U,Q[1]=W*N,Q[5]=W*H,Q[9]=-X,Q[2]=q*X-F,Q[6]=R+G*X,Q[10]=W*Y}else if(J.order==="ZXY"){let G=Y*H,q=Y*N,F=U*H,R=U*N;Q[0]=G-R*X,Q[4]=-W*N,Q[8]=F+q*X,Q[1]=q+F*X,Q[5]=W*H,Q[9]=R-G*X,Q[2]=-W*U,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let G=W*H,q=W*N,F=X*H,R=X*N;Q[0]=Y*H,Q[4]=F*U-q,Q[8]=G*U+R,Q[1]=Y*N,Q[5]=R*U+G,Q[9]=q*U-F,Q[2]=-U,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let G=W*Y,q=W*U,F=X*Y,R=X*U;Q[0]=Y*H,Q[4]=R-G*N,Q[8]=F*N+q,Q[1]=N,Q[5]=W*H,Q[9]=-X*H,Q[2]=-U*H,Q[6]=q*N+F,Q[10]=G-R*N}else if(J.order==="XZY"){let G=W*Y,q=W*U,F=X*Y,R=X*U;Q[0]=Y*H,Q[4]=-N,Q[8]=U*H,Q[1]=G*N+R,Q[5]=W*H,Q[9]=q*N-F,Q[2]=F*N-q,Q[6]=X*H,Q[10]=R*N+G}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(wY,J,_Y)}lookAt(J,Q,$){let Z=this.elements;if(W9.subVectors(J,Q),W9.lengthSq()===0)W9.z=1;if(W9.normalize(),H8.crossVectors($,W9),H8.lengthSq()===0){if(Math.abs($.z)===1)W9.x+=0.0001;else W9.z+=0.0001;W9.normalize(),H8.crossVectors($,W9)}return H8.normalize(),v6.crossVectors(W9,H8),Z[0]=H8.x,Z[4]=v6.x,Z[8]=W9.x,Z[1]=H8.y,Z[5]=v6.y,Z[9]=W9.y,Z[2]=H8.z,Z[6]=v6.z,Z[10]=W9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],U=$[12],H=$[1],N=$[5],G=$[9],q=$[13],F=$[2],R=$[6],I=$[10],O=$[14],E=$[3],C=$[7],P=$[11],L=$[15],A=Z[0],w=Z[4],_=Z[8],V=Z[12],M=Z[1],m=Z[5],D=Z[9],p=Z[13],o=Z[2],x=Z[6],u=Z[10],n=Z[14],g=Z[3],e=Z[7],K0=Z[11],Y0=Z[15];return K[0]=W*A+X*M+Y*o+U*g,K[4]=W*w+X*m+Y*x+U*e,K[8]=W*_+X*D+Y*u+U*K0,K[12]=W*V+X*p+Y*n+U*Y0,K[1]=H*A+N*M+G*o+q*g,K[5]=H*w+N*m+G*x+q*e,K[9]=H*_+N*D+G*u+q*K0,K[13]=H*V+N*p+G*n+q*Y0,K[2]=F*A+R*M+I*o+O*g,K[6]=F*w+R*m+I*x+O*e,K[10]=F*_+R*D+I*u+O*K0,K[14]=F*V+R*p+I*n+O*Y0,K[3]=E*A+C*M+P*o+L*g,K[7]=E*w+C*m+P*x+L*e,K[11]=E*_+C*D+P*u+L*K0,K[15]=E*V+C*p+P*n+L*Y0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],U=J[13],H=J[2],N=J[6],G=J[10],q=J[14],F=J[3],R=J[7],I=J[11],O=J[15],E=Y*q-U*G,C=X*q-U*N,P=X*G-Y*N,L=W*q-U*H,A=W*G-Y*H,w=W*N-X*H;return Q*(R*E-I*C+O*P)-$*(F*E-I*L+O*A)+Z*(F*C-R*L+O*w)-K*(F*P-R*A+I*w)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],U=J[6],H=J[10];return Q*(W*H-X*U)-$*(K*H-X*Y)+Z*(K*U-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=J[9],G=J[10],q=J[11],F=J[12],R=J[13],I=J[14],O=J[15],E=Q*X-$*W,C=Q*Y-Z*W,P=Q*U-K*W,L=$*Y-Z*X,A=$*U-K*X,w=Z*U-K*Y,_=H*R-N*F,V=H*I-G*F,M=H*O-q*F,m=N*I-G*R,D=N*O-q*R,p=G*O-q*I,o=E*p-C*D+P*m+L*M-A*V+w*_;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/o;return J[0]=(X*p-Y*D+U*m)*x,J[1]=(Z*D-$*p-K*m)*x,J[2]=(R*w-I*A+O*L)*x,J[3]=(G*A-N*w-q*L)*x,J[4]=(Y*M-W*p-U*V)*x,J[5]=(Q*p-Z*M+K*V)*x,J[6]=(I*P-F*w-O*C)*x,J[7]=(H*w-G*P+q*C)*x,J[8]=(W*D-X*M+U*_)*x,J[9]=($*M-Q*D-K*_)*x,J[10]=(F*A-R*P+O*E)*x,J[11]=(N*P-H*A-q*E)*x,J[12]=(X*V-W*m-Y*_)*x,J[13]=(Q*m-$*V+Z*_)*x,J[14]=(R*C-F*L-I*E)*x,J[15]=(H*L-N*C+G*E)*x,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,U=K*W,H=K*X;return this.set(U*W+$,U*X-Z*Y,U*Y+Z*X,0,U*X+Z*Y,H*X+$,H*Y-Z*W,0,U*Y-Z*X,H*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,U=K+K,H=W+W,N=X+X,G=K*U,q=K*H,F=K*N,R=W*H,I=W*N,O=X*N,E=Y*U,C=Y*H,P=Y*N,L=$.x,A=$.y,w=$.z;return Z[0]=(1-(R+O))*L,Z[1]=(q+P)*L,Z[2]=(F-C)*L,Z[3]=0,Z[4]=(q-P)*A,Z[5]=(1-(G+O))*A,Z[6]=(I+E)*A,Z[7]=0,Z[8]=(F+C)*w,Z[9]=(I-E)*w,Z[10]=(1-(G+R))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=Q7.set(Z[0],Z[1],Z[2]).length(),X=Q7.set(Z[4],Z[5],Z[6]).length(),Y=Q7.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;P9.copy(this);let U=1/W,H=1/X,N=1/Y;return P9.elements[0]*=U,P9.elements[1]*=U,P9.elements[2]*=U,P9.elements[4]*=H,P9.elements[5]*=H,P9.elements[6]*=H,P9.elements[8]*=N,P9.elements[9]*=N,P9.elements[10]*=N,Q.setFromRotationMatrix(P9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2*K/(Q-J),N=2*K/($-Z),G=(Q+J)/(Q-J),q=($+Z)/($-Z),F,R;if(Y)F=K/(W-K),R=W*K/(W-K);else if(X===2000)F=-(W+K)/(W-K),R=-2*W*K/(W-K);else if(X===2001)F=-W/(W-K),R=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=G,U[12]=0,U[1]=0,U[5]=N,U[9]=q,U[13]=0,U[2]=0,U[6]=0,U[10]=F,U[14]=R,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2/(Q-J),N=2/($-Z),G=-(Q+J)/(Q-J),q=-($+Z)/($-Z),F,R;if(Y)F=1/(W-K),R=W/(W-K);else if(X===2000)F=-2/(W-K),R=-(W+K)/(W-K);else if(X===2001)F=-1/(W-K),R=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=0,U[12]=G,U[1]=0,U[5]=N,U[9]=0,U[13]=q,U[2]=0,U[6]=0,U[10]=F,U[14]=R,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var Q7=new j,P9=new kJ,wY=new j(0,0,0),_Y=new j(1,1,1),H8=new j,v6=new j,W9=new j,TK=new kJ,SK=new E9;class O9{constructor(J=0,Q=0,$=0,Z=O9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],U=Z[5],H=Z[9],N=Z[2],G=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(ZJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(G,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-ZJ(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(ZJ(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-N,q),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-ZJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(G,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(ZJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-ZJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(G,U),this._y=Math.atan2(X,K);else this._x=Math.atan2(-H,q),this._y=0;break;default:m0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return TK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(TK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return SK.setFromEuler(this),this.setFromQuaternion(SK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}O9.DEFAULT_ORDER="XYZ";class Y6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var CY=0,jK=new j,$7=new E9,n9=new kJ,f6=new j,l7=new j,TY=new j,SY=new E9,vK=new j(1,0,0),fK=new j(0,1,0),yK=new j(0,0,1),bK={type:"added"},jY={type:"removed"},Z7={type:"childadded",child:null},J$={type:"childremoved",child:null};class TJ extends $8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:CY++}),this.uuid=M7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=TJ.DEFAULT_UP.clone();let J=new j,Q=new O9,$=new E9,Z=new j(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new kJ},normalMatrix:{value:new o0}}),this.matrix=new kJ,this.matrixWorld=new kJ,this.matrixAutoUpdate=TJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return $7.setFromAxisAngle(J,Q),this.quaternion.multiply($7),this}rotateOnWorldAxis(J,Q){return $7.setFromAxisAngle(J,Q),this.quaternion.premultiply($7),this}rotateX(J){return this.rotateOnAxis(vK,J)}rotateY(J){return this.rotateOnAxis(fK,J)}rotateZ(J){return this.rotateOnAxis(yK,J)}translateOnAxis(J,Q){return jK.copy(J).applyQuaternion(this.quaternion),this.position.add(jK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(vK,J)}translateY(J){return this.translateOnAxis(fK,J)}translateZ(J){return this.translateOnAxis(yK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(n9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)f6.copy(J);else f6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),l7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)n9.lookAt(l7,f6,this.up);else n9.lookAt(f6,l7,this.up);if(this.quaternion.setFromRotationMatrix(n9),Z)n9.extractRotation(Z.matrixWorld),$7.setFromRotationMatrix(n9),this.quaternion.premultiply($7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return p0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(bK),Z7.child=J,this.dispatchEvent(Z7),Z7.child=null;else p0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(jY),J$.child=J,this.dispatchEvent(J$),J$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),n9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),n9.multiply(J.parent.matrixWorld);return J.applyMatrix4(n9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(bK),Z7.child=J,this.dispatchEvent(Z7),Z7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l7,J,TY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(l7,SY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let U=0,H=Y.length;U<H;U++){let N=Y[U];K(J.shapes,N)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,U=this.material.length;Y<U;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),U=W(J.textures),H=W(J.images),N=W(J.shapes),G=W(J.skeletons),q=W(J.animations),F=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(H.length>0)$.images=H;if(N.length>0)$.shapes=N;if(G.length>0)$.skeletons=G;if(q.length>0)$.animations=q;if(F.length>0)$.nodes=F}return $.object=Z,$;function W(X){let Y=[];for(let U in X){let H=X[U];delete H.metadata,Y.push(H)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}TJ.DEFAULT_UP=new j(0,1,0);TJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dJ extends TJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var vY={type:"move"};class U6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new dJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new dJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new dJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let R of J.hand.values()){let I=Q.getJointPose(R,$),O=this._getHandJoint(U,R);if(I!==null)O.matrix.fromArray(I.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=I.radius;O.visible=I!==null}let H=U.joints["index-finger-tip"],N=U.joints["thumb-tip"],G=H.position.distanceTo(N.position),q=0.02,F=0.005;if(U.inputState.pinching&&G>q+F)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&G<=q-F)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(vY)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new dJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var ZX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},q8={h:0,s:0,l:0},y6={h:0,s:0,l:0};function Q$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class QJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,WJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=WJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,WJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=WJ.workingColorSpace){if(J=MY(J,1),Q=ZJ(Q,0,1),$=ZJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=Q$(W,K,J+0.3333333333333333),this.g=Q$(W,K,J),this.b=Q$(W,K,J-0.3333333333333333)}return WJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)m0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:m0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else m0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=ZX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else m0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=t9(J.r),this.g=t9(J.g),this.b=t9(J.b),this}copyLinearToSRGB(J){return this.r=O7(J.r),this.g=O7(J.g),this.b=O7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return WJ.workingToColorSpace(sJ.copy(this),J),Math.round(ZJ(sJ.r*255,0,255))*65536+Math.round(ZJ(sJ.g*255,0,255))*256+Math.round(ZJ(sJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=WJ.workingColorSpace){WJ.workingToColorSpace(sJ.copy(this),Q);let{r:$,g:Z,b:K}=sJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,U,H=(X+W)/2;if(X===W)Y=0,U=0;else{let N=W-X;switch(U=H<=0.5?N/(W+X):N/(2-W-X),W){case $:Y=(Z-K)/N+(Z<K?6:0);break;case Z:Y=(K-$)/N+2;break;case K:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=U,J.l=H,J}getRGB(J,Q=WJ.workingColorSpace){return WJ.workingToColorSpace(sJ.copy(this),Q),J.r=sJ.r,J.g=sJ.g,J.b=sJ.b,J}getStyle(J="srgb"){WJ.workingToColorSpace(sJ.copy(this),J);let{r:Q,g:$,b:Z}=sJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(q8),this.setHSL(q8.h+J,q8.s+Q,q8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(q8),J.getHSL(y6);let $=oQ(q8.h,y6.h,Q),Z=oQ(q8.s,y6.s,Q),K=oQ(q8.l,y6.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var sJ=new QJ;QJ.NAMES=ZX;class I7 extends TJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new O9,this.environmentIntensity=1,this.environmentRotation=new O9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var w9=new j,s9=new j,$$=new j,i9=new j,K7=new j,W7=new j,hK=new j,Z$=new j,K$=new j,W$=new j,X$=new IJ,Y$=new IJ,U$=new IJ;class F9{constructor(J=new j,Q=new j,$=new j){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),w9.subVectors(J,Q),Z.cross(w9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){w9.subVectors(Z,Q),s9.subVectors($,Q),$$.subVectors(J,Q);let W=w9.dot(w9),X=w9.dot(s9),Y=w9.dot($$),U=s9.dot(s9),H=s9.dot($$),N=W*U-X*X;if(N===0)return K.set(0,0,0),null;let G=1/N,q=(U*Y-X*H)*G,F=(W*H-X*Y)*G;return K.set(1-q-F,F,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,i9)===null)return!1;return i9.x>=0&&i9.y>=0&&i9.x+i9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,i9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,i9.x),Y.addScaledVector(W,i9.y),Y.addScaledVector(X,i9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return X$.setScalar(0),Y$.setScalar(0),U$.setScalar(0),X$.fromBufferAttribute(J,Q),Y$.fromBufferAttribute(J,$),U$.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(X$,K.x),W.addScaledVector(Y$,K.y),W.addScaledVector(U$,K.z),W}static isFrontFacing(J,Q,$,Z){return w9.subVectors($,Q),s9.subVectors(J,Q),w9.cross(s9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return w9.subVectors(this.c,this.b),s9.subVectors(this.a,this.b),w9.cross(s9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return F9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return F9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return F9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return F9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return F9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;K7.subVectors(Z,$),W7.subVectors(K,$),Z$.subVectors(J,$);let Y=K7.dot(Z$),U=W7.dot(Z$);if(Y<=0&&U<=0)return Q.copy($);K$.subVectors(J,Z);let H=K7.dot(K$),N=W7.dot(K$);if(H>=0&&N<=H)return Q.copy(Z);let G=Y*N-H*U;if(G<=0&&Y>=0&&H<=0)return W=Y/(Y-H),Q.copy($).addScaledVector(K7,W);W$.subVectors(J,K);let q=K7.dot(W$),F=W7.dot(W$);if(F>=0&&q<=F)return Q.copy(K);let R=q*U-Y*F;if(R<=0&&U>=0&&F<=0)return X=U/(U-F),Q.copy($).addScaledVector(W7,X);let I=H*F-q*N;if(I<=0&&N-H>=0&&q-F>=0)return hK.subVectors(K,Z),X=(N-H)/(N-H+(q-F)),Q.copy(Z).addScaledVector(hK,X);let O=1/(I+R+G);return W=R*O,X=G*O,Q.copy($).addScaledVector(K7,W).addScaledVector(W7,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class Z8{constructor(J=new j(1/0,1/0,1/0),Q=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(_9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(_9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=_9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,_9);else _9.fromBufferAttribute(K,W);_9.applyMatrix4(J.matrixWorld),this.expandByPoint(_9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();b6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();b6.copy($.boundingBox)}b6.applyMatrix4(J.matrixWorld),this.union(b6)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,_9),_9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(d7),h6.subVectors(this.max,d7),X7.subVectors(J.a,d7),Y7.subVectors(J.b,d7),U7.subVectors(J.c,d7),N8.subVectors(Y7,X7),G8.subVectors(U7,Y7),w8.subVectors(X7,U7);let Q=[0,-N8.z,N8.y,0,-G8.z,G8.y,0,-w8.z,w8.y,N8.z,0,-N8.x,G8.z,0,-G8.x,w8.z,0,-w8.x,-N8.y,N8.x,0,-G8.y,G8.x,0,-w8.y,w8.x,0];if(!H$(Q,X7,Y7,U7,h6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!H$(Q,X7,Y7,U7,h6))return!1;return x6.crossVectors(N8,G8),Q=[x6.x,x6.y,x6.z],H$(Q,X7,Y7,U7,h6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,_9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(_9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return o9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),o9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),o9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),o9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),o9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),o9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),o9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),o9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(o9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var o9=[new j,new j,new j,new j,new j,new j,new j,new j],_9=new j,b6=new Z8,X7=new j,Y7=new j,U7=new j,N8=new j,G8=new j,w8=new j,d7=new j,h6=new j,x6=new j,_8=new j;function H$(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){_8.fromArray(J,W);let Y=K.x*Math.abs(_8.x)+K.y*Math.abs(_8.y)+K.z*Math.abs(_8.z),U=Q.dot(_8),H=$.dot(_8),N=Z.dot(_8);if(Math.max(-Math.max(U,H,N),Math.min(U,H,N))>Y)return!1}return!0}var vJ=new j,g6=new D0,fY=0;class Y9 extends $8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)g6.fromBufferAttribute(this,Q),g6.applyMatrix3(J),this.setXY(Q,g6.x,g6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyMatrix3(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyMatrix4(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.applyNormalMatrix(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)vJ.fromBufferAttribute(this,Q),vJ.transformDirection(J),this.setXYZ(Q,vJ.x,vJ.y,vJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=m7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=$9($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=m7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=m7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=m7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=m7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=$9(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=$9(Q,this.array),$=$9($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=$9(Q,this.array),$=$9($,this.array),Z=$9(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=$9(Q,this.array),$=$9($,this.array),Z=$9(Z,this.array),K=$9(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class LQ extends Y9{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class zQ extends Y9{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class oJ extends Y9{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var yY=new Z8,u7=new j,q$=new j;class g8{constructor(J=new j,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else yY.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;u7.subVectors(J,this.center);let Q=u7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(u7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else q$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(u7.copy(J.center).add(q$)),this.expandByPoint(u7.copy(J.center).sub(q$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var bY=0,G9=new kJ,N$=new TJ,H7=new j,X9=new Z8,c7=new Z8,xJ=new j;class k9 extends $8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bY++}),this.uuid=M7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((zY(J))?zQ:LQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new o0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return G9.makeRotationFromQuaternion(J),this.applyMatrix4(G9),this}rotateX(J){return G9.makeRotationX(J),this.applyMatrix4(G9),this}rotateY(J){return G9.makeRotationY(J),this.applyMatrix4(G9),this}rotateZ(J){return G9.makeRotationZ(J),this.applyMatrix4(G9),this}translate(J,Q,$){return G9.makeTranslation(J,Q,$),this.applyMatrix4(G9),this}scale(J,Q,$){return G9.makeScale(J,Q,$),this.applyMatrix4(G9),this}lookAt(J){return N$.lookAt(J),N$.updateMatrix(),this.applyMatrix4(N$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(H7).negate(),this.translate(H7.x,H7.y,H7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new oJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)m0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Z8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){p0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(X9.setFromBufferAttribute(K),this.morphTargetsRelative)xJ.addVectors(this.boundingBox.min,X9.min),this.boundingBox.expandByPoint(xJ),xJ.addVectors(this.boundingBox.max,X9.max),this.boundingBox.expandByPoint(xJ);else this.boundingBox.expandByPoint(X9.min),this.boundingBox.expandByPoint(X9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))p0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new g8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){p0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(J){let $=this.boundingSphere.center;if(X9.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(c7.setFromBufferAttribute(X),this.morphTargetsRelative)xJ.addVectors(X9.min,c7.min),X9.expandByPoint(xJ),xJ.addVectors(X9.max,c7.max),X9.expandByPoint(xJ);else X9.expandByPoint(c7.min),X9.expandByPoint(c7.max)}X9.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)xJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(xJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let U=0,H=X.count;U<H;U++){if(xJ.fromBufferAttribute(X,U),Y)H7.fromBufferAttribute(J,U),xJ.add(H7);Z=Math.max(Z,$.distanceToSquared(xJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))p0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){p0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new Y9(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<$.count;_++)X[_]=new j,Y[_]=new j;let U=new j,H=new j,N=new j,G=new D0,q=new D0,F=new D0,R=new j,I=new j;function O(_,V,M){U.fromBufferAttribute($,_),H.fromBufferAttribute($,V),N.fromBufferAttribute($,M),G.fromBufferAttribute(K,_),q.fromBufferAttribute(K,V),F.fromBufferAttribute(K,M),H.sub(U),N.sub(U),q.sub(G),F.sub(G);let m=1/(q.x*F.y-F.x*q.y);if(!isFinite(m))return;R.copy(H).multiplyScalar(F.y).addScaledVector(N,-q.y).multiplyScalar(m),I.copy(N).multiplyScalar(q.x).addScaledVector(H,-F.x).multiplyScalar(m),X[_].add(R),X[V].add(R),X[M].add(R),Y[_].add(I),Y[V].add(I),Y[M].add(I)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let _=0,V=E.length;_<V;++_){let M=E[_],m=M.start,D=M.count;for(let p=m,o=m+D;p<o;p+=3)O(J.getX(p+0),J.getX(p+1),J.getX(p+2))}let C=new j,P=new j,L=new j,A=new j;function w(_){L.fromBufferAttribute(Z,_),A.copy(L);let V=X[_];C.copy(V),C.sub(L.multiplyScalar(L.dot(V))).normalize(),P.crossVectors(A,V);let m=P.dot(Y[_])<0?-1:1;W.setXYZW(_,C.x,C.y,C.z,m)}for(let _=0,V=E.length;_<V;++_){let M=E[_],m=M.start,D=M.count;for(let p=m,o=m+D;p<o;p+=3)w(J.getX(p+0)),w(J.getX(p+1)),w(J.getX(p+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new Y9(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let G=0,q=$.count;G<q;G++)$.setXYZ(G,0,0,0);let Z=new j,K=new j,W=new j,X=new j,Y=new j,U=new j,H=new j,N=new j;if(J)for(let G=0,q=J.count;G<q;G+=3){let F=J.getX(G+0),R=J.getX(G+1),I=J.getX(G+2);Z.fromBufferAttribute(Q,F),K.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,I),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),X.fromBufferAttribute($,F),Y.fromBufferAttribute($,R),U.fromBufferAttribute($,I),X.add(H),Y.add(H),U.add(H),$.setXYZ(F,X.x,X.y,X.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(I,U.x,U.y,U.z)}else for(let G=0,q=Q.count;G<q;G+=3)Z.fromBufferAttribute(Q,G+0),K.fromBufferAttribute(Q,G+1),W.fromBufferAttribute(Q,G+2),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),$.setXYZ(G+0,H.x,H.y,H.z),$.setXYZ(G+1,H.x,H.y,H.z),$.setXYZ(G+2,H.x,H.y,H.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)xJ.fromBufferAttribute(J,Q),xJ.normalize(),J.setXYZ(Q,xJ.x,xJ.y,xJ.z)}toNonIndexed(){function J(X,Y){let{array:U,itemSize:H,normalized:N}=X,G=new U.constructor(Y.length*H),q=0,F=0;for(let R=0,I=Y.length;R<I;R++){if(X.isInterleavedBufferAttribute)q=Y[R]*X.data.stride+X.offset;else q=Y[R]*H;for(let O=0;O<H;O++)G[F++]=U[q++]}return new Y9(G,H,N)}if(this.index===null)return m0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new k9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],U=J(Y,$);Q.setAttribute(X,U)}let K=this.morphAttributes;for(let X in K){let Y=[],U=K[X];for(let H=0,N=U.length;H<N;H++){let G=U[H],q=J(G,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let U=W[X];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],H=[];for(let N=0,G=U.length;N<G;N++){let q=U[N];H.push(q.toJSON(J.data))}if(H.length>0)Z[Y]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone(Q))}let K=J.morphAttributes;for(let U in K){let H=[],N=K[U];for(let G=0,q=N.length;G<q;G++)H.push(N[G].clone(Q));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let N=W[U];this.addGroup(N.start,N.count,N.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var hY=0;class k8 extends $8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:hY++}),this.uuid=M7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new QJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){m0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){m0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new QJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new D0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new D0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var a9=new j,G$=new j,p6=new j,F8=new j,F$=new j,m6=new j,O$=new j;class BQ{constructor(J=new j,Q=new j(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,a9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=a9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return a9.copy(this.origin).addScaledVector(this.direction,Q),a9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){G$.copy(J).add(Q).multiplyScalar(0.5),p6.copy(Q).sub(J).normalize(),F8.copy(this.origin).sub(G$);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(p6),X=F8.dot(this.direction),Y=-F8.dot(p6),U=F8.lengthSq(),H=Math.abs(1-W*W),N,G,q,F;if(H>0)if(N=W*Y-X,G=W*X-Y,F=K*H,N>=0)if(G>=-F)if(G<=F){let R=1/H;N*=R,G*=R,q=N*(N+W*G+2*X)+G*(W*N+G+2*Y)+U}else G=K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;else G=-K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;else if(G<=-F)N=Math.max(0,-(-W*K+X)),G=N>0?-K:Math.min(Math.max(-K,-Y),K),q=-N*N+G*(G+2*Y)+U;else if(G<=F)N=0,G=Math.min(Math.max(-K,-Y),K),q=G*(G+2*Y)+U;else N=Math.max(0,-(W*K+X)),G=N>0?K:Math.min(Math.max(-K,-Y),K),q=-N*N+G*(G+2*Y)+U;else G=W>0?-K:K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(G$).addScaledVector(p6,G);return q}intersectSphere(J,Q){a9.subVectors(J.center,this.origin);let $=a9.dot(this.direction),Z=a9.dot(a9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,U=1/this.direction.x,H=1/this.direction.y,N=1/this.direction.z,G=this.origin;if(U>=0)$=(J.min.x-G.x)*U,Z=(J.max.x-G.x)*U;else $=(J.max.x-G.x)*U,Z=(J.min.x-G.x)*U;if(H>=0)K=(J.min.y-G.y)*H,W=(J.max.y-G.y)*H;else K=(J.max.y-G.y)*H,W=(J.min.y-G.y)*H;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)X=(J.min.z-G.z)*N,Y=(J.max.z-G.z)*N;else X=(J.max.z-G.z)*N,Y=(J.min.z-G.z)*N;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,a9)!==null}intersectTriangle(J,Q,$,Z,K){F$.subVectors(Q,J),m6.subVectors($,J),O$.crossVectors(F$,m6);let W=this.direction.dot(O$),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;F8.subVectors(this.origin,J);let Y=X*this.direction.dot(m6.crossVectors(F8,m6));if(Y<0)return null;let U=X*this.direction.dot(F$.cross(F8));if(U<0)return null;if(Y+U>W)return null;let H=-X*F8.dot(O$);if(H<0)return null;return this.at(H/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pJ extends k8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new QJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var xK=new kJ,C8=new BQ,l6=new g8,gK=new j,d6=new j,u6=new j,c6=new j,E$=new j,n6=new j,pK=new j,s6=new j;class g0 extends TJ{constructor(J=new k9,Q=new pJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){n6.set(0,0,0);for(let Y=0,U=K.length;Y<U;Y++){let H=X[Y],N=K[Y];if(H===0)continue;if(E$.fromBufferAttribute(N,J),W)n6.addScaledVector(E$,H);else n6.addScaledVector(E$.sub(Q),H)}Q.add(n6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(l6.copy($.boundingSphere),l6.applyMatrix4(K),C8.copy(J.ray).recast(J.near),l6.containsPoint(C8.origin)===!1){if(C8.intersectSphere(l6,gK)===null)return;if(C8.origin.distanceToSquared(gK)>(J.far-J.near)**2)return}if(xK.copy(K).invert(),C8.copy(J.ray).applyMatrix4(xK),$.boundingBox!==null){if(C8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,C8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,N=K.attributes.normal,G=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let F=0,R=G.length;F<R;F++){let I=G[F],O=W[I.materialIndex],E=Math.max(I.start,q.start),C=Math.min(X.count,Math.min(I.start+I.count,q.start+q.count));for(let P=E,L=C;P<L;P+=3){let A=X.getX(P),w=X.getX(P+1),_=X.getX(P+2);if(Z=i6(this,O,J,$,U,H,N,A,w,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),R=Math.min(X.count,q.start+q.count);for(let I=F,O=R;I<O;I+=3){let E=X.getX(I),C=X.getX(I+1),P=X.getX(I+2);if(Z=i6(this,W,J,$,U,H,N,E,C,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let F=0,R=G.length;F<R;F++){let I=G[F],O=W[I.materialIndex],E=Math.max(I.start,q.start),C=Math.min(Y.count,Math.min(I.start+I.count,q.start+q.count));for(let P=E,L=C;P<L;P+=3){let A=P,w=P+1,_=P+2;if(Z=i6(this,O,J,$,U,H,N,A,w,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),R=Math.min(Y.count,q.start+q.count);for(let I=F,O=R;I<O;I+=3){let E=I,C=I+1,P=I+2;if(Z=i6(this,W,J,$,U,H,N,E,C,P),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function xY(J,Q,$,Z,K,W,X,Y){let U;if(Q.side===1)U=Z.intersectTriangle(X,W,K,!0,Y);else U=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(U===null)return null;s6.copy(Y),s6.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(s6);if(H<$.near||H>$.far)return null;return{distance:H,point:s6.clone(),object:J}}function i6(J,Q,$,Z,K,W,X,Y,U,H){J.getVertexPosition(Y,d6),J.getVertexPosition(U,u6),J.getVertexPosition(H,c6);let N=xY(J,Q,$,Z,d6,u6,c6,pK);if(N){let G=new j;if(F9.getBarycoord(pK,d6,u6,c6,G),K)N.uv=F9.getInterpolatedAttribute(K,Y,U,H,G,new D0);if(W)N.uv1=F9.getInterpolatedAttribute(W,Y,U,H,G,new D0);if(X){if(N.normal=F9.getInterpolatedAttribute(X,Y,U,H,G,new j),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let q={a:Y,b:U,c:H,normal:new j,materialIndex:0};F9.getNormal(d6,u6,c6,q.normal),N.face=q,N.barycoord=G}return N}class MQ extends gJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,U=1003,H=1003,N,G){super(null,W,X,Y,U,H,Z,K,N,G);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KQ extends Y9{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var q7=new kJ,mK=new kJ,o6=[],lK=new Z8,gY=new kJ,n7=new g0,s7=new g8;class A7 extends g0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new KQ(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,gY)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new Z8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,q7),lK.copy(J.boundingBox).applyMatrix4(q7),this.boundingBox.union(lK)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new g8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,q7),s7.copy(J.boundingSphere).applyMatrix4(q7),this.boundingSphere.union(s7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(n7.geometry=this.geometry,n7.material=this.material,n7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(s7.copy(this.boundingSphere),s7.applyMatrix4($),J.ray.intersectsSphere(s7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,q7),mK.multiplyMatrices($,q7),n7.matrixWorld=mK,n7.raycast(J,o6);for(let W=0,X=o6.length;W<X;W++){let Y=o6[W];Y.instanceId=K,Y.object=this,Q.push(Y)}o6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new KQ(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new MQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let U=0;U<$.length;U++)W+=$[U];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var D$=new j,pY=new j,mY=new o0;class r9{constructor(J=new j(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=D$.subVectors($,Q).cross(pY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(D$),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||mY.getNormalMatrix(J),Z=this.coplanarPoint(D$).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var T8=new g8,lY=new D0(0.5,0.5),a6=new j;class H6{constructor(J=new r9,Q=new r9,$=new r9,Z=new r9,K=new r9,W=new r9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],U=K[3],H=K[4],N=K[5],G=K[6],q=K[7],F=K[8],R=K[9],I=K[10],O=K[11],E=K[12],C=K[13],P=K[14],L=K[15];if(Z[0].setComponents(U-W,q-H,O-F,L-E).normalize(),Z[1].setComponents(U+W,q+H,O+F,L+E).normalize(),Z[2].setComponents(U+X,q+N,O+R,L+C).normalize(),Z[3].setComponents(U-X,q-N,O-R,L-C).normalize(),$)Z[4].setComponents(Y,G,I,P).normalize(),Z[5].setComponents(U-Y,q-G,O-I,L-P).normalize();else if(Z[4].setComponents(U-Y,q-G,O-I,L-P).normalize(),Q===2000)Z[5].setComponents(U+Y,q+G,O+I,L+P).normalize();else if(Q===2001)Z[5].setComponents(Y,G,I,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T8)}intersectsSprite(J){T8.center.set(0,0,0);let Q=lY.distanceTo(J.center);return T8.radius=0.7071067811865476+Q,T8.applyMatrix4(J.matrixWorld),this.intersectsSphere(T8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(a6.x=Z.normal.x>0?J.max.x:J.min.x,a6.y=Z.normal.y>0?J.max.y:J.min.y,a6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(a6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IQ extends gJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,U,H){super(J,Q,$,Z,K,W,X,Y,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class g9 extends gJ{constructor(J,Q,$,Z,K,W,X,Y,U){super(J,Q,$,Z,K,W,X,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class R8 extends gJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,U,H=1026,N=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let G={width:J,height:Q,depth:N};super(G,Z,K,W,X,Y,H,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new X6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class wZ extends R8{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,U=1026){let H={width:J,height:J,depth:1},N=[H,H,H,H,H,H];super(J,J,Q,$,Z,K,W,X,Y,U);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class AQ extends gJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class AJ extends k9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],U=[],H=[],N=[],G=0,q=0;F("z","y","x",-1,-1,$,Q,J,W,K,0),F("z","y","x",1,-1,$,Q,-J,W,K,1),F("x","z","y",1,1,J,$,Q,Z,W,2),F("x","z","y",1,-1,J,$,-Q,Z,W,3),F("x","y","z",1,-1,J,Q,$,Z,K,4),F("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new oJ(U,3)),this.setAttribute("normal",new oJ(H,3)),this.setAttribute("uv",new oJ(N,2));function F(R,I,O,E,C,P,L,A,w,_,V){let M=P/w,m=L/_,D=P/2,p=L/2,o=A/2,x=w+1,u=_+1,n=0,g=0,e=new j;for(let K0=0;K0<u;K0++){let Y0=K0*m-p;for(let w0=0;w0<x;w0++){let k0=w0*M-D;e[R]=k0*E,e[I]=Y0*C,e[O]=o,U.push(e.x,e.y,e.z),e[R]=0,e[I]=0,e[O]=A>0?1:-1,H.push(e.x,e.y,e.z),N.push(w0/w),N.push(1-K0/_),n+=1}}for(let K0=0;K0<_;K0++)for(let Y0=0;Y0<w;Y0++){let w0=G+Y0+x*K0,k0=G+Y0+x*(K0+1),qJ=G+(Y0+1)+x*(K0+1),YJ=G+(Y0+1)+x*K0;Y.push(w0,k0,YJ),Y.push(k0,qJ,YJ),g+=6}X.addGroup(q,g,V),q+=g,G+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new AJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class j9 extends k9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let U=this;Z=Math.floor(Z),K=Math.floor(K);let H=[],N=[],G=[],q=[],F=0,R=[],I=$/2,O=0;if(E(),W===!1){if(J>0)C(!0);if(Q>0)C(!1)}this.setIndex(H),this.setAttribute("position",new oJ(N,3)),this.setAttribute("normal",new oJ(G,3)),this.setAttribute("uv",new oJ(q,2));function E(){let P=new j,L=new j,A=0,w=(Q-J)/$;for(let _=0;_<=K;_++){let V=[],M=_/K,m=M*(Q-J)+J;for(let D=0;D<=Z;D++){let p=D/Z,o=p*Y+X,x=Math.sin(o),u=Math.cos(o);L.x=m*x,L.y=-M*$+I,L.z=m*u,N.push(L.x,L.y,L.z),P.set(x,w,u).normalize(),G.push(P.x,P.y,P.z),q.push(p,1-M),V.push(F++)}R.push(V)}for(let _=0;_<Z;_++)for(let V=0;V<K;V++){let M=R[V][_],m=R[V+1][_],D=R[V+1][_+1],p=R[V][_+1];if(J>0||V!==0)H.push(M,m,p),A+=3;if(Q>0||V!==K-1)H.push(m,D,p),A+=3}U.addGroup(O,A,0),O+=A}function C(P){let L=F,A=new D0,w=new j,_=0,V=P===!0?J:Q,M=P===!0?1:-1;for(let D=1;D<=Z;D++)N.push(0,I*M,0),G.push(0,M,0),q.push(0.5,0.5),F++;let m=F;for(let D=0;D<=Z;D++){let o=D/Z*Y+X,x=Math.cos(o),u=Math.sin(o);w.x=V*u,w.y=I*M,w.z=V*x,N.push(w.x,w.y,w.z),G.push(0,M,0),A.x=x*0.5+0.5,A.y=u*0.5*M+0.5,q.push(A.x,A.y),F++}for(let D=0;D<Z;D++){let p=L+D,o=m+D;if(P===!0)H.push(o,o+1,p);else H.push(o+1,o,p);_+=3}U.addGroup(O,_,P===!0?1:2),O+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class R9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){m0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let X=0,Y=K-1,U;while(X<=Y)if(Z=Math.floor(X+(Y-X)/2),U=$[Z]-W,U<0)X=Z+1;else if(U>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===W)return Z/(K-1);let H=$[Z],G=$[Z+1]-H,q=(W-H)/G;return(Z+q)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),X=this.getPoint(K),Y=Q||(W.isVector2?new D0:new j);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new j,Z=[],K=[],W=[],X=new j,Y=new kJ;for(let q=0;q<=J;q++){let F=q/J;Z[q]=this.getTangentAt(F,new j)}K[0]=new j,W[0]=new j;let U=Number.MAX_VALUE,H=Math.abs(Z[0].x),N=Math.abs(Z[0].y),G=Math.abs(Z[0].z);if(H<=U)U=H,$.set(1,0,0);if(N<=U)U=N,$.set(0,1,0);if(G<=U)$.set(0,0,1);X.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],X),W[0].crossVectors(Z[0],K[0]);for(let q=1;q<=J;q++){if(K[q]=K[q-1].clone(),W[q]=W[q-1].clone(),X.crossVectors(Z[q-1],Z[q]),X.length()>Number.EPSILON){X.normalize();let F=Math.acos(ZJ(Z[q-1].dot(Z[q]),-1,1));K[q].applyMatrix4(Y.makeRotationAxis(X,F))}W[q].crossVectors(Z[q],K[q])}if(Q===!0){let q=Math.acos(ZJ(K[0].dot(K[J]),-1,1));if(q/=J,Z[0].dot(X.crossVectors(K[0],K[J]))>0)q=-q;for(let F=1;F<=J;F++)K[F].applyMatrix4(Y.makeRotationAxis(Z[F],q*F)),W[F].crossVectors(Z[F],K[F])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class q6 extends R9{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,Q=new D0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let X=this.aStartAngle+J*K,Y=this.aX+this.xRadius*Math.cos(X),U=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let H=Math.cos(this.aRotation),N=Math.sin(this.aRotation),G=Y-this.aX,q=U-this.aY;Y=G*H-q*N+this.aX,U=G*N+q*H+this.aY}return $.set(Y,U)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class _Z extends q6{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function CZ(){let J=0,Q=0,$=0,Z=0;function K(W,X,Y,U){J=W,Q=Y,$=-3*W+3*X-2*Y-U,Z=2*W-2*X+Y+U}return{initCatmullRom:function(W,X,Y,U,H){K(X,Y,H*(Y-W),H*(U-X))},initNonuniformCatmullRom:function(W,X,Y,U,H,N,G){let q=(X-W)/H-(Y-W)/(H+N)+(Y-X)/N,F=(Y-X)/N-(U-X)/(N+G)+(U-Y)/G;q*=N,F*=N,K(X,Y,q,F)},calc:function(W){let X=W*W,Y=X*W;return J+Q*W+$*X+Z*Y}}}var dK=new j,uK=new j,k$=new CZ,R$=new CZ,V$=new CZ;class TZ extends R9{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new j){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/K)+1)*K;else if(Y===0&&X===K-1)X=K-2,Y=1;let U,H;if(this.closed||X>0)U=Z[(X-1)%K];else uK.subVectors(Z[0],Z[1]).add(Z[0]),U=uK;let N=Z[X%K],G=Z[(X+1)%K];if(this.closed||X+2<K)H=Z[(X+2)%K];else dK.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),H=dK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let q=this.curveType==="chordal"?0.5:0.25,F=Math.pow(U.distanceToSquared(N),q),R=Math.pow(N.distanceToSquared(G),q),I=Math.pow(G.distanceToSquared(H),q);if(R<0.0001)R=1;if(F<0.0001)F=R;if(I<0.0001)I=R;k$.initNonuniformCatmullRom(U.x,N.x,G.x,H.x,F,R,I),R$.initNonuniformCatmullRom(U.y,N.y,G.y,H.y,F,R,I),V$.initNonuniformCatmullRom(U.z,N.z,G.z,H.z,F,R,I)}else if(this.curveType==="catmullrom")k$.initCatmullRom(U.x,N.x,G.x,H.x,this.tension),R$.initCatmullRom(U.y,N.y,G.y,H.y,this.tension),V$.initCatmullRom(U.z,N.z,G.z,H.z,this.tension);return $.set(k$.calc(Y),R$.calc(Y),V$.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new j().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function cK(J,Q,$,Z,K){let W=(Z-Q)*0.5,X=(K-$)*0.5,Y=J*J,U=J*Y;return(2*$-2*Z+W+X)*U+(-3*$+3*Z-2*W-X)*Y+W*J+$}function dY(J,Q){let $=1-J;return $*$*Q}function uY(J,Q){return 2*(1-J)*J*Q}function cY(J,Q){return J*J*Q}function o7(J,Q,$,Z){return dY(J,Q)+uY(J,$)+cY(J,Z)}function nY(J,Q){let $=1-J;return $*$*$*Q}function sY(J,Q){let $=1-J;return 3*$*$*J*Q}function iY(J,Q){return 3*(1-J)*J*J*Q}function oY(J,Q){return J*J*J*Q}function a7(J,Q,$,Z,K){return nY(J,Q)+sY(J,$)+iY(J,Z)+oY(J,K)}class PQ extends R9{constructor(J=new D0,Q=new D0,$=new D0,Z=new D0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new D0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(a7(J,Z.x,K.x,W.x,X.x),a7(J,Z.y,K.y,W.y,X.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class SZ extends R9{constructor(J=new j,Q=new j,$=new j,Z=new j){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new j){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(a7(J,Z.x,K.x,W.x,X.x),a7(J,Z.y,K.y,W.y,X.y),a7(J,Z.z,K.z,W.z,X.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class wQ extends R9{constructor(J=new D0,Q=new D0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new D0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new D0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class jZ extends R9{constructor(J=new j,Q=new j){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new j){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new j){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class _Q extends R9{constructor(J=new D0,Q=new D0,$=new D0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new D0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(o7(J,Z.x,K.x,W.x),o7(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class vZ extends R9{constructor(J=new j,Q=new j,$=new j){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new j){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(o7(J,Z.x,K.x,W.x),o7(J,Z.y,K.y,W.y),o7(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class CQ extends R9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new D0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),X=K-W,Y=Z[W===0?W:W-1],U=Z[W],H=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return $.set(cK(X,Y.x,U.x,H.x,N.x),cK(X,Y.y,U.y,H.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new D0().fromArray(Z))}return this}}var z$=Object.freeze({__proto__:null,ArcCurve:_Z,CatmullRomCurve3:TZ,CubicBezierCurve:PQ,CubicBezierCurve3:SZ,EllipseCurve:q6,LineCurve:wQ,LineCurve3:jZ,QuadraticBezierCurve:_Q,QuadraticBezierCurve3:vZ,SplineCurve:CQ});class fZ extends R9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new z$[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,X=this.curves[K],Y=X.getLength(),U=Y===0?0:1-W/Y;return X.getPointAt(U,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],X=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,Y=W.getPoints(X);for(let U=0;U<Y.length;U++){let H=Y[U];if($&&$.equals(H))continue;Q.push(H),$=H}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new z$[Z.type]().fromJSON(Z))}return this}}class WQ extends fZ{constructor(J){super();if(this.type="Path",this.currentPoint=new D0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new wQ(this.currentPoint.clone(),new D0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new _Q(this.currentPoint.clone(),new D0(J,Q),new D0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let X=new PQ(this.currentPoint.clone(),new D0(J,Q),new D0($,Z),new D0(K,W));return this.curves.push(X),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new CQ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let X=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+X,Q+Y,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,X,Y){let U=this.currentPoint.x,H=this.currentPoint.y;return this.absellipse(J+U,Q+H,$,Z,K,W,X,Y),this}absellipse(J,Q,$,Z,K,W,X,Y){let U=new q6(J,Q,$,Z,K,W,X,Y);if(this.curves.length>0){let N=U.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(U);let H=U.getPoint(1);return this.currentPoint.copy(H),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class N6 extends WQ{constructor(J){super(J);this.uuid=M7(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new WQ().fromJSON(Z))}return this}}function aY(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=KX(J,0,K,$,!0),X=[];if(!W||W.next===W.prev)return X;let Y,U,H;if(Z)W=QU(J,Q,W,$);if(J.length>80*$){Y=J[0],U=J[1];let N=Y,G=U;for(let q=$;q<K;q+=$){let F=J[q],R=J[q+1];if(F<Y)Y=F;if(R<U)U=R;if(F>N)N=F;if(R>G)G=R}H=Math.max(N-Y,G-U),H=H!==0?32767/H:0}return r7(W,X,$,Y,U,H,0),X}function KX(J,Q,$,Z,K){let W;if(K===GU(J,Q,$,Z)>0)for(let X=Q;X<$;X+=Z)W=nK(X/Z|0,J[X],J[X+1],W);else for(let X=$-Z;X>=Q;X-=Z)W=nK(X/Z|0,J[X],J[X+1],W);if(W&&k7(W,W.next))e7(W),W=W.next;return W}function v8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(k7($,$.next)||wJ($.prev,$,$.next)===0)){if(e7($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function r7(J,Q,$,Z,K,W,X){if(!J)return;if(!X&&W)XU(J,Z,K,W);let Y=J;while(J.prev!==J.next){let{prev:U,next:H}=J;if(W?tY(J,Z,K,W):rY(J)){Q.push(U.i,J.i,H.i),e7(J),J=H.next,Y=H.next;continue}if(J=H,J===Y){if(!X)r7(v8(J),Q,$,Z,K,W,1);else if(X===1)J=eY(v8(J),Q),r7(J,Q,$,Z,K,W,2);else if(X===2)JU(J,Q,$,Z,K,W);break}}}function rY(J){let Q=J.prev,$=J,Z=J.next;if(wJ(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,X=Z.x,Y=Q.y,U=$.y,H=Z.y,N=Math.min(K,W,X),G=Math.min(Y,U,H),q=Math.max(K,W,X),F=Math.max(Y,U,H),R=Z.next;while(R!==Q){if(R.x>=N&&R.x<=q&&R.y>=G&&R.y<=F&&i7(K,Y,W,U,X,H,R.x,R.y)&&wJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function tY(J,Q,$,Z){let K=J.prev,W=J,X=J.next;if(wJ(K,W,X)>=0)return!1;let Y=K.x,U=W.x,H=X.x,N=K.y,G=W.y,q=X.y,F=Math.min(Y,U,H),R=Math.min(N,G,q),I=Math.max(Y,U,H),O=Math.max(N,G,q),E=B$(F,R,Q,$,Z),C=B$(I,O,Q,$,Z),P=J.prevZ,L=J.nextZ;while(P&&P.z>=E&&L&&L.z<=C){if(P.x>=F&&P.x<=I&&P.y>=R&&P.y<=O&&P!==K&&P!==X&&i7(Y,N,U,G,H,q,P.x,P.y)&&wJ(P.prev,P,P.next)>=0)return!1;if(P=P.prevZ,L.x>=F&&L.x<=I&&L.y>=R&&L.y<=O&&L!==K&&L!==X&&i7(Y,N,U,G,H,q,L.x,L.y)&&wJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(P&&P.z>=E){if(P.x>=F&&P.x<=I&&P.y>=R&&P.y<=O&&P!==K&&P!==X&&i7(Y,N,U,G,H,q,P.x,P.y)&&wJ(P.prev,P,P.next)>=0)return!1;P=P.prevZ}while(L&&L.z<=C){if(L.x>=F&&L.x<=I&&L.y>=R&&L.y<=O&&L!==K&&L!==X&&i7(Y,N,U,G,H,q,L.x,L.y)&&wJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function eY(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!k7(Z,K)&&XX(Z,$,$.next,K)&&t7(Z,K)&&t7(K,Z))Q.push(Z.i,$.i,K.i),e7($),e7($.next),$=J=K;$=$.next}while($!==J);return v8($)}function JU(J,Q,$,Z,K,W){let X=J;do{let Y=X.next.next;while(Y!==X.prev){if(X.i!==Y.i&&HU(X,Y)){let U=YX(X,Y);X=v8(X,X.next),U=v8(U,U.next),r7(X,Q,$,Z,K,W,0),r7(U,Q,$,Z,K,W,0);return}Y=Y.next}X=X.next}while(X!==J)}function QU(J,Q,$,Z){let K=[];for(let W=0,X=Q.length;W<X;W++){let Y=Q[W]*Z,U=W<X-1?Q[W+1]*Z:J.length,H=KX(J,Y,U,Z,!1);if(H===H.next)H.steiner=!0;K.push(UU(H))}K.sort($U);for(let W=0;W<K.length;W++)$=ZU(K[W],$);return $}function $U(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function ZU(J,Q){let $=KU(J,Q);if(!$)return Q;let Z=YX($,J);return v8(Z,Z.next),v8($,$.next)}function KU(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,X;if(k7(J,$))return $;do{if(k7(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let G=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(G<=Z&&G>W){if(W=G,X=$.x<$.next.x?$:$.next,G===Z)return X}}$=$.next}while($!==Q);if(!X)return null;let Y=X,U=X.x,H=X.y,N=1/0;$=X;do{if(Z>=$.x&&$.x>=U&&Z!==$.x&&WX(K<H?Z:W,K,U,H,K<H?W:Z,K,$.x,$.y)){let G=Math.abs(K-$.y)/(Z-$.x);if(t7($,J)&&(G<N||G===N&&($.x>X.x||$.x===X.x&&WU(X,$))))X=$,N=G}$=$.next}while($!==Y);return X}function WU(J,Q){return wJ(J.prev,J,Q.prev)<0&&wJ(Q.next,J,J.next)<0}function XU(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=B$(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,YU(K)}function YU(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let X=Z,Y=0;for(let H=0;H<$;H++)if(Y++,X=X.nextZ,!X)break;let U=$;while(Y>0||U>0&&X){if(Y!==0&&(U===0||!X||Z.z<=X.z))K=Z,Z=Z.nextZ,Y--;else K=X,X=X.nextZ,U--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=X}W.nextZ=null,$*=2}while(Q>1);return J}function B$(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function UU(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function WX(J,Q,$,Z,K,W,X,Y){return(K-X)*(Q-Y)>=(J-X)*(W-Y)&&(J-X)*(Z-Y)>=($-X)*(Q-Y)&&($-X)*(W-Y)>=(K-X)*(Z-Y)}function i7(J,Q,$,Z,K,W,X,Y){return!(J===X&&Q===Y)&&WX(J,Q,$,Z,K,W,X,Y)}function HU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!qU(J,Q)&&(t7(J,Q)&&t7(Q,J)&&NU(J,Q)&&(wJ(J.prev,J,Q.prev)||wJ(J,Q.prev,Q))||k7(J,Q)&&wJ(J.prev,J,J.next)>0&&wJ(Q.prev,Q,Q.next)>0)}function wJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function k7(J,Q){return J.x===Q.x&&J.y===Q.y}function XX(J,Q,$,Z){let K=t6(wJ(J,Q,$)),W=t6(wJ(J,Q,Z)),X=t6(wJ($,Z,J)),Y=t6(wJ($,Z,Q));if(K!==W&&X!==Y)return!0;if(K===0&&r6(J,$,Q))return!0;if(W===0&&r6(J,Z,Q))return!0;if(X===0&&r6($,J,Z))return!0;if(Y===0&&r6($,Q,Z))return!0;return!1}function r6(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function t6(J){return J>0?1:J<0?-1:0}function qU(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&XX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function t7(J,Q){return wJ(J.prev,J,J.next)<0?wJ(J,Q,J.next)>=0&&wJ(J,J.prev,Q)>=0:wJ(J,Q,J.prev)<0||wJ(J,J.next,Q)<0}function NU(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function YX(J,Q){let $=M$(J.i,J.x,J.y),Z=M$(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function nK(J,Q,$,Z){let K=M$(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function e7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function M$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function GU(J,Q,$,Z){let K=0;for(let W=Q,X=$-Z;W<$;W+=Z)K+=(J[X]-J[W])*(J[W+1]+J[X+1]),X=W;return K}class UX{static triangulate(J,Q,$=2){return aY(J,Q,$)}}class S8{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return S8.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];sK(J),iK($,J);let W=J.length;Q.forEach(sK);for(let Y=0;Y<Q.length;Y++)Z.push(W),W+=Q[Y].length,iK($,Q[Y]);let X=UX.triangulate($,Z);for(let Y=0;Y<X.length;Y+=3)K.push(X.slice(Y,Y+3));return K}}function sK(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function iK(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class G6 extends k9{constructor(J=new N6([new D0(0.5,0.5),new D0(-0.5,0.5),new D0(-0.5,-0.5),new D0(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let $=this,Z=[],K=[];for(let X=0,Y=J.length;X<Y;X++){let U=J[X];W(U)}this.setAttribute("position",new oJ(Z,3)),this.setAttribute("uv",new oJ(K,2)),this.computeVertexNormals();function W(X){let Y=[],U=Q.curveSegments!==void 0?Q.curveSegments:12,H=Q.steps!==void 0?Q.steps:1,N=Q.depth!==void 0?Q.depth:1,G=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,q=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,F=Q.bevelSize!==void 0?Q.bevelSize:q-0.1,R=Q.bevelOffset!==void 0?Q.bevelOffset:0,I=Q.bevelSegments!==void 0?Q.bevelSegments:3,O=Q.extrudePath,E=Q.UVGenerator!==void 0?Q.UVGenerator:FU,C,P=!1,L,A,w,_;if(O){C=O.getSpacedPoints(H),P=!0,G=!1;let t=O.isCatmullRomCurve3?O.closed:!1;L=O.computeFrenetFrames(H,t),A=new j,w=new j,_=new j}if(!G)I=0,q=0,F=0,R=0;let V=X.extractPoints(U),M=V.shape,m=V.holes;if(!S8.isClockWise(M)){M=M.reverse();for(let t=0,Z0=m.length;t<Z0;t++){let J0=m[t];if(S8.isClockWise(J0))m[t]=J0.reverse()}}function p(t){let L0=t[0];for(let P0=1;P0<=t.length;P0++){let f0=P0%t.length,h0=t[f0],n0=h0.x-L0.x,c0=h0.y-L0.y,T=n0*n0+c0*c0,GJ=Math.max(Math.abs(h0.x),Math.abs(h0.y),Math.abs(L0.x),Math.abs(L0.y)),a0=0.000000000000000000010000000000000001*GJ*GJ;if(T<=a0){t.splice(f0,1),P0--;continue}L0=h0}}p(M),m.forEach(p);let o=m.length,x=M;for(let t=0;t<o;t++){let Z0=m[t];M=M.concat(Z0)}function u(t,Z0,J0){if(!Z0)p0("ExtrudeGeometry: vec does not exist");return t.clone().addScaledVector(Z0,J0)}let n=M.length;function g(t,Z0,J0){let L0,P0,f0,h0=t.x-Z0.x,n0=t.y-Z0.y,c0=J0.x-t.x,T=J0.y-t.y,GJ=h0*h0+n0*n0,a0=h0*T-n0*c0;if(Math.abs(a0)>Number.EPSILON){let r0=Math.sqrt(GJ),B=Math.sqrt(c0*c0+T*T),k=Z0.x-n0/r0,S=Z0.y+h0/r0,l=J0.x-T/B,Q0=J0.y+c0/B,X0=((l-k)*T-(Q0-S)*c0)/(h0*T-n0*c0);L0=k+h0*X0-t.x,P0=S+n0*X0-t.y;let O0=L0*L0+P0*P0;if(O0<=2)return new D0(L0,P0);else f0=Math.sqrt(O0/2)}else{let r0=!1;if(h0>Number.EPSILON){if(c0>Number.EPSILON)r0=!0}else if(h0<-Number.EPSILON){if(c0<-Number.EPSILON)r0=!0}else if(Math.sign(n0)===Math.sign(T))r0=!0;if(r0)L0=-n0,P0=h0,f0=Math.sqrt(GJ);else L0=h0,P0=n0,f0=Math.sqrt(GJ/2)}return new D0(L0/f0,P0/f0)}let e=[];for(let t=0,Z0=x.length,J0=Z0-1,L0=t+1;t<Z0;t++,J0++,L0++){if(J0===Z0)J0=0;if(L0===Z0)L0=0;e[t]=g(x[t],x[J0],x[L0])}let K0=[],Y0,w0=e.concat();for(let t=0,Z0=o;t<Z0;t++){let J0=m[t];Y0=[];for(let L0=0,P0=J0.length,f0=P0-1,h0=L0+1;L0<P0;L0++,f0++,h0++){if(f0===P0)f0=0;if(h0===P0)h0=0;Y0[L0]=g(J0[L0],J0[f0],J0[h0])}K0.push(Y0),w0=w0.concat(Y0)}let k0;if(I===0)k0=S8.triangulateShape(x,m);else{let t=[],Z0=[];for(let J0=0;J0<I;J0++){let L0=J0/I,P0=q*Math.cos(L0*Math.PI/2),f0=F*Math.sin(L0*Math.PI/2)+R;for(let h0=0,n0=x.length;h0<n0;h0++){let c0=u(x[h0],e[h0],f0);if(N0(c0.x,c0.y,-P0),L0===0)t.push(c0)}for(let h0=0,n0=o;h0<n0;h0++){let c0=m[h0];Y0=K0[h0];let T=[];for(let GJ=0,a0=c0.length;GJ<a0;GJ++){let r0=u(c0[GJ],Y0[GJ],f0);if(N0(r0.x,r0.y,-P0),L0===0)T.push(r0)}if(L0===0)Z0.push(T)}}k0=S8.triangulateShape(t,Z0)}let qJ=k0.length,YJ=F+R;for(let t=0;t<n;t++){let Z0=G?u(M[t],w0[t],YJ):M[t];if(!P)N0(Z0.x,Z0.y,0);else w.copy(L.normals[0]).multiplyScalar(Z0.x),A.copy(L.binormals[0]).multiplyScalar(Z0.y),_.copy(C[0]).add(w).add(A),N0(_.x,_.y,_.z)}for(let t=1;t<=H;t++)for(let Z0=0;Z0<n;Z0++){let J0=G?u(M[Z0],w0[Z0],YJ):M[Z0];if(!P)N0(J0.x,J0.y,N/H*t);else w.copy(L.normals[t]).multiplyScalar(J0.x),A.copy(L.binormals[t]).multiplyScalar(J0.y),_.copy(C[t]).add(w).add(A),N0(_.x,_.y,_.z)}for(let t=I-1;t>=0;t--){let Z0=t/I,J0=q*Math.cos(Z0*Math.PI/2),L0=F*Math.sin(Z0*Math.PI/2)+R;for(let P0=0,f0=x.length;P0<f0;P0++){let h0=u(x[P0],e[P0],L0);N0(h0.x,h0.y,N+J0)}for(let P0=0,f0=m.length;P0<f0;P0++){let h0=m[P0];Y0=K0[P0];for(let n0=0,c0=h0.length;n0<c0;n0++){let T=u(h0[n0],Y0[n0],L0);if(!P)N0(T.x,T.y,N+J0);else N0(T.x,T.y+C[H-1].y,C[H-1].x+J0)}}}a(),U0();function a(){let t=Z.length/3;if(G){let Z0=0,J0=n*Z0;for(let L0=0;L0<qJ;L0++){let P0=k0[L0];b0(P0[2]+J0,P0[1]+J0,P0[0]+J0)}Z0=H+I*2,J0=n*Z0;for(let L0=0;L0<qJ;L0++){let P0=k0[L0];b0(P0[0]+J0,P0[1]+J0,P0[2]+J0)}}else{for(let Z0=0;Z0<qJ;Z0++){let J0=k0[Z0];b0(J0[2],J0[1],J0[0])}for(let Z0=0;Z0<qJ;Z0++){let J0=k0[Z0];b0(J0[0]+n*H,J0[1]+n*H,J0[2]+n*H)}}$.addGroup(t,Z.length/3-t,0)}function U0(){let t=Z.length/3,Z0=0;V0(x,Z0),Z0+=x.length;for(let J0=0,L0=m.length;J0<L0;J0++){let P0=m[J0];V0(P0,Z0),Z0+=P0.length}$.addGroup(t,Z.length/3-t,1)}function V0(t,Z0){let J0=t.length;while(--J0>=0){let L0=J0,P0=J0-1;if(P0<0)P0=t.length-1;for(let f0=0,h0=H+I*2;f0<h0;f0++){let n0=n*f0,c0=n*(f0+1),T=Z0+L0+n0,GJ=Z0+P0+n0,a0=Z0+P0+c0,r0=Z0+L0+c0;JJ(T,GJ,a0,r0)}}}function N0(t,Z0,J0){Y.push(t),Y.push(Z0),Y.push(J0)}function b0(t,Z0,J0){l0(t),l0(Z0),l0(J0);let L0=Z.length/3,P0=E.generateTopUV($,Z,L0-3,L0-2,L0-1);u0(P0[0]),u0(P0[1]),u0(P0[2])}function JJ(t,Z0,J0,L0){l0(t),l0(Z0),l0(L0),l0(Z0),l0(J0),l0(L0);let P0=Z.length/3,f0=E.generateSideWallUV($,Z,P0-6,P0-3,P0-2,P0-1);u0(f0[0]),u0(f0[1]),u0(f0[3]),u0(f0[1]),u0(f0[2]),u0(f0[3])}function l0(t){Z.push(Y[t*3+0]),Z.push(Y[t*3+1]),Z.push(Y[t*3+2])}function u0(t){K.push(t.x),K.push(t.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,$=this.parameters.options;return OU(Q,$,J)}static fromJSON(J,Q){let $=[];for(let K=0,W=J.shapes.length;K<W;K++){let X=Q[J.shapes[K]];$.push(X)}let Z=J.options.extrudePath;if(Z!==void 0)J.options.extrudePath=new z$[Z.type]().fromJSON(Z);return new G6($,J.options)}}var FU={generateTopUV:function(J,Q,$,Z,K){let W=Q[$*3],X=Q[$*3+1],Y=Q[Z*3],U=Q[Z*3+1],H=Q[K*3],N=Q[K*3+1];return[new D0(W,X),new D0(Y,U),new D0(H,N)]},generateSideWallUV:function(J,Q,$,Z,K,W){let X=Q[$*3],Y=Q[$*3+1],U=Q[$*3+2],H=Q[Z*3],N=Q[Z*3+1],G=Q[Z*3+2],q=Q[K*3],F=Q[K*3+1],R=Q[K*3+2],I=Q[W*3],O=Q[W*3+1],E=Q[W*3+2];if(Math.abs(Y-N)<Math.abs(X-H))return[new D0(X,1-U),new D0(H,1-G),new D0(q,1-R),new D0(I,1-E)];else return[new D0(Y,1-U),new D0(N,1-G),new D0(F,1-R),new D0(O,1-E)]}};function OU(J,Q,$){if($.shapes=[],Array.isArray(J))for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.shapes.push(W.uuid)}else $.shapes.push(J.uuid);if($.options=Object.assign({},Q),Q.extrudePath!==void 0)$.options.extrudePath=Q.extrudePath.toJSON();return $}class rJ extends k9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),U=X+1,H=Y+1,N=J/X,G=Q/Y,q=[],F=[],R=[],I=[];for(let O=0;O<H;O++){let E=O*G-W;for(let C=0;C<U;C++){let P=C*N-K;F.push(P,-E,0),R.push(0,0,1),I.push(C/X),I.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let E=0;E<X;E++){let C=E+U*O,P=E+U*(O+1),L=E+1+U*(O+1),A=E+1+U*O;q.push(C,P,A),q.push(P,L,A)}this.setIndex(q),this.setAttribute("position",new oJ(F,3)),this.setAttribute("normal",new oJ(R,3)),this.setAttribute("uv",new oJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new rJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function p8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(oK(K))if(K.isRenderTargetTexture)m0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(oK(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function tJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=p8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function oK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function EU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function yZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return WJ.workingColorSpace}var HX={clone:p8,merge:tJ},DU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class V9 extends k8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DU,this.fragmentShader=kU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=p8(J.uniforms),this.uniformsGroups=EU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new QJ().setHex(Z.value);break;case"v2":this.uniforms[$].value=new D0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new j().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new IJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new o0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new kJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class bZ extends V9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mJ extends k8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new QJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new QJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new D0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class TQ extends k8{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new QJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new QJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new D0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class hZ extends k8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class xZ extends k8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function e6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class m8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class gZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let U=($-Q)*0.5,H=this.valueSize;this._weightPrev=U/(Q-X),this._weightNext=U/(Y-$),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this._offsetPrev,N=this._offsetNext,G=this._weightPrev,q=this._weightNext,F=($-Q)/(Z-Q),R=F*F,I=R*F,O=-G*I+2*G*R-G*F,E=(1+G)*I+(-1.5-2*G)*R+(-0.5+G)*F+1,C=(-1-q)*I+(1.5+q)*R+0.5*F,P=q*I-q*R;for(let L=0;L!==X;++L)K[L]=O*W[H+L]+E*W[U+L]+C*W[Y+L]+P*W[N+L];return K}}class pZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=($-Q)/(Z-Q),N=1-H;for(let G=0;G!==X;++G)K[G]=W[U+G]*N+W[Y+G]*H;return K}}class mZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class lZ extends m8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this.inTangents,N=this.outTangents;if(!H||!N){let F=($-Q)/(Z-Q),R=1-F;for(let I=0;I!==X;++I)K[I]=W[U+I]*R+W[Y+I]*F;return K}let G=X*2,q=J-1;for(let F=0;F!==X;++F){let R=W[U+F],I=W[Y+F],O=q*G+F*2,E=N[O],C=N[O+1],P=J*G+F*2,L=H[P],A=H[P+1],w=($-Q)/(Z-Q),_,V,M,m,D;for(let p=0;p<8;p++){_=w*w,V=_*w,M=1-w,m=M*M,D=m*M;let x=D*Q+3*m*w*E+3*M*_*L+V*Z-$;if(Math.abs(x)<0.0000000001)break;let u=3*m*(E-Q)+6*M*w*(L-E)+3*_*(Z-L);if(Math.abs(u)<0.0000000001)break;w=w-x/u,w=Math.max(0,Math.min(1,w))}K[F]=D*R+3*m*w*C+3*M*_*A+V*I}return K}}class L9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=e6(Q,this.TimeBufferType),this.values=e6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:e6(J.times,Array),values:e6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new mZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new pZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new gZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new lZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return m0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)p0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)p0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){p0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){p0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(BY(Z))for(let X=0,Y=Z.length;X!==Y;++X){let U=Z[X];if(isNaN(U)){p0("KeyframeTrack: Value is not a valid number.",this,X,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,U=J[X],H=J[X+1];if(U!==H&&(X!==1||U!==J[0]))if(!Z){let N=X*$,G=N-$,q=N+$;for(let F=0;F!==$;++F){let R=Q[N+F];if(R!==Q[G+F]||R!==Q[q+F]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let N=X*$,G=W*$;for(let q=0;q!==$;++q)Q[G+q]=Q[N+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,U=0;U!==$;++U)Q[Y+U]=Q[X+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}L9.prototype.ValueTypeName="";L9.prototype.TimeBufferType=Float32Array;L9.prototype.ValueBufferType=Float32Array;L9.prototype.DefaultInterpolation=2301;class l8 extends L9{constructor(J,Q,$){super(J,Q,$)}}l8.prototype.ValueTypeName="bool";l8.prototype.ValueBufferType=Array;l8.prototype.DefaultInterpolation=2300;l8.prototype.InterpolantFactoryMethodLinear=void 0;l8.prototype.InterpolantFactoryMethodSmooth=void 0;class dZ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}dZ.prototype.ValueTypeName="color";class uZ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}uZ.prototype.ValueTypeName="number";class cZ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),U=J*X;for(let H=U+X;U!==H;U+=4)E9.slerpFlat(K,0,W,U-X,W,U,Y);return K}}class SQ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new cZ(this.times,this.values,this.getValueSize(),J)}}SQ.prototype.ValueTypeName="quaternion";SQ.prototype.InterpolantFactoryMethodSmooth=void 0;class d8 extends L9{constructor(J,Q,$){super(J,Q,$)}}d8.prototype.ValueTypeName="string";d8.prototype.ValueBufferType=Array;d8.prototype.DefaultInterpolation=2300;d8.prototype.InterpolantFactoryMethodLinear=void 0;d8.prototype.InterpolantFactoryMethodSmooth=void 0;class nZ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}nZ.prototype.ValueTypeName="vector";var $Q={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(aK(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(aK(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function aK(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class sZ{constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(H){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,X)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),Y)return Y(H);return H},this.setURLModifier=function(H){return Y=H,this},this.addHandler=function(H,N){return U.push(H,N),this},this.removeHandler=function(H){let N=U.indexOf(H);if(N!==-1)U.splice(N,2);return this},this.getHandler=function(H){for(let N=0,G=U.length;N<G;N+=2){let q=U[N],F=U[N+1];if(q.global)q.lastIndex=0;if(q.test(H))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var qX=new sZ;class F6{constructor(J){if(this.manager=J!==void 0?J:qX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}F6.DEFAULT_MATERIAL_NAME="__DEFAULT";var N7=new WeakMap;class iZ extends F6{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=$Q.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let N=N7.get(W);if(N===void 0)N=[],N7.set(W,N);N.push({onLoad:Q,onError:Z})}return W}let X=E7("img");function Y(){if(H(),Q)Q(this);let N=N7.get(this)||[];for(let G=0;G<N.length;G++){let q=N[G];if(q.onLoad)q.onLoad(this)}N7.delete(this),K.manager.itemEnd(J)}function U(N){if(H(),Z)Z(N);$Q.remove(`image:${J}`);let G=N7.get(this)||[];for(let q=0;q<G.length;q++){let F=G[q];if(F.onError)F.onError(N)}N7.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function H(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",U,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",U,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return $Q.add(`image:${J}`,X),K.manager.itemStart(J),X.src=J,X}}class jQ extends F6{constructor(J){super(J)}load(J,Q,$,Z){let K=new gJ,W=new iZ(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if(K.image=X,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class vQ extends TJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new QJ(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var L$=new kJ,rK=new j,tK=new j;class oZ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new D0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new kJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new H6,this._frameExtents=new D0(1,1),this._viewportCount=1,this._viewports=[new IJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(rK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(rK),tK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(tK),Q.updateMatrixWorld(),L$.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(L$,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(L$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var JQ=new j,QQ=new E9,y9=new j;class fQ extends TJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kJ,this.projectionMatrix=new kJ,this.projectionMatrixInverse=new kJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(JQ,QQ,y9),y9.x===1&&y9.y===1&&y9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JQ,QQ,y9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(JQ,QQ,y9),y9.x===1&&y9.y===1&&y9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(JQ,QQ,y9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var O8=new j,eK=new D0,JW=new D0;class iJ extends fQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=ZQ*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(iQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return ZQ*2*Math.atan(Math.tan(iQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){O8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(O8.x,O8.y).multiplyScalar(-J/O8.z),O8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(O8.x,O8.y).multiplyScalar(-J/O8.z)}getViewSize(J,Q){return this.getViewBounds(J,eK,JW),Q.subVectors(JW,eK)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(iQ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/U,Z*=W.width/Y,$*=W.height/U}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class NX extends oZ{constructor(){super(new iJ(90,1,0.5,500));this.isPointLightShadow=!0}}class yQ extends vQ{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new NX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class O6 extends fQ{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,X-=H*this.view.offsetY,Y=X-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class GX extends oZ{constructor(){super(new O6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class P7 extends vQ{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(TJ.DEFAULT_UP),this.updateMatrix(),this.target=new TJ,this.shadow=new GX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var G7=-90,F7=1;class aZ extends TJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new iJ(G7,F7,J,Q);Z.layers=this.layers,this.add(Z);let K=new iJ(G7,F7,J,Q);K.layers=this.layers,this.add(K);let W=new iJ(G7,F7,J,Q);W.layers=this.layers,this.add(W);let X=new iJ(G7,F7,J,Q);X.layers=this.layers,this.add(X);let Y=new iJ(G7,F7,J,Q);Y.layers=this.layers,this.add(Y);let U=new iJ(G7,F7,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,U,H]=this.children,N=J.getRenderTarget(),G=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,H),J.setRenderTarget(N,G,q),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class rZ extends iJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var tZ="\\[\\]\\.:\\/",RU=new RegExp("["+tZ+"]","g"),eZ="[^"+tZ+"]",VU="[^"+tZ.replace("\\.","")+"]",LU=/((?:WC+[\/:])*)/.source.replace("WC",eZ),zU=/(WCOD+)?/.source.replace("WCOD",VU),BU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eZ),MU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eZ),IU=new RegExp("^"+LU+zU+BU+MU+"$"),AU=["material","materials","bones","map"];class FX{constructor(J,Q,$){let Z=$||DJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class DJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||DJ.parseTrackName(Q),this.node=DJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new DJ(J,Q,$);else return new DJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(RU,"")}static parseTrackName(J){let Q=IU.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(AU.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=DJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){m0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){p0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){p0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){p0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){p0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){p0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){p0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){p0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=Q.nodeName;p0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){p0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){p0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}DJ.Composite=FX;DJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};DJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};DJ.prototype.GetterByBindingType=[DJ.prototype._getValue_direct,DJ.prototype._getValue_array,DJ.prototype._getValue_arrayElement,DJ.prototype._getValue_toArray];DJ.prototype.SetterByBindingTypeAndVersioning=[[DJ.prototype._setValue_direct,DJ.prototype._setValue_direct_setNeedsUpdate,DJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[DJ.prototype._setValue_array,DJ.prototype._setValue_array_setNeedsUpdate,DJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[DJ.prototype._setValue_arrayElement,DJ.prototype._setValue_arrayElement_setNeedsUpdate,DJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[DJ.prototype._setValue_fromArray,DJ.prototype._setValue_fromArray_setNeedsUpdate,DJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TN=new Float32Array(1);var QW=new kJ;class bQ{constructor(J,Q,$=0,Z=1/0){this.ray=new BQ(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new Y6,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else p0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return QW.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(QW),this}intersectObject(J,Q=!0,$=[]){return I$(J,this,$,Q),$.sort($W),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)I$(J[Z],this,$,Q);return $.sort($W),$}}function $W(J,Q){return J.distance-Q.distance}function I$(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)I$(W[X],Q,$,!0)}}class JK{static{JK.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function QK(J,Q,$,Z){let K=PU(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function PU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)m0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function bX(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function wU(J){let Q=new WeakMap;function $(Y,U){let{array:H,usage:N}=Y,G=H.byteLength,q=J.createBuffer();J.bindBuffer(U,q),J.bufferData(U,H,N),Y.onUploadCallback();let F;if(H instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)F=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)F=J.SHORT;else if(H instanceof Uint32Array)F=J.UNSIGNED_INT;else if(H instanceof Int32Array)F=J.INT;else if(H instanceof Int8Array)F=J.BYTE;else if(H instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:q,type:F,bytesPerElement:H.BYTES_PER_ELEMENT,version:Y.version,size:G}}function Z(Y,U,H){let{array:N,updateRanges:G}=U;if(J.bindBuffer(H,Y),G.length===0)J.bufferSubData(H,0,N);else{G.sort((F,R)=>F.start-R.start);let q=0;for(let F=1;F<G.length;F++){let R=G[q],I=G[F];if(I.start<=R.start+R.count+1)R.count=Math.max(R.count,I.start+I.count-R.start);else++q,G[q]=I}G.length=q+1;for(let F=0,R=G.length;F<R;F++){let I=G[F];J.bufferSubData(H,I.start*N.BYTES_PER_ELEMENT,N,I.start,I.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function X(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let H=Q.get(Y);if(H===void 0)Q.set(Y,$(Y,U));else if(H.version<Y.version){if(H.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,Y,U),H.version=Y.version}}return{get:K,remove:W,update:X}}var _U=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CU=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bU=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eU=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,JH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$H=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KH="gl_FragColor = linearToOutputTexel( gl_FragColor );",WH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,YH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RH=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VH=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,LH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BH=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IH=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AH=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PH=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wH=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_H=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TH=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,SH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xH=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uH=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sH=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rH=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q5=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,N5=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E5=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k5=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z5=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B5=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C5=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s5=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jq=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qq=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$q=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kq=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wq=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xq=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e0={alphahash_fragment:_U,alphahash_pars_fragment:CU,alphamap_fragment:TU,alphamap_pars_fragment:SU,alphatest_fragment:jU,alphatest_pars_fragment:vU,aomap_fragment:fU,aomap_pars_fragment:yU,batching_pars_vertex:bU,batching_vertex:hU,begin_vertex:xU,beginnormal_vertex:gU,bsdfs:pU,iridescence_fragment:mU,bumpmap_pars_fragment:lU,clipping_planes_fragment:dU,clipping_planes_pars_fragment:uU,clipping_planes_pars_vertex:cU,clipping_planes_vertex:nU,color_fragment:sU,color_pars_fragment:iU,color_pars_vertex:oU,color_vertex:aU,common:rU,cube_uv_reflection_fragment:tU,defaultnormal_vertex:eU,displacementmap_pars_vertex:JH,displacementmap_vertex:QH,emissivemap_fragment:$H,emissivemap_pars_fragment:ZH,colorspace_fragment:KH,colorspace_pars_fragment:WH,envmap_fragment:XH,envmap_common_pars_fragment:YH,envmap_pars_fragment:UH,envmap_pars_vertex:HH,envmap_physical_pars_fragment:LH,envmap_vertex:qH,fog_vertex:NH,fog_pars_vertex:GH,fog_fragment:FH,fog_pars_fragment:OH,gradientmap_pars_fragment:EH,lightmap_pars_fragment:DH,lights_lambert_fragment:kH,lights_lambert_pars_fragment:RH,lights_pars_begin:VH,lights_toon_fragment:zH,lights_toon_pars_fragment:BH,lights_phong_fragment:MH,lights_phong_pars_fragment:IH,lights_physical_fragment:AH,lights_physical_pars_fragment:PH,lights_fragment_begin:wH,lights_fragment_maps:_H,lights_fragment_end:CH,lightprobes_pars_fragment:TH,logdepthbuf_fragment:SH,logdepthbuf_pars_fragment:jH,logdepthbuf_pars_vertex:vH,logdepthbuf_vertex:fH,map_fragment:yH,map_pars_fragment:bH,map_particle_fragment:hH,map_particle_pars_fragment:xH,metalnessmap_fragment:gH,metalnessmap_pars_fragment:pH,morphinstance_vertex:mH,morphcolor_vertex:lH,morphnormal_vertex:dH,morphtarget_pars_vertex:uH,morphtarget_vertex:cH,normal_fragment_begin:nH,normal_fragment_maps:sH,normal_pars_fragment:iH,normal_pars_vertex:oH,normal_vertex:aH,normalmap_pars_fragment:rH,clearcoat_normal_fragment_begin:tH,clearcoat_normal_fragment_maps:eH,clearcoat_pars_fragment:J5,iridescence_pars_fragment:Q5,opaque_fragment:$5,packing:Z5,premultiplied_alpha_fragment:K5,project_vertex:W5,dithering_fragment:X5,dithering_pars_fragment:Y5,roughnessmap_fragment:U5,roughnessmap_pars_fragment:H5,shadowmap_pars_fragment:q5,shadowmap_pars_vertex:N5,shadowmap_vertex:G5,shadowmask_pars_fragment:F5,skinbase_vertex:O5,skinning_pars_vertex:E5,skinning_vertex:D5,skinnormal_vertex:k5,specularmap_fragment:R5,specularmap_pars_fragment:V5,tonemapping_fragment:L5,tonemapping_pars_fragment:z5,transmission_fragment:B5,transmission_pars_fragment:M5,uv_pars_fragment:I5,uv_pars_vertex:A5,uv_vertex:P5,worldpos_vertex:w5,background_vert:_5,background_frag:C5,backgroundCube_vert:T5,backgroundCube_frag:S5,cube_vert:j5,cube_frag:v5,depth_vert:f5,depth_frag:y5,distance_vert:b5,distance_frag:h5,equirect_vert:x5,equirect_frag:g5,linedashed_vert:p5,linedashed_frag:m5,meshbasic_vert:l5,meshbasic_frag:d5,meshlambert_vert:u5,meshlambert_frag:c5,meshmatcap_vert:n5,meshmatcap_frag:s5,meshnormal_vert:i5,meshnormal_frag:o5,meshphong_vert:a5,meshphong_frag:r5,meshphysical_vert:t5,meshphysical_frag:e5,meshtoon_vert:Jq,meshtoon_frag:Qq,points_vert:$q,points_frag:Zq,shadow_vert:Kq,shadow_frag:Wq,sprite_vert:Xq,sprite_frag:Yq},B0={common:{diffuse:{value:new QJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new o0},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new o0}},envmap:{envMap:{value:null},envMapRotation:{value:new o0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new o0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new o0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new o0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new o0},normalScale:{value:new D0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new o0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new o0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new o0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new o0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new QJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new QJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0},uvTransform:{value:new o0}},sprite:{diffuse:{value:new QJ(16777215)},opacity:{value:1},center:{value:new D0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new o0},alphaMap:{value:null},alphaMapTransform:{value:new o0},alphaTest:{value:0}}},m9={basic:{uniforms:tJ([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.fog]),vertexShader:e0.meshbasic_vert,fragmentShader:e0.meshbasic_frag},lambert:{uniforms:tJ([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)},envMapIntensity:{value:1}}]),vertexShader:e0.meshlambert_vert,fragmentShader:e0.meshlambert_frag},phong:{uniforms:tJ([B0.common,B0.specularmap,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)},specular:{value:new QJ(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:e0.meshphong_vert,fragmentShader:e0.meshphong_frag},standard:{uniforms:tJ([B0.common,B0.envmap,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.roughnessmap,B0.metalnessmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag},toon:{uniforms:tJ([B0.common,B0.aomap,B0.lightmap,B0.emissivemap,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.gradientmap,B0.fog,B0.lights,{emissive:{value:new QJ(0)}}]),vertexShader:e0.meshtoon_vert,fragmentShader:e0.meshtoon_frag},matcap:{uniforms:tJ([B0.common,B0.bumpmap,B0.normalmap,B0.displacementmap,B0.fog,{matcap:{value:null}}]),vertexShader:e0.meshmatcap_vert,fragmentShader:e0.meshmatcap_frag},points:{uniforms:tJ([B0.points,B0.fog]),vertexShader:e0.points_vert,fragmentShader:e0.points_frag},dashed:{uniforms:tJ([B0.common,B0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:e0.linedashed_vert,fragmentShader:e0.linedashed_frag},depth:{uniforms:tJ([B0.common,B0.displacementmap]),vertexShader:e0.depth_vert,fragmentShader:e0.depth_frag},normal:{uniforms:tJ([B0.common,B0.bumpmap,B0.normalmap,B0.displacementmap,{opacity:{value:1}}]),vertexShader:e0.meshnormal_vert,fragmentShader:e0.meshnormal_frag},sprite:{uniforms:tJ([B0.sprite,B0.fog]),vertexShader:e0.sprite_vert,fragmentShader:e0.sprite_frag},background:{uniforms:{uvTransform:{value:new o0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:e0.background_vert,fragmentShader:e0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new o0}},vertexShader:e0.backgroundCube_vert,fragmentShader:e0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:e0.cube_vert,fragmentShader:e0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:e0.equirect_vert,fragmentShader:e0.equirect_frag},distance:{uniforms:tJ([B0.common,B0.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:e0.distance_vert,fragmentShader:e0.distance_frag},shadow:{uniforms:tJ([B0.lights,B0.fog,{color:{value:new QJ(0)},opacity:{value:1}}]),vertexShader:e0.shadow_vert,fragmentShader:e0.shadow_frag}};m9.physical={uniforms:tJ([m9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new o0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new o0},clearcoatNormalScale:{value:new D0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new o0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new o0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new o0},sheen:{value:0},sheenColor:{value:new QJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new o0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new o0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new o0},transmissionSamplerSize:{value:new D0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new o0},attenuationDistance:{value:0},attenuationColor:{value:new QJ(0)},specularColor:{value:new QJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new o0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new o0},anisotropyVector:{value:new D0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new o0}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag};var hQ={r:0,b:0,g:0},Uq=new kJ,hX=new o0;hX.set(-1,0,0,0,1,0,0,0,1);function Hq(J,Q,$,Z,K,W){let X=new QJ(0),Y=K===!0?0:1,U,H,N=null,G=0,q=null;function F(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){let L=C.backgroundBlurriness>0;P=Q.get(P,L)}return P}function R(C){let P=!1,L=F(C);if(L===null)O(X,Y);else if(L&&L.isColor)O(L,1),P=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(C,P){let L=F(P);if(L&&(L.isCubeTexture||L.mapping===Z6)){if(H===void 0)H=new g0(new AJ(1,1,1),new V9({name:"BackgroundCubeMaterial",uniforms:p8(m9.backgroundCube.uniforms),vertexShader:m9.backgroundCube.vertexShader,fragmentShader:m9.backgroundCube.fragmentShader,side:aJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=L,H.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(Uq.makeRotationFromEuler(P.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply(hX);if(H.material.toneMapped=WJ.getTransfer(L.colorSpace)!==VJ,N!==L||G!==L.version||q!==J.toneMapping)H.material.needsUpdate=!0,N=L,G=L.version,q=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}else if(L&&L.isTexture){if(U===void 0)U=new g0(new rJ(2,2),new V9({name:"BackgroundMaterial",uniforms:p8(m9.background.uniforms),vertexShader:m9.background.vertexShader,fragmentShader:m9.background.fragmentShader,side:V7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=L,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.toneMapped=WJ.getTransfer(L.colorSpace)!==VJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||G!==L.version||q!==J.toneMapping)U.material.needsUpdate=!0,N=L,G=L.version,q=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}}function O(C,P){C.getRGB(hQ,yZ(J)),$.buffers.color.setClear(hQ.r,hQ.g,hQ.b,P,W)}function E(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(C,P=1){X.set(C),Y=P,O(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(C){Y=C,O(X,Y)},render:R,addToRenderList:I,dispose:E}}function qq(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(D,p,o,x,u){let n=!1,g=G(D,x,o,p);if(W!==g)W=g,H(W.object);if(n=F(D,x,o,u),n)R(D,x,o,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,L(D,p,o,x),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function U(){return J.createVertexArray()}function H(D){return J.bindVertexArray(D)}function N(D){return J.deleteVertexArray(D)}function G(D,p,o,x){let u=x.wireframe===!0,n=Z[p.id];if(n===void 0)n={},Z[p.id]=n;let g=D.isInstancedMesh===!0?D.id:0,e=n[g];if(e===void 0)e={},n[g]=e;let K0=e[o.id];if(K0===void 0)K0={},e[o.id]=K0;let Y0=K0[u];if(Y0===void 0)Y0=q(U()),K0[u]=Y0;return Y0}function q(D){let p=[],o=[],x=[];for(let u=0;u<$;u++)p[u]=0,o[u]=0,x[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:o,attributeDivisors:x,object:D,attributes:{},index:null}}function F(D,p,o,x){let u=W.attributes,n=p.attributes,g=0,e=o.getAttributes();for(let K0 in e)if(e[K0].location>=0){let w0=u[K0],k0=n[K0];if(k0===void 0){if(K0==="instanceMatrix"&&D.instanceMatrix)k0=D.instanceMatrix;if(K0==="instanceColor"&&D.instanceColor)k0=D.instanceColor}if(w0===void 0)return!0;if(w0.attribute!==k0)return!0;if(k0&&w0.data!==k0.data)return!0;g++}if(W.attributesNum!==g)return!0;if(W.index!==x)return!0;return!1}function R(D,p,o,x){let u={},n=p.attributes,g=0,e=o.getAttributes();for(let K0 in e)if(e[K0].location>=0){let w0=n[K0];if(w0===void 0){if(K0==="instanceMatrix"&&D.instanceMatrix)w0=D.instanceMatrix;if(K0==="instanceColor"&&D.instanceColor)w0=D.instanceColor}let k0={};if(k0.attribute=w0,w0&&w0.data)k0.data=w0.data;u[K0]=k0,g++}W.attributes=u,W.attributesNum=g,W.index=x}function I(){let D=W.newAttributes;for(let p=0,o=D.length;p<o;p++)D[p]=0}function O(D){E(D,0)}function E(D,p){let{newAttributes:o,enabledAttributes:x,attributeDivisors:u}=W;if(o[D]=1,x[D]===0)J.enableVertexAttribArray(D),x[D]=1;if(u[D]!==p)J.vertexAttribDivisor(D,p),u[D]=p}function C(){let{newAttributes:D,enabledAttributes:p}=W;for(let o=0,x=p.length;o<x;o++)if(p[o]!==D[o])J.disableVertexAttribArray(o),p[o]=0}function P(D,p,o,x,u,n,g){if(g===!0)J.vertexAttribIPointer(D,p,o,u,n);else J.vertexAttribPointer(D,p,o,x,u,n)}function L(D,p,o,x){I();let u=x.attributes,n=o.getAttributes(),g=p.defaultAttributeValues;for(let e in n){let K0=n[e];if(K0.location>=0){let Y0=u[e];if(Y0===void 0){if(e==="instanceMatrix"&&D.instanceMatrix)Y0=D.instanceMatrix;if(e==="instanceColor"&&D.instanceColor)Y0=D.instanceColor}if(Y0!==void 0){let{normalized:w0,itemSize:k0}=Y0,qJ=Q.get(Y0);if(qJ===void 0)continue;let{buffer:YJ,type:a,bytesPerElement:U0}=qJ,V0=a===J.INT||a===J.UNSIGNED_INT||Y0.gpuType===b$;if(Y0.isInterleavedBufferAttribute){let N0=Y0.data,b0=N0.stride,JJ=Y0.offset;if(N0.isInstancedInterleavedBuffer){for(let l0=0;l0<K0.locationSize;l0++)E(K0.location+l0,N0.meshPerAttribute);if(D.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=N0.meshPerAttribute*N0.count}else for(let l0=0;l0<K0.locationSize;l0++)O(K0.location+l0);J.bindBuffer(J.ARRAY_BUFFER,YJ);for(let l0=0;l0<K0.locationSize;l0++)P(K0.location+l0,k0/K0.locationSize,a,w0,b0*U0,(JJ+k0/K0.locationSize*l0)*U0,V0)}else{if(Y0.isInstancedBufferAttribute){for(let N0=0;N0<K0.locationSize;N0++)E(K0.location+N0,Y0.meshPerAttribute);if(D.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=Y0.meshPerAttribute*Y0.count}else for(let N0=0;N0<K0.locationSize;N0++)O(K0.location+N0);J.bindBuffer(J.ARRAY_BUFFER,YJ);for(let N0=0;N0<K0.locationSize;N0++)P(K0.location+N0,k0/K0.locationSize,a,w0,k0*U0,k0/K0.locationSize*N0*U0,V0)}}else if(g!==void 0){let w0=g[e];if(w0!==void 0)switch(w0.length){case 2:J.vertexAttrib2fv(K0.location,w0);break;case 3:J.vertexAttrib3fv(K0.location,w0);break;case 4:J.vertexAttrib4fv(K0.location,w0);break;default:J.vertexAttrib1fv(K0.location,w0)}}}}C()}function A(){M();for(let D in Z){let p=Z[D];for(let o in p){let x=p[o];for(let u in x){let n=x[u];for(let g in n)N(n[g].object),delete n[g];delete x[u]}}delete Z[D]}}function w(D){if(Z[D.id]===void 0)return;let p=Z[D.id];for(let o in p){let x=p[o];for(let u in x){let n=x[u];for(let g in n)N(n[g].object),delete n[g];delete x[u]}}delete Z[D.id]}function _(D){for(let p in Z){let o=Z[p];for(let x in o){let u=o[x];if(u[D.id]===void 0)continue;let n=u[D.id];for(let g in n)N(n[g].object),delete n[g];delete u[D.id]}}}function V(D){for(let p in Z){let o=Z[p],x=D.isInstancedMesh===!0?D.id:0,u=o[x];if(u===void 0)continue;for(let n in u){let g=u[n];for(let e in g)N(g[e].object),delete g[e];delete u[n]}if(delete o[x],Object.keys(o).length===0)delete Z[p]}}function M(){if(m(),X=!0,W===K)return;W=K,H(W.object)}function m(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:M,resetDefaultState:m,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:V,releaseStatesOfProgram:_,initAttributes:I,enableAttribute:O,disableUnusedAttributes:C}}function Nq(J,Q,$){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),$.update(H,Z,1)}function X(U,H,N){if(N===0)return;J.drawArraysInstanced(Z,U,H,N),$.update(H,Z,N)}function Y(U,H,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,N);let q=0;for(let F=0;F<N;F++)q+=H[F];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function Gq(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(_){if(_!==x9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let V=_===Q8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==T9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==J8&&!V)return!1;return!0}function U(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=$.precision!==void 0?$.precision:"highp",N=U(H);if(N!==H)m0("WebGLRenderer:",H,"not supported, using",N,"instead."),H=N;let G=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)m0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),w=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:X,textureTypeReadable:Y,precision:H,logarithmicDepthBuffer:G,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:R,maxTextureSize:I,maxCubemapSize:O,maxAttributes:E,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:L,maxSamples:A,samples:w}}function Fq(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new r9,Y=new o0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(G,q){let F=G.length!==0||q||Z!==0||K;return K=q,Z=G.length,F},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(G,q){$=N(G,q,0)},this.setState=function(G,q,F){let{clippingPlanes:R,clipIntersection:I,clipShadows:O}=G,E=J.get(G);if(!K||R===null||R.length===0||W&&!O)if(W)N(null);else H();else{let C=W?0:Z,P=C*4,L=E.clippingState||null;U.value=L,L=N(R,q,P,F);for(let A=0;A!==P;++A)L[A]=$[A];E.clippingState=L,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=C}};function H(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(G,q,F,R){let I=G!==null?G.length:0,O=null;if(I!==0){if(O=U.value,R!==!0||O===null){let E=F+I*4,C=q.matrixWorldInverse;if(Y.getNormalMatrix(C),O===null||O.length<E)O=new Float32Array(E);for(let P=0,L=F;P!==I;++P,L+=4)X.copy(G[P]).applyMatrix4(C,Y),X.normal.toArray(O,L),O[L+3]=X.constant}U.value=O,U.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,O}}var V8=4,OX=[0.125,0.215,0.35,0.446,0.526,0.582],u8=20,Oq=256,E6=new O6,EX=new QJ,$K=null,ZK=0,KK=0,WK=!1,Eq=new j;class V6{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=Eq}=K;$K=this._renderer.getRenderTarget(),ZK=this._renderer.getActiveCubeFace(),KK=this._renderer.getActiveMipmapLevel(),WK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=RX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=kX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget($K,ZK,KK),this._renderer.xr.enabled=WK,J.scissorTest=!1,w7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===z7||J.mapping===f8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);$K=this._renderer.getRenderTarget(),ZK=this._renderer.getActiveCubeFace(),KK=this._renderer.getActiveMipmapLevel(),WK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:fJ,minFilter:fJ,generateMipmaps:!1,type:Q8,format:x9,colorSpace:VZ,depthBuffer:!1},Z=DX(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=DX(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dq(K)),this._blurMaterial=Rq(K,J,Q),this._ggxMaterial=kq(K,J,Q)}return Z}_compileMaterial(J){let Q=new g0(new k9,J);this._renderer.compile(Q,E6)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new iJ(90,1,Q,$),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],N=this._renderer,G=N.autoClear,q=N.toneMapping;if(N.getClearColor(EX),N.toneMapping=C9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new g0(new AJ,new pJ({name:"PMREM.Background",side:aJ,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,I=R.material,O=!1,E=J.background;if(E){if(E.isColor)I.color.copy(E),J.background=null,O=!0}else I.color.copy(EX),O=!0;for(let C=0;C<6;C++){let P=C%3;if(P===0)Y.up.set(0,U[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+H[C],K.y,K.z);else if(P===1)Y.up.set(0,0,U[C]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+H[C],K.z);else Y.up.set(0,U[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+H[C]);let L=this._cubeSize;if(w7(Z,P*L,C>2?L:0,L,L),N.setRenderTarget(Z),O)N.render(R,Y);N.render(J,Y)}N.toneMapping=q,N.autoClear=G,J.background=E}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===z7||J.mapping===f8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=RX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=kX();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;w7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,E6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,U=$/(this._lodMeshes.length-1),H=Q/(this._lodMeshes.length-1),N=Math.sqrt(U*U-H*H),G=0+U*1.25,q=N*G,{_lodMax:F}=this,R=this._sizeLods[$],I=3*R*($>F-V8?$-F+V8:0),O=4*(this._cubeSize-R);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=F-Q,w7(K,I,O,3*R,2*R),Z.setRenderTarget(K),Z.render(X,E6),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=F-$,w7(J,I,O,3*R,2*R),Z.setRenderTarget(J),Z.render(X,E6)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,U=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")p0("blur direction must be either latitudinal or longitudinal!");let H=3,N=this._lodMeshes[Z];N.material=U;let G=U.uniforms,q=this._sizeLods[$]-1,F=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*u8-1),R=K/F,I=isFinite(K)?1+Math.floor(H*R):u8;if(I>u8)m0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${u8}`);let O=[],E=0;for(let w=0;w<u8;++w){let _=w/R,V=Math.exp(-_*_/2);if(O.push(V),w===0)E+=V;else if(w<I)E+=2*V}for(let w=0;w<O.length;w++)O[w]=O[w]/E;if(G.envMap.value=J.texture,G.samples.value=I,G.weights.value=O,G.latitudinal.value=W==="latitudinal",X)G.poleAxis.value=X;let{_lodMax:C}=this;G.dTheta.value=F,G.mipInt.value=C-$;let P=this._sizeLods[Z],L=3*P*(Z>C-V8?Z-C+V8:0),A=4*(this._cubeSize-P);w7(Q,L,A,3*P,2*P),Y.setRenderTarget(Q),Y.render(N,E6)}}function Dq(J){let Q=[],$=[],Z=[],K=J,W=J-V8+1+OX.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let U=1/Y;if(X>J-V8)U=OX[X-J+V8-1];else if(X===0)U=0;$.push(U);let H=1/(Y-2),N=-H,G=1+H,q=[N,N,G,N,G,G,N,N,G,G,N,G],F=6,R=6,I=3,O=2,E=1,C=new Float32Array(I*R*F),P=new Float32Array(O*R*F),L=new Float32Array(E*R*F);for(let w=0;w<F;w++){let _=w%3*2/3-1,V=w>2?0:-1,M=[_,V,0,_+0.6666666666666666,V,0,_+0.6666666666666666,V+1,0,_,V,0,_+0.6666666666666666,V+1,0,_,V+1,0];C.set(M,I*R*w),P.set(q,O*R*w);let m=[w,w,w,w,w,w];L.set(m,E*R*w)}let A=new k9;if(A.setAttribute("position",new Y9(C,I)),A.setAttribute("uv",new Y9(P,O)),A.setAttribute("faceIndex",new Y9(L,E)),Z.push(new g0(A,null)),K>V8)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function DX(J,Q,$){let Z=new D9(J,Q,$);return Z.texture.mapping=Z6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function w7(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function kq(J,Q,$){return new V9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Oq,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gQ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:h9,depthTest:!1,depthWrite:!1})}function Rq(J,Q,$){let Z=new Float32Array(u8),K=new j(0,1,0);return new V9({name:"SphericalGaussianBlur",defines:{n:u8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:gQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:h9,depthTest:!1,depthWrite:!1})}function kX(){return new V9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:h9,depthTest:!1,depthWrite:!1})}function RX(){return new V9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gQ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:h9,depthTest:!1,depthWrite:!1})}function gQ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class qK extends D9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new IQ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new AJ(5,5,5),K=new V9({name:"CubemapFromEquirect",uniforms:p8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:aJ,blending:h9});K.uniforms.tEquirect.value=Q;let W=new g0(Z,K),X=Q.minFilter;if(Q.minFilter===e9)Q.minFilter=fJ;return new aZ(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function Vq(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,F=!1){if(q===null||q===void 0)return null;if(F)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let F=q.mapping;if(F===XQ||F===YQ)if(Q.has(q)){let R=Q.get(q).texture;return Y(R,q.mapping)}else{let R=q.image;if(R&&R.height>0){let I=new qK(R.height);return I.fromEquirectangularTexture(J,q),Q.set(q,I),q.addEventListener("dispose",H),Y(I.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let F=q.mapping,R=F===XQ||F===YQ,I=F===z7||F===f8;if(R||I){let O=$.get(q),E=O!==void 0?O.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==E){if(Z===null)Z=new V6(J);return O=R?Z.fromEquirectangular(q,O):Z.fromCubemap(q,O),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),O.texture}else if(O!==void 0)return O.texture;else{let C=q.image;if(R&&C&&C.height>0||I&&C&&U(C)){if(Z===null)Z=new V6(J);return O=R?Z.fromEquirectangular(q):Z.fromCubemap(q),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),q.addEventListener("dispose",N),O.texture}else return null}}}return q}function Y(q,F){if(F===XQ)q.mapping=z7;else if(F===YQ)q.mapping=f8;return q}function U(q){let F=0,R=6;for(let I=0;I<R;I++)if(q[I]!==void 0)F++;return F===R}function H(q){let F=q.target;F.removeEventListener("dispose",H);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function N(q){let F=q.target;F.removeEventListener("dispose",N);let R=$.get(F);if(R!==void 0)$.delete(F),R.dispose()}function G(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:G}}function Lq(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)j8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function zq(J,Q,$,Z){let K={},W=new WeakMap;function X(G){let q=G.target;if(q.index!==null)Q.remove(q.index);for(let R in q.attributes)Q.remove(q.attributes[R]);q.removeEventListener("dispose",X),delete K[q.id];let F=W.get(q);if(F)Q.remove(F),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(G,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function U(G){let q=G.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function H(G){let q=[],F=G.index,R=G.attributes.position,I=0;if(R===void 0)return;if(F!==null){let C=F.array;I=F.version;for(let P=0,L=C.length;P<L;P+=3){let A=C[P+0],w=C[P+1],_=C[P+2];q.push(A,w,w,_,_,A)}}else{let C=R.array;I=R.version;for(let P=0,L=C.length/3-1;P<L;P+=3){let A=P+0,w=P+1,_=P+2;q.push(A,w,w,_,_,A)}}let O=new(R.count>=65535?zQ:LQ)(q,1);O.version=I;let E=W.get(G);if(E)Q.remove(E);W.set(G,O)}function N(G){let q=W.get(G);if(q){let F=G.index;if(F!==null){if(q.version<F.version)H(G)}}else H(G);return W.get(G)}return{get:Y,update:U,getWireframeAttribute:N}}function Bq(J,Q,$){let Z;function K(G){Z=G}let W,X;function Y(G){W=G.type,X=G.bytesPerElement}function U(G,q){J.drawElements(Z,q,W,G*X),$.update(q,Z,1)}function H(G,q,F){if(F===0)return;J.drawElementsInstanced(Z,q,W,G*X,F),$.update(q,Z,F)}function N(G,q,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,G,0,F);let I=0;for(let O=0;O<F;O++)I+=q[O];$.update(I,Z,1)}this.setMode=K,this.setIndex=Y,this.render=U,this.renderInstances=H,this.renderMultiDraw=N}function Mq(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:p0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function Iq(J,Q,$){let Z=new WeakMap,K=new IJ;function W(X,Y,U){let H=X.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,G=N!==void 0?N.length:0,q=Z.get(Y);if(q===void 0||q.count!==G){let M=function(){_.dispose(),Z.delete(Y),Y.removeEventListener("dispose",M)};if(q!==void 0)q.texture.dispose();let F=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],P=0;if(F===!0)P=1;if(R===!0)P=2;if(I===!0)P=3;let L=Y.attributes.position.count*P,A=1;if(L>Q.maxTextureSize)A=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let w=new Float32Array(L*A*4*G),_=new VQ(w,L,A,G);_.type=J8,_.needsUpdate=!0;let V=P*4;for(let m=0;m<G;m++){let D=O[m],p=E[m],o=C[m],x=L*A*4*m;for(let u=0;u<D.count;u++){let n=u*V;if(F===!0)K.fromBufferAttribute(D,u),w[x+n+0]=K.x,w[x+n+1]=K.y,w[x+n+2]=K.z,w[x+n+3]=0;if(R===!0)K.fromBufferAttribute(p,u),w[x+n+4]=K.x,w[x+n+5]=K.y,w[x+n+6]=K.z,w[x+n+7]=0;if(I===!0)K.fromBufferAttribute(o,u),w[x+n+8]=K.x,w[x+n+9]=K.y,w[x+n+10]=K.z,w[x+n+11]=o.itemSize===4?K.w:1}}q={count:G,texture:_,size:new D0(L,A)},Z.set(Y,q),Y.addEventListener("dispose",M)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let F=0;for(let I=0;I<H.length;I++)F+=H[I];let R=Y.morphTargetsRelative?1:1-F;U.getUniforms().setValue(J,"morphTargetBaseInfluence",R),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function Aq(J,Q,$,Z,K){let W=new WeakMap;function X(H){let N=K.render.frame,G=H.geometry,q=Q.get(H,G);if(W.get(q)!==N)Q.update(q),W.set(q,N);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==N){if($.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)$.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,N)}}if(H.isSkinnedMesh){let F=H.skeleton;if(W.get(F)!==N)F.update(),W.set(F,N)}return q}function Y(){W=new WeakMap}function U(H){let N=H.target;if(N.removeEventListener("dispose",U),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:X,dispose:Y}}var Pq={[T$]:"LINEAR_TONE_MAPPING",[S$]:"REINHARD_TONE_MAPPING",[j$]:"CINEON_TONE_MAPPING",[$6]:"ACES_FILMIC_TONE_MAPPING",[f$]:"AGX_TONE_MAPPING",[y$]:"NEUTRAL_TONE_MAPPING",[v$]:"CUSTOM_TONE_MAPPING"};function wq(J,Q,$,Z,K,W){let X=new D9(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new R8(Q,$):void 0}),Y=new D9(Q,$,{type:Q8,depthBuffer:!1,stencilBuffer:!1}),U=new k9;U.setAttribute("position",new oJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new oJ([0,2,0,0,2,0],2));let H=new bZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),N=new g0(U,H),G=new O6(-1,1,1,-1,0,1),q=null,F=null,R=!1,I,O=null,E=[],C=!1;this.setSize=function(P,L){X.setSize(P,L),Y.setSize(P,L);for(let A=0;A<E.length;A++){let w=E[A];if(w.setSize)w.setSize(P,L)}},this.setEffects=function(P){E=P,C=E.length>0&&E[0].isRenderPass===!0;let{width:L,height:A}=X;for(let w=0;w<E.length;w++){let _=E[w];if(_.setSize)_.setSize(L,A)}},this.begin=function(P,L){if(R)return!1;if(P.toneMapping===C9&&E.length===0)return!1;if(O=L,L!==null){let{width:A,height:w}=L;if(X.width!==A||X.height!==w)this.setSize(A,w)}if(C===!1)P.setRenderTarget(X);return I=P.toneMapping,P.toneMapping=C9,!0},this.hasRenderPass=function(){return C},this.end=function(P,L){P.toneMapping=I,R=!0;let A=X,w=Y;for(let _=0;_<E.length;_++){let V=E[_];if(V.enabled===!1)continue;if(V.render(P,w,A,L),V.needsSwap!==!1){let M=A;A=w,w=M}}if(q!==P.outputColorSpace||F!==P.toneMapping){if(q=P.outputColorSpace,F=P.toneMapping,H.defines={},WJ.getTransfer(q)===VJ)H.defines.SRGB_TRANSFER="";let _=Pq[F];if(_)H.defines[_]="";H.needsUpdate=!0}H.uniforms.tDiffuse.value=A.texture,P.setRenderTarget(O),P.render(N,G),O=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),U.dispose(),H.dispose()}}var xX=new gJ,UK=new R8(1,1),gX=new VQ,pX=new PZ,mX=new IQ,VX=[],LX=[],zX=new Float32Array(16),BX=new Float32Array(9),MX=new Float32Array(4);function _7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=VX[K];if(W===void 0)W=new Float32Array(K),VX[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function yJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function bJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function pQ(J,Q){let $=LX[Q];if($===void 0)$=new Int32Array(Q),LX[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function _q(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function Cq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(yJ($,Q))return;J.uniform2fv(this.addr,Q),bJ($,Q)}}function Tq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(yJ($,Q))return;J.uniform3fv(this.addr,Q),bJ($,Q)}}function Sq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(yJ($,Q))return;J.uniform4fv(this.addr,Q),bJ($,Q)}}function jq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(yJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),bJ($,Q)}else{if(yJ($,Z))return;MX.set(Z),J.uniformMatrix2fv(this.addr,!1,MX),bJ($,Z)}}function vq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(yJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),bJ($,Q)}else{if(yJ($,Z))return;BX.set(Z),J.uniformMatrix3fv(this.addr,!1,BX),bJ($,Z)}}function fq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(yJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),bJ($,Q)}else{if(yJ($,Z))return;zX.set(Z),J.uniformMatrix4fv(this.addr,!1,zX),bJ($,Z)}}function yq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function bq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(yJ($,Q))return;J.uniform2iv(this.addr,Q),bJ($,Q)}}function hq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(yJ($,Q))return;J.uniform3iv(this.addr,Q),bJ($,Q)}}function xq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(yJ($,Q))return;J.uniform4iv(this.addr,Q),bJ($,Q)}}function gq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function pq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(yJ($,Q))return;J.uniform2uiv(this.addr,Q),bJ($,Q)}}function mq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(yJ($,Q))return;J.uniform3uiv(this.addr,Q),bJ($,Q)}}function lq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(yJ($,Q))return;J.uniform4uiv(this.addr,Q),bJ($,Q)}}function dq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)UK.compareFunction=$.isReversedDepthBuffer()?RQ:kQ,W=UK;else W=xX;$.setTexture2D(Q||W,K)}function uq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||pX,K)}function cq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||mX,K)}function nq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||gX,K)}function sq(J){switch(J){case 5126:return _q;case 35664:return Cq;case 35665:return Tq;case 35666:return Sq;case 35674:return jq;case 35675:return vq;case 35676:return fq;case 5124:case 35670:return yq;case 35667:case 35671:return bq;case 35668:case 35672:return hq;case 35669:case 35673:return xq;case 5125:return gq;case 36294:return pq;case 36295:return mq;case 36296:return lq;case 35678:case 36198:case 36298:case 36306:case 35682:return dq;case 35679:case 36299:case 36307:return uq;case 35680:case 36300:case 36308:case 36293:return cq;case 36289:case 36303:case 36311:case 36292:return nq}}function iq(J,Q){J.uniform1fv(this.addr,Q)}function oq(J,Q){let $=_7(Q,this.size,2);J.uniform2fv(this.addr,$)}function aq(J,Q){let $=_7(Q,this.size,3);J.uniform3fv(this.addr,$)}function rq(J,Q){let $=_7(Q,this.size,4);J.uniform4fv(this.addr,$)}function tq(J,Q){let $=_7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function eq(J,Q){let $=_7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function J1(J,Q){let $=_7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function Q1(J,Q){J.uniform1iv(this.addr,Q)}function $1(J,Q){J.uniform2iv(this.addr,Q)}function Z1(J,Q){J.uniform3iv(this.addr,Q)}function K1(J,Q){J.uniform4iv(this.addr,Q)}function W1(J,Q){J.uniform1uiv(this.addr,Q)}function X1(J,Q){J.uniform2uiv(this.addr,Q)}function Y1(J,Q){J.uniform3uiv(this.addr,Q)}function U1(J,Q){J.uniform4uiv(this.addr,Q)}function H1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=UK;else X=xX;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function q1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||pX,W[X])}function N1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||mX,W[X])}function G1(J,Q,$){let Z=this.cache,K=Q.length,W=pQ($,K);if(!yJ(Z,W))J.uniform1iv(this.addr,W),bJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||gX,W[X])}function F1(J){switch(J){case 5126:return iq;case 35664:return oq;case 35665:return aq;case 35666:return rq;case 35674:return tq;case 35675:return eq;case 35676:return J1;case 5124:case 35670:return Q1;case 35667:case 35671:return $1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return W1;case 36294:return X1;case 36295:return Y1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return G1}}class lX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=sq(Q.type)}}class dX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=F1(Q.type)}}class uX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var XK=/(\w+)(\])?(\[|\.)?/g;function IX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function O1(J,Q,$){let Z=J.name,K=Z.length;XK.lastIndex=0;while(!0){let W=XK.exec(Z),X=XK.lastIndex,Y=W[1],U=W[2]==="]",H=W[3];if(U)Y=Y|0;if(H===void 0||H==="["&&X+2===K){IX($,H===void 0?new lX(Y,J,Q):new dX(Y,J,Q));break}else{let G=$.map[Y];if(G===void 0)G=new uX(Y),IX($,G);$=G}}}class R6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);O1(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function AX(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var E1=37297,D1=0;function k1(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var PX=new o0;function R1(J){WJ._getMatrix(PX,WJ.workingColorSpace,J);let Q=`mat3( ${PX.elements.map(($)=>$.toFixed(4))} )`;switch(WJ.getTransfer(J)){case LZ:return[Q,"LinearTransferOETF"];case VJ:return[Q,"sRGBTransferOETF"];default:return m0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function wX(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+k1(J.getShaderSource(Q),Y)}else return W}function V1(J,Q){let $=R1(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var L1={[T$]:"Linear",[S$]:"Reinhard",[j$]:"Cineon",[$6]:"ACESFilmic",[f$]:"AgX",[y$]:"Neutral",[v$]:"Custom"};function z1(J,Q){let $=L1[Q];if($===void 0)return m0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var xQ=new j;function B1(){WJ.getLuminanceCoefficients(xQ);let J=xQ.x.toFixed(4),Q=xQ.y.toFixed(4),$=xQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function M1(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(k6).join(`
`)}function I1(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function A1(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function k6(J){return J!==""}function _X(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function CX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var P1=/^[ \t]*#include +<([\w\d./]+)>/gm;function HK(J){return J.replace(P1,_1)}var w1=new Map;function _1(J,Q){let $=e0[Q];if($===void 0){let Z=w1.get(Q);if(Z!==void 0)$=e0[Z],m0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return HK($)}var C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function TX(J){return J.replace(C1,T1)}function T1(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function SX(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var S1={[J6]:"SHADOWMAP_TYPE_PCF",[R7]:"SHADOWMAP_TYPE_VSM"};function j1(J){return S1[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v1={[z7]:"ENVMAP_TYPE_CUBE",[f8]:"ENVMAP_TYPE_CUBE",[Z6]:"ENVMAP_TYPE_CUBE_UV"};function f1(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return v1[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var y1={[f8]:"ENVMAP_MODE_REFRACTION"};function b1(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return y1[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h1={[fW]:"ENVMAP_BLENDING_MULTIPLY",[yW]:"ENVMAP_BLENDING_MIX",[bW]:"ENVMAP_BLENDING_ADD"};function x1(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return h1[J.combine]||"ENVMAP_BLENDING_NONE"}function g1(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function p1(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,U=j1($),H=f1($),N=b1($),G=x1($),q=g1($),F=M1($),R=I1(W),I=K.createProgram(),O,E,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(k6).join(`
`),O.length>0)O+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(k6).join(`
`),E.length>0)E+=`
`}else O=[SX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(k6).join(`
`),E=[SX($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+H:"",$.envMap?"#define "+N:"",$.envMap?"#define "+G:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==C9?"#define TONE_MAPPING":"",$.toneMapping!==C9?e0.tonemapping_pars_fragment:"",$.toneMapping!==C9?z1("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",e0.colorspace_pars_fragment,V1("linearToOutputTexel",$.outputColorSpace),B1(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(k6).join(`
`);if(X=HK(X),X=_X(X,$),X=CX(X,$),Y=HK(Y),Y=_X(Y,$),Y=CX(Y,$),X=TX(X),Y=TX(Y),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,O=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,E=["#define varying in",$.glslVersion===zZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===zZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let P=C+O+X,L=C+E+Y,A=AX(K,K.VERTEX_SHADER,P),w=AX(K,K.FRAGMENT_SHADER,L);if(K.attachShader(I,A),K.attachShader(I,w),$.index0AttributeName!==void 0)K.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(I,0,"position");K.linkProgram(I);function _(D){if(J.debug.checkShaderErrors){let p=K.getProgramInfoLog(I)||"",o=K.getShaderInfoLog(A)||"",x=K.getShaderInfoLog(w)||"",u=p.trim(),n=o.trim(),g=x.trim(),e=!0,K0=!0;if(K.getProgramParameter(I,K.LINK_STATUS)===!1)if(e=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,I,A,w);else{let Y0=wX(K,A,"vertex"),w0=wX(K,w,"fragment");p0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(I,K.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+u+`
`+Y0+`
`+w0)}else if(u!=="")m0("WebGLProgram: Program Info Log:",u);else if(n===""||g==="")K0=!1;if(K0)D.diagnostics={runnable:e,programLog:u,vertexShader:{log:n,prefix:O},fragmentShader:{log:g,prefix:E}}}K.deleteShader(A),K.deleteShader(w),V=new R6(K,I),M=A1(K,I)}let V;this.getUniforms=function(){if(V===void 0)_(this);return V};let M;this.getAttributes=function(){if(M===void 0)_(this);return M};let m=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(m===!1)m=K.getProgramParameter(I,E1);return m},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=D1++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=A,this.fragmentShader=w,this}var m1=0;class cX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new nX(J),Q.set(J,$);return $}}class nX{constructor(J){this.id=m1++,this.code=J,this.usedTimes=0}}function l1(J){return J===h8||J===EQ||J===DQ}function d1(J,Q,$,Z,K,W){let X=new Y6,Y=new cX,U=new Set,H=[],N=new Map,G=Z.logarithmicDepthBuffer,q=Z.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(V){if(U.add(V),V===0)return"uv";return`uv${V}`}function I(V,M,m,D,p,o){let x=D.fog,u=p.geometry,n=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,g=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,e=Q.get(V.envMap||n,g),K0=!!e&&e.mapping===Z6?e.image.height:null,Y0=F[V.type];if(V.precision!==null){if(q=Z.getMaxPrecision(V.precision),q!==V.precision)m0("WebGLProgram.getParameters:",V.precision,"not supported, using",q,"instead.")}let w0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,k0=w0!==void 0?w0.length:0,qJ=0;if(u.morphAttributes.position!==void 0)qJ=1;if(u.morphAttributes.normal!==void 0)qJ=2;if(u.morphAttributes.color!==void 0)qJ=3;let YJ,a,U0,V0;if(Y0){let s0=m9[Y0];YJ=s0.vertexShader,a=s0.fragmentShader}else{YJ=V.vertexShader,a=V.fragmentShader;let s0=Y.getVertexShaderStage(V),NJ=Y.getFragmentShaderStage(V);Y.update(V,s0,NJ),U0=s0.id,V0=NJ.id}let N0=J.getRenderTarget(),b0=J.state.buffers.depth.getReversed(),JJ=p.isInstancedMesh===!0,l0=p.isBatchedMesh===!0,u0=!!V.map,t=!!V.matcap,Z0=!!e,J0=!!V.aoMap,L0=!!V.lightMap,P0=!!V.bumpMap&&V.wireframe===!1,f0=!!V.normalMap,h0=!!V.displacementMap,n0=!!V.emissiveMap,c0=!!V.metalnessMap,T=!!V.roughnessMap,GJ=V.anisotropy>0,a0=V.clearcoat>0,r0=V.dispersion>0,B=V.iridescence>0,k=V.sheen>0,S=V.transmission>0,l=GJ&&!!V.anisotropyMap,Q0=a0&&!!V.clearcoatMap,X0=a0&&!!V.clearcoatNormalMap,O0=a0&&!!V.clearcoatRoughnessMap,c=B&&!!V.iridescenceMap,r=B&&!!V.iridescenceThicknessMap,M0=k&&!!V.sheenColorMap,y0=k&&!!V.sheenRoughnessMap,H0=!!V.specularMap,W0=!!V.specularColorMap,C0=!!V.specularIntensityMap,S0=S&&!!V.transmissionMap,d0=S&&!!V.thicknessMap,v=!!V.gradientMap,G0=!!V.alphaMap,i=V.alphaTest>0,F0=!!V.alphaHash,I0=!!V.extensions,$0=C9;if(V.toneMapped){if(N0===null||N0.isXRRenderTarget===!0)$0=J.toneMapping}let E0={shaderID:Y0,shaderType:V.type,shaderName:V.name,vertexShader:YJ,fragmentShader:a,defines:V.defines,customVertexShaderID:U0,customFragmentShaderID:V0,isRawShaderMaterial:V.isRawShaderMaterial===!0,glslVersion:V.glslVersion,precision:q,batching:l0,batchingColor:l0&&p._colorsTexture!==null,instancing:JJ,instancingColor:JJ&&p.instanceColor!==null,instancingMorph:JJ&&p.morphTexture!==null,outputColorSpace:N0===null?J.outputColorSpace:N0.isXRRenderTarget===!0?N0.texture.colorSpace:WJ.workingColorSpace,alphaToCoverage:!!V.alphaToCoverage,map:u0,matcap:t,envMap:Z0,envMapMode:Z0&&e.mapping,envMapCubeUVHeight:K0,aoMap:J0,lightMap:L0,bumpMap:P0,normalMap:f0,displacementMap:h0,emissiveMap:n0,normalMapObjectSpace:f0&&V.normalMapType===nW,normalMapTangentSpace:f0&&V.normalMapType===RZ,packedNormalMap:f0&&V.normalMapType===RZ&&l1(V.normalMap.format),metalnessMap:c0,roughnessMap:T,anisotropy:GJ,anisotropyMap:l,clearcoat:a0,clearcoatMap:Q0,clearcoatNormalMap:X0,clearcoatRoughnessMap:O0,dispersion:r0,iridescence:B,iridescenceMap:c,iridescenceThicknessMap:r,sheen:k,sheenColorMap:M0,sheenRoughnessMap:y0,specularMap:H0,specularColorMap:W0,specularIntensityMap:C0,transmission:S,transmissionMap:S0,thicknessMap:d0,gradientMap:v,opaque:V.transparent===!1&&V.blending===Q6&&V.alphaToCoverage===!1,alphaMap:G0,alphaTest:i,alphaHash:F0,combine:V.combine,mapUv:u0&&R(V.map.channel),aoMapUv:J0&&R(V.aoMap.channel),lightMapUv:L0&&R(V.lightMap.channel),bumpMapUv:P0&&R(V.bumpMap.channel),normalMapUv:f0&&R(V.normalMap.channel),displacementMapUv:h0&&R(V.displacementMap.channel),emissiveMapUv:n0&&R(V.emissiveMap.channel),metalnessMapUv:c0&&R(V.metalnessMap.channel),roughnessMapUv:T&&R(V.roughnessMap.channel),anisotropyMapUv:l&&R(V.anisotropyMap.channel),clearcoatMapUv:Q0&&R(V.clearcoatMap.channel),clearcoatNormalMapUv:X0&&R(V.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O0&&R(V.clearcoatRoughnessMap.channel),iridescenceMapUv:c&&R(V.iridescenceMap.channel),iridescenceThicknessMapUv:r&&R(V.iridescenceThicknessMap.channel),sheenColorMapUv:M0&&R(V.sheenColorMap.channel),sheenRoughnessMapUv:y0&&R(V.sheenRoughnessMap.channel),specularMapUv:H0&&R(V.specularMap.channel),specularColorMapUv:W0&&R(V.specularColorMap.channel),specularIntensityMapUv:C0&&R(V.specularIntensityMap.channel),transmissionMapUv:S0&&R(V.transmissionMap.channel),thicknessMapUv:d0&&R(V.thicknessMap.channel),alphaMapUv:G0&&R(V.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(f0||GJ),vertexNormals:!!u.attributes.normal,vertexColors:V.vertexColors,vertexAlphas:V.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!u.attributes.uv&&(u0||G0),fog:!!x,useFog:V.fog===!0,fogExp2:!!x&&x.isFogExp2,flatShading:V.wireframe===!1&&(V.flatShading===!0||u.attributes.normal===void 0&&f0===!1&&(V.isMeshLambertMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isMeshPhysicalMaterial)),sizeAttenuation:V.sizeAttenuation===!0,logarithmicDepthBuffer:G,reversedDepthBuffer:b0,skinning:p.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:k0,morphTextureStride:qJ,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:V.dithering,shadowMapEnabled:J.shadowMap.enabled&&m.length>0,shadowMapType:J.shadowMap.type,toneMapping:$0,decodeVideoTexture:u0&&V.map.isVideoTexture===!0&&WJ.getTransfer(V.map.colorSpace)===VJ,decodeVideoTextureEmissive:n0&&V.emissiveMap.isVideoTexture===!0&&WJ.getTransfer(V.emissiveMap.colorSpace)===VJ,premultipliedAlpha:V.premultipliedAlpha,doubleSided:V.side===b9,flipSided:V.side===aJ,useDepthPacking:V.depthPacking>=0,depthPacking:V.depthPacking||0,index0AttributeName:V.index0AttributeName,extensionClipCullDistance:I0&&V.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I0&&V.extensions.multiDraw===!0||l0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:V.customProgramCacheKey()};return E0.vertexUv1s=U.has(1),E0.vertexUv2s=U.has(2),E0.vertexUv3s=U.has(3),U.clear(),E0}function O(V){let M=[];if(V.shaderID)M.push(V.shaderID);else M.push(V.customVertexShaderID),M.push(V.customFragmentShaderID);if(V.defines!==void 0)for(let m in V.defines)M.push(m),M.push(V.defines[m]);if(V.isRawShaderMaterial===!1)E(M,V),C(M,V),M.push(J.outputColorSpace);return M.push(V.customProgramCacheKey),M.join()}function E(V,M){V.push(M.precision),V.push(M.outputColorSpace),V.push(M.envMapMode),V.push(M.envMapCubeUVHeight),V.push(M.mapUv),V.push(M.alphaMapUv),V.push(M.lightMapUv),V.push(M.aoMapUv),V.push(M.bumpMapUv),V.push(M.normalMapUv),V.push(M.displacementMapUv),V.push(M.emissiveMapUv),V.push(M.metalnessMapUv),V.push(M.roughnessMapUv),V.push(M.anisotropyMapUv),V.push(M.clearcoatMapUv),V.push(M.clearcoatNormalMapUv),V.push(M.clearcoatRoughnessMapUv),V.push(M.iridescenceMapUv),V.push(M.iridescenceThicknessMapUv),V.push(M.sheenColorMapUv),V.push(M.sheenRoughnessMapUv),V.push(M.specularMapUv),V.push(M.specularColorMapUv),V.push(M.specularIntensityMapUv),V.push(M.transmissionMapUv),V.push(M.thicknessMapUv),V.push(M.combine),V.push(M.fogExp2),V.push(M.sizeAttenuation),V.push(M.morphTargetsCount),V.push(M.morphAttributeCount),V.push(M.numDirLights),V.push(M.numPointLights),V.push(M.numSpotLights),V.push(M.numSpotLightMaps),V.push(M.numHemiLights),V.push(M.numRectAreaLights),V.push(M.numDirLightShadows),V.push(M.numPointLightShadows),V.push(M.numSpotLightShadows),V.push(M.numSpotLightShadowsWithMaps),V.push(M.numLightProbes),V.push(M.shadowMapType),V.push(M.toneMapping),V.push(M.numClippingPlanes),V.push(M.numClipIntersection),V.push(M.depthPacking)}function C(V,M){if(X.disableAll(),M.instancing)X.enable(0);if(M.instancingColor)X.enable(1);if(M.instancingMorph)X.enable(2);if(M.matcap)X.enable(3);if(M.envMap)X.enable(4);if(M.normalMapObjectSpace)X.enable(5);if(M.normalMapTangentSpace)X.enable(6);if(M.clearcoat)X.enable(7);if(M.iridescence)X.enable(8);if(M.alphaTest)X.enable(9);if(M.vertexColors)X.enable(10);if(M.vertexAlphas)X.enable(11);if(M.vertexUv1s)X.enable(12);if(M.vertexUv2s)X.enable(13);if(M.vertexUv3s)X.enable(14);if(M.vertexTangents)X.enable(15);if(M.anisotropy)X.enable(16);if(M.alphaHash)X.enable(17);if(M.batching)X.enable(18);if(M.dispersion)X.enable(19);if(M.batchingColor)X.enable(20);if(M.gradientMap)X.enable(21);if(M.packedNormalMap)X.enable(22);if(M.vertexNormals)X.enable(23);if(V.push(X.mask),X.disableAll(),M.fog)X.enable(0);if(M.useFog)X.enable(1);if(M.flatShading)X.enable(2);if(M.logarithmicDepthBuffer)X.enable(3);if(M.reversedDepthBuffer)X.enable(4);if(M.skinning)X.enable(5);if(M.morphTargets)X.enable(6);if(M.morphNormals)X.enable(7);if(M.morphColors)X.enable(8);if(M.premultipliedAlpha)X.enable(9);if(M.shadowMapEnabled)X.enable(10);if(M.doubleSided)X.enable(11);if(M.flipSided)X.enable(12);if(M.useDepthPacking)X.enable(13);if(M.dithering)X.enable(14);if(M.transmission)X.enable(15);if(M.sheen)X.enable(16);if(M.opaque)X.enable(17);if(M.pointsUvs)X.enable(18);if(M.decodeVideoTexture)X.enable(19);if(M.decodeVideoTextureEmissive)X.enable(20);if(M.alphaToCoverage)X.enable(21);if(M.numLightProbeGrids>0)X.enable(22);if(M.hasPositionAttribute)X.enable(23);V.push(X.mask)}function P(V){let M=F[V.type],m;if(M){let D=m9[M];m=HX.clone(D.uniforms)}else m=V.uniforms;return m}function L(V,M){let m=N.get(M);if(m!==void 0)++m.usedTimes;else m=new p1(J,M,V,K),H.push(m),N.set(M,m);return m}function A(V){if(--V.usedTimes===0){let M=H.indexOf(V);H[M]=H[H.length-1],H.pop(),N.delete(V.cacheKey),V.destroy()}}function w(V){Y.remove(V)}function _(){Y.dispose()}return{getParameters:I,getProgramCacheKey:O,getUniforms:P,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:H,dispose:_}}function u1(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,U){J.get(X)[Y]=U}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function c1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function jX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function vX(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let F=0;if(q.isInstancedMesh)F+=2;if(q.isSkinnedMesh)F+=1;return F}function Y(q,F,R,I,O,E){let C=J[Q];if(C===void 0)C={id:q.id,object:q,geometry:F,material:R,materialVariant:X(q),groupOrder:I,renderOrder:q.renderOrder,z:O,group:E},J[Q]=C;else C.id=q.id,C.object=q,C.geometry=F,C.material=R,C.materialVariant=X(q),C.groupOrder=I,C.renderOrder=q.renderOrder,C.z=O,C.group=E;return Q++,C}function U(q,F,R,I,O,E){let C=Y(q,F,R,I,O,E);if(R.transmission>0)Z.push(C);else if(R.transparent===!0)K.push(C);else $.push(C)}function H(q,F,R,I,O,E){let C=Y(q,F,R,I,O,E);if(R.transmission>0)Z.unshift(C);else if(R.transparent===!0)K.unshift(C);else $.unshift(C)}function N(q,F,R){if($.length>1)$.sort(q||c1);if(Z.length>1)Z.sort(F||jX);if(K.length>1)K.sort(F||jX);if(R)$.reverse(),Z.reverse(),K.reverse()}function G(){for(let q=Q,F=J.length;q<F;q++){let R=J[q];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:G,sort:N}}function n1(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new vX,J.set(Z,[X]);else if(K>=W.length)X=new vX,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function s1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new j,color:new QJ};break;case"SpotLight":$={position:new j,direction:new j,color:new QJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new j,color:new QJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new j,skyColor:new QJ,groundColor:new QJ};break;case"RectAreaLight":$={color:new QJ,position:new j,halfWidth:new j,halfHeight:new j};break}return J[Q.id]=$,$}}}function i1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new D0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new D0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new D0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var o1=0;function a1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function r1(J){let Q=new s1,$=i1(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new j);let K=new j,W=new kJ,X=new kJ;function Y(H){let N=0,G=0,q=0;for(let M=0;M<9;M++)Z.probe[M].set(0,0,0);let F=0,R=0,I=0,O=0,E=0,C=0,P=0,L=0,A=0,w=0,_=0;H.sort(a1);for(let M=0,m=H.length;M<m;M++){let D=H[M],p=D.color,o=D.intensity,x=D.distance,u=null;if(D.shadow&&D.shadow.map)if(D.shadow.map.texture.format===h8)u=D.shadow.map.texture;else u=D.shadow.map.depthTexture||D.shadow.map.texture;if(D.isAmbientLight)N+=p.r*o,G+=p.g*o,q+=p.b*o;else if(D.isLightProbe){for(let n=0;n<9;n++)Z.probe[n].addScaledVector(D.sh.coefficients[n],o);_++}else if(D.isDirectionalLight){let n=Q.get(D);if(n.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let g=D.shadow,e=$.get(D);e.shadowIntensity=g.intensity,e.shadowBias=g.bias,e.shadowNormalBias=g.normalBias,e.shadowRadius=g.radius,e.shadowMapSize=g.mapSize,Z.directionalShadow[F]=e,Z.directionalShadowMap[F]=u,Z.directionalShadowMatrix[F]=D.shadow.matrix,C++}Z.directional[F]=n,F++}else if(D.isSpotLight){let n=Q.get(D);n.position.setFromMatrixPosition(D.matrixWorld),n.color.copy(p).multiplyScalar(o),n.distance=x,n.coneCos=Math.cos(D.angle),n.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),n.decay=D.decay,Z.spot[I]=n;let g=D.shadow;if(D.map){if(Z.spotLightMap[A]=D.map,A++,g.updateMatrices(D),D.castShadow)w++}if(Z.spotLightMatrix[I]=g.matrix,D.castShadow){let e=$.get(D);e.shadowIntensity=g.intensity,e.shadowBias=g.bias,e.shadowNormalBias=g.normalBias,e.shadowRadius=g.radius,e.shadowMapSize=g.mapSize,Z.spotShadow[I]=e,Z.spotShadowMap[I]=u,L++}I++}else if(D.isRectAreaLight){let n=Q.get(D);n.color.copy(p).multiplyScalar(o),n.halfWidth.set(D.width*0.5,0,0),n.halfHeight.set(0,D.height*0.5,0),Z.rectArea[O]=n,O++}else if(D.isPointLight){let n=Q.get(D);if(n.color.copy(D.color).multiplyScalar(D.intensity),n.distance=D.distance,n.decay=D.decay,D.castShadow){let g=D.shadow,e=$.get(D);e.shadowIntensity=g.intensity,e.shadowBias=g.bias,e.shadowNormalBias=g.normalBias,e.shadowRadius=g.radius,e.shadowMapSize=g.mapSize,e.shadowCameraNear=g.camera.near,e.shadowCameraFar=g.camera.far,Z.pointShadow[R]=e,Z.pointShadowMap[R]=u,Z.pointShadowMatrix[R]=D.shadow.matrix,P++}Z.point[R]=n,R++}else if(D.isHemisphereLight){let n=Q.get(D);n.skyColor.copy(D.color).multiplyScalar(o),n.groundColor.copy(D.groundColor).multiplyScalar(o),Z.hemi[E]=n,E++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=B0.LTC_FLOAT_1,Z.rectAreaLTC2=B0.LTC_FLOAT_2;else Z.rectAreaLTC1=B0.LTC_HALF_1,Z.rectAreaLTC2=B0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=G,Z.ambient[2]=q;let V=Z.hash;if(V.directionalLength!==F||V.pointLength!==R||V.spotLength!==I||V.rectAreaLength!==O||V.hemiLength!==E||V.numDirectionalShadows!==C||V.numPointShadows!==P||V.numSpotShadows!==L||V.numSpotMaps!==A||V.numLightProbes!==_)Z.directional.length=F,Z.spot.length=I,Z.rectArea.length=O,Z.point.length=R,Z.hemi.length=E,Z.directionalShadow.length=C,Z.directionalShadowMap.length=C,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.spotShadow.length=L,Z.spotShadowMap.length=L,Z.directionalShadowMatrix.length=C,Z.pointShadowMatrix.length=P,Z.spotLightMatrix.length=L+A-w,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=w,Z.numLightProbes=_,V.directionalLength=F,V.pointLength=R,V.spotLength=I,V.rectAreaLength=O,V.hemiLength=E,V.numDirectionalShadows=C,V.numPointShadows=P,V.numSpotShadows=L,V.numSpotMaps=A,V.numLightProbes=_,Z.version=o1++}function U(H,N){let G=0,q=0,F=0,R=0,I=0,O=N.matrixWorldInverse;for(let E=0,C=H.length;E<C;E++){let P=H[E];if(P.isDirectionalLight){let L=Z.directional[G];L.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(O),G++}else if(P.isSpotLight){let L=Z.spot[F];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),L.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(O),F++}else if(P.isRectAreaLight){let L=Z.rectArea[R];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),X.identity(),W.copy(P.matrixWorld),W.premultiply(O),X.extractRotation(W),L.halfWidth.set(P.width*0.5,0,0),L.halfHeight.set(0,P.height*0.5,0),L.halfWidth.applyMatrix4(X),L.halfHeight.applyMatrix4(X),R++}else if(P.isPointLight){let L=Z.point[q];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(O),q++}else if(P.isHemisphereLight){let L=Z.hemi[I];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(O),I++}}}return{setup:Y,setupView:U,state:Z}}function fX(J){let Q=new r1(J),$=[],Z=[],K=[];function W(q){G.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function U(q){K.push(q)}function H(){Q.setup($)}function N(q){Q.setupView($,q)}let G={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:G,setupLights:H,setupLightsView:N,pushLight:X,pushShadow:Y,pushLightProbeGrid:U}}function t1(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new fX(J),Q.set(K,[Y]);else if(W>=X.length)Y=new fX(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QN=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],$N=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],yX=new kJ,D6=new j,YK=new j;function ZN(J,Q,$){let Z=new H6,K=new D0,W=new D0,X=new IJ,Y=new hZ,U=new xZ,H={},N=$.maxTextureSize,G={[V7]:aJ,[aJ]:V7,[b9]:b9},q=new V9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new D0},radius:{value:4}},vertexShader:e1,fragmentShader:JN}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let R=new k9;R.setAttribute("position",new Y9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new g0(R,q),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J6;let E=this.type;this.render=function(w,_,V){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(w.length===0)return;if(this.type===XW)m0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=J6;let M=J.getRenderTarget(),m=J.getActiveCubeFace(),D=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(h9),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let o=E!==this.type;if(o)_.traverse(function(x){if(x.material)if(Array.isArray(x.material))x.material.forEach((u)=>u.needsUpdate=!0);else x.material.needsUpdate=!0});for(let x=0,u=w.length;x<u;x++){let n=w[x],g=n.shadow;if(g===void 0){m0("WebGLShadowMap:",n,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;K.copy(g.mapSize);let e=g.getFrameExtents();if(K.multiply(e),W.copy(g.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/e.x),K.x=W.x*e.x,g.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/e.y),K.y=W.y*e.y,g.mapSize.y=W.y}let K0=J.state.buffers.depth.getReversed();if(g.camera._reversedDepth=K0,g.map===null||o===!0){if(g.map!==null){if(g.map.depthTexture!==null)g.map.depthTexture.dispose(),g.map.depthTexture=null;g.map.dispose()}if(this.type===R7){if(n.isPointLight){m0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}g.map=new D9(K.x,K.y,{format:h8,type:Q8,minFilter:fJ,magFilter:fJ,generateMipmaps:!1}),g.map.texture.name=n.name+".shadowMap",g.map.depthTexture=new R8(K.x,K.y,J8),g.map.depthTexture.name=n.name+".shadowMapDepth",g.map.depthTexture.format=y8,g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=E8,g.map.depthTexture.magFilter=E8}else{if(n.isPointLight)g.map=new qK(K.x),g.map.depthTexture=new wZ(K.x,D8);else g.map=new D9(K.x,K.y),g.map.depthTexture=new R8(K.x,K.y,D8);if(g.map.depthTexture.name=n.name+".shadowMap",g.map.depthTexture.format=y8,this.type===J6)g.map.depthTexture.compareFunction=K0?RQ:kQ,g.map.depthTexture.minFilter=fJ,g.map.depthTexture.magFilter=fJ;else g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=E8,g.map.depthTexture.magFilter=E8}g.camera.updateProjectionMatrix()}let Y0=g.map.isWebGLCubeRenderTarget?6:1;for(let w0=0;w0<Y0;w0++){if(g.map.isWebGLCubeRenderTarget)J.setRenderTarget(g.map,w0),J.clear();else{if(w0===0)J.setRenderTarget(g.map),J.clear();let k0=g.getViewport(w0);X.set(W.x*k0.x,W.y*k0.y,W.x*k0.z,W.y*k0.w),p.viewport(X)}if(n.isPointLight){let{camera:k0,matrix:qJ}=g,YJ=n.distance||k0.far;if(YJ!==k0.far)k0.far=YJ,k0.updateProjectionMatrix();D6.setFromMatrixPosition(n.matrixWorld),k0.position.copy(D6),YK.copy(k0.position),YK.add(QN[w0]),k0.up.copy($N[w0]),k0.lookAt(YK),k0.updateMatrixWorld(),qJ.makeTranslation(-D6.x,-D6.y,-D6.z),yX.multiplyMatrices(k0.projectionMatrix,k0.matrixWorldInverse),g._frustum.setFromProjectionMatrix(yX,k0.coordinateSystem,k0.reversedDepth)}else g.updateMatrices(n);Z=g.getFrustum(),L(_,V,g.camera,n,this.type)}if(g.isPointLightShadow!==!0&&this.type===R7)C(g,V);g.needsUpdate=!1}E=this.type,O.needsUpdate=!1,J.setRenderTarget(M,m,D)};function C(w,_){let V=Q.update(I);if(q.defines.VSM_SAMPLES!==w.blurSamples)q.defines.VSM_SAMPLES=w.blurSamples,F.defines.VSM_SAMPLES=w.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new D9(K.x,K.y,{format:h8,type:Q8});q.uniforms.shadow_pass.value=w.map.depthTexture,q.uniforms.resolution.value=w.mapSize,q.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(_,null,V,q,I,null),F.uniforms.shadow_pass.value=w.mapPass.texture,F.uniforms.resolution.value=w.mapSize,F.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(_,null,V,F,I,null)}function P(w,_,V,M){let m=null,D=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)m=D;else if(m=V.isPointLight===!0?U:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let p=m.uuid,o=_.uuid,x=H[p];if(x===void 0)x={},H[p]=x;let u=x[o];if(u===void 0)u=m.clone(),x[o]=u,_.addEventListener("dispose",A);m=u}if(m.visible=_.visible,m.wireframe=_.wireframe,M===R7)m.side=_.shadowSide!==null?_.shadowSide:_.side;else m.side=_.shadowSide!==null?_.shadowSide:G[_.side];if(m.alphaMap=_.alphaMap,m.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,m.map=_.map,m.clipShadows=_.clipShadows,m.clippingPlanes=_.clippingPlanes,m.clipIntersection=_.clipIntersection,m.displacementMap=_.displacementMap,m.displacementScale=_.displacementScale,m.displacementBias=_.displacementBias,m.wireframeLinewidth=_.wireframeLinewidth,m.linewidth=_.linewidth,V.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let p=J.properties.get(m);p.light=V}return m}function L(w,_,V,M,m){if(w.visible===!1)return;if(w.layers.test(_.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&m===R7)&&(!w.frustumCulled||Z.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);let o=Q.update(w),x=w.material;if(Array.isArray(x)){let u=o.groups;for(let n=0,g=u.length;n<g;n++){let e=u[n],K0=x[e.materialIndex];if(K0&&K0.visible){let Y0=P(w,K0,M,m);w.onBeforeShadow(J,w,_,V,o,Y0,e),J.renderBufferDirect(V,null,o,Y0,w,e),w.onAfterShadow(J,w,_,V,o,Y0,e)}}}else if(x.visible){let u=P(w,x,M,m);w.onBeforeShadow(J,w,_,V,o,u,null),J.renderBufferDirect(V,null,o,u,w,null),w.onAfterShadow(J,w,_,V,o,u,null)}}}let p=w.children;for(let o=0,x=p.length;o<x;o++)L(p[o],_,V,M,m)}function A(w){w.target.removeEventListener("dispose",A);for(let V in H){let M=H[V],m=w.target.uuid;if(m in M)M[m].dispose(),delete M[m]}}}function KN(J,Q){function $(){let v=!1,G0=new IJ,i=null,F0=new IJ(0,0,0,0);return{setMask:function(I0){if(i!==I0&&!v)J.colorMask(I0,I0,I0,I0),i=I0},setLocked:function(I0){v=I0},setClear:function(I0,$0,E0,s0,NJ){if(NJ===!0)I0*=s0,$0*=s0,E0*=s0;if(G0.set(I0,$0,E0,s0),F0.equals(G0)===!1)J.clearColor(I0,$0,E0,s0),F0.copy(G0)},reset:function(){v=!1,i=null,F0.set(-1,0,0,0)}}}function Z(){let v=!1,G0=!1,i=null,F0=null,I0=null;return{setReversed:function($0){if(G0!==$0){let E0=Q.get("EXT_clip_control");if($0)E0.clipControlEXT(E0.LOWER_LEFT_EXT,E0.ZERO_TO_ONE_EXT);else E0.clipControlEXT(E0.LOWER_LEFT_EXT,E0.NEGATIVE_ONE_TO_ONE_EXT);G0=$0;let s0=I0;I0=null,this.setClear(s0)}},getReversed:function(){return G0},setTest:function($0){if($0)N0(J.DEPTH_TEST);else b0(J.DEPTH_TEST)},setMask:function($0){if(i!==$0&&!v)J.depthMask($0),i=$0},setFunc:function($0){if(G0)$0=$X[$0];if(F0!==$0){switch($0){case wW:J.depthFunc(J.NEVER);break;case _W:J.depthFunc(J.ALWAYS);break;case CW:J.depthFunc(J.LESS);break;case C$:J.depthFunc(J.LEQUAL);break;case TW:J.depthFunc(J.EQUAL);break;case SW:J.depthFunc(J.GEQUAL);break;case jW:J.depthFunc(J.GREATER);break;case vW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}F0=$0}},setLocked:function($0){v=$0},setClear:function($0){if(I0!==$0){if(I0=$0,G0)$0=1-$0;J.clearDepth($0)}},reset:function(){v=!1,i=null,F0=null,I0=null,G0=!1}}}function K(){let v=!1,G0=null,i=null,F0=null,I0=null,$0=null,E0=null,s0=null,NJ=null;return{setTest:function(EJ){if(!v)if(EJ)N0(J.STENCIL_TEST);else b0(J.STENCIL_TEST)},setMask:function(EJ){if(G0!==EJ&&!v)J.stencilMask(EJ),G0=EJ},setFunc:function(EJ,Q9,q9){if(i!==EJ||F0!==Q9||I0!==q9)J.stencilFunc(EJ,Q9,q9),i=EJ,F0=Q9,I0=q9},setOp:function(EJ,Q9,q9){if($0!==EJ||E0!==Q9||s0!==q9)J.stencilOp(EJ,Q9,q9),$0=EJ,E0=Q9,s0=q9},setLocked:function(EJ){v=EJ},setClear:function(EJ){if(NJ!==EJ)J.clearStencil(EJ),NJ=EJ},reset:function(){v=!1,G0=null,i=null,F0=null,I0=null,$0=null,E0=null,s0=null,NJ=null}}}let W=new $,X=new Z,Y=new K,U=new WeakMap,H=new WeakMap,N={},G={},q={},F=new WeakMap,R=[],I=null,O=!1,E=null,C=null,P=null,L=null,A=null,w=null,_=null,V=new QJ(0,0,0),M=0,m=!1,D=null,p=null,o=null,x=null,u=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),g=!1,e=0,K0=J.getParameter(J.VERSION);if(K0.indexOf("WebGL")!==-1)e=parseFloat(/^WebGL (\d)/.exec(K0)[1]),g=e>=1;else if(K0.indexOf("OpenGL ES")!==-1)e=parseFloat(/^OpenGL ES (\d)/.exec(K0)[1]),g=e>=2;let Y0=null,w0={},k0=J.getParameter(J.SCISSOR_BOX),qJ=J.getParameter(J.VIEWPORT),YJ=new IJ().fromArray(k0),a=new IJ().fromArray(qJ);function U0(v,G0,i,F0){let I0=new Uint8Array(4),$0=J.createTexture();J.bindTexture(v,$0),J.texParameteri(v,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(v,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let E0=0;E0<i;E0++)if(v===J.TEXTURE_3D||v===J.TEXTURE_2D_ARRAY)J.texImage3D(G0,0,J.RGBA,1,1,F0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(G0+E0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return $0}let V0={};V0[J.TEXTURE_2D]=U0(J.TEXTURE_2D,J.TEXTURE_2D,1),V0[J.TEXTURE_CUBE_MAP]=U0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),V0[J.TEXTURE_2D_ARRAY]=U0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),V0[J.TEXTURE_3D]=U0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),N0(J.DEPTH_TEST),X.setFunc(C$),P0(!1),f0(A$),N0(J.CULL_FACE),J0(h9);function N0(v){if(N[v]!==!0)J.enable(v),N[v]=!0}function b0(v){if(N[v]!==!1)J.disable(v),N[v]=!1}function JJ(v,G0){if(q[v]!==G0){if(J.bindFramebuffer(v,G0),q[v]=G0,v===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=G0;if(v===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=G0;return!0}return!1}function l0(v,G0){let i=R,F0=!1;if(v){if(i=F.get(G0),i===void 0)i=[],F.set(G0,i);let I0=v.textures;if(i.length!==I0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let $0=0,E0=I0.length;$0<E0;$0++)i[$0]=J.COLOR_ATTACHMENT0+$0;i.length=I0.length,F0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,F0=!0;if(F0)J.drawBuffers(i)}function u0(v){if(I!==v)return J.useProgram(v),I=v,!0;return!1}let t={[L7]:J.FUNC_ADD,[UW]:J.FUNC_SUBTRACT,[HW]:J.FUNC_REVERSE_SUBTRACT};t[qW]=J.MIN,t[NW]=J.MAX;let Z0={[GW]:J.ZERO,[FW]:J.ONE,[OW]:J.SRC_COLOR,[DW]:J.SRC_ALPHA,[BW]:J.SRC_ALPHA_SATURATE,[LW]:J.DST_COLOR,[RW]:J.DST_ALPHA,[EW]:J.ONE_MINUS_SRC_COLOR,[kW]:J.ONE_MINUS_SRC_ALPHA,[zW]:J.ONE_MINUS_DST_COLOR,[VW]:J.ONE_MINUS_DST_ALPHA,[MW]:J.CONSTANT_COLOR,[IW]:J.ONE_MINUS_CONSTANT_COLOR,[AW]:J.CONSTANT_ALPHA,[PW]:J.ONE_MINUS_CONSTANT_ALPHA};function J0(v,G0,i,F0,I0,$0,E0,s0,NJ,EJ){if(v===h9){if(O===!0)b0(J.BLEND),O=!1;return}if(O===!1)N0(J.BLEND),O=!0;if(v!==YW){if(v!==E||EJ!==m){if(C!==L7||A!==L7)J.blendEquation(J.FUNC_ADD),C=L7,A=L7;if(EJ)switch(v){case Q6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case P$:J.blendFunc(J.ONE,J.ONE);break;case w$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case _$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:p0("WebGLState: Invalid blending: ",v);break}else switch(v){case Q6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case P$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case w$:p0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _$:p0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:p0("WebGLState: Invalid blending: ",v);break}P=null,L=null,w=null,_=null,V.set(0,0,0),M=0,E=v,m=EJ}return}if(I0=I0||G0,$0=$0||i,E0=E0||F0,G0!==C||I0!==A)J.blendEquationSeparate(t[G0],t[I0]),C=G0,A=I0;if(i!==P||F0!==L||$0!==w||E0!==_)J.blendFuncSeparate(Z0[i],Z0[F0],Z0[$0],Z0[E0]),P=i,L=F0,w=$0,_=E0;if(s0.equals(V)===!1||NJ!==M)J.blendColor(s0.r,s0.g,s0.b,NJ),V.copy(s0),M=NJ;E=v,m=!1}function L0(v,G0){v.side===b9?b0(J.CULL_FACE):N0(J.CULL_FACE);let i=v.side===aJ;if(G0)i=!i;P0(i),v.blending===Q6&&v.transparent===!1?J0(h9):J0(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),X.setFunc(v.depthFunc),X.setTest(v.depthTest),X.setMask(v.depthWrite),W.setMask(v.colorWrite);let F0=v.stencilWrite;if(Y.setTest(F0),F0)Y.setMask(v.stencilWriteMask),Y.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),Y.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);n0(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?N0(J.SAMPLE_ALPHA_TO_COVERAGE):b0(J.SAMPLE_ALPHA_TO_COVERAGE)}function P0(v){if(D!==v){if(v)J.frontFace(J.CW);else J.frontFace(J.CCW);D=v}}function f0(v){if(v!==KW){if(N0(J.CULL_FACE),v!==p)if(v===A$)J.cullFace(J.BACK);else if(v===WW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else b0(J.CULL_FACE);p=v}function h0(v){if(v!==o){if(g)J.lineWidth(v);o=v}}function n0(v,G0,i){if(v){if(N0(J.POLYGON_OFFSET_FILL),x!==G0||u!==i){if(x=G0,u=i,X.getReversed())G0=-G0;J.polygonOffset(G0,i)}}else b0(J.POLYGON_OFFSET_FILL)}function c0(v){if(v)N0(J.SCISSOR_TEST);else b0(J.SCISSOR_TEST)}function T(v){if(v===void 0)v=J.TEXTURE0+n-1;if(Y0!==v)J.activeTexture(v),Y0=v}function GJ(v,G0,i){if(i===void 0)if(Y0===null)i=J.TEXTURE0+n-1;else i=Y0;let F0=w0[i];if(F0===void 0)F0={type:void 0,texture:void 0},w0[i]=F0;if(F0.type!==v||F0.texture!==G0){if(Y0!==i)J.activeTexture(i),Y0=i;J.bindTexture(v,G0||V0[v]),F0.type=v,F0.texture=G0}}function a0(){let v=w0[Y0];if(v!==void 0&&v.type!==void 0)J.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function r0(){try{J.compressedTexImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function k(){try{J.texSubImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function S(){try{J.texSubImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function Q0(){try{J.compressedTexSubImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function X0(){try{J.texStorage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function O0(){try{J.texStorage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function c(){try{J.texImage2D(...arguments)}catch(v){p0("WebGLState:",v)}}function r(){try{J.texImage3D(...arguments)}catch(v){p0("WebGLState:",v)}}function M0(v){if(G[v]!==void 0)return G[v];else return J.getParameter(v)}function y0(v,G0){if(G[v]!==G0)J.pixelStorei(v,G0),G[v]=G0}function H0(v){if(YJ.equals(v)===!1)J.scissor(v.x,v.y,v.z,v.w),YJ.copy(v)}function W0(v){if(a.equals(v)===!1)J.viewport(v.x,v.y,v.z,v.w),a.copy(v)}function C0(v,G0){let i=H.get(G0);if(i===void 0)i=new WeakMap,H.set(G0,i);let F0=i.get(v);if(F0===void 0)F0=J.getUniformBlockIndex(G0,v.name),i.set(v,F0)}function S0(v,G0){let F0=H.get(G0).get(v);if(U.get(G0)!==F0)J.uniformBlockBinding(G0,F0,v.__bindingPointIndex),U.set(G0,F0)}function d0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},G={},Y0=null,w0={},q={},F=new WeakMap,R=[],I=null,O=!1,E=null,C=null,P=null,L=null,A=null,w=null,_=null,V=new QJ(0,0,0),M=0,m=!1,D=null,p=null,o=null,x=null,u=null,YJ.set(0,0,J.canvas.width,J.canvas.height),a.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:N0,disable:b0,bindFramebuffer:JJ,drawBuffers:l0,useProgram:u0,setBlending:J0,setMaterial:L0,setFlipSided:P0,setCullFace:f0,setLineWidth:h0,setPolygonOffset:n0,setScissorTest:c0,activeTexture:T,bindTexture:GJ,unbindTexture:a0,compressedTexImage2D:r0,compressedTexImage3D:B,texImage2D:c,texImage3D:r,pixelStorei:y0,getParameter:M0,updateUBOMapping:C0,uniformBlockBinding:S0,texStorage2D:X0,texStorage3D:O0,texSubImage2D:k,texSubImage3D:S,compressedTexSubImage2D:l,compressedTexSubImage3D:Q0,scissor:H0,viewport:W0,reset:d0}}function WN(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new D0,N=new WeakMap,G=new Set,q,F=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function I(B,k){return R?new OffscreenCanvas(B,k):E7("canvas")}function O(B,k,S){let l=1,Q0=r0(B);if(Q0.width>S||Q0.height>S)l=S/Math.max(Q0.width,Q0.height);if(l<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let X0=Math.floor(l*Q0.width),O0=Math.floor(l*Q0.height);if(q===void 0)q=I(X0,O0);let c=k?I(X0,O0):q;return c.width=X0,c.height=O0,c.getContext("2d").drawImage(B,0,0,X0,O0),m0("WebGLRenderer: Texture has been resized from ("+Q0.width+"x"+Q0.height+") to ("+X0+"x"+O0+")."),c}else{if("data"in B)m0("WebGLRenderer: Image in DataTexture is too big ("+Q0.width+"x"+Q0.height+").");return B}return B}function E(B){return B.generateMipmaps}function C(B){J.generateMipmap(B)}function P(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,k,S,l,Q0,X0=!1){if(B!==null){if(J[B]!==void 0)return J[B];m0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let O0;if(l){if(O0=Q.get("EXT_texture_norm16"),!O0)m0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=k;if(k===J.RED){if(S===J.FLOAT)c=J.R32F;if(S===J.HALF_FLOAT)c=J.R16F;if(S===J.UNSIGNED_BYTE)c=J.R8;if(S===J.UNSIGNED_SHORT&&O0)c=O0.R16_EXT;if(S===J.SHORT&&O0)c=O0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.R8UI;if(S===J.UNSIGNED_SHORT)c=J.R16UI;if(S===J.UNSIGNED_INT)c=J.R32UI;if(S===J.BYTE)c=J.R8I;if(S===J.SHORT)c=J.R16I;if(S===J.INT)c=J.R32I}if(k===J.RG){if(S===J.FLOAT)c=J.RG32F;if(S===J.HALF_FLOAT)c=J.RG16F;if(S===J.UNSIGNED_BYTE)c=J.RG8;if(S===J.UNSIGNED_SHORT&&O0)c=O0.RG16_EXT;if(S===J.SHORT&&O0)c=O0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RG8UI;if(S===J.UNSIGNED_SHORT)c=J.RG16UI;if(S===J.UNSIGNED_INT)c=J.RG32UI;if(S===J.BYTE)c=J.RG8I;if(S===J.SHORT)c=J.RG16I;if(S===J.INT)c=J.RG32I}if(k===J.RGB_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RGB8UI;if(S===J.UNSIGNED_SHORT)c=J.RGB16UI;if(S===J.UNSIGNED_INT)c=J.RGB32UI;if(S===J.BYTE)c=J.RGB8I;if(S===J.SHORT)c=J.RGB16I;if(S===J.INT)c=J.RGB32I}if(k===J.RGBA_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(S===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(S===J.UNSIGNED_INT)c=J.RGBA32UI;if(S===J.BYTE)c=J.RGBA8I;if(S===J.SHORT)c=J.RGBA16I;if(S===J.INT)c=J.RGBA32I}if(k===J.RGB){if(S===J.UNSIGNED_SHORT&&O0)c=O0.RGB16_EXT;if(S===J.SHORT&&O0)c=O0.RGB16_SNORM_EXT;if(S===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(S===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(k===J.RGBA){let r=X0?LZ:WJ.getTransfer(Q0);if(S===J.FLOAT)c=J.RGBA32F;if(S===J.HALF_FLOAT)c=J.RGBA16F;if(S===J.UNSIGNED_BYTE)c=r===VJ?J.SRGB8_ALPHA8:J.RGBA8;if(S===J.UNSIGNED_SHORT&&O0)c=O0.RGBA16_EXT;if(S===J.SHORT&&O0)c=O0.RGBA16_SNORM_EXT;if(S===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(S===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function A(B,k){let S;if(B){if(k===null||k===D8||k===B7)S=J.DEPTH24_STENCIL8;else if(k===J8)S=J.DEPTH32F_STENCIL8;else if(k===W6)S=J.DEPTH24_STENCIL8,m0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===D8||k===B7)S=J.DEPTH_COMPONENT24;else if(k===J8)S=J.DEPTH_COMPONENT32F;else if(k===W6)S=J.DEPTH_COMPONENT16;return S}function w(B,k){if(E(B)===!0||B.isFramebufferTexture&&B.minFilter!==E8&&B.minFilter!==fJ)return Math.log2(Math.max(k.width,k.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return k.mipmaps.length;else return 1}function _(B){let k=B.target;if(k.removeEventListener("dispose",_),M(k),k.isVideoTexture)N.delete(k);if(k.isHTMLTexture)G.delete(k)}function V(B){let k=B.target;k.removeEventListener("dispose",V),D(k)}function M(B){let k=Z.get(B);if(k.__webglInit===void 0)return;let S=B.source,l=F.get(S);if(l){let Q0=l[k.__cacheKey];if(Q0.usedTimes--,Q0.usedTimes===0)m(B);if(Object.keys(l).length===0)F.delete(S)}Z.remove(B)}function m(B){let k=Z.get(B);J.deleteTexture(k.__webglTexture);let S=B.source,l=F.get(S);delete l[k.__cacheKey],X.memory.textures--}function D(B){let k=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(k.__webglFramebuffer[l]))for(let Q0=0;Q0<k.__webglFramebuffer[l].length;Q0++)J.deleteFramebuffer(k.__webglFramebuffer[l][Q0]);else J.deleteFramebuffer(k.__webglFramebuffer[l]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[l])}else{if(Array.isArray(k.__webglFramebuffer))for(let l=0;l<k.__webglFramebuffer.length;l++)J.deleteFramebuffer(k.__webglFramebuffer[l]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let l=0;l<k.__webglColorRenderbuffer.length;l++)if(k.__webglColorRenderbuffer[l])J.deleteRenderbuffer(k.__webglColorRenderbuffer[l])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let S=B.textures;for(let l=0,Q0=S.length;l<Q0;l++){let X0=Z.get(S[l]);if(X0.__webglTexture)J.deleteTexture(X0.__webglTexture),X.memory.textures--;Z.remove(S[l])}Z.remove(B)}let p=0;function o(){p=0}function x(){return p}function u(B){p=B}function n(){let B=p;if(B>=K.maxTextures)m0("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+K.maxTextures);return p+=1,B}function g(B){let k=[];return k.push(B.wrapS),k.push(B.wrapT),k.push(B.wrapR||0),k.push(B.magFilter),k.push(B.minFilter),k.push(B.anisotropy),k.push(B.internalFormat),k.push(B.format),k.push(B.type),k.push(B.generateMipmaps),k.push(B.premultiplyAlpha),k.push(B.flipY),k.push(B.unpackAlignment),k.push(B.colorSpace),k.join()}function e(B,k){let S=Z.get(B);if(B.isVideoTexture)GJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&S.__version!==B.version){let l=B.image;if(l===null)m0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)m0("WebGLRenderer: Texture marked for update but image is incomplete");else{b0(S,B,k);return}}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,S.__webglTexture,J.TEXTURE0+k)}function K0(B,k){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){b0(S,B,k);return}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,S.__webglTexture,J.TEXTURE0+k)}function Y0(B,k){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){b0(S,B,k);return}$.bindTexture(J.TEXTURE_3D,S.__webglTexture,J.TEXTURE0+k)}function w0(B,k){let S=Z.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&S.__version!==B.version){JJ(S,B,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+k)}let k0={[UQ]:J.REPEAT,[HQ]:J.CLAMP_TO_EDGE,[hW]:J.MIRRORED_REPEAT},qJ={[E8]:J.NEAREST,[xW]:J.NEAREST_MIPMAP_NEAREST,[K6]:J.NEAREST_MIPMAP_LINEAR,[fJ]:J.LINEAR,[qQ]:J.LINEAR_MIPMAP_NEAREST,[e9]:J.LINEAR_MIPMAP_LINEAR},YJ={[sW]:J.NEVER,[tW]:J.ALWAYS,[iW]:J.LESS,[kQ]:J.LEQUAL,[oW]:J.EQUAL,[RQ]:J.GEQUAL,[aW]:J.GREATER,[rW]:J.NOTEQUAL};function a(B,k){if(k.type===J8&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===fJ||k.magFilter===qQ||k.magFilter===K6||k.magFilter===e9||k.minFilter===fJ||k.minFilter===qQ||k.minFilter===K6||k.minFilter===e9))m0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,k0[k.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,k0[k.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,k0[k.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,qJ[k.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,qJ[k.minFilter]),k.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,YJ[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===E8)return;if(k.minFilter!==K6&&k.minFilter!==e9)return;if(k.type===J8&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let S=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,K.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function U0(B,k){let S=!1;if(B.__webglInit===void 0)B.__webglInit=!0,k.addEventListener("dispose",_);let l=k.source,Q0=F.get(l);if(Q0===void 0)Q0={},F.set(l,Q0);let X0=g(k);if(X0!==B.__cacheKey){if(Q0[X0]===void 0)Q0[X0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,S=!0;Q0[X0].usedTimes++;let O0=Q0[B.__cacheKey];if(O0!==void 0){if(Q0[B.__cacheKey].usedTimes--,O0.usedTimes===0)m(k)}B.__cacheKey=X0,B.__webglTexture=Q0[X0].texture}return S}function V0(B,k,S){return Math.floor(Math.floor(B/S)/k)}function N0(B,k,S,l){let X0=B.updateRanges;if(X0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,S,l,k.data);else{X0.sort((y0,H0)=>y0.start-H0.start);let O0=0;for(let y0=1;y0<X0.length;y0++){let H0=X0[O0],W0=X0[y0],C0=H0.start+H0.count,S0=V0(W0.start,k.width,4),d0=V0(H0.start,k.width,4);if(W0.start<=C0+1&&S0===d0&&V0(W0.start+W0.count-1,k.width,4)===S0)H0.count=Math.max(H0.count,W0.start+W0.count-H0.start);else++O0,X0[O0]=W0}X0.length=O0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),r=$.getParameter(J.UNPACK_SKIP_PIXELS),M0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let y0=0,H0=X0.length;y0<H0;y0++){let W0=X0[y0],C0=Math.floor(W0.start/4),S0=Math.ceil(W0.count/4),d0=C0%k.width,v=Math.floor(C0/k.width),G0=S0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,d0),$.pixelStorei(J.UNPACK_SKIP_ROWS,v),$.texSubImage2D(J.TEXTURE_2D,0,d0,v,G0,1,S,l,k.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,r),$.pixelStorei(J.UNPACK_SKIP_ROWS,M0)}}function b0(B,k,S){let l=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)l=J.TEXTURE_3D;let Q0=U0(B,k),X0=k.source;$.bindTexture(l,B.__webglTexture,J.TEXTURE0+S);let O0=Z.get(X0);if(X0.version!==O0.__version||Q0===!0){if($.activeTexture(J.TEXTURE0+S),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let i=WJ.getPrimaries(WJ.workingColorSpace),F0=k.colorSpace===x8?null:WJ.getPrimaries(k.colorSpace),I0=k.colorSpace===x8||i===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let r=O(k.image,!1,K.maxTextureSize);r=a0(k,r);let M0=W.convert(k.format,k.colorSpace),y0=W.convert(k.type),H0=L(k.internalFormat,M0,y0,k.normalized,k.colorSpace,k.isVideoTexture);a(l,k);let W0,C0=k.mipmaps,S0=k.isVideoTexture!==!0,d0=O0.__version===void 0||Q0===!0,v=X0.dataReady,G0=w(k,r);if(k.isDepthTexture){if(H0=A(k.format===b8,k.type),d0)if(S0)$.texStorage2D(J.TEXTURE_2D,1,H0,r.width,r.height);else $.texImage2D(J.TEXTURE_2D,0,H0,r.width,r.height,0,M0,y0,null)}else if(k.isDataTexture)if(C0.length>0){if(S0&&d0)$.texStorage2D(J.TEXTURE_2D,G0,H0,C0[0].width,C0[0].height);for(let i=0,F0=C0.length;i<F0;i++)if(W0=C0[i],S0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,W0.width,W0.height,M0,y0,W0.data)}else $.texImage2D(J.TEXTURE_2D,i,H0,W0.width,W0.height,0,M0,y0,W0.data);k.generateMipmaps=!1}else if(S0){if(d0)$.texStorage2D(J.TEXTURE_2D,G0,H0,r.width,r.height);if(v)N0(k,r,M0,y0)}else $.texImage2D(J.TEXTURE_2D,0,H0,r.width,r.height,0,M0,y0,r.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(S0&&d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,G0,H0,C0[0].width,C0[0].height,r.depth);for(let i=0,F0=C0.length;i<F0;i++)if(W0=C0[i],k.format!==x9)if(M0!==null)if(S0){if(v)if(k.layerUpdates.size>0){let I0=QK(W0.width,W0.height,k.format,k.type);for(let $0 of k.layerUpdates){let E0=W0.data.subarray($0*I0/W0.data.BYTES_PER_ELEMENT,($0+1)*I0/W0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,$0,W0.width,W0.height,1,M0,E0)}k.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,W0.width,W0.height,r.depth,M0,W0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,H0,W0.width,W0.height,r.depth,0,W0.data,0,0);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(v)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,W0.width,W0.height,r.depth,M0,y0,W0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,H0,W0.width,W0.height,r.depth,0,M0,y0,W0.data)}else{if(S0&&d0)$.texStorage2D(J.TEXTURE_2D,G0,H0,C0[0].width,C0[0].height);for(let i=0,F0=C0.length;i<F0;i++)if(W0=C0[i],k.format!==x9)if(M0!==null)if(S0){if(v)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,W0.width,W0.height,M0,W0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,H0,W0.width,W0.height,0,W0.data);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,W0.width,W0.height,M0,y0,W0.data)}else $.texImage2D(J.TEXTURE_2D,i,H0,W0.width,W0.height,0,M0,y0,W0.data)}else if(k.isDataArrayTexture)if(S0){if(d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,G0,H0,r.width,r.height,r.depth);if(v)if(k.layerUpdates.size>0){let i=QK(r.width,r.height,k.format,k.type);for(let F0 of k.layerUpdates){let I0=r.data.subarray(F0*i/r.data.BYTES_PER_ELEMENT,(F0+1)*i/r.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,F0,r.width,r.height,1,M0,y0,I0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,r.width,r.height,r.depth,M0,y0,r.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,H0,r.width,r.height,r.depth,0,M0,y0,r.data);else if(k.isData3DTexture)if(S0){if(d0)$.texStorage3D(J.TEXTURE_3D,G0,H0,r.width,r.height,r.depth);if(v)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,r.width,r.height,r.depth,M0,y0,r.data)}else $.texImage3D(J.TEXTURE_3D,0,H0,r.width,r.height,r.depth,0,M0,y0,r.data);else if(k.isFramebufferTexture){if(d0)if(S0)$.texStorage2D(J.TEXTURE_2D,G0,H0,r.width,r.height);else{let{width:i,height:F0}=r;for(let I0=0;I0<G0;I0++)$.texImage2D(J.TEXTURE_2D,I0,H0,i,F0,0,M0,y0,null),i>>=1,F0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(r.parentNode!==i){i.appendChild(r),G.add(k),i.onpaint=(F0)=>{let I0=F0.changedElements;for(let $0 of G)if(I0.includes($0.image))$0.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,r);else{let{RGBA:I0,RGBA:$0,UNSIGNED_BYTE:E0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,$0,E0,r)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(C0.length>0){if(S0&&d0){let i=r0(C0[0]);$.texStorage2D(J.TEXTURE_2D,G0,H0,i.width,i.height)}for(let i=0,F0=C0.length;i<F0;i++)if(W0=C0[i],S0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,M0,y0,W0)}else $.texImage2D(J.TEXTURE_2D,i,H0,M0,y0,W0);k.generateMipmaps=!1}else if(S0){if(d0){let i=r0(r);$.texStorage2D(J.TEXTURE_2D,G0,H0,i.width,i.height)}if(v)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M0,y0,r)}else $.texImage2D(J.TEXTURE_2D,0,H0,M0,y0,r);if(E(k))C(l);if(O0.__version=X0.version,k.onUpdate)k.onUpdate(k)}B.__version=k.version}function JJ(B,k,S){if(k.image.length!==6)return;let l=U0(B,k),Q0=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+S);let X0=Z.get(Q0);if(Q0.version!==X0.__version||l===!0){$.activeTexture(J.TEXTURE0+S);let O0=WJ.getPrimaries(WJ.workingColorSpace),c=k.colorSpace===x8?null:WJ.getPrimaries(k.colorSpace),r=k.colorSpace===x8||O0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,r);let M0=k.isCompressedTexture||k.image[0].isCompressedTexture,y0=k.image[0]&&k.image[0].isDataTexture,H0=[];for(let $0=0;$0<6;$0++){if(!M0&&!y0)H0[$0]=O(k.image[$0],!0,K.maxCubemapSize);else H0[$0]=y0?k.image[$0].image:k.image[$0];H0[$0]=a0(k,H0[$0])}let W0=H0[0],C0=W.convert(k.format,k.colorSpace),S0=W.convert(k.type),d0=L(k.internalFormat,C0,S0,k.normalized,k.colorSpace),v=k.isVideoTexture!==!0,G0=X0.__version===void 0||l===!0,i=Q0.dataReady,F0=w(k,W0);a(J.TEXTURE_CUBE_MAP,k);let I0;if(M0){if(v&&G0)$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,d0,W0.width,W0.height);for(let $0=0;$0<6;$0++){I0=H0[$0].mipmaps;for(let E0=0;E0<I0.length;E0++){let s0=I0[E0];if(k.format!==x9)if(C0!==null)if(v){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,0,0,s0.width,s0.height,C0,s0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,d0,s0.width,s0.height,0,s0.data);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,0,0,s0.width,s0.height,C0,S0,s0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0,d0,s0.width,s0.height,0,C0,S0,s0.data)}}}else{if(I0=k.mipmaps,v&&G0){if(I0.length>0)F0++;let $0=r0(H0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,d0,$0.width,$0.height)}for(let $0=0;$0<6;$0++)if(y0){if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,0,0,H0[$0].width,H0[$0].height,C0,S0,H0[$0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,d0,H0[$0].width,H0[$0].height,0,C0,S0,H0[$0].data);for(let E0=0;E0<I0.length;E0++){let NJ=I0[E0].image[$0].image;if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,0,0,NJ.width,NJ.height,C0,S0,NJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,d0,NJ.width,NJ.height,0,C0,S0,NJ.data)}}else{if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,0,0,C0,S0,H0[$0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,d0,C0,S0,H0[$0]);for(let E0=0;E0<I0.length;E0++){let s0=I0[E0];if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,0,0,C0,S0,s0.image[$0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,E0+1,d0,C0,S0,s0.image[$0])}}}if(E(k))C(J.TEXTURE_CUBE_MAP);if(X0.__version=Q0.version,k.onUpdate)k.onUpdate(k)}B.__version=k.version}function l0(B,k,S,l,Q0,X0){let O0=W.convert(S.format,S.colorSpace),c=W.convert(S.type),r=L(S.internalFormat,O0,c,S.normalized,S.colorSpace),M0=Z.get(k),y0=Z.get(S);if(y0.__renderTarget=k,!M0.__hasExternalTextures){let H0=Math.max(1,k.width>>X0),W0=Math.max(1,k.height>>X0);if(Q0===J.TEXTURE_3D||Q0===J.TEXTURE_2D_ARRAY)$.texImage3D(Q0,X0,r,H0,W0,k.depth,0,O0,c,null);else $.texImage2D(Q0,X0,r,H0,W0,0,O0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),T(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,Q0,y0.__webglTexture,0,c0(k));else if(Q0===J.TEXTURE_2D||Q0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&Q0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,Q0,y0.__webglTexture,X0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function u0(B,k,S){if(J.bindRenderbuffer(J.RENDERBUFFER,B),k.depthBuffer){let l=k.depthTexture,Q0=l&&l.isDepthTexture?l.type:null,X0=A(k.stencilBuffer,Q0),O0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(T(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,c0(k),X0,k.width,k.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,c0(k),X0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,X0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,O0,J.RENDERBUFFER,B)}else{let l=k.textures;for(let Q0=0;Q0<l.length;Q0++){let X0=l[Q0],O0=W.convert(X0.format,X0.colorSpace),c=W.convert(X0.type),r=L(X0.internalFormat,O0,c,X0.normalized,X0.colorSpace);if(T(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,c0(k),r,k.width,k.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,c0(k),r,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,r,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function t(B,k,S){let l=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q0=Z.get(k.depthTexture);if(Q0.__renderTarget=k,!Q0.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(l){if(Q0.__webglInit===void 0)Q0.__webglInit=!0,k.depthTexture.addEventListener("dispose",_);if(Q0.__webglTexture===void 0){Q0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,Q0.__webglTexture),a(J.TEXTURE_CUBE_MAP,k.depthTexture);let M0=W.convert(k.depthTexture.format),y0=W.convert(k.depthTexture.type),H0;if(k.depthTexture.format===y8)H0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===b8)H0=J.DEPTH24_STENCIL8;for(let W0=0;W0<6;W0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0,H0,k.width,k.height,0,M0,y0,null)}}else e(k.depthTexture,0);let X0=Q0.__webglTexture,O0=c0(k),c=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+S:J.TEXTURE_2D,r=k.depthTexture.format===b8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===y8)if(T(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,c,X0,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,r,c,X0,0);else if(k.depthTexture.format===b8)if(T(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,r,c,X0,0,O0);else J.framebufferTexture2D(J.FRAMEBUFFER,r,c,X0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z0(B){let k=Z.get(B),S=B.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==B.depthTexture){let l=B.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(l){let Q0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,l.removeEventListener("dispose",Q0)};l.addEventListener("dispose",Q0),k.__depthDisposeCallback=Q0}k.__boundDepthTexture=l}if(B.depthTexture&&!k.__autoAllocateDepthBuffer)if(S)for(let l=0;l<6;l++)t(k.__webglFramebuffer[l],B,l);else{let l=B.texture.mipmaps;if(l&&l.length>0)t(k.__webglFramebuffer[0],B,0);else t(k.__webglFramebuffer,B,0)}else if(S){k.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[l]),k.__webglDepthbuffer[l]===void 0)k.__webglDepthbuffer[l]=J.createRenderbuffer(),u0(k.__webglDepthbuffer[l],B,!1);else{let Q0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=k.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,X0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Q0,J.RENDERBUFFER,X0)}}else{let l=B.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),u0(k.__webglDepthbuffer,B,!1);else{let Q0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,X0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,X0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Q0,J.RENDERBUFFER,X0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function J0(B,k,S){let l=Z.get(B);if(k!==void 0)l0(l.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(S!==void 0)Z0(B)}function L0(B){let k=B.texture,S=Z.get(B),l=Z.get(k);B.addEventListener("dispose",V);let Q0=B.textures,X0=B.isWebGLCubeRenderTarget===!0,O0=Q0.length>1;if(!O0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=k.version,X.memory.textures++}if(X0){S.__webglFramebuffer=[];for(let c=0;c<6;c++)if(k.mipmaps&&k.mipmaps.length>0){S.__webglFramebuffer[c]=[];for(let r=0;r<k.mipmaps.length;r++)S.__webglFramebuffer[c][r]=J.createFramebuffer()}else S.__webglFramebuffer[c]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){S.__webglFramebuffer=[];for(let c=0;c<k.mipmaps.length;c++)S.__webglFramebuffer[c]=J.createFramebuffer()}else S.__webglFramebuffer=J.createFramebuffer();if(O0)for(let c=0,r=Q0.length;c<r;c++){let M0=Z.get(Q0[c]);if(M0.__webglTexture===void 0)M0.__webglTexture=J.createTexture(),X.memory.textures++}if(B.samples>0&&T(B)===!1){S.__webglMultisampledFramebuffer=J.createFramebuffer(),S.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let c=0;c<Q0.length;c++){let r=Q0[c];S.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,S.__webglColorRenderbuffer[c]);let M0=W.convert(r.format,r.colorSpace),y0=W.convert(r.type),H0=L(r.internalFormat,M0,y0,r.normalized,r.colorSpace,B.isXRRenderTarget===!0),W0=c0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,H0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,S.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)S.__webglDepthRenderbuffer=J.createRenderbuffer(),u0(S.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(X0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),a(J.TEXTURE_CUBE_MAP,k);for(let c=0;c<6;c++)if(k.mipmaps&&k.mipmaps.length>0)for(let r=0;r<k.mipmaps.length;r++)l0(S.__webglFramebuffer[c][r],B,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,r);else l0(S.__webglFramebuffer[c],B,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(E(k))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(O0){for(let c=0,r=Q0.length;c<r;c++){let M0=Q0[c],y0=Z.get(M0),H0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)H0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(H0,y0.__webglTexture),a(H0,M0),l0(S.__webglFramebuffer,B,M0,J.COLOR_ATTACHMENT0+c,H0,0),E(M0))C(H0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)c=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,l.__webglTexture),a(c,k),k.mipmaps&&k.mipmaps.length>0)for(let r=0;r<k.mipmaps.length;r++)l0(S.__webglFramebuffer[r],B,k,J.COLOR_ATTACHMENT0,c,r);else l0(S.__webglFramebuffer,B,k,J.COLOR_ATTACHMENT0,c,0);if(E(k))C(c);$.unbindTexture()}if(B.depthBuffer)Z0(B)}function P0(B){let k=B.textures;for(let S=0,l=k.length;S<l;S++){let Q0=k[S];if(E(Q0)){let X0=P(B),O0=Z.get(Q0).__webglTexture;$.bindTexture(X0,O0),C(X0),$.unbindTexture()}}}let f0=[],h0=[];function n0(B){if(B.samples>0){if(T(B)===!1){let{textures:k,width:S,height:l}=B,Q0=J.COLOR_BUFFER_BIT,X0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,O0=Z.get(B),c=k.length>1;if(c)for(let M0=0;M0<k.length;M0++)$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,O0.__webglMultisampledFramebuffer);let r=B.texture.mipmaps;if(r&&r.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglFramebuffer);for(let M0=0;M0<k.length;M0++){if(B.resolveDepthBuffer){if(B.depthBuffer)Q0|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)Q0|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,O0.__webglColorRenderbuffer[M0]);let y0=Z.get(k[M0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,y0,0)}if(J.blitFramebuffer(0,0,S,l,0,0,S,l,Q0,J.NEAREST),U===!0){if(f0.length=0,h0.length=0,f0.push(J.COLOR_ATTACHMENT0+M0),B.depthBuffer&&B.resolveDepthBuffer===!1)f0.push(X0),h0.push(X0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,h0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,f0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let M0=0;M0<k.length;M0++){$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,O0.__webglColorRenderbuffer[M0]);let y0=Z.get(k[M0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,O0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,y0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,O0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&U){let k=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function c0(B){return Math.min(K.maxSamples,B.samples)}function T(B){let k=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function GJ(B){let k=X.render.frame;if(N.get(B)!==k)N.set(B,k),B.update()}function a0(B,k){let{colorSpace:S,format:l,type:Q0}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return k;if(S!==VZ&&S!==x8)if(WJ.getTransfer(S)===VJ){if(l!==x9||Q0!==T9)m0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else p0("WebGLTextures: Unsupported texture color space:",S);return k}function r0(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)H.width=B.naturalWidth||B.width,H.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)H.width=B.displayWidth,H.height=B.displayHeight;else H.width=B.width,H.height=B.height;return H}this.allocateTextureUnit=n,this.resetTextureUnits=o,this.getTextureUnits=x,this.setTextureUnits=u,this.setTexture2D=e,this.setTexture2DArray=K0,this.setTexture3D=Y0,this.setTextureCube=w0,this.rebindTextures=J0,this.setupRenderTarget=L0,this.updateRenderTargetMipmap=P0,this.updateMultisampleRenderTarget=n0,this.setupDepthRenderbuffer=Z0,this.setupFrameBufferTexture=l0,this.useMultisampledRTT=T,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function XN(J,Q){function $(Z,K=x8){let W,X=WJ.getTransfer(K);if(Z===T9)return J.UNSIGNED_BYTE;if(Z===h$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===x$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===mW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===lW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===gW)return J.BYTE;if(Z===pW)return J.SHORT;if(Z===W6)return J.UNSIGNED_SHORT;if(Z===b$)return J.INT;if(Z===D8)return J.UNSIGNED_INT;if(Z===J8)return J.FLOAT;if(Z===Q8)return J.HALF_FLOAT;if(Z===dW)return J.ALPHA;if(Z===uW)return J.RGB;if(Z===x9)return J.RGBA;if(Z===y8)return J.DEPTH_COMPONENT;if(Z===b8)return J.DEPTH_STENCIL;if(Z===cW)return J.RED;if(Z===g$)return J.RED_INTEGER;if(Z===h8)return J.RG;if(Z===p$)return J.RG_INTEGER;if(Z===m$)return J.RGBA_INTEGER;if(Z===NQ||Z===GQ||Z===FQ||Z===OQ)if(X===VJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===NQ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===GQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===FQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===OQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===NQ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===GQ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===FQ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===OQ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===l$||Z===d$||Z===u$||Z===c$)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===l$)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===d$)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===u$)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===c$)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===n$||Z===s$||Z===i$||Z===o$||Z===a$||Z===EQ||Z===r$)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===n$||Z===s$)return X===VJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===i$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===o$)return W.COMPRESSED_R11_EAC;if(Z===a$)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===EQ)return W.COMPRESSED_RG11_EAC;if(Z===r$)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===t$||Z===e$||Z===JZ||Z===QZ||Z===$Z||Z===ZZ||Z===KZ||Z===WZ||Z===XZ||Z===YZ||Z===UZ||Z===HZ||Z===qZ||Z===NZ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===t$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===e$)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===JZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===QZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===$Z)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===ZZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===KZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===WZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===XZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===YZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===UZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===HZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===qZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===NZ)return X===VJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===GZ||Z===FZ||Z===OZ)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===GZ)return X===VJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===FZ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===OZ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===EZ||Z===DZ||Z===DQ||Z===kZ)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===EZ)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===DZ)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===DQ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===kZ)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===B7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var YN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new AQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new V9({vertexShader:YN,fragmentShader:UN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new g0(new rJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iX extends $8{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,U=null,H=null,N=null,G=null,q=null,F=null,R=typeof XRWebGLBinding<"u",I=new sX,O={},E=Q.getContextAttributes(),C=null,P=null,L=[],A=[],w=new D0,_=null,V=new iJ;V.viewport=new IJ;let M=new iJ;M.viewport=new IJ;let m=[V,M],D=new rZ,p=null,o=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let U0=L[a];if(U0===void 0)U0=new U6,L[a]=U0;return U0.getTargetRaySpace()},this.getControllerGrip=function(a){let U0=L[a];if(U0===void 0)U0=new U6,L[a]=U0;return U0.getGripSpace()},this.getHand=function(a){let U0=L[a];if(U0===void 0)U0=new U6,L[a]=U0;return U0.getHandSpace()};function x(a){let U0=A.indexOf(a.inputSource);if(U0===-1)return;let V0=L[U0];if(V0!==void 0)V0.update(a.inputSource,a.frame,U||W),V0.dispatchEvent({type:a.type,data:a.inputSource})}function u(){Z.removeEventListener("select",x),Z.removeEventListener("selectstart",x),Z.removeEventListener("selectend",x),Z.removeEventListener("squeeze",x),Z.removeEventListener("squeezestart",x),Z.removeEventListener("squeezeend",x),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",n);for(let a=0;a<L.length;a++){let U0=A[a];if(U0===null)continue;A[a]=null,L[a].disconnect(U0)}p=null,o=null,I.reset();for(let a in O)delete O[a];J.setRenderTarget(C),q=null,G=null,N=null,Z=null,P=null,YJ.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(w.width,w.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(K=a,$.isPresenting===!0)m0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if(X=a,$.isPresenting===!0)m0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(a){U=a},this.getBaseLayer=function(){return G!==null?G:q},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(a){if(Z=a,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",x),Z.addEventListener("selectstart",x),Z.addEventListener("selectend",x),Z.addEventListener("squeeze",x),Z.addEventListener("squeezestart",x),Z.addEventListener("squeezeend",x),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",n),E.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(w),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let V0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,V0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),P=new D9(q.framebufferWidth,q.framebufferHeight,{format:x9,type:T9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let V0=null,N0=null,b0=null;if(E.depth)b0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,V0=E.stencil?b8:y8,N0=E.stencil?B7:D8;let JJ={colorFormat:Q.RGBA8,depthFormat:b0,scaleFactor:K};N=this.getBinding(),G=N.createProjectionLayer(JJ),Z.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),P=new D9(G.textureWidth,G.textureHeight,{format:x9,type:T9,depthTexture:new R8(G.textureWidth,G.textureHeight,N0,void 0,void 0,void 0,void 0,void 0,void 0,V0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),U=null,W=await Z.requestReferenceSpace(X),YJ.setContext(Z),YJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function n(a){for(let U0=0;U0<a.removed.length;U0++){let V0=a.removed[U0],N0=A.indexOf(V0);if(N0>=0)A[N0]=null,L[N0].disconnect(V0)}for(let U0=0;U0<a.added.length;U0++){let V0=a.added[U0],N0=A.indexOf(V0);if(N0===-1){for(let JJ=0;JJ<L.length;JJ++)if(JJ>=A.length){A.push(V0),N0=JJ;break}else if(A[JJ]===null){A[JJ]=V0,N0=JJ;break}if(N0===-1)break}let b0=L[N0];if(b0)b0.connect(V0)}}let g=new j,e=new j;function K0(a,U0,V0){g.setFromMatrixPosition(U0.matrixWorld),e.setFromMatrixPosition(V0.matrixWorld);let N0=g.distanceTo(e),b0=U0.projectionMatrix.elements,JJ=V0.projectionMatrix.elements,l0=b0[14]/(b0[10]-1),u0=b0[14]/(b0[10]+1),t=(b0[9]+1)/b0[5],Z0=(b0[9]-1)/b0[5],J0=(b0[8]-1)/b0[0],L0=(JJ[8]+1)/JJ[0],P0=l0*J0,f0=l0*L0,h0=N0/(-J0+L0),n0=h0*-J0;if(U0.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.translateX(n0),a.translateZ(h0),a.matrixWorld.compose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),b0[10]===-1)a.projectionMatrix.copy(U0.projectionMatrix),a.projectionMatrixInverse.copy(U0.projectionMatrixInverse);else{let c0=l0+h0,T=u0+h0,GJ=P0-n0,a0=f0+(N0-n0),r0=t*u0/T*c0,B=Z0*u0/T*c0;a.projectionMatrix.makePerspective(GJ,a0,r0,B,c0,T),a.projectionMatrixInverse.copy(a.projectionMatrix).invert()}}function Y0(a,U0){if(U0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(U0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(Z===null)return;let{near:U0,far:V0}=a;if(I.texture!==null){if(I.depthNear>0)U0=I.depthNear;if(I.depthFar>0)V0=I.depthFar}if(D.near=M.near=V.near=U0,D.far=M.far=V.far=V0,p!==D.near||o!==D.far)Z.updateRenderState({depthNear:D.near,depthFar:D.far}),p=D.near,o=D.far;D.layers.mask=a.layers.mask|6,V.layers.mask=D.layers.mask&-5,M.layers.mask=D.layers.mask&-3;let N0=a.parent,b0=D.cameras;Y0(D,N0);for(let JJ=0;JJ<b0.length;JJ++)Y0(b0[JJ],N0);if(b0.length===2)K0(D,V,M);else D.projectionMatrix.copy(V.projectionMatrix);w0(a,D,N0)};function w0(a,U0,V0){if(V0===null)a.matrix.copy(U0.matrixWorld);else a.matrix.copy(V0.matrixWorld),a.matrix.invert(),a.matrix.multiply(U0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(U0.projectionMatrix),a.projectionMatrixInverse.copy(U0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=ZQ*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return D},this.getFoveation=function(){if(G===null&&q===null)return;return Y},this.setFoveation=function(a){if(Y=a,G!==null)G.fixedFoveation=a;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=a},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(D)},this.getCameraTexture=function(a){return O[a]};let k0=null;function qJ(a,U0){if(H=U0.getViewerPose(U||W),F=U0,H!==null){let V0=H.views;if(q!==null)J.setRenderTargetFramebuffer(P,q.framebuffer),J.setRenderTarget(P);let N0=!1;if(V0.length!==D.cameras.length)D.cameras.length=0,N0=!0;for(let u0=0;u0<V0.length;u0++){let t=V0[u0],Z0=null;if(q!==null)Z0=q.getViewport(t);else{let L0=N.getViewSubImage(G,t);if(Z0=L0.viewport,u0===0)J.setRenderTargetTextures(P,L0.colorTexture,L0.depthStencilTexture),J.setRenderTarget(P)}let J0=m[u0];if(J0===void 0)J0=new iJ,J0.layers.enable(u0),J0.viewport=new IJ,m[u0]=J0;if(J0.matrix.fromArray(t.transform.matrix),J0.matrix.decompose(J0.position,J0.quaternion,J0.scale),J0.projectionMatrix.fromArray(t.projectionMatrix),J0.projectionMatrixInverse.copy(J0.projectionMatrix).invert(),J0.viewport.set(Z0.x,Z0.y,Z0.width,Z0.height),u0===0)D.matrix.copy(J0.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);if(N0===!0)D.cameras.push(J0)}let b0=Z.enabledFeatures;if(b0&&b0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){N=$.getBinding();let u0=N.getDepthInformation(V0[0]);if(u0&&u0.isValid&&u0.texture)I.init(u0,Z.renderState)}if(b0&&b0.includes("camera-access")&&R){J.state.unbindTexture(),N=$.getBinding();for(let u0=0;u0<V0.length;u0++){let t=V0[u0].camera;if(t){let Z0=O[t];if(!Z0)Z0=new AQ,O[t]=Z0;let J0=N.getCameraImage(t);Z0.sourceTexture=J0}}}}for(let V0=0;V0<L.length;V0++){let N0=A[V0],b0=L[V0];if(N0!==null&&b0!==void 0)b0.update(N0,U0,U||W)}if(k0)k0(a,U0);if(U0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:U0});F=null}let YJ=new bX;YJ.setAnimationLoop(qJ),this.setAnimationLoop=function(a){k0=a},this.dispose=function(){}}}var HN=new kJ,oX=new o0;oX.set(-1,0,0,0,1,0,0,0,1);function qN(J,Q){function $(O,E){if(O.matrixAutoUpdate===!0)O.updateMatrix();E.value.copy(O.matrix)}function Z(O,E){if(E.color.getRGB(O.fogColor.value,yZ(J)),E.isFog)O.fogNear.value=E.near,O.fogFar.value=E.far;else if(E.isFogExp2)O.fogDensity.value=E.density}function K(O,E,C,P,L){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(O,E);else if(E.isMeshLambertMaterial){if(W(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(O,E),G(O,E);else if(E.isMeshPhongMaterial){if(W(O,E),N(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(O,E),q(O,E),E.isMeshPhysicalMaterial)F(O,E,L)}else if(E.isMeshMatcapMaterial)W(O,E),R(O,E);else if(E.isMeshDepthMaterial)W(O,E);else if(E.isMeshDistanceMaterial)W(O,E),I(O,E);else if(E.isMeshNormalMaterial)W(O,E);else if(E.isLineBasicMaterial){if(X(O,E),E.isLineDashedMaterial)Y(O,E)}else if(E.isPointsMaterial)U(O,E,C,P);else if(E.isSpriteMaterial)H(O,E);else if(E.isShadowMaterial)O.color.value.copy(E.color),O.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(O,E){if(O.opacity.value=E.opacity,E.color)O.diffuse.value.copy(E.color);if(E.emissive)O.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)O.map.value=E.map,$(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.bumpMap){if(O.bumpMap.value=E.bumpMap,$(E.bumpMap,O.bumpMapTransform),O.bumpScale.value=E.bumpScale,E.side===aJ)O.bumpScale.value*=-1}if(E.normalMap){if(O.normalMap.value=E.normalMap,$(E.normalMap,O.normalMapTransform),O.normalScale.value.copy(E.normalScale),E.side===aJ)O.normalScale.value.negate()}if(E.displacementMap)O.displacementMap.value=E.displacementMap,$(E.displacementMap,O.displacementMapTransform),O.displacementScale.value=E.displacementScale,O.displacementBias.value=E.displacementBias;if(E.emissiveMap)O.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,O.emissiveMapTransform);if(E.specularMap)O.specularMap.value=E.specularMap,$(E.specularMap,O.specularMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest;let C=Q.get(E),P=C.envMap,L=C.envMapRotation;if(P){if(O.envMap.value=P,O.envMapRotation.value.setFromMatrix4(HN.makeRotationFromEuler(L)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(oX);O.reflectivity.value=E.reflectivity,O.ior.value=E.ior,O.refractionRatio.value=E.refractionRatio}if(E.lightMap)O.lightMap.value=E.lightMap,O.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,O.lightMapTransform);if(E.aoMap)O.aoMap.value=E.aoMap,O.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,O.aoMapTransform)}function X(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,E.map)O.map.value=E.map,$(E.map,O.mapTransform)}function Y(O,E){O.dashSize.value=E.dashSize,O.totalSize.value=E.dashSize+E.gapSize,O.scale.value=E.scale}function U(O,E,C,P){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.size.value=E.size*C,O.scale.value=P*0.5,E.map)O.map.value=E.map,$(E.map,O.uvTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function H(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.rotation.value=E.rotation,E.map)O.map.value=E.map,$(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,$(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function N(O,E){O.specular.value.copy(E.specular),O.shininess.value=Math.max(E.shininess,0.0001)}function G(O,E){if(E.gradientMap)O.gradientMap.value=E.gradientMap}function q(O,E){if(O.metalness.value=E.metalness,E.metalnessMap)O.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=E.roughness,E.roughnessMap)O.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,O.roughnessMapTransform);if(E.envMap)O.envMapIntensity.value=E.envMapIntensity}function F(O,E,C){if(O.ior.value=E.ior,E.sheen>0){if(O.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),O.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)O.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,O.sheenColorMapTransform);if(E.sheenRoughnessMap)O.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(O.clearcoat.value=E.clearcoat,O.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)O.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,O.clearcoatMapTransform);if(E.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(O.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===aJ)O.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)O.dispersion.value=E.dispersion;if(E.iridescence>0){if(O.iridescence.value=E.iridescence,O.iridescenceIOR.value=E.iridescenceIOR,O.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)O.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,O.iridescenceMapTransform);if(E.iridescenceThicknessMap)O.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(E.transmission>0){if(O.transmission.value=E.transmission,O.transmissionSamplerMap.value=C.texture,O.transmissionSamplerSize.value.set(C.width,C.height),E.transmissionMap)O.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=E.thickness,E.thicknessMap)O.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=E.attenuationDistance,O.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(O.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)O.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=E.specularIntensity,O.specularColor.value.copy(E.specularColor),E.specularColorMap)O.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,O.specularColorMapTransform);if(E.specularIntensityMap)O.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,E){if(E.matcap)O.matcap.value=E.matcap}function I(O,E){let C=Q.get(E).light;O.referencePosition.value.setFromMatrixPosition(C.matrixWorld),O.nearDistance.value=C.shadow.camera.near,O.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function NN(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(L,A){let w=A.program;Z.uniformBlockBinding(L,w)}function H(L,A){let w=K[L.id];if(w===void 0)O(L),w=N(L),K[L.id]=w,L.addEventListener("dispose",C);let _=A.program;Z.updateUBOMapping(L,_);let V=Q.render.frame;if(W[L.id]!==V)q(L),W[L.id]=V}function N(L){let A=G();L.__bindingPointIndex=A;let w=J.createBuffer(),_=L.__size,V=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,_,V),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,w),w}function G(){for(let L=0;L<Y;L++)if(X.indexOf(L)===-1)return X.push(L),L;return p0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(L){let A=K[L.id],w=L.uniforms,_=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let V=0,M=w.length;V<M;V++){let m=w[V];if(Array.isArray(m))for(let D=0,p=m.length;D<p;D++)F(m[D],V,D,_);else F(m,V,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(L,A,w,_){if(I(L,A,w,_)===!0){let{__offset:V,value:M}=L;if(Array.isArray(M)){let m=0;for(let D=0;D<M.length;D++){let p=M[D],o=E(p);if(R(p,L.__data,m),typeof p!=="number"&&typeof p!=="boolean"&&!p.isMatrix3&&!ArrayBuffer.isView(p))m+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else R(M,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,V,L.__data)}}function R(L,A,w){if(typeof L==="number"||typeof L==="boolean")A[0]=L;else if(L.isMatrix3)A[0]=L.elements[0],A[1]=L.elements[1],A[2]=L.elements[2],A[3]=0,A[4]=L.elements[3],A[5]=L.elements[4],A[6]=L.elements[5],A[7]=0,A[8]=L.elements[6],A[9]=L.elements[7],A[10]=L.elements[8],A[11]=0;else if(ArrayBuffer.isView(L))A.set(new L.constructor(L.buffer,L.byteOffset,A.length));else L.toArray(A,w)}function I(L,A,w,_){let V=L.value,M=A+"_"+w;if(_[M]===void 0){if(typeof V==="number"||typeof V==="boolean")_[M]=V;else if(ArrayBuffer.isView(V))_[M]=V.slice();else _[M]=V.clone();return!0}else{let m=_[M];if(typeof V==="number"||typeof V==="boolean"){if(m!==V)return _[M]=V,!0}else if(ArrayBuffer.isView(V))return!0;else if(m.equals(V)===!1)return m.copy(V),!0}return!1}function O(L){let A=L.uniforms,w=0,_=16;for(let M=0,m=A.length;M<m;M++){let D=Array.isArray(A[M])?A[M]:[A[M]];for(let p=0,o=D.length;p<o;p++){let x=D[p],u=Array.isArray(x.value)?x.value:[x.value];for(let n=0,g=u.length;n<g;n++){let e=u[n],K0=E(e),Y0=w%_,w0=Y0%K0.boundary,k0=Y0+w0;if(w+=w0,k0!==0&&_-k0<K0.storage)w+=_-k0;x.__data=new Float32Array(K0.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=w,w+=K0.storage}}}let V=w%_;if(V>0)w+=_-V;return L.__size=w,L.__cache={},this}function E(L){let A={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")A.boundary=4,A.storage=4;else if(L.isVector2)A.boundary=8,A.storage=8;else if(L.isVector3||L.isColor)A.boundary=16,A.storage=12;else if(L.isVector4)A.boundary=16,A.storage=16;else if(L.isMatrix3)A.boundary=48,A.storage=48;else if(L.isMatrix4)A.boundary=64,A.storage=64;else if(L.isTexture)m0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))A.boundary=16,A.storage=L.byteLength;else m0("WebGLRenderer: Unsupported uniform value type.",L);return A}function C(L){let A=L.target;A.removeEventListener("dispose",C);let w=X.indexOf(A.__bindingPointIndex);X.splice(w,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function P(){for(let L in K)J.deleteBuffer(K[L]);X=[],K={},W={}}return{bind:U,update:H,dispose:P}}var GN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),p9=null;function FN(){if(p9===null)p9=new MQ(GN,16,16,h8,Q8),p9.name="DFG_LUT",p9.minFilter=fJ,p9.magFilter=fJ,p9.wrapS=HQ,p9.wrapT=HQ,p9.generateMipmaps=!1,p9.needsUpdate=!0;return p9}class NK{constructor(J={}){let{canvas:Q=eW(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:G=!1,outputBufferType:q=T9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=W;let R=q,I=new Set([m$,p$,g$]),O=new Set([T9,D8,W6,B7,h$,x$]),E=new Uint32Array(4),C=new Int32Array(4),P=new j,L=null,A=null,w=[],_=[],V=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=C9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,m=!1,D=null,p=null,o=null,x=null;this._outputColorSpace=S9;let u=0,n=0,g=null,e=-1,K0=null,Y0=new IJ,w0=new IJ,k0=null,qJ=new QJ(0),YJ=0,a=Q.width,U0=Q.height,V0=1,N0=null,b0=null,JJ=new IJ(0,0,a,U0),l0=new IJ(0,0,a,U0),u0=!1,t=new H6,Z0=!1,J0=!1,L0=new kJ,P0=new j,f0=new IJ,h0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},n0=!1;function c0(){return g===null?V0:1}let T=$;function GJ(z,f){return Q.getContext(z,f)}try{let z={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${ZW}`);if(Q.addEventListener("webglcontextlost",s0,!1),Q.addEventListener("webglcontextrestored",NJ,!1),Q.addEventListener("webglcontextcreationerror",EJ,!1),T===null){if(T=GJ("webgl2",z),T===null)if(GJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(z){throw p0("WebGLRenderer: "+z.message),z}let a0,r0,B,k,S,l,Q0,X0,O0,c,r,M0,y0,H0,W0,C0,S0,d0,v,G0,i,F0,I0;function $0(){if(a0=new Lq(T),a0.init(),i=new XN(T,a0),r0=new Gq(T,a0,J,i),B=new KN(T,a0),r0.reversedDepthBuffer&&G)B.buffers.depth.setReversed(!0);p=T.createFramebuffer(),o=T.createFramebuffer(),x=T.createFramebuffer(),k=new Mq(T),S=new u1,l=new WN(T,a0,B,S,r0,i,k),Q0=new Vq(M),X0=new wU(T),F0=new qq(T,X0),O0=new zq(T,X0,k,F0),c=new Aq(T,O0,X0,F0,k),d0=new Iq(T,r0,l),W0=new Fq(S),r=new d1(M,Q0,a0,r0,F0,W0),M0=new qN(M,S),y0=new n1,H0=new t1(a0),S0=new Hq(M,Q0,B,c,F,Y),C0=new ZN(M,c,r0),I0=new NN(T,k,r0,B),v=new Nq(T,a0,k),G0=new Bq(T,a0,k),k.programs=r.programs,M.capabilities=r0,M.extensions=a0,M.properties=S,M.renderLists=y0,M.shadowMap=C0,M.state=B,M.info=k}if($0(),R!==T9)V=new wq(R,Q.width,Q.height,X,Z,K);let E0=new iX(M,T);this.xr=E0,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let z=a0.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=a0.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return V0},this.setPixelRatio=function(z){if(z===void 0)return;V0=z,this.setSize(a,U0,!1)},this.getSize=function(z){return z.set(a,U0)},this.setSize=function(z,f,d=!0){if(E0.isPresenting){m0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(a=z,U0=f,Q.width=Math.floor(z*V0),Q.height=Math.floor(f*V0),d===!0)Q.style.width=z+"px",Q.style.height=f+"px";if(V!==null)V.setSize(Q.width,Q.height);this.setViewport(0,0,z,f)},this.getDrawingBufferSize=function(z){return z.set(a*V0,U0*V0).floor()},this.setDrawingBufferSize=function(z,f,d){a=z,U0=f,V0=d,Q.width=Math.floor(z*d),Q.height=Math.floor(f*d),this.setViewport(0,0,z,f)},this.setEffects=function(z){if(R===T9){p0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let f=0;f<z.length;f++)if(z[f].isOutputPass===!0){m0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(Y0)},this.getViewport=function(z){return z.copy(JJ)},this.setViewport=function(z,f,d,b){if(z.isVector4)JJ.set(z.x,z.y,z.z,z.w);else JJ.set(z,f,d,b);B.viewport(Y0.copy(JJ).multiplyScalar(V0).round())},this.getScissor=function(z){return z.copy(l0)},this.setScissor=function(z,f,d,b){if(z.isVector4)l0.set(z.x,z.y,z.z,z.w);else l0.set(z,f,d,b);B.scissor(w0.copy(l0).multiplyScalar(V0).round())},this.getScissorTest=function(){return u0},this.setScissorTest=function(z){B.setScissorTest(u0=z)},this.setOpaqueSort=function(z){N0=z},this.setTransparentSort=function(z){b0=z},this.getClearColor=function(z){return z.copy(S0.getClearColor())},this.setClearColor=function(){S0.setClearColor(...arguments)},this.getClearAlpha=function(){return S0.getClearAlpha()},this.setClearAlpha=function(){S0.setClearAlpha(...arguments)},this.clear=function(z=!0,f=!0,d=!0){let b=0;if(z){let y=!1;if(g!==null){let z0=g.texture.format;y=I.has(z0)}if(y){let z0=g.texture.type,_0=O.has(z0),R0=S0.getClearColor(),j0=S0.getClearAlpha(),T0=R0.r,i0=R0.g,v0=R0.b;if(_0)E[0]=T0,E[1]=i0,E[2]=v0,E[3]=j0,T.clearBufferuiv(T.COLOR,0,E);else C[0]=T0,C[1]=i0,C[2]=v0,C[3]=j0,T.clearBufferiv(T.COLOR,0,C)}else b|=T.COLOR_BUFFER_BIT}if(f)b|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(d)b|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)T.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),D=z},this.dispose=function(){Q.removeEventListener("webglcontextlost",s0,!1),Q.removeEventListener("webglcontextrestored",NJ,!1),Q.removeEventListener("webglcontextcreationerror",EJ,!1),S0.dispose(),y0.dispose(),H0.dispose(),S.dispose(),Q0.dispose(),c.dispose(),F0.dispose(),I0.dispose(),r.dispose(),E0.dispose(),E0.removeEventListener("sessionstart",y7),E0.removeEventListener("sessionend",i8),d9.stop()};function s0(z){z.preventDefault(),MZ("WebGLRenderer: Context Lost."),m=!0}function NJ(){MZ("WebGLRenderer: Context Restored."),m=!1;let z=k.autoReset,f=C0.enabled,d=C0.autoUpdate,b=C0.needsUpdate,y=C0.type;$0(),k.autoReset=z,C0.enabled=f,C0.autoUpdate=d,C0.needsUpdate=b,C0.type=y}function EJ(z){p0("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Q9(z){let f=z.target;f.removeEventListener("dispose",Q9),q9(f)}function q9(z){I6(z),S.remove(z)}function I6(z){let f=S.get(z).programs;if(f!==void 0){if(f.forEach(function(d){r.releaseProgram(d)}),z.isShaderMaterial)r.releaseShaderCache(z)}}this.renderBufferDirect=function(z,f,d,b,y,z0){if(f===null)f=h0;let _0=y.isMesh&&y.matrixWorld.determinantAffine()<0,R0=P6(z,f,d,b,y);B.setMaterial(b,_0);let j0=d.index,T0=1;if(b.wireframe===!0){if(j0=O0.getWireframeAttribute(d),j0===void 0)return;T0=2}let i0=d.drawRange,v0=d.attributes.position,x0=i0.start*T0,UJ=(i0.start+i0.count)*T0;if(z0!==null)x0=Math.max(x0,z0.start*T0),UJ=Math.min(UJ,(z0.start+z0.count)*T0);if(j0!==null)x0=Math.max(x0,0),UJ=Math.min(UJ,j0.count);else if(v0!==void 0&&v0!==null)x0=Math.max(x0,0),UJ=Math.min(UJ,v0.count);let RJ=UJ-x0;if(RJ<0||RJ===1/0)return;F0.setup(y,b,R0,d,j0);let LJ,$J=v;if(j0!==null)LJ=X0.get(j0),$J=G0,$J.setIndex(LJ);if(y.isMesh)if(b.wireframe===!0)B.setLineWidth(b.wireframeLinewidth*c0()),$J.setMode(T.LINES);else $J.setMode(T.TRIANGLES);else if(y.isLine){let jJ=b.linewidth;if(jJ===void 0)jJ=1;if(B.setLineWidth(jJ*c0()),y.isLineSegments)$J.setMode(T.LINES);else if(y.isLineLoop)$J.setMode(T.LINE_LOOP);else $J.setMode(T.LINE_STRIP)}else if(y.isPoints)$J.setMode(T.POINTS);else if(y.isSprite)$J.setMode(T.TRIANGLES);if(y.isBatchedMesh)if(!a0.get("WEBGL_multi_draw")){let{_multiDrawStarts:jJ,_multiDrawCounts:A0,_multiDrawCount:uJ}=y,XJ=j0?X0.get(j0).bytesPerElement:1,cJ=S.get(b).currentProgram.getUniforms();for(let Z9=0;Z9<uJ;Z9++)cJ.setValue(T,"_gl_DrawID",Z9),$J.render(jJ[Z9]/XJ,A0[Z9])}else $J.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)$J.renderInstances(x0,RJ,y.count);else if(d.isInstancedBufferGeometry){let jJ=d._maxInstanceCount!==void 0?d._maxInstanceCount:1/0,A0=Math.min(d.instanceCount,jJ);$J.renderInstances(x0,RJ,A0)}else $J.render(x0,RJ)};function v7(z,f,d){if(z.transparent===!0&&z.side===b9&&z.forceSinglePass===!1)z.side=aJ,z.needsUpdate=!0,u9(z,f,d),z.side=V7,z.needsUpdate=!0,u9(z,f,d),z.side=b9;else u9(z,f,d)}this.compile=function(z,f,d=null){if(d===null)d=z;if(A=H0.get(d),A.init(f),_.push(A),d.traverseVisible(function(y){if(y.isLight&&y.layers.test(f.layers)){if(A.pushLight(y),y.castShadow)A.pushShadow(y)}}),z!==d)z.traverseVisible(function(y){if(y.isLight&&y.layers.test(f.layers)){if(A.pushLight(y),y.castShadow)A.pushShadow(y)}});A.setupLights();let b=new Set;return z.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let z0=y.material;if(z0)if(Array.isArray(z0))for(let _0=0;_0<z0.length;_0++){let R0=z0[_0];v7(R0,d,y),b.add(R0)}else v7(z0,d,y),b.add(z0)}),A=_.pop(),b},this.compileAsync=function(z,f,d=null){let b=this.compile(z,f,d);return new Promise((y)=>{function z0(){if(b.forEach(function(_0){if(S.get(_0).currentProgram.isReady())b.delete(_0)}),b.size===0){y(z);return}setTimeout(z0,10)}if(a0.get("KHR_parallel_shader_compile")!==null)z0();else setTimeout(z0,10)})};let B8=null;function f7(z){if(B8)B8(z)}function y7(){d9.stop()}function i8(){d9.start()}let d9=new bX;if(d9.setAnimationLoop(f7),typeof self<"u")d9.setContext(self);this.setAnimationLoop=function(z){B8=z,E0.setAnimationLoop(z),z===null?d9.stop():d9.start()},E0.addEventListener("sessionstart",y7),E0.addEventListener("sessionend",i8),this.render=function(z,f){if(f!==void 0&&f.isCamera!==!0){p0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;if(D!==null)D.renderStart(z,f);let d=E0.enabled===!0&&E0.isPresenting===!0,b=V!==null&&(g===null||d)&&V.begin(M,g);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(E0.enabled===!0&&E0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(E0.cameraAutoUpdate===!0)E0.updateCamera(f);f=E0.getCamera()}if(z.isScene===!0)z.onBeforeRender(M,z,f,g);if(A=H0.get(z,_.length),A.init(f),A.state.textureUnits=l.getTextureUnits(),_.push(A),L0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),t.setFromProjectionMatrix(L0,BZ,f.reversedDepth),J0=this.localClippingEnabled,Z0=W0.init(this.clippingPlanes,J0),L=y0.get(z,w.length),L.init(),w.push(L),E0.enabled===!0&&E0.isPresenting===!0){let _0=M.xr.getDepthSensingMesh();if(_0!==null)M8(_0,f,-1/0,M.sortObjects)}if(M8(z,f,0,M.sortObjects),L.finish(),M.sortObjects===!0)L.sort(N0,b0,f.reversedDepth);if(n0=E0.enabled===!1||E0.isPresenting===!1||E0.hasDepthSensing()===!1,n0)S0.addToRenderList(L,z);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Z0===!0)W0.beginShadows();let y=A.state.shadowsArray;if(C0.render(y,z,f),Z0===!0)W0.endShadows();if((b&&V.hasRenderPass())===!1){let{opaque:_0,transmissive:R0}=L;if(A.setupLights(),f.isArrayCamera){let j0=f.cameras;if(R0.length>0)for(let T0=0,i0=j0.length;T0<i0;T0++){let v0=j0[T0];o8(_0,R0,z,v0)}if(n0)S0.render(z);for(let T0=0,i0=j0.length;T0<i0;T0++){let v0=j0[T0];A6(L,z,v0,v0.viewport)}}else{if(R0.length>0)o8(_0,R0,z,f);if(n0)S0.render(z);A6(L,z,f)}}if(g!==null&&n===0)l.updateMultisampleRenderTarget(g),l.updateRenderTargetMipmap(g);if(b)V.end(M);if(z.isScene===!0)z.onAfterRender(M,z,f);if(F0.resetDefaultState(),e=-1,K0=null,_.pop(),_.length>0){if(A=_[_.length-1],l.setTextureUnits(A.state.textureUnits),Z0===!0)W0.setGlobalState(M.clippingPlanes,A.state.camera)}else A=null;if(w.pop(),w.length>0)L=w[w.length-1];else L=null;if(D!==null)D.renderEnd()};function M8(z,f,d,b){if(z.visible===!1)return;if(z.layers.test(f.layers)){if(z.isGroup)d=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(f)}else if(z.isLightProbeGrid)A.pushLightProbeGrid(z);else if(z.isLight){if(A.pushLight(z),z.castShadow)A.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||t.intersectsSprite(z)){if(b)f0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(L0);let _0=c.update(z),R0=z.material;if(R0.visible)L.push(z,_0,R0,d,f0.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||t.intersectsObject(z)){let _0=c.update(z),R0=z.material;if(b){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();f0.copy(z.boundingSphere.center)}else{if(_0.boundingSphere===null)_0.computeBoundingSphere();f0.copy(_0.boundingSphere.center)}f0.applyMatrix4(z.matrixWorld).applyMatrix4(L0)}if(Array.isArray(R0)){let j0=_0.groups;for(let T0=0,i0=j0.length;T0<i0;T0++){let v0=j0[T0],x0=R0[v0.materialIndex];if(x0&&x0.visible)L.push(z,_0,x0,d,f0.z,v0)}}else if(R0.visible)L.push(z,_0,R0,d,f0.z,null)}}}let z0=z.children;for(let _0=0,R0=z0.length;_0<R0;_0++)M8(z0[_0],f,d,b)}function A6(z,f,d,b){let{opaque:y,transmissive:z0,transparent:_0}=z;if(A.setupLightsView(d),Z0===!0)W0.setGlobalState(M.clippingPlanes,d);if(b)B.viewport(Y0.copy(b));if(y.length>0)Y8(y,f,d);if(z0.length>0)Y8(z0,f,d);if(_0.length>0)Y8(_0,f,d);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function o8(z,f,d,b){if((d.isScene===!0?d.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[b.id]===void 0){let x0=a0.has("EXT_color_buffer_half_float")||a0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[b.id]=new D9(1,1,{generateMipmaps:!0,type:x0?Q8:T9,minFilter:e9,samples:Math.max(4,r0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:WJ.workingColorSpace})}let z0=A.state.transmissionRenderTarget[b.id],_0=b.viewport||Y0;z0.setSize(_0.z*M.transmissionResolutionScale,_0.w*M.transmissionResolutionScale);let R0=M.getRenderTarget(),j0=M.getActiveCubeFace(),T0=M.getActiveMipmapLevel();if(M.setRenderTarget(z0),M.getClearColor(qJ),YJ=M.getClearAlpha(),YJ<1)M.setClearColor(16777215,0.5);if(M.clear(),n0)S0.render(d);let i0=M.toneMapping;M.toneMapping=C9;let v0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(A.setupLightsView(b),Z0===!0)W0.setGlobalState(M.clippingPlanes,b);if(Y8(z,d,b),l.updateMultisampleRenderTarget(z0),l.updateRenderTargetMipmap(z0),a0.has("WEBGL_multisampled_render_to_texture")===!1){let x0=!1;for(let UJ=0,RJ=f.length;UJ<RJ;UJ++){let LJ=f[UJ],{object:$J,geometry:jJ,material:A0,group:uJ}=LJ;if(A0.side===b9&&$J.layers.test(b.layers)){let XJ=A0.side;A0.side=aJ,A0.needsUpdate=!0,I8($J,d,b,jJ,A0,uJ),A0.side=XJ,A0.needsUpdate=!0,x0=!0}}if(x0===!0)l.updateMultisampleRenderTarget(z0),l.updateRenderTargetMipmap(z0)}if(M.setRenderTarget(R0,j0,T0),M.setClearColor(qJ,YJ),v0!==void 0)b.viewport=v0;M.toneMapping=i0}function Y8(z,f,d){let b=f.isScene===!0?f.overrideMaterial:null;for(let y=0,z0=z.length;y<z0;y++){let _0=z[y],{object:R0,geometry:j0,group:T0}=_0,i0=_0.material;if(i0.allowOverride===!0&&b!==null)i0=b;if(R0.layers.test(d.layers))I8(R0,f,d,j0,i0,T0)}}function I8(z,f,d,b,y,z0){if(z.onBeforeRender(M,f,d,b,y,z0),z.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),y.onBeforeRender(M,f,d,b,z,z0),y.transparent===!0&&y.side===b9&&y.forceSinglePass===!1)y.side=aJ,y.needsUpdate=!0,M.renderBufferDirect(d,f,b,y,z,z0),y.side=V7,y.needsUpdate=!0,M.renderBufferDirect(d,f,b,y,z,z0),y.side=b9;else M.renderBufferDirect(d,f,b,y,z,z0);z.onAfterRender(M,f,d,b,y,z0)}function u9(z,f,d){if(f.isScene!==!0)f=h0;let b=S.get(z),y=A.state.lights,z0=A.state.shadowsArray,_0=y.state.version,R0=r.getParameters(z,y.state,z0,f,d,A.state.lightProbeGridArray),j0=r.getProgramCacheKey(R0),T0=b.programs;b.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?f.environment:null,b.fog=f.fog;let i0=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(b.envMap=Q0.get(z.envMap||b.environment,i0),b.envMapRotation=b.environment!==null&&z.envMap===null?f.environmentRotation:z.envMapRotation,T0===void 0)z.addEventListener("dispose",Q9),T0=new Map,b.programs=T0;let v0=T0.get(j0);if(v0!==void 0){if(b.currentProgram===v0&&b.lightsStateVersion===_0)return U8(z,R0),v0}else{if(R0.uniforms=r.getUniforms(z),D!==null&&z.isNodeMaterial)D.build(z,d,R0);z.onBeforeCompile(R0,M),v0=r.acquireProgram(R0,j0),T0.set(j0,v0),b.uniforms=R0.uniforms}let x0=b.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)x0.clippingPlanes=W0.uniform;if(U8(z,R0),b.needsLights=x7(z),b.lightsStateVersion=_0,b.needsLights)x0.ambientLightColor.value=y.state.ambient,x0.lightProbe.value=y.state.probe,x0.directionalLights.value=y.state.directional,x0.directionalLightShadows.value=y.state.directionalShadow,x0.spotLights.value=y.state.spot,x0.spotLightShadows.value=y.state.spotShadow,x0.rectAreaLights.value=y.state.rectArea,x0.ltc_1.value=y.state.rectAreaLTC1,x0.ltc_2.value=y.state.rectAreaLTC2,x0.pointLights.value=y.state.point,x0.pointLightShadows.value=y.state.pointShadow,x0.hemisphereLights.value=y.state.hemi,x0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,x0.spotLightMatrix.value=y.state.spotLightMatrix,x0.spotLightMap.value=y.state.spotLightMap,x0.pointShadowMatrix.value=y.state.pointShadowMatrix;return b.lightProbeGrid=A.state.lightProbeGridArray.length>0,b.currentProgram=v0,b.uniformsList=null,v0}function A8(z){if(z.uniformsList===null){let f=z.currentProgram.getUniforms();z.uniformsList=R6.seqWithValue(f.seq,z.uniforms)}return z.uniformsList}function U8(z,f){let d=S.get(z);d.outputColorSpace=f.outputColorSpace,d.batching=f.batching,d.batchingColor=f.batchingColor,d.instancing=f.instancing,d.instancingColor=f.instancingColor,d.instancingMorph=f.instancingMorph,d.skinning=f.skinning,d.morphTargets=f.morphTargets,d.morphNormals=f.morphNormals,d.morphColors=f.morphColors,d.morphTargetsCount=f.morphTargetsCount,d.numClippingPlanes=f.numClippingPlanes,d.numIntersection=f.numClipIntersection,d.vertexAlphas=f.vertexAlphas,d.vertexTangents=f.vertexTangents,d.toneMapping=f.toneMapping}function b7(z,f){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;P.setFromMatrixPosition(f.matrixWorld);for(let d=0,b=z.length;d<b;d++){let y=z[d];if(y.texture!==null&&y.boundingBox.containsPoint(P))return y}return null}function P6(z,f,d,b,y){if(f.isScene!==!0)f=h0;l.resetTextureUnits();let z0=f.fog,_0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?f.environment:null,R0=g===null?M.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:WJ.workingColorSpace,j0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,T0=Q0.get(b.envMap||_0,j0),i0=b.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,v0=!!d.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),x0=!!d.morphAttributes.position,UJ=!!d.morphAttributes.normal,RJ=!!d.morphAttributes.color,LJ=C9;if(b.toneMapped){if(g===null||g.isXRRenderTarget===!0)LJ=M.toneMapping}let $J=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,jJ=$J!==void 0?$J.length:0,A0=S.get(b),uJ=A.state.lights;if(Z0===!0){if(J0===!0||z!==K0){let HJ=z===K0&&b.id===e;W0.setState(b,z,HJ)}}let XJ=!1;if(b.version===A0.__version){if(A0.needsLights&&A0.lightsStateVersion!==uJ.state.version)XJ=!0;else if(A0.outputColorSpace!==R0)XJ=!0;else if(y.isBatchedMesh&&A0.batching===!1)XJ=!0;else if(!y.isBatchedMesh&&A0.batching===!0)XJ=!0;else if(y.isBatchedMesh&&A0.batchingColor===!0&&y.colorTexture===null)XJ=!0;else if(y.isBatchedMesh&&A0.batchingColor===!1&&y.colorTexture!==null)XJ=!0;else if(y.isInstancedMesh&&A0.instancing===!1)XJ=!0;else if(!y.isInstancedMesh&&A0.instancing===!0)XJ=!0;else if(y.isSkinnedMesh&&A0.skinning===!1)XJ=!0;else if(!y.isSkinnedMesh&&A0.skinning===!0)XJ=!0;else if(y.isInstancedMesh&&A0.instancingColor===!0&&y.instanceColor===null)XJ=!0;else if(y.isInstancedMesh&&A0.instancingColor===!1&&y.instanceColor!==null)XJ=!0;else if(y.isInstancedMesh&&A0.instancingMorph===!0&&y.morphTexture===null)XJ=!0;else if(y.isInstancedMesh&&A0.instancingMorph===!1&&y.morphTexture!==null)XJ=!0;else if(A0.envMap!==T0)XJ=!0;else if(b.fog===!0&&A0.fog!==z0)XJ=!0;else if(A0.numClippingPlanes!==void 0&&(A0.numClippingPlanes!==W0.numPlanes||A0.numIntersection!==W0.numIntersection))XJ=!0;else if(A0.vertexAlphas!==i0)XJ=!0;else if(A0.vertexTangents!==v0)XJ=!0;else if(A0.morphTargets!==x0)XJ=!0;else if(A0.morphNormals!==UJ)XJ=!0;else if(A0.morphColors!==RJ)XJ=!0;else if(A0.toneMapping!==LJ)XJ=!0;else if(A0.morphTargetsCount!==jJ)XJ=!0;else if(!!A0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)XJ=!0}else XJ=!0,A0.__version=b.version;let cJ=A0.currentProgram;if(XJ===!0){if(cJ=u9(b,f,y),D&&b.isNodeMaterial)D.onUpdateProgram(b,cJ,A0)}let Z9=!1,N9=!1,c9=!1,OJ=cJ.getUniforms(),zJ=A0.uniforms;if(B.useProgram(cJ.program))Z9=!0,N9=!0,c9=!0;if(b.id!==e)e=b.id,N9=!0;if(A0.needsLights){let HJ=b7(A.state.lightProbeGridArray,y);if(A0.lightProbeGrid!==HJ)A0.lightProbeGrid=HJ,N9=!0}if(Z9||K0!==z){if(B.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();OJ.setValue(T,"projectionMatrix",z.projectionMatrix),OJ.setValue(T,"viewMatrix",z.matrixWorldInverse);let I9=OJ.map.cameraPosition;if(I9!==void 0)I9.setValue(T,P0.setFromMatrixPosition(z.matrixWorld));if(r0.logarithmicDepthBuffer)OJ.setValue(T,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)OJ.setValue(T,"isOrthographic",z.isOrthographicCamera===!0);if(K0!==z)K0=z,N9=!0,c9=!0}if(A0.needsLights){if(uJ.state.directionalShadowMap.length>0)OJ.setValue(T,"directionalShadowMap",uJ.state.directionalShadowMap,l);if(uJ.state.spotShadowMap.length>0)OJ.setValue(T,"spotShadowMap",uJ.state.spotShadowMap,l);if(uJ.state.pointShadowMap.length>0)OJ.setValue(T,"pointShadowMap",uJ.state.pointShadowMap,l)}if(y.isSkinnedMesh){OJ.setOptional(T,y,"bindMatrix"),OJ.setOptional(T,y,"bindMatrixInverse");let HJ=y.skeleton;if(HJ){if(HJ.boneTexture===null)HJ.computeBoneTexture();OJ.setValue(T,"boneTexture",HJ.boneTexture,l)}}if(y.isBatchedMesh){if(OJ.setOptional(T,y,"batchingTexture"),OJ.setValue(T,"batchingTexture",y._matricesTexture,l),OJ.setOptional(T,y,"batchingIdTexture"),OJ.setValue(T,"batchingIdTexture",y._indirectTexture,l),OJ.setOptional(T,y,"batchingColorTexture"),y._colorsTexture!==null)OJ.setValue(T,"batchingColorTexture",y._colorsTexture,l)}let M9=d.morphAttributes;if(M9.position!==void 0||M9.normal!==void 0||M9.color!==void 0)d0.update(y,d,cJ);if(N9||A0.receiveShadow!==y.receiveShadow)A0.receiveShadow=y.receiveShadow,OJ.setValue(T,"receiveShadow",y.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&f.environment!==null)zJ.envMapIntensity.value=f.environmentIntensity;if(zJ.dfgLUT!==void 0)zJ.dfgLUT.value=FN();if(N9){if(OJ.setValue(T,"toneMappingExposure",M.toneMappingExposure),A0.needsLights)h7(zJ,c9);if(z0&&b.fog===!0)M0.refreshFogUniforms(zJ,z0);if(M0.refreshMaterialUniforms(zJ,b,V0,U0,A.state.transmissionRenderTarget[z.id]),A0.needsLights&&A0.lightProbeGrid){let HJ=A0.lightProbeGrid;zJ.probesSH.value=HJ.texture,zJ.probesMin.value.copy(HJ.boundingBox.min),zJ.probesMax.value.copy(HJ.boundingBox.max),zJ.probesResolution.value.copy(HJ.resolution)}R6.upload(T,A8(A0),zJ,l)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)R6.upload(T,A8(A0),zJ,l),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)OJ.setValue(T,"center",y.center);if(OJ.setValue(T,"modelViewMatrix",y.modelViewMatrix),OJ.setValue(T,"normalMatrix",y.normalMatrix),OJ.setValue(T,"modelMatrix",y.matrixWorld),b.uniformsGroups!==void 0){let HJ=b.uniformsGroups;for(let I9=0,f9=HJ.length;I9<f9;I9++){let a8=HJ[I9];I0.update(a8,cJ),I0.bind(a8,cJ)}}return cJ}function h7(z,f){z.ambientLightColor.needsUpdate=f,z.lightProbe.needsUpdate=f,z.directionalLights.needsUpdate=f,z.directionalLightShadows.needsUpdate=f,z.pointLights.needsUpdate=f,z.pointLightShadows.needsUpdate=f,z.spotLights.needsUpdate=f,z.spotLightShadows.needsUpdate=f,z.rectAreaLights.needsUpdate=f,z.hemisphereLights.needsUpdate=f}function x7(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(z,f,d){let b=S.get(z);if(b.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;S.get(z.texture).__webglTexture=f,S.get(z.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:d,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,f){let d=S.get(z);d.__webglFramebuffer=f,d.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(z,f=0,d=0){g=z,u=f,n=d;let b=null,y=!1,z0=!1;if(z){let R0=S.get(z);if(R0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(T.FRAMEBUFFER,R0.__webglFramebuffer),Y0.copy(z.viewport),w0.copy(z.scissor),k0=z.scissorTest,B.viewport(Y0),B.scissor(w0),B.setScissorTest(k0),e=-1;return}else if(R0.__webglFramebuffer===void 0)l.setupRenderTarget(z);else if(R0.__hasExternalTextures)l.rebindTextures(z,S.get(z.texture).__webglTexture,S.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let i0=z.depthTexture;if(R0.__boundDepthTexture!==i0){if(i0!==null&&S.has(i0)&&(z.width!==i0.image.width||z.height!==i0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(z)}}let j0=z.texture;if(j0.isData3DTexture||j0.isDataArrayTexture||j0.isCompressedArrayTexture)z0=!0;let T0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(T0[f]))b=T0[f][d];else b=T0[f];y=!0}else if(z.samples>0&&l.useMultisampledRTT(z)===!1)b=S.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(T0))b=T0[d];else b=T0;Y0.copy(z.viewport),w0.copy(z.scissor),k0=z.scissorTest}else Y0.copy(JJ).multiplyScalar(V0).floor(),w0.copy(l0).multiplyScalar(V0).floor(),k0=u0;if(d!==0)b=p;if(B.bindFramebuffer(T.FRAMEBUFFER,b))B.drawBuffers(z,b);if(B.viewport(Y0),B.scissor(w0),B.setScissorTest(k0),y){let R0=S.get(z.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+f,R0.__webglTexture,d)}else if(z0){let R0=f;for(let j0=0;j0<z.textures.length;j0++){let T0=S.get(z.textures[j0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+j0,T0.__webglTexture,d,R0)}}else if(z!==null&&d!==0){let R0=S.get(z.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,R0.__webglTexture,d)}e=-1},this.readRenderTargetPixels=function(z,f,d,b,y,z0,_0,R0=0){if(!(z&&z.isWebGLRenderTarget)){p0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let j0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&_0!==void 0)j0=j0[_0];if(j0){B.bindFramebuffer(T.FRAMEBUFFER,j0);try{let T0=z.textures[R0],i0=T0.format,v0=T0.type;if(z.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+R0);if(!r0.textureFormatReadable(i0)){p0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!r0.textureTypeReadable(v0)){p0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=z.width-b&&(d>=0&&d<=z.height-y))T.readPixels(f,d,b,y,i.convert(i0),i.convert(v0),z0)}finally{let T0=g!==null?S.get(g).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,T0)}}},this.readRenderTargetPixelsAsync=async function(z,f,d,b,y,z0,_0,R0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let j0=S.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&_0!==void 0)j0=j0[_0];if(j0)if(f>=0&&f<=z.width-b&&(d>=0&&d<=z.height-y)){B.bindFramebuffer(T.FRAMEBUFFER,j0);let T0=z.textures[R0],i0=T0.format,v0=T0.type;if(z.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+R0);if(!r0.textureFormatReadable(i0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!r0.textureTypeReadable(v0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let x0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,x0),T.bufferData(T.PIXEL_PACK_BUFFER,z0.byteLength,T.STREAM_READ),T.readPixels(f,d,b,y,i.convert(i0),i.convert(v0),0);let UJ=g!==null?S.get(g).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,UJ);let RJ=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await QX(T,RJ,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,x0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,z0),T.deleteBuffer(x0),T.deleteSync(RJ),z0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,f=null,d=0){let b=Math.pow(2,-d),y=Math.floor(z.image.width*b),z0=Math.floor(z.image.height*b),_0=f!==null?f.x:0,R0=f!==null?f.y:0;l.setTexture2D(z,0),T.copyTexSubImage2D(T.TEXTURE_2D,d,0,0,_0,R0,y,z0),B.unbindTexture()},this.copyTextureToTexture=function(z,f,d=null,b=null,y=0,z0=0){let _0,R0,j0,T0,i0,v0,x0,UJ,RJ,LJ=z.isCompressedTexture?z.mipmaps[z0]:z.image;if(d!==null)_0=d.max.x-d.min.x,R0=d.max.y-d.min.y,j0=d.isBox3?d.max.z-d.min.z:1,T0=d.min.x,i0=d.min.y,v0=d.isBox3?d.min.z:0;else{let zJ=Math.pow(2,-y);if(_0=Math.floor(LJ.width*zJ),R0=Math.floor(LJ.height*zJ),z.isDataArrayTexture)j0=LJ.depth;else if(z.isData3DTexture)j0=Math.floor(LJ.depth*zJ);else j0=1;T0=0,i0=0,v0=0}if(b!==null)x0=b.x,UJ=b.y,RJ=b.z;else x0=0,UJ=0,RJ=0;let $J=i.convert(f.format),jJ=i.convert(f.type),A0;if(f.isData3DTexture)l.setTexture3D(f,0),A0=T.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)l.setTexture2DArray(f,0),A0=T.TEXTURE_2D_ARRAY;else l.setTexture2D(f,0),A0=T.TEXTURE_2D;B.activeTexture(T.TEXTURE0),B.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,f.flipY),B.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),B.pixelStorei(T.UNPACK_ALIGNMENT,f.unpackAlignment);let uJ=B.getParameter(T.UNPACK_ROW_LENGTH),XJ=B.getParameter(T.UNPACK_IMAGE_HEIGHT),cJ=B.getParameter(T.UNPACK_SKIP_PIXELS),Z9=B.getParameter(T.UNPACK_SKIP_ROWS),N9=B.getParameter(T.UNPACK_SKIP_IMAGES);B.pixelStorei(T.UNPACK_ROW_LENGTH,LJ.width),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,LJ.height),B.pixelStorei(T.UNPACK_SKIP_PIXELS,T0),B.pixelStorei(T.UNPACK_SKIP_ROWS,i0),B.pixelStorei(T.UNPACK_SKIP_IMAGES,v0);let c9=z.isDataArrayTexture||z.isData3DTexture,OJ=f.isDataArrayTexture||f.isData3DTexture;if(z.isDepthTexture){let zJ=S.get(z),M9=S.get(f),HJ=S.get(zJ.__renderTarget),I9=S.get(M9.__renderTarget);B.bindFramebuffer(T.READ_FRAMEBUFFER,HJ.__webglFramebuffer),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,I9.__webglFramebuffer);for(let f9=0;f9<j0;f9++){if(c9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(z).__webglTexture,y,v0+f9),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(f).__webglTexture,z0,RJ+f9);T.blitFramebuffer(T0,i0,_0,R0,x0,UJ,_0,R0,T.DEPTH_BUFFER_BIT,T.NEAREST)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(y!==0||z.isRenderTargetTexture||S.has(z)){let zJ=S.get(z),M9=S.get(f);B.bindFramebuffer(T.READ_FRAMEBUFFER,o),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,x);for(let HJ=0;HJ<j0;HJ++){if(c9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,zJ.__webglTexture,y,v0+HJ);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,zJ.__webglTexture,y);if(OJ)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,M9.__webglTexture,z0,RJ+HJ);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,M9.__webglTexture,z0);if(y!==0)T.blitFramebuffer(T0,i0,_0,R0,x0,UJ,_0,R0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(OJ)T.copyTexSubImage3D(A0,z0,x0,UJ,RJ+HJ,T0,i0,_0,R0);else T.copyTexSubImage2D(A0,z0,x0,UJ,T0,i0,_0,R0)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(OJ)if(z.isDataTexture||z.isData3DTexture)T.texSubImage3D(A0,z0,x0,UJ,RJ,_0,R0,j0,$J,jJ,LJ.data);else if(f.isCompressedArrayTexture)T.compressedTexSubImage3D(A0,z0,x0,UJ,RJ,_0,R0,j0,$J,LJ.data);else T.texSubImage3D(A0,z0,x0,UJ,RJ,_0,R0,j0,$J,jJ,LJ);else if(z.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,z0,x0,UJ,_0,R0,$J,jJ,LJ.data);else if(z.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,z0,x0,UJ,LJ.width,LJ.height,$J,LJ.data);else T.texSubImage2D(T.TEXTURE_2D,z0,x0,UJ,_0,R0,$J,jJ,LJ);if(B.pixelStorei(T.UNPACK_ROW_LENGTH,uJ),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,XJ),B.pixelStorei(T.UNPACK_SKIP_PIXELS,cJ),B.pixelStorei(T.UNPACK_SKIP_ROWS,Z9),B.pixelStorei(T.UNPACK_SKIP_IMAGES,N9),z0===0&&f.generateMipmaps)T.generateMipmap(A0);B.unbindTexture()},this.initRenderTarget=function(z){if(S.get(z).__webglFramebuffer===void 0)l.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)l.setTextureCube(z,0);else if(z.isData3DTexture)l.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)l.setTexture2DArray(z,0);else l.setTexture2D(z,0);B.unbindTexture()},this.resetState=function(){u=0,n=0,g=null,B.reset(),F0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return BZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=WJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=WJ._getUnpackColorSpace()}}var L6=new j;function z9(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),U=Math.PI/4;L6.copy(Q),L6[Z]=0,L6.normalize();let H=0.5*X/(X+Y),N=1-L6.angleTo(J)/U;if(Math.sign(L6[$])===1)return N*H;else return Y/(X+Y)+H+H*(1-N)}class l9 extends AJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new j,U=new j,H=new j(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,G=this.attributes.normal.array,q=this.attributes.uv.array,F=N.length/6,R=new j,I=0.5/W;for(let O=0,E=0;O<N.length;O+=3,E+=2)switch(Y.fromArray(N,O),U.copy(Y),U.x-=Math.sign(U.x)*I,U.y-=Math.sign(U.y)*I,U.z-=Math.sign(U.z)*I,U.normalize(),N[O+0]=H.x*Math.sign(Y.x)+U.x*K,N[O+1]=H.y*Math.sign(Y.y)+U.y*K,N[O+2]=H.z*Math.sign(Y.z)+U.z*K,G[O+0]=U.x,G[O+1]=U.y,G[O+2]=U.z,Math.floor(O/F)){case 0:R.set(1,0,0),q[E+0]=z9(R,U,"z","y",K,$),q[E+1]=1-z9(R,U,"y","z",K,Q);break;case 1:R.set(-1,0,0),q[E+0]=1-z9(R,U,"z","y",K,$),q[E+1]=1-z9(R,U,"y","z",K,Q);break;case 2:R.set(0,1,0),q[E+0]=1-z9(R,U,"x","z",K,J),q[E+1]=z9(R,U,"z","x",K,$);break;case 3:R.set(0,-1,0),q[E+0]=1-z9(R,U,"x","z",K,J),q[E+1]=1-z9(R,U,"z","x",K,$);break;case 4:R.set(0,0,1),q[E+0]=1-z9(R,U,"x","y",K,J),q[E+1]=1-z9(R,U,"y","x",K,Q);break;case 5:R.set(0,0,-1),q[E+0]=z9(R,U,"x","y",K,J),q[E+1]=1-z9(R,U,"y","x",K,Q);break}}static fromJSON(J){return new l9(J.width,J.height,J.depth,J.segments,J.radius)}}class GK extends I7{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new AJ;J.deleteAttribute("uv");let Q=new mJ({side:aJ}),$=new mJ,Z=new yQ(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new g0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new A7(J,$,6),X=new TJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new g0(J,C7(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let U=new g0(J,C7(50));U.position.set(-16.109,18.021,-8.207),U.scale.set(0.1,2.425,2.751),this.add(U);let H=new g0(J,C7(17));H.position.set(14.904,12.198,-1.832),H.scale.set(0.15,4.265,6.331),this.add(H);let N=new g0(J,C7(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let G=new g0(J,C7(20));G.position.set(3.235,11.486,-12.541),G.scale.set(2.5,2,0.1),this.add(G);let q=new g0(J,C7(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function C7(J){return new TQ({color:0,emissive:16777215,emissiveIntensity:J})}var c8=653429,PJ="#09F875",FJ="rgba(9,248,117,0.55)",z6="rgba(9,248,117,0.28)",ON="#0A0A0A",EK="#070808";var hJ="#CFFFE2",j7="'SF Mono', ui-monospace, Menlo, Consolas, monospace",n8="'Space Grotesk', -apple-system, sans-serif",z8=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],v9=matchMedia("(prefers-reduced-motion: reduce)").matches,$Y="vc_sound",EN=2.6,DN=0.32,W8=(()=>{try{return localStorage.getItem($Y)!=="off"}catch{return!0}})();document.addEventListener("vc-sound-change",(J)=>{W8=!!(J&&J.detail)});var aX=null,X8=()=>aX=aX||new(window.AudioContext||window.webkitAudioContext);function eJ(J,Q,$,Z=0.045,K="triangle"){if(!W8)return;let W=X8(),X=W.createOscillator(),Y=W.createGain();if(W.state==="suspended")W.resume();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime(Math.min(DN,$*EN),Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var SJ={detent(J=0){try{let Q=X8();if(Q.state==="suspended")Q.resume();eJ(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=X8();eJ(420,J.currentTime+0.01,0.04,0.05),eJ(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=X8();eJ(120,J.currentTime+0.01,0.09,0.08,"sine"),eJ(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=X8();eJ(660,J.currentTime+0.02,0.05),eJ(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=X8();eJ(220,J.currentTime+0.02,0.05,0.07),eJ(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=X8();eJ(240,J.currentTime+0.01,0.05,0.05,"sine"),eJ(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class L8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var kN=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],mQ={w:240,h:254};function M6(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/mQ.w,Z/mQ.w),J.fillStyle=K;for(let X of kN)J.fill(X);J.restore()}var RN=[[5,8,12,7],[12,3,6,6],[1,6,3,3],[3,8,3,3]],VN=[[18,5,3,2]],FK=[[6,4,8,4]],LN=[[6,9,8,4]],OK=[[7,12,7,3]],B6=[15.2,4.6,1.6,1.6];class ZY{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?FK:OK}if(this.state==="happy")return Math.floor(J*8)%2?FK:OK;if(this.state==="droop")return OK;return Math.floor(J)%7===6?FK:LN}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),U=18*Z;if(X>0.01){let H=1+Math.sin(W*1.1)*0.012,N=15*Z*H;M6(J,Q+(24*Z-N)/2,$+U-N*(mQ.h/mQ.w),N,PJ,X)}if(Y>0.01){let H=this.state==="droop",N=this.state==="idle"&&Math.floor(W*2)%4===3?0.6:0;J.save(),J.globalAlpha=Y,J.fillStyle=PJ;let G=(q,F,R,I,O=0)=>{let E=Q+q*Z,C=$+(F+N-this.hopY/24)*Z;if(O>0)J.beginPath(),J.roundRect(E,C,R*Z,I*Z,O*Z),J.fill();else J.fillRect(E,C,R*Z,I*Z)};for(let[q,F,R,I]of RN){let O=H&&q>=12&&F<=4?F+2:F;G(q,O,R,I,Math.min(R,I)*0.42)}for(let[q,F,R,I]of VN)G(q,H?F+2:F,R,I,0.6);for(let[q,F,R,I]of this.wingCells(W))G(q,H?F+2:F,R,I,1.1);if(!this.blinking()){J.fillStyle=EK;let q=H?B6[1]+2:B6[1];J.fillRect(Q+B6[0]*Z,$+(q+N-this.hopY/24)*Z,B6[2]*Z,B6[3]*Z)}J.restore()}}}var B9=1024,K8=768;class KY{canvas=document.createElement("canvas");ctx;tex;vireo=new ZY;mode=0;lane="inference";meta=null;history=[];booted=v9;bootT=0;powered=v9;busy=!1;status="";chat=null;chatLog=[];chatScroll=0;chatMaxScroll=0;search=null;xprof=null;err=null;armed=null;tabRects=[];stepRan=0;drawRan=0;lastDrawAt=-1e9;crt=null;crtOverlay(){if(this.crt)return this.crt;let J=document.createElement("canvas");J.width=B9*1.5,J.height=K8*1.5;let Q=J.getContext("2d");Q.fillStyle="rgba(0,0,0,0.16)";for(let Z=0;Z<J.height;Z+=5)Q.fillRect(0,Z,J.width,2);let $=Q.createRadialGradient(J.width/2,J.height/2,J.height*0.34,J.width/2,J.height/2,J.height*0.92);return $.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(1,"rgba(0,6,3,0.42)"),Q.fillStyle=$,Q.fillRect(0,0,J.width,J.height),this.crt=J,J}dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=B9*1.5,this.canvas.height=K8*1.5,this.ctx=this.canvas.getContext("2d"),this.ctx.setTransform(1.5,0,0,1.5,0,0),this.tex=new g9(this.canvas),this.tex.colorSpace=S9,this.tex.generateMipmaps=!1,this.tex.minFilter=fJ}modeName(){return z8[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.powered?Math.floor(J*2):!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.powered,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.chatLog.length,this.chatScroll,this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(this.stepRan++,this.powered&&!this.booted){if(this.bootT+=J,this.bootT>2.1)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=v9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc=Math.max(0,this.acc+J);let $=!this.booted?0.05:0.1;if(this.acc>=$||Q-this.lastDrawAt>2){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey||Q-this.lastDrawAt>2)return this.lastKey=Z,this.lastDrawAt=Q,this.drawRan++,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=PJ,W=j7,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=EK,Q.fillRect(0,0,B9,K8),!this.powered){if(this.ctx.shadowColor=PJ,this.ctx.shadowBlur=8,this.text("NO CARD",B9/2-118,K8/2-64,52,PJ,n8,"700"),this.ctx.shadowBlur=0,Math.floor(J*2)%2===0)this.text("TAP THE CARTRIDGE TO START",B9/2-196,K8/2+22,24,FJ);this.compositeCrt();return}if(!this.booted){let Y=this.bootT,H=["VANTIS UNIFIED OPERATING SYSTEM","COPYRIGHT 2026 VANTIS.SH","WLT-01 WALLET TERMINAL","","MEMORY CHECK ............... OK","RAIL LINK .................. OK",`CARD ....................... ${this.meta?.handle?"@"+String(this.meta.handle).replace(/^@+/,"").toUpperCase():"…"}`,"LANES ...................... INF · DEV","","BOOT COMPLETE"],N=340,G=Math.floor(Y*340),q=96;this.ctx.shadowColor=PJ,this.ctx.shadowBlur=7;for(let F of H){if(G<=0)break;let R=F.slice(0,G);G-=F.length+6,this.text(R,72,q,24,PJ),q+=40}if(this.ctx.shadowBlur=0,Math.floor(J*3)%2===0)this.ctx.fillStyle=PJ,this.ctx.fillRect(72,q+4,15,26);this.compositeCrt();return}this.tabRects=[];let $=44;for(let Y=0;Y<z8.length;Y++){let U=Y===this.mode;Q.font=`600 22px ${j7}`;let H=Q.measureText(z8[Y]).width;if(U)Q.fillStyle=PJ,Q.beginPath(),Q.roundRect($-14,24,H+28,40,8),Q.fill();this.text(z8[Y],$,33,22,U?EK:FJ),this.tabRects.push({x:$-14,y:16,w:H+28,h:56,mode:Y}),$+=H+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${j7}`,this.text(`MAIN ${Z}`,B9-44-Q.measureText(`MAIN ${Z}`).width,33,22,hJ),Q.fillStyle=z6,Q.fillRect(44,80,B9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,FJ),this.wrap(this.err,52).slice(0,4).forEach((Y,U)=>this.text(Y,64,K+46+U*34,24,hJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=z6,Q.fillRect(44,K8-140,B9-88,2),this.vireo.draw(Q,52,K8-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${j7}`,this.text(X,B9-44-Q.measureText(X).width,K8-72,21,this.busy?PJ:FJ),this.compositeCrt()}compositeCrt(){let J=this.ctx;J.save(),J.setTransform(1,0,0,1,0,0),J.drawImage(this.crtOverlay(),0,0),J.restore()}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,FJ),this.ctx.shadowColor=PJ,this.ctx.shadowBlur=10,this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,hJ,n8,"700"),this.ctx.shadowBlur=0,this.text("MAIN BALANCE",46,J+156,20,FJ),Q?.tier){let X=this.ctx;X.font=`600 20px ${j7}`;let Y=`TIER ${String(Q.tier).toUpperCase()}`,U=X.measureText(Y).width;X.strokeStyle=FJ,X.lineWidth=2,X.beginPath(),X.roundRect(44,J+198,U+28,38,19),X.stroke(),this.text(Y,58,J+207,20,PJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+U,J+207,20,FJ)}let K=(X,Y,U,H)=>{let N=this.ctx;this.text(X,560,U,22,H?PJ:FJ);let G=Y?`$${Y.balance_usd.toFixed(2)}`:"$—";N.font=`700 30px ${n8}`,this.text(G,B9-44-N.measureText(G).width,U-6,30,hJ,n8,"700");let q=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),F=Math.max(6,(Y?.balance_usd||0)/q*420);N.fillStyle="rgba(9,248,117,0.16)",N.fillRect(560,U+44,420,10),N.fillStyle=H?PJ:FJ,N.fillRect(560,U+44,F,10),this.text(H?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,U+68,18,FJ)};K("INFERENCE",$,J+10,!0),K("DEV TOOLS",Z,J+130,!1);let W=this.history[0];if(W){let X=W.amount_usd>=0?`+$${W.amount_usd.toFixed(2)}`:`−$${Math.abs(W.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,FJ),this.text(`${X}  ${String(W.description||"").slice(0,52)}`,200,J+268,20,hJ)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,FJ),this.text(this.armed.quote,64,J+44,25,hJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,PJ,n8,"700"),this.status="FIRST FIRE ARMS · AFTER THAT IT JUST FIRES";return}if(!Q&&!this.chatLog.length){this.text("TEST-FIRE THE RAIL",64,J+6,22,FJ),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,hJ),this.text("billed to your Inference lane.",64,J+80,26,hJ),this.text("Type below, then press the green key.",64,J+138,24,FJ),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}let $=[];for(let X of this.chatLog){$.push({t:"> "+X.prompt.slice(0,58),c:z6,px:21});for(let Y of this.wrap(X.text,62))$.push({t:Y,c:FJ,px:22});if(X.line)$.push({t:X.line,c:z6,px:18})}if(Q){$.push({t:"> "+Q.prompt.slice(0,58),c:FJ,px:21});let X=Q.text.slice(0,Math.floor(Q.shown));for(let Y of this.wrap(X,62))$.push({t:Y,c:hJ,px:24});if(this.busy&&!Q.text)$.push({t:Math.floor(Date.now()/400)%2?"▍":"",c:PJ,px:24});if(Q.line&&Q.shown>=Q.text.length)$.push({t:Q.line,c:PJ,px:19})}let Z=13;if(this.chatMaxScroll=Math.max(0,$.length-Z),this.chatScroll>this.chatMaxScroll)this.chatScroll=this.chatMaxScroll;let K=Math.max(0,$.length-Z-this.chatScroll);if($.slice(K,K+Z).forEach((X,Y)=>this.text(X.t,64,J+4+Y*33,X.px,X.c)),K>0)this.text("▲",30,J+4,18,FJ);if(this.chatScroll>0)this.text("▼",30,J+4+(Z-1)*33,18,PJ);this.status=this.chatMaxScroll>0?"WHEEL OVER THE SCREEN SCROLLS · SETTLES FROM REAL USAGE":"SETTLES FROM REAL USAGE"}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,FJ),this.text("One real query against the open web.",64,J+44,26,hJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,FJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,FJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,hJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,FJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,PJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,FJ),this.text("Public metrics for any handle —",64,J+44,26,hJ),this.text("the same read the scoring agent makes.",64,J+80,26,hJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,FJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,hJ,n8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,FJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,PJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,FJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,hJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,FJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,hJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?PJ:FJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,hJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,U,H,N)=>{let G=this.ctx;G.strokeStyle=U?PJ:z6,G.lineWidth=U?3:2,G.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,U?PJ:FJ),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,hJ,n8,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,FJ),this.wrap(N,30).slice(0,3).forEach((q,F)=>this.text(q,Y+28,J+196+F*28,19,H?hJ:FJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}var J9=1200,H9=756,T7=60,s8="'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",S7="'SF Mono', ui-monospace, Menlo, Consolas, monospace",rX={ink:{bg:["#0C0C0B","#191917","#0E0E0D"],tex:"rgba(255,255,255,0.022)",fg:"#FFFFFF",acc:"#09F875",sub:"rgba(255,255,255,0.52)",edge:"rgba(255,255,255,0.10)"},carbon:{bg:["#151515","#2B2B29","#1A1A18"],tex:"rgba(255,255,255,0.02)",fg:"#E8E8E4",acc:"#09F875",sub:"rgba(232,232,228,0.5)",edge:"rgba(255,255,255,0.09)"},signal:{bg:["#0AF77A","#07DE6C","#05C75F"],tex:"rgba(10,10,10,0.05)",fg:"#0A0A0A",acc:"#0A0A0A",sub:"rgba(10,10,10,0.55)",edge:"rgba(10,10,10,0.14)"},mint:{bg:["#F2FFF8","#D3FFE7","#BFFADA"],tex:"rgba(10,10,10,0.035)",fg:"#0A0A0A",acc:"#0B7A3E",sub:"rgba(10,10,10,0.5)",edge:"rgba(10,10,10,0.10)"},mono:{bg:["#FFFFFF","#F1F1ED","#E8E8E2"],tex:"rgba(10,10,10,0.03)",fg:"#0A0A0A",acc:"#0B7A3E",sub:"rgba(10,10,10,0.5)",edge:"rgba(10,10,10,0.10)"}};function tX(J,Q,$,Z,K,W){J.clearRect(0,0,J9,H9),J.beginPath(),J.roundRect(0,0,J9,H9,T7),J.clip();let X=J.createLinearGradient(0,0,J9,H9);X.addColorStop(0,Q[0]),X.addColorStop(0.55,Q[1]),X.addColorStop(1,Q[2]),J.fillStyle=X,J.fillRect(0,0,J9,H9);let Y=J.createRadialGradient(K[0],K[1],0,K[0],K[1],740);Y.addColorStop(0,`rgba(255,255,255,${W})`),Y.addColorStop(0.55,"rgba(255,255,255,0)"),J.fillStyle=Y,J.fillRect(0,0,J9,H9),J.save(),J.translate(J9/2,H9/2),J.rotate(15*Math.PI/180),J.fillStyle=$;for(let U=-J9;U<J9;U+=15)J.fillRect(U,-H9,3,H9*2);J.restore(),J.strokeStyle=Z,J.lineWidth=3,J.beginPath(),J.roundRect(1.5,1.5,J9-3,H9-3,T7-1.5),J.stroke(),J.strokeStyle="rgba(255,255,255,0.14)",J.beginPath(),J.moveTo(T7,3.5),J.lineTo(J9-T7,3.5),J.stroke(),J.strokeStyle="rgba(0,0,0,0.18)",J.beginPath(),J.moveTo(T7,H9-3.5),J.lineTo(J9-T7,H9-3.5),J.stroke()}function U9(J,Q,$,Z,K,W,X={}){if(J.font=K,J.fillStyle=W,J.textAlign=X.align||"left",J.textBaseline="alphabetic",X.ls&&"letterSpacing"in J)J.letterSpacing=`${X.ls}px`;if(J.fillText(Q,$,Z),"letterSpacing"in J)J.letterSpacing="0px"}function eX(J){let Q=new g9(J);return Q.colorSpace=S9,Q.generateMipmaps=!0,Q.minFilter=e9,Q.anisotropy=4,Q}function zN(J){let Q=rX[J.variant||"ink"]||rX.ink,$=(J.handle||"").replace(/^@+/,""),Z=$?`@${$}`:"VANTIS",K=J.stamp||"RESERVED",W=document.createElement("canvas");W.width=J9,W.height=H9;let X=W.getContext("2d");X.save(),tX(X,Q.bg,Q.tex,Q.edge,[216,0],0.09),M6(X,72,60,45.4,Q.acc),U9(X,"VANTIS",141,102,`700 42px ${s8}`,Q.fg,{ls:3.36}),U9(X,K,1128,96,`500 33px ${S7}`,Q.sub,{align:"right"}),X.save(),X.beginPath(),X.roundRect(72,204,132,96,21),X.clip();let Y=X.createLinearGradient(72,204,204,300);Y.addColorStop(0,"#9BFFC9"),Y.addColorStop(0.22,"#09F875"),Y.addColorStop(0.45,"#58D5FF"),Y.addColorStop(0.65,"#C79BFF"),Y.addColorStop(0.82,"#FFE79B"),Y.addColorStop(1,"#09F875"),X.fillStyle=Y,X.fillRect(72,204,132,96),X.fillStyle="rgba(10,10,10,0.35)",X.fillRect(132.72,204,10.56,96),X.fillRect(72,232.8,132,5.76),X.fillRect(72,265.44,132,5.76),X.strokeStyle="rgba(255,255,255,0.5)",X.lineWidth=3,X.beginPath(),X.moveTo(78,206.5),X.lineTo(198,206.5),X.stroke(),X.strokeStyle="rgba(0,0,0,0.25)",X.beginPath(),X.moveTo(78,297.5),X.lineTo(198,297.5),X.stroke(),X.restore();let U=Z.length>21?57:Z.length>15?72:90;U9(X,Z,72,453,`700 ${U}px ${s8}`,Q.fg,{ls:-U*0.01}),U9(X,"IDENTITY",72,594,`600 27px ${s8}`,Q.sub,{ls:3.78}),U9(X,"Account & Agent",72,636,`600 36px ${s8}`,Q.fg),U9(X,`card.vantis.sh/${$||"yourhandle"}`,72,681,`500 30px ${S7}`,Q.sub),U9(X,"ONE OF ONE",1128,588,`700 30px ${S7}`,Q.acc,{align:"right",ls:3}),U9(X,"TIER",1128,630,`600 27px ${s8}`,Q.sub,{align:"right",ls:3.78});let H=J.tierLabel?`${J.tierLabel}${J.grantStr?` · $${J.grantStr}`:""}`:"—";U9(X,H,1128,672,`600 36px ${s8}`,Q.fg,{align:"right"}),X.restore();let N=document.createElement("canvas");N.width=J9,N.height=H9;let G=N.getContext("2d");G.save(),tX(G,["#0AF77A","#07DE6C","#05C75F"],"rgba(10,10,10,0.045)","rgba(10,10,10,0.14)",[960,756],0.22);let q=G.createLinearGradient(0,78,0,210);q.addColorStop(0,"#111111"),q.addColorStop(0.45,"#1D1D1B"),q.addColorStop(1,"#0C0C0B"),G.fillStyle=q,G.fillRect(0,78,J9,132),G.strokeStyle="rgba(255,255,255,0.08)",G.lineWidth=3,G.beginPath(),G.moveTo(0,79.5),G.lineTo(J9,79.5),G.stroke(),U9(G,"VANTIS CARDS",72,525,`700 36px ${s8}`,"#0A0A0A",{ls:2.88});let F="rgba(10,10,10,0.75)";return U9(G,`card.vantis.sh/${$||"yourhandle"}`,72,582,`500 30px ${S7}`,F),U9(G,`ONE OF ONE · ${K}`,72,639,`500 30px ${S7}`,F),U9(G,"Virtual identity card. Not a payment instrument.",72,696,`500 30px ${S7}`,F),G.globalAlpha=0.92,M6(G,833.2,384,294.8,"#0A0A0A"),G.globalAlpha=1,G.restore(),{front:eX(W),back:eX(N)}}function JY(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new g9(J);return Z.colorSpace=S9,Z}function QY(){try{if(localStorage.getItem("vc_ez")==="1")return}catch{}let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(2,devicePixelRatio||1),$;try{$=new NK({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=S9,$.toneMapping=$6,$.toneMappingExposure=1,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new I7,K=new V6($);Z.environment=K.fromScene(new GK,0.04).texture;let W=new P7(16777215,1.15);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new P7(14680046,0.16);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new P7(10485709,0.4);Y.position.set(2.2,1.4,-2),Z.add(Y);let U=new iJ(28,1,0.1,20),H=new j(0.1,0.7,4.3),N=new j(0,0.44,0);U.position.copy(H),U.lookAt(N);function G(h,s,q0="rgba(9,248,117,0.65)"){let t0=document.createElement("canvas"),KJ=Math.max(64,h.length*s*0.75),BJ=s*2;t0.width=KJ*2,t0.height=BJ*2;let MJ=t0.getContext("2d");MJ.scale(2,2),MJ.font=`600 ${s}px ${j7}`,MJ.fillStyle=q0,MJ.textBaseline="middle",MJ.textAlign="center",MJ.fillText(h,KJ/2,BJ/2);let _J=new g9(t0);_J.colorSpace=S9,_J.generateMipmaps=!1,_J.minFilter=fJ;let CJ=new g0(new rJ(KJ/640,BJ/640),new pJ({map:_J,transparent:!0}));return CJ.material.toneMapped=!1,CJ}let q=new mJ({color:724236,roughness:0.64,metalness:0.2,envMapIntensity:0.3}),F=new mJ({color:658186,roughness:0.75,metalness:0.25}),R=new mJ({color:790029,roughness:0.92,metalness:0.05}),I=new mJ({color:c8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:c8,emissiveIntensity:0.42});I.toneMapped=!1;let O=new pJ({color:c8});O.toneMapped=!1;let E=new QJ(1327146),C=new jQ,P=(h,s)=>C.load(h,(q0)=>{q0.wrapS=q0.wrapT=UQ,q0.anisotropy=4,s(q0)});P("/tex/metal030-normal-v1.jpg",(h)=>{h.repeat.set(2,1.4),q.normalMap=h,q.normalScale.set(0.65,0.65),q.needsUpdate=!0}),P("/tex/metal030-rough-v1.jpg",(h)=>{h.repeat.set(2,1.4),q.roughnessMap=h,q.roughness=0.9,q.needsUpdate=!0});let L=new dJ;Z.add(L);let A=new dJ,w=new g0(new l9(1.9,1.25,0.34,4,0.07),q);A.add(w),A.position.set(0,0.62,0),A.rotation.x=-0.06,L.add(A);let _=A,V=1.15,M=0.8625,m=new g0(new AJ(1.23,0.94,0.02),F);m.position.set(-0.26,0.02,0.164),A.add(m);let D=new KY,p=new g0(new rJ(V,M),new pJ({map:D.tex}));p.position.set(-0.26,0.02,0.178),A.add(p);let o=new g0(new rJ(1.21,0.92),new mJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));o.position.set(-0.26,0.02,0.184),A.add(o);let x=new g0(new AJ(0.01,1.08,0.012),O);x.position.set(0.4,0,0.172),A.add(x);let u=new dJ,n=new g0(new j9(0.155,0.155,0.075,48),new mJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));n.rotation.x=Math.PI/2,u.add(n);let g=new g0(new j9(0.135,0.135,0.014,40),new mJ({color:790029,roughness:0.42,metalness:0.4,envMapIntensity:0.45}));g.rotation.x=Math.PI/2,g.position.z=0.042,u.add(g);let e=new A7(new AJ(0.016,0.032,0.062),new mJ({color:1711131,roughness:0.5,metalness:0.5,envMapIntensity:0.7}),28),K0=new TJ;for(let h=0;h<28;h++){let s=h/28*Math.PI*2;K0.position.set(Math.cos(s)*0.157,Math.sin(s)*0.157,0),K0.rotation.z=s,K0.updateMatrix(),e.setMatrixAt(h,K0.matrix)}u.add(e);let Y0=new g0(new AJ(0.014,0.072,0.012),O);Y0.position.set(0,0.1,0.046),u.add(Y0),u.position.set(0.67,0.3,0.17),A.add(u);let w0=document.createElement("canvas");w0.width=w0.height=256;let k0=w0.getContext("2d");k0.translate(128,128),k0.strokeStyle="rgba(9,248,117,0.4)",k0.lineWidth=3;for(let h=0;h<24;h++)k0.beginPath(),k0.moveTo(0,-104),k0.lineTo(0,h%6===0?-88:-96),k0.stroke(),k0.rotate(Math.PI/12);let qJ=new g9(w0);qJ.colorSpace=S9,qJ.generateMipmaps=!1,qJ.minFilter=fJ;let YJ=new g0(new rJ(0.43,0.43),new pJ({map:qJ,transparent:!0}));YJ.material.toneMapped=!1,YJ.position.set(0.67,0.3,0.165),A.add(YJ);let a=G("DIAL",12);a.position.set(0.67,0.06,0.168),A.add(a);let U0=new dJ,V0=new g0(new l9(0.24,0.24,0.07,3,0.024),I);U0.add(V0);let N0=document.createElement("canvas");N0.width=N0.height=128,M6(N0.getContext("2d"),28,24,72,ON);let b0=new g9(N0);b0.colorSpace=S9,b0.generateMipmaps=!1,b0.minFilter=fJ;let JJ=new g0(new rJ(0.11,0.11),new pJ({map:b0,transparent:!0}));JJ.material.toneMapped=!1,JJ.position.z=0.037,V0.add(JJ);let l0=new g0(new AJ(0.3,0.3,0.02),F);l0.position.z=-0.028,U0.add(l0),U0.position.set(0.67,-0.14,0.17),A.add(U0);let u0=G("FIRE",12);u0.position.set(0.67,-0.32,0.168),A.add(u0);let t=new dJ,Z0=new g0(new l9(0.24,0.09,0.03,2,0.012),F);t.add(Z0);let J0=new dJ,L0=new g0(new AJ(0.04,0.085,0.04),new mJ({color:1316373,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));L0.position.y=0.042,J0.add(L0);let P0=new g0(new l9(0.06,0.048,0.048,2,0.014),I);P0.position.y=0.095,J0.add(P0),J0.position.z=0.03,t.add(J0),t.position.set(0.67,-0.52,0.17),A.add(t);let f0=G("INF",11);f0.position.set(0.51,-0.42,0.168),A.add(f0);let h0=G("DEV",11);h0.position.set(0.83,-0.42,0.168),A.add(h0);let n0=new j9(0.012,0.012,0.014,12),c0=new g0(n0,new pJ({color:c8}));c0.material.toneMapped=!1,c0.rotation.x=Math.PI/2,c0.position.set(0.51,-0.48,0.17),A.add(c0);let T=new g0(n0,new pJ({color:E}));T.material.toneMapped=!1,T.rotation.x=Math.PI/2,T.position.set(0.83,-0.48,0.17),A.add(T);let GJ=document.createElement("canvas");GJ.width=240,GJ.height=254,M6(GJ.getContext("2d"),0,0,240,PJ);let a0=new g9(GJ);a0.colorSpace=S9,a0.generateMipmaps=!1,a0.minFilter=fJ;let r0=new g0(new rJ(0.07,0.074),new pJ({map:a0,transparent:!0}));r0.material.toneMapped=!1,r0.position.set(-0.82,-0.55,0.172),A.add(r0);let B=G("WLT-01",11,"rgba(9,248,117,0.5)");B.position.set(-0.62,-0.56,0.168),A.add(B);for(let h=0;h<5;h++){let s=new g0(new AJ(0.14,0.008,0.006),F);s.position.set(0.06+h%2*0,-0.5-Math.floor(h)*0.022,0.17),s.position.x=-0.2,s.position.y=-0.5-h*0.024,A.add(s)}let k=new mJ({color:2764075,roughness:0.42,metalness:0.75,envMapIntensity:0.9}),S=new j9(0.016,0.016,0.01,12);for(let[h,s]of[[-0.88,0.56],[0.88,0.56],[-0.88,-0.56],[0.88,-0.56]]){let q0=new g0(S,k);q0.rotation.x=Math.PI/2,q0.position.set(h,s,0.172),A.add(q0);let t0=new g0(new AJ(0.02,0.003,0.004),F);t0.position.set(h,s,0.178),t0.rotation.z=h*s>0?0.6:-0.5,A.add(t0)}let l=new dJ,Q0=new g0(new j9(0.4,0.4,1.5,36),R);Q0.rotation.z=Math.PI/2,l.add(Q0);for(let h of[-0.56,-0.2,0.16,0.52]){let s=new g0(new j9(0.412,0.412,0.05,36),F);s.rotation.z=Math.PI/2,s.position.x=h,l.add(s)}let X0=new g0(new j9(0.425,0.425,0.06,36),R);X0.rotation.z=Math.PI/2,X0.position.x=-0.76,l.add(X0);let O0=X0.clone();O0.position.x=0.76,l.add(O0),l.position.set(0,0.12,-0.62),L.add(l);let c=new dJ;c.position.set(-0.26,0.645,0.06),A.add(c);let r=new g0(new l9(0.74,0.07,0.11,2,0.02),F);c.add(r);let M0=new g0(new AJ(0.68,0.005,0.004),O);M0.position.set(0,0.037,0.056),c.add(M0);let y0=-0.065,H0=new dJ,W0=new N6,C0=0.66,S0=0.4158,d0=0.033;W0.moveTo(-C0/2+d0,-S0/2),W0.lineTo(C0/2-d0,-S0/2),W0.absarc(C0/2-d0,-S0/2+d0,d0,-Math.PI/2,0,!1),W0.lineTo(C0/2,S0/2-d0),W0.absarc(C0/2-d0,S0/2-d0,d0,0,Math.PI/2,!1),W0.lineTo(-C0/2+d0,S0/2),W0.absarc(-C0/2+d0,S0/2-d0,d0,Math.PI/2,Math.PI,!1),W0.lineTo(-C0/2,-S0/2+d0),W0.absarc(-C0/2+d0,-S0/2+d0,d0,Math.PI,Math.PI*1.5,!1);let v=new G6(W0,{depth:0.018,bevelEnabled:!1});v.translate(0,0,-0.009);let G0=new mJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}),i=new g0(v,G0);H0.add(i);let F0=new pJ({transparent:!0,alphaTest:0.5});F0.toneMapped=!1;let I0=new pJ({transparent:!0,alphaTest:0.5});I0.toneMapped=!1;let $0=new g0(new rJ(C0,S0),F0);$0.position.z=0.0105,H0.add($0);let E0=new g0(new rJ(C0,S0),I0);E0.rotation.y=Math.PI,E0.position.z=-0.0105,H0.add(E0);let s0=(h)=>{let s=zN(h);if(F0.map?.dispose(),I0.map?.dispose(),F0.map=s.front,F0.needsUpdate=!0,I0.map=s.back,I0.needsUpdate=!0,h.variant==="mint"||h.variant==="mono")G0.color.setHex(14211282)};s0({handle:null,variant:"ink"}),H0.position.y=y0,c.add(H0);let NJ=new dJ,EJ=new g0(new l9(0.72,0.05,0.3,2,0.015),F);EJ.position.set(0,0.025,0),NJ.add(EJ);let Q9=new g0(new l9(0.68,0.3,0.028,2,0.012),F);Q9.rotation.x=-0.64,Q9.position.set(0,0.16,-0.1),NJ.add(Q9);let q9=new g0(new AJ(0.68,0.03,0.03),F);q9.position.set(0,0.065,0.09),NJ.add(q9);let I6=new g0(new AJ(0.64,0.02,0.05),new mJ({color:395015,roughness:0.9,metalness:0.1}));I6.position.set(0,0.045,0.05),NJ.add(I6);let v7=new g0(new AJ(0.64,0.004,0.004),O);v7.position.set(0,0.082,0.075),NJ.add(v7);let B8=new g0(new rJ(0.9,0.55),new pJ({map:JY(),transparent:!0,depthWrite:!1}));B8.rotation.x=-Math.PI/2,B8.position.y=0.002,NJ.add(B8),NJ.position.set(-0.84,-0.2,0.56),NJ.rotation.y=0.32,L.add(NJ),L.updateMatrixWorld(!0);let f7=L.worldToLocal(c.localToWorld(new j(0,y0,0))),y7=new E9;c.getWorldQuaternion(y7),c.remove(H0),L.add(H0);let i8=new j(-0.865,0.02,0.485),d9=new E9().setFromEuler(new O9(-0.64,0.32,0,"YXZ")),M8=new j(-0.55,1.55,0.42),A6=(h)=>h*h*(3-2*h);function o8(h){let s=Math.max(0,Math.min(1,h)),q0=1-s;H0.position.set(q0*q0*i8.x+2*q0*s*M8.x+s*s*f7.x,q0*q0*i8.y+2*q0*s*M8.y+s*s*f7.y,q0*q0*i8.z+2*q0*s*M8.z+s*s*f7.z),H0.quaternion.slerpQuaternions(d9,y7,A6(s))}o8(0);let Y8=new g0(new rJ(3,1.8),new pJ({map:JY(),transparent:!0,depthWrite:!1}));Y8.rotation.x=-Math.PI/2,Y8.position.y=-0.2,Z.add(Y8),L.position.y=0.02;let I8=new L8(0,60,14),u9=new L8(0,60,14),A8=new L8(0,70,15),U8=!1,b7=new j,P6=new j,h7=new j;function x7(h){U8=h??!U8,A8.target=U8?1:0,SJ.lever(),$J(U8?"Screen raised":"Screen lowered")}let z=new L8(0,170,20),f=new L8(0,400,24),d=new L8(-0.22,240,20),b=new L8(0,60,12),y="hover",z0=0;function _0(){if(y!=="hover")return;y="inserting",b.target=1,D.vireo.poke()}function R0(){if(y!=="seated"||D.busy){if(D.busy)SJ.err();return}y="ejecting",b.target=0,D.powered=!1,D.booted=v9,D.bootT=0,D.dirty=!0;try{let h=X8();eJ(500,h.currentTime+0.01,0.05,0.05,"sine"),eJ(340,h.currentTime+0.08,0.06,0.07,"sine")}catch{}$J("Card ejected — screen off")}let j0={t:0},T0=(h,s=!1)=>{let q0=(h%z8.length+z8.length)%z8.length;if(q0===D.mode)return;if(D.mode=q0,D.err=null,D.armed=null,D.dirty=!0,z.target=-q0*(Math.PI*2/8),!s)SJ.detent(q0);D.vireo.poke(),uJ(),$J(`Mode: ${z8[q0]}`)},i0=document.getElementById("dv-input-row"),v0=document.getElementById("dv-input"),x0=document.getElementById("dv-go"),UJ=document.getElementById("dv-alt"),RJ=document.getElementById("dv-sound");if(RJ){let h=()=>{RJ.textContent=W8?"Sound on":"Sound off",RJ.setAttribute("aria-pressed",W8?"true":"false"),RJ.style.opacity=W8?"1":"0.55"};h(),RJ.addEventListener("click",()=>{W8=!W8;try{localStorage.setItem($Y,W8?"on":"off")}catch{}if(h(),W8)SJ.ok()})}let LJ=document.getElementById("dv-live"),$J=(h)=>{if(LJ)LJ.textContent=h},jJ={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}},A0="";function uJ(){let h=D.modeName(),s=jJ[h];if(i0)i0.style.display=s?"flex":"none";if(s&&v0&&h!==A0){if(A0)HJ[A0]=v0.value;v0.value=HJ[h]||"",A0=h}if(s&&v0)v0.placeholder=s.ph;if(s&&x0)x0.textContent=s.go;if(UJ)if(h==="HOME"||h==="LANES")UJ.style.display="",UJ.textContent=h==="LANES"?"Sweep lane":"Fund lane";else UJ.style.display="none"}async function XJ(){try{let h=await fetch("/api/playground/meta");if(!h.ok)return;if(D.meta=await h.json(),D.meta?.handle)s0({handle:D.meta.handle,variant:D.meta.variant,stamp:D.meta.stamp,tierLabel:D.meta.tier_label,grantStr:D.meta.grant_str});D.dirty=!0}catch{}}async function cJ(){try{let h=await fetch("/api/credits/history");if(!h.ok)return;let s=await h.json();D.history=s.entries||[],D.dirty=!0}catch{}}addEventListener("vc-balances",(h)=>{let s=h.detail||{};if(!D.meta)return;let q0=D.meta.main_balance_usd;D.meta.main_balance_usd=s.main??D.meta.main_balance_usd;for(let t0 of s.wallets||[]){let KJ=t0.purpose==="inference"?D.meta.lanes?.inference:D.meta.lanes?.devtools;if(KJ)KJ.balance_usd=t0.balance_usd,KJ.consumed_usd=t0.consumed_usd}if(typeof s.main==="number"&&s.main!==q0)D.vireo.set("happy");D.dirty=!0,cJ()});function Z9(h){let s=D.meta?.lanes?.[h];return s?{id:s.id,name:h==="inference"?"Inference":"Developer tools"}:null}function N9(h){let s=Z9(h);if(!s)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:s}))}async function c9(h){let s=Z9(h);if(!s)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:s}))}let OJ=null,zJ=!1,M9=!1,HJ={};function I9(){if(D.busy)return!1;if(jJ[D.modeName()]&&!(v0?.value||"").trim())return v0?.focus(),D.vireo.set("alert"),D.dirty=!0,SJ.err(),!1;return!0}async function f9(){if(D.busy)return;let h=D.modeName();if(D.err=null,h==="HOME"){N9("inference");return}if(h==="LANES"){N9(D.lane);return}if(h==="LEDGER"){cJ();return}let s=jJ[h],q0=(v0?.value||"").trim();if(s&&!q0){v0?.focus(),D.vireo.set("alert"),SJ.err();return}if(h==="CHAT"&&!D.armed&&!M9){let KJ=(Math.ceil((q0.length+180)/4)*0.14+112.00000000000001)/1e6,BJ=D.meta?.vantis_price_usd?KJ/D.meta.vantis_price_usd:null;D.armed={until:performance.now()+3000,quote:`UP TO $${KJ.toFixed(6)}${BJ?` · ~${BJ.toFixed(4)} VANTIS`:""} AT LIST`},D.dirty=!0,$J("Armed. Press again to fire.");return}D.armed=null,D.busy=!0,D.vireo.set("work"),D.vireo.flapRate=3,D.dirty=!0;try{if(h==="CHAT"){if(D.chat&&D.chat.text)D.chatLog.push({prompt:D.chat.prompt,text:D.chat.text,line:D.chat.line});if(D.chatLog.length>6)D.chatLog.shift();if(D.chat={prompt:q0,text:"",shown:0,line:""},D.chatScroll=0,v0)v0.value="";HJ[h]="";let t0=performance.now(),KJ=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:q0,stream:!0})});if(!KJ.ok){let BJ=await KJ.json().catch(()=>({}));if(D.chat=null,v0&&!v0.value.trim())v0.value=q0,HJ[h]=q0;if(BJ.error==="lane_empty")D.err=`Inference lane is empty — it needs about $${(BJ.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,D.vireo.set("droop");else if(BJ.error==="rate_limited")D.err="Easy — a few seconds between fires.",D.vireo.set("alert");else D.err="The rail refused that one. Try again.",D.vireo.set("alert");SJ.err()}else{let BJ=KJ.body.getReader(),MJ=new TextDecoder,_J="",CJ=null,K9=null;for(;;){let{value:T6,done:GY}=await BJ.read();if(GY)break;_J+=MJ.decode(T6,{stream:!0});let nQ;while((nQ=_J.indexOf(`

`))>=0){let FY=_J.slice(0,nQ);_J=_J.slice(nQ+2);for(let BK of FY.split(`
`)){if(!BK.startsWith("data: "))continue;let MK=BK.slice(6);if(MK==="[DONE]")continue;let e8;try{e8=JSON.parse(MK)}catch{continue}let IK=e8.choices?.[0]?.delta?.content;if(IK&&D.chat)D.chat.text+=IK,D.chat.shown=D.chat.text.length,D.vireo.flapRate=6,D.dirty=!0;if(e8.usage)CJ=e8.usage;if(e8.vantis)K9=e8.vantis}}}let p7=((performance.now()-t0)/1000).toFixed(1);if(D.chat&&D.chat.text){let T6=CJ?.completion_tokens??Math.round(D.chat.text.length/4);if(D.chat.line=K9&&K9.cost_usd!=null?`${p7}s · ${T6} TOK OUT · $${Number(K9.cost_usd).toFixed(6)} → ${Number(K9.vantis_burned||0).toFixed(4)} VANTIS BURNED`:`${p7}s · ${T6} TOK OUT`,K9&&K9.balance_usd!=null&&D.meta?.lanes?.inference)D.meta.lanes.inference.balance_usd=K9.balance_usd;M9=!0,SJ.ok(),$J(`Answer: ${D.chat.text}`)}else D.chat=null,D.err="The stream came back empty — try again.",D.vireo.set("alert"),SJ.err()}}else if(h==="SEARCH"){let t0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:q0})}),KJ=await t0.json();if(!t0.ok){if(KJ.error==="demo_exhausted")D.err="Today's free searches are spent — more tomorrow.";else D.err="Search did not go through.";D.vireo.set("alert"),SJ.err()}else{if(D.search={query:q0,results:KJ.results,left:KJ.left_today},v0)v0.value="",HJ[h]="";D.vireo.set("happy"),SJ.ok(),$J(`${KJ.results.length} results`)}}else if(h==="X LOOKUP"){let t0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:q0})}),KJ=await t0.json();if(!t0.ok)D.err=KJ.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":KJ.error==="handle_not_found"?"No such handle — check the spelling.":KJ.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",D.vireo.set("alert"),SJ.err();else{if(D.xprof={profile:KJ.profile,left:KJ.left_today},v0)v0.value="",HJ[h]="";D.vireo.set("happy"),SJ.ok(),$J(`@${KJ.profile.handle}: ${KJ.profile.followers} followers`)}}}catch{if(D.err="Network hiccup — try again.",h==="CHAT"&&D.chat&&!D.chat.text){if(v0&&!v0.value.trim())v0.value=D.chat.prompt,HJ[h]=D.chat.prompt;D.chat=null}D.vireo.set("alert"),SJ.err()}finally{if(D.busy=!1,D.vireo.state==="work")D.vireo.set("idle");D.dirty=!0}}let a8=-1e9,w6=new bQ,r8=new D0,A9=null,lJ=null,WY=new pJ({visible:!1}),g7=(h,s,q0,t0,KJ,BJ=0,MJ=0,_J=0)=>{let CJ=new g0(new AJ(s,q0,t0),WY);return CJ.position.set(BJ,MJ,_J),CJ.userData.hit=h,KJ.add(CJ),CJ},XY=[g7("knob",0.42,0.42,0.22,u),g7("key",0.34,0.34,0.2,U0),g7("lever",0.3,0.26,0.18,t,0,0.05,0.03),g7("card",0.74,0.5,0.26,H0,0,0,0),g7("screen",1.17,0.88,0.06,_,-0.26,0.02,0.19)];function lQ(h){let s=$.domElement.getBoundingClientRect();r8.x=(h.clientX-s.left)/s.width*2-1,r8.y=-((h.clientY-s.top)/s.height)*2+1,w6.setFromCamera(r8,U);let q0=w6.intersectObjects(XY,!1);return q0.length?q0[0].object.userData.hit:null}function YY(h){let s=$.domElement.getBoundingClientRect();r8.x=(h.clientX-s.left)/s.width*2-1,r8.y=-((h.clientY-s.top)/s.height)*2+1,w6.setFromCamera(r8,U);let q0=w6.intersectObject(p,!1)[0];if(!q0?.uv)return null;return{cx:q0.uv.x*B9,cy:(1-q0.uv.y)*K8}}function UY(h){let s=YY(h);if(!s)return;for(let q0 of D.tabRects)if(s.cx>=q0.x&&s.cx<=q0.x+q0.w&&s.cy>=q0.y&&s.cy<=q0.y+q0.h){T0(q0.mode);return}if(D.modeName()==="LANES"&&s.cy>100&&s.cy<460){let q0=s.cx<B9/2?"inference":"devtools";if(q0!==D.lane){D.lane=q0,d.target=q0==="inference"?-0.22:0.22,SJ.lever(),D.dirty=!0,$J(`Lane: ${D.lane}`);return}}x7()}$.domElement.addEventListener("pointerdown",(h)=>{a8=performance.now();let s=lQ(h);if(!s)return;if(D.vireo.poke(),s==="knob")A9={x:h.clientX,base:D.mode,acc:0},$.domElement.setPointerCapture(h.pointerId);else if(s==="key"){if(!I9())return;f.target=-0.032,SJ.press(),zJ=!1,OJ=setTimeout(()=>{if(zJ=!0,D.modeName()==="LANES")c9(D.lane)},650)}else if(s==="lever"){if(D.lane=D.lane==="inference"?"devtools":"inference",d.target=D.lane==="inference"?-0.22:0.22,SJ.lever(),D.dirty=!0,D.modeName()!=="LANES")T0(5,!0);$J(`Lane: ${D.lane}`)}else if(s==="screen")UY(h);else if(s==="card"){if(y==="inserting"||y==="ejecting")return;lJ={startX:h.clientX,startY:h.clientY,startV:b.v,moved:!1,pulledOut:!1},$.domElement.setPointerCapture(h.pointerId)}});let DK=0,_6=null;$.domElement.addEventListener("pointermove",(h)=>{a8=performance.now();let s=$.domElement.getBoundingClientRect(),q0=(h.clientX-s.left)/s.width*2-1,t0=(h.clientY-s.top)/s.height*2-1;if(!v9)u9.target=q0*0.1,I8.target=t0*0.055;if(A9){let BJ=h.clientX-A9.x,MJ=Math.round(BJ/52);if(MJ!==A9.acc)T0(A9.base+MJ),A9.acc=MJ;$.domElement.style.cursor="grabbing";return}if(lJ){let BJ=$.domElement.getBoundingClientRect(),MJ=(lJ.startY-h.clientY)/BJ.height*1.5-(lJ.startX-h.clientX)/BJ.width*1.1;if(Math.abs(h.clientY-lJ.startY)+Math.abs(h.clientX-lJ.startX)>8)lJ.moved=!0;let _J=D.busy?0.9:0;if(b.v=Math.max(_J,Math.min(1,lJ.startV+MJ)),b.target=b.v,b.vel=0,!lJ.pulledOut&&b.v<0.86&&D.powered){lJ.pulledOut=!0,D.powered=!1,D.booted=v9,D.bootT=0,D.dirty=!0;try{let CJ=X8();eJ(500,CJ.currentTime+0.01,0.05,0.05,"sine"),eJ(340,CJ.currentTime+0.08,0.06,0.07,"sine")}catch{}$J("Card out — screen off")}$.domElement.style.cursor="grabbing";return}let KJ=performance.now();if(KJ-DK>80)DK=KJ,_6=lQ(h),$.domElement.style.cursor=_6?"pointer":"default"});let kK=(h)=>{if(lJ){let s=!lJ.moved,q0=b.v;lJ=null;try{$.domElement.releasePointerCapture(h.pointerId)}catch{}if(s){if(y==="hover")_0();else if(y==="seated")R0()}else if(q0>0.55)y="inserting",b.target=1;else y="ejecting",b.target=0;return}if(A9){A9=null;try{$.domElement.releasePointerCapture(h.pointerId)}catch{}}if(f.target!==0){if(f.target=0,clearTimeout(OJ),!zJ)f9()}};$.domElement.addEventListener("pointerup",kK),$.domElement.addEventListener("pointerleave",(h)=>{if(!A9)I8.target=0,u9.target=0;kK(h)});let t8=0,RK=null;$.domElement.addEventListener("wheel",(h)=>{if(_6==="screen"&&D.modeName()==="CHAT"&&D.chatMaxScroll>0&&!A9){h.preventDefault();let s=Math.max(1,Math.round(Math.abs(h.deltaY)/60));D.chatScroll=Math.max(0,Math.min(D.chatMaxScroll,D.chatScroll+(h.deltaY<0?s:-s))),D.dirty=!0;return}if(_6!=="knob"&&!A9)return;h.preventDefault(),t8+=h.deltaY,clearTimeout(RK),RK=setTimeout(()=>t8=0,200);while(Math.abs(t8)>=100)T0(D.mode+(t8>0?1:-1)),t8-=Math.sign(t8)*100},{passive:!1});let dQ=()=>{if(!I9())return;f.target=-0.032,setTimeout(()=>f.target=0,130),SJ.press(),f9()};addEventListener("keydown",(h)=>{if(h.target===v0){if(h.key==="Enter")h.preventDefault(),dQ();return}if(h.target?.tagName==="INPUT"||h.target?.tagName==="TEXTAREA")return;if(h.key==="ArrowRight")T0(D.mode+1);else if(h.key==="ArrowLeft")T0(D.mode-1);else if(h.key==="Enter")dQ();else if(h.key==="Escape"){if(U8)x7(!1)}else if(h.key.toLowerCase()==="z")x7();else if(h.key.toLowerCase()==="l")D.lane=D.lane==="inference"?"devtools":"inference",d.target=D.lane==="inference"?-0.22:0.22,SJ.lever(),D.dirty=!0}),x0?.addEventListener("click",dQ),UJ?.addEventListener("click",()=>{if(D.modeName()==="LANES")c9(D.lane);else N9("inference")});function VK(){let h=J.clientWidth,s=Math.max(440,Math.min(700,Math.round(h*0.72)));$.setSize(h,s),U.aspect=h/s,H.z=h<560?6:h<760?4.9:4.3,U.updateProjectionMatrix(),D.dirty=!0}new ResizeObserver(VK).observe(J),VK();let uQ=performance.now(),cQ=0,HY=[I8,u9,z,f,d,b];function LK(h){cQ=requestAnimationFrame(LK);let s=Math.max(0,Math.min(0.25,(h-uQ)/1000)),q0=Math.min(0.05,s);uQ=h;let t0=h/1000;j0.t=t0;let KJ=D.step(s,t0),BJ=h-a8<2500;if(!(D.powered&&!D.booted||D.busy||KJ||BJ||!A8.settled()||y==="inserting"||y==="ejecting"||!!lJ||HY.some((CJ)=>!CJ.settled())))if(Math.abs(L.position.y-0.02)>0.0004)L.position.y+=(0.02-L.position.y)*Math.min(1,q0*3);else return;else if(!v9&&BJ)L.position.y=0.02+Math.sin(t0*0.9)*0.012;if(!v9){let CJ=1-A8.v*0.75;L.rotation.x=I8.step(q0)*CJ,L.rotation.y=u9.step(q0)*CJ}let _J=A8.step(q0);if(_J>0.001)p.getWorldPosition(b7),h7.set(0,0,1),p.getWorldQuaternion(U.quaternion),h7.applyQuaternion(U.quaternion),P6.lerpVectors(N,b7,_J),U.position.lerpVectors(H,b7.clone().addScaledVector(h7,1.92),_J),U.lookAt(P6);else U.position.copy(H),U.lookAt(N);if(u.rotation.z=z.step(q0),V0.position.z=f.step(q0),J0.rotation.z=d.step(q0),o8(lJ?b.v:b.step(q0)),!lJ&&y==="inserting"&&Math.abs(b.v-1)<0.01)y="seated",SJ.dock(),D.powered=!0,D.dirty=!0;else if(!lJ&&y==="ejecting"&&b.v<0.02)y="hover",z0=0;T.material.color.set(D.lane==="devtools"?c8:1327146),c0.material.color.set(D.lane==="inference"?c8:1327146),O.color.setHex(c8).multiplyScalar(D.busy?0.75+Math.sin(t0*9)*0.25:1),$.render(Z,U)}if(v9){let h=()=>{if(D.step(0.03333333333333333,performance.now()/1000),u.rotation.z=z.target,V0.position.z=f.target,J0.rotation.z=d.target,b.v=b.target,o8(b.v),y==="inserting")y="seated",D.powered=!0,D.dirty=!0;else if(y==="ejecting")y="hover";$.render(Z,U)};setInterval(h,250),h()}else{let h=!0,s=!1,q0=()=>{let t0=h&&!document.hidden;if(t0&&!s)s=!0,uQ=performance.now(),cQ=requestAnimationFrame(LK);else if(!t0&&s)s=!1,cancelAnimationFrame(cQ)};new IntersectionObserver((t0)=>{h=t0[0]?.isIntersecting!==!1,q0()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",q0),q0()}let C6=new j;function qY(h){return h.getWorldPosition(C6),C6.project(U),{x:(C6.x+1)/2*$.domElement.clientWidth,y:(1-C6.y)/2*$.domElement.clientHeight}}function NY(){let h=[{obj:p,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — and tap the screen itself to raise it closer."},{obj:U0,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:u,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:t,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge."}],s=document.createElement("div");s.className="dv-coach",s.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(s);let q0=s.querySelector(".dv-coach-ring"),t0=s.querySelector(".dv-coach-step"),KJ=s.querySelector(".dv-coach-txt"),BJ=s.querySelector('[data-a="next"]'),MJ=0,_J=()=>{let K9=h[MJ],p7=qY(K9.obj);q0.style.left=p7.x+"px",q0.style.top=p7.y+"px",q0.style.width=q0.style.height=K9.ring+"px",t0.textContent=`${MJ+1} / ${h.length} — ${K9.k}`,KJ.textContent=K9.txt,BJ.textContent=MJ===h.length-1?"Start":"Next",SJ.detent(MJ)},CJ=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}s.remove()};s.querySelector('[data-a="skip"]').addEventListener("click",CJ),BJ.addEventListener("click",()=>{if(MJ++,MJ>=h.length)CJ();else _J()}),_J()}let zK=!1;try{zK=!!localStorage.getItem("vc-device-coach")}catch{}if(!zK&&!v9)setTimeout(NY,v9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),uJ(),XJ().then(cJ),window.__device={ready:!0,os:D,setMode:(h)=>T0(h),pickAt:(h,s)=>lQ({clientX:h,clientY:s}),insertCard:_0,ejectCard:R0,cardState:()=>y,frames:()=>$.info.render.frame,screenClientPoint:(h,s)=>{let q0=new j((h-0.5)*1.15,(s-0.5)*0.8625,0);p.localToWorld(q0),q0.project(U);let t0=$.domElement.getBoundingClientRect();return{x:t0.left+(q0.x+1)/2*t0.width,y:t0.top+(1-q0.y)/2*t0.height}},fire:f9,snapshot:()=>{return $.render(Z,U),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",QY);else QY();
