var zW=Object.create;var{getPrototypeOf:BW,defineProperty:K8,getOwnPropertyNames:c6,getOwnPropertyDescriptor:MW}=Object,x7=Object.prototype.hasOwnProperty;function g7(J){return this[J]}var $q=(J,Q,$)=>{var Z=c6(Q);for(let K of Z)if(!x7.call(J,K)&&K!=="default")K8(J,K,{get:g7.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!x7.call($,K)&&K!=="default")K8($,K,{get:g7.bind(Q,K),enumerable:!0});return $}},IW,AW,Zq=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?IW??=new WeakMap:AW??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?zW(BW(J)):{};let X=Q||!J||!J.__esModule?K8($,"default",{value:J,enumerable:!0}):$;for(let Y of c6(J))if(!x7.call(X,Y))K8(X,Y,{get:g7.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},Kq=(J)=>{var Q=(ZZ??=new WeakMap).get(J),$;if(Q)return Q;if(Q=K8({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of c6(J))if(!x7.call(Q,Z))K8(Q,Z,{get:g7.bind(J,Z),enumerable:!($=MW(J,Z))||$.enumerable})}return ZZ.set(J,Q),Q},ZZ,Wq=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var CW=(J)=>J;function PW(J,Q){this[J]=CW.bind(null,Q)}var Xq=(J,Q)=>{for(var $ in Q)K8(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:PW.bind(Q,$)})};var Yq=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var Uq=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var wZ="185";var TZ=0,RQ=1,SZ=2;var E7=1,jZ=2,i8=3,o8=0,hJ=1,R9=2,k9=0,D7=1,kQ=2,LQ=3,VQ=4,fZ=5;var a8=100,vZ=101,yZ=102,bZ=103,hZ=104,xZ=200,gZ=201,pZ=202,mZ=203,lZ=204,dZ=205,uZ=206,cZ=207,nZ=208,sZ=209,iZ=210,oZ=211,aZ=212,rZ=213,tZ=214,eZ=0,JK=1,QK=2,zQ=3,$K=4,ZK=5,KK=6,WK=7,XK=0,YK=1,UK=2,H9=0,BQ=1,MQ=2,IQ=3,R7=4,AQ=5,CQ=6,PQ=7;var r8=301,q8=302,q6=303,N6=304,k7=306,G6=1000,F6=1001,HK=1002,i9=1003,qK=1004;var L7=1005;var BJ=1006,O6=1007;var N8=1008;var q9=1009,NK=1010,GK=1011,V7=1012,_Q=1013,o9=1014,j9=1015,f9=1016,wQ=1017,TQ=1018,t8=1020,FK=35902,OK=35899,EK=1021,DK=1022,L9=1023,G8=1026,F8=1027,RK=1028,SQ=1029,O8=1030,jQ=1031;var fQ=1033,E6=33776,D6=33777,R6=33778,k6=33779,vQ=35840,yQ=35841,bQ=35842,hQ=35843,xQ=36196,gQ=37492,pQ=37496,mQ=37488,lQ=37489,L6=37490,dQ=37491,uQ=37808,cQ=37809,nQ=37810,sQ=37811,iQ=37812,oQ=37813,aQ=37814,rQ=37815,tQ=37816,eQ=37817,J$=37818,Q$=37819,$$=37820,Z$=37821,K$=36492,W$=36494,X$=36495,Y$=36283,U$=36284,V6=36285,H$=36286;var q$=0,kK=1,E8="",N9="srgb",N$="srgb-linear",G$="linear",HJ="srgb";var LK=512,VK=513,zK=514,z6=515,BK=516,MK=517,B6=518,IK=519;var F$="300 es",O$=2000;function _W(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function wW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function n8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function AK(){let J=n8("canvas");return J.style.display="block",J}var KZ={},s8=null;function E$(...J){let Q="THREE."+J.shift();if(s8)s8("log",Q,...J);else console.log(Q,...J)}function CK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function v0(...J){J=CK(J);let Q="THREE."+J.shift();if(s8)s8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function f0(...J){J=CK(J);let Q="THREE."+J.shift();if(s8)s8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function H8(...J){let Q=J.join(" ");if(Q in KZ)return;KZ[Q]=!0,v0(...J)}function PK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var _K={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class v9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var vJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var n6=Math.PI/180,U6=180/Math.PI;function z7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(vJ[J&255]+vJ[J>>8&255]+vJ[J>>16&255]+vJ[J>>24&255]+"-"+vJ[Q&255]+vJ[Q>>8&255]+"-"+vJ[Q>>16&15|64]+vJ[Q>>24&255]+"-"+vJ[$&63|128]+vJ[$>>8&255]+"-"+vJ[$>>16&255]+vJ[$>>24&255]+vJ[Z&255]+vJ[Z>>8&255]+vJ[Z>>16&255]+vJ[Z>>24&255]).toLowerCase()}function o0(J,Q,$){return Math.max(Q,Math.min($,J))}function TW(J,Q){return(J%Q+Q)%Q}function s6(J,Q,$){return(1-$)*J+$*Q}function U7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function mJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class u0{static{u0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=o0(this.x,J.x,Q.x),this.y=o0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=o0(this.x,J,Q),this.y=o0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(o0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(o0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class y9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],U=$[Z+1],H=$[Z+2],N=$[Z+3],G=K[W+0],q=K[W+1],E=K[W+2],V=K[W+3];if(N!==V||Y!==G||U!==q||H!==E){let I=Y*G+U*q+H*E+N*V;if(I<0)G=-G,q=-q,E=-E,V=-V,I=-I;let O=1-X;if(I<0.9995){let F=Math.acos(I),A=Math.sin(F);O=Math.sin(O*F)/A,X=Math.sin(X*F)/A,Y=Y*O+G*X,U=U*O+q*X,H=H*O+E*X,N=N*O+V*X}else{Y=Y*O+G*X,U=U*O+q*X,H=H*O+E*X,N=N*O+V*X;let F=1/Math.sqrt(Y*Y+U*U+H*H+N*N);Y*=F,U*=F,H*=F,N*=F}}J[Q]=Y,J[Q+1]=U,J[Q+2]=H,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],U=$[Z+2],H=$[Z+3],N=K[W],G=K[W+1],q=K[W+2],E=K[W+3];return J[Q]=X*E+H*N+Y*q-U*G,J[Q+1]=Y*E+H*G+U*N-X*q,J[Q+2]=U*E+H*q+X*G-Y*N,J[Q+3]=H*E-X*N-Y*G-U*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,U=X($/2),H=X(Z/2),N=X(K/2),G=Y($/2),q=Y(Z/2),E=Y(K/2);switch(W){case"XYZ":this._x=G*H*N+U*q*E,this._y=U*q*N-G*H*E,this._z=U*H*E+G*q*N,this._w=U*H*N-G*q*E;break;case"YXZ":this._x=G*H*N+U*q*E,this._y=U*q*N-G*H*E,this._z=U*H*E-G*q*N,this._w=U*H*N+G*q*E;break;case"ZXY":this._x=G*H*N-U*q*E,this._y=U*q*N+G*H*E,this._z=U*H*E+G*q*N,this._w=U*H*N-G*q*E;break;case"ZYX":this._x=G*H*N-U*q*E,this._y=U*q*N+G*H*E,this._z=U*H*E-G*q*N,this._w=U*H*N+G*q*E;break;case"YZX":this._x=G*H*N+U*q*E,this._y=U*q*N+G*H*E,this._z=U*H*E-G*q*N,this._w=U*H*N-G*q*E;break;case"XZY":this._x=G*H*N-U*q*E,this._y=U*q*N-G*H*E,this._z=U*H*E+G*q*N,this._w=U*H*N+G*q*E;break;default:v0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],U=Q[2],H=Q[6],N=Q[10],G=$+X+N;if(G>0){let q=0.5/Math.sqrt(G+1);this._w=0.25/q,this._x=(H-Y)*q,this._y=(K-U)*q,this._z=(W-Z)*q}else if($>X&&$>N){let q=2*Math.sqrt(1+$-X-N);this._w=(H-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+U)/q}else if(X>N){let q=2*Math.sqrt(1+X-$-N);this._w=(K-U)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+H)/q}else{let q=2*Math.sqrt(1+N-$-X);this._w=(W-Z)/q,this._x=(K+U)/q,this._y=(Y+H)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(o0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,U=Q._z,H=Q._w;return this._x=$*H+W*X+Z*U-K*Y,this._y=Z*H+W*Y+K*X-$*U,this._z=K*H+W*U+$*Y-Z*X,this._w=W*H-$*X-Z*Y-K*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let U=Math.acos(X),H=Math.sin(U);Y=Math.sin(Y*U)/H,Q=Math.sin(Q*U)/H,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{v.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(WZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(WZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,U=2*(W*Z-X*$),H=2*(X*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+Y*U+W*N-X*H,this.y=$+Y*H+X*U-K*N,this.z=Z+Y*N+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=o0(this.x,J.x,Q.x),this.y=o0(this.y,J.y,Q.y),this.z=o0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=o0(this.x,J,Q),this.y=o0(this.y,J,Q),this.z=o0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(o0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return i6.copy(this).projectOnVector(J),this.sub(i6)}reflect(J){return this.sub(i6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(o0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var i6=new v,WZ=new y9;class h0{static{h0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U)}set(J,Q,$,Z,K,W,X,Y,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=X,H[3]=Q,H[4]=K,H[5]=Y,H[6]=$,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],U=$[1],H=$[4],N=$[7],G=$[2],q=$[5],E=$[8],V=Z[0],I=Z[3],O=Z[6],F=Z[1],A=Z[4],w=Z[7],B=Z[2],P=Z[5],L=Z[8];return K[0]=W*V+X*F+Y*B,K[3]=W*I+X*A+Y*P,K[6]=W*O+X*w+Y*L,K[1]=U*V+H*F+N*B,K[4]=U*I+H*A+N*P,K[7]=U*O+H*w+N*L,K[2]=G*V+q*F+E*B,K[5]=G*I+q*A+E*P,K[8]=G*O+q*w+E*L,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8];return Q*W*H-Q*X*U-$*K*H+$*X*Y+Z*K*U-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=H*W-X*U,G=X*Y-H*K,q=U*K-W*Y,E=Q*N+$*G+Z*q;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let V=1/E;return J[0]=N*V,J[1]=(Z*U-H*$)*V,J[2]=(X*$-Z*W)*V,J[3]=G*V,J[4]=(H*Q-Z*Y)*V,J[5]=(Z*K-X*Q)*V,J[6]=q*V,J[7]=($*Y-U*Q)*V,J[8]=(W*Q-$*K)*V,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),U=Math.sin(K);return this.set($*Y,$*U,-$*(Y*W+U*X)+W+J,-Z*U,Z*Y,-Z*(-U*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return H8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(o6.makeScale(J,Q)),this}rotate(J){return H8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(o6.makeRotation(-J)),this}translate(J,Q){return H8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(o6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var o6=new h0,XZ=new h0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),YZ=new h0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function SW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=S9(K.r),K.g=S9(K.g),K.b=S9(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=c8(K.r),K.g=c8(K.g),K.b=c8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return H8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return H8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:XZ,fromXYZ:YZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:XZ,fromXYZ:YZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var i0=SW();function S9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function c8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var S8;class D${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(S8===void 0)S8=n8("canvas");S8.width=J.width,S8.height=J.height;let Z=S8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=S8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=n8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=S9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(S9(Q[$]/255)*255);else Q[$]=S9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return v0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var jW=0;class B7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jW++}),this.uuid=z7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(a6(Z[W].image));else K.push(a6(Z[W]))}else K=a6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function a6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return D$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return v0("Texture: Unable to serialize Texture."),{}}var fW=0,r6=new v;class SJ extends v9{constructor(J=SJ.DEFAULT_IMAGE,Q=SJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,U=SJ.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:fW++}),this.uuid=z7(),this.name="",this.source=new B7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new u0(0,0),this.repeat=new u0(1,1),this.center=new u0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new h0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(r6).x}get height(){return this.source.getSize(r6).y}get depth(){return this.source.getSize(r6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){v0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){v0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}SJ.DEFAULT_IMAGE=null;SJ.DEFAULT_MAPPING=300;SJ.DEFAULT_ANISOTROPY=1;class OJ{static{OJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,U=Y[0],H=Y[4],N=Y[8],G=Y[1],q=Y[5],E=Y[9],V=Y[2],I=Y[6],O=Y[10];if(Math.abs(H-G)<0.01&&Math.abs(N-V)<0.01&&Math.abs(E-I)<0.01){if(Math.abs(H+G)<0.1&&Math.abs(N+V)<0.1&&Math.abs(E+I)<0.1&&Math.abs(U+q+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let A=(U+1)/2,w=(q+1)/2,B=(O+1)/2,P=(H+G)/4,L=(N+V)/4,_=(E+I)/4;if(A>w&&A>B)if(A<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(A),Z=P/$,K=L/$;else if(w>B)if(w<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(w),$=P/Z,K=_/Z;else if(B<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(B),$=L/K,Z=_/K;return this.set($,Z,K,Q),this}let F=Math.sqrt((I-E)*(I-E)+(N-V)*(N-V)+(G-H)*(G-H));if(Math.abs(F)<0.001)F=1;return this.x=(I-E)/F,this.y=(N-V)/F,this.z=(G-H)/F,this.w=Math.acos((U+q+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=o0(this.x,J.x,Q.x),this.y=o0(this.y,J.y,Q.y),this.z=o0(this.z,J.z,Q.z),this.w=o0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=o0(this.x,J,Q),this.y=o0(this.y,J,Q),this.z=o0(this.z,J,Q),this.w=o0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(o0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R$ extends v9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new OJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new OJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new SJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new B7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tJ extends R${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class M6 extends SJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class k$ extends SJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WJ{static{WJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,E,V,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,E,V,I)}set(J,Q,$,Z,K,W,X,Y,U,H,N,G,q,E,V,I){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=K,O[5]=W,O[9]=X,O[13]=Y,O[2]=U,O[6]=H,O[10]=N,O[14]=G,O[3]=q,O[7]=E,O[11]=V,O[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/j8.setFromMatrixColumn(J,0).length(),K=1/j8.setFromMatrixColumn(J,1).length(),W=1/j8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let G=W*H,q=W*N,E=X*H,V=X*N;Q[0]=Y*H,Q[4]=-Y*N,Q[8]=U,Q[1]=q+E*U,Q[5]=G-V*U,Q[9]=-X*Y,Q[2]=V-G*U,Q[6]=E+q*U,Q[10]=W*Y}else if(J.order==="YXZ"){let G=Y*H,q=Y*N,E=U*H,V=U*N;Q[0]=G+V*X,Q[4]=E*X-q,Q[8]=W*U,Q[1]=W*N,Q[5]=W*H,Q[9]=-X,Q[2]=q*X-E,Q[6]=V+G*X,Q[10]=W*Y}else if(J.order==="ZXY"){let G=Y*H,q=Y*N,E=U*H,V=U*N;Q[0]=G-V*X,Q[4]=-W*N,Q[8]=E+q*X,Q[1]=q+E*X,Q[5]=W*H,Q[9]=V-G*X,Q[2]=-W*U,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let G=W*H,q=W*N,E=X*H,V=X*N;Q[0]=Y*H,Q[4]=E*U-q,Q[8]=G*U+V,Q[1]=Y*N,Q[5]=V*U+G,Q[9]=q*U-E,Q[2]=-U,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let G=W*Y,q=W*U,E=X*Y,V=X*U;Q[0]=Y*H,Q[4]=V-G*N,Q[8]=E*N+q,Q[1]=N,Q[5]=W*H,Q[9]=-X*H,Q[2]=-U*H,Q[6]=q*N+E,Q[10]=G-V*N}else if(J.order==="XZY"){let G=W*Y,q=W*U,E=X*Y,V=X*U;Q[0]=Y*H,Q[4]=-N,Q[8]=U*H,Q[1]=G*N+V,Q[5]=W*H,Q[9]=q*N-E,Q[2]=E*N-q,Q[6]=X*H,Q[10]=V*N+G}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(vW,J,yW)}lookAt(J,Q,$){let Z=this.elements;if(sJ.subVectors(J,Q),sJ.lengthSq()===0)sJ.z=1;if(sJ.normalize(),l9.crossVectors($,sJ),l9.lengthSq()===0){if(Math.abs($.z)===1)sJ.x+=0.0001;else sJ.z+=0.0001;sJ.normalize(),l9.crossVectors($,sJ)}return l9.normalize(),p7.crossVectors(sJ,l9),Z[0]=l9.x,Z[4]=p7.x,Z[8]=sJ.x,Z[1]=l9.y,Z[5]=p7.y,Z[9]=sJ.y,Z[2]=l9.z,Z[6]=p7.z,Z[10]=sJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],U=$[12],H=$[1],N=$[5],G=$[9],q=$[13],E=$[2],V=$[6],I=$[10],O=$[14],F=$[3],A=$[7],w=$[11],B=$[15],P=Z[0],L=Z[4],_=Z[8],R=Z[12],M=Z[1],d=Z[5],C=Z[9],m=Z[13],a=Z[2],p=Z[6],n=Z[10],i=Z[14],y=Z[3],Q0=Z[7],K0=Z[11],G0=Z[15];return K[0]=W*P+X*M+Y*a+U*y,K[4]=W*L+X*d+Y*p+U*Q0,K[8]=W*_+X*C+Y*n+U*K0,K[12]=W*R+X*m+Y*i+U*G0,K[1]=H*P+N*M+G*a+q*y,K[5]=H*L+N*d+G*p+q*Q0,K[9]=H*_+N*C+G*n+q*K0,K[13]=H*R+N*m+G*i+q*G0,K[2]=E*P+V*M+I*a+O*y,K[6]=E*L+V*d+I*p+O*Q0,K[10]=E*_+V*C+I*n+O*K0,K[14]=E*R+V*m+I*i+O*G0,K[3]=F*P+A*M+w*a+B*y,K[7]=F*L+A*d+w*p+B*Q0,K[11]=F*_+A*C+w*n+B*K0,K[15]=F*R+A*m+w*i+B*G0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],U=J[13],H=J[2],N=J[6],G=J[10],q=J[14],E=J[3],V=J[7],I=J[11],O=J[15],F=Y*q-U*G,A=X*q-U*N,w=X*G-Y*N,B=W*q-U*H,P=W*G-Y*H,L=W*N-X*H;return Q*(V*F-I*A+O*w)-$*(E*F-I*B+O*P)+Z*(E*A-V*B+O*L)-K*(E*w-V*P+I*L)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],U=J[6],H=J[10];return Q*(W*H-X*U)-$*(K*H-X*Y)+Z*(K*U-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=J[9],G=J[10],q=J[11],E=J[12],V=J[13],I=J[14],O=J[15],F=Q*X-$*W,A=Q*Y-Z*W,w=Q*U-K*W,B=$*Y-Z*X,P=$*U-K*X,L=Z*U-K*Y,_=H*V-N*E,R=H*I-G*E,M=H*O-q*E,d=N*I-G*V,C=N*O-q*V,m=G*O-q*I,a=F*m-A*C+w*d+B*M-P*R+L*_;if(a===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let p=1/a;return J[0]=(X*m-Y*C+U*d)*p,J[1]=(Z*C-$*m-K*d)*p,J[2]=(V*L-I*P+O*B)*p,J[3]=(G*P-N*L-q*B)*p,J[4]=(Y*M-W*m-U*R)*p,J[5]=(Q*m-Z*M+K*R)*p,J[6]=(I*w-E*L-O*A)*p,J[7]=(H*L-G*w+q*A)*p,J[8]=(W*C-X*M+U*_)*p,J[9]=($*M-Q*C-K*_)*p,J[10]=(E*P-V*w+O*F)*p,J[11]=(N*w-H*P-q*F)*p,J[12]=(X*R-W*d-Y*_)*p,J[13]=(Q*d-$*R+Z*_)*p,J[14]=(V*A-E*B-I*F)*p,J[15]=(H*B-N*A+G*F)*p,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,U=K*W,H=K*X;return this.set(U*W+$,U*X-Z*Y,U*Y+Z*X,0,U*X+Z*Y,H*X+$,H*Y-Z*W,0,U*Y-Z*X,H*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,U=K+K,H=W+W,N=X+X,G=K*U,q=K*H,E=K*N,V=W*H,I=W*N,O=X*N,F=Y*U,A=Y*H,w=Y*N,B=$.x,P=$.y,L=$.z;return Z[0]=(1-(V+O))*B,Z[1]=(q+w)*B,Z[2]=(E-A)*B,Z[3]=0,Z[4]=(q-w)*P,Z[5]=(1-(G+O))*P,Z[6]=(I+F)*P,Z[7]=0,Z[8]=(E+A)*L,Z[9]=(I-F)*L,Z[10]=(1-(G+V))*L,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=j8.set(Z[0],Z[1],Z[2]).length(),X=j8.set(Z[4],Z[5],Z[6]).length(),Y=j8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;X9.copy(this);let U=1/W,H=1/X,N=1/Y;return X9.elements[0]*=U,X9.elements[1]*=U,X9.elements[2]*=U,X9.elements[4]*=H,X9.elements[5]*=H,X9.elements[6]*=H,X9.elements[8]*=N,X9.elements[9]*=N,X9.elements[10]*=N,Q.setFromRotationMatrix(X9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2*K/(Q-J),N=2*K/($-Z),G=(Q+J)/(Q-J),q=($+Z)/($-Z),E,V;if(Y)E=K/(W-K),V=W*K/(W-K);else if(X===2000)E=-(W+K)/(W-K),V=-2*W*K/(W-K);else if(X===2001)E=-W/(W-K),V=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=G,U[12]=0,U[1]=0,U[5]=N,U[9]=q,U[13]=0,U[2]=0,U[6]=0,U[10]=E,U[14]=V,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2/(Q-J),N=2/($-Z),G=-(Q+J)/(Q-J),q=-($+Z)/($-Z),E,V;if(Y)E=1/(W-K),V=W/(W-K);else if(X===2000)E=-2/(W-K),V=-(W+K)/(W-K);else if(X===2001)E=-1/(W-K),V=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=0,U[12]=G,U[1]=0,U[5]=N,U[9]=0,U[13]=q,U[2]=0,U[6]=0,U[10]=E,U[14]=V,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var j8=new v,X9=new WJ,vW=new v(0,0,0),yW=new v(1,1,1),l9=new v,p7=new v,sJ=new v,UZ=new WJ,HZ=new y9;class D9{constructor(J=0,Q=0,$=0,Z=D9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],U=Z[5],H=Z[9],N=Z[2],G=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(o0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(G,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-o0(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(o0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-N,q),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-o0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(G,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(o0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-o0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(G,U),this._y=Math.atan2(X,K);else this._x=Math.atan2(-H,q),this._y=0;break;default:v0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return UZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(UZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return HZ.setFromEuler(this),this.setFromQuaternion(HZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}D9.DEFAULT_ORDER="XYZ";class M7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var bW=0,qZ=new v,f8=new y9,A9=new WJ,m7=new v,H7=new v,hW=new v,xW=new y9,NZ=new v(1,0,0),GZ=new v(0,1,0),FZ=new v(0,0,1),OZ={type:"added"},gW={type:"removed"},v8={type:"childadded",child:null},t6={type:"childremoved",child:null};class kJ extends v9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:bW++}),this.uuid=z7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kJ.DEFAULT_UP.clone();let J=new v,Q=new D9,$=new y9,Z=new v(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new WJ},normalMatrix:{value:new h0}}),this.matrix=new WJ,this.matrixWorld=new WJ,this.matrixAutoUpdate=kJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return f8.setFromAxisAngle(J,Q),this.quaternion.multiply(f8),this}rotateOnWorldAxis(J,Q){return f8.setFromAxisAngle(J,Q),this.quaternion.premultiply(f8),this}rotateX(J){return this.rotateOnAxis(NZ,J)}rotateY(J){return this.rotateOnAxis(GZ,J)}rotateZ(J){return this.rotateOnAxis(FZ,J)}translateOnAxis(J,Q){return qZ.copy(J).applyQuaternion(this.quaternion),this.position.add(qZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(NZ,J)}translateY(J){return this.translateOnAxis(GZ,J)}translateZ(J){return this.translateOnAxis(FZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(A9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)m7.copy(J);else m7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),H7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)A9.lookAt(H7,m7,this.up);else A9.lookAt(m7,H7,this.up);if(this.quaternion.setFromRotationMatrix(A9),Z)A9.extractRotation(Z.matrixWorld),f8.setFromRotationMatrix(A9),this.quaternion.premultiply(f8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return f0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(OZ),v8.child=J,this.dispatchEvent(v8),v8.child=null;else f0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(gW),t6.child=J,this.dispatchEvent(t6),t6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),A9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),A9.multiply(J.parent.matrixWorld);return J.applyMatrix4(A9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(OZ),v8.child=J,this.dispatchEvent(v8),v8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(H7,J,hW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(H7,xW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let U=0,H=Y.length;U<H;U++){let N=Y[U];K(J.shapes,N)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,U=this.material.length;Y<U;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),U=W(J.textures),H=W(J.images),N=W(J.shapes),G=W(J.skeletons),q=W(J.animations),E=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(H.length>0)$.images=H;if(N.length>0)$.shapes=N;if(G.length>0)$.skeletons=G;if(q.length>0)$.animations=q;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(X){let Y=[];for(let U in X){let H=X[U];delete H.metadata,Y.push(H)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}kJ.DEFAULT_UP=new v(0,1,0);kJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pJ extends kJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var pW={type:"move"};class I7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new pJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new pJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new pJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let V of J.hand.values()){let I=Q.getJointPose(V,$),O=this._getHandJoint(U,V);if(I!==null)O.matrix.fromArray(I.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=I.radius;O.visible=I!==null}let H=U.joints["index-finger-tip"],N=U.joints["thumb-tip"],G=H.position.distanceTo(N.position),q=0.02,E=0.005;if(U.inputState.pinching&&G>q+E)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&G<=q-E)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(pW)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new pJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var wK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},d9={h:0,s:0,l:0},l7={h:0,s:0,l:0};function e6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class c0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,i0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=i0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,i0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=i0.workingColorSpace){if(J=TW(J,1),Q=o0(Q,0,1),$=o0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=e6(W,K,J+0.3333333333333333),this.g=e6(W,K,J),this.b=e6(W,K,J-0.3333333333333333)}return i0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)v0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:v0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else v0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=wK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else v0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=S9(J.r),this.g=S9(J.g),this.b=S9(J.b),this}copyLinearToSRGB(J){return this.r=c8(J.r),this.g=c8(J.g),this.b=c8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return i0.workingToColorSpace(yJ.copy(this),J),Math.round(o0(yJ.r*255,0,255))*65536+Math.round(o0(yJ.g*255,0,255))*256+Math.round(o0(yJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=i0.workingColorSpace){i0.workingToColorSpace(yJ.copy(this),Q);let{r:$,g:Z,b:K}=yJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,U,H=(X+W)/2;if(X===W)Y=0,U=0;else{let N=W-X;switch(U=H<=0.5?N/(W+X):N/(2-W-X),W){case $:Y=(Z-K)/N+(Z<K?6:0);break;case Z:Y=(K-$)/N+2;break;case K:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=U,J.l=H,J}getRGB(J,Q=i0.workingColorSpace){return i0.workingToColorSpace(yJ.copy(this),Q),J.r=yJ.r,J.g=yJ.g,J.b=yJ.b,J}getStyle(J="srgb"){i0.workingToColorSpace(yJ.copy(this),J);let{r:Q,g:$,b:Z}=yJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(d9),this.setHSL(d9.h+J,d9.s+Q,d9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(d9),J.getHSL(l7);let $=s6(d9.h,l7.h,Q),Z=s6(d9.s,l7.s,Q),K=s6(d9.l,l7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var yJ=new c0;c0.NAMES=wK;class e8 extends kJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new D9,this.environmentIntensity=1,this.environmentRotation=new D9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Y9=new v,C9=new v,JQ=new v,P9=new v,y8=new v,b8=new v,EZ=new v,QQ=new v,$Q=new v,ZQ=new v,KQ=new OJ,WQ=new OJ,XQ=new OJ;class rJ{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),Y9.subVectors(J,Q),Z.cross(Y9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){Y9.subVectors(Z,Q),C9.subVectors($,Q),JQ.subVectors(J,Q);let W=Y9.dot(Y9),X=Y9.dot(C9),Y=Y9.dot(JQ),U=C9.dot(C9),H=C9.dot(JQ),N=W*U-X*X;if(N===0)return K.set(0,0,0),null;let G=1/N,q=(U*Y-X*H)*G,E=(W*H-X*Y)*G;return K.set(1-q-E,E,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,P9)===null)return!1;return P9.x>=0&&P9.y>=0&&P9.x+P9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,P9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,P9.x),Y.addScaledVector(W,P9.y),Y.addScaledVector(X,P9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return KQ.setScalar(0),WQ.setScalar(0),XQ.setScalar(0),KQ.fromBufferAttribute(J,Q),WQ.fromBufferAttribute(J,$),XQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(KQ,K.x),W.addScaledVector(WQ,K.y),W.addScaledVector(XQ,K.z),W}static isFrontFacing(J,Q,$,Z){return Y9.subVectors($,Q),C9.subVectors(J,Q),Y9.cross(C9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Y9.subVectors(this.c,this.b),C9.subVectors(this.a,this.b),Y9.cross(C9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return rJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return rJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return rJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return rJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return rJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;y8.subVectors(Z,$),b8.subVectors(K,$),QQ.subVectors(J,$);let Y=y8.dot(QQ),U=b8.dot(QQ);if(Y<=0&&U<=0)return Q.copy($);$Q.subVectors(J,Z);let H=y8.dot($Q),N=b8.dot($Q);if(H>=0&&N<=H)return Q.copy(Z);let G=Y*N-H*U;if(G<=0&&Y>=0&&H<=0)return W=Y/(Y-H),Q.copy($).addScaledVector(y8,W);ZQ.subVectors(J,K);let q=y8.dot(ZQ),E=b8.dot(ZQ);if(E>=0&&q<=E)return Q.copy(K);let V=q*U-Y*E;if(V<=0&&U>=0&&E<=0)return X=U/(U-E),Q.copy($).addScaledVector(b8,X);let I=H*E-q*N;if(I<=0&&N-H>=0&&q-E>=0)return EZ.subVectors(K,Z),X=(N-H)/(N-H+(q-E)),Q.copy(Z).addScaledVector(EZ,X);let O=1/(I+V+G);return W=V*O,X=G*O,Q.copy($).addScaledVector(y8,W).addScaledVector(b8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class b9{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(U9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(U9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=U9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,U9);else U9.fromBufferAttribute(K,W);U9.applyMatrix4(J.matrixWorld),this.expandByPoint(U9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();d7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();d7.copy($.boundingBox)}d7.applyMatrix4(J.matrixWorld),this.union(d7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,U9),U9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(q7),u7.subVectors(this.max,q7),h8.subVectors(J.a,q7),x8.subVectors(J.b,q7),g8.subVectors(J.c,q7),u9.subVectors(x8,h8),c9.subVectors(g8,x8),W8.subVectors(h8,g8);let Q=[0,-u9.z,u9.y,0,-c9.z,c9.y,0,-W8.z,W8.y,u9.z,0,-u9.x,c9.z,0,-c9.x,W8.z,0,-W8.x,-u9.y,u9.x,0,-c9.y,c9.x,0,-W8.y,W8.x,0];if(!YQ(Q,h8,x8,g8,u7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!YQ(Q,h8,x8,g8,u7))return!1;return c7.crossVectors(u9,c9),Q=[c7.x,c7.y,c7.z],YQ(Q,h8,x8,g8,u7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,U9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(U9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return _9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),_9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),_9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),_9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),_9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),_9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),_9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),_9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(_9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var _9=[new v,new v,new v,new v,new v,new v,new v,new v],U9=new v,d7=new b9,h8=new v,x8=new v,g8=new v,u9=new v,c9=new v,W8=new v,q7=new v,u7=new v,c7=new v,X8=new v;function YQ(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){X8.fromArray(J,W);let Y=K.x*Math.abs(X8.x)+K.y*Math.abs(X8.y)+K.z*Math.abs(X8.z),U=Q.dot(X8),H=$.dot(X8),N=Z.dot(X8);if(Math.max(-Math.max(U,H,N),Math.min(U,H,N))>Y)return!1}return!0}var IJ=new v,n7=new u0,mW=0;class oJ extends v9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)n7.fromBufferAttribute(this,Q),n7.applyMatrix3(J),this.setXY(Q,n7.x,n7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)IJ.fromBufferAttribute(this,Q),IJ.applyMatrix3(J),this.setXYZ(Q,IJ.x,IJ.y,IJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)IJ.fromBufferAttribute(this,Q),IJ.applyMatrix4(J),this.setXYZ(Q,IJ.x,IJ.y,IJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)IJ.fromBufferAttribute(this,Q),IJ.applyNormalMatrix(J),this.setXYZ(Q,IJ.x,IJ.y,IJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)IJ.fromBufferAttribute(this,Q),IJ.transformDirection(J),this.setXYZ(Q,IJ.x,IJ.y,IJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=U7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=U7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=U7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=U7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=U7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class I6 extends oJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class A6 extends oJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class lJ extends oJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var lW=new b9,N7=new v,UQ=new v;class D8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else lW.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;N7.subVectors(J,this.center);let Q=N7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(N7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else UQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(N7.copy(J.center).add(UQ)),this.expandByPoint(N7.copy(J.center).sub(UQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var dW=0,aJ=new WJ,HQ=new kJ,p8=new v,iJ=new b9,G7=new b9,TJ=new v;class G9 extends v9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dW++}),this.uuid=z7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((_W(J))?A6:I6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new h0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return aJ.makeRotationFromQuaternion(J),this.applyMatrix4(aJ),this}rotateX(J){return aJ.makeRotationX(J),this.applyMatrix4(aJ),this}rotateY(J){return aJ.makeRotationY(J),this.applyMatrix4(aJ),this}rotateZ(J){return aJ.makeRotationZ(J),this.applyMatrix4(aJ),this}translate(J,Q,$){return aJ.makeTranslation(J,Q,$),this.applyMatrix4(aJ),this}scale(J,Q,$){return aJ.makeScale(J,Q,$),this.applyMatrix4(aJ),this}lookAt(J){return HQ.lookAt(J),HQ.updateMatrix(),this.applyMatrix4(HQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(p8).negate(),this.translate(p8.x,p8.y,p8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new lJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)v0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new b9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(iJ.setFromBufferAttribute(K),this.morphTargetsRelative)TJ.addVectors(this.boundingBox.min,iJ.min),this.boundingBox.expandByPoint(TJ),TJ.addVectors(this.boundingBox.max,iJ.max),this.boundingBox.expandByPoint(TJ);else this.boundingBox.expandByPoint(iJ.min),this.boundingBox.expandByPoint(iJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))f0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new D8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){f0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(iJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(G7.setFromBufferAttribute(X),this.morphTargetsRelative)TJ.addVectors(iJ.min,G7.min),iJ.expandByPoint(TJ),TJ.addVectors(iJ.max,G7.max),iJ.expandByPoint(TJ);else iJ.expandByPoint(G7.min),iJ.expandByPoint(G7.max)}iJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)TJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(TJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let U=0,H=X.count;U<H;U++){if(TJ.fromBufferAttribute(X,U),Y)p8.fromBufferAttribute(J,U),TJ.add(p8);Z=Math.max(Z,$.distanceToSquared(TJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))f0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){f0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new oJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<$.count;_++)X[_]=new v,Y[_]=new v;let U=new v,H=new v,N=new v,G=new u0,q=new u0,E=new u0,V=new v,I=new v;function O(_,R,M){U.fromBufferAttribute($,_),H.fromBufferAttribute($,R),N.fromBufferAttribute($,M),G.fromBufferAttribute(K,_),q.fromBufferAttribute(K,R),E.fromBufferAttribute(K,M),H.sub(U),N.sub(U),q.sub(G),E.sub(G);let d=1/(q.x*E.y-E.x*q.y);if(!isFinite(d))return;V.copy(H).multiplyScalar(E.y).addScaledVector(N,-q.y).multiplyScalar(d),I.copy(N).multiplyScalar(q.x).addScaledVector(H,-E.x).multiplyScalar(d),X[_].add(V),X[R].add(V),X[M].add(V),Y[_].add(I),Y[R].add(I),Y[M].add(I)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let _=0,R=F.length;_<R;++_){let M=F[_],d=M.start,C=M.count;for(let m=d,a=d+C;m<a;m+=3)O(J.getX(m+0),J.getX(m+1),J.getX(m+2))}let A=new v,w=new v,B=new v,P=new v;function L(_){B.fromBufferAttribute(Z,_),P.copy(B);let R=X[_];A.copy(R),A.sub(B.multiplyScalar(B.dot(R))).normalize(),w.crossVectors(P,R);let d=w.dot(Y[_])<0?-1:1;W.setXYZW(_,A.x,A.y,A.z,d)}for(let _=0,R=F.length;_<R;++_){let M=F[_],d=M.start,C=M.count;for(let m=d,a=d+C;m<a;m+=3)L(J.getX(m+0)),L(J.getX(m+1)),L(J.getX(m+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new oJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let G=0,q=$.count;G<q;G++)$.setXYZ(G,0,0,0);let Z=new v,K=new v,W=new v,X=new v,Y=new v,U=new v,H=new v,N=new v;if(J)for(let G=0,q=J.count;G<q;G+=3){let E=J.getX(G+0),V=J.getX(G+1),I=J.getX(G+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,V),W.fromBufferAttribute(Q,I),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),X.fromBufferAttribute($,E),Y.fromBufferAttribute($,V),U.fromBufferAttribute($,I),X.add(H),Y.add(H),U.add(H),$.setXYZ(E,X.x,X.y,X.z),$.setXYZ(V,Y.x,Y.y,Y.z),$.setXYZ(I,U.x,U.y,U.z)}else for(let G=0,q=Q.count;G<q;G+=3)Z.fromBufferAttribute(Q,G+0),K.fromBufferAttribute(Q,G+1),W.fromBufferAttribute(Q,G+2),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),$.setXYZ(G+0,H.x,H.y,H.z),$.setXYZ(G+1,H.x,H.y,H.z),$.setXYZ(G+2,H.x,H.y,H.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)TJ.fromBufferAttribute(J,Q),TJ.normalize(),J.setXYZ(Q,TJ.x,TJ.y,TJ.z)}toNonIndexed(){function J(X,Y){let{array:U,itemSize:H,normalized:N}=X,G=new U.constructor(Y.length*H),q=0,E=0;for(let V=0,I=Y.length;V<I;V++){if(X.isInterleavedBufferAttribute)q=Y[V]*X.data.stride+X.offset;else q=Y[V]*H;for(let O=0;O<H;O++)G[E++]=U[q++]}return new oJ(G,H,N)}if(this.index===null)return v0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new G9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],U=J(Y,$);Q.setAttribute(X,U)}let K=this.morphAttributes;for(let X in K){let Y=[],U=K[X];for(let H=0,N=U.length;H<N;H++){let G=U[H],q=J(G,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let U=W[X];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],H=[];for(let N=0,G=U.length;N<G;N++){let q=U[N];H.push(q.toJSON(J.data))}if(H.length>0)Z[Y]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone(Q))}let K=J.morphAttributes;for(let U in K){let H=[],N=K[U];for(let G=0,q=N.length;G<q;G++)H.push(N[G].clone(Q));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let N=W[U];this.addGroup(N.start,N.count,N.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var uW=0;class a9 extends v9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:uW++}),this.uuid=z7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new c0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){v0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){v0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new c0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new u0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new u0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var w9=new v,qQ=new v,s7=new v,n9=new v,NQ=new v,i7=new v,GQ=new v;class C6{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,w9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=w9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return w9.copy(this.origin).addScaledVector(this.direction,Q),w9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){qQ.copy(J).add(Q).multiplyScalar(0.5),s7.copy(Q).sub(J).normalize(),n9.copy(this.origin).sub(qQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(s7),X=n9.dot(this.direction),Y=-n9.dot(s7),U=n9.lengthSq(),H=Math.abs(1-W*W),N,G,q,E;if(H>0)if(N=W*Y-X,G=W*X-Y,E=K*H,N>=0)if(G>=-E)if(G<=E){let V=1/H;N*=V,G*=V,q=N*(N+W*G+2*X)+G*(W*N+G+2*Y)+U}else G=K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;else G=-K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;else if(G<=-E)N=Math.max(0,-(-W*K+X)),G=N>0?-K:Math.min(Math.max(-K,-Y),K),q=-N*N+G*(G+2*Y)+U;else if(G<=E)N=0,G=Math.min(Math.max(-K,-Y),K),q=G*(G+2*Y)+U;else N=Math.max(0,-(W*K+X)),G=N>0?K:Math.min(Math.max(-K,-Y),K),q=-N*N+G*(G+2*Y)+U;else G=W>0?-K:K,N=Math.max(0,-(W*G+X)),q=-N*N+G*(G+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(qQ).addScaledVector(s7,G);return q}intersectSphere(J,Q){w9.subVectors(J.center,this.origin);let $=w9.dot(this.direction),Z=w9.dot(w9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,U=1/this.direction.x,H=1/this.direction.y,N=1/this.direction.z,G=this.origin;if(U>=0)$=(J.min.x-G.x)*U,Z=(J.max.x-G.x)*U;else $=(J.max.x-G.x)*U,Z=(J.min.x-G.x)*U;if(H>=0)K=(J.min.y-G.y)*H,W=(J.max.y-G.y)*H;else K=(J.max.y-G.y)*H,W=(J.min.y-G.y)*H;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)X=(J.min.z-G.z)*N,Y=(J.max.z-G.z)*N;else X=(J.max.z-G.z)*N,Y=(J.min.z-G.z)*N;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,w9)!==null}intersectTriangle(J,Q,$,Z,K){NQ.subVectors(Q,J),i7.subVectors($,J),GQ.crossVectors(NQ,i7);let W=this.direction.dot(GQ),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;n9.subVectors(this.origin,J);let Y=X*this.direction.dot(i7.crossVectors(n9,i7));if(Y<0)return null;let U=X*this.direction.dot(NQ.cross(n9));if(U<0)return null;if(Y+U>W)return null;let H=-X*n9.dot(GQ);if(H<0)return null;return this.at(H/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jJ extends a9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new c0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new D9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var DZ=new WJ,Y8=new C6,o7=new D8,RZ=new v,a7=new v,r7=new v,t7=new v,FQ=new v,e7=new v,kZ=new v,J6=new v;class j0 extends kJ{constructor(J=new G9,Q=new jJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){e7.set(0,0,0);for(let Y=0,U=K.length;Y<U;Y++){let H=X[Y],N=K[Y];if(H===0)continue;if(FQ.fromBufferAttribute(N,J),W)e7.addScaledVector(FQ,H);else e7.addScaledVector(FQ.sub(Q),H)}Q.add(e7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(o7.copy($.boundingSphere),o7.applyMatrix4(K),Y8.copy(J.ray).recast(J.near),o7.containsPoint(Y8.origin)===!1){if(Y8.intersectSphere(o7,RZ)===null)return;if(Y8.origin.distanceToSquared(RZ)>(J.far-J.near)**2)return}if(DZ.copy(K).invert(),Y8.copy(J.ray).applyMatrix4(DZ),$.boundingBox!==null){if(Y8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,Y8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,N=K.attributes.normal,G=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let E=0,V=G.length;E<V;E++){let I=G[E],O=W[I.materialIndex],F=Math.max(I.start,q.start),A=Math.min(X.count,Math.min(I.start+I.count,q.start+q.count));for(let w=F,B=A;w<B;w+=3){let P=X.getX(w),L=X.getX(w+1),_=X.getX(w+2);if(Z=Q6(this,O,J,$,U,H,N,P,L,_),Z)Z.faceIndex=Math.floor(w/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let E=Math.max(0,q.start),V=Math.min(X.count,q.start+q.count);for(let I=E,O=V;I<O;I+=3){let F=X.getX(I),A=X.getX(I+1),w=X.getX(I+2);if(Z=Q6(this,W,J,$,U,H,N,F,A,w),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let E=0,V=G.length;E<V;E++){let I=G[E],O=W[I.materialIndex],F=Math.max(I.start,q.start),A=Math.min(Y.count,Math.min(I.start+I.count,q.start+q.count));for(let w=F,B=A;w<B;w+=3){let P=w,L=w+1,_=w+2;if(Z=Q6(this,O,J,$,U,H,N,P,L,_),Z)Z.faceIndex=Math.floor(w/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let E=Math.max(0,q.start),V=Math.min(Y.count,q.start+q.count);for(let I=E,O=V;I<O;I+=3){let F=I,A=I+1,w=I+2;if(Z=Q6(this,W,J,$,U,H,N,F,A,w),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function cW(J,Q,$,Z,K,W,X,Y){let U;if(Q.side===1)U=Z.intersectTriangle(X,W,K,!0,Y);else U=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(U===null)return null;J6.copy(Y),J6.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(J6);if(H<$.near||H>$.far)return null;return{distance:H,point:J6.clone(),object:J}}function Q6(J,Q,$,Z,K,W,X,Y,U,H){J.getVertexPosition(Y,a7),J.getVertexPosition(U,r7),J.getVertexPosition(H,t7);let N=cW(J,Q,$,Z,a7,r7,t7,kZ);if(N){let G=new v;if(rJ.getBarycoord(kZ,a7,r7,t7,G),K)N.uv=rJ.getInterpolatedAttribute(K,Y,U,H,G,new u0);if(W)N.uv1=rJ.getInterpolatedAttribute(W,Y,U,H,G,new u0);if(X){if(N.normal=rJ.getInterpolatedAttribute(X,Y,U,H,G,new v),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let q={a:Y,b:U,c:H,normal:new v,materialIndex:0};rJ.getNormal(a7,r7,t7,q.normal),N.face=q,N.barycoord=G}return N}class P6 extends SJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,U=1003,H=1003,N,G){super(null,W,X,Y,U,H,Z,K,N,G);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H6 extends oJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var m8=new WJ,LZ=new WJ,$6=[],VZ=new b9,nW=new WJ,F7=new j0,O7=new D8;class R8 extends j0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new H6(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,nW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new b9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,m8),VZ.copy(J.boundingBox).applyMatrix4(m8),this.boundingBox.union(VZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new D8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,m8),O7.copy(J.boundingSphere).applyMatrix4(m8),this.boundingSphere.union(O7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(F7.geometry=this.geometry,F7.material=this.material,F7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(O7.copy(this.boundingSphere),O7.applyMatrix4($),J.ray.intersectsSphere(O7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,m8),LZ.multiplyMatrices($,m8),F7.matrixWorld=LZ,F7.raycast(J,$6);for(let W=0,X=$6.length;W<X;W++){let Y=$6[W];Y.instanceId=K,Y.object=this,Q.push(Y)}$6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new H6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new P6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let U=0;U<$.length;U++)W+=$[U];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var OQ=new v,sW=new v,iW=new h0;class T9{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=OQ.subVectors($,Q).cross(sW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(OQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||iW.getNormalMatrix(J),Z=this.coplanarPoint(OQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var U8=new D8,oW=new u0(0.5,0.5),Z6=new v;class A7{constructor(J=new T9,Q=new T9,$=new T9,Z=new T9,K=new T9,W=new T9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],U=K[3],H=K[4],N=K[5],G=K[6],q=K[7],E=K[8],V=K[9],I=K[10],O=K[11],F=K[12],A=K[13],w=K[14],B=K[15];if(Z[0].setComponents(U-W,q-H,O-E,B-F).normalize(),Z[1].setComponents(U+W,q+H,O+E,B+F).normalize(),Z[2].setComponents(U+X,q+N,O+V,B+A).normalize(),Z[3].setComponents(U-X,q-N,O-V,B-A).normalize(),$)Z[4].setComponents(Y,G,I,w).normalize(),Z[5].setComponents(U-Y,q-G,O-I,B-w).normalize();else if(Z[4].setComponents(U-Y,q-G,O-I,B-w).normalize(),Q===2000)Z[5].setComponents(U+Y,q+G,O+I,B+w).normalize();else if(Q===2001)Z[5].setComponents(Y,G,I,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();U8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();U8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(U8)}intersectsSprite(J){U8.center.set(0,0,0);let Q=oW.distanceTo(J.center);return U8.radius=0.7071067811865476+Q,U8.applyMatrix4(J.matrixWorld),this.intersectsSphere(U8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(Z6.x=Z.normal.x>0?J.max.x:J.min.x,Z6.y=Z.normal.y>0?J.max.y:J.min.y,Z6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(Z6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _6 extends SJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,U,H){super(J,Q,$,Z,K,W,X,Y,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class V9 extends SJ{constructor(J,Q,$,Z,K,W,X,Y,U){super(J,Q,$,Z,K,W,X,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class r9 extends SJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,U,H=1026,N=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let G={width:J,height:Q,depth:N};super(G,Z,K,W,X,Y,H,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new B7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class L$ extends r9{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,U=1026){let H={width:J,height:J,depth:1},N=[H,H,H,H,H,H];super(J,J,Q,$,Z,K,W,X,Y,U);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class w6 extends SJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class EJ extends G9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],U=[],H=[],N=[],G=0,q=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new lJ(U,3)),this.setAttribute("normal",new lJ(H,3)),this.setAttribute("uv",new lJ(N,2));function E(V,I,O,F,A,w,B,P,L,_,R){let M=w/L,d=B/_,C=w/2,m=B/2,a=P/2,p=L+1,n=_+1,i=0,y=0,Q0=new v;for(let K0=0;K0<n;K0++){let G0=K0*d-m;for(let z0=0;z0<p;z0++){let B0=z0*M-C;Q0[V]=B0*F,Q0[I]=G0*A,Q0[O]=a,U.push(Q0.x,Q0.y,Q0.z),Q0[V]=0,Q0[I]=0,Q0[O]=P>0?1:-1,H.push(Q0.x,Q0.y,Q0.z),N.push(z0/L),N.push(1-K0/_),i+=1}}for(let K0=0;K0<_;K0++)for(let G0=0;G0<L;G0++){let z0=G+G0+p*K0,B0=G+G0+p*(K0+1),qJ=G+(G0+1)+p*(K0+1),a0=G+(G0+1)+p*K0;Y.push(z0,B0,a0),Y.push(B0,qJ,a0),y+=6}X.addGroup(q,y,R),q+=y,G+=i}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new EJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class h9 extends G9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let U=this;Z=Math.floor(Z),K=Math.floor(K);let H=[],N=[],G=[],q=[],E=0,V=[],I=$/2,O=0;if(F(),W===!1){if(J>0)A(!0);if(Q>0)A(!1)}this.setIndex(H),this.setAttribute("position",new lJ(N,3)),this.setAttribute("normal",new lJ(G,3)),this.setAttribute("uv",new lJ(q,2));function F(){let w=new v,B=new v,P=0,L=(Q-J)/$;for(let _=0;_<=K;_++){let R=[],M=_/K,d=M*(Q-J)+J;for(let C=0;C<=Z;C++){let m=C/Z,a=m*Y+X,p=Math.sin(a),n=Math.cos(a);B.x=d*p,B.y=-M*$+I,B.z=d*n,N.push(B.x,B.y,B.z),w.set(p,L,n).normalize(),G.push(w.x,w.y,w.z),q.push(m,1-M),R.push(E++)}V.push(R)}for(let _=0;_<Z;_++)for(let R=0;R<K;R++){let M=V[R][_],d=V[R+1][_],C=V[R+1][_+1],m=V[R][_+1];if(J>0||R!==0)H.push(M,d,m),P+=3;if(Q>0||R!==K-1)H.push(d,C,m),P+=3}U.addGroup(O,P,0),O+=P}function A(w){let B=E,P=new u0,L=new v,_=0,R=w===!0?J:Q,M=w===!0?1:-1;for(let C=1;C<=Z;C++)N.push(0,I*M,0),G.push(0,M,0),q.push(0.5,0.5),E++;let d=E;for(let C=0;C<=Z;C++){let a=C/Z*Y+X,p=Math.cos(a),n=Math.sin(a);L.x=R*n,L.y=I*M,L.z=R*p,N.push(L.x,L.y,L.z),G.push(0,M,0),P.x=p*0.5+0.5,P.y=n*0.5*M+0.5,q.push(P.x,P.y),E++}for(let C=0;C<Z;C++){let m=B+C,a=d+C;if(w===!0)H.push(a,a+1,m);else H.push(a+1,a,m);_+=3}U.addGroup(O,_,w===!0?1:2),O+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class dJ extends G9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),U=X+1,H=Y+1,N=J/X,G=Q/Y,q=[],E=[],V=[],I=[];for(let O=0;O<H;O++){let F=O*G-W;for(let A=0;A<U;A++){let w=A*N-K;E.push(w,-F,0),V.push(0,0,1),I.push(A/X),I.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let F=0;F<X;F++){let A=F+U*O,w=F+U*(O+1),B=F+1+U*(O+1),P=F+1+U*O;q.push(A,w,P),q.push(w,B,P)}this.setIndex(q),this.setAttribute("position",new lJ(E,3)),this.setAttribute("normal",new lJ(V,3)),this.setAttribute("uv",new lJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new dJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function k8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(zZ(K))if(K.isRenderTargetTexture)v0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(zZ(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function xJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=k8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function zZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function aW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function V$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return i0.workingColorSpace}var TK={clone:k8,merge:xJ},rW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class eJ extends a9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rW,this.fragmentShader=tW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=k8(J.uniforms),this.uniformsGroups=aW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new c0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new u0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new v().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new OJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new h0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new WJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class z$ extends eJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CJ extends a9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new c0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new c0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new u0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new D9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class T6 extends a9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new c0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new c0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new u0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new D9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class B$ extends a9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class M$ extends a9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function K6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class L8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class I$ extends L8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let U=($-Q)*0.5,H=this.valueSize;this._weightPrev=U/(Q-X),this._weightNext=U/(Y-$),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this._offsetPrev,N=this._offsetNext,G=this._weightPrev,q=this._weightNext,E=($-Q)/(Z-Q),V=E*E,I=V*E,O=-G*I+2*G*V-G*E,F=(1+G)*I+(-1.5-2*G)*V+(-0.5+G)*E+1,A=(-1-q)*I+(1.5+q)*V+0.5*E,w=q*I-q*V;for(let B=0;B!==X;++B)K[B]=O*W[H+B]+F*W[U+B]+A*W[Y+B]+w*W[N+B];return K}}class A$ extends L8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=($-Q)/(Z-Q),N=1-H;for(let G=0;G!==X;++G)K[G]=W[U+G]*N+W[Y+G]*H;return K}}class C$ extends L8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class P$ extends L8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this.inTangents,N=this.outTangents;if(!H||!N){let E=($-Q)/(Z-Q),V=1-E;for(let I=0;I!==X;++I)K[I]=W[U+I]*V+W[Y+I]*E;return K}let G=X*2,q=J-1;for(let E=0;E!==X;++E){let V=W[U+E],I=W[Y+E],O=q*G+E*2,F=N[O],A=N[O+1],w=J*G+E*2,B=H[w],P=H[w+1],L=($-Q)/(Z-Q),_,R,M,d,C;for(let m=0;m<8;m++){_=L*L,R=_*L,M=1-L,d=M*M,C=d*M;let p=C*Q+3*d*L*F+3*M*_*B+R*Z-$;if(Math.abs(p)<0.0000000001)break;let n=3*d*(F-Q)+6*M*L*(B-F)+3*_*(Z-B);if(Math.abs(n)<0.0000000001)break;L=L-p/n,L=Math.max(0,Math.min(1,L))}K[E]=C*V+3*d*L*A+3*M*_*P+R*I}return K}}class J9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=K6(Q,this.TimeBufferType),this.values=K6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:K6(J.times,Array),values:K6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new C$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new I$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new P$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return v0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)f0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)f0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){f0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){f0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(wW(Z))for(let X=0,Y=Z.length;X!==Y;++X){let U=Z[X];if(isNaN(U)){f0("KeyframeTrack: Value is not a valid number.",this,X,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,U=J[X],H=J[X+1];if(U!==H&&(X!==1||U!==J[0]))if(!Z){let N=X*$,G=N-$,q=N+$;for(let E=0;E!==$;++E){let V=Q[N+E];if(V!==Q[G+E]||V!==Q[q+E]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let N=X*$,G=W*$;for(let q=0;q!==$;++q)Q[G+q]=Q[N+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,U=0;U!==$;++U)Q[Y+U]=Q[X+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}J9.prototype.ValueTypeName="";J9.prototype.TimeBufferType=Float32Array;J9.prototype.ValueBufferType=Float32Array;J9.prototype.DefaultInterpolation=2301;class V8 extends J9{constructor(J,Q,$){super(J,Q,$)}}V8.prototype.ValueTypeName="bool";V8.prototype.ValueBufferType=Array;V8.prototype.DefaultInterpolation=2300;V8.prototype.InterpolantFactoryMethodLinear=void 0;V8.prototype.InterpolantFactoryMethodSmooth=void 0;class _$ extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}_$.prototype.ValueTypeName="color";class w$ extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}w$.prototype.ValueTypeName="number";class T$ extends L8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),U=J*X;for(let H=U+X;U!==H;U+=4)y9.slerpFlat(K,0,W,U-X,W,U,Y);return K}}class S6 extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new T$(this.times,this.values,this.getValueSize(),J)}}S6.prototype.ValueTypeName="quaternion";S6.prototype.InterpolantFactoryMethodSmooth=void 0;class z8 extends J9{constructor(J,Q,$){super(J,Q,$)}}z8.prototype.ValueTypeName="string";z8.prototype.ValueBufferType=Array;z8.prototype.DefaultInterpolation=2300;z8.prototype.InterpolantFactoryMethodLinear=void 0;z8.prototype.InterpolantFactoryMethodSmooth=void 0;class S$ extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}S$.prototype.ValueTypeName="vector";var Y6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(BZ(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(BZ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function BZ(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class j${constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(H){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,X)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),Y)return Y(H);return H},this.setURLModifier=function(H){return Y=H,this},this.addHandler=function(H,N){return U.push(H,N),this},this.removeHandler=function(H){let N=U.indexOf(H);if(N!==-1)U.splice(N,2);return this},this.getHandler=function(H){for(let N=0,G=U.length;N<G;N+=2){let q=U[N],E=U[N+1];if(q.global)q.lastIndex=0;if(q.test(H))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var SK=new j$;class C7{constructor(J){if(this.manager=J!==void 0?J:SK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}C7.DEFAULT_MATERIAL_NAME="__DEFAULT";var l8=new WeakMap;class f$ extends C7{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=Y6.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let N=l8.get(W);if(N===void 0)N=[],l8.set(W,N);N.push({onLoad:Q,onError:Z})}return W}let X=n8("img");function Y(){if(H(),Q)Q(this);let N=l8.get(this)||[];for(let G=0;G<N.length;G++){let q=N[G];if(q.onLoad)q.onLoad(this)}l8.delete(this),K.manager.itemEnd(J)}function U(N){if(H(),Z)Z(N);Y6.remove(`image:${J}`);let G=l8.get(this)||[];for(let q=0;q<G.length;q++){let E=G[q];if(E.onError)E.onError(N)}l8.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function H(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",U,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",U,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return Y6.add(`image:${J}`,X),K.manager.itemStart(J),X.src=J,X}}class j6 extends C7{constructor(J){super(J)}load(J,Q,$,Z){let K=new SJ,W=new f$(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if(K.image=X,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class f6 extends kJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new c0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var EQ=new WJ,MZ=new v,IZ=new v;class v${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new u0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new WJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new A7,this._frameExtents=new u0(1,1),this._viewportCount=1,this._viewports=[new OJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(MZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(MZ),IZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(IZ),Q.updateMatrixWorld(),EQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(EQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(EQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var W6=new v,X6=new y9,E9=new v;class v6 extends kJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new WJ,this.projectionMatrix=new WJ,this.projectionMatrixInverse=new WJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(W6,X6,E9),E9.x===1&&E9.y===1&&E9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(W6,X6,E9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(W6,X6,E9),E9.x===1&&E9.y===1&&E9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(W6,X6,E9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var s9=new v,AZ=new u0,CZ=new u0;class bJ extends v6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=U6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(n6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return U6*2*Math.atan(Math.tan(n6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){s9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(s9.x,s9.y).multiplyScalar(-J/s9.z),s9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(s9.x,s9.y).multiplyScalar(-J/s9.z)}getViewSize(J,Q){return this.getViewBounds(J,AZ,CZ),Q.subVectors(CZ,AZ)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(n6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/U,Z*=W.width/Y,$*=W.height/U}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class jK extends v${constructor(){super(new bJ(90,1,0.5,500));this.isPointLightShadow=!0}}class y6 extends f6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new jK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class P7 extends v6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,X-=H*this.view.offsetY,Y=X-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class fK extends v${constructor(){super(new P7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class J7 extends f6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kJ.DEFAULT_UP),this.updateMatrix(),this.target=new kJ,this.shadow=new fK}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var d8=-90,u8=1;class y$ extends kJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new bJ(d8,u8,J,Q);Z.layers=this.layers,this.add(Z);let K=new bJ(d8,u8,J,Q);K.layers=this.layers,this.add(K);let W=new bJ(d8,u8,J,Q);W.layers=this.layers,this.add(W);let X=new bJ(d8,u8,J,Q);X.layers=this.layers,this.add(X);let Y=new bJ(d8,u8,J,Q);Y.layers=this.layers,this.add(Y);let U=new bJ(d8,u8,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,U,H]=this.children,N=J.getRenderTarget(),G=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let V=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=V,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,H),J.setRenderTarget(N,G,q),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class b$ extends bJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var h$="\\[\\]\\.:\\/",eW=new RegExp("["+h$+"]","g"),x$="[^"+h$+"]",JX="[^"+h$.replace("\\.","")+"]",QX=/((?:WC+[\/:])*)/.source.replace("WC",x$),$X=/(WCOD+)?/.source.replace("WCOD",JX),ZX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",x$),KX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",x$),WX=new RegExp("^"+QX+$X+ZX+KX+"$"),XX=["material","materials","bones","map"];class vK{constructor(J,Q,$){let Z=$||ZJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class ZJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||ZJ.parseTrackName(Q),this.node=ZJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new ZJ(J,Q,$);else return new ZJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(eW,"")}static parseTrackName(J){let Q=WX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(XX.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=ZJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){v0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){f0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){f0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){f0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){f0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){f0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){f0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=Q.nodeName;f0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){f0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ZJ.Composite=vK;ZJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ZJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ZJ.prototype.GetterByBindingType=[ZJ.prototype._getValue_direct,ZJ.prototype._getValue_array,ZJ.prototype._getValue_arrayElement,ZJ.prototype._getValue_toArray];ZJ.prototype.SetterByBindingTypeAndVersioning=[[ZJ.prototype._setValue_direct,ZJ.prototype._setValue_direct_setNeedsUpdate,ZJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ZJ.prototype._setValue_array,ZJ.prototype._setValue_array_setNeedsUpdate,ZJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ZJ.prototype._setValue_arrayElement,ZJ.prototype._setValue_arrayElement_setNeedsUpdate,ZJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ZJ.prototype._setValue_fromArray,ZJ.prototype._setValue_fromArray_setNeedsUpdate,ZJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qq=new Float32Array(1);var PZ=new WJ;class b6{constructor(J,Q,$=0,Z=1/0){this.ray=new C6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new M7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else f0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return PZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(PZ),this}intersectObject(J,Q=!0,$=[]){return DQ(J,this,$,Q),$.sort(_Z),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)DQ(J[Z],this,$,Q);return $.sort(_Z),$}}function _Z(J,Q){return J.distance-Q.distance}function DQ(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)DQ(W[X],Q,$,!0)}}class g${static{g$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function p$(J,Q,$,Z){let K=YX(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function YX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)v0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function ZW(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function UX(J){let Q=new WeakMap;function $(Y,U){let{array:H,usage:N}=Y,G=H.byteLength,q=J.createBuffer();J.bindBuffer(U,q),J.bufferData(U,H,N),Y.onUploadCallback();let E;if(H instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)E=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)E=J.SHORT;else if(H instanceof Uint32Array)E=J.UNSIGNED_INT;else if(H instanceof Int32Array)E=J.INT;else if(H instanceof Int8Array)E=J.BYTE;else if(H instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:q,type:E,bytesPerElement:H.BYTES_PER_ELEMENT,version:Y.version,size:G}}function Z(Y,U,H){let{array:N,updateRanges:G}=U;if(J.bindBuffer(H,Y),G.length===0)J.bufferSubData(H,0,N);else{G.sort((E,V)=>E.start-V.start);let q=0;for(let E=1;E<G.length;E++){let V=G[q],I=G[E];if(I.start<=V.start+V.count+1)V.count=Math.max(V.count,I.start+I.count-V.start);else++q,G[q]=I}G.length=q+1;for(let E=0,V=G.length;E<V;E++){let I=G[E];J.bufferSubData(H,I.start*N.BYTES_PER_ELEMENT,N,I.start,I.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function X(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let H=Q.get(Y);if(H===void 0)Q.set(Y,$(Y,U));else if(H.version<Y.version){if(H.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,Y,U),H.version=Y.version}}return{get:K,remove:W,update:X}}var HX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qX=`#ifdef USE_ALPHAHASH
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
#endif`,NX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EX=`#ifdef USE_AOMAP
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
#endif`,DX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RX=`#ifdef USE_BATCHING
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
#endif`,kX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BX=`#ifdef USE_IRIDESCENCE
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
#endif`,MX=`#ifdef USE_BUMPMAP
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
#endif`,IX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_X=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jX=`#define PI 3.141592653589793
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
} // validated`,fX=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vX=`vec3 transformedNormal = objectNormal;
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
#endif`,yX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gX="gl_FragColor = linearToOutputTexel( gl_FragColor );",pX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mX=`#ifdef USE_ENVMAP
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
#endif`,lX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dX=`#ifdef USE_ENVMAP
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
#endif`,uX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cX=`#ifdef USE_ENVMAP
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
#endif`,nX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aX=`#ifdef USE_GRADIENTMAP
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
}`,rX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JY=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,QY=`#ifdef USE_ENVMAP
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
#endif`,$Y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KY=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XY=`PhysicalMaterial material;
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
#endif`,YY=`uniform sampler2D dfgLUT;
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
}`,UY=`
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
#endif`,HY=`#if defined( RE_IndirectDiffuse )
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
#endif`,qY=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NY=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LY=`#if defined( USE_POINTS_UV )
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
#endif`,VY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AY=`#ifdef USE_MORPHTARGETS
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
#endif`,CY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_Y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jY=`#ifdef USE_NORMALMAP
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
#endif`,fY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iY=`float getShadowMask() {
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
}`,oY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aY=`#ifdef USE_SKINNING
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
#endif`,rY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tY=`#ifdef USE_SKINNING
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
#endif`,eY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$U=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZU=`#ifdef USE_TRANSMISSION
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
#endif`,KU=`#ifdef USE_TRANSMISSION
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
#endif`,WU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,HU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qU=`uniform sampler2D t2D;
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
}`,NU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EU=`#include <common>
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
}`,DU=`#if DEPTH_PACKING == 3200
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
}`,RU=`#define DISTANCE
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
}`,kU=`#define DISTANCE
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
}`,LU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zU=`uniform float scale;
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
}`,BU=`uniform vec3 diffuse;
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
}`,MU=`#include <common>
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
}`,IU=`uniform vec3 diffuse;
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
}`,AU=`#define LAMBERT
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
}`,CU=`#define LAMBERT
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
}`,PU=`#define MATCAP
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
}`,_U=`#define MATCAP
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
}`,wU=`#define NORMAL
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
}`,TU=`#define NORMAL
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
}`,SU=`#define PHONG
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
}`,jU=`#define PHONG
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
}`,fU=`#define STANDARD
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
}`,vU=`#define STANDARD
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
}`,yU=`#define TOON
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
}`,bU=`#define TOON
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
}`,hU=`uniform float size;
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
}`,xU=`uniform vec3 diffuse;
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
}`,gU=`#include <common>
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
}`,pU=`uniform vec3 color;
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
}`,mU=`uniform float rotation;
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
}`,lU=`uniform vec3 diffuse;
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
}`,l0={alphahash_fragment:HX,alphahash_pars_fragment:qX,alphamap_fragment:NX,alphamap_pars_fragment:GX,alphatest_fragment:FX,alphatest_pars_fragment:OX,aomap_fragment:EX,aomap_pars_fragment:DX,batching_pars_vertex:RX,batching_vertex:kX,begin_vertex:LX,beginnormal_vertex:VX,bsdfs:zX,iridescence_fragment:BX,bumpmap_pars_fragment:MX,clipping_planes_fragment:IX,clipping_planes_pars_fragment:AX,clipping_planes_pars_vertex:CX,clipping_planes_vertex:PX,color_fragment:_X,color_pars_fragment:wX,color_pars_vertex:TX,color_vertex:SX,common:jX,cube_uv_reflection_fragment:fX,defaultnormal_vertex:vX,displacementmap_pars_vertex:yX,displacementmap_vertex:bX,emissivemap_fragment:hX,emissivemap_pars_fragment:xX,colorspace_fragment:gX,colorspace_pars_fragment:pX,envmap_fragment:mX,envmap_common_pars_fragment:lX,envmap_pars_fragment:dX,envmap_pars_vertex:uX,envmap_physical_pars_fragment:QY,envmap_vertex:cX,fog_vertex:nX,fog_pars_vertex:sX,fog_fragment:iX,fog_pars_fragment:oX,gradientmap_pars_fragment:aX,lightmap_pars_fragment:rX,lights_lambert_fragment:tX,lights_lambert_pars_fragment:eX,lights_pars_begin:JY,lights_toon_fragment:$Y,lights_toon_pars_fragment:ZY,lights_phong_fragment:KY,lights_phong_pars_fragment:WY,lights_physical_fragment:XY,lights_physical_pars_fragment:YY,lights_fragment_begin:UY,lights_fragment_maps:HY,lights_fragment_end:qY,lightprobes_pars_fragment:NY,logdepthbuf_fragment:GY,logdepthbuf_pars_fragment:FY,logdepthbuf_pars_vertex:OY,logdepthbuf_vertex:EY,map_fragment:DY,map_pars_fragment:RY,map_particle_fragment:kY,map_particle_pars_fragment:LY,metalnessmap_fragment:VY,metalnessmap_pars_fragment:zY,morphinstance_vertex:BY,morphcolor_vertex:MY,morphnormal_vertex:IY,morphtarget_pars_vertex:AY,morphtarget_vertex:CY,normal_fragment_begin:PY,normal_fragment_maps:_Y,normal_pars_fragment:wY,normal_pars_vertex:TY,normal_vertex:SY,normalmap_pars_fragment:jY,clearcoat_normal_fragment_begin:fY,clearcoat_normal_fragment_maps:vY,clearcoat_pars_fragment:yY,iridescence_pars_fragment:bY,opaque_fragment:hY,packing:xY,premultiplied_alpha_fragment:gY,project_vertex:pY,dithering_fragment:mY,dithering_pars_fragment:lY,roughnessmap_fragment:dY,roughnessmap_pars_fragment:uY,shadowmap_pars_fragment:cY,shadowmap_pars_vertex:nY,shadowmap_vertex:sY,shadowmask_pars_fragment:iY,skinbase_vertex:oY,skinning_pars_vertex:aY,skinning_vertex:rY,skinnormal_vertex:tY,specularmap_fragment:eY,specularmap_pars_fragment:JU,tonemapping_fragment:QU,tonemapping_pars_fragment:$U,transmission_fragment:ZU,transmission_pars_fragment:KU,uv_pars_fragment:WU,uv_pars_vertex:XU,uv_vertex:YU,worldpos_vertex:UU,background_vert:HU,background_frag:qU,backgroundCube_vert:NU,backgroundCube_frag:GU,cube_vert:FU,cube_frag:OU,depth_vert:EU,depth_frag:DU,distance_vert:RU,distance_frag:kU,equirect_vert:LU,equirect_frag:VU,linedashed_vert:zU,linedashed_frag:BU,meshbasic_vert:MU,meshbasic_frag:IU,meshlambert_vert:AU,meshlambert_frag:CU,meshmatcap_vert:PU,meshmatcap_frag:_U,meshnormal_vert:wU,meshnormal_frag:TU,meshphong_vert:SU,meshphong_frag:jU,meshphysical_vert:fU,meshphysical_frag:vU,meshtoon_vert:yU,meshtoon_frag:bU,points_vert:hU,points_frag:xU,shadow_vert:gU,shadow_frag:pU,sprite_vert:mU,sprite_frag:lU},D0={common:{diffuse:{value:new c0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new h0}},envmap:{envMap:{value:null},envMapRotation:{value:new h0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new h0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new h0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new h0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new h0},normalScale:{value:new u0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new h0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new h0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new h0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new h0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new c0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new c0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0},uvTransform:{value:new h0}},sprite:{diffuse:{value:new c0(16777215)},opacity:{value:1},center:{value:new u0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}}},B9={basic:{uniforms:xJ([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.fog]),vertexShader:l0.meshbasic_vert,fragmentShader:l0.meshbasic_frag},lambert:{uniforms:xJ([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new c0(0)},envMapIntensity:{value:1}}]),vertexShader:l0.meshlambert_vert,fragmentShader:l0.meshlambert_frag},phong:{uniforms:xJ([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new c0(0)},specular:{value:new c0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:l0.meshphong_vert,fragmentShader:l0.meshphong_frag},standard:{uniforms:xJ([D0.common,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.roughnessmap,D0.metalnessmap,D0.fog,D0.lights,{emissive:{value:new c0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag},toon:{uniforms:xJ([D0.common,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.gradientmap,D0.fog,D0.lights,{emissive:{value:new c0(0)}}]),vertexShader:l0.meshtoon_vert,fragmentShader:l0.meshtoon_frag},matcap:{uniforms:xJ([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,{matcap:{value:null}}]),vertexShader:l0.meshmatcap_vert,fragmentShader:l0.meshmatcap_frag},points:{uniforms:xJ([D0.points,D0.fog]),vertexShader:l0.points_vert,fragmentShader:l0.points_frag},dashed:{uniforms:xJ([D0.common,D0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:l0.linedashed_vert,fragmentShader:l0.linedashed_frag},depth:{uniforms:xJ([D0.common,D0.displacementmap]),vertexShader:l0.depth_vert,fragmentShader:l0.depth_frag},normal:{uniforms:xJ([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,{opacity:{value:1}}]),vertexShader:l0.meshnormal_vert,fragmentShader:l0.meshnormal_frag},sprite:{uniforms:xJ([D0.sprite,D0.fog]),vertexShader:l0.sprite_vert,fragmentShader:l0.sprite_frag},background:{uniforms:{uvTransform:{value:new h0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:l0.background_vert,fragmentShader:l0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new h0}},vertexShader:l0.backgroundCube_vert,fragmentShader:l0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:l0.cube_vert,fragmentShader:l0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:l0.equirect_vert,fragmentShader:l0.equirect_frag},distance:{uniforms:xJ([D0.common,D0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:l0.distance_vert,fragmentShader:l0.distance_frag},shadow:{uniforms:xJ([D0.lights,D0.fog,{color:{value:new c0(0)},opacity:{value:1}}]),vertexShader:l0.shadow_vert,fragmentShader:l0.shadow_frag}};B9.physical={uniforms:xJ([B9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new h0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new h0},clearcoatNormalScale:{value:new u0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new h0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new h0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new h0},sheen:{value:0},sheenColor:{value:new c0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new h0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new h0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new h0},transmissionSamplerSize:{value:new u0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new h0},attenuationDistance:{value:0},attenuationColor:{value:new c0(0)},specularColor:{value:new c0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new h0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new h0},anisotropyVector:{value:new u0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new h0}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag};var h6={r:0,b:0,g:0},dU=new WJ,KW=new h0;KW.set(-1,0,0,0,1,0,0,0,1);function uU(J,Q,$,Z,K,W){let X=new c0(0),Y=K===!0?0:1,U,H,N=null,G=0,q=null;function E(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){let B=A.backgroundBlurriness>0;w=Q.get(w,B)}return w}function V(A){let w=!1,B=E(A);if(B===null)O(X,Y);else if(B&&B.isColor)O(B,1),w=!0;let P=J.xr.getEnvironmentBlendMode();if(P==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(P==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||w)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(A,w){let B=E(w);if(B&&(B.isCubeTexture||B.mapping===k7)){if(H===void 0)H=new j0(new EJ(1,1,1),new eJ({name:"BackgroundCubeMaterial",uniforms:k8(B9.backgroundCube.uniforms),vertexShader:B9.backgroundCube.vertexShader,fragmentShader:B9.backgroundCube.fragmentShader,side:hJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(P,L,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=B,H.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(dU.makeRotationFromEuler(w.backgroundRotation)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply(KW);if(H.material.toneMapped=i0.getTransfer(B.colorSpace)!==HJ,N!==B||G!==B.version||q!==J.toneMapping)H.material.needsUpdate=!0,N=B,G=B.version,q=J.toneMapping;H.layers.enableAll(),A.unshift(H,H.geometry,H.material,0,0,null)}else if(B&&B.isTexture){if(U===void 0)U=new j0(new dJ(2,2),new eJ({name:"BackgroundMaterial",uniforms:k8(B9.background.uniforms),vertexShader:B9.background.vertexShader,fragmentShader:B9.background.fragmentShader,side:o8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=B,U.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,U.material.toneMapped=i0.getTransfer(B.colorSpace)!==HJ,B.matrixAutoUpdate===!0)B.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(B.matrix),N!==B||G!==B.version||q!==J.toneMapping)U.material.needsUpdate=!0,N=B,G=B.version,q=J.toneMapping;U.layers.enableAll(),A.unshift(U,U.geometry,U.material,0,0,null)}}function O(A,w){A.getRGB(h6,V$(J)),$.buffers.color.setClear(h6.r,h6.g,h6.b,w,W)}function F(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(A,w=1){X.set(A),Y=w,O(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(A){Y=A,O(X,Y)},render:V,addToRenderList:I,dispose:F}}function cU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(C,m,a,p,n){let i=!1,y=G(C,p,a,m);if(W!==y)W=y,H(W.object);if(i=E(C,p,a,n),i)V(C,p,a,n);if(n!==null)Q.update(n,J.ELEMENT_ARRAY_BUFFER);if(i||X){if(X=!1,B(C,m,a,p),n!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(n).buffer)}}function U(){return J.createVertexArray()}function H(C){return J.bindVertexArray(C)}function N(C){return J.deleteVertexArray(C)}function G(C,m,a,p){let n=p.wireframe===!0,i=Z[m.id];if(i===void 0)i={},Z[m.id]=i;let y=C.isInstancedMesh===!0?C.id:0,Q0=i[y];if(Q0===void 0)Q0={},i[y]=Q0;let K0=Q0[a.id];if(K0===void 0)K0={},Q0[a.id]=K0;let G0=K0[n];if(G0===void 0)G0=q(U()),K0[n]=G0;return G0}function q(C){let m=[],a=[],p=[];for(let n=0;n<$;n++)m[n]=0,a[n]=0,p[n]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:a,attributeDivisors:p,object:C,attributes:{},index:null}}function E(C,m,a,p){let n=W.attributes,i=m.attributes,y=0,Q0=a.getAttributes();for(let K0 in Q0)if(Q0[K0].location>=0){let z0=n[K0],B0=i[K0];if(B0===void 0){if(K0==="instanceMatrix"&&C.instanceMatrix)B0=C.instanceMatrix;if(K0==="instanceColor"&&C.instanceColor)B0=C.instanceColor}if(z0===void 0)return!0;if(z0.attribute!==B0)return!0;if(B0&&z0.data!==B0.data)return!0;y++}if(W.attributesNum!==y)return!0;if(W.index!==p)return!0;return!1}function V(C,m,a,p){let n={},i=m.attributes,y=0,Q0=a.getAttributes();for(let K0 in Q0)if(Q0[K0].location>=0){let z0=i[K0];if(z0===void 0){if(K0==="instanceMatrix"&&C.instanceMatrix)z0=C.instanceMatrix;if(K0==="instanceColor"&&C.instanceColor)z0=C.instanceColor}let B0={};if(B0.attribute=z0,z0&&z0.data)B0.data=z0.data;n[K0]=B0,y++}W.attributes=n,W.attributesNum=y,W.index=p}function I(){let C=W.newAttributes;for(let m=0,a=C.length;m<a;m++)C[m]=0}function O(C){F(C,0)}function F(C,m){let{newAttributes:a,enabledAttributes:p,attributeDivisors:n}=W;if(a[C]=1,p[C]===0)J.enableVertexAttribArray(C),p[C]=1;if(n[C]!==m)J.vertexAttribDivisor(C,m),n[C]=m}function A(){let{newAttributes:C,enabledAttributes:m}=W;for(let a=0,p=m.length;a<p;a++)if(m[a]!==C[a])J.disableVertexAttribArray(a),m[a]=0}function w(C,m,a,p,n,i,y){if(y===!0)J.vertexAttribIPointer(C,m,a,n,i);else J.vertexAttribPointer(C,m,a,p,n,i)}function B(C,m,a,p){I();let n=p.attributes,i=a.getAttributes(),y=m.defaultAttributeValues;for(let Q0 in i){let K0=i[Q0];if(K0.location>=0){let G0=n[Q0];if(G0===void 0){if(Q0==="instanceMatrix"&&C.instanceMatrix)G0=C.instanceMatrix;if(Q0==="instanceColor"&&C.instanceColor)G0=C.instanceColor}if(G0!==void 0){let{normalized:z0,itemSize:B0}=G0,qJ=Q.get(G0);if(qJ===void 0)continue;let{buffer:a0,type:r,bytesPerElement:X0}=qJ,k0=r===J.INT||r===J.UNSIGNED_INT||G0.gpuType===_Q;if(G0.isInterleavedBufferAttribute){let L0=G0.data,S0=L0.stride,s0=G0.offset;if(L0.isInstancedInterleavedBuffer){for(let m0=0;m0<K0.locationSize;m0++)F(K0.location+m0,L0.meshPerAttribute);if(C.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=L0.meshPerAttribute*L0.count}else for(let m0=0;m0<K0.locationSize;m0++)O(K0.location+m0);J.bindBuffer(J.ARRAY_BUFFER,a0);for(let m0=0;m0<K0.locationSize;m0++)w(K0.location+m0,B0/K0.locationSize,r,z0,S0*X0,(s0+B0/K0.locationSize*m0)*X0,k0)}else{if(G0.isInstancedBufferAttribute){for(let L0=0;L0<K0.locationSize;L0++)F(K0.location+L0,G0.meshPerAttribute);if(C.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let L0=0;L0<K0.locationSize;L0++)O(K0.location+L0);J.bindBuffer(J.ARRAY_BUFFER,a0);for(let L0=0;L0<K0.locationSize;L0++)w(K0.location+L0,B0/K0.locationSize,r,z0,B0*X0,B0/K0.locationSize*L0*X0,k0)}}else if(y!==void 0){let z0=y[Q0];if(z0!==void 0)switch(z0.length){case 2:J.vertexAttrib2fv(K0.location,z0);break;case 3:J.vertexAttrib3fv(K0.location,z0);break;case 4:J.vertexAttrib4fv(K0.location,z0);break;default:J.vertexAttrib1fv(K0.location,z0)}}}}A()}function P(){M();for(let C in Z){let m=Z[C];for(let a in m){let p=m[a];for(let n in p){let i=p[n];for(let y in i)N(i[y].object),delete i[y];delete p[n]}}delete Z[C]}}function L(C){if(Z[C.id]===void 0)return;let m=Z[C.id];for(let a in m){let p=m[a];for(let n in p){let i=p[n];for(let y in i)N(i[y].object),delete i[y];delete p[n]}}delete Z[C.id]}function _(C){for(let m in Z){let a=Z[m];for(let p in a){let n=a[p];if(n[C.id]===void 0)continue;let i=n[C.id];for(let y in i)N(i[y].object),delete i[y];delete n[C.id]}}}function R(C){for(let m in Z){let a=Z[m],p=C.isInstancedMesh===!0?C.id:0,n=a[p];if(n===void 0)continue;for(let i in n){let y=n[i];for(let Q0 in y)N(y[Q0].object),delete y[Q0];delete n[i]}if(delete a[p],Object.keys(a).length===0)delete Z[m]}}function M(){if(d(),X=!0,W===K)return;W=K,H(W.object)}function d(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:M,resetDefaultState:d,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:R,releaseStatesOfProgram:_,initAttributes:I,enableAttribute:O,disableUnusedAttributes:A}}function nU(J,Q,$){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),$.update(H,Z,1)}function X(U,H,N){if(N===0)return;J.drawArraysInstanced(Z,U,H,N),$.update(H,Z,N)}function Y(U,H,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,N);let q=0;for(let E=0;E<N;E++)q+=H[E];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function sU(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(_){if(_!==L9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let R=_===f9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==q9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==j9&&!R)return!1;return!0}function U(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=$.precision!==void 0?$.precision:"highp",N=U(H);if(N!==H)v0("WebGLRenderer:",H,"not supported, using",N,"instead."),H=N;let G=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)v0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),A=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),w=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=J.getParameter(J.MAX_SAMPLES),L=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:X,textureTypeReadable:Y,precision:H,logarithmicDepthBuffer:G,reversedDepthBuffer:q,maxTextures:E,maxVertexTextures:V,maxTextureSize:I,maxCubemapSize:O,maxAttributes:F,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:B,maxSamples:P,samples:L}}function iU(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new T9,Y=new h0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(G,q){let E=G.length!==0||q||Z!==0||K;return K=q,Z=G.length,E},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(G,q){$=N(G,q,0)},this.setState=function(G,q,E){let{clippingPlanes:V,clipIntersection:I,clipShadows:O}=G,F=J.get(G);if(!K||V===null||V.length===0||W&&!O)if(W)N(null);else H();else{let A=W?0:Z,w=A*4,B=F.clippingState||null;U.value=B,B=N(V,q,w,E);for(let P=0;P!==w;++P)B[P]=$[P];F.clippingState=B,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=A}};function H(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(G,q,E,V){let I=G!==null?G.length:0,O=null;if(I!==0){if(O=U.value,V!==!0||O===null){let F=E+I*4,A=q.matrixWorldInverse;if(Y.getNormalMatrix(A),O===null||O.length<F)O=new Float32Array(F);for(let w=0,B=E;w!==I;++w,B+=4)X.copy(G[w]).applyMatrix4(A,Y),X.normal.toArray(O,B),O[B+3]=X.constant}U.value=O,U.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,O}}var t9=4,yK=[0.125,0.215,0.35,0.446,0.526,0.582],B8=20,oU=256,_7=new P7,bK=new c0,m$=null,l$=0,d$=0,u$=!1,aU=new v;class j7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=aU}=K;m$=this._renderer.getRenderTarget(),l$=this._renderer.getActiveCubeFace(),d$=this._renderer.getActiveMipmapLevel(),u$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=gK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=xK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(m$,l$,d$),this._renderer.xr.enabled=u$,J.scissorTest=!1,Q7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===r8||J.mapping===q8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);m$=this._renderer.getRenderTarget(),l$=this._renderer.getActiveCubeFace(),d$=this._renderer.getActiveMipmapLevel(),u$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:BJ,minFilter:BJ,generateMipmaps:!1,type:f9,format:L9,colorSpace:N$,depthBuffer:!1},Z=hK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=hK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rU(K)),this._blurMaterial=eU(K,J,Q),this._ggxMaterial=tU(K,J,Q)}return Z}_compileMaterial(J){let Q=new j0(new G9,J);this._renderer.compile(Q,_7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new bJ(90,1,Q,$),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],N=this._renderer,G=N.autoClear,q=N.toneMapping;if(N.getClearColor(bK),N.toneMapping=H9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new j0(new EJ,new jJ({name:"PMREM.Background",side:hJ,depthWrite:!1,depthTest:!1}));let V=this._backgroundBox,I=V.material,O=!1,F=J.background;if(F){if(F.isColor)I.color.copy(F),J.background=null,O=!0}else I.color.copy(bK),O=!0;for(let A=0;A<6;A++){let w=A%3;if(w===0)Y.up.set(0,U[A],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+H[A],K.y,K.z);else if(w===1)Y.up.set(0,0,U[A]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+H[A],K.z);else Y.up.set(0,U[A],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+H[A]);let B=this._cubeSize;if(Q7(Z,w*B,A>2?B:0,B,B),N.setRenderTarget(Z),O)N.render(V,Y);N.render(J,Y)}N.toneMapping=q,N.autoClear=G,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===r8||J.mapping===q8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=gK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=xK();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;Q7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,_7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,U=$/(this._lodMeshes.length-1),H=Q/(this._lodMeshes.length-1),N=Math.sqrt(U*U-H*H),G=0+U*1.25,q=N*G,{_lodMax:E}=this,V=this._sizeLods[$],I=3*V*($>E-t9?$-E+t9:0),O=4*(this._cubeSize-V);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=E-Q,Q7(K,I,O,3*V,2*V),Z.setRenderTarget(K),Z.render(X,_7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=E-$,Q7(J,I,O,3*V,2*V),Z.setRenderTarget(J),Z.render(X,_7)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,U=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")f0("blur direction must be either latitudinal or longitudinal!");let H=3,N=this._lodMeshes[Z];N.material=U;let G=U.uniforms,q=this._sizeLods[$]-1,E=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*B8-1),V=K/E,I=isFinite(K)?1+Math.floor(H*V):B8;if(I>B8)v0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${B8}`);let O=[],F=0;for(let L=0;L<B8;++L){let _=L/V,R=Math.exp(-_*_/2);if(O.push(R),L===0)F+=R;else if(L<I)F+=2*R}for(let L=0;L<O.length;L++)O[L]=O[L]/F;if(G.envMap.value=J.texture,G.samples.value=I,G.weights.value=O,G.latitudinal.value=W==="latitudinal",X)G.poleAxis.value=X;let{_lodMax:A}=this;G.dTheta.value=E,G.mipInt.value=A-$;let w=this._sizeLods[Z],B=3*w*(Z>A-t9?Z-A+t9:0),P=4*(this._cubeSize-w);Q7(Q,B,P,3*w,2*w),Y.setRenderTarget(Q),Y.render(N,_7)}}function rU(J){let Q=[],$=[],Z=[],K=J,W=J-t9+1+yK.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let U=1/Y;if(X>J-t9)U=yK[X-J+t9-1];else if(X===0)U=0;$.push(U);let H=1/(Y-2),N=-H,G=1+H,q=[N,N,G,N,G,G,N,N,G,G,N,G],E=6,V=6,I=3,O=2,F=1,A=new Float32Array(I*V*E),w=new Float32Array(O*V*E),B=new Float32Array(F*V*E);for(let L=0;L<E;L++){let _=L%3*2/3-1,R=L>2?0:-1,M=[_,R,0,_+0.6666666666666666,R,0,_+0.6666666666666666,R+1,0,_,R,0,_+0.6666666666666666,R+1,0,_,R+1,0];A.set(M,I*V*L),w.set(q,O*V*L);let d=[L,L,L,L,L,L];B.set(d,F*V*L)}let P=new G9;if(P.setAttribute("position",new oJ(A,I)),P.setAttribute("uv",new oJ(w,O)),P.setAttribute("faceIndex",new oJ(B,F)),Z.push(new j0(P,null)),K>t9)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function hK(J,Q,$){let Z=new tJ(J,Q,$);return Z.texture.mapping=k7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function Q7(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function tU(J,Q,$){return new eJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:g6(),fragmentShader:`

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
		`,blending:k9,depthTest:!1,depthWrite:!1})}function eU(J,Q,$){let Z=new Float32Array(B8),K=new v(0,1,0);return new eJ({name:"SphericalGaussianBlur",defines:{n:B8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:g6(),fragmentShader:`

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
		`,blending:k9,depthTest:!1,depthWrite:!1})}function xK(){return new eJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g6(),fragmentShader:`

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
		`,blending:k9,depthTest:!1,depthWrite:!1})}function gK(){return new eJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:k9,depthTest:!1,depthWrite:!1})}function g6(){return`

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
	`}class o$ extends tJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new _6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new EJ(5,5,5),K=new eJ({name:"CubemapFromEquirect",uniforms:k8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:hJ,blending:k9});K.uniforms.tEquirect.value=Q;let W=new j0(Z,K),X=Q.minFilter;if(Q.minFilter===N8)Q.minFilter=BJ;return new y$(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function JH(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,E=!1){if(q===null||q===void 0)return null;if(E)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let E=q.mapping;if(E===q6||E===N6)if(Q.has(q)){let V=Q.get(q).texture;return Y(V,q.mapping)}else{let V=q.image;if(V&&V.height>0){let I=new o$(V.height);return I.fromEquirectangularTexture(J,q),Q.set(q,I),q.addEventListener("dispose",H),Y(I.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let E=q.mapping,V=E===q6||E===N6,I=E===r8||E===q8;if(V||I){let O=$.get(q),F=O!==void 0?O.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==F){if(Z===null)Z=new j7(J);return O=V?Z.fromEquirectangular(q,O):Z.fromCubemap(q,O),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),O.texture}else if(O!==void 0)return O.texture;else{let A=q.image;if(V&&A&&A.height>0||I&&A&&U(A)){if(Z===null)Z=new j7(J);return O=V?Z.fromEquirectangular(q):Z.fromCubemap(q),O.texture.pmremVersion=q.pmremVersion,$.set(q,O),q.addEventListener("dispose",N),O.texture}else return null}}}return q}function Y(q,E){if(E===q6)q.mapping=r8;else if(E===N6)q.mapping=q8;return q}function U(q){let E=0,V=6;for(let I=0;I<V;I++)if(q[I]!==void 0)E++;return E===V}function H(q){let E=q.target;E.removeEventListener("dispose",H);let V=Q.get(E);if(V!==void 0)Q.delete(E),V.dispose()}function N(q){let E=q.target;E.removeEventListener("dispose",N);let V=$.get(E);if(V!==void 0)$.delete(E),V.dispose()}function G(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:G}}function QH(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)H8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function $H(J,Q,$,Z){let K={},W=new WeakMap;function X(G){let q=G.target;if(q.index!==null)Q.remove(q.index);for(let V in q.attributes)Q.remove(q.attributes[V]);q.removeEventListener("dispose",X),delete K[q.id];let E=W.get(q);if(E)Q.remove(E),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(G,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function U(G){let q=G.attributes;for(let E in q)Q.update(q[E],J.ARRAY_BUFFER)}function H(G){let q=[],E=G.index,V=G.attributes.position,I=0;if(V===void 0)return;if(E!==null){let A=E.array;I=E.version;for(let w=0,B=A.length;w<B;w+=3){let P=A[w+0],L=A[w+1],_=A[w+2];q.push(P,L,L,_,_,P)}}else{let A=V.array;I=V.version;for(let w=0,B=A.length/3-1;w<B;w+=3){let P=w+0,L=w+1,_=w+2;q.push(P,L,L,_,_,P)}}let O=new(V.count>=65535?A6:I6)(q,1);O.version=I;let F=W.get(G);if(F)Q.remove(F);W.set(G,O)}function N(G){let q=W.get(G);if(q){let E=G.index;if(E!==null){if(q.version<E.version)H(G)}}else H(G);return W.get(G)}return{get:Y,update:U,getWireframeAttribute:N}}function ZH(J,Q,$){let Z;function K(G){Z=G}let W,X;function Y(G){W=G.type,X=G.bytesPerElement}function U(G,q){J.drawElements(Z,q,W,G*X),$.update(q,Z,1)}function H(G,q,E){if(E===0)return;J.drawElementsInstanced(Z,q,W,G*X,E),$.update(q,Z,E)}function N(G,q,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,G,0,E);let I=0;for(let O=0;O<E;O++)I+=q[O];$.update(I,Z,1)}this.setMode=K,this.setIndex=Y,this.render=U,this.renderInstances=H,this.renderMultiDraw=N}function KH(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:f0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function WH(J,Q,$){let Z=new WeakMap,K=new OJ;function W(X,Y,U){let H=X.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,G=N!==void 0?N.length:0,q=Z.get(Y);if(q===void 0||q.count!==G){let M=function(){_.dispose(),Z.delete(Y),Y.removeEventListener("dispose",M)};if(q!==void 0)q.texture.dispose();let E=Y.morphAttributes.position!==void 0,V=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],A=Y.morphAttributes.color||[],w=0;if(E===!0)w=1;if(V===!0)w=2;if(I===!0)w=3;let B=Y.attributes.position.count*w,P=1;if(B>Q.maxTextureSize)P=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let L=new Float32Array(B*P*4*G),_=new M6(L,B,P,G);_.type=j9,_.needsUpdate=!0;let R=w*4;for(let d=0;d<G;d++){let C=O[d],m=F[d],a=A[d],p=B*P*4*d;for(let n=0;n<C.count;n++){let i=n*R;if(E===!0)K.fromBufferAttribute(C,n),L[p+i+0]=K.x,L[p+i+1]=K.y,L[p+i+2]=K.z,L[p+i+3]=0;if(V===!0)K.fromBufferAttribute(m,n),L[p+i+4]=K.x,L[p+i+5]=K.y,L[p+i+6]=K.z,L[p+i+7]=0;if(I===!0)K.fromBufferAttribute(a,n),L[p+i+8]=K.x,L[p+i+9]=K.y,L[p+i+10]=K.z,L[p+i+11]=a.itemSize===4?K.w:1}}q={count:G,texture:_,size:new u0(B,P)},Z.set(Y,q),Y.addEventListener("dispose",M)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let E=0;for(let I=0;I<H.length;I++)E+=H[I];let V=Y.morphTargetsRelative?1:1-E;U.getUniforms().setValue(J,"morphTargetBaseInfluence",V),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function XH(J,Q,$,Z,K){let W=new WeakMap;function X(H){let N=K.render.frame,G=H.geometry,q=Q.get(H,G);if(W.get(q)!==N)Q.update(q),W.set(q,N);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==N){if($.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)$.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,N)}}if(H.isSkinnedMesh){let E=H.skeleton;if(W.get(E)!==N)E.update(),W.set(E,N)}return q}function Y(){W=new WeakMap}function U(H){let N=H.target;if(N.removeEventListener("dispose",U),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:X,dispose:Y}}var YH={[BQ]:"LINEAR_TONE_MAPPING",[MQ]:"REINHARD_TONE_MAPPING",[IQ]:"CINEON_TONE_MAPPING",[R7]:"ACES_FILMIC_TONE_MAPPING",[CQ]:"AGX_TONE_MAPPING",[PQ]:"NEUTRAL_TONE_MAPPING",[AQ]:"CUSTOM_TONE_MAPPING"};function UH(J,Q,$,Z,K,W){let X=new tJ(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new r9(Q,$):void 0}),Y=new tJ(Q,$,{type:f9,depthBuffer:!1,stencilBuffer:!1}),U=new G9;U.setAttribute("position",new lJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new lJ([0,2,0,0,2,0],2));let H=new z$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new j0(U,H),G=new P7(-1,1,1,-1,0,1),q=null,E=null,V=!1,I,O=null,F=[],A=!1;this.setSize=function(w,B){X.setSize(w,B),Y.setSize(w,B);for(let P=0;P<F.length;P++){let L=F[P];if(L.setSize)L.setSize(w,B)}},this.setEffects=function(w){F=w,A=F.length>0&&F[0].isRenderPass===!0;let{width:B,height:P}=X;for(let L=0;L<F.length;L++){let _=F[L];if(_.setSize)_.setSize(B,P)}},this.begin=function(w,B){if(V)return!1;if(w.toneMapping===H9&&F.length===0)return!1;if(O=B,B!==null){let{width:P,height:L}=B;if(X.width!==P||X.height!==L)this.setSize(P,L)}if(A===!1)w.setRenderTarget(X);return I=w.toneMapping,w.toneMapping=H9,!0},this.hasRenderPass=function(){return A},this.end=function(w,B){w.toneMapping=I,V=!0;let P=X,L=Y;for(let _=0;_<F.length;_++){let R=F[_];if(R.enabled===!1)continue;if(R.render(w,L,P,B),R.needsSwap!==!1){let M=P;P=L,L=M}}if(q!==w.outputColorSpace||E!==w.toneMapping){if(q=w.outputColorSpace,E=w.toneMapping,H.defines={},i0.getTransfer(q)===HJ)H.defines.SRGB_TRANSFER="";let _=YH[E];if(_)H.defines[_]="";H.needsUpdate=!0}H.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(O),w.render(N,G),O=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),U.dispose(),H.dispose()}}var WW=new SJ,s$=new r9(1,1),XW=new M6,YW=new k$,UW=new _6,pK=[],mK=[],lK=new Float32Array(16),dK=new Float32Array(9),uK=new Float32Array(4);function $7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=pK[K];if(W===void 0)W=new Float32Array(K),pK[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function PJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function _J(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function p6(J,Q){let $=mK[Q];if($===void 0)$=new Int32Array(Q),mK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function HH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function qH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(PJ($,Q))return;J.uniform2fv(this.addr,Q),_J($,Q)}}function NH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(PJ($,Q))return;J.uniform3fv(this.addr,Q),_J($,Q)}}function GH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(PJ($,Q))return;J.uniform4fv(this.addr,Q),_J($,Q)}}function FH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(PJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),_J($,Q)}else{if(PJ($,Z))return;uK.set(Z),J.uniformMatrix2fv(this.addr,!1,uK),_J($,Z)}}function OH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(PJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),_J($,Q)}else{if(PJ($,Z))return;dK.set(Z),J.uniformMatrix3fv(this.addr,!1,dK),_J($,Z)}}function EH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(PJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),_J($,Q)}else{if(PJ($,Z))return;lK.set(Z),J.uniformMatrix4fv(this.addr,!1,lK),_J($,Z)}}function DH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function RH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(PJ($,Q))return;J.uniform2iv(this.addr,Q),_J($,Q)}}function kH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(PJ($,Q))return;J.uniform3iv(this.addr,Q),_J($,Q)}}function LH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(PJ($,Q))return;J.uniform4iv(this.addr,Q),_J($,Q)}}function VH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function zH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(PJ($,Q))return;J.uniform2uiv(this.addr,Q),_J($,Q)}}function BH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(PJ($,Q))return;J.uniform3uiv(this.addr,Q),_J($,Q)}}function MH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(PJ($,Q))return;J.uniform4uiv(this.addr,Q),_J($,Q)}}function IH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)s$.compareFunction=$.isReversedDepthBuffer()?B6:z6,W=s$;else W=WW;$.setTexture2D(Q||W,K)}function AH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||YW,K)}function CH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||UW,K)}function PH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||XW,K)}function _H(J){switch(J){case 5126:return HH;case 35664:return qH;case 35665:return NH;case 35666:return GH;case 35674:return FH;case 35675:return OH;case 35676:return EH;case 5124:case 35670:return DH;case 35667:case 35671:return RH;case 35668:case 35672:return kH;case 35669:case 35673:return LH;case 5125:return VH;case 36294:return zH;case 36295:return BH;case 36296:return MH;case 35678:case 36198:case 36298:case 36306:case 35682:return IH;case 35679:case 36299:case 36307:return AH;case 35680:case 36300:case 36308:case 36293:return CH;case 36289:case 36303:case 36311:case 36292:return PH}}function wH(J,Q){J.uniform1fv(this.addr,Q)}function TH(J,Q){let $=$7(Q,this.size,2);J.uniform2fv(this.addr,$)}function SH(J,Q){let $=$7(Q,this.size,3);J.uniform3fv(this.addr,$)}function jH(J,Q){let $=$7(Q,this.size,4);J.uniform4fv(this.addr,$)}function fH(J,Q){let $=$7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function vH(J,Q){let $=$7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function yH(J,Q){let $=$7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function bH(J,Q){J.uniform1iv(this.addr,Q)}function hH(J,Q){J.uniform2iv(this.addr,Q)}function xH(J,Q){J.uniform3iv(this.addr,Q)}function gH(J,Q){J.uniform4iv(this.addr,Q)}function pH(J,Q){J.uniform1uiv(this.addr,Q)}function mH(J,Q){J.uniform2uiv(this.addr,Q)}function lH(J,Q){J.uniform3uiv(this.addr,Q)}function dH(J,Q){J.uniform4uiv(this.addr,Q)}function uH(J,Q,$){let Z=this.cache,K=Q.length,W=p6($,K);if(!PJ(Z,W))J.uniform1iv(this.addr,W),_J(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=s$;else X=WW;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function cH(J,Q,$){let Z=this.cache,K=Q.length,W=p6($,K);if(!PJ(Z,W))J.uniform1iv(this.addr,W),_J(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||YW,W[X])}function nH(J,Q,$){let Z=this.cache,K=Q.length,W=p6($,K);if(!PJ(Z,W))J.uniform1iv(this.addr,W),_J(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||UW,W[X])}function sH(J,Q,$){let Z=this.cache,K=Q.length,W=p6($,K);if(!PJ(Z,W))J.uniform1iv(this.addr,W),_J(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||XW,W[X])}function iH(J){switch(J){case 5126:return wH;case 35664:return TH;case 35665:return SH;case 35666:return jH;case 35674:return fH;case 35675:return vH;case 35676:return yH;case 5124:case 35670:return bH;case 35667:case 35671:return hH;case 35668:case 35672:return xH;case 35669:case 35673:return gH;case 5125:return pH;case 36294:return mH;case 36295:return lH;case 36296:return dH;case 35678:case 36198:case 36298:case 36306:case 35682:return uH;case 35679:case 36299:case 36307:return cH;case 35680:case 36300:case 36308:case 36293:return nH;case 36289:case 36303:case 36311:case 36292:return sH}}class HW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=_H(Q.type)}}class qW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=iH(Q.type)}}class NW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var c$=/(\w+)(\])?(\[|\.)?/g;function cK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function oH(J,Q,$){let Z=J.name,K=Z.length;c$.lastIndex=0;while(!0){let W=c$.exec(Z),X=c$.lastIndex,Y=W[1],U=W[2]==="]",H=W[3];if(U)Y=Y|0;if(H===void 0||H==="["&&X+2===K){cK($,H===void 0?new HW(Y,J,Q):new qW(Y,J,Q));break}else{let G=$.map[Y];if(G===void 0)G=new NW(Y),cK($,G);$=G}}}class S7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);oH(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function nK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var aH=37297,rH=0;function tH(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var sK=new h0;function eH(J){i0._getMatrix(sK,i0.workingColorSpace,J);let Q=`mat3( ${sK.elements.map(($)=>$.toFixed(4))} )`;switch(i0.getTransfer(J)){case G$:return[Q,"LinearTransferOETF"];case HJ:return[Q,"sRGBTransferOETF"];default:return v0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function iK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+tH(J.getShaderSource(Q),Y)}else return W}function J5(J,Q){let $=eH(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var Q5={[BQ]:"Linear",[MQ]:"Reinhard",[IQ]:"Cineon",[R7]:"ACESFilmic",[CQ]:"AgX",[PQ]:"Neutral",[AQ]:"Custom"};function $5(J,Q){let $=Q5[Q];if($===void 0)return v0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var x6=new v;function Z5(){i0.getLuminanceCoefficients(x6);let J=x6.x.toFixed(4),Q=x6.y.toFixed(4),$=x6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function K5(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(T7).join(`
`)}function W5(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function X5(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function T7(J){return J!==""}function oK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function aK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Y5=/^[ \t]*#include +<([\w\d./]+)>/gm;function i$(J){return J.replace(Y5,H5)}var U5=new Map;function H5(J,Q){let $=l0[Q];if($===void 0){let Z=U5.get(Q);if(Z!==void 0)$=l0[Z],v0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return i$($)}var q5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rK(J){return J.replace(q5,N5)}function N5(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function tK(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var G5={[E7]:"SHADOWMAP_TYPE_PCF",[i8]:"SHADOWMAP_TYPE_VSM"};function F5(J){return G5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O5={[r8]:"ENVMAP_TYPE_CUBE",[q8]:"ENVMAP_TYPE_CUBE",[k7]:"ENVMAP_TYPE_CUBE_UV"};function E5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return O5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var D5={[q8]:"ENVMAP_MODE_REFRACTION"};function R5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return D5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k5={[XK]:"ENVMAP_BLENDING_MULTIPLY",[YK]:"ENVMAP_BLENDING_MIX",[UK]:"ENVMAP_BLENDING_ADD"};function L5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return k5[J.combine]||"ENVMAP_BLENDING_NONE"}function V5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function z5(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,U=F5($),H=E5($),N=R5($),G=L5($),q=V5($),E=K5($),V=W5(W),I=K.createProgram(),O,F,A=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(T7).join(`
`),O.length>0)O+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(T7).join(`
`),F.length>0)F+=`
`}else O=[tK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(T7).join(`
`),F=[tK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+H:"",$.envMap?"#define "+N:"",$.envMap?"#define "+G:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==H9?"#define TONE_MAPPING":"",$.toneMapping!==H9?l0.tonemapping_pars_fragment:"",$.toneMapping!==H9?$5("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",l0.colorspace_pars_fragment,J5("linearToOutputTexel",$.outputColorSpace),Z5(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(T7).join(`
`);if(X=i$(X),X=oK(X,$),X=aK(X,$),Y=i$(Y),Y=oK(Y,$),Y=aK(Y,$),X=rK(X),Y=rK(Y),$.isRawShaderMaterial!==!0)A=`#version 300 es
`,O=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,F=["#define varying in",$.glslVersion===F$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===F$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let w=A+O+X,B=A+F+Y,P=nK(K,K.VERTEX_SHADER,w),L=nK(K,K.FRAGMENT_SHADER,B);if(K.attachShader(I,P),K.attachShader(I,L),$.index0AttributeName!==void 0)K.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(I,0,"position");K.linkProgram(I);function _(C){if(J.debug.checkShaderErrors){let m=K.getProgramInfoLog(I)||"",a=K.getShaderInfoLog(P)||"",p=K.getShaderInfoLog(L)||"",n=m.trim(),i=a.trim(),y=p.trim(),Q0=!0,K0=!0;if(K.getProgramParameter(I,K.LINK_STATUS)===!1)if(Q0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,I,P,L);else{let G0=iK(K,P,"vertex"),z0=iK(K,L,"fragment");f0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(I,K.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+n+`
`+G0+`
`+z0)}else if(n!=="")v0("WebGLProgram: Program Info Log:",n);else if(i===""||y==="")K0=!1;if(K0)C.diagnostics={runnable:Q0,programLog:n,vertexShader:{log:i,prefix:O},fragmentShader:{log:y,prefix:F}}}K.deleteShader(P),K.deleteShader(L),R=new S7(K,I),M=X5(K,I)}let R;this.getUniforms=function(){if(R===void 0)_(this);return R};let M;this.getAttributes=function(){if(M===void 0)_(this);return M};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=K.getProgramParameter(I,aH);return d},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=rH++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=P,this.fragmentShader=L,this}var B5=0;class GW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new FW(J),Q.set(J,$);return $}}class FW{constructor(J){this.id=B5++,this.code=J,this.usedTimes=0}}function M5(J){return J===O8||J===L6||J===V6}function I5(J,Q,$,Z,K,W){let X=new M7,Y=new GW,U=new Set,H=[],N=new Map,G=Z.logarithmicDepthBuffer,q=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function V(R){if(U.add(R),R===0)return"uv";return`uv${R}`}function I(R,M,d,C,m,a){let p=C.fog,n=m.geometry,i=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?C.environment:null,y=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,Q0=Q.get(R.envMap||i,y),K0=!!Q0&&Q0.mapping===k7?Q0.image.height:null,G0=E[R.type];if(R.precision!==null){if(q=Z.getMaxPrecision(R.precision),q!==R.precision)v0("WebGLProgram.getParameters:",R.precision,"not supported, using",q,"instead.")}let z0=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,B0=z0!==void 0?z0.length:0,qJ=0;if(n.morphAttributes.position!==void 0)qJ=1;if(n.morphAttributes.normal!==void 0)qJ=2;if(n.morphAttributes.color!==void 0)qJ=3;let a0,r,X0,k0;if(G0){let b0=B9[G0];a0=b0.vertexShader,r=b0.fragmentShader}else{a0=R.vertexShader,r=R.fragmentShader;let b0=Y.getVertexShaderStage(R),JJ=Y.getFragmentShaderStage(R);Y.update(R,b0,JJ),X0=b0.id,k0=JJ.id}let L0=J.getRenderTarget(),S0=J.state.buffers.depth.getReversed(),s0=m.isInstancedMesh===!0,m0=m.isBatchedMesh===!0,x0=!!R.map,r0=!!R.matcap,n0=!!Q0,g0=!!R.aoMap,RJ=!!R.lightMap,AJ=!!R.bumpMap&&R.wireframe===!1,XJ=!!R.normalMap,MJ=!!R.displacementMap,GJ=!!R.emissiveMap,LJ=!!R.metalnessMap,j=!!R.roughnessMap,gJ=R.anisotropy>0,t0=R.clearcoat>0,YJ=R.dispersion>0,z=R.iridescence>0,D=R.sheen>0,T=R.transmission>0,l=gJ&&!!R.anisotropyMap,e=t0&&!!R.clearcoatMap,Z0=t0&&!!R.clearcoatNormalMap,H0=t0&&!!R.clearcoatRoughnessMap,u=z&&!!R.iridescenceMap,o=z&&!!R.iridescenceThicknessMap,R0=D&&!!R.sheenColorMap,M0=D&&!!R.sheenRoughnessMap,q0=!!R.specularMap,W0=!!R.specularColorMap,_0=!!R.specularIntensityMap,A0=T&&!!R.transmissionMap,d0=T&&!!R.thicknessMap,S=!!R.gradientMap,U0=!!R.alphaMap,c=R.alphaTest>0,N0=!!R.alphaHash,O0=!!R.extensions,J0=H9;if(R.toneMapped){if(L0===null||L0.isXRRenderTarget===!0)J0=J.toneMapping}let Y0={shaderID:G0,shaderType:R.type,shaderName:R.name,vertexShader:a0,fragmentShader:r,defines:R.defines,customVertexShaderID:X0,customFragmentShaderID:k0,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:q,batching:m0,batchingColor:m0&&m._colorsTexture!==null,instancing:s0,instancingColor:s0&&m.instanceColor!==null,instancingMorph:s0&&m.morphTexture!==null,outputColorSpace:L0===null?J.outputColorSpace:L0.isXRRenderTarget===!0?L0.texture.colorSpace:i0.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:x0,matcap:r0,envMap:n0,envMapMode:n0&&Q0.mapping,envMapCubeUVHeight:K0,aoMap:g0,lightMap:RJ,bumpMap:AJ,normalMap:XJ,displacementMap:MJ,emissiveMap:GJ,normalMapObjectSpace:XJ&&R.normalMapType===kK,normalMapTangentSpace:XJ&&R.normalMapType===q$,packedNormalMap:XJ&&R.normalMapType===q$&&M5(R.normalMap.format),metalnessMap:LJ,roughnessMap:j,anisotropy:gJ,anisotropyMap:l,clearcoat:t0,clearcoatMap:e,clearcoatNormalMap:Z0,clearcoatRoughnessMap:H0,dispersion:YJ,iridescence:z,iridescenceMap:u,iridescenceThicknessMap:o,sheen:D,sheenColorMap:R0,sheenRoughnessMap:M0,specularMap:q0,specularColorMap:W0,specularIntensityMap:_0,transmission:T,transmissionMap:A0,thicknessMap:d0,gradientMap:S,opaque:R.transparent===!1&&R.blending===D7&&R.alphaToCoverage===!1,alphaMap:U0,alphaTest:c,alphaHash:N0,combine:R.combine,mapUv:x0&&V(R.map.channel),aoMapUv:g0&&V(R.aoMap.channel),lightMapUv:RJ&&V(R.lightMap.channel),bumpMapUv:AJ&&V(R.bumpMap.channel),normalMapUv:XJ&&V(R.normalMap.channel),displacementMapUv:MJ&&V(R.displacementMap.channel),emissiveMapUv:GJ&&V(R.emissiveMap.channel),metalnessMapUv:LJ&&V(R.metalnessMap.channel),roughnessMapUv:j&&V(R.roughnessMap.channel),anisotropyMapUv:l&&V(R.anisotropyMap.channel),clearcoatMapUv:e&&V(R.clearcoatMap.channel),clearcoatNormalMapUv:Z0&&V(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H0&&V(R.clearcoatRoughnessMap.channel),iridescenceMapUv:u&&V(R.iridescenceMap.channel),iridescenceThicknessMapUv:o&&V(R.iridescenceThicknessMap.channel),sheenColorMapUv:R0&&V(R.sheenColorMap.channel),sheenRoughnessMapUv:M0&&V(R.sheenRoughnessMap.channel),specularMapUv:q0&&V(R.specularMap.channel),specularColorMapUv:W0&&V(R.specularColorMap.channel),specularIntensityMapUv:_0&&V(R.specularIntensityMap.channel),transmissionMapUv:A0&&V(R.transmissionMap.channel),thicknessMapUv:d0&&V(R.thicknessMap.channel),alphaMapUv:U0&&V(R.alphaMap.channel),vertexTangents:!!n.attributes.tangent&&(XJ||gJ),vertexNormals:!!n.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!n.attributes.uv&&(x0||U0),fog:!!p,useFog:R.fog===!0,fogExp2:!!p&&p.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||n.attributes.normal===void 0&&XJ===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:G,reversedDepthBuffer:S0,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:n.attributes.position!==void 0,morphTargets:n.morphAttributes.position!==void 0,morphNormals:n.morphAttributes.normal!==void 0,morphColors:n.morphAttributes.color!==void 0,morphTargetsCount:B0,morphTextureStride:qJ,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:a.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:R.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:J0,decodeVideoTexture:x0&&R.map.isVideoTexture===!0&&i0.getTransfer(R.map.colorSpace)===HJ,decodeVideoTextureEmissive:GJ&&R.emissiveMap.isVideoTexture===!0&&i0.getTransfer(R.emissiveMap.colorSpace)===HJ,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===R9,flipSided:R.side===hJ,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:O0&&R.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&R.extensions.multiDraw===!0||m0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Y0.vertexUv1s=U.has(1),Y0.vertexUv2s=U.has(2),Y0.vertexUv3s=U.has(3),U.clear(),Y0}function O(R){let M=[];if(R.shaderID)M.push(R.shaderID);else M.push(R.customVertexShaderID),M.push(R.customFragmentShaderID);if(R.defines!==void 0)for(let d in R.defines)M.push(d),M.push(R.defines[d]);if(R.isRawShaderMaterial===!1)F(M,R),A(M,R),M.push(J.outputColorSpace);return M.push(R.customProgramCacheKey),M.join()}function F(R,M){R.push(M.precision),R.push(M.outputColorSpace),R.push(M.envMapMode),R.push(M.envMapCubeUVHeight),R.push(M.mapUv),R.push(M.alphaMapUv),R.push(M.lightMapUv),R.push(M.aoMapUv),R.push(M.bumpMapUv),R.push(M.normalMapUv),R.push(M.displacementMapUv),R.push(M.emissiveMapUv),R.push(M.metalnessMapUv),R.push(M.roughnessMapUv),R.push(M.anisotropyMapUv),R.push(M.clearcoatMapUv),R.push(M.clearcoatNormalMapUv),R.push(M.clearcoatRoughnessMapUv),R.push(M.iridescenceMapUv),R.push(M.iridescenceThicknessMapUv),R.push(M.sheenColorMapUv),R.push(M.sheenRoughnessMapUv),R.push(M.specularMapUv),R.push(M.specularColorMapUv),R.push(M.specularIntensityMapUv),R.push(M.transmissionMapUv),R.push(M.thicknessMapUv),R.push(M.combine),R.push(M.fogExp2),R.push(M.sizeAttenuation),R.push(M.morphTargetsCount),R.push(M.morphAttributeCount),R.push(M.numDirLights),R.push(M.numPointLights),R.push(M.numSpotLights),R.push(M.numSpotLightMaps),R.push(M.numHemiLights),R.push(M.numRectAreaLights),R.push(M.numDirLightShadows),R.push(M.numPointLightShadows),R.push(M.numSpotLightShadows),R.push(M.numSpotLightShadowsWithMaps),R.push(M.numLightProbes),R.push(M.shadowMapType),R.push(M.toneMapping),R.push(M.numClippingPlanes),R.push(M.numClipIntersection),R.push(M.depthPacking)}function A(R,M){if(X.disableAll(),M.instancing)X.enable(0);if(M.instancingColor)X.enable(1);if(M.instancingMorph)X.enable(2);if(M.matcap)X.enable(3);if(M.envMap)X.enable(4);if(M.normalMapObjectSpace)X.enable(5);if(M.normalMapTangentSpace)X.enable(6);if(M.clearcoat)X.enable(7);if(M.iridescence)X.enable(8);if(M.alphaTest)X.enable(9);if(M.vertexColors)X.enable(10);if(M.vertexAlphas)X.enable(11);if(M.vertexUv1s)X.enable(12);if(M.vertexUv2s)X.enable(13);if(M.vertexUv3s)X.enable(14);if(M.vertexTangents)X.enable(15);if(M.anisotropy)X.enable(16);if(M.alphaHash)X.enable(17);if(M.batching)X.enable(18);if(M.dispersion)X.enable(19);if(M.batchingColor)X.enable(20);if(M.gradientMap)X.enable(21);if(M.packedNormalMap)X.enable(22);if(M.vertexNormals)X.enable(23);if(R.push(X.mask),X.disableAll(),M.fog)X.enable(0);if(M.useFog)X.enable(1);if(M.flatShading)X.enable(2);if(M.logarithmicDepthBuffer)X.enable(3);if(M.reversedDepthBuffer)X.enable(4);if(M.skinning)X.enable(5);if(M.morphTargets)X.enable(6);if(M.morphNormals)X.enable(7);if(M.morphColors)X.enable(8);if(M.premultipliedAlpha)X.enable(9);if(M.shadowMapEnabled)X.enable(10);if(M.doubleSided)X.enable(11);if(M.flipSided)X.enable(12);if(M.useDepthPacking)X.enable(13);if(M.dithering)X.enable(14);if(M.transmission)X.enable(15);if(M.sheen)X.enable(16);if(M.opaque)X.enable(17);if(M.pointsUvs)X.enable(18);if(M.decodeVideoTexture)X.enable(19);if(M.decodeVideoTextureEmissive)X.enable(20);if(M.alphaToCoverage)X.enable(21);if(M.numLightProbeGrids>0)X.enable(22);if(M.hasPositionAttribute)X.enable(23);R.push(X.mask)}function w(R){let M=E[R.type],d;if(M){let C=B9[M];d=TK.clone(C.uniforms)}else d=R.uniforms;return d}function B(R,M){let d=N.get(M);if(d!==void 0)++d.usedTimes;else d=new z5(J,M,R,K),H.push(d),N.set(M,d);return d}function P(R){if(--R.usedTimes===0){let M=H.indexOf(R);H[M]=H[H.length-1],H.pop(),N.delete(R.cacheKey),R.destroy()}}function L(R){Y.remove(R)}function _(){Y.dispose()}return{getParameters:I,getProgramCacheKey:O,getUniforms:w,acquireProgram:B,releaseProgram:P,releaseShaderCache:L,programs:H,dispose:_}}function A5(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,U){J.get(X)[Y]=U}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function C5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function eK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function JW(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let E=0;if(q.isInstancedMesh)E+=2;if(q.isSkinnedMesh)E+=1;return E}function Y(q,E,V,I,O,F){let A=J[Q];if(A===void 0)A={id:q.id,object:q,geometry:E,material:V,materialVariant:X(q),groupOrder:I,renderOrder:q.renderOrder,z:O,group:F},J[Q]=A;else A.id=q.id,A.object=q,A.geometry=E,A.material=V,A.materialVariant=X(q),A.groupOrder=I,A.renderOrder=q.renderOrder,A.z=O,A.group=F;return Q++,A}function U(q,E,V,I,O,F){let A=Y(q,E,V,I,O,F);if(V.transmission>0)Z.push(A);else if(V.transparent===!0)K.push(A);else $.push(A)}function H(q,E,V,I,O,F){let A=Y(q,E,V,I,O,F);if(V.transmission>0)Z.unshift(A);else if(V.transparent===!0)K.unshift(A);else $.unshift(A)}function N(q,E,V){if($.length>1)$.sort(q||C5);if(Z.length>1)Z.sort(E||eK);if(K.length>1)K.sort(E||eK);if(V)$.reverse(),Z.reverse(),K.reverse()}function G(){for(let q=Q,E=J.length;q<E;q++){let V=J[q];if(V.id===null)break;V.id=null,V.object=null,V.geometry=null,V.material=null,V.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:G,sort:N}}function P5(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new JW,J.set(Z,[X]);else if(K>=W.length)X=new JW,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function _5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new v,color:new c0};break;case"SpotLight":$={position:new v,direction:new v,color:new c0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new c0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new c0,groundColor:new c0};break;case"RectAreaLight":$={color:new c0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function w5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var T5=0;function S5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function j5(J){let Q=new _5,$=w5(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new v);let K=new v,W=new WJ,X=new WJ;function Y(H){let N=0,G=0,q=0;for(let M=0;M<9;M++)Z.probe[M].set(0,0,0);let E=0,V=0,I=0,O=0,F=0,A=0,w=0,B=0,P=0,L=0,_=0;H.sort(S5);for(let M=0,d=H.length;M<d;M++){let C=H[M],m=C.color,a=C.intensity,p=C.distance,n=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===O8)n=C.shadow.map.texture;else n=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)N+=m.r*a,G+=m.g*a,q+=m.b*a;else if(C.isLightProbe){for(let i=0;i<9;i++)Z.probe[i].addScaledVector(C.sh.coefficients[i],a);_++}else if(C.isDirectionalLight){let i=Q.get(C);if(i.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let y=C.shadow,Q0=$.get(C);Q0.shadowIntensity=y.intensity,Q0.shadowBias=y.bias,Q0.shadowNormalBias=y.normalBias,Q0.shadowRadius=y.radius,Q0.shadowMapSize=y.mapSize,Z.directionalShadow[E]=Q0,Z.directionalShadowMap[E]=n,Z.directionalShadowMatrix[E]=C.shadow.matrix,A++}Z.directional[E]=i,E++}else if(C.isSpotLight){let i=Q.get(C);i.position.setFromMatrixPosition(C.matrixWorld),i.color.copy(m).multiplyScalar(a),i.distance=p,i.coneCos=Math.cos(C.angle),i.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),i.decay=C.decay,Z.spot[I]=i;let y=C.shadow;if(C.map){if(Z.spotLightMap[P]=C.map,P++,y.updateMatrices(C),C.castShadow)L++}if(Z.spotLightMatrix[I]=y.matrix,C.castShadow){let Q0=$.get(C);Q0.shadowIntensity=y.intensity,Q0.shadowBias=y.bias,Q0.shadowNormalBias=y.normalBias,Q0.shadowRadius=y.radius,Q0.shadowMapSize=y.mapSize,Z.spotShadow[I]=Q0,Z.spotShadowMap[I]=n,B++}I++}else if(C.isRectAreaLight){let i=Q.get(C);i.color.copy(m).multiplyScalar(a),i.halfWidth.set(C.width*0.5,0,0),i.halfHeight.set(0,C.height*0.5,0),Z.rectArea[O]=i,O++}else if(C.isPointLight){let i=Q.get(C);if(i.color.copy(C.color).multiplyScalar(C.intensity),i.distance=C.distance,i.decay=C.decay,C.castShadow){let y=C.shadow,Q0=$.get(C);Q0.shadowIntensity=y.intensity,Q0.shadowBias=y.bias,Q0.shadowNormalBias=y.normalBias,Q0.shadowRadius=y.radius,Q0.shadowMapSize=y.mapSize,Q0.shadowCameraNear=y.camera.near,Q0.shadowCameraFar=y.camera.far,Z.pointShadow[V]=Q0,Z.pointShadowMap[V]=n,Z.pointShadowMatrix[V]=C.shadow.matrix,w++}Z.point[V]=i,V++}else if(C.isHemisphereLight){let i=Q.get(C);i.skyColor.copy(C.color).multiplyScalar(a),i.groundColor.copy(C.groundColor).multiplyScalar(a),Z.hemi[F]=i,F++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=D0.LTC_FLOAT_1,Z.rectAreaLTC2=D0.LTC_FLOAT_2;else Z.rectAreaLTC1=D0.LTC_HALF_1,Z.rectAreaLTC2=D0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=G,Z.ambient[2]=q;let R=Z.hash;if(R.directionalLength!==E||R.pointLength!==V||R.spotLength!==I||R.rectAreaLength!==O||R.hemiLength!==F||R.numDirectionalShadows!==A||R.numPointShadows!==w||R.numSpotShadows!==B||R.numSpotMaps!==P||R.numLightProbes!==_)Z.directional.length=E,Z.spot.length=I,Z.rectArea.length=O,Z.point.length=V,Z.hemi.length=F,Z.directionalShadow.length=A,Z.directionalShadowMap.length=A,Z.pointShadow.length=w,Z.pointShadowMap.length=w,Z.spotShadow.length=B,Z.spotShadowMap.length=B,Z.directionalShadowMatrix.length=A,Z.pointShadowMatrix.length=w,Z.spotLightMatrix.length=B+P-L,Z.spotLightMap.length=P,Z.numSpotLightShadowsWithMaps=L,Z.numLightProbes=_,R.directionalLength=E,R.pointLength=V,R.spotLength=I,R.rectAreaLength=O,R.hemiLength=F,R.numDirectionalShadows=A,R.numPointShadows=w,R.numSpotShadows=B,R.numSpotMaps=P,R.numLightProbes=_,Z.version=T5++}function U(H,N){let G=0,q=0,E=0,V=0,I=0,O=N.matrixWorldInverse;for(let F=0,A=H.length;F<A;F++){let w=H[F];if(w.isDirectionalLight){let B=Z.directional[G];B.direction.setFromMatrixPosition(w.matrixWorld),K.setFromMatrixPosition(w.target.matrixWorld),B.direction.sub(K),B.direction.transformDirection(O),G++}else if(w.isSpotLight){let B=Z.spot[E];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(O),B.direction.setFromMatrixPosition(w.matrixWorld),K.setFromMatrixPosition(w.target.matrixWorld),B.direction.sub(K),B.direction.transformDirection(O),E++}else if(w.isRectAreaLight){let B=Z.rectArea[V];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(O),X.identity(),W.copy(w.matrixWorld),W.premultiply(O),X.extractRotation(W),B.halfWidth.set(w.width*0.5,0,0),B.halfHeight.set(0,w.height*0.5,0),B.halfWidth.applyMatrix4(X),B.halfHeight.applyMatrix4(X),V++}else if(w.isPointLight){let B=Z.point[q];B.position.setFromMatrixPosition(w.matrixWorld),B.position.applyMatrix4(O),q++}else if(w.isHemisphereLight){let B=Z.hemi[I];B.direction.setFromMatrixPosition(w.matrixWorld),B.direction.transformDirection(O),I++}}}return{setup:Y,setupView:U,state:Z}}function QW(J){let Q=new j5(J),$=[],Z=[],K=[];function W(q){G.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function U(q){K.push(q)}function H(){Q.setup($)}function N(q){Q.setupView($,q)}let G={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:G,setupLights:H,setupLightsView:N,pushLight:X,pushShadow:Y,pushLightProbeGrid:U}}function f5(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new QW(J),Q.set(K,[Y]);else if(W>=X.length)Y=new QW(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var v5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y5=`uniform sampler2D shadow_pass;
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
}`,b5=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],h5=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],$W=new WJ,w7=new v,n$=new v;function x5(J,Q,$){let Z=new A7,K=new u0,W=new u0,X=new OJ,Y=new B$,U=new M$,H={},N=$.maxTextureSize,G={[o8]:hJ,[hJ]:o8,[R9]:R9},q=new eJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new u0},radius:{value:4}},vertexShader:v5,fragmentShader:y5}),E=q.clone();E.defines.HORIZONTAL_PASS=1;let V=new G9;V.setAttribute("position",new oJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new j0(V,q),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E7;let F=this.type;this.render=function(L,_,R){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(L.length===0)return;if(this.type===jZ)v0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=E7;let M=J.getRenderTarget(),d=J.getActiveCubeFace(),C=J.getActiveMipmapLevel(),m=J.state;if(m.setBlending(k9),m.buffers.depth.getReversed()===!0)m.buffers.color.setClear(0,0,0,0);else m.buffers.color.setClear(1,1,1,1);m.buffers.depth.setTest(!0),m.setScissorTest(!1);let a=F!==this.type;if(a)_.traverse(function(p){if(p.material)if(Array.isArray(p.material))p.material.forEach((n)=>n.needsUpdate=!0);else p.material.needsUpdate=!0});for(let p=0,n=L.length;p<n;p++){let i=L[p],y=i.shadow;if(y===void 0){v0("WebGLShadowMap:",i,"has no shadow.");continue}if(y.autoUpdate===!1&&y.needsUpdate===!1)continue;K.copy(y.mapSize);let Q0=y.getFrameExtents();if(K.multiply(Q0),W.copy(y.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/Q0.x),K.x=W.x*Q0.x,y.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/Q0.y),K.y=W.y*Q0.y,y.mapSize.y=W.y}let K0=J.state.buffers.depth.getReversed();if(y.camera._reversedDepth=K0,y.map===null||a===!0){if(y.map!==null){if(y.map.depthTexture!==null)y.map.depthTexture.dispose(),y.map.depthTexture=null;y.map.dispose()}if(this.type===i8){if(i.isPointLight){v0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}y.map=new tJ(K.x,K.y,{format:O8,type:f9,minFilter:BJ,magFilter:BJ,generateMipmaps:!1}),y.map.texture.name=i.name+".shadowMap",y.map.depthTexture=new r9(K.x,K.y,j9),y.map.depthTexture.name=i.name+".shadowMapDepth",y.map.depthTexture.format=G8,y.map.depthTexture.compareFunction=null,y.map.depthTexture.minFilter=i9,y.map.depthTexture.magFilter=i9}else{if(i.isPointLight)y.map=new o$(K.x),y.map.depthTexture=new L$(K.x,o9);else y.map=new tJ(K.x,K.y),y.map.depthTexture=new r9(K.x,K.y,o9);if(y.map.depthTexture.name=i.name+".shadowMap",y.map.depthTexture.format=G8,this.type===E7)y.map.depthTexture.compareFunction=K0?B6:z6,y.map.depthTexture.minFilter=BJ,y.map.depthTexture.magFilter=BJ;else y.map.depthTexture.compareFunction=null,y.map.depthTexture.minFilter=i9,y.map.depthTexture.magFilter=i9}y.camera.updateProjectionMatrix()}let G0=y.map.isWebGLCubeRenderTarget?6:1;for(let z0=0;z0<G0;z0++){if(y.map.isWebGLCubeRenderTarget)J.setRenderTarget(y.map,z0),J.clear();else{if(z0===0)J.setRenderTarget(y.map),J.clear();let B0=y.getViewport(z0);X.set(W.x*B0.x,W.y*B0.y,W.x*B0.z,W.y*B0.w),m.viewport(X)}if(i.isPointLight){let{camera:B0,matrix:qJ}=y,a0=i.distance||B0.far;if(a0!==B0.far)B0.far=a0,B0.updateProjectionMatrix();w7.setFromMatrixPosition(i.matrixWorld),B0.position.copy(w7),n$.copy(B0.position),n$.add(b5[z0]),B0.up.copy(h5[z0]),B0.lookAt(n$),B0.updateMatrixWorld(),qJ.makeTranslation(-w7.x,-w7.y,-w7.z),$W.multiplyMatrices(B0.projectionMatrix,B0.matrixWorldInverse),y._frustum.setFromProjectionMatrix($W,B0.coordinateSystem,B0.reversedDepth)}else y.updateMatrices(i);Z=y.getFrustum(),B(_,R,y.camera,i,this.type)}if(y.isPointLightShadow!==!0&&this.type===i8)A(y,R);y.needsUpdate=!1}F=this.type,O.needsUpdate=!1,J.setRenderTarget(M,d,C)};function A(L,_){let R=Q.update(I);if(q.defines.VSM_SAMPLES!==L.blurSamples)q.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,q.needsUpdate=!0,E.needsUpdate=!0;if(L.mapPass===null)L.mapPass=new tJ(K.x,K.y,{format:O8,type:f9});q.uniforms.shadow_pass.value=L.map.depthTexture,q.uniforms.resolution.value=L.mapSize,q.uniforms.radius.value=L.radius,J.setRenderTarget(L.mapPass),J.clear(),J.renderBufferDirect(_,null,R,q,I,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,J.setRenderTarget(L.map),J.clear(),J.renderBufferDirect(_,null,R,E,I,null)}function w(L,_,R,M){let d=null,C=R.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)d=C;else if(d=R.isPointLight===!0?U:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let m=d.uuid,a=_.uuid,p=H[m];if(p===void 0)p={},H[m]=p;let n=p[a];if(n===void 0)n=d.clone(),p[a]=n,_.addEventListener("dispose",P);d=n}if(d.visible=_.visible,d.wireframe=_.wireframe,M===i8)d.side=_.shadowSide!==null?_.shadowSide:_.side;else d.side=_.shadowSide!==null?_.shadowSide:G[_.side];if(d.alphaMap=_.alphaMap,d.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,d.map=_.map,d.clipShadows=_.clipShadows,d.clippingPlanes=_.clippingPlanes,d.clipIntersection=_.clipIntersection,d.displacementMap=_.displacementMap,d.displacementScale=_.displacementScale,d.displacementBias=_.displacementBias,d.wireframeLinewidth=_.wireframeLinewidth,d.linewidth=_.linewidth,R.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let m=J.properties.get(d);m.light=R}return d}function B(L,_,R,M,d){if(L.visible===!1)return;if(L.layers.test(_.layers)&&(L.isMesh||L.isLine||L.isPoints)){if((L.castShadow||L.receiveShadow&&d===i8)&&(!L.frustumCulled||Z.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,L.matrixWorld);let a=Q.update(L),p=L.material;if(Array.isArray(p)){let n=a.groups;for(let i=0,y=n.length;i<y;i++){let Q0=n[i],K0=p[Q0.materialIndex];if(K0&&K0.visible){let G0=w(L,K0,M,d);L.onBeforeShadow(J,L,_,R,a,G0,Q0),J.renderBufferDirect(R,null,a,G0,L,Q0),L.onAfterShadow(J,L,_,R,a,G0,Q0)}}}else if(p.visible){let n=w(L,p,M,d);L.onBeforeShadow(J,L,_,R,a,n,null),J.renderBufferDirect(R,null,a,n,L,null),L.onAfterShadow(J,L,_,R,a,n,null)}}}let m=L.children;for(let a=0,p=m.length;a<p;a++)B(m[a],_,R,M,d)}function P(L){L.target.removeEventListener("dispose",P);for(let R in H){let M=H[R],d=L.target.uuid;if(d in M)M[d].dispose(),delete M[d]}}}function g5(J,Q){function $(){let S=!1,U0=new OJ,c=null,N0=new OJ(0,0,0,0);return{setMask:function(O0){if(c!==O0&&!S)J.colorMask(O0,O0,O0,O0),c=O0},setLocked:function(O0){S=O0},setClear:function(O0,J0,Y0,b0,JJ){if(JJ===!0)O0*=b0,J0*=b0,Y0*=b0;if(U0.set(O0,J0,Y0,b0),N0.equals(U0)===!1)J.clearColor(O0,J0,Y0,b0),N0.copy(U0)},reset:function(){S=!1,c=null,N0.set(-1,0,0,0)}}}function Z(){let S=!1,U0=!1,c=null,N0=null,O0=null;return{setReversed:function(J0){if(U0!==J0){let Y0=Q.get("EXT_clip_control");if(J0)Y0.clipControlEXT(Y0.LOWER_LEFT_EXT,Y0.ZERO_TO_ONE_EXT);else Y0.clipControlEXT(Y0.LOWER_LEFT_EXT,Y0.NEGATIVE_ONE_TO_ONE_EXT);U0=J0;let b0=O0;O0=null,this.setClear(b0)}},getReversed:function(){return U0},setTest:function(J0){if(J0)L0(J.DEPTH_TEST);else S0(J.DEPTH_TEST)},setMask:function(J0){if(c!==J0&&!S)J.depthMask(J0),c=J0},setFunc:function(J0){if(U0)J0=_K[J0];if(N0!==J0){switch(J0){case eZ:J.depthFunc(J.NEVER);break;case JK:J.depthFunc(J.ALWAYS);break;case QK:J.depthFunc(J.LESS);break;case zQ:J.depthFunc(J.LEQUAL);break;case $K:J.depthFunc(J.EQUAL);break;case ZK:J.depthFunc(J.GEQUAL);break;case KK:J.depthFunc(J.GREATER);break;case WK:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}N0=J0}},setLocked:function(J0){S=J0},setClear:function(J0){if(O0!==J0){if(O0=J0,U0)J0=1-J0;J.clearDepth(J0)}},reset:function(){S=!1,c=null,N0=null,O0=null,U0=!1}}}function K(){let S=!1,U0=null,c=null,N0=null,O0=null,J0=null,Y0=null,b0=null,JJ=null;return{setTest:function(QJ){if(!S)if(QJ)L0(J.STENCIL_TEST);else S0(J.STENCIL_TEST)},setMask:function(QJ){if(U0!==QJ&&!S)J.stencilMask(QJ),U0=QJ},setFunc:function(QJ,uJ,K9){if(c!==QJ||N0!==uJ||O0!==K9)J.stencilFunc(QJ,uJ,K9),c=QJ,N0=uJ,O0=K9},setOp:function(QJ,uJ,K9){if(J0!==QJ||Y0!==uJ||b0!==K9)J.stencilOp(QJ,uJ,K9),J0=QJ,Y0=uJ,b0=K9},setLocked:function(QJ){S=QJ},setClear:function(QJ){if(JJ!==QJ)J.clearStencil(QJ),JJ=QJ},reset:function(){S=!1,U0=null,c=null,N0=null,O0=null,J0=null,Y0=null,b0=null,JJ=null}}}let W=new $,X=new Z,Y=new K,U=new WeakMap,H=new WeakMap,N={},G={},q={},E=new WeakMap,V=[],I=null,O=!1,F=null,A=null,w=null,B=null,P=null,L=null,_=null,R=new c0(0,0,0),M=0,d=!1,C=null,m=null,a=null,p=null,n=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),y=!1,Q0=0,K0=J.getParameter(J.VERSION);if(K0.indexOf("WebGL")!==-1)Q0=parseFloat(/^WebGL (\d)/.exec(K0)[1]),y=Q0>=1;else if(K0.indexOf("OpenGL ES")!==-1)Q0=parseFloat(/^OpenGL ES (\d)/.exec(K0)[1]),y=Q0>=2;let G0=null,z0={},B0=J.getParameter(J.SCISSOR_BOX),qJ=J.getParameter(J.VIEWPORT),a0=new OJ().fromArray(B0),r=new OJ().fromArray(qJ);function X0(S,U0,c,N0){let O0=new Uint8Array(4),J0=J.createTexture();J.bindTexture(S,J0),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let Y0=0;Y0<c;Y0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D(U0,0,J.RGBA,1,1,N0,0,J.RGBA,J.UNSIGNED_BYTE,O0);else J.texImage2D(U0+Y0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,O0);return J0}let k0={};k0[J.TEXTURE_2D]=X0(J.TEXTURE_2D,J.TEXTURE_2D,1),k0[J.TEXTURE_CUBE_MAP]=X0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),k0[J.TEXTURE_2D_ARRAY]=X0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),k0[J.TEXTURE_3D]=X0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),L0(J.DEPTH_TEST),X.setFunc(zQ),AJ(!1),XJ(RQ),L0(J.CULL_FACE),g0(k9);function L0(S){if(N[S]!==!0)J.enable(S),N[S]=!0}function S0(S){if(N[S]!==!1)J.disable(S),N[S]=!1}function s0(S,U0){if(q[S]!==U0){if(J.bindFramebuffer(S,U0),q[S]=U0,S===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=U0;if(S===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=U0;return!0}return!1}function m0(S,U0){let c=V,N0=!1;if(S){if(c=E.get(U0),c===void 0)c=[],E.set(U0,c);let O0=S.textures;if(c.length!==O0.length||c[0]!==J.COLOR_ATTACHMENT0){for(let J0=0,Y0=O0.length;J0<Y0;J0++)c[J0]=J.COLOR_ATTACHMENT0+J0;c.length=O0.length,N0=!0}}else if(c[0]!==J.BACK)c[0]=J.BACK,N0=!0;if(N0)J.drawBuffers(c)}function x0(S){if(I!==S)return J.useProgram(S),I=S,!0;return!1}let r0={[a8]:J.FUNC_ADD,[vZ]:J.FUNC_SUBTRACT,[yZ]:J.FUNC_REVERSE_SUBTRACT};r0[bZ]=J.MIN,r0[hZ]=J.MAX;let n0={[xZ]:J.ZERO,[gZ]:J.ONE,[pZ]:J.SRC_COLOR,[lZ]:J.SRC_ALPHA,[iZ]:J.SRC_ALPHA_SATURATE,[nZ]:J.DST_COLOR,[uZ]:J.DST_ALPHA,[mZ]:J.ONE_MINUS_SRC_COLOR,[dZ]:J.ONE_MINUS_SRC_ALPHA,[sZ]:J.ONE_MINUS_DST_COLOR,[cZ]:J.ONE_MINUS_DST_ALPHA,[oZ]:J.CONSTANT_COLOR,[aZ]:J.ONE_MINUS_CONSTANT_COLOR,[rZ]:J.CONSTANT_ALPHA,[tZ]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(S,U0,c,N0,O0,J0,Y0,b0,JJ,QJ){if(S===k9){if(O===!0)S0(J.BLEND),O=!1;return}if(O===!1)L0(J.BLEND),O=!0;if(S!==fZ){if(S!==F||QJ!==d){if(A!==a8||P!==a8)J.blendEquation(J.FUNC_ADD),A=a8,P=a8;if(QJ)switch(S){case D7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case kQ:J.blendFunc(J.ONE,J.ONE);break;case LQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case VQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:f0("WebGLState: Invalid blending: ",S);break}else switch(S){case D7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case kQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case LQ:f0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case VQ:f0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:f0("WebGLState: Invalid blending: ",S);break}w=null,B=null,L=null,_=null,R.set(0,0,0),M=0,F=S,d=QJ}return}if(O0=O0||U0,J0=J0||c,Y0=Y0||N0,U0!==A||O0!==P)J.blendEquationSeparate(r0[U0],r0[O0]),A=U0,P=O0;if(c!==w||N0!==B||J0!==L||Y0!==_)J.blendFuncSeparate(n0[c],n0[N0],n0[J0],n0[Y0]),w=c,B=N0,L=J0,_=Y0;if(b0.equals(R)===!1||JJ!==M)J.blendColor(b0.r,b0.g,b0.b,JJ),R.copy(b0),M=JJ;F=S,d=!1}function RJ(S,U0){S.side===R9?S0(J.CULL_FACE):L0(J.CULL_FACE);let c=S.side===hJ;if(U0)c=!c;AJ(c),S.blending===D7&&S.transparent===!1?g0(k9):g0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),X.setFunc(S.depthFunc),X.setTest(S.depthTest),X.setMask(S.depthWrite),W.setMask(S.colorWrite);let N0=S.stencilWrite;if(Y.setTest(N0),N0)Y.setMask(S.stencilWriteMask),Y.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),Y.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);GJ(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?L0(J.SAMPLE_ALPHA_TO_COVERAGE):S0(J.SAMPLE_ALPHA_TO_COVERAGE)}function AJ(S){if(C!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);C=S}}function XJ(S){if(S!==TZ){if(L0(J.CULL_FACE),S!==m)if(S===RQ)J.cullFace(J.BACK);else if(S===SZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else S0(J.CULL_FACE);m=S}function MJ(S){if(S!==a){if(y)J.lineWidth(S);a=S}}function GJ(S,U0,c){if(S){if(L0(J.POLYGON_OFFSET_FILL),p!==U0||n!==c){if(p=U0,n=c,X.getReversed())U0=-U0;J.polygonOffset(U0,c)}}else S0(J.POLYGON_OFFSET_FILL)}function LJ(S){if(S)L0(J.SCISSOR_TEST);else S0(J.SCISSOR_TEST)}function j(S){if(S===void 0)S=J.TEXTURE0+i-1;if(G0!==S)J.activeTexture(S),G0=S}function gJ(S,U0,c){if(c===void 0)if(G0===null)c=J.TEXTURE0+i-1;else c=G0;let N0=z0[c];if(N0===void 0)N0={type:void 0,texture:void 0},z0[c]=N0;if(N0.type!==S||N0.texture!==U0){if(G0!==c)J.activeTexture(c),G0=c;J.bindTexture(S,U0||k0[S]),N0.type=S,N0.texture=U0}}function t0(){let S=z0[G0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function YJ(){try{J.compressedTexImage2D(...arguments)}catch(S){f0("WebGLState:",S)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(S){f0("WebGLState:",S)}}function D(){try{J.texSubImage2D(...arguments)}catch(S){f0("WebGLState:",S)}}function T(){try{J.texSubImage3D(...arguments)}catch(S){f0("WebGLState:",S)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(S){f0("WebGLState:",S)}}function e(){try{J.compressedTexSubImage3D(...arguments)}catch(S){f0("WebGLState:",S)}}function Z0(){try{J.texStorage2D(...arguments)}catch(S){f0("WebGLState:",S)}}function H0(){try{J.texStorage3D(...arguments)}catch(S){f0("WebGLState:",S)}}function u(){try{J.texImage2D(...arguments)}catch(S){f0("WebGLState:",S)}}function o(){try{J.texImage3D(...arguments)}catch(S){f0("WebGLState:",S)}}function R0(S){if(G[S]!==void 0)return G[S];else return J.getParameter(S)}function M0(S,U0){if(G[S]!==U0)J.pixelStorei(S,U0),G[S]=U0}function q0(S){if(a0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),a0.copy(S)}function W0(S){if(r.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),r.copy(S)}function _0(S,U0){let c=H.get(U0);if(c===void 0)c=new WeakMap,H.set(U0,c);let N0=c.get(S);if(N0===void 0)N0=J.getUniformBlockIndex(U0,S.name),c.set(S,N0)}function A0(S,U0){let N0=H.get(U0).get(S);if(U.get(U0)!==N0)J.uniformBlockBinding(U0,N0,S.__bindingPointIndex),U.set(U0,N0)}function d0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},G={},G0=null,z0={},q={},E=new WeakMap,V=[],I=null,O=!1,F=null,A=null,w=null,B=null,P=null,L=null,_=null,R=new c0(0,0,0),M=0,d=!1,C=null,m=null,a=null,p=null,n=null,a0.set(0,0,J.canvas.width,J.canvas.height),r.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:L0,disable:S0,bindFramebuffer:s0,drawBuffers:m0,useProgram:x0,setBlending:g0,setMaterial:RJ,setFlipSided:AJ,setCullFace:XJ,setLineWidth:MJ,setPolygonOffset:GJ,setScissorTest:LJ,activeTexture:j,bindTexture:gJ,unbindTexture:t0,compressedTexImage2D:YJ,compressedTexImage3D:z,texImage2D:u,texImage3D:o,pixelStorei:M0,getParameter:R0,updateUBOMapping:_0,uniformBlockBinding:A0,texStorage2D:Z0,texStorage3D:H0,texSubImage2D:D,texSubImage3D:T,compressedTexSubImage2D:l,compressedTexSubImage3D:e,scissor:q0,viewport:W0,reset:d0}}function p5(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new u0,N=new WeakMap,G=new Set,q,E=new WeakMap,V=!1;try{V=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function I(z,D){return V?new OffscreenCanvas(z,D):n8("canvas")}function O(z,D,T){let l=1,e=YJ(z);if(e.width>T||e.height>T)l=T/Math.max(e.width,e.height);if(l<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let Z0=Math.floor(l*e.width),H0=Math.floor(l*e.height);if(q===void 0)q=I(Z0,H0);let u=D?I(Z0,H0):q;return u.width=Z0,u.height=H0,u.getContext("2d").drawImage(z,0,0,Z0,H0),v0("WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+Z0+"x"+H0+")."),u}else{if("data"in z)v0("WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return z}return z}function F(z){return z.generateMipmaps}function A(z){J.generateMipmap(z)}function w(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function B(z,D,T,l,e,Z0=!1){if(z!==null){if(J[z]!==void 0)return J[z];v0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let H0;if(l){if(H0=Q.get("EXT_texture_norm16"),!H0)v0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let u=D;if(D===J.RED){if(T===J.FLOAT)u=J.R32F;if(T===J.HALF_FLOAT)u=J.R16F;if(T===J.UNSIGNED_BYTE)u=J.R8;if(T===J.UNSIGNED_SHORT&&H0)u=H0.R16_EXT;if(T===J.SHORT&&H0)u=H0.R16_SNORM_EXT}if(D===J.RED_INTEGER){if(T===J.UNSIGNED_BYTE)u=J.R8UI;if(T===J.UNSIGNED_SHORT)u=J.R16UI;if(T===J.UNSIGNED_INT)u=J.R32UI;if(T===J.BYTE)u=J.R8I;if(T===J.SHORT)u=J.R16I;if(T===J.INT)u=J.R32I}if(D===J.RG){if(T===J.FLOAT)u=J.RG32F;if(T===J.HALF_FLOAT)u=J.RG16F;if(T===J.UNSIGNED_BYTE)u=J.RG8;if(T===J.UNSIGNED_SHORT&&H0)u=H0.RG16_EXT;if(T===J.SHORT&&H0)u=H0.RG16_SNORM_EXT}if(D===J.RG_INTEGER){if(T===J.UNSIGNED_BYTE)u=J.RG8UI;if(T===J.UNSIGNED_SHORT)u=J.RG16UI;if(T===J.UNSIGNED_INT)u=J.RG32UI;if(T===J.BYTE)u=J.RG8I;if(T===J.SHORT)u=J.RG16I;if(T===J.INT)u=J.RG32I}if(D===J.RGB_INTEGER){if(T===J.UNSIGNED_BYTE)u=J.RGB8UI;if(T===J.UNSIGNED_SHORT)u=J.RGB16UI;if(T===J.UNSIGNED_INT)u=J.RGB32UI;if(T===J.BYTE)u=J.RGB8I;if(T===J.SHORT)u=J.RGB16I;if(T===J.INT)u=J.RGB32I}if(D===J.RGBA_INTEGER){if(T===J.UNSIGNED_BYTE)u=J.RGBA8UI;if(T===J.UNSIGNED_SHORT)u=J.RGBA16UI;if(T===J.UNSIGNED_INT)u=J.RGBA32UI;if(T===J.BYTE)u=J.RGBA8I;if(T===J.SHORT)u=J.RGBA16I;if(T===J.INT)u=J.RGBA32I}if(D===J.RGB){if(T===J.UNSIGNED_SHORT&&H0)u=H0.RGB16_EXT;if(T===J.SHORT&&H0)u=H0.RGB16_SNORM_EXT;if(T===J.UNSIGNED_INT_5_9_9_9_REV)u=J.RGB9_E5;if(T===J.UNSIGNED_INT_10F_11F_11F_REV)u=J.R11F_G11F_B10F}if(D===J.RGBA){let o=Z0?G$:i0.getTransfer(e);if(T===J.FLOAT)u=J.RGBA32F;if(T===J.HALF_FLOAT)u=J.RGBA16F;if(T===J.UNSIGNED_BYTE)u=o===HJ?J.SRGB8_ALPHA8:J.RGBA8;if(T===J.UNSIGNED_SHORT&&H0)u=H0.RGBA16_EXT;if(T===J.SHORT&&H0)u=H0.RGBA16_SNORM_EXT;if(T===J.UNSIGNED_SHORT_4_4_4_4)u=J.RGBA4;if(T===J.UNSIGNED_SHORT_5_5_5_1)u=J.RGB5_A1}if(u===J.R16F||u===J.R32F||u===J.RG16F||u===J.RG32F||u===J.RGBA16F||u===J.RGBA32F)Q.get("EXT_color_buffer_float");return u}function P(z,D){let T;if(z){if(D===null||D===o9||D===t8)T=J.DEPTH24_STENCIL8;else if(D===j9)T=J.DEPTH32F_STENCIL8;else if(D===V7)T=J.DEPTH24_STENCIL8,v0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===o9||D===t8)T=J.DEPTH_COMPONENT24;else if(D===j9)T=J.DEPTH_COMPONENT32F;else if(D===V7)T=J.DEPTH_COMPONENT16;return T}function L(z,D){if(F(z)===!0||z.isFramebufferTexture&&z.minFilter!==i9&&z.minFilter!==BJ)return Math.log2(Math.max(D.width,D.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return D.mipmaps.length;else return 1}function _(z){let D=z.target;if(D.removeEventListener("dispose",_),M(D),D.isVideoTexture)N.delete(D);if(D.isHTMLTexture)G.delete(D)}function R(z){let D=z.target;D.removeEventListener("dispose",R),C(D)}function M(z){let D=Z.get(z);if(D.__webglInit===void 0)return;let T=z.source,l=E.get(T);if(l){let e=l[D.__cacheKey];if(e.usedTimes--,e.usedTimes===0)d(z);if(Object.keys(l).length===0)E.delete(T)}Z.remove(z)}function d(z){let D=Z.get(z);J.deleteTexture(D.__webglTexture);let T=z.source,l=E.get(T);delete l[D.__cacheKey],X.memory.textures--}function C(z){let D=Z.get(z);if(z.depthTexture)z.depthTexture.dispose(),Z.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(D.__webglFramebuffer[l]))for(let e=0;e<D.__webglFramebuffer[l].length;e++)J.deleteFramebuffer(D.__webglFramebuffer[l][e]);else J.deleteFramebuffer(D.__webglFramebuffer[l]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[l])}else{if(Array.isArray(D.__webglFramebuffer))for(let l=0;l<D.__webglFramebuffer.length;l++)J.deleteFramebuffer(D.__webglFramebuffer[l]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let l=0;l<D.__webglColorRenderbuffer.length;l++)if(D.__webglColorRenderbuffer[l])J.deleteRenderbuffer(D.__webglColorRenderbuffer[l])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let T=z.textures;for(let l=0,e=T.length;l<e;l++){let Z0=Z.get(T[l]);if(Z0.__webglTexture)J.deleteTexture(Z0.__webglTexture),X.memory.textures--;Z.remove(T[l])}Z.remove(z)}let m=0;function a(){m=0}function p(){return m}function n(z){m=z}function i(){let z=m;if(z>=K.maxTextures)v0("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+K.maxTextures);return m+=1,z}function y(z){let D=[];return D.push(z.wrapS),D.push(z.wrapT),D.push(z.wrapR||0),D.push(z.magFilter),D.push(z.minFilter),D.push(z.anisotropy),D.push(z.internalFormat),D.push(z.format),D.push(z.type),D.push(z.generateMipmaps),D.push(z.premultiplyAlpha),D.push(z.flipY),D.push(z.unpackAlignment),D.push(z.colorSpace),D.join()}function Q0(z,D){let T=Z.get(z);if(z.isVideoTexture)gJ(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&T.__version!==z.version){let l=z.image;if(l===null)v0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)v0("WebGLRenderer: Texture marked for update but image is incomplete");else{S0(T,z,D);return}}else if(z.isExternalTexture)T.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,T.__webglTexture,J.TEXTURE0+D)}function K0(z,D){let T=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&T.__version!==z.version){S0(T,z,D);return}else if(z.isExternalTexture)T.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,T.__webglTexture,J.TEXTURE0+D)}function G0(z,D){let T=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&T.__version!==z.version){S0(T,z,D);return}$.bindTexture(J.TEXTURE_3D,T.__webglTexture,J.TEXTURE0+D)}function z0(z,D){let T=Z.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&T.__version!==z.version){s0(T,z,D);return}$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+D)}let B0={[G6]:J.REPEAT,[F6]:J.CLAMP_TO_EDGE,[HK]:J.MIRRORED_REPEAT},qJ={[i9]:J.NEAREST,[qK]:J.NEAREST_MIPMAP_NEAREST,[L7]:J.NEAREST_MIPMAP_LINEAR,[BJ]:J.LINEAR,[O6]:J.LINEAR_MIPMAP_NEAREST,[N8]:J.LINEAR_MIPMAP_LINEAR},a0={[LK]:J.NEVER,[IK]:J.ALWAYS,[VK]:J.LESS,[z6]:J.LEQUAL,[zK]:J.EQUAL,[B6]:J.GEQUAL,[BK]:J.GREATER,[MK]:J.NOTEQUAL};function r(z,D){if(D.type===j9&&Q.has("OES_texture_float_linear")===!1&&(D.magFilter===BJ||D.magFilter===O6||D.magFilter===L7||D.magFilter===N8||D.minFilter===BJ||D.minFilter===O6||D.minFilter===L7||D.minFilter===N8))v0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,B0[D.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,B0[D.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,B0[D.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,qJ[D.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,qJ[D.minFilter]),D.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,a0[D.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===i9)return;if(D.minFilter!==L7&&D.minFilter!==N8)return;if(D.type===j9&&Q.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy){let T=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,K.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}}function X0(z,D){let T=!1;if(z.__webglInit===void 0)z.__webglInit=!0,D.addEventListener("dispose",_);let l=D.source,e=E.get(l);if(e===void 0)e={},E.set(l,e);let Z0=y(D);if(Z0!==z.__cacheKey){if(e[Z0]===void 0)e[Z0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,T=!0;e[Z0].usedTimes++;let H0=e[z.__cacheKey];if(H0!==void 0){if(e[z.__cacheKey].usedTimes--,H0.usedTimes===0)d(D)}z.__cacheKey=Z0,z.__webglTexture=e[Z0].texture}return T}function k0(z,D,T){return Math.floor(Math.floor(z/T)/D)}function L0(z,D,T,l){let Z0=z.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D.width,D.height,T,l,D.data);else{Z0.sort((M0,q0)=>M0.start-q0.start);let H0=0;for(let M0=1;M0<Z0.length;M0++){let q0=Z0[H0],W0=Z0[M0],_0=q0.start+q0.count,A0=k0(W0.start,D.width,4),d0=k0(q0.start,D.width,4);if(W0.start<=_0+1&&A0===d0&&k0(W0.start+W0.count-1,D.width,4)===A0)q0.count=Math.max(q0.count,W0.start+W0.count-q0.start);else++H0,Z0[H0]=W0}Z0.length=H0+1;let u=$.getParameter(J.UNPACK_ROW_LENGTH),o=$.getParameter(J.UNPACK_SKIP_PIXELS),R0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,D.width);for(let M0=0,q0=Z0.length;M0<q0;M0++){let W0=Z0[M0],_0=Math.floor(W0.start/4),A0=Math.ceil(W0.count/4),d0=_0%D.width,S=Math.floor(_0/D.width),U0=A0,c=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,d0),$.pixelStorei(J.UNPACK_SKIP_ROWS,S),$.texSubImage2D(J.TEXTURE_2D,0,d0,S,U0,1,T,l,D.data)}z.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,u),$.pixelStorei(J.UNPACK_SKIP_PIXELS,o),$.pixelStorei(J.UNPACK_SKIP_ROWS,R0)}}function S0(z,D,T){let l=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)l=J.TEXTURE_3D;let e=X0(z,D),Z0=D.source;$.bindTexture(l,z.__webglTexture,J.TEXTURE0+T);let H0=Z.get(Z0);if(Z0.version!==H0.__version||e===!0){if($.activeTexture(J.TEXTURE0+T),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let c=i0.getPrimaries(i0.workingColorSpace),N0=D.colorSpace===E8?null:i0.getPrimaries(D.colorSpace),O0=D.colorSpace===E8||c===N0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,O0)}$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment);let o=O(D.image,!1,K.maxTextureSize);o=t0(D,o);let R0=W.convert(D.format,D.colorSpace),M0=W.convert(D.type),q0=B(D.internalFormat,R0,M0,D.normalized,D.colorSpace,D.isVideoTexture);r(l,D);let W0,_0=D.mipmaps,A0=D.isVideoTexture!==!0,d0=H0.__version===void 0||e===!0,S=Z0.dataReady,U0=L(D,o);if(D.isDepthTexture){if(q0=P(D.format===F8,D.type),d0)if(A0)$.texStorage2D(J.TEXTURE_2D,1,q0,o.width,o.height);else $.texImage2D(J.TEXTURE_2D,0,q0,o.width,o.height,0,R0,M0,null)}else if(D.isDataTexture)if(_0.length>0){if(A0&&d0)$.texStorage2D(J.TEXTURE_2D,U0,q0,_0[0].width,_0[0].height);for(let c=0,N0=_0.length;c<N0;c++)if(W0=_0[c],A0){if(S)$.texSubImage2D(J.TEXTURE_2D,c,0,0,W0.width,W0.height,R0,M0,W0.data)}else $.texImage2D(J.TEXTURE_2D,c,q0,W0.width,W0.height,0,R0,M0,W0.data);D.generateMipmaps=!1}else if(A0){if(d0)$.texStorage2D(J.TEXTURE_2D,U0,q0,o.width,o.height);if(S)L0(D,o,R0,M0)}else $.texImage2D(J.TEXTURE_2D,0,q0,o.width,o.height,0,R0,M0,o.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(A0&&d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,U0,q0,_0[0].width,_0[0].height,o.depth);for(let c=0,N0=_0.length;c<N0;c++)if(W0=_0[c],D.format!==L9)if(R0!==null)if(A0){if(S)if(D.layerUpdates.size>0){let O0=p$(W0.width,W0.height,D.format,D.type);for(let J0 of D.layerUpdates){let Y0=W0.data.subarray(J0*O0/W0.data.BYTES_PER_ELEMENT,(J0+1)*O0/W0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,J0,W0.width,W0.height,1,R0,Y0)}D.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,W0.width,W0.height,o.depth,R0,W0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,c,q0,W0.width,W0.height,o.depth,0,W0.data,0,0);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A0){if(S)$.texSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,W0.width,W0.height,o.depth,R0,M0,W0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,c,q0,W0.width,W0.height,o.depth,0,R0,M0,W0.data)}else{if(A0&&d0)$.texStorage2D(J.TEXTURE_2D,U0,q0,_0[0].width,_0[0].height);for(let c=0,N0=_0.length;c<N0;c++)if(W0=_0[c],D.format!==L9)if(R0!==null)if(A0){if(S)$.compressedTexSubImage2D(J.TEXTURE_2D,c,0,0,W0.width,W0.height,R0,W0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,c,q0,W0.width,W0.height,0,W0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A0){if(S)$.texSubImage2D(J.TEXTURE_2D,c,0,0,W0.width,W0.height,R0,M0,W0.data)}else $.texImage2D(J.TEXTURE_2D,c,q0,W0.width,W0.height,0,R0,M0,W0.data)}else if(D.isDataArrayTexture)if(A0){if(d0)$.texStorage3D(J.TEXTURE_2D_ARRAY,U0,q0,o.width,o.height,o.depth);if(S)if(D.layerUpdates.size>0){let c=p$(o.width,o.height,D.format,D.type);for(let N0 of D.layerUpdates){let O0=o.data.subarray(N0*c/o.data.BYTES_PER_ELEMENT,(N0+1)*c/o.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,N0,o.width,o.height,1,R0,M0,O0)}D.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,o.width,o.height,o.depth,R0,M0,o.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,q0,o.width,o.height,o.depth,0,R0,M0,o.data);else if(D.isData3DTexture)if(A0){if(d0)$.texStorage3D(J.TEXTURE_3D,U0,q0,o.width,o.height,o.depth);if(S)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,o.width,o.height,o.depth,R0,M0,o.data)}else $.texImage3D(J.TEXTURE_3D,0,q0,o.width,o.height,o.depth,0,R0,M0,o.data);else if(D.isFramebufferTexture){if(d0)if(A0)$.texStorage2D(J.TEXTURE_2D,U0,q0,o.width,o.height);else{let{width:c,height:N0}=o;for(let O0=0;O0<U0;O0++)$.texImage2D(J.TEXTURE_2D,O0,q0,c,N0,0,R0,M0,null),c>>=1,N0>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in J){let c=J.canvas;if(!c.hasAttribute("layoutsubtree"))c.setAttribute("layoutsubtree","true");if(o.parentNode!==c){c.appendChild(o),G.add(D),c.onpaint=(N0)=>{let O0=N0.changedElements;for(let J0 of G)if(O0.includes(J0.image))J0.needsUpdate=!0},c.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,o);else{let{RGBA:O0,RGBA:J0,UNSIGNED_BYTE:Y0}=J;J.texElementImage2D(J.TEXTURE_2D,0,O0,J0,Y0,o)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(_0.length>0){if(A0&&d0){let c=YJ(_0[0]);$.texStorage2D(J.TEXTURE_2D,U0,q0,c.width,c.height)}for(let c=0,N0=_0.length;c<N0;c++)if(W0=_0[c],A0){if(S)$.texSubImage2D(J.TEXTURE_2D,c,0,0,R0,M0,W0)}else $.texImage2D(J.TEXTURE_2D,c,q0,R0,M0,W0);D.generateMipmaps=!1}else if(A0){if(d0){let c=YJ(o);$.texStorage2D(J.TEXTURE_2D,U0,q0,c.width,c.height)}if(S)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R0,M0,o)}else $.texImage2D(J.TEXTURE_2D,0,q0,R0,M0,o);if(F(D))A(l);if(H0.__version=Z0.version,D.onUpdate)D.onUpdate(D)}z.__version=D.version}function s0(z,D,T){if(D.image.length!==6)return;let l=X0(z,D),e=D.source;$.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+T);let Z0=Z.get(e);if(e.version!==Z0.__version||l===!0){$.activeTexture(J.TEXTURE0+T);let H0=i0.getPrimaries(i0.workingColorSpace),u=D.colorSpace===E8?null:i0.getPrimaries(D.colorSpace),o=D.colorSpace===E8||H0===u?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,o);let R0=D.isCompressedTexture||D.image[0].isCompressedTexture,M0=D.image[0]&&D.image[0].isDataTexture,q0=[];for(let J0=0;J0<6;J0++){if(!R0&&!M0)q0[J0]=O(D.image[J0],!0,K.maxCubemapSize);else q0[J0]=M0?D.image[J0].image:D.image[J0];q0[J0]=t0(D,q0[J0])}let W0=q0[0],_0=W.convert(D.format,D.colorSpace),A0=W.convert(D.type),d0=B(D.internalFormat,_0,A0,D.normalized,D.colorSpace),S=D.isVideoTexture!==!0,U0=Z0.__version===void 0||l===!0,c=e.dataReady,N0=L(D,W0);r(J.TEXTURE_CUBE_MAP,D);let O0;if(R0){if(S&&U0)$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,d0,W0.width,W0.height);for(let J0=0;J0<6;J0++){O0=q0[J0].mipmaps;for(let Y0=0;Y0<O0.length;Y0++){let b0=O0[Y0];if(D.format!==L9)if(_0!==null)if(S){if(c)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0,0,0,b0.width,b0.height,_0,b0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0,d0,b0.width,b0.height,0,b0.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0,0,0,b0.width,b0.height,_0,A0,b0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0,d0,b0.width,b0.height,0,_0,A0,b0.data)}}}else{if(O0=D.mipmaps,S&&U0){if(O0.length>0)N0++;let J0=YJ(q0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,d0,J0.width,J0.height)}for(let J0=0;J0<6;J0++)if(M0){if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,q0[J0].width,q0[J0].height,_0,A0,q0[J0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,d0,q0[J0].width,q0[J0].height,0,_0,A0,q0[J0].data);for(let Y0=0;Y0<O0.length;Y0++){let JJ=O0[Y0].image[J0].image;if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0+1,0,0,JJ.width,JJ.height,_0,A0,JJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0+1,d0,JJ.width,JJ.height,0,_0,A0,JJ.data)}}else{if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,_0,A0,q0[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,d0,_0,A0,q0[J0]);for(let Y0=0;Y0<O0.length;Y0++){let b0=O0[Y0];if(S){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0+1,0,0,_0,A0,b0.image[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,Y0+1,d0,_0,A0,b0.image[J0])}}}if(F(D))A(J.TEXTURE_CUBE_MAP);if(Z0.__version=e.version,D.onUpdate)D.onUpdate(D)}z.__version=D.version}function m0(z,D,T,l,e,Z0){let H0=W.convert(T.format,T.colorSpace),u=W.convert(T.type),o=B(T.internalFormat,H0,u,T.normalized,T.colorSpace),R0=Z.get(D),M0=Z.get(T);if(M0.__renderTarget=D,!R0.__hasExternalTextures){let q0=Math.max(1,D.width>>Z0),W0=Math.max(1,D.height>>Z0);if(e===J.TEXTURE_3D||e===J.TEXTURE_2D_ARRAY)$.texImage3D(e,Z0,o,q0,W0,D.depth,0,H0,u,null);else $.texImage2D(e,Z0,o,q0,W0,0,H0,u,null)}if($.bindFramebuffer(J.FRAMEBUFFER,z),j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,e,M0.__webglTexture,0,LJ(D));else if(e===J.TEXTURE_2D||e>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&e<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,e,M0.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function x0(z,D,T){if(J.bindRenderbuffer(J.RENDERBUFFER,z),D.depthBuffer){let l=D.depthTexture,e=l&&l.isDepthTexture?l.type:null,Z0=P(D.stencilBuffer,e),H0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(j(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,LJ(D),Z0,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,LJ(D),Z0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,H0,J.RENDERBUFFER,z)}else{let l=D.textures;for(let e=0;e<l.length;e++){let Z0=l[e],H0=W.convert(Z0.format,Z0.colorSpace),u=W.convert(Z0.type),o=B(Z0.internalFormat,H0,u,Z0.normalized,Z0.colorSpace);if(j(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,LJ(D),o,D.width,D.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,LJ(D),o,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,o,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function r0(z,D,T){let l=D.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,z),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let e=Z.get(D.depthTexture);if(e.__renderTarget=D,!e.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;if(l){if(e.__webglInit===void 0)e.__webglInit=!0,D.depthTexture.addEventListener("dispose",_);if(e.__webglTexture===void 0){e.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),r(J.TEXTURE_CUBE_MAP,D.depthTexture);let R0=W.convert(D.depthTexture.format),M0=W.convert(D.depthTexture.type),q0;if(D.depthTexture.format===G8)q0=J.DEPTH_COMPONENT24;else if(D.depthTexture.format===F8)q0=J.DEPTH24_STENCIL8;for(let W0=0;W0<6;W0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0,q0,D.width,D.height,0,R0,M0,null)}}else Q0(D.depthTexture,0);let Z0=e.__webglTexture,H0=LJ(D),u=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+T:J.TEXTURE_2D,o=D.depthTexture.format===F8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(D.depthTexture.format===G8)if(j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,u,Z0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,u,Z0,0);else if(D.depthTexture.format===F8)if(j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,u,Z0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,u,Z0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function n0(z){let D=Z.get(z),T=z.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==z.depthTexture){let l=z.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(l){let e=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,l.removeEventListener("dispose",e)};l.addEventListener("dispose",e),D.__depthDisposeCallback=e}D.__boundDepthTexture=l}if(z.depthTexture&&!D.__autoAllocateDepthBuffer)if(T)for(let l=0;l<6;l++)r0(D.__webglFramebuffer[l],z,l);else{let l=z.texture.mipmaps;if(l&&l.length>0)r0(D.__webglFramebuffer[0],z,0);else r0(D.__webglFramebuffer,z,0)}else if(T){D.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[l]),D.__webglDepthbuffer[l]===void 0)D.__webglDepthbuffer[l]=J.createRenderbuffer(),x0(D.__webglDepthbuffer[l],z,!1);else{let e=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=D.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Z0)}}else{let l=z.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer);if(D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),x0(D.__webglDepthbuffer,z,!1);else{let e=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function g0(z,D,T){let l=Z.get(z);if(D!==void 0)m0(l.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(T!==void 0)n0(z)}function RJ(z){let D=z.texture,T=Z.get(z),l=Z.get(D);z.addEventListener("dispose",R);let e=z.textures,Z0=z.isWebGLCubeRenderTarget===!0,H0=e.length>1;if(!H0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=D.version,X.memory.textures++}if(Z0){T.__webglFramebuffer=[];for(let u=0;u<6;u++)if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer[u]=[];for(let o=0;o<D.mipmaps.length;o++)T.__webglFramebuffer[u][o]=J.createFramebuffer()}else T.__webglFramebuffer[u]=J.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){T.__webglFramebuffer=[];for(let u=0;u<D.mipmaps.length;u++)T.__webglFramebuffer[u]=J.createFramebuffer()}else T.__webglFramebuffer=J.createFramebuffer();if(H0)for(let u=0,o=e.length;u<o;u++){let R0=Z.get(e[u]);if(R0.__webglTexture===void 0)R0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&j(z)===!1){T.__webglMultisampledFramebuffer=J.createFramebuffer(),T.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let u=0;u<e.length;u++){let o=e[u];T.__webglColorRenderbuffer[u]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,T.__webglColorRenderbuffer[u]);let R0=W.convert(o.format,o.colorSpace),M0=W.convert(o.type),q0=B(o.internalFormat,R0,M0,o.normalized,o.colorSpace,z.isXRRenderTarget===!0),W0=LJ(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,q0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+u,J.RENDERBUFFER,T.__webglColorRenderbuffer[u])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)T.__webglDepthRenderbuffer=J.createRenderbuffer(),x0(T.__webglDepthRenderbuffer,z,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),r(J.TEXTURE_CUBE_MAP,D);for(let u=0;u<6;u++)if(D.mipmaps&&D.mipmaps.length>0)for(let o=0;o<D.mipmaps.length;o++)m0(T.__webglFramebuffer[u][o],z,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+u,o);else m0(T.__webglFramebuffer[u],z,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+u,0);if(F(D))A(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(H0){for(let u=0,o=e.length;u<o;u++){let R0=e[u],M0=Z.get(R0),q0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)q0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(q0,M0.__webglTexture),r(q0,R0),m0(T.__webglFramebuffer,z,R0,J.COLOR_ATTACHMENT0+u,q0,0),F(R0))A(q0)}$.unbindTexture()}else{let u=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)u=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(u,l.__webglTexture),r(u,D),D.mipmaps&&D.mipmaps.length>0)for(let o=0;o<D.mipmaps.length;o++)m0(T.__webglFramebuffer[o],z,D,J.COLOR_ATTACHMENT0,u,o);else m0(T.__webglFramebuffer,z,D,J.COLOR_ATTACHMENT0,u,0);if(F(D))A(u);$.unbindTexture()}if(z.depthBuffer)n0(z)}function AJ(z){let D=z.textures;for(let T=0,l=D.length;T<l;T++){let e=D[T];if(F(e)){let Z0=w(z),H0=Z.get(e).__webglTexture;$.bindTexture(Z0,H0),A(Z0),$.unbindTexture()}}}let XJ=[],MJ=[];function GJ(z){if(z.samples>0){if(j(z)===!1){let{textures:D,width:T,height:l}=z,e=J.COLOR_BUFFER_BIT,Z0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=Z.get(z),u=D.length>1;if(u)for(let R0=0;R0<D.length;R0++)$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,H0.__webglMultisampledFramebuffer);let o=z.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer);for(let R0=0;R0<D.length;R0++){if(z.resolveDepthBuffer){if(z.depthBuffer)e|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)e|=J.STENCIL_BUFFER_BIT}if(u){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[R0]);let M0=Z.get(D[R0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,M0,0)}if(J.blitFramebuffer(0,0,T,l,0,0,T,l,e,J.NEAREST),U===!0){if(XJ.length=0,MJ.length=0,XJ.push(J.COLOR_ATTACHMENT0+R0),z.depthBuffer&&z.resolveDepthBuffer===!1)XJ.push(Z0),MJ.push(Z0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,MJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,XJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),u)for(let R0=0;R0<D.length;R0++){$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[R0]);let M0=Z.get(D[R0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+R0,J.TEXTURE_2D,M0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&U){let D=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function LJ(z){return Math.min(K.maxSamples,z.samples)}function j(z){let D=Z.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function gJ(z){let D=X.render.frame;if(N.get(z)!==D)N.set(z,D),z.update()}function t0(z,D){let{colorSpace:T,format:l,type:e}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return D;if(T!==N$&&T!==E8)if(i0.getTransfer(T)===HJ){if(l!==L9||e!==q9)v0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else f0("WebGLTextures: Unsupported texture color space:",T);return D}function YJ(z){if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement)H.width=z.naturalWidth||z.width,H.height=z.naturalHeight||z.height;else if(typeof VideoFrame<"u"&&z instanceof VideoFrame)H.width=z.displayWidth,H.height=z.displayHeight;else H.width=z.width,H.height=z.height;return H}this.allocateTextureUnit=i,this.resetTextureUnits=a,this.getTextureUnits=p,this.setTextureUnits=n,this.setTexture2D=Q0,this.setTexture2DArray=K0,this.setTexture3D=G0,this.setTextureCube=z0,this.rebindTextures=g0,this.setupRenderTarget=RJ,this.updateRenderTargetMipmap=AJ,this.updateMultisampleRenderTarget=GJ,this.setupDepthRenderbuffer=n0,this.setupFrameBufferTexture=m0,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function m5(J,Q){function $(Z,K=E8){let W,X=i0.getTransfer(K);if(Z===q9)return J.UNSIGNED_BYTE;if(Z===wQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===TQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===FK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===OK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===NK)return J.BYTE;if(Z===GK)return J.SHORT;if(Z===V7)return J.UNSIGNED_SHORT;if(Z===_Q)return J.INT;if(Z===o9)return J.UNSIGNED_INT;if(Z===j9)return J.FLOAT;if(Z===f9)return J.HALF_FLOAT;if(Z===EK)return J.ALPHA;if(Z===DK)return J.RGB;if(Z===L9)return J.RGBA;if(Z===G8)return J.DEPTH_COMPONENT;if(Z===F8)return J.DEPTH_STENCIL;if(Z===RK)return J.RED;if(Z===SQ)return J.RED_INTEGER;if(Z===O8)return J.RG;if(Z===jQ)return J.RG_INTEGER;if(Z===fQ)return J.RGBA_INTEGER;if(Z===E6||Z===D6||Z===R6||Z===k6)if(X===HJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===E6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===D6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===R6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===k6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===E6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===D6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===R6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===k6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===vQ||Z===yQ||Z===bQ||Z===hQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===vQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===yQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===bQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===hQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===xQ||Z===gQ||Z===pQ||Z===mQ||Z===lQ||Z===L6||Z===dQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===xQ||Z===gQ)return X===HJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===pQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===mQ)return W.COMPRESSED_R11_EAC;if(Z===lQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===L6)return W.COMPRESSED_RG11_EAC;if(Z===dQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===uQ||Z===cQ||Z===nQ||Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===rQ||Z===tQ||Z===eQ||Z===J$||Z===Q$||Z===$$||Z===Z$)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===uQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===cQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===nQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===sQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===iQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===oQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===aQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===rQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===tQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===eQ)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===J$)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===Q$)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===$$)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===Z$)return X===HJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===K$||Z===W$||Z===X$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===K$)return X===HJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===W$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===X$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===Y$||Z===U$||Z===V6||Z===H$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===Y$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===U$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===V6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===H$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===t8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var l5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d5=`
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

}`;class OW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new w6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new eJ({vertexShader:l5,fragmentShader:d5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new j0(new dJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EW extends v9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,U=null,H=null,N=null,G=null,q=null,E=null,V=typeof XRWebGLBinding<"u",I=new OW,O={},F=Q.getContextAttributes(),A=null,w=null,B=[],P=[],L=new u0,_=null,R=new bJ;R.viewport=new OJ;let M=new bJ;M.viewport=new OJ;let d=[R,M],C=new b$,m=null,a=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(r){let X0=B[r];if(X0===void 0)X0=new I7,B[r]=X0;return X0.getTargetRaySpace()},this.getControllerGrip=function(r){let X0=B[r];if(X0===void 0)X0=new I7,B[r]=X0;return X0.getGripSpace()},this.getHand=function(r){let X0=B[r];if(X0===void 0)X0=new I7,B[r]=X0;return X0.getHandSpace()};function p(r){let X0=P.indexOf(r.inputSource);if(X0===-1)return;let k0=B[X0];if(k0!==void 0)k0.update(r.inputSource,r.frame,U||W),k0.dispatchEvent({type:r.type,data:r.inputSource})}function n(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",n),Z.removeEventListener("inputsourceschange",i);for(let r=0;r<B.length;r++){let X0=P[r];if(X0===null)continue;P[r]=null,B[r].disconnect(X0)}m=null,a=null,I.reset();for(let r in O)delete O[r];J.setRenderTarget(A),q=null,G=null,N=null,Z=null,w=null,a0.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(L.width,L.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(r){if(K=r,$.isPresenting===!0)v0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(r){if(X=r,$.isPresenting===!0)v0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(r){U=r},this.getBaseLayer=function(){return G!==null?G:q},this.getBinding=function(){if(N===null&&V)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(r){if(Z=r,Z!==null){if(A=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",n),Z.addEventListener("inputsourceschange",i),F.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(L),!(V&&("createProjectionLayer"in XRWebGLBinding.prototype))){let k0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,k0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),w=new tJ(q.framebufferWidth,q.framebufferHeight,{format:L9,type:q9,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let k0=null,L0=null,S0=null;if(F.depth)S0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,k0=F.stencil?F8:G8,L0=F.stencil?t8:o9;let s0={colorFormat:Q.RGBA8,depthFormat:S0,scaleFactor:K};N=this.getBinding(),G=N.createProjectionLayer(s0),Z.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),w=new tJ(G.textureWidth,G.textureHeight,{format:L9,type:q9,depthTexture:new r9(G.textureWidth,G.textureHeight,L0,void 0,void 0,void 0,void 0,void 0,void 0,k0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(Y),U=null,W=await Z.requestReferenceSpace(X),a0.setContext(Z),a0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function i(r){for(let X0=0;X0<r.removed.length;X0++){let k0=r.removed[X0],L0=P.indexOf(k0);if(L0>=0)P[L0]=null,B[L0].disconnect(k0)}for(let X0=0;X0<r.added.length;X0++){let k0=r.added[X0],L0=P.indexOf(k0);if(L0===-1){for(let s0=0;s0<B.length;s0++)if(s0>=P.length){P.push(k0),L0=s0;break}else if(P[s0]===null){P[s0]=k0,L0=s0;break}if(L0===-1)break}let S0=B[L0];if(S0)S0.connect(k0)}}let y=new v,Q0=new v;function K0(r,X0,k0){y.setFromMatrixPosition(X0.matrixWorld),Q0.setFromMatrixPosition(k0.matrixWorld);let L0=y.distanceTo(Q0),S0=X0.projectionMatrix.elements,s0=k0.projectionMatrix.elements,m0=S0[14]/(S0[10]-1),x0=S0[14]/(S0[10]+1),r0=(S0[9]+1)/S0[5],n0=(S0[9]-1)/S0[5],g0=(S0[8]-1)/S0[0],RJ=(s0[8]+1)/s0[0],AJ=m0*g0,XJ=m0*RJ,MJ=L0/(-g0+RJ),GJ=MJ*-g0;if(X0.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.translateX(GJ),r.translateZ(MJ),r.matrixWorld.compose(r.position,r.quaternion,r.scale),r.matrixWorldInverse.copy(r.matrixWorld).invert(),S0[10]===-1)r.projectionMatrix.copy(X0.projectionMatrix),r.projectionMatrixInverse.copy(X0.projectionMatrixInverse);else{let LJ=m0+MJ,j=x0+MJ,gJ=AJ-GJ,t0=XJ+(L0-GJ),YJ=r0*x0/j*LJ,z=n0*x0/j*LJ;r.projectionMatrix.makePerspective(gJ,t0,YJ,z,LJ,j),r.projectionMatrixInverse.copy(r.projectionMatrix).invert()}}function G0(r,X0){if(X0===null)r.matrixWorld.copy(r.matrix);else r.matrixWorld.multiplyMatrices(X0.matrixWorld,r.matrix);r.matrixWorldInverse.copy(r.matrixWorld).invert()}this.updateCamera=function(r){if(Z===null)return;let{near:X0,far:k0}=r;if(I.texture!==null){if(I.depthNear>0)X0=I.depthNear;if(I.depthFar>0)k0=I.depthFar}if(C.near=M.near=R.near=X0,C.far=M.far=R.far=k0,m!==C.near||a!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),m=C.near,a=C.far;C.layers.mask=r.layers.mask|6,R.layers.mask=C.layers.mask&-5,M.layers.mask=C.layers.mask&-3;let L0=r.parent,S0=C.cameras;G0(C,L0);for(let s0=0;s0<S0.length;s0++)G0(S0[s0],L0);if(S0.length===2)K0(C,R,M);else C.projectionMatrix.copy(R.projectionMatrix);z0(r,C,L0)};function z0(r,X0,k0){if(k0===null)r.matrix.copy(X0.matrixWorld);else r.matrix.copy(k0.matrixWorld),r.matrix.invert(),r.matrix.multiply(X0.matrixWorld);if(r.matrix.decompose(r.position,r.quaternion,r.scale),r.updateMatrixWorld(!0),r.projectionMatrix.copy(X0.projectionMatrix),r.projectionMatrixInverse.copy(X0.projectionMatrixInverse),r.isPerspectiveCamera)r.fov=U6*2*Math.atan(1/r.projectionMatrix.elements[5]),r.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(G===null&&q===null)return;return Y},this.setFoveation=function(r){if(Y=r,G!==null)G.fixedFoveation=r;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=r},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(C)},this.getCameraTexture=function(r){return O[r]};let B0=null;function qJ(r,X0){if(H=X0.getViewerPose(U||W),E=X0,H!==null){let k0=H.views;if(q!==null)J.setRenderTargetFramebuffer(w,q.framebuffer),J.setRenderTarget(w);let L0=!1;if(k0.length!==C.cameras.length)C.cameras.length=0,L0=!0;for(let x0=0;x0<k0.length;x0++){let r0=k0[x0],n0=null;if(q!==null)n0=q.getViewport(r0);else{let RJ=N.getViewSubImage(G,r0);if(n0=RJ.viewport,x0===0)J.setRenderTargetTextures(w,RJ.colorTexture,RJ.depthStencilTexture),J.setRenderTarget(w)}let g0=d[x0];if(g0===void 0)g0=new bJ,g0.layers.enable(x0),g0.viewport=new OJ,d[x0]=g0;if(g0.matrix.fromArray(r0.transform.matrix),g0.matrix.decompose(g0.position,g0.quaternion,g0.scale),g0.projectionMatrix.fromArray(r0.projectionMatrix),g0.projectionMatrixInverse.copy(g0.projectionMatrix).invert(),g0.viewport.set(n0.x,n0.y,n0.width,n0.height),x0===0)C.matrix.copy(g0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(L0===!0)C.cameras.push(g0)}let S0=Z.enabledFeatures;if(S0&&S0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&V){N=$.getBinding();let x0=N.getDepthInformation(k0[0]);if(x0&&x0.isValid&&x0.texture)I.init(x0,Z.renderState)}if(S0&&S0.includes("camera-access")&&V){J.state.unbindTexture(),N=$.getBinding();for(let x0=0;x0<k0.length;x0++){let r0=k0[x0].camera;if(r0){let n0=O[r0];if(!n0)n0=new w6,O[r0]=n0;let g0=N.getCameraImage(r0);n0.sourceTexture=g0}}}}for(let k0=0;k0<B.length;k0++){let L0=P[k0],S0=B[k0];if(L0!==null&&S0!==void 0)S0.update(L0,X0,U||W)}if(B0)B0(r,X0);if(X0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:X0});E=null}let a0=new ZW;a0.setAnimationLoop(qJ),this.setAnimationLoop=function(r){B0=r},this.dispose=function(){}}}var u5=new WJ,DW=new h0;DW.set(-1,0,0,0,1,0,0,0,1);function c5(J,Q){function $(O,F){if(O.matrixAutoUpdate===!0)O.updateMatrix();F.value.copy(O.matrix)}function Z(O,F){if(F.color.getRGB(O.fogColor.value,V$(J)),F.isFog)O.fogNear.value=F.near,O.fogFar.value=F.far;else if(F.isFogExp2)O.fogDensity.value=F.density}function K(O,F,A,w,B){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)W(O,F);else if(F.isMeshLambertMaterial){if(W(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)W(O,F),G(O,F);else if(F.isMeshPhongMaterial){if(W(O,F),N(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(W(O,F),q(O,F),F.isMeshPhysicalMaterial)E(O,F,B)}else if(F.isMeshMatcapMaterial)W(O,F),V(O,F);else if(F.isMeshDepthMaterial)W(O,F);else if(F.isMeshDistanceMaterial)W(O,F),I(O,F);else if(F.isMeshNormalMaterial)W(O,F);else if(F.isLineBasicMaterial){if(X(O,F),F.isLineDashedMaterial)Y(O,F)}else if(F.isPointsMaterial)U(O,F,A,w);else if(F.isSpriteMaterial)H(O,F);else if(F.isShadowMaterial)O.color.value.copy(F.color),O.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function W(O,F){if(O.opacity.value=F.opacity,F.color)O.diffuse.value.copy(F.color);if(F.emissive)O.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.bumpMap){if(O.bumpMap.value=F.bumpMap,$(F.bumpMap,O.bumpMapTransform),O.bumpScale.value=F.bumpScale,F.side===hJ)O.bumpScale.value*=-1}if(F.normalMap){if(O.normalMap.value=F.normalMap,$(F.normalMap,O.normalMapTransform),O.normalScale.value.copy(F.normalScale),F.side===hJ)O.normalScale.value.negate()}if(F.displacementMap)O.displacementMap.value=F.displacementMap,$(F.displacementMap,O.displacementMapTransform),O.displacementScale.value=F.displacementScale,O.displacementBias.value=F.displacementBias;if(F.emissiveMap)O.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,O.emissiveMapTransform);if(F.specularMap)O.specularMap.value=F.specularMap,$(F.specularMap,O.specularMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest;let A=Q.get(F),w=A.envMap,B=A.envMapRotation;if(w){if(O.envMap.value=w,O.envMapRotation.value.setFromMatrix4(u5.makeRotationFromEuler(B)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(DW);O.reflectivity.value=F.reflectivity,O.ior.value=F.ior,O.refractionRatio.value=F.refractionRatio}if(F.lightMap)O.lightMap.value=F.lightMap,O.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,O.lightMapTransform);if(F.aoMap)O.aoMap.value=F.aoMap,O.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,O.aoMapTransform)}function X(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,F.map)O.map.value=F.map,$(F.map,O.mapTransform)}function Y(O,F){O.dashSize.value=F.dashSize,O.totalSize.value=F.dashSize+F.gapSize,O.scale.value=F.scale}function U(O,F,A,w){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.size.value=F.size*A,O.scale.value=w*0.5,F.map)O.map.value=F.map,$(F.map,O.uvTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function H(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.rotation.value=F.rotation,F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function N(O,F){O.specular.value.copy(F.specular),O.shininess.value=Math.max(F.shininess,0.0001)}function G(O,F){if(F.gradientMap)O.gradientMap.value=F.gradientMap}function q(O,F){if(O.metalness.value=F.metalness,F.metalnessMap)O.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=F.roughness,F.roughnessMap)O.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,O.roughnessMapTransform);if(F.envMap)O.envMapIntensity.value=F.envMapIntensity}function E(O,F,A){if(O.ior.value=F.ior,F.sheen>0){if(O.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),O.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)O.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,O.sheenColorMapTransform);if(F.sheenRoughnessMap)O.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(O.clearcoat.value=F.clearcoat,O.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)O.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,O.clearcoatMapTransform);if(F.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(O.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===hJ)O.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)O.dispersion.value=F.dispersion;if(F.iridescence>0){if(O.iridescence.value=F.iridescence,O.iridescenceIOR.value=F.iridescenceIOR,O.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)O.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,O.iridescenceMapTransform);if(F.iridescenceThicknessMap)O.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(F.transmission>0){if(O.transmission.value=F.transmission,O.transmissionSamplerMap.value=A.texture,O.transmissionSamplerSize.value.set(A.width,A.height),F.transmissionMap)O.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=F.thickness,F.thicknessMap)O.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=F.attenuationDistance,O.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(O.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)O.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=F.specularIntensity,O.specularColor.value.copy(F.specularColor),F.specularColorMap)O.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,O.specularColorMapTransform);if(F.specularIntensityMap)O.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,O.specularIntensityMapTransform)}function V(O,F){if(F.matcap)O.matcap.value=F.matcap}function I(O,F){let A=Q.get(F).light;O.referencePosition.value.setFromMatrixPosition(A.matrixWorld),O.nearDistance.value=A.shadow.camera.near,O.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function n5(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(B,P){let L=P.program;Z.uniformBlockBinding(B,L)}function H(B,P){let L=K[B.id];if(L===void 0)O(B),L=N(B),K[B.id]=L,B.addEventListener("dispose",A);let _=P.program;Z.updateUBOMapping(B,_);let R=Q.render.frame;if(W[B.id]!==R)q(B),W[B.id]=R}function N(B){let P=G();B.__bindingPointIndex=P;let L=J.createBuffer(),_=B.__size,R=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,L),J.bufferData(J.UNIFORM_BUFFER,_,R),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,P,L),L}function G(){for(let B=0;B<Y;B++)if(X.indexOf(B)===-1)return X.push(B),B;return f0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(B){let P=K[B.id],L=B.uniforms,_=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,P);for(let R=0,M=L.length;R<M;R++){let d=L[R];if(Array.isArray(d))for(let C=0,m=d.length;C<m;C++)E(d[C],R,C,_);else E(d,R,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(B,P,L,_){if(I(B,P,L,_)===!0){let{__offset:R,value:M}=B;if(Array.isArray(M)){let d=0;for(let C=0;C<M.length;C++){let m=M[C],a=F(m);if(V(m,B.__data,d),typeof m!=="number"&&typeof m!=="boolean"&&!m.isMatrix3&&!ArrayBuffer.isView(m))d+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else V(M,B.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,R,B.__data)}}function V(B,P,L){if(typeof B==="number"||typeof B==="boolean")P[0]=B;else if(B.isMatrix3)P[0]=B.elements[0],P[1]=B.elements[1],P[2]=B.elements[2],P[3]=0,P[4]=B.elements[3],P[5]=B.elements[4],P[6]=B.elements[5],P[7]=0,P[8]=B.elements[6],P[9]=B.elements[7],P[10]=B.elements[8],P[11]=0;else if(ArrayBuffer.isView(B))P.set(new B.constructor(B.buffer,B.byteOffset,P.length));else B.toArray(P,L)}function I(B,P,L,_){let R=B.value,M=P+"_"+L;if(_[M]===void 0){if(typeof R==="number"||typeof R==="boolean")_[M]=R;else if(ArrayBuffer.isView(R))_[M]=R.slice();else _[M]=R.clone();return!0}else{let d=_[M];if(typeof R==="number"||typeof R==="boolean"){if(d!==R)return _[M]=R,!0}else if(ArrayBuffer.isView(R))return!0;else if(d.equals(R)===!1)return d.copy(R),!0}return!1}function O(B){let P=B.uniforms,L=0,_=16;for(let M=0,d=P.length;M<d;M++){let C=Array.isArray(P[M])?P[M]:[P[M]];for(let m=0,a=C.length;m<a;m++){let p=C[m],n=Array.isArray(p.value)?p.value:[p.value];for(let i=0,y=n.length;i<y;i++){let Q0=n[i],K0=F(Q0),G0=L%_,z0=G0%K0.boundary,B0=G0+z0;if(L+=z0,B0!==0&&_-B0<K0.storage)L+=_-B0;p.__data=new Float32Array(K0.storage/Float32Array.BYTES_PER_ELEMENT),p.__offset=L,L+=K0.storage}}}let R=L%_;if(R>0)L+=_-R;return B.__size=L,B.__cache={},this}function F(B){let P={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")P.boundary=4,P.storage=4;else if(B.isVector2)P.boundary=8,P.storage=8;else if(B.isVector3||B.isColor)P.boundary=16,P.storage=12;else if(B.isVector4)P.boundary=16,P.storage=16;else if(B.isMatrix3)P.boundary=48,P.storage=48;else if(B.isMatrix4)P.boundary=64,P.storage=64;else if(B.isTexture)v0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(B))P.boundary=16,P.storage=B.byteLength;else v0("WebGLRenderer: Unsupported uniform value type.",B);return P}function A(B){let P=B.target;P.removeEventListener("dispose",A);let L=X.indexOf(P.__bindingPointIndex);X.splice(L,1),J.deleteBuffer(K[P.id]),delete K[P.id],delete W[P.id]}function w(){for(let B in K)J.deleteBuffer(K[B]);X=[],K={},W={}}return{bind:U,update:H,dispose:w}}var s5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),z9=null;function i5(){if(z9===null)z9=new P6(s5,16,16,O8,f9),z9.name="DFG_LUT",z9.minFilter=BJ,z9.magFilter=BJ,z9.wrapS=F6,z9.wrapT=F6,z9.generateMipmaps=!1,z9.needsUpdate=!0;return z9}class a${constructor(J={}){let{canvas:Q=AK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:G=!1,outputBufferType:q=q9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let V=q,I=new Set([fQ,jQ,SQ]),O=new Set([q9,o9,V7,t8,wQ,TQ]),F=new Uint32Array(4),A=new Int32Array(4),w=new v,B=null,P=null,L=[],_=[],R=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=H9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,d=!1,C=null,m=null,a=null,p=null;this._outputColorSpace=N9;let n=0,i=0,y=null,Q0=-1,K0=null,G0=new OJ,z0=new OJ,B0=null,qJ=new c0(0),a0=0,r=Q.width,X0=Q.height,k0=1,L0=null,S0=null,s0=new OJ(0,0,r,X0),m0=new OJ(0,0,r,X0),x0=!1,r0=new A7,n0=!1,g0=!1,RJ=new WJ,AJ=new v,XJ=new OJ,MJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},GJ=!1;function LJ(){return y===null?k0:1}let j=$;function gJ(k,f){return Q.getContext(k,f)}try{let k={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${wZ}`);if(Q.addEventListener("webglcontextlost",b0,!1),Q.addEventListener("webglcontextrestored",JJ,!1),Q.addEventListener("webglcontextcreationerror",QJ,!1),j===null){if(j=gJ("webgl2",k),j===null)if(gJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(k){throw f0("WebGLRenderer: "+k.message),k}let t0,YJ,z,D,T,l,e,Z0,H0,u,o,R0,M0,q0,W0,_0,A0,d0,S,U0,c,N0,O0;function J0(){if(t0=new QH(j),t0.init(),c=new m5(j,t0),YJ=new sU(j,t0,J,c),z=new g5(j,t0),YJ.reversedDepthBuffer&&G)z.buffers.depth.setReversed(!0);m=j.createFramebuffer(),a=j.createFramebuffer(),p=j.createFramebuffer(),D=new KH(j),T=new A5,l=new p5(j,t0,z,T,YJ,c,D),e=new JH(M),Z0=new UX(j),N0=new cU(j,Z0),H0=new $H(j,Z0,D,N0),u=new XH(j,H0,Z0,N0,D),d0=new WH(j,YJ,l),W0=new iU(T),o=new I5(M,e,t0,YJ,N0,W0),R0=new c5(M,T),M0=new P5,q0=new f5(t0),A0=new uU(M,e,z,u,E,Y),_0=new x5(M,u,YJ),O0=new n5(j,D,YJ,z),S=new nU(j,t0,D),U0=new ZH(j,t0,D),D.programs=o.programs,M.capabilities=YJ,M.extensions=t0,M.properties=T,M.renderLists=M0,M.shadowMap=_0,M.state=z,M.info=D}if(J0(),V!==q9)R=new UH(V,Q.width,Q.height,X,Z,K);let Y0=new EW(M,j);this.xr=Y0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let k=t0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=t0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return k0},this.setPixelRatio=function(k){if(k===void 0)return;k0=k,this.setSize(r,X0,!1)},this.getSize=function(k){return k.set(r,X0)},this.setSize=function(k,f,g=!0){if(Y0.isPresenting){v0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(r=k,X0=f,Q.width=Math.floor(k*k0),Q.height=Math.floor(f*k0),g===!0)Q.style.width=k+"px",Q.style.height=f+"px";if(R!==null)R.setSize(Q.width,Q.height);this.setViewport(0,0,k,f)},this.getDrawingBufferSize=function(k){return k.set(r*k0,X0*k0).floor()},this.setDrawingBufferSize=function(k,f,g){r=k,X0=f,k0=g,Q.width=Math.floor(k*g),Q.height=Math.floor(f*g),this.setViewport(0,0,k,f)},this.setEffects=function(k){if(V===q9){f0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let f=0;f<k.length;f++)if(k[f].isOutputPass===!0){v0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(G0)},this.getViewport=function(k){return k.copy(s0)},this.setViewport=function(k,f,g,h){if(k.isVector4)s0.set(k.x,k.y,k.z,k.w);else s0.set(k,f,g,h);z.viewport(G0.copy(s0).multiplyScalar(k0).round())},this.getScissor=function(k){return k.copy(m0)},this.setScissor=function(k,f,g,h){if(k.isVector4)m0.set(k.x,k.y,k.z,k.w);else m0.set(k,f,g,h);z.scissor(z0.copy(m0).multiplyScalar(k0).round())},this.getScissorTest=function(){return x0},this.setScissorTest=function(k){z.setScissorTest(x0=k)},this.setOpaqueSort=function(k){L0=k},this.setTransparentSort=function(k){S0=k},this.getClearColor=function(k){return k.copy(A0.getClearColor())},this.setClearColor=function(){A0.setClearColor(...arguments)},this.getClearAlpha=function(){return A0.getClearAlpha()},this.setClearAlpha=function(){A0.setClearAlpha(...arguments)},this.clear=function(k=!0,f=!0,g=!0){let h=0;if(k){let x=!1;if(y!==null){let E0=y.texture.format;x=I.has(E0)}if(x){let E0=y.texture.type,V0=O.has(E0),F0=A0.getClearColor(),I0=A0.getClearAlpha(),C0=F0.r,y0=F0.g,p0=F0.b;if(V0)F[0]=C0,F[1]=y0,F[2]=p0,F[3]=I0,j.clearBufferuiv(j.COLOR,0,F);else A[0]=C0,A[1]=y0,A[2]=p0,A[3]=I0,j.clearBufferiv(j.COLOR,0,A)}else h|=j.COLOR_BUFFER_BIT}if(f)h|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(g)h|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(h!==0)j.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),C=k},this.dispose=function(){Q.removeEventListener("webglcontextlost",b0,!1),Q.removeEventListener("webglcontextrestored",JJ,!1),Q.removeEventListener("webglcontextcreationerror",QJ,!1),A0.dispose(),M0.dispose(),q0.dispose(),T.dispose(),e.dispose(),u.dispose(),N0.dispose(),O0.dispose(),o.dispose(),Y0.dispose(),Y0.removeEventListener("sessionstart",X7),Y0.removeEventListener("sessionend",P8),O9.stop()};function b0(k){k.preventDefault(),E$("WebGLRenderer: Context Lost."),d=!0}function JJ(){E$("WebGLRenderer: Context Restored."),d=!1;let k=D.autoReset,f=_0.enabled,g=_0.autoUpdate,h=_0.needsUpdate,x=_0.type;J0(),D.autoReset=k,_0.enabled=f,_0.autoUpdate=g,_0.needsUpdate=h,_0.type=x}function QJ(k){f0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function uJ(k){let f=k.target;f.removeEventListener("dispose",uJ),K9(f)}function K9(k){K7(k),T.remove(k)}function K7(k){let f=T.get(k).programs;if(f!==void 0){if(f.forEach(function(g){o.releaseProgram(g)}),k.isShaderMaterial)o.releaseShaderCache(k)}}this.renderBufferDirect=function(k,f,g,h,x,E0){if(f===null)f=MJ;let V0=x.isMesh&&x.matrixWorld.determinantAffine()<0,F0=d6(k,f,g,h,x);z.setMaterial(h,V0);let I0=g.index,C0=1;if(h.wireframe===!0){if(I0=H0.getWireframeAttribute(g),I0===void 0)return;C0=2}let y0=g.drawRange,p0=g.attributes.position,w0=y0.start*C0,e0=(y0.start+y0.count)*C0;if(E0!==null)w0=Math.max(w0,E0.start*C0),e0=Math.min(e0,(E0.start+E0.count)*C0);if(I0!==null)w0=Math.max(w0,0),e0=Math.min(e0,I0.count);else if(p0!==void 0&&p0!==null)w0=Math.max(w0,0),e0=Math.min(e0,p0.count);let b=e0-w0;if(b<0||b===1/0)return;N0.setup(x,h,F0,g,I0);let s,$0=S;if(I0!==null)s=Z0.get(I0),$0=U0,$0.setIndex(s);if(x.isMesh)if(h.wireframe===!0)z.setLineWidth(h.wireframeLinewidth*LJ()),$0.setMode(j.LINES);else $0.setMode(j.TRIANGLES);else if(x.isLine){let P0=h.linewidth;if(P0===void 0)P0=1;if(z.setLineWidth(P0*LJ()),x.isLineSegments)$0.setMode(j.LINES);else if(x.isLineLoop)$0.setMode(j.LINE_LOOP);else $0.setMode(j.LINE_STRIP)}else if(x.isPoints)$0.setMode(j.POINTS);else if(x.isSprite)$0.setMode(j.TRIANGLES);if(x.isBatchedMesh)if(!t0.get("WEBGL_multi_draw")){let{_multiDrawStarts:P0,_multiDrawCounts:t,_multiDrawCount:$J}=x,T0=I0?Z0.get(I0).bytesPerElement:1,FJ=T.get(h).currentProgram.getUniforms();for(let VJ=0;VJ<$J;VJ++)FJ.setValue(j,"_gl_DrawID",VJ),$0.render(P0[VJ]/T0,t[VJ])}else $0.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else if(x.isInstancedMesh)$0.renderInstances(w0,b,x.count);else if(g.isInstancedBufferGeometry){let P0=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,t=Math.min(g.instanceCount,P0);$0.renderInstances(w0,b,t)}else $0.render(w0,b)};function W7(k,f,g){if(k.transparent===!0&&k.side===R9&&k.forceSinglePass===!1)k.side=hJ,k.needsUpdate=!0,w8(k,f,g),k.side=o8,k.needsUpdate=!0,w8(k,f,g),k.side=R9;else w8(k,f,g)}this.compile=function(k,f,g=null){if(g===null)g=k;if(P=q0.get(g),P.init(f),_.push(P),g.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(P.pushLight(x),x.castShadow)P.pushShadow(x)}}),k!==g)k.traverseVisible(function(x){if(x.isLight&&x.layers.test(f.layers)){if(P.pushLight(x),x.castShadow)P.pushShadow(x)}});P.setupLights();let h=new Set;return k.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;let E0=x.material;if(E0)if(Array.isArray(E0))for(let V0=0;V0<E0.length;V0++){let F0=E0[V0];W7(F0,g,x),h.add(F0)}else W7(E0,g,x),h.add(E0)}),P=_.pop(),h},this.compileAsync=function(k,f,g=null){let h=this.compile(k,f,g);return new Promise((x)=>{function E0(){if(h.forEach(function(V0){if(T.get(V0).currentProgram.isReady())h.delete(V0)}),h.size===0){x(k);return}setTimeout(E0,10)}if(t0.get("KHR_parallel_shader_compile")!==null)E0();else setTimeout(E0,10)})};let Q8=null;function y7(k){if(Q8)Q8(k)}function X7(){O9.stop()}function P8(){O9.start()}let O9=new ZW;if(O9.setAnimationLoop(y7),typeof self<"u")O9.setContext(self);this.setAnimationLoop=function(k){Q8=k,Y0.setAnimationLoop(k),k===null?O9.stop():O9.start()},Y0.addEventListener("sessionstart",X7),Y0.addEventListener("sessionend",P8),this.render=function(k,f){if(f!==void 0&&f.isCamera!==!0){f0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(C!==null)C.renderStart(k,f);let g=Y0.enabled===!0&&Y0.isPresenting===!0,h=R!==null&&(y===null||g)&&R.begin(M,y);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(Y0.enabled===!0&&Y0.isPresenting===!0&&(R===null||R.isCompositing()===!1)){if(Y0.cameraAutoUpdate===!0)Y0.updateCamera(f);f=Y0.getCamera()}if(k.isScene===!0)k.onBeforeRender(M,k,f,y);if(P=q0.get(k,_.length),P.init(f),P.state.textureUnits=l.getTextureUnits(),_.push(P),RJ.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),r0.setFromProjectionMatrix(RJ,O$,f.reversedDepth),g0=this.localClippingEnabled,n0=W0.init(this.clippingPlanes,g0),B=M0.get(k,L.length),B.init(),L.push(B),Y0.enabled===!0&&Y0.isPresenting===!0){let V0=M.xr.getDepthSensingMesh();if(V0!==null)$8(V0,f,-1/0,M.sortObjects)}if($8(k,f,0,M.sortObjects),B.finish(),M.sortObjects===!0)B.sort(L0,S0,f.reversedDepth);if(GJ=Y0.enabled===!1||Y0.isPresenting===!1||Y0.hasDepthSensing()===!1,GJ)A0.addToRenderList(B,k);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(n0===!0)W0.beginShadows();let x=P.state.shadowsArray;if(_0.render(x,k,f),n0===!0)W0.endShadows();if((h&&R.hasRenderPass())===!1){let{opaque:V0,transmissive:F0}=B;if(P.setupLights(),f.isArrayCamera){let I0=f.cameras;if(F0.length>0)for(let C0=0,y0=I0.length;C0<y0;C0++){let p0=I0[C0];Z8(V0,F0,k,p0)}if(GJ)A0.render(k);for(let C0=0,y0=I0.length;C0<y0;C0++){let p0=I0[C0];_8(B,k,p0,p0.viewport)}}else{if(F0.length>0)Z8(V0,F0,k,f);if(GJ)A0.render(k);_8(B,k,f)}}if(y!==null&&i===0)l.updateMultisampleRenderTarget(y),l.updateRenderTargetMipmap(y);if(h)R.end(M);if(k.isScene===!0)k.onAfterRender(M,k,f);if(N0.resetDefaultState(),Q0=-1,K0=null,_.pop(),_.length>0){if(P=_[_.length-1],l.setTextureUnits(P.state.textureUnits),n0===!0)W0.setGlobalState(M.clippingPlanes,P.state.camera)}else P=null;if(L.pop(),L.length>0)B=L[L.length-1];else B=null;if(C!==null)C.renderEnd()};function $8(k,f,g,h){if(k.visible===!1)return;if(k.layers.test(f.layers)){if(k.isGroup)g=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(f)}else if(k.isLightProbeGrid)P.pushLightProbeGrid(k);else if(k.isLight){if(P.pushLight(k),k.castShadow)P.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||r0.intersectsSprite(k)){if(h)XJ.setFromMatrixPosition(k.matrixWorld).applyMatrix4(RJ);let V0=u.update(k),F0=k.material;if(F0.visible)B.push(k,V0,F0,g,XJ.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||r0.intersectsObject(k)){let V0=u.update(k),F0=k.material;if(h){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();XJ.copy(k.boundingSphere.center)}else{if(V0.boundingSphere===null)V0.computeBoundingSphere();XJ.copy(V0.boundingSphere.center)}XJ.applyMatrix4(k.matrixWorld).applyMatrix4(RJ)}if(Array.isArray(F0)){let I0=V0.groups;for(let C0=0,y0=I0.length;C0<y0;C0++){let p0=I0[C0],w0=F0[p0.materialIndex];if(w0&&w0.visible)B.push(k,V0,w0,g,XJ.z,p0)}}else if(F0.visible)B.push(k,V0,F0,g,XJ.z,null)}}}let E0=k.children;for(let V0=0,F0=E0.length;V0<F0;V0++)$8(E0[V0],f,g,h)}function _8(k,f,g,h){let{opaque:x,transmissive:E0,transparent:V0}=k;if(P.setupLightsView(g),n0===!0)W0.setGlobalState(M.clippingPlanes,g);if(h)z.viewport(G0.copy(h));if(x.length>0)W9(x,f,g);if(E0.length>0)W9(E0,f,g);if(V0.length>0)W9(V0,f,g);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Z8(k,f,g,h){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[h.id]===void 0){let w0=t0.has("EXT_color_buffer_half_float")||t0.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[h.id]=new tJ(1,1,{generateMipmaps:!0,type:w0?f9:q9,minFilter:N8,samples:Math.max(4,YJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:i0.workingColorSpace})}let E0=P.state.transmissionRenderTarget[h.id],V0=h.viewport||G0;E0.setSize(V0.z*M.transmissionResolutionScale,V0.w*M.transmissionResolutionScale);let F0=M.getRenderTarget(),I0=M.getActiveCubeFace(),C0=M.getActiveMipmapLevel();if(M.setRenderTarget(E0),M.getClearColor(qJ),a0=M.getClearAlpha(),a0<1)M.setClearColor(16777215,0.5);if(M.clear(),GJ)A0.render(g);let y0=M.toneMapping;M.toneMapping=H9;let p0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(P.setupLightsView(h),n0===!0)W0.setGlobalState(M.clippingPlanes,h);if(W9(k,g,h),l.updateMultisampleRenderTarget(E0),l.updateRenderTargetMipmap(E0),t0.has("WEBGL_multisampled_render_to_texture")===!1){let w0=!1;for(let e0=0,b=f.length;e0<b;e0++){let s=f[e0],{object:$0,geometry:P0,material:t,group:$J}=s;if(t.side===R9&&$0.layers.test(h.layers)){let T0=t.side;t.side=hJ,t.needsUpdate=!0,cJ($0,g,h,P0,t,$J),t.side=T0,t.needsUpdate=!0,w0=!0}}if(w0===!0)l.updateMultisampleRenderTarget(E0),l.updateRenderTargetMipmap(E0)}if(M.setRenderTarget(F0,I0,C0),M.setClearColor(qJ,a0),p0!==void 0)h.viewport=p0;M.toneMapping=y0}function W9(k,f,g){let h=f.isScene===!0?f.overrideMaterial:null;for(let x=0,E0=k.length;x<E0;x++){let V0=k[x],{object:F0,geometry:I0,group:C0}=V0,y0=V0.material;if(y0.allowOverride===!0&&h!==null)y0=h;if(F0.layers.test(g.layers))cJ(F0,f,g,I0,y0,C0)}}function cJ(k,f,g,h,x,E0){if(k.onBeforeRender(M,f,g,h,x,E0),k.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),x.onBeforeRender(M,f,g,h,k,E0),x.transparent===!0&&x.side===R9&&x.forceSinglePass===!1)x.side=hJ,x.needsUpdate=!0,M.renderBufferDirect(g,f,h,x,k,E0),x.side=o8,x.needsUpdate=!0,M.renderBufferDirect(g,f,h,x,k,E0),x.side=R9;else M.renderBufferDirect(g,f,h,x,k,E0);k.onAfterRender(M,f,g,h,x,E0)}function w8(k,f,g){if(f.isScene!==!0)f=MJ;let h=T.get(k),x=P.state.lights,E0=P.state.shadowsArray,V0=x.state.version,F0=o.getParameters(k,x.state,E0,f,g,P.state.lightProbeGridArray),I0=o.getProgramCacheKey(F0),C0=h.programs;h.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?f.environment:null,h.fog=f.fog;let y0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(h.envMap=e.get(k.envMap||h.environment,y0),h.envMapRotation=h.environment!==null&&k.envMap===null?f.environmentRotation:k.envMapRotation,C0===void 0)k.addEventListener("dispose",uJ),C0=new Map,h.programs=C0;let p0=C0.get(I0);if(p0!==void 0){if(h.currentProgram===p0&&h.lightsStateVersion===V0)return b7(k,F0),p0}else{if(F0.uniforms=o.getUniforms(k),C!==null&&k.isNodeMaterial)C.build(k,g,F0);k.onBeforeCompile(F0,M),p0=o.acquireProgram(F0,I0),C0.set(I0,p0),h.uniforms=F0.uniforms}let w0=h.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)w0.clippingPlanes=W0.uniform;if(b7(k,F0),h.needsLights=h7(k),h.lightsStateVersion=V0,h.needsLights)w0.ambientLightColor.value=x.state.ambient,w0.lightProbe.value=x.state.probe,w0.directionalLights.value=x.state.directional,w0.directionalLightShadows.value=x.state.directionalShadow,w0.spotLights.value=x.state.spot,w0.spotLightShadows.value=x.state.spotShadow,w0.rectAreaLights.value=x.state.rectArea,w0.ltc_1.value=x.state.rectAreaLTC1,w0.ltc_2.value=x.state.rectAreaLTC2,w0.pointLights.value=x.state.point,w0.pointLightShadows.value=x.state.pointShadow,w0.hemisphereLights.value=x.state.hemi,w0.directionalShadowMatrix.value=x.state.directionalShadowMatrix,w0.spotLightMatrix.value=x.state.spotLightMatrix,w0.spotLightMap.value=x.state.spotLightMap,w0.pointShadowMatrix.value=x.state.pointShadowMatrix;return h.lightProbeGrid=P.state.lightProbeGridArray.length>0,h.currentProgram=p0,h.uniformsList=null,p0}function g9(k){if(k.uniformsList===null){let f=k.currentProgram.getUniforms();k.uniformsList=S7.seqWithValue(f.seq,k.uniforms)}return k.uniformsList}function b7(k,f){let g=T.get(k);g.outputColorSpace=f.outputColorSpace,g.batching=f.batching,g.batchingColor=f.batchingColor,g.instancing=f.instancing,g.instancingColor=f.instancingColor,g.instancingMorph=f.instancingMorph,g.skinning=f.skinning,g.morphTargets=f.morphTargets,g.morphNormals=f.morphNormals,g.morphColors=f.morphColors,g.morphTargetsCount=f.morphTargetsCount,g.numClippingPlanes=f.numClippingPlanes,g.numIntersection=f.numClipIntersection,g.vertexAlphas=f.vertexAlphas,g.vertexTangents=f.vertexTangents,g.toneMapping=f.toneMapping}function Y7(k,f){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;w.setFromMatrixPosition(f.matrixWorld);for(let g=0,h=k.length;g<h;g++){let x=k[g];if(x.texture!==null&&x.boundingBox.containsPoint(w))return x}return null}function d6(k,f,g,h,x){if(f.isScene!==!0)f=MJ;l.resetTextureUnits();let E0=f.fog,V0=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?f.environment:null,F0=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:i0.workingColorSpace,I0=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,C0=e.get(h.envMap||V0,I0),y0=h.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,p0=!!g.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),w0=!!g.morphAttributes.position,e0=!!g.morphAttributes.normal,b=!!g.morphAttributes.color,s=H9;if(h.toneMapped){if(y===null||y.isXRRenderTarget===!0)s=M.toneMapping}let $0=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,P0=$0!==void 0?$0.length:0,t=T.get(h),$J=P.state.lights;if(n0===!0){if(g0===!0||k!==K0){let NJ=k===K0&&h.id===Q0;W0.setState(h,k,NJ)}}let T0=!1;if(h.version===t.__version){if(t.needsLights&&t.lightsStateVersion!==$J.state.version)T0=!0;else if(t.outputColorSpace!==F0)T0=!0;else if(x.isBatchedMesh&&t.batching===!1)T0=!0;else if(!x.isBatchedMesh&&t.batching===!0)T0=!0;else if(x.isBatchedMesh&&t.batchingColor===!0&&x.colorTexture===null)T0=!0;else if(x.isBatchedMesh&&t.batchingColor===!1&&x.colorTexture!==null)T0=!0;else if(x.isInstancedMesh&&t.instancing===!1)T0=!0;else if(!x.isInstancedMesh&&t.instancing===!0)T0=!0;else if(x.isSkinnedMesh&&t.skinning===!1)T0=!0;else if(!x.isSkinnedMesh&&t.skinning===!0)T0=!0;else if(x.isInstancedMesh&&t.instancingColor===!0&&x.instanceColor===null)T0=!0;else if(x.isInstancedMesh&&t.instancingColor===!1&&x.instanceColor!==null)T0=!0;else if(x.isInstancedMesh&&t.instancingMorph===!0&&x.morphTexture===null)T0=!0;else if(x.isInstancedMesh&&t.instancingMorph===!1&&x.morphTexture!==null)T0=!0;else if(t.envMap!==C0)T0=!0;else if(h.fog===!0&&t.fog!==E0)T0=!0;else if(t.numClippingPlanes!==void 0&&(t.numClippingPlanes!==W0.numPlanes||t.numIntersection!==W0.numIntersection))T0=!0;else if(t.vertexAlphas!==y0)T0=!0;else if(t.vertexTangents!==p0)T0=!0;else if(t.morphTargets!==w0)T0=!0;else if(t.morphNormals!==e0)T0=!0;else if(t.morphColors!==b)T0=!0;else if(t.toneMapping!==s)T0=!0;else if(t.morphTargetsCount!==P0)T0=!0;else if(!!t.lightProbeGrid!==P.state.lightProbeGridArray.length>0)T0=!0}else T0=!0,t.__version=h.version;let FJ=t.currentProgram;if(T0===!0){if(FJ=w8(h,f,x),C&&h.isNodeMaterial)C.onUpdateProgram(h,FJ,t)}let VJ=!1,nJ=!1,I9=!1,UJ=FJ.getUniforms(),zJ=t.uniforms;if(z.useProgram(FJ.program))VJ=!0,nJ=!0,I9=!0;if(h.id!==Q0)Q0=h.id,nJ=!0;if(t.needsLights){let NJ=Y7(P.state.lightProbeGridArray,x);if(t.lightProbeGrid!==NJ)t.lightProbeGrid=NJ,nJ=!0}if(VJ||K0!==k){if(z.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();UJ.setValue(j,"projectionMatrix",k.projectionMatrix),UJ.setValue(j,"viewMatrix",k.matrixWorldInverse);let m9=UJ.map.cameraPosition;if(m9!==void 0)m9.setValue(j,AJ.setFromMatrixPosition(k.matrixWorld));if(YJ.logarithmicDepthBuffer)UJ.setValue(j,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)UJ.setValue(j,"isOrthographic",k.isOrthographicCamera===!0);if(K0!==k)K0=k,nJ=!0,I9=!0}if(t.needsLights){if($J.state.directionalShadowMap.length>0)UJ.setValue(j,"directionalShadowMap",$J.state.directionalShadowMap,l);if($J.state.spotShadowMap.length>0)UJ.setValue(j,"spotShadowMap",$J.state.spotShadowMap,l);if($J.state.pointShadowMap.length>0)UJ.setValue(j,"pointShadowMap",$J.state.pointShadowMap,l)}if(x.isSkinnedMesh){UJ.setOptional(j,x,"bindMatrix"),UJ.setOptional(j,x,"bindMatrixInverse");let NJ=x.skeleton;if(NJ){if(NJ.boneTexture===null)NJ.computeBoneTexture();UJ.setValue(j,"boneTexture",NJ.boneTexture,l)}}if(x.isBatchedMesh){if(UJ.setOptional(j,x,"batchingTexture"),UJ.setValue(j,"batchingTexture",x._matricesTexture,l),UJ.setOptional(j,x,"batchingIdTexture"),UJ.setValue(j,"batchingIdTexture",x._indirectTexture,l),UJ.setOptional(j,x,"batchingColorTexture"),x._colorsTexture!==null)UJ.setValue(j,"batchingColorTexture",x._colorsTexture,l)}let p9=g.morphAttributes;if(p9.position!==void 0||p9.normal!==void 0||p9.color!==void 0)d0.update(x,g,FJ);if(nJ||t.receiveShadow!==x.receiveShadow)t.receiveShadow=x.receiveShadow,UJ.setValue(j,"receiveShadow",x.receiveShadow);if((h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial)&&h.envMap===null&&f.environment!==null)zJ.envMapIntensity.value=f.environmentIntensity;if(zJ.dfgLUT!==void 0)zJ.dfgLUT.value=i5();if(nJ){if(UJ.setValue(j,"toneMappingExposure",M.toneMappingExposure),t.needsLights)u6(zJ,I9);if(E0&&h.fog===!0)R0.refreshFogUniforms(zJ,E0);if(R0.refreshMaterialUniforms(zJ,h,k0,X0,P.state.transmissionRenderTarget[k.id]),t.needsLights&&t.lightProbeGrid){let NJ=t.lightProbeGrid;zJ.probesSH.value=NJ.texture,zJ.probesMin.value.copy(NJ.boundingBox.min),zJ.probesMax.value.copy(NJ.boundingBox.max),zJ.probesResolution.value.copy(NJ.resolution)}S7.upload(j,g9(t),zJ,l)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)S7.upload(j,g9(t),zJ,l),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)UJ.setValue(j,"center",x.center);if(UJ.setValue(j,"modelViewMatrix",x.modelViewMatrix),UJ.setValue(j,"normalMatrix",x.normalMatrix),UJ.setValue(j,"modelMatrix",x.matrixWorld),h.uniformsGroups!==void 0){let NJ=h.uniformsGroups;for(let m9=0,T8=NJ.length;m9<T8;m9++){let $Z=NJ[m9];O0.update($Z,FJ),O0.bind($Z,FJ)}}return FJ}function u6(k,f){k.ambientLightColor.needsUpdate=f,k.lightProbe.needsUpdate=f,k.directionalLights.needsUpdate=f,k.directionalLightShadows.needsUpdate=f,k.pointLights.needsUpdate=f,k.pointLightShadows.needsUpdate=f,k.spotLights.needsUpdate=f,k.spotLightShadows.needsUpdate=f,k.rectAreaLights.needsUpdate=f,k.hemisphereLights.needsUpdate=f}function h7(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}if(this.getActiveCubeFace=function(){return n},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(k,f,g){let h=T.get(k);if(h.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,h.__autoAllocateDepthBuffer===!1)h.__useRenderToTexture=!1;T.get(k.texture).__webglTexture=f,T.get(k.depthTexture).__webglTexture=h.__autoAllocateDepthBuffer?void 0:g,h.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,f){let g=T.get(k);g.__webglFramebuffer=f,g.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(k,f=0,g=0){y=k,n=f,i=g;let h=null,x=!1,E0=!1;if(k){let F0=T.get(k);if(F0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(j.FRAMEBUFFER,F0.__webglFramebuffer),G0.copy(k.viewport),z0.copy(k.scissor),B0=k.scissorTest,z.viewport(G0),z.scissor(z0),z.setScissorTest(B0),Q0=-1;return}else if(F0.__webglFramebuffer===void 0)l.setupRenderTarget(k);else if(F0.__hasExternalTextures)l.rebindTextures(k,T.get(k.texture).__webglTexture,T.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let y0=k.depthTexture;if(F0.__boundDepthTexture!==y0){if(y0!==null&&T.has(y0)&&(k.width!==y0.image.width||k.height!==y0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(k)}}let I0=k.texture;if(I0.isData3DTexture||I0.isDataArrayTexture||I0.isCompressedArrayTexture)E0=!0;let C0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(C0[f]))h=C0[f][g];else h=C0[f];x=!0}else if(k.samples>0&&l.useMultisampledRTT(k)===!1)h=T.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(C0))h=C0[g];else h=C0;G0.copy(k.viewport),z0.copy(k.scissor),B0=k.scissorTest}else G0.copy(s0).multiplyScalar(k0).floor(),z0.copy(m0).multiplyScalar(k0).floor(),B0=x0;if(g!==0)h=m;if(z.bindFramebuffer(j.FRAMEBUFFER,h))z.drawBuffers(k,h);if(z.viewport(G0),z.scissor(z0),z.setScissorTest(B0),x){let F0=T.get(k.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+f,F0.__webglTexture,g)}else if(E0){let F0=f;for(let I0=0;I0<k.textures.length;I0++){let C0=T.get(k.textures[I0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+I0,C0.__webglTexture,g,F0)}}else if(k!==null&&g!==0){let F0=T.get(k.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,F0.__webglTexture,g)}Q0=-1},this.readRenderTargetPixels=function(k,f,g,h,x,E0,V0,F0=0){if(!(k&&k.isWebGLRenderTarget)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let I0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&V0!==void 0)I0=I0[V0];if(I0){z.bindFramebuffer(j.FRAMEBUFFER,I0);try{let C0=k.textures[F0],y0=C0.format,p0=C0.type;if(k.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+F0);if(!YJ.textureFormatReadable(y0)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!YJ.textureTypeReadable(p0)){f0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=k.width-h&&(g>=0&&g<=k.height-x))j.readPixels(f,g,h,x,c.convert(y0),c.convert(p0),E0)}finally{let C0=y!==null?T.get(y).__webglFramebuffer:null;z.bindFramebuffer(j.FRAMEBUFFER,C0)}}},this.readRenderTargetPixelsAsync=async function(k,f,g,h,x,E0,V0,F0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let I0=T.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&V0!==void 0)I0=I0[V0];if(I0)if(f>=0&&f<=k.width-h&&(g>=0&&g<=k.height-x)){z.bindFramebuffer(j.FRAMEBUFFER,I0);let C0=k.textures[F0],y0=C0.format,p0=C0.type;if(k.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+F0);if(!YJ.textureFormatReadable(y0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!YJ.textureTypeReadable(p0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let w0=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,w0),j.bufferData(j.PIXEL_PACK_BUFFER,E0.byteLength,j.STREAM_READ),j.readPixels(f,g,h,x,c.convert(y0),c.convert(p0),0);let e0=y!==null?T.get(y).__webglFramebuffer:null;z.bindFramebuffer(j.FRAMEBUFFER,e0);let b=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await PK(j,b,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,w0),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,E0),j.deleteBuffer(w0),j.deleteSync(b),E0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,f=null,g=0){let h=Math.pow(2,-g),x=Math.floor(k.image.width*h),E0=Math.floor(k.image.height*h),V0=f!==null?f.x:0,F0=f!==null?f.y:0;l.setTexture2D(k,0),j.copyTexSubImage2D(j.TEXTURE_2D,g,0,0,V0,F0,x,E0),z.unbindTexture()},this.copyTextureToTexture=function(k,f,g=null,h=null,x=0,E0=0){let V0,F0,I0,C0,y0,p0,w0,e0,b,s=k.isCompressedTexture?k.mipmaps[E0]:k.image;if(g!==null)V0=g.max.x-g.min.x,F0=g.max.y-g.min.y,I0=g.isBox3?g.max.z-g.min.z:1,C0=g.min.x,y0=g.min.y,p0=g.isBox3?g.min.z:0;else{let zJ=Math.pow(2,-x);if(V0=Math.floor(s.width*zJ),F0=Math.floor(s.height*zJ),k.isDataArrayTexture)I0=s.depth;else if(k.isData3DTexture)I0=Math.floor(s.depth*zJ);else I0=1;C0=0,y0=0,p0=0}if(h!==null)w0=h.x,e0=h.y,b=h.z;else w0=0,e0=0,b=0;let $0=c.convert(f.format),P0=c.convert(f.type),t;if(f.isData3DTexture)l.setTexture3D(f,0),t=j.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)l.setTexture2DArray(f,0),t=j.TEXTURE_2D_ARRAY;else l.setTexture2D(f,0),t=j.TEXTURE_2D;z.activeTexture(j.TEXTURE0),z.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,f.flipY),z.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),z.pixelStorei(j.UNPACK_ALIGNMENT,f.unpackAlignment);let $J=z.getParameter(j.UNPACK_ROW_LENGTH),T0=z.getParameter(j.UNPACK_IMAGE_HEIGHT),FJ=z.getParameter(j.UNPACK_SKIP_PIXELS),VJ=z.getParameter(j.UNPACK_SKIP_ROWS),nJ=z.getParameter(j.UNPACK_SKIP_IMAGES);z.pixelStorei(j.UNPACK_ROW_LENGTH,s.width),z.pixelStorei(j.UNPACK_IMAGE_HEIGHT,s.height),z.pixelStorei(j.UNPACK_SKIP_PIXELS,C0),z.pixelStorei(j.UNPACK_SKIP_ROWS,y0),z.pixelStorei(j.UNPACK_SKIP_IMAGES,p0);let I9=k.isDataArrayTexture||k.isData3DTexture,UJ=f.isDataArrayTexture||f.isData3DTexture;if(k.isDepthTexture){let zJ=T.get(k),p9=T.get(f),NJ=T.get(zJ.__renderTarget),m9=T.get(p9.__renderTarget);z.bindFramebuffer(j.READ_FRAMEBUFFER,NJ.__webglFramebuffer),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,m9.__webglFramebuffer);for(let T8=0;T8<I0;T8++){if(I9)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(k).__webglTexture,x,p0+T8),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(f).__webglTexture,E0,b+T8);j.blitFramebuffer(C0,y0,V0,F0,w0,e0,V0,F0,j.DEPTH_BUFFER_BIT,j.NEAREST)}z.bindFramebuffer(j.READ_FRAMEBUFFER,null),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(x!==0||k.isRenderTargetTexture||T.has(k)){let zJ=T.get(k),p9=T.get(f);z.bindFramebuffer(j.READ_FRAMEBUFFER,a),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,p);for(let NJ=0;NJ<I0;NJ++){if(I9)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,zJ.__webglTexture,x,p0+NJ);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,zJ.__webglTexture,x);if(UJ)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,p9.__webglTexture,E0,b+NJ);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,p9.__webglTexture,E0);if(x!==0)j.blitFramebuffer(C0,y0,V0,F0,w0,e0,V0,F0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(UJ)j.copyTexSubImage3D(t,E0,w0,e0,b+NJ,C0,y0,V0,F0);else j.copyTexSubImage2D(t,E0,w0,e0,C0,y0,V0,F0)}z.bindFramebuffer(j.READ_FRAMEBUFFER,null),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(UJ)if(k.isDataTexture||k.isData3DTexture)j.texSubImage3D(t,E0,w0,e0,b,V0,F0,I0,$0,P0,s.data);else if(f.isCompressedArrayTexture)j.compressedTexSubImage3D(t,E0,w0,e0,b,V0,F0,I0,$0,s.data);else j.texSubImage3D(t,E0,w0,e0,b,V0,F0,I0,$0,P0,s);else if(k.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,E0,w0,e0,V0,F0,$0,P0,s.data);else if(k.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,E0,w0,e0,s.width,s.height,$0,s.data);else j.texSubImage2D(j.TEXTURE_2D,E0,w0,e0,V0,F0,$0,P0,s);if(z.pixelStorei(j.UNPACK_ROW_LENGTH,$J),z.pixelStorei(j.UNPACK_IMAGE_HEIGHT,T0),z.pixelStorei(j.UNPACK_SKIP_PIXELS,FJ),z.pixelStorei(j.UNPACK_SKIP_ROWS,VJ),z.pixelStorei(j.UNPACK_SKIP_IMAGES,nJ),E0===0&&f.generateMipmaps)j.generateMipmap(t);z.unbindTexture()},this.initRenderTarget=function(k){if(T.get(k).__webglFramebuffer===void 0)l.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)l.setTextureCube(k,0);else if(k.isData3DTexture)l.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)l.setTexture2DArray(k,0);else l.setTexture2D(k,0);z.unbindTexture()},this.resetState=function(){n=0,i=0,y=null,z.reset(),N0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return O$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=i0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=i0._getUnpackColorSpace()}}var f7=new v;function Q9(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),U=Math.PI/4;f7.copy(Q),f7[Z]=0,f7.normalize();let H=0.5*X/(X+Y),N=1-f7.angleTo(J)/U;if(Math.sign(f7[$])===1)return N*H;else return Y/(X+Y)+H+H*(1-N)}class M9 extends EJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new v,U=new v,H=new v(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,G=this.attributes.normal.array,q=this.attributes.uv.array,E=N.length/6,V=new v,I=0.5/W;for(let O=0,F=0;O<N.length;O+=3,F+=2)switch(Y.fromArray(N,O),U.copy(Y),U.x-=Math.sign(U.x)*I,U.y-=Math.sign(U.y)*I,U.z-=Math.sign(U.z)*I,U.normalize(),N[O+0]=H.x*Math.sign(Y.x)+U.x*K,N[O+1]=H.y*Math.sign(Y.y)+U.y*K,N[O+2]=H.z*Math.sign(Y.z)+U.z*K,G[O+0]=U.x,G[O+1]=U.y,G[O+2]=U.z,Math.floor(O/E)){case 0:V.set(1,0,0),q[F+0]=Q9(V,U,"z","y",K,$),q[F+1]=1-Q9(V,U,"y","z",K,Q);break;case 1:V.set(-1,0,0),q[F+0]=1-Q9(V,U,"z","y",K,$),q[F+1]=1-Q9(V,U,"y","z",K,Q);break;case 2:V.set(0,1,0),q[F+0]=1-Q9(V,U,"x","z",K,J),q[F+1]=Q9(V,U,"z","x",K,$);break;case 3:V.set(0,-1,0),q[F+0]=1-Q9(V,U,"x","z",K,J),q[F+1]=1-Q9(V,U,"z","x",K,$);break;case 4:V.set(0,0,1),q[F+0]=1-Q9(V,U,"x","y",K,J),q[F+1]=1-Q9(V,U,"y","x",K,Q);break;case 5:V.set(0,0,-1),q[F+0]=Q9(V,U,"x","y",K,J),q[F+1]=1-Q9(V,U,"y","x",K,Q);break}}static fromJSON(J){return new M9(J.width,J.height,J.depth,J.segments,J.radius)}}class r$ extends e8{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new EJ;J.deleteAttribute("uv");let Q=new CJ({side:hJ}),$=new CJ,Z=new y6(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new j0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new R8(J,$,6),X=new kJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new j0(J,Z7(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let U=new j0(J,Z7(50));U.position.set(-16.109,18.021,-8.207),U.scale.set(0.1,2.425,2.751),this.add(U);let H=new j0(J,Z7(17));H.position.set(14.904,12.198,-1.832),H.scale.set(0.15,4.265,6.331),this.add(H);let N=new j0(J,Z7(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let G=new j0(J,Z7(20));G.position.set(3.235,11.486,-12.541),G.scale.set(2.5,2,0.1),this.add(G);let q=new j0(J,Z7(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function Z7(J){return new T6({color:0,emissive:16777215,emissiveIntensity:J})}var e9=653429,DJ="#09F875",KJ="rgba(9,248,117,0.55)",t$="rgba(9,248,117,0.28)",o5="#0A0A0A",QZ="#070808";var wJ="#CFFFE2",C8="'SF Mono', ui-monospace, Menlo, Consolas, monospace",M8="'Space Grotesk', -apple-system, sans-serif",J8=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],Z9=matchMedia("(prefers-reduced-motion: reduce)").matches,RW=null,I8=()=>RW=RW||new(window.AudioContext||window.webkitAudioContext);function F9(J,Q,$,Z=0.045,K="triangle"){let W=I8(),X=W.createOscillator(),Y=W.createGain();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var fJ={detent(J=0){try{let Q=I8();if(Q.state==="suspended")Q.resume();F9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=I8();F9(420,J.currentTime+0.01,0.04,0.05),F9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=I8();F9(120,J.currentTime+0.01,0.09,0.08,"sine"),F9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=I8();F9(660,J.currentTime+0.02,0.05),F9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=I8();F9(220,J.currentTime+0.02,0.05,0.07),F9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=I8();F9(240,J.currentTime+0.01,0.05,0.05,"sine"),F9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class A8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var a5=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],m6={w:240,h:254};function l6(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/m6.w,Z/m6.w),J.fillStyle=K;for(let X of a5)J.fill(X);J.restore()}var r5=[[5,8,12,7],[12,3,6,6],[1,6,3,3],[3,8,3,3]],t5=[[18,5,3,2]],e$=[[6,4,8,4]],e5=[[6,9,8,4]],JZ=[[7,12,7,3]],v7=[15.2,4.6,1.6,1.6];class LW{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?e$:JZ}if(this.state==="happy")return Math.floor(J*8)%2?e$:JZ;if(this.state==="droop")return JZ;return Math.floor(J)%7===6?e$:e5}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),U=18*Z;if(X>0.01){let H=1+Math.sin(W*1.1)*0.012,N=15*Z*H;l6(J,Q+(24*Z-N)/2,$+U-N*(m6.h/m6.w),N,DJ,X)}if(Y>0.01){let H=this.state==="droop",N=this.state==="idle"&&Math.floor(W*2)%4===3?0.6:0;J.save(),J.globalAlpha=Y,J.fillStyle=DJ;let G=(q,E,V,I,O=0)=>{let F=Q+q*Z,A=$+(E+N-this.hopY/24)*Z;if(O>0)J.beginPath(),J.roundRect(F,A,V*Z,I*Z,O*Z),J.fill();else J.fillRect(F,A,V*Z,I*Z)};for(let[q,E,V,I]of r5){let O=H&&q>=12&&E<=4?E+2:E;G(q,O,V,I,Math.min(V,I)*0.42)}for(let[q,E,V,I]of t5)G(q,H?E+2:E,V,I,0.6);for(let[q,E,V,I]of this.wingCells(W))G(q,H?E+2:E,V,I,1.1);if(!this.blinking()){J.fillStyle=QZ;let q=H?v7[1]+2:v7[1];J.fillRect(Q+v7[0]*Z,$+(q+N-this.hopY/24)*Z,v7[2]*Z,v7[3]*Z)}J.restore()}}}var $9=1024,x9=768;class VW{canvas=document.createElement("canvas");ctx;tex;vireo=new LW;mode=0;lane="inference";meta=null;history=[];booted=Z9;bootT=0;powered=Z9;busy=!1;status="";chat=null;search=null;xprof=null;err=null;armed=null;tabRects=[];lastDrawAt=-1e9;crt=null;crtOverlay(){if(this.crt)return this.crt;let J=document.createElement("canvas");J.width=$9*1.5,J.height=x9*1.5;let Q=J.getContext("2d");Q.fillStyle="rgba(0,0,0,0.16)";for(let Z=0;Z<J.height;Z+=5)Q.fillRect(0,Z,J.width,2);let $=Q.createRadialGradient(J.width/2,J.height/2,J.height*0.34,J.width/2,J.height/2,J.height*0.92);return $.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(1,"rgba(0,6,3,0.42)"),Q.fillStyle=$,Q.fillRect(0,0,J.width,J.height),this.crt=J,J}dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=$9*1.5,this.canvas.height=x9*1.5,this.ctx=this.canvas.getContext("2d"),this.ctx.setTransform(1.5,0,0,1.5,0,0),this.tex=new V9(this.canvas),this.tex.colorSpace=N9,this.tex.generateMipmaps=!1,this.tex.minFilter=BJ}modeName(){return J8[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.powered?Math.floor(J*2):!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.powered,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(this.powered&&!this.booted){if(this.bootT+=J,this.bootT>2.1)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=Z9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc+=J;let $=!this.booted?0.05:0.1;if(this.acc>=$){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey||Q-this.lastDrawAt>2)return this.lastKey=Z,this.lastDrawAt=Q,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=DJ,W=C8,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=QZ,Q.fillRect(0,0,$9,x9),!this.powered){if(Math.floor(J*2)%2===0)Q.fillStyle=DJ,Q.fillRect($9/2-14,x9/2-24,28,7);this.text("READING CARD",$9/2-84,x9/2+12,21,KJ),this.compositeCrt();return}if(!this.booted){let Y=this.bootT,H=["VANTIS UNIFIED OPERATING SYSTEM","COPYRIGHT 2026 VANTIS.SH","WLT-01 WALLET TERMINAL","","MEMORY CHECK ............... OK","RAIL LINK .................. OK",`CARD ....................... ${this.meta?.handle?"@"+String(this.meta.handle).replace(/^@+/,"").toUpperCase():"…"}`,"LANES ...................... INF · DEV","","BOOT COMPLETE"],N=340,G=Math.floor(Y*340),q=96;this.ctx.shadowColor=DJ,this.ctx.shadowBlur=7;for(let E of H){if(G<=0)break;let V=E.slice(0,G);G-=E.length+6,this.text(V,72,q,24,DJ),q+=40}if(this.ctx.shadowBlur=0,Math.floor(J*3)%2===0)this.ctx.fillStyle=DJ,this.ctx.fillRect(72,q+4,15,26);this.compositeCrt();return}this.tabRects=[];let $=44;for(let Y=0;Y<J8.length;Y++){let U=Y===this.mode;Q.font=`600 22px ${C8}`;let H=Q.measureText(J8[Y]).width;if(U)Q.fillStyle=DJ,Q.beginPath(),Q.roundRect($-14,24,H+28,40,8),Q.fill();this.text(J8[Y],$,33,22,U?QZ:KJ),this.tabRects.push({x:$-14,y:16,w:H+28,h:56,mode:Y}),$+=H+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${C8}`,this.text(`MAIN ${Z}`,$9-44-Q.measureText(`MAIN ${Z}`).width,33,22,wJ),Q.fillStyle=t$,Q.fillRect(44,80,$9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,KJ),this.wrap(this.err,52).slice(0,4).forEach((Y,U)=>this.text(Y,64,K+46+U*34,24,wJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=t$,Q.fillRect(44,x9-140,$9-88,2),this.vireo.draw(Q,52,x9-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${C8}`,this.text(X,$9-44-Q.measureText(X).width,x9-72,21,this.busy?DJ:KJ),this.compositeCrt()}compositeCrt(){let J=this.ctx;J.save(),J.setTransform(1,0,0,1,0,0),J.drawImage(this.crtOverlay(),0,0),J.restore()}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,KJ),this.ctx.shadowColor=DJ,this.ctx.shadowBlur=10,this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,wJ,M8,"700"),this.ctx.shadowBlur=0,this.text("MAIN BALANCE",46,J+156,20,KJ),Q?.tier){let X=this.ctx;X.font=`600 20px ${C8}`;let Y=`TIER ${String(Q.tier).toUpperCase()}`,U=X.measureText(Y).width;X.strokeStyle=KJ,X.lineWidth=2,X.beginPath(),X.roundRect(44,J+198,U+28,38,19),X.stroke(),this.text(Y,58,J+207,20,DJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+U,J+207,20,KJ)}let K=(X,Y,U,H)=>{let N=this.ctx;this.text(X,560,U,22,H?DJ:KJ);let G=Y?`$${Y.balance_usd.toFixed(2)}`:"$—";N.font=`700 30px ${M8}`,this.text(G,$9-44-N.measureText(G).width,U-6,30,wJ,M8,"700");let q=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),E=Math.max(6,(Y?.balance_usd||0)/q*420);N.fillStyle="rgba(9,248,117,0.16)",N.fillRect(560,U+44,420,10),N.fillStyle=H?DJ:KJ,N.fillRect(560,U+44,E,10),this.text(H?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,U+68,18,KJ)};K("INFERENCE",$,J+10,!0),K("DEV TOOLS",Z,J+130,!1);let W=this.history[0];if(W){let X=W.amount_usd>=0?`+$${W.amount_usd.toFixed(2)}`:`−$${Math.abs(W.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,KJ),this.text(`${X}  ${String(W.description||"").slice(0,52)}`,200,J+268,20,wJ)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,KJ),this.text(this.armed.quote,64,J+44,25,wJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,DJ,M8,"700"),this.status="SETTLES FROM REAL USAGE";return}if(!Q){this.text("TEST-FIRE THE RAIL",64,J+6,22,KJ),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,wJ),this.text("billed to your Inference lane.",64,J+80,26,wJ),this.text("Type below, then press the green key.",64,J+138,24,KJ),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}this.text("> "+Q.prompt.slice(0,46),64,J+4,22,KJ);let $=Q.text.slice(0,Math.floor(Q.shown)),Z=this.wrap($,62),K=8;if(Z.slice(-K).forEach((W,X)=>this.text(W,64,J+42+X*34,24,wJ)),Q.line&&Q.shown>=Q.text.length)this.text(Q.line,64,J+42+Math.min(Z.length,K)*34+10,20,DJ)}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,KJ),this.text("One real query against the open web.",64,J+44,26,wJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,KJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,KJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,wJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,KJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,DJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,KJ),this.text("Public metrics for any handle —",64,J+44,26,wJ),this.text("the same read the scoring agent makes.",64,J+80,26,wJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,KJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,wJ,M8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,KJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,DJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,KJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,wJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,KJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,wJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?DJ:KJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,wJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,U,H,N)=>{let G=this.ctx;G.strokeStyle=U?DJ:t$,G.lineWidth=U?3:2,G.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,U?DJ:KJ),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,wJ,M8,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,KJ),this.wrap(N,30).slice(0,3).forEach((q,E)=>this.text(q,Y+28,J+196+E*28,19,H?wJ:KJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}function Jq(J,Q){let $=document.createElement("canvas");$.width=512,$.height=684;let Z=$.getContext("2d"),K={ink:{top:"#0C0C0B",bottom:"#191917",fg:"#FFFFFF",accent:DJ},carbon:{top:"#151515",bottom:"#2B2B29",fg:"#E8E8E4",accent:DJ},signal:{top:"#0AF77A",bottom:"#05C75F",fg:"#0A0A0A",accent:"#0A0A0A"},mint:{top:"#F2FFF8",bottom:"#BFFADA",fg:"#0A0A0A",accent:"#0B7A3E"},mono:{top:"#FFFFFF",bottom:"#E8E8E2",fg:"#0A0A0A",accent:"#0B7A3E"}},W=K[Q||"ink"]||K.ink,X=Z.createLinearGradient(0,0,512,684);X.addColorStop(0,W.top),X.addColorStop(1,W.bottom),Z.fillStyle=X,Z.fillRect(0,0,512,684);let Y=(J||"").replace(/^@+/,"");l6(Z,40,36,88,W.accent),Z.font=`700 44px ${M8}`,Z.fillStyle=W.fg,Z.fillText(Y?`@${Y}`:"VANTIS",152,96),Z.font=`600 20px ${C8}`,Z.fillStyle=W.accent,Z.fillText("VANTIS CARD",154,134),Z.fillStyle=W.accent,Z.globalAlpha=0.28,Z.fillRect(0,176,512,3),Z.globalAlpha=1;let U=new V9($);return U.colorSpace=N9,U.generateMipmaps=!1,U.minFilter=BJ,U}function Qq(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new V9(J);return Z.colorSpace=N9,Z}function kW(){let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(2,devicePixelRatio||1),$;try{$=new a$({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=N9,$.toneMapping=R7,$.toneMappingExposure=1,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new e8,K=new j7($);Z.environment=K.fromScene(new r$,0.04).texture;let W=new J7(16777215,1.15);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new J7(14680046,0.16);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new J7(10485709,0.4);Y.position.set(2.2,1.4,-2),Z.add(Y);let U=new bJ(28,1,0.1,20);U.position.set(0,0.94,4.35),U.lookAt(0,0.8,0);function H(b,s,$0="rgba(9,248,117,0.65)"){let P0=document.createElement("canvas"),t=Math.max(64,b.length*s*0.75),$J=s*2;P0.width=t*2,P0.height=$J*2;let T0=P0.getContext("2d");T0.scale(2,2),T0.font=`600 ${s}px ${C8}`,T0.fillStyle=$0,T0.textBaseline="middle",T0.textAlign="center",T0.fillText(b,t/2,$J/2);let FJ=new V9(P0);FJ.colorSpace=N9,FJ.generateMipmaps=!1,FJ.minFilter=BJ;let VJ=new j0(new dJ(t/640,$J/640),new jJ({map:FJ,transparent:!0}));return VJ.material.toneMapped=!1,VJ}let N=new CJ({color:724236,roughness:0.64,metalness:0.2,envMapIntensity:0.3}),G=new CJ({color:658186,roughness:0.75,metalness:0.25}),q=new CJ({color:e9,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:e9,emissiveIntensity:0.42});q.toneMapped=!1;let E=new jJ({color:e9});E.toneMapped=!1;let V=new c0(1327146),I=new j6,O=(b,s)=>I.load(b,($0)=>{$0.wrapS=$0.wrapT=G6,$0.anisotropy=4,s($0)});O("/tex/metal030-normal-v1.jpg",(b)=>{b.repeat.set(1.2,2),N.normalMap=b,N.normalScale.set(0.65,0.65),N.needsUpdate=!0}),O("/tex/metal030-rough-v1.jpg",(b)=>{b.repeat.set(1.2,2),N.roughnessMap=b,N.roughness=0.9,N.needsUpdate=!0});let F=new pJ;Z.add(F);let A=new pJ,w=new j0(new M9(0.94,1.64,0.13,4,0.05),N);A.add(w),A.position.set(0,0.86,0),A.rotation.x=-0.09,F.add(A);let B=A,P=new j0(new EJ(0.82,0.64,0.02),G);P.position.set(0,0.4,0.062),A.add(P);let L=new VW,_=new j0(new dJ(0.76,0.57),new jJ({map:L.tex}));_.position.set(0,0.4,0.076),A.add(_);let R=new j0(new dJ(0.8,0.61),new CJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));R.position.set(0,0.4,0.082),A.add(R);let M=new j0(new EJ(0.86,0.01,0.012),E);M.position.set(0,0.03,0.066),A.add(M);let d=new pJ,C=new j0(new M9(0.26,0.26,0.07,3,0.024),q);d.add(C);let m=document.createElement("canvas");m.width=m.height=128,l6(m.getContext("2d"),28,24,72,o5);let a=new V9(m);a.colorSpace=N9,a.generateMipmaps=!1,a.minFilter=BJ;let p=new j0(new dJ(0.12,0.12),new jJ({map:a,transparent:!0}));p.material.toneMapped=!1,p.position.z=0.037,C.add(p);let n=new j0(new EJ(0.32,0.32,0.02),G);n.position.z=-0.028,d.add(n),d.position.set(-0.24,-0.33,0.075),A.add(d);let i=H("FIRE",12);i.position.set(-0.24,-0.53,0.07),A.add(i);let y=new pJ,Q0=new j0(new h9(0.15,0.15,0.075,48),new CJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));Q0.rotation.x=Math.PI/2,y.add(Q0);let K0=new j0(new h9(0.132,0.132,0.014,40),new CJ({color:790029,roughness:0.42,metalness:0.4,envMapIntensity:0.45}));K0.rotation.x=Math.PI/2,K0.position.z=0.042,y.add(K0);let G0=new R8(new EJ(0.016,0.03,0.062),new CJ({color:1711131,roughness:0.5,metalness:0.5,envMapIntensity:0.7}),28),z0=new kJ;for(let b=0;b<28;b++){let s=b/28*Math.PI*2;z0.position.set(Math.cos(s)*0.152,Math.sin(s)*0.152,0),z0.rotation.z=s,z0.updateMatrix(),G0.setMatrixAt(b,z0.matrix)}y.add(G0);let B0=new j0(new EJ(0.014,0.07,0.012),E);B0.position.set(0,0.096,0.05),y.add(B0),y.position.set(0.24,-0.33,0.075),A.add(y);let qJ=H("DIAL",12);qJ.position.set(0.24,-0.53,0.07),A.add(qJ);let a0=new pJ,r=new j0(new M9(0.24,0.09,0.03,2,0.012),G);a0.add(r);let X0=new pJ,k0=new j0(new EJ(0.04,0.09,0.04),new CJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));k0.position.y=0.045,X0.add(k0);let L0=new j0(new M9(0.065,0.05,0.05,2,0.014),q);L0.position.y=0.1,X0.add(L0),X0.position.z=0.03,a0.add(X0),a0.position.set(0,-0.13,0.07),A.add(a0);let S0=H("INF",11);S0.position.set(-0.2,-0.1,0.07),A.add(S0);let s0=H("DEV",11);s0.position.set(0.2,-0.1,0.07),A.add(s0);let m0=new h9(0.012,0.012,0.014,12),x0=new j0(m0,new jJ({color:e9}));x0.material.toneMapped=!1,x0.rotation.x=Math.PI/2,x0.position.set(-0.2,-0.16,0.07),A.add(x0);let r0=new j0(m0,new jJ({color:V}));r0.material.toneMapped=!1,r0.rotation.x=Math.PI/2,r0.position.set(0.2,-0.16,0.07),A.add(r0);let n0=document.createElement("canvas");n0.width=240,n0.height=254,l6(n0.getContext("2d"),0,0,240,DJ);let g0=new V9(n0);g0.colorSpace=N9,g0.generateMipmaps=!1,g0.minFilter=BJ;let RJ=new j0(new dJ(0.08,0.0847),new jJ({map:g0,transparent:!0}));RJ.material.toneMapped=!1,RJ.position.set(0,-0.66,0.07),A.add(RJ);let AJ=new pJ;AJ.position.set(0.2,0.84,0),A.add(AJ);let XJ=new j0(new M9(0.56,0.07,0.11,2,0.02),G);AJ.add(XJ);let MJ=new j0(new EJ(0.5,0.005,0.004),E);MJ.position.set(0,0.037,0.056),AJ.add(MJ);let GJ=new pJ,LJ=new j0(new M9(0.48,0.5,0.02,2,0.01),new CJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}));GJ.add(LJ);let j=new jJ;j.toneMapped=!1;let gJ=new j0(new dJ(0.46,0.48),j);gJ.position.z=0.0115,GJ.add(gJ),GJ.position.y=-0.06,AJ.add(GJ);let t0=new CJ({color:2764075,roughness:0.42,metalness:0.75,envMapIntensity:0.9}),YJ=new h9(0.014,0.014,0.01,12);for(let[b,s]of[[-0.4,0.74],[0.4,0.74],[-0.4,-0.72],[0.4,-0.72]]){let $0=new j0(YJ,t0);$0.rotation.x=Math.PI/2,$0.position.set(b,s,0.066),A.add($0);let P0=new j0(new EJ(0.018,0.003,0.004),G);P0.position.set(b,s,0.072),P0.rotation.z=b*s>0?0.6:-0.5,A.add(P0)}for(let b=0;b<6;b++){let s=new j0(new EJ(0.16,0.008,0.006),G);s.position.set(0.26,-0.6-b*0.024,0.066),A.add(s)}for(let b of[-0.02,-0.58]){let s=new j0(new EJ(0.8,0.004,0.004),new CJ({color:395015,roughness:0.9,metalness:0.1}));s.position.set(0,b,0.066),A.add(s)}let z=new CJ({color:658443,roughness:0.85,metalness:0.15}),D=new R8(new EJ(0.03,0.075,0.128),z,16),T=new kJ;for(let b=0;b<16;b++){let s=b<8?-1:1;T.position.set(s*0.458,-0.5+b%8*0.115,0),T.updateMatrix(),D.setMatrixAt(b,T.matrix)}A.add(D);let l=new j0(new M9(0.88,0.7,0.02,2,0.02),new CJ({color:724236,roughness:0.6,metalness:0.3,envMapIntensity:0.5}));l.position.set(0,0.4,0.052),A.add(l);let e=document.createElement("canvas");e.width=e.height=256;let Z0=e.getContext("2d");Z0.translate(128,128),Z0.strokeStyle="rgba(9,248,117,0.4)",Z0.lineWidth=3;for(let b=0;b<24;b++)Z0.beginPath(),Z0.moveTo(0,-104),Z0.lineTo(0,b%6===0?-88:-96),Z0.stroke(),Z0.rotate(Math.PI/12);let H0=new V9(e);H0.colorSpace=N9,H0.generateMipmaps=!1,H0.minFilter=BJ;let u=new j0(new dJ(0.42,0.42),new jJ({map:H0,transparent:!0}));u.material.toneMapped=!1,u.position.set(0.24,-0.33,0.068),A.add(u);let o=new j0(new h9(0.011,0.011,0.012,10),new jJ({color:e9}));o.material.toneMapped=!1,o.rotation.x=Math.PI/2,o.position.set(0.4,0.03,0.07),A.add(o);let R0=H("WLT-01",11,"rgba(9,248,117,0.5)");R0.position.set(-0.37,-0.66,0.068),A.add(R0);let M0=new j0(new dJ(2.4,1.6),new jJ({map:Qq(),transparent:!0,depthWrite:!1}));M0.rotation.x=-Math.PI/2,M0.position.y=-0.12,Z.add(M0),F.position.y=0.02;let q0=new A8(0,60,14),W0=new A8(0,60,14),_0=new A8(0,170,20),A0=new A8(0,400,24),d0=new A8(-0.22,240,20),S=new A8(Z9?-0.06:0.62,70,13),U0={t:0},c=(b,s=!1)=>{let $0=(b%J8.length+J8.length)%J8.length;if($0===L.mode)return;if(L.mode=$0,L.err=null,L.armed=null,L.dirty=!0,_0.target=-$0*(Math.PI*2/8),!s)fJ.detent($0);L.vireo.poke(),uJ(),JJ(`Mode: ${J8[$0]}`)},N0=document.getElementById("dv-input-row"),O0=document.getElementById("dv-input"),J0=document.getElementById("dv-go"),Y0=document.getElementById("dv-alt"),b0=document.getElementById("dv-live"),JJ=(b)=>{if(b0)b0.textContent=b},QJ={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}};function uJ(){let b=L.modeName(),s=QJ[b];if(N0)N0.style.display=s?"flex":"none";if(s&&O0)O0.placeholder=s.ph;if(s&&J0)J0.textContent=s.go;if(Y0)if(b==="HOME"||b==="LANES")Y0.style.display="",Y0.textContent=b==="LANES"?"Sweep lane":"Fund lane";else Y0.style.display="none"}async function K9(){try{let b=await fetch("/api/playground/meta");if(!b.ok)return;if(L.meta=await b.json(),L.meta?.handle){if(j.map=Jq(L.meta.handle,L.meta.variant),j.needsUpdate=!0,S.target>0){if(S.target=-0.06,!Z9)setTimeout(()=>fJ.dock(),420);setTimeout(()=>{L.powered=!0},Z9?0:750)}}L.dirty=!0}catch{}}async function K7(){try{let b=await fetch("/api/credits/history");if(!b.ok)return;let s=await b.json();L.history=s.entries||[],L.dirty=!0}catch{}}addEventListener("vc-balances",(b)=>{let s=b.detail||{};if(!L.meta)return;let $0=L.meta.main_balance_usd;L.meta.main_balance_usd=s.main??L.meta.main_balance_usd;for(let P0 of s.wallets||[]){let t=P0.purpose==="inference"?L.meta.lanes?.inference:L.meta.lanes?.devtools;if(t)t.balance_usd=P0.balance_usd,t.consumed_usd=P0.consumed_usd}if(typeof s.main==="number"&&s.main!==$0)L.vireo.set("happy");L.dirty=!0,K7()});function W7(b){let s=L.meta?.lanes?.[b];return s?{id:s.id,name:b==="inference"?"Inference":"Developer tools"}:null}function Q8(b){let s=W7(b);if(!s)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:s}))}async function y7(b){let s=W7(b);if(!s)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:s}))}let X7=null,P8=!1;function O9(){if(L.busy)return!1;if(QJ[L.modeName()]&&!(O0?.value||"").trim())return O0?.focus(),L.vireo.set("alert"),L.dirty=!0,fJ.err(),!1;return!0}async function $8(){if(L.busy)return;let b=L.modeName();if(L.err=null,b==="HOME"){Q8("inference");return}if(b==="LANES"){Q8(L.lane);return}if(b==="LEDGER"){K7();return}let s=QJ[b],$0=(O0?.value||"").trim();if(s&&!$0){O0?.focus(),L.vireo.set("alert"),fJ.err();return}if(b==="CHAT"&&!L.armed){let t=(Math.ceil(($0.length+180)/4)*0.14+112.00000000000001)/1e6,$J=L.meta?.vantis_price_usd?t/L.meta.vantis_price_usd:null;L.armed={until:performance.now()+3000,quote:`UP TO $${t.toFixed(6)}${$J?` · ~${$J.toFixed(4)} VANTIS`:""} AT LIST`},L.dirty=!0,JJ("Armed. Press again to fire.");return}L.armed=null,L.busy=!0,L.vireo.set("work"),L.vireo.flapRate=3,L.dirty=!0;try{if(b==="CHAT"){L.chat={prompt:$0,text:"",shown:0,line:""};let P0=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:$0})}),t=await P0.json();if(!P0.ok){if(L.chat=null,t.error==="lane_empty")L.err=`Inference lane is empty — it needs about $${(t.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,L.vireo.set("droop");else if(t.error==="rate_limited")L.err="Easy — a few seconds between fires.",L.vireo.set("alert");else L.err="The rail refused that one. Try again.",L.vireo.set("alert");fJ.err()}else{if(L.chat.text=t.text||"",L.chat.line=`${(t.latency_ms/1000).toFixed(1)}s · ${t.tokens_out} TOK OUT · $${(t.cost_usd||0).toFixed(6)} → ${(t.vantis_burned||0).toFixed(4)} VANTIS BURNED`,L.meta?.lanes?.inference)L.meta.lanes.inference.balance_usd=t.lane_balance_usd;fJ.ok(),JJ(`Answer: ${t.text}`)}}else if(b==="SEARCH"){let P0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:$0})}),t=await P0.json();if(!P0.ok){if(t.error==="demo_exhausted")L.err="Today's free searches are spent — more tomorrow.";else L.err="Search did not go through.";L.vireo.set("alert"),fJ.err()}else L.search={query:$0,results:t.results,left:t.left_today},L.vireo.set("happy"),fJ.ok(),JJ(`${t.results.length} results`)}else if(b==="X LOOKUP"){let P0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:$0})}),t=await P0.json();if(!P0.ok)L.err=t.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":t.error==="handle_not_found"?"No such handle — check the spelling.":t.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",L.vireo.set("alert"),fJ.err();else L.xprof={profile:t.profile,left:t.left_today},L.vireo.set("happy"),fJ.ok(),JJ(`@${t.profile.handle}: ${t.profile.followers} followers`)}}catch{L.err="Network hiccup — try again.",L.vireo.set("alert"),fJ.err()}finally{if(L.busy=!1,L.vireo.state==="work")L.vireo.set("idle");L.dirty=!0}}let _8=-1e9,Z8=new b6,W9=new u0,cJ=null,w8=new jJ({visible:!1}),g9=(b,s,$0,P0,t,$J=0,T0=0,FJ=0)=>{let VJ=new j0(new EJ(s,$0,P0),w8);return VJ.position.set($J,T0,FJ),VJ.userData.hit=b,t.add(VJ),VJ},b7=[g9("knob",0.38,0.38,0.22,y),g9("key",0.36,0.36,0.2,d),g9("lever",0.3,0.26,0.18,a0,0,0.06,0.03),g9("card",0.6,0.3,0.24,AJ,0,0.1,0.02),g9("screen",0.8,0.61,0.06,B,0,0.4,0.08)];function Y7(b){let s=$.domElement.getBoundingClientRect();W9.x=(b.clientX-s.left)/s.width*2-1,W9.y=-((b.clientY-s.top)/s.height)*2+1,Z8.setFromCamera(W9,U);let $0=Z8.intersectObjects(b7,!1);return $0.length?$0[0].object.userData.hit:null}function d6(b){let s=$.domElement.getBoundingClientRect();W9.x=(b.clientX-s.left)/s.width*2-1,W9.y=-((b.clientY-s.top)/s.height)*2+1,Z8.setFromCamera(W9,U);let $0=Z8.intersectObject(_,!1)[0];if(!$0?.uv)return null;return{cx:$0.uv.x*$9,cy:(1-$0.uv.y)*x9}}function u6(b){let s=d6(b);if(!s)return;for(let $0 of L.tabRects)if(s.cx>=$0.x&&s.cx<=$0.x+$0.w&&s.cy>=$0.y&&s.cy<=$0.y+$0.h){c($0.mode);return}if(L.modeName()==="LANES"&&s.cy>100&&s.cy<460){let $0=s.cx<$9/2?"inference":"devtools";if($0!==L.lane)L.lane=$0,d0.target=$0==="inference"?-0.22:0.22,fJ.lever(),L.dirty=!0,JJ(`Lane: ${L.lane}`)}}$.domElement.addEventListener("pointerdown",(b)=>{_8=performance.now();let s=Y7(b);if(!s)return;if(L.vireo.poke(),s==="knob")cJ={x:b.clientX,base:L.mode,acc:0},$.domElement.setPointerCapture(b.pointerId);else if(s==="key"){if(!O9())return;A0.target=-0.032,fJ.press(),P8=!1,X7=setTimeout(()=>{if(P8=!0,L.modeName()==="LANES")y7(L.lane)},650)}else if(s==="lever"){if(L.lane=L.lane==="inference"?"devtools":"inference",d0.target=L.lane==="inference"?-0.22:0.22,fJ.lever(),L.dirty=!0,L.modeName()!=="LANES")c(5,!0);JJ(`Lane: ${L.lane}`)}else if(s==="screen")u6(b);else if(s==="card")c(0)});let h7=0,k=null;$.domElement.addEventListener("pointermove",(b)=>{_8=performance.now();let s=$.domElement.getBoundingClientRect(),$0=(b.clientX-s.left)/s.width*2-1,P0=(b.clientY-s.top)/s.height*2-1;if(!Z9)W0.target=$0*0.1,q0.target=P0*0.055;if(cJ){let $J=b.clientX-cJ.x,T0=Math.round($J/52);if(T0!==cJ.acc)c(cJ.base+T0),cJ.acc=T0;$.domElement.style.cursor="grabbing";return}let t=performance.now();if(t-h7>80)h7=t,k=Y7(b),$.domElement.style.cursor=k?"pointer":"default"});let f=(b)=>{if(cJ){cJ=null;try{$.domElement.releasePointerCapture(b.pointerId)}catch{}}if(A0.target!==0){if(A0.target=0,clearTimeout(X7),!P8)$8()}};$.domElement.addEventListener("pointerup",f),$.domElement.addEventListener("pointerleave",(b)=>{if(!cJ)q0.target=0,W0.target=0;f(b)});let g=0,h=null;$.domElement.addEventListener("wheel",(b)=>{if(k!=="knob"&&!cJ)return;b.preventDefault(),g+=b.deltaY,clearTimeout(h),h=setTimeout(()=>g=0,200);while(Math.abs(g)>=100)c(L.mode+(g>0?1:-1)),g-=Math.sign(g)*100},{passive:!1});let x=()=>{if(!O9())return;A0.target=-0.032,setTimeout(()=>A0.target=0,130),fJ.press(),$8()};addEventListener("keydown",(b)=>{if(b.target===O0){if(b.key==="Enter")b.preventDefault(),x();return}if(b.target?.tagName==="INPUT"||b.target?.tagName==="TEXTAREA")return;if(b.key==="ArrowRight")c(L.mode+1);else if(b.key==="ArrowLeft")c(L.mode-1);else if(b.key==="Enter")x();else if(b.key.toLowerCase()==="l")L.lane=L.lane==="inference"?"devtools":"inference",d0.target=L.lane==="inference"?-0.22:0.22,fJ.lever(),L.dirty=!0}),J0?.addEventListener("click",x),Y0?.addEventListener("click",()=>{if(L.modeName()==="LANES")y7(L.lane);else Q8("inference")});function E0(){let b=J.clientWidth,s=Math.max(480,Math.min(780,Math.round(b*0.82)));$.setSize(b,s),U.aspect=b/s,U.position.z=b<560?5.6:b<760?4.95:4.35,U.updateProjectionMatrix(),L.dirty=!0}new ResizeObserver(E0).observe(J),E0();let V0=performance.now(),F0=0,I0=[q0,W0,_0,A0,d0,S];function C0(b){F0=requestAnimationFrame(C0);let s=Math.min(0.25,(b-V0)/1000),$0=Math.min(0.05,s);V0=b;let P0=b/1000;U0.t=P0;let t=L.step(s,P0),$J=b-_8<2500;if(!(!L.booted||L.busy||t||$J||I0.some((FJ)=>!FJ.settled())))if(Math.abs(F.position.y-0.02)>0.0004)F.position.y+=(0.02-F.position.y)*Math.min(1,$0*3);else return;else if(!Z9&&$J)F.position.y=0.02+Math.sin(P0*0.9)*0.012;if(!Z9)F.rotation.x=q0.step($0),F.rotation.y=W0.step($0);y.rotation.z=_0.step($0),C.position.z=A0.step($0),X0.rotation.z=d0.step($0),GJ.position.y=S.step($0),r0.material.color.set(L.lane==="devtools"?e9:1327146),x0.material.color.set(L.lane==="inference"?e9:1327146),E.color.setHex(e9).multiplyScalar(L.busy?0.75+Math.sin(P0*9)*0.25:1),$.render(Z,U)}if(Z9){let b=()=>{L.step(0.03333333333333333,performance.now()/1000),y.rotation.z=_0.target,C.position.z=A0.target,X0.rotation.z=d0.target,GJ.position.y=S.target,$.render(Z,U)};setInterval(b,250),b()}else{let b=!0,s=!1,$0=()=>{let P0=b&&!document.hidden;if(P0&&!s)s=!0,V0=performance.now(),F0=requestAnimationFrame(C0);else if(!P0&&s)s=!1,cancelAnimationFrame(F0)};new IntersectionObserver((P0)=>{b=P0[0]?.isIntersecting!==!1,$0()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",$0),$0()}let y0=new v;function p0(b){return b.getWorldPosition(y0),y0.project(U),{x:(y0.x+1)/2*$.domElement.clientWidth,y:(1-y0.y)/2*$.domElement.clientHeight}}function w0(){let b=[{obj:_,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — chat, search, lookups, your ledger."},{obj:d,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:y,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:a0,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge."}],s=document.createElement("div");s.className="dv-coach",s.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(s);let $0=s.querySelector(".dv-coach-ring"),P0=s.querySelector(".dv-coach-step"),t=s.querySelector(".dv-coach-txt"),$J=s.querySelector('[data-a="next"]'),T0=0,FJ=()=>{let nJ=b[T0],I9=p0(nJ.obj);$0.style.left=I9.x+"px",$0.style.top=I9.y+"px",$0.style.width=$0.style.height=nJ.ring+"px",P0.textContent=`${T0+1} / ${b.length} — ${nJ.k}`,t.textContent=nJ.txt,$J.textContent=T0===b.length-1?"Start":"Next",fJ.detent(T0)},VJ=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}s.remove()};s.querySelector('[data-a="skip"]').addEventListener("click",VJ),$J.addEventListener("click",()=>{if(T0++,T0>=b.length)VJ();else FJ()}),FJ()}let e0=!1;try{e0=!!localStorage.getItem("vc-device-coach")}catch{}if(!e0&&!Z9)setTimeout(w0,Z9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),uJ(),K9().then(K7),setTimeout(()=>{L.powered=!0},3200),window.__device={ready:!0,os:L,setMode:(b)=>c(b),pickAt:(b,s)=>Y7({clientX:b,clientY:s}),frames:()=>$.info.render.frame,screenClientPoint:(b,s)=>{let $0=new v((b-0.5)*0.76,(s-0.5)*0.57,0);_.localToWorld($0),$0.project(U);let P0=$.domElement.getBoundingClientRect();return{x:P0.left+($0.x+1)/2*P0.width,y:P0.top+(1-$0.y)/2*P0.height}},fire:$8,snapshot:()=>{return $.render(Z,U),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",kW);else kW();
