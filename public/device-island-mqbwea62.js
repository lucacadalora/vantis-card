var EW=Object.create;var{getPrototypeOf:RW,defineProperty:t9,getOwnPropertyNames:p6,getOwnPropertyDescriptor:kW}=Object,f7=Object.prototype.hasOwnProperty;function y7(J){return this[J]}var r5=(J,Q,$)=>{var Z=p6(Q);for(let K of Z)if(!f7.call(J,K)&&K!=="default")t9(J,K,{get:y7.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!f7.call($,K)&&K!=="default")t9($,K,{get:y7.bind(Q,K),enumerable:!0});return $}},LW,VW,t5=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?LW??=new WeakMap:VW??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?EW(RW(J)):{};let X=Q||!J||!J.__esModule?t9($,"default",{value:J,enumerable:!0}):$;for(let Y of p6(J))if(!f7.call(X,Y))t9(X,Y,{get:y7.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},e5=(J)=>{var Q=(t$??=new WeakMap).get(J),$;if(Q)return Q;if(Q=t9({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of p6(J))if(!f7.call(Q,Z))t9(Q,Z,{get:y7.bind(J,Z),enumerable:!($=kW(J,Z))||$.enumerable})}return t$.set(J,Q),Q},t$,Jq=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var MW=(J)=>J;function zW(J,Q){this[J]=MW.bind(null,Q)}var Qq=(J,Q)=>{for(var $ in Q)t9(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:zW.bind(Q,$)})};var $q=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var Zq=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var BZ="185";var IZ=0,NQ=1,AZ=2;var N7=1,PZ=2,d8=3,u8=0,vJ=1,N9=2,F9=0,F7=1,FQ=2,OQ=3,DQ=4,CZ=5;var c8=100,_Z=101,wZ=102,TZ=103,SZ=104,jZ=200,vZ=201,fZ=202,yZ=203,bZ=204,hZ=205,xZ=206,gZ=207,pZ=208,mZ=209,lZ=210,dZ=211,uZ=212,cZ=213,nZ=214,sZ=0,iZ=1,oZ=2,EQ=3,aZ=4,rZ=5,tZ=6,eZ=7,JK=0,QK=1,$K=2,Z9=0,RQ=1,kQ=2,LQ=3,O7=4,VQ=5,MQ=6,zQ=7;var n8=301,K8=302,W6=303,X6=304,D7=306,ZK=1000,Y6=1001,KK=1002,u9=1003,WK=1004;var E7=1005;var RJ=1006,H6=1007;var W8=1008;var K9=1009,XK=1010,YK=1011,R7=1012,BQ=1013,c9=1014,_9=1015,w9=1016,IQ=1017,AQ=1018,s8=1020,HK=35902,UK=35899,qK=1021,GK=1022,O9=1023,X8=1026,Y8=1027,NK=1028,PQ=1029,H8=1030,CQ=1031;var _Q=1033,U6=33776,q6=33777,G6=33778,N6=33779,wQ=35840,TQ=35841,SQ=35842,jQ=35843,vQ=36196,fQ=37492,yQ=37496,bQ=37488,hQ=37489,F6=37490,xQ=37491,gQ=37808,pQ=37809,mQ=37810,lQ=37811,dQ=37812,uQ=37813,cQ=37814,nQ=37815,sQ=37816,iQ=37817,oQ=37818,aQ=37819,rQ=37820,tQ=37821,eQ=36492,J$=36494,Q$=36495,$$=36283,Z$=36284,O6=36285,K$=36286;var W$=0,FK=1,U8="",D9="srgb",X$="srgb-linear",Y$="linear",WJ="srgb";var OK=512,DK=513,EK=514,D6=515,RK=516,kK=517,E6=518,LK=519;var H$="300 es",U$=2000;function BW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function IW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function G7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function VK(){let J=G7("canvas");return J.style.display="block",J}var e$={},l8=null;function q$(...J){let Q="THREE."+J.shift();if(l8)l8("log",Q,...J);else console.log(Q,...J)}function MK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function _0(...J){J=MK(J);let Q="THREE."+J.shift();if(l8)l8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function C0(...J){J=MK(J);let Q="THREE."+J.shift();if(l8)l8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function Z8(...J){let Q=J.join(" ");if(Q in e$)return;e$[Q]=!0,_0(...J)}function zK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var BK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class T9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var wJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var m6=Math.PI/180,Z6=180/Math.PI;function k7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(wJ[J&255]+wJ[J>>8&255]+wJ[J>>16&255]+wJ[J>>24&255]+"-"+wJ[Q&255]+wJ[Q>>8&255]+"-"+wJ[Q>>16&15|64]+wJ[Q>>24&255]+"-"+wJ[$&63|128]+wJ[$>>8&255]+"-"+wJ[$>>16&255]+wJ[$>>24&255]+wJ[Z&255]+wJ[Z>>8&255]+wJ[Z>>16&255]+wJ[Z>>24&255]).toLowerCase()}function n0(J,Q,$){return Math.max(Q,Math.min($,J))}function AW(J,Q){return(J%Q+Q)%Q}function l6(J,Q,$){return(1-$)*J+$*Q}function K7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function gJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class x0{static{x0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class S9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],H=$[Z+1],U=$[Z+2],N=$[Z+3],F=K[W+0],q=K[W+1],R=K[W+2],V=K[W+3];if(N!==V||Y!==F||H!==q||U!==R){let B=Y*F+H*q+U*R+N*V;if(B<0)F=-F,q=-q,R=-R,V=-V,B=-B;let D=1-X;if(B<0.9995){let O=Math.acos(B),S=Math.sin(O);D=Math.sin(D*O)/S,X=Math.sin(X*O)/S,Y=Y*D+F*X,H=H*D+q*X,U=U*D+R*X,N=N*D+V*X}else{Y=Y*D+F*X,H=H*D+q*X,U=U*D+R*X,N=N*D+V*X;let O=1/Math.sqrt(Y*Y+H*H+U*U+N*N);Y*=O,H*=O,U*=O,N*=O}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],H=$[Z+2],U=$[Z+3],N=K[W],F=K[W+1],q=K[W+2],R=K[W+3];return J[Q]=X*R+U*N+Y*q-H*F,J[Q+1]=Y*R+U*F+H*N-X*q,J[Q+2]=H*R+U*q+X*F-Y*N,J[Q+3]=U*R-X*N-Y*F-H*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(Z/2),N=X(K/2),F=Y($/2),q=Y(Z/2),R=Y(K/2);switch(W){case"XYZ":this._x=F*U*N+H*q*R,this._y=H*q*N-F*U*R,this._z=H*U*R+F*q*N,this._w=H*U*N-F*q*R;break;case"YXZ":this._x=F*U*N+H*q*R,this._y=H*q*N-F*U*R,this._z=H*U*R-F*q*N,this._w=H*U*N+F*q*R;break;case"ZXY":this._x=F*U*N-H*q*R,this._y=H*q*N+F*U*R,this._z=H*U*R+F*q*N,this._w=H*U*N-F*q*R;break;case"ZYX":this._x=F*U*N-H*q*R,this._y=H*q*N+F*U*R,this._z=H*U*R-F*q*N,this._w=H*U*N+F*q*R;break;case"YZX":this._x=F*U*N+H*q*R,this._y=H*q*N+F*U*R,this._z=H*U*R-F*q*N,this._w=H*U*N-F*q*R;break;case"XZY":this._x=F*U*N-H*q*R,this._y=H*q*N-F*U*R,this._z=H*U*R+F*q*N,this._w=H*U*N+F*q*R;break;default:_0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],N=Q[10],F=$+X+N;if(F>0){let q=0.5/Math.sqrt(F+1);this._w=0.25/q,this._x=(U-Y)*q,this._y=(K-H)*q,this._z=(W-Z)*q}else if($>X&&$>N){let q=2*Math.sqrt(1+$-X-N);this._w=(U-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+H)/q}else if(X>N){let q=2*Math.sqrt(1+X-$-N);this._w=(K-H)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+U)/q}else{let q=2*Math.sqrt(1+N-$-X);this._w=(W-Z)/q,this._x=(K+H)/q,this._y=(Y+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(n0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+W*X+Z*H-K*Y,this._y=Z*U+W*Y+K*X-$*H,this._z=K*U+W*H+$*Y-Z*X,this._w=W*U-$*X-Z*Y-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class h{static{h.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(JZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(JZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*Z-X*$),U=2*(X*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+Y*H+W*N-X*U,this.y=$+Y*U+X*H-K*N,this.z=Z+Y*N+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return d6.copy(this).projectOnVector(J),this.sub(d6)}reflect(J){return this.sub(d6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var d6=new h,JZ=new S9;class j0{static{j0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H)}set(J,Q,$,Z,K,W,X,Y,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=X,U[3]=Q,U[4]=K,U[5]=Y,U[6]=$,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],N=$[7],F=$[2],q=$[5],R=$[8],V=Z[0],B=Z[3],D=Z[6],O=Z[1],S=Z[4],_=Z[7],E=Z[2],P=Z[5],A=Z[8];return K[0]=W*V+X*O+Y*E,K[3]=W*B+X*S+Y*P,K[6]=W*D+X*_+Y*A,K[1]=H*V+U*O+N*E,K[4]=H*B+U*S+N*P,K[7]=H*D+U*_+N*A,K[2]=F*V+q*O+R*E,K[5]=F*B+q*S+R*P,K[8]=F*D+q*_+R*A,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*W*U-Q*X*H-$*K*U+$*X*Y+Z*K*H-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],N=U*W-X*H,F=X*Y-U*K,q=H*K-W*Y,R=Q*N+$*F+Z*q;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let V=1/R;return J[0]=N*V,J[1]=(Z*H-U*$)*V,J[2]=(X*$-Z*W)*V,J[3]=F*V,J[4]=(U*Q-Z*Y)*V,J[5]=(Z*K-X*Q)*V,J[6]=q*V,J[7]=($*Y-H*Q)*V,J[8]=(W*Q-$*K)*V,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),H=Math.sin(K);return this.set($*Y,$*H,-$*(Y*W+H*X)+W+J,-Z*H,Z*Y,-Z*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return Z8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(u6.makeScale(J,Q)),this}rotate(J){return Z8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(u6.makeRotation(-J)),this}translate(J,Q){return Z8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(u6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var u6=new j0,QZ=new j0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),$Z=new j0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function PW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=C9(K.r),K.g=C9(K.g),K.b=C9(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=m8(K.r),K.g=m8(K.g),K.b=m8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return Z8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return Z8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var d0=PW();function C9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function m8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var _8;class G${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(_8===void 0)_8=G7("canvas");_8.width=J.width,_8.height=J.height;let Z=_8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=_8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=G7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=C9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(C9(Q[$]/255)*255);else Q[$]=C9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return _0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var CW=0;class L7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CW++}),this.uuid=k7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(c6(Z[W].image));else K.push(c6(Z[W]))}else K=c6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function c6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return G$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return _0("Texture: Unable to serialize Texture."),{}}var _W=0,n6=new h;class PJ extends T9{constructor(J=PJ.DEFAULT_IMAGE,Q=PJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,H=PJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:_W++}),this.uuid=k7(),this.name="",this.source=new L7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new x0(0,0),this.repeat=new x0(1,1),this.center=new x0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(n6).x}get height(){return this.source.getSize(n6).y}get depth(){return this.source.getSize(n6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){_0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){_0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}PJ.DEFAULT_IMAGE=null;PJ.DEFAULT_MAPPING=300;PJ.DEFAULT_ANISOTROPY=1;class HJ{static{HJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],N=Y[8],F=Y[1],q=Y[5],R=Y[9],V=Y[2],B=Y[6],D=Y[10];if(Math.abs(U-F)<0.01&&Math.abs(N-V)<0.01&&Math.abs(R-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(N+V)<0.1&&Math.abs(R+B)<0.1&&Math.abs(H+q+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let S=(H+1)/2,_=(q+1)/2,E=(D+1)/2,P=(U+F)/4,A=(N+V)/4,w=(R+B)/4;if(S>_&&S>E)if(S<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(S),Z=P/$,K=A/$;else if(_>E)if(_<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(_),$=P/Z,K=w/Z;else if(E<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(E),$=A/K,Z=w/K;return this.set($,Z,K,Q),this}let O=Math.sqrt((B-R)*(B-R)+(N-V)*(N-V)+(F-U)*(F-U));if(Math.abs(O)<0.001)O=1;return this.x=(B-R)/O,this.y=(N-V)/O,this.z=(F-U)/O,this.w=Math.acos((H+q+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this.w=n0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this.w=n0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N$ extends T9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new HJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new HJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new PJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new L7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aJ extends N${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class R6 extends PJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class F$ extends PJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $J{static{$J.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,H,U,N,F,q,R,V,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H,U,N,F,q,R,V,B)}set(J,Q,$,Z,K,W,X,Y,H,U,N,F,q,R,V,B){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=$,D[12]=Z,D[1]=K,D[5]=W,D[9]=X,D[13]=Y,D[2]=H,D[6]=U,D[10]=N,D[14]=F,D[3]=q,D[7]=R,D[11]=V,D[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $J().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/w8.setFromMatrixColumn(J,0).length(),K=1/w8.setFromMatrixColumn(J,1).length(),W=1/w8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let F=W*U,q=W*N,R=X*U,V=X*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=H,Q[1]=q+R*H,Q[5]=F-V*H,Q[9]=-X*Y,Q[2]=V-F*H,Q[6]=R+q*H,Q[10]=W*Y}else if(J.order==="YXZ"){let F=Y*U,q=Y*N,R=H*U,V=H*N;Q[0]=F+V*X,Q[4]=R*X-q,Q[8]=W*H,Q[1]=W*N,Q[5]=W*U,Q[9]=-X,Q[2]=q*X-R,Q[6]=V+F*X,Q[10]=W*Y}else if(J.order==="ZXY"){let F=Y*U,q=Y*N,R=H*U,V=H*N;Q[0]=F-V*X,Q[4]=-W*N,Q[8]=R+q*X,Q[1]=q+R*X,Q[5]=W*U,Q[9]=V-F*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let F=W*U,q=W*N,R=X*U,V=X*N;Q[0]=Y*U,Q[4]=R*H-q,Q[8]=F*H+V,Q[1]=Y*N,Q[5]=V*H+F,Q[9]=q*H-R,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,q=W*H,R=X*Y,V=X*H;Q[0]=Y*U,Q[4]=V-F*N,Q[8]=R*N+q,Q[1]=N,Q[5]=W*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=q*N+R,Q[10]=F-V*N}else if(J.order==="XZY"){let F=W*Y,q=W*H,R=X*Y,V=X*H;Q[0]=Y*U,Q[4]=-N,Q[8]=H*U,Q[1]=F*N+V,Q[5]=W*U,Q[9]=q*N-R,Q[2]=R*N-q,Q[6]=X*U,Q[10]=V*N+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(wW,J,TW)}lookAt(J,Q,$){let Z=this.elements;if(lJ.subVectors(J,Q),lJ.lengthSq()===0)lJ.z=1;if(lJ.normalize(),x9.crossVectors($,lJ),x9.lengthSq()===0){if(Math.abs($.z)===1)lJ.x+=0.0001;else lJ.z+=0.0001;lJ.normalize(),x9.crossVectors($,lJ)}return x9.normalize(),b7.crossVectors(lJ,x9),Z[0]=x9.x,Z[4]=b7.x,Z[8]=lJ.x,Z[1]=x9.y,Z[5]=b7.y,Z[9]=lJ.y,Z[2]=x9.z,Z[6]=b7.z,Z[10]=lJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],N=$[5],F=$[9],q=$[13],R=$[2],V=$[6],B=$[10],D=$[14],O=$[3],S=$[7],_=$[11],E=$[15],P=Z[0],A=Z[4],w=Z[8],L=Z[12],z=Z[1],l=Z[5],C=Z[9],p=Z[13],o=Z[2],g=Z[6],u=Z[10],c=Z[14],x=Z[3],t=Z[7],e=Z[11],G0=Z[15];return K[0]=W*P+X*z+Y*o+H*x,K[4]=W*A+X*l+Y*g+H*t,K[8]=W*w+X*C+Y*u+H*e,K[12]=W*L+X*p+Y*c+H*G0,K[1]=U*P+N*z+F*o+q*x,K[5]=U*A+N*l+F*g+q*t,K[9]=U*w+N*C+F*u+q*e,K[13]=U*L+N*p+F*c+q*G0,K[2]=R*P+V*z+B*o+D*x,K[6]=R*A+V*l+B*g+D*t,K[10]=R*w+V*C+B*u+D*e,K[14]=R*L+V*p+B*c+D*G0,K[3]=O*P+S*z+_*o+E*x,K[7]=O*A+S*l+_*g+E*t,K[11]=O*w+S*C+_*u+E*e,K[15]=O*L+S*p+_*c+E*G0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],N=J[6],F=J[10],q=J[14],R=J[3],V=J[7],B=J[11],D=J[15],O=Y*q-H*F,S=X*q-H*N,_=X*F-Y*N,E=W*q-H*U,P=W*F-Y*U,A=W*N-X*U;return Q*(V*O-B*S+D*_)-$*(R*O-B*E+D*P)+Z*(R*S-V*E+D*A)-K*(R*_-V*P+B*A)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(W*U-X*H)-$*(K*U-X*Y)+Z*(K*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],N=J[9],F=J[10],q=J[11],R=J[12],V=J[13],B=J[14],D=J[15],O=Q*X-$*W,S=Q*Y-Z*W,_=Q*H-K*W,E=$*Y-Z*X,P=$*H-K*X,A=Z*H-K*Y,w=U*V-N*R,L=U*B-F*R,z=U*D-q*R,l=N*B-F*V,C=N*D-q*V,p=F*D-q*B,o=O*p-S*C+_*l+E*z-P*L+A*w;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let g=1/o;return J[0]=(X*p-Y*C+H*l)*g,J[1]=(Z*C-$*p-K*l)*g,J[2]=(V*A-B*P+D*E)*g,J[3]=(F*P-N*A-q*E)*g,J[4]=(Y*z-W*p-H*L)*g,J[5]=(Q*p-Z*z+K*L)*g,J[6]=(B*_-R*A-D*S)*g,J[7]=(U*A-F*_+q*S)*g,J[8]=(W*C-X*z+H*w)*g,J[9]=($*z-Q*C-K*w)*g,J[10]=(R*P-V*_+D*O)*g,J[11]=(N*_-U*P-q*O)*g,J[12]=(X*L-W*l-Y*w)*g,J[13]=(Q*l-$*L+Z*w)*g,J[14]=(V*S-R*E-B*O)*g,J[15]=(U*E-N*S+F*O)*g,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,H=K*W,U=K*X;return this.set(H*W+$,H*X-Z*Y,H*Y+Z*X,0,H*X+Z*Y,U*X+$,U*Y-Z*W,0,H*Y-Z*X,U*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=K+K,U=W+W,N=X+X,F=K*H,q=K*U,R=K*N,V=W*U,B=W*N,D=X*N,O=Y*H,S=Y*U,_=Y*N,E=$.x,P=$.y,A=$.z;return Z[0]=(1-(V+D))*E,Z[1]=(q+_)*E,Z[2]=(R-S)*E,Z[3]=0,Z[4]=(q-_)*P,Z[5]=(1-(F+D))*P,Z[6]=(B+O)*P,Z[7]=0,Z[8]=(R+S)*A,Z[9]=(B-O)*A,Z[10]=(1-(F+V))*A,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=w8.set(Z[0],Z[1],Z[2]).length(),X=w8.set(Z[4],Z[5],Z[6]).length(),Y=w8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;J9.copy(this);let H=1/W,U=1/X,N=1/Y;return J9.elements[0]*=H,J9.elements[1]*=H,J9.elements[2]*=H,J9.elements[4]*=U,J9.elements[5]*=U,J9.elements[6]*=U,J9.elements[8]*=N,J9.elements[9]*=N,J9.elements[10]*=N,Q.setFromRotationMatrix(J9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2*K/(Q-J),N=2*K/($-Z),F=(Q+J)/(Q-J),q=($+Z)/($-Z),R,V;if(Y)R=K/(W-K),V=W*K/(W-K);else if(X===2000)R=-(W+K)/(W-K),V=-2*W*K/(W-K);else if(X===2001)R=-W/(W-K),V=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=N,H[9]=q,H[13]=0,H[2]=0,H[6]=0,H[10]=R,H[14]=V,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),N=2/($-Z),F=-(Q+J)/(Q-J),q=-($+Z)/($-Z),R,V;if(Y)R=1/(W-K),V=W/(W-K);else if(X===2000)R=-2/(W-K),V=-(W+K)/(W-K);else if(X===2001)R=-1/(W-K),V=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=N,H[9]=0,H[13]=q,H[2]=0,H[6]=0,H[10]=R,H[14]=V,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var w8=new h,J9=new $J,wW=new h(0,0,0),TW=new h(1,1,1),x9=new h,b7=new h,lJ=new h,ZZ=new $J,KZ=new S9;class G9{constructor(J=0,Q=0,$=0,Z=G9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],H=Z[5],U=Z[9],N=Z[2],F=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(n0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-n0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(n0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,q),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-n0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(n0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-n0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(X,K);else this._x=Math.atan2(-U,q),this._y=0;break;default:_0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return ZZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(ZZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return KZ.setFromEuler(this),this.setFromQuaternion(KZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}G9.DEFAULT_ORDER="XYZ";class V7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var SW=0,WZ=new h,T8=new S9,M9=new $J,h7=new h,W7=new h,jW=new h,vW=new S9,XZ=new h(1,0,0),YZ=new h(0,1,0),HZ=new h(0,0,1),UZ={type:"added"},fW={type:"removed"},S8={type:"childadded",child:null},s6={type:"childremoved",child:null};class DJ extends T9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:SW++}),this.uuid=k7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=DJ.DEFAULT_UP.clone();let J=new h,Q=new G9,$=new S9,Z=new h(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new $J},normalMatrix:{value:new j0}}),this.matrix=new $J,this.matrixWorld=new $J,this.matrixAutoUpdate=DJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=DJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return T8.setFromAxisAngle(J,Q),this.quaternion.multiply(T8),this}rotateOnWorldAxis(J,Q){return T8.setFromAxisAngle(J,Q),this.quaternion.premultiply(T8),this}rotateX(J){return this.rotateOnAxis(XZ,J)}rotateY(J){return this.rotateOnAxis(YZ,J)}rotateZ(J){return this.rotateOnAxis(HZ,J)}translateOnAxis(J,Q){return WZ.copy(J).applyQuaternion(this.quaternion),this.position.add(WZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(XZ,J)}translateY(J){return this.translateOnAxis(YZ,J)}translateZ(J){return this.translateOnAxis(HZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(M9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)h7.copy(J);else h7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),W7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)M9.lookAt(W7,h7,this.up);else M9.lookAt(h7,W7,this.up);if(this.quaternion.setFromRotationMatrix(M9),Z)M9.extractRotation(Z.matrixWorld),T8.setFromRotationMatrix(M9),this.quaternion.premultiply(T8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return C0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(UZ),S8.child=J,this.dispatchEvent(S8),S8.child=null;else C0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(fW),s6.child=J,this.dispatchEvent(s6),s6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),M9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),M9.multiply(J.parent.matrixWorld);return J.applyMatrix4(M9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(UZ),S8.child=J,this.dispatchEvent(S8),S8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(W7,J,jW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(W7,vW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let N=Y[H];K(J.shapes,N)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),F=W(J.skeletons),q=W(J.animations),R=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(F.length>0)$.skeletons=F;if(q.length>0)$.animations=q;if(R.length>0)$.nodes=R}return $.object=Z,$;function W(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}DJ.DEFAULT_UP=new h(0,1,0);DJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;DJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jJ extends DJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var yW={type:"move"};class M7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new jJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new jJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new h,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new h;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new jJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new h,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new h,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let V of J.hand.values()){let B=Q.getJointPose(V,$),D=this._getHandJoint(H,V);if(B!==null)D.matrix.fromArray(B.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=B.radius;D.visible=B!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],F=U.position.distanceTo(N.position),q=0.02,R=0.005;if(H.inputState.pinching&&F>q+R)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=q-R)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(yW)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new jJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var IK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},g9={h:0,s:0,l:0},x7={h:0,s:0,l:0};function i6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class g0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,d0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=d0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,d0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=d0.workingColorSpace){if(J=AW(J,1),Q=n0(Q,0,1),$=n0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=i6(W,K,J+0.3333333333333333),this.g=i6(W,K,J),this.b=i6(W,K,J-0.3333333333333333)}return d0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)_0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:_0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else _0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=IK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else _0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=C9(J.r),this.g=C9(J.g),this.b=C9(J.b),this}copyLinearToSRGB(J){return this.r=m8(J.r),this.g=m8(J.g),this.b=m8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return d0.workingToColorSpace(TJ.copy(this),J),Math.round(n0(TJ.r*255,0,255))*65536+Math.round(n0(TJ.g*255,0,255))*256+Math.round(n0(TJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=d0.workingColorSpace){d0.workingToColorSpace(TJ.copy(this),Q);let{r:$,g:Z,b:K}=TJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,H,U=(X+W)/2;if(X===W)Y=0,H=0;else{let N=W-X;switch(H=U<=0.5?N/(W+X):N/(2-W-X),W){case $:Y=(Z-K)/N+(Z<K?6:0);break;case Z:Y=(K-$)/N+2;break;case K:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=d0.workingColorSpace){return d0.workingToColorSpace(TJ.copy(this),Q),J.r=TJ.r,J.g=TJ.g,J.b=TJ.b,J}getStyle(J="srgb"){d0.workingToColorSpace(TJ.copy(this),J);let{r:Q,g:$,b:Z}=TJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(g9),this.setHSL(g9.h+J,g9.s+Q,g9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(g9),J.getHSL(x7);let $=l6(g9.h,x7.h,Q),Z=l6(g9.s,x7.s,Q),K=l6(g9.l,x7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var TJ=new g0;g0.NAMES=IK;class i8 extends DJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new G9,this.environmentIntensity=1,this.environmentRotation=new G9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Q9=new h,z9=new h,o6=new h,B9=new h,j8=new h,v8=new h,qZ=new h,a6=new h,r6=new h,t6=new h,e6=new HJ,JQ=new HJ,QQ=new HJ;class oJ{constructor(J=new h,Q=new h,$=new h){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),Q9.subVectors(J,Q),Z.cross(Q9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){Q9.subVectors(Z,Q),z9.subVectors($,Q),o6.subVectors(J,Q);let W=Q9.dot(Q9),X=Q9.dot(z9),Y=Q9.dot(o6),H=z9.dot(z9),U=z9.dot(o6),N=W*H-X*X;if(N===0)return K.set(0,0,0),null;let F=1/N,q=(H*Y-X*U)*F,R=(W*U-X*Y)*F;return K.set(1-q-R,R,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,B9)===null)return!1;return B9.x>=0&&B9.y>=0&&B9.x+B9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,B9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,B9.x),Y.addScaledVector(W,B9.y),Y.addScaledVector(X,B9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return e6.setScalar(0),JQ.setScalar(0),QQ.setScalar(0),e6.fromBufferAttribute(J,Q),JQ.fromBufferAttribute(J,$),QQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(e6,K.x),W.addScaledVector(JQ,K.y),W.addScaledVector(QQ,K.z),W}static isFrontFacing(J,Q,$,Z){return Q9.subVectors($,Q),z9.subVectors(J,Q),Q9.cross(z9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Q9.subVectors(this.c,this.b),z9.subVectors(this.a,this.b),Q9.cross(z9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return oJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return oJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return oJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return oJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return oJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;j8.subVectors(Z,$),v8.subVectors(K,$),a6.subVectors(J,$);let Y=j8.dot(a6),H=v8.dot(a6);if(Y<=0&&H<=0)return Q.copy($);r6.subVectors(J,Z);let U=j8.dot(r6),N=v8.dot(r6);if(U>=0&&N<=U)return Q.copy(Z);let F=Y*N-U*H;if(F<=0&&Y>=0&&U<=0)return W=Y/(Y-U),Q.copy($).addScaledVector(j8,W);t6.subVectors(J,K);let q=j8.dot(t6),R=v8.dot(t6);if(R>=0&&q<=R)return Q.copy(K);let V=q*H-Y*R;if(V<=0&&H>=0&&R<=0)return X=H/(H-R),Q.copy($).addScaledVector(v8,X);let B=U*R-q*N;if(B<=0&&N-U>=0&&q-R>=0)return qZ.subVectors(K,Z),X=(N-U)/(N-U+(q-R)),Q.copy(Z).addScaledVector(qZ,X);let D=1/(B+V+F);return W=V*D,X=F*D,Q.copy($).addScaledVector(j8,W).addScaledVector(v8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class j9{constructor(J=new h(1/0,1/0,1/0),Q=new h(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint($9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint($9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=$9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,$9);else $9.fromBufferAttribute(K,W);$9.applyMatrix4(J.matrixWorld),this.expandByPoint($9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();g7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();g7.copy($.boundingBox)}g7.applyMatrix4(J.matrixWorld),this.union(g7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,$9),$9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(X7),p7.subVectors(this.max,X7),f8.subVectors(J.a,X7),y8.subVectors(J.b,X7),b8.subVectors(J.c,X7),p9.subVectors(y8,f8),m9.subVectors(b8,y8),e9.subVectors(f8,b8);let Q=[0,-p9.z,p9.y,0,-m9.z,m9.y,0,-e9.z,e9.y,p9.z,0,-p9.x,m9.z,0,-m9.x,e9.z,0,-e9.x,-p9.y,p9.x,0,-m9.y,m9.x,0,-e9.y,e9.x,0];if(!$Q(Q,f8,y8,b8,p7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!$Q(Q,f8,y8,b8,p7))return!1;return m7.crossVectors(p9,m9),Q=[m7.x,m7.y,m7.z],$Q(Q,f8,y8,b8,p7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,$9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize($9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return I9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),I9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),I9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),I9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),I9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),I9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),I9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),I9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(I9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var I9=[new h,new h,new h,new h,new h,new h,new h,new h],$9=new h,g7=new j9,f8=new h,y8=new h,b8=new h,p9=new h,m9=new h,e9=new h,X7=new h,p7=new h,m7=new h,J8=new h;function $Q(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){J8.fromArray(J,W);let Y=K.x*Math.abs(J8.x)+K.y*Math.abs(J8.y)+K.z*Math.abs(J8.z),H=Q.dot(J8),U=$.dot(J8),N=Z.dot(J8);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>Y)return!1}return!0}var EJ=new h,l7=new x0,bW=0;class uJ extends T9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)l7.fromBufferAttribute(this,Q),l7.applyMatrix3(J),this.setXY(Q,l7.x,l7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix3(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix4(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyNormalMatrix(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.transformDirection(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=K7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=gJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=K7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=K7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=K7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=K7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array),Z=gJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array),Z=gJ(Z,this.array),K=gJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class k6 extends uJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class L6 extends uJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class pJ extends uJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var hW=new j9,Y7=new h,ZQ=new h;class q8{constructor(J=new h,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else hW.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;Y7.subVectors(J,this.center);let Q=Y7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(Y7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else ZQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(Y7.copy(J.center).add(ZQ)),this.expandByPoint(Y7.copy(J.center).sub(ZQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var xW=0,iJ=new $J,KQ=new DJ,h8=new h,dJ=new j9,H7=new j9,IJ=new h;class W9 extends T9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xW++}),this.uuid=k7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((BW(J))?L6:k6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new j0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return iJ.makeRotationFromQuaternion(J),this.applyMatrix4(iJ),this}rotateX(J){return iJ.makeRotationX(J),this.applyMatrix4(iJ),this}rotateY(J){return iJ.makeRotationY(J),this.applyMatrix4(iJ),this}rotateZ(J){return iJ.makeRotationZ(J),this.applyMatrix4(iJ),this}translate(J,Q,$){return iJ.makeTranslation(J,Q,$),this.applyMatrix4(iJ),this}scale(J,Q,$){return iJ.makeScale(J,Q,$),this.applyMatrix4(iJ),this}lookAt(J){return KQ.lookAt(J),KQ.updateMatrix(),this.applyMatrix4(KQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(h8).negate(),this.translate(h8.x,h8.y,h8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new pJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)_0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new j9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){C0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new h(-1/0,-1/0,-1/0),new h(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(dJ.setFromBufferAttribute(K),this.morphTargetsRelative)IJ.addVectors(this.boundingBox.min,dJ.min),this.boundingBox.expandByPoint(IJ),IJ.addVectors(this.boundingBox.max,dJ.max),this.boundingBox.expandByPoint(IJ);else this.boundingBox.expandByPoint(dJ.min),this.boundingBox.expandByPoint(dJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))C0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new q8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){C0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new h,1/0);return}if(J){let $=this.boundingSphere.center;if(dJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(H7.setFromBufferAttribute(X),this.morphTargetsRelative)IJ.addVectors(dJ.min,H7.min),dJ.expandByPoint(IJ),IJ.addVectors(dJ.max,H7.max),dJ.expandByPoint(IJ);else dJ.expandByPoint(H7.min),dJ.expandByPoint(H7.max)}dJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)IJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(IJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(IJ.fromBufferAttribute(X,H),Y)h8.fromBufferAttribute(J,H),IJ.add(h8);Z=Math.max(Z,$.distanceToSquared(IJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))C0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){C0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new uJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let w=0;w<$.count;w++)X[w]=new h,Y[w]=new h;let H=new h,U=new h,N=new h,F=new x0,q=new x0,R=new x0,V=new h,B=new h;function D(w,L,z){H.fromBufferAttribute($,w),U.fromBufferAttribute($,L),N.fromBufferAttribute($,z),F.fromBufferAttribute(K,w),q.fromBufferAttribute(K,L),R.fromBufferAttribute(K,z),U.sub(H),N.sub(H),q.sub(F),R.sub(F);let l=1/(q.x*R.y-R.x*q.y);if(!isFinite(l))return;V.copy(U).multiplyScalar(R.y).addScaledVector(N,-q.y).multiplyScalar(l),B.copy(N).multiplyScalar(q.x).addScaledVector(U,-R.x).multiplyScalar(l),X[w].add(V),X[L].add(V),X[z].add(V),Y[w].add(B),Y[L].add(B),Y[z].add(B)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let w=0,L=O.length;w<L;++w){let z=O[w],l=z.start,C=z.count;for(let p=l,o=l+C;p<o;p+=3)D(J.getX(p+0),J.getX(p+1),J.getX(p+2))}let S=new h,_=new h,E=new h,P=new h;function A(w){E.fromBufferAttribute(Z,w),P.copy(E);let L=X[w];S.copy(L),S.sub(E.multiplyScalar(E.dot(L))).normalize(),_.crossVectors(P,L);let l=_.dot(Y[w])<0?-1:1;W.setXYZW(w,S.x,S.y,S.z,l)}for(let w=0,L=O.length;w<L;++w){let z=O[w],l=z.start,C=z.count;for(let p=l,o=l+C;p<o;p+=3)A(J.getX(p+0)),A(J.getX(p+1)),A(J.getX(p+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new uJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,q=$.count;F<q;F++)$.setXYZ(F,0,0,0);let Z=new h,K=new h,W=new h,X=new h,Y=new h,H=new h,U=new h,N=new h;if(J)for(let F=0,q=J.count;F<q;F+=3){let R=J.getX(F+0),V=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,V),W.fromBufferAttribute(Q,B),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),X.fromBufferAttribute($,R),Y.fromBufferAttribute($,V),H.fromBufferAttribute($,B),X.add(U),Y.add(U),H.add(U),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(V,Y.x,Y.y,Y.z),$.setXYZ(B,H.x,H.y,H.z)}else for(let F=0,q=Q.count;F<q;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)IJ.fromBufferAttribute(J,Q),IJ.normalize(),J.setXYZ(Q,IJ.x,IJ.y,IJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:N}=X,F=new H.constructor(Y.length*U),q=0,R=0;for(let V=0,B=Y.length;V<B;V++){if(X.isInterleavedBufferAttribute)q=Y[V]*X.data.stride+X.offset;else q=Y[V]*U;for(let D=0;D<U;D++)F[R++]=H[q++]}return new uJ(F,U,N)}if(this.index===null)return _0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new W9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],H=J(Y,$);Q.setAttribute(X,H)}let K=this.morphAttributes;for(let X in K){let Y=[],H=K[X];for(let U=0,N=H.length;U<N;U++){let F=H[U],q=J(F,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let N=0,F=H.length;N<F;N++){let q=H[N];U.push(q.toJSON(J.data))}if(U.length>0)Z[Y]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let K=J.morphAttributes;for(let H in K){let U=[],N=K[H];for(let F=0,q=N.length;F<q;F++)U.push(N[F].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var gW=0;class n9 extends T9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:gW++}),this.uuid=k7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new g0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){_0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){_0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new g0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new x0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new x0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var A9=new h,WQ=new h,d7=new h,l9=new h,XQ=new h,u7=new h,YQ=new h;class V6{constructor(J=new h,Q=new h(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,A9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=A9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return A9.copy(this.origin).addScaledVector(this.direction,Q),A9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){WQ.copy(J).add(Q).multiplyScalar(0.5),d7.copy(Q).sub(J).normalize(),l9.copy(this.origin).sub(WQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(d7),X=l9.dot(this.direction),Y=-l9.dot(d7),H=l9.lengthSq(),U=Math.abs(1-W*W),N,F,q,R;if(U>0)if(N=W*Y-X,F=W*X-Y,R=K*U,N>=0)if(F>=-R)if(F<=R){let V=1/U;N*=V,F*=V,q=N*(N+W*F+2*X)+F*(W*N+F+2*Y)+H}else F=K,N=Math.max(0,-(W*F+X)),q=-N*N+F*(F+2*Y)+H;else F=-K,N=Math.max(0,-(W*F+X)),q=-N*N+F*(F+2*Y)+H;else if(F<=-R)N=Math.max(0,-(-W*K+X)),F=N>0?-K:Math.min(Math.max(-K,-Y),K),q=-N*N+F*(F+2*Y)+H;else if(F<=R)N=0,F=Math.min(Math.max(-K,-Y),K),q=F*(F+2*Y)+H;else N=Math.max(0,-(W*K+X)),F=N>0?K:Math.min(Math.max(-K,-Y),K),q=-N*N+F*(F+2*Y)+H;else F=W>0?-K:K,N=Math.max(0,-(W*F+X)),q=-N*N+F*(F+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(WQ).addScaledVector(d7,F);return q}intersectSphere(J,Q){A9.subVectors(J.center,this.origin);let $=A9.dot(this.direction),Z=A9.dot(A9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(H>=0)$=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else $=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)X=(J.min.z-F.z)*N,Y=(J.max.z-F.z)*N;else X=(J.max.z-F.z)*N,Y=(J.min.z-F.z)*N;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,A9)!==null}intersectTriangle(J,Q,$,Z,K){XQ.subVectors(Q,J),u7.subVectors($,J),YQ.crossVectors(XQ,u7);let W=this.direction.dot(YQ),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;l9.subVectors(this.origin,J);let Y=X*this.direction.dot(u7.crossVectors(l9,u7));if(Y<0)return null;let H=X*this.direction.dot(XQ.cross(l9));if(H<0)return null;if(Y+H>W)return null;let U=-X*l9.dot(YQ);if(U<0)return null;return this.at(U/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hJ extends n9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new g0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var GZ=new $J,Q8=new V6,c7=new q8,NZ=new h,n7=new h,s7=new h,i7=new h,HQ=new h,o7=new h,FZ=new h,a7=new h;class T0 extends DJ{constructor(J=new W9,Q=new hJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){o7.set(0,0,0);for(let Y=0,H=K.length;Y<H;Y++){let U=X[Y],N=K[Y];if(U===0)continue;if(HQ.fromBufferAttribute(N,J),W)o7.addScaledVector(HQ,U);else o7.addScaledVector(HQ.sub(Q),U)}Q.add(o7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(c7.copy($.boundingSphere),c7.applyMatrix4(K),Q8.copy(J.ray).recast(J.near),c7.containsPoint(Q8.origin)===!1){if(Q8.intersectSphere(c7,NZ)===null)return;if(Q8.origin.distanceToSquared(NZ)>(J.far-J.near)**2)return}if(GZ.copy(K).invert(),Q8.copy(J.ray).applyMatrix4(GZ),$.boundingBox!==null){if(Q8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,Q8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,N=K.attributes.normal,F=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let R=0,V=F.length;R<V;R++){let B=F[R],D=W[B.materialIndex],O=Math.max(B.start,q.start),S=Math.min(X.count,Math.min(B.start+B.count,q.start+q.count));for(let _=O,E=S;_<E;_+=3){let P=X.getX(_),A=X.getX(_+1),w=X.getX(_+2);if(Z=r7(this,D,J,$,H,U,N,P,A,w),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let R=Math.max(0,q.start),V=Math.min(X.count,q.start+q.count);for(let B=R,D=V;B<D;B+=3){let O=X.getX(B),S=X.getX(B+1),_=X.getX(B+2);if(Z=r7(this,W,J,$,H,U,N,O,S,_),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let R=0,V=F.length;R<V;R++){let B=F[R],D=W[B.materialIndex],O=Math.max(B.start,q.start),S=Math.min(Y.count,Math.min(B.start+B.count,q.start+q.count));for(let _=O,E=S;_<E;_+=3){let P=_,A=_+1,w=_+2;if(Z=r7(this,D,J,$,H,U,N,P,A,w),Z)Z.faceIndex=Math.floor(_/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let R=Math.max(0,q.start),V=Math.min(Y.count,q.start+q.count);for(let B=R,D=V;B<D;B+=3){let O=B,S=B+1,_=B+2;if(Z=r7(this,W,J,$,H,U,N,O,S,_),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}}}function pW(J,Q,$,Z,K,W,X,Y){let H;if(Q.side===1)H=Z.intersectTriangle(X,W,K,!0,Y);else H=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(H===null)return null;a7.copy(Y),a7.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(a7);if(U<$.near||U>$.far)return null;return{distance:U,point:a7.clone(),object:J}}function r7(J,Q,$,Z,K,W,X,Y,H,U){J.getVertexPosition(Y,n7),J.getVertexPosition(H,s7),J.getVertexPosition(U,i7);let N=pW(J,Q,$,Z,n7,s7,i7,FZ);if(N){let F=new h;if(oJ.getBarycoord(FZ,n7,s7,i7,F),K)N.uv=oJ.getInterpolatedAttribute(K,Y,H,U,F,new x0);if(W)N.uv1=oJ.getInterpolatedAttribute(W,Y,H,U,F,new x0);if(X){if(N.normal=oJ.getInterpolatedAttribute(X,Y,H,U,F,new h),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let q={a:Y,b:H,c:U,normal:new h,materialIndex:0};oJ.getNormal(n7,s7,i7,q.normal),N.face=q,N.barycoord=F}return N}class M6 extends PJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,H=1003,U=1003,N,F){super(null,W,X,Y,H,U,Z,K,N,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K6 extends uJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var x8=new $J,OZ=new $J,t7=[],DZ=new j9,mW=new $J,U7=new T0,q7=new q8;class o8 extends T0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new K6(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,mW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new j9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,x8),DZ.copy(J.boundingBox).applyMatrix4(x8),this.boundingBox.union(DZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new q8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,x8),q7.copy(J.boundingSphere).applyMatrix4(x8),this.boundingSphere.union(q7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(U7.geometry=this.geometry,U7.material=this.material,U7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(q7.copy(this.boundingSphere),q7.applyMatrix4($),J.ray.intersectsSphere(q7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,x8),OZ.multiplyMatrices($,x8),U7.matrixWorld=OZ,U7.raycast(J,t7);for(let W=0,X=t7.length;W<X;W++){let Y=t7[W];Y.instanceId=K,Y.object=this,Q.push(Y)}t7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new K6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new M6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<$.length;H++)W+=$[H];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var UQ=new h,lW=new h,dW=new j0;class P9{constructor(J=new h(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=UQ.subVectors($,Q).cross(lW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(UQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||dW.getNormalMatrix(J),Z=this.coplanarPoint(UQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var $8=new q8,uW=new x0(0.5,0.5),e7=new h;class z7{constructor(J=new P9,Q=new P9,$=new P9,Z=new P9,K=new P9,W=new P9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],H=K[3],U=K[4],N=K[5],F=K[6],q=K[7],R=K[8],V=K[9],B=K[10],D=K[11],O=K[12],S=K[13],_=K[14],E=K[15];if(Z[0].setComponents(H-W,q-U,D-R,E-O).normalize(),Z[1].setComponents(H+W,q+U,D+R,E+O).normalize(),Z[2].setComponents(H+X,q+N,D+V,E+S).normalize(),Z[3].setComponents(H-X,q-N,D-V,E-S).normalize(),$)Z[4].setComponents(Y,F,B,_).normalize(),Z[5].setComponents(H-Y,q-F,D-B,E-_).normalize();else if(Z[4].setComponents(H-Y,q-F,D-B,E-_).normalize(),Q===2000)Z[5].setComponents(H+Y,q+F,D+B,E+_).normalize();else if(Q===2001)Z[5].setComponents(Y,F,B,_).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();$8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();$8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere($8)}intersectsSprite(J){$8.center.set(0,0,0);let Q=uW.distanceTo(J.center);return $8.radius=0.7071067811865476+Q,$8.applyMatrix4(J.matrixWorld),this.intersectsSphere($8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(e7.x=Z.normal.x>0?J.max.x:J.min.x,e7.y=Z.normal.y>0?J.max.y:J.min.y,e7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(e7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z6 extends PJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,H,U){super(J,Q,$,Z,K,W,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class v9 extends PJ{constructor(J,Q,$,Z,K,W,X,Y,H){super(J,Q,$,Z,K,W,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class s9 extends PJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:N};super(F,Z,K,W,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new L7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class O$ extends s9{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,X,Y,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class B6 extends PJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class MJ extends W9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],H=[],U=[],N=[],F=0,q=0;R("z","y","x",-1,-1,$,Q,J,W,K,0),R("z","y","x",1,-1,$,Q,-J,W,K,1),R("x","z","y",1,1,J,$,Q,Z,W,2),R("x","z","y",1,-1,J,$,-Q,Z,W,3),R("x","y","z",1,-1,J,Q,$,Z,K,4),R("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new pJ(H,3)),this.setAttribute("normal",new pJ(U,3)),this.setAttribute("uv",new pJ(N,2));function R(V,B,D,O,S,_,E,P,A,w,L){let z=_/A,l=E/w,C=_/2,p=E/2,o=P/2,g=A+1,u=w+1,c=0,x=0,t=new h;for(let e=0;e<u;e++){let G0=e*l-p;for(let M0=0;M0<g;M0++){let k0=M0*z-C;t[V]=k0*O,t[B]=G0*S,t[D]=o,H.push(t.x,t.y,t.z),t[V]=0,t[B]=0,t[D]=P>0?1:-1,U.push(t.x,t.y,t.z),N.push(M0/A),N.push(1-e/w),c+=1}}for(let e=0;e<w;e++)for(let G0=0;G0<A;G0++){let M0=F+G0+g*e,k0=F+G0+g*(e+1),YJ=F+(G0+1)+g*(e+1),s0=F+(G0+1)+g*e;Y.push(M0,k0,s0),Y.push(k0,YJ,s0),x+=6}X.addGroup(q,x,L),q+=x,F+=c}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new MJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class G8 extends W9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],N=[],F=[],q=[],R=0,V=[],B=$/2,D=0;if(O(),W===!1){if(J>0)S(!0);if(Q>0)S(!1)}this.setIndex(U),this.setAttribute("position",new pJ(N,3)),this.setAttribute("normal",new pJ(F,3)),this.setAttribute("uv",new pJ(q,2));function O(){let _=new h,E=new h,P=0,A=(Q-J)/$;for(let w=0;w<=K;w++){let L=[],z=w/K,l=z*(Q-J)+J;for(let C=0;C<=Z;C++){let p=C/Z,o=p*Y+X,g=Math.sin(o),u=Math.cos(o);E.x=l*g,E.y=-z*$+B,E.z=l*u,N.push(E.x,E.y,E.z),_.set(g,A,u).normalize(),F.push(_.x,_.y,_.z),q.push(p,1-z),L.push(R++)}V.push(L)}for(let w=0;w<Z;w++)for(let L=0;L<K;L++){let z=V[L][w],l=V[L+1][w],C=V[L+1][w+1],p=V[L][w+1];if(J>0||L!==0)U.push(z,l,p),P+=3;if(Q>0||L!==K-1)U.push(l,C,p),P+=3}H.addGroup(D,P,0),D+=P}function S(_){let E=R,P=new x0,A=new h,w=0,L=_===!0?J:Q,z=_===!0?1:-1;for(let C=1;C<=Z;C++)N.push(0,B*z,0),F.push(0,z,0),q.push(0.5,0.5),R++;let l=R;for(let C=0;C<=Z;C++){let o=C/Z*Y+X,g=Math.cos(o),u=Math.sin(o);A.x=L*u,A.y=B*z,A.z=L*g,N.push(A.x,A.y,A.z),F.push(0,z,0),P.x=g*0.5+0.5,P.y=u*0.5*z+0.5,q.push(P.x,P.y),R++}for(let C=0;C<Z;C++){let p=E+C,o=l+C;if(_===!0)U.push(o,o+1,p);else U.push(o+1,o,p);w+=3}H.addGroup(D,w,_===!0?1:2),D+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new G8(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class cJ extends W9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),H=X+1,U=Y+1,N=J/X,F=Q/Y,q=[],R=[],V=[],B=[];for(let D=0;D<U;D++){let O=D*F-W;for(let S=0;S<H;S++){let _=S*N-K;R.push(_,-O,0),V.push(0,0,1),B.push(S/X),B.push(1-D/Y)}}for(let D=0;D<Y;D++)for(let O=0;O<X;O++){let S=O+H*D,_=O+H*(D+1),E=O+1+H*(D+1),P=O+1+H*D;q.push(S,_,P),q.push(_,E,P)}this.setIndex(q),this.setAttribute("position",new pJ(R,3)),this.setAttribute("normal",new pJ(V,3)),this.setAttribute("uv",new pJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new cJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function N8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(EZ(K))if(K.isRenderTargetTexture)_0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(EZ(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function fJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=N8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function EZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function cW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function D$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return d0.workingColorSpace}var AK={clone:N8,merge:fJ},nW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rJ extends n9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nW,this.fragmentShader=sW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=N8(J.uniforms),this.uniformsGroups=cW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new g0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new x0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new h().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new HJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new j0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new $J().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class E$ extends rJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xJ extends n9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new g0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new g0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new x0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class I6 extends n9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new g0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new g0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new x0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class R$ extends n9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class k$ extends n9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function J6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class F8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class L$ extends F8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,q=this._weightNext,R=($-Q)/(Z-Q),V=R*R,B=V*R,D=-F*B+2*F*V-F*R,O=(1+F)*B+(-1.5-2*F)*V+(-0.5+F)*R+1,S=(-1-q)*B+(1.5+q)*V+0.5*R,_=q*B-q*V;for(let E=0;E!==X;++E)K[E]=D*W[U+E]+O*W[H+E]+S*W[Y+E]+_*W[N+E];return K}}class V$ extends F8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(Z-Q),N=1-U;for(let F=0;F!==X;++F)K[F]=W[H+F]*N+W[Y+F]*U;return K}}class M$ extends F8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class z$ extends F8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,N=this.outTangents;if(!U||!N){let R=($-Q)/(Z-Q),V=1-R;for(let B=0;B!==X;++B)K[B]=W[H+B]*V+W[Y+B]*R;return K}let F=X*2,q=J-1;for(let R=0;R!==X;++R){let V=W[H+R],B=W[Y+R],D=q*F+R*2,O=N[D],S=N[D+1],_=J*F+R*2,E=U[_],P=U[_+1],A=($-Q)/(Z-Q),w,L,z,l,C;for(let p=0;p<8;p++){w=A*A,L=w*A,z=1-A,l=z*z,C=l*z;let g=C*Q+3*l*A*O+3*z*w*E+L*Z-$;if(Math.abs(g)<0.0000000001)break;let u=3*l*(O-Q)+6*z*A*(E-O)+3*w*(Z-E);if(Math.abs(u)<0.0000000001)break;A=A-g/u,A=Math.max(0,Math.min(1,A))}K[R]=C*V+3*l*A*S+3*z*w*P+L*B}return K}}class tJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=J6(Q,this.TimeBufferType),this.values=J6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:J6(J.times,Array),values:J6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new M$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new V$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new L$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new z$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return _0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)C0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)C0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){C0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){C0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(IW(Z))for(let X=0,Y=Z.length;X!==Y;++X){let H=Z[X];if(isNaN(H)){C0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!Z){let N=X*$,F=N-$,q=N+$;for(let R=0;R!==$;++R){let V=Q[N+R];if(V!==Q[F+R]||V!==Q[q+R]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let N=X*$,F=W*$;for(let q=0;q!==$;++q)Q[F+q]=Q[N+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}tJ.prototype.ValueTypeName="";tJ.prototype.TimeBufferType=Float32Array;tJ.prototype.ValueBufferType=Float32Array;tJ.prototype.DefaultInterpolation=2301;class O8 extends tJ{constructor(J,Q,$){super(J,Q,$)}}O8.prototype.ValueTypeName="bool";O8.prototype.ValueBufferType=Array;O8.prototype.DefaultInterpolation=2300;O8.prototype.InterpolantFactoryMethodLinear=void 0;O8.prototype.InterpolantFactoryMethodSmooth=void 0;class B$ extends tJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}B$.prototype.ValueTypeName="color";class I$ extends tJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}I$.prototype.ValueTypeName="number";class A$ extends F8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),H=J*X;for(let U=H+X;H!==U;H+=4)S9.slerpFlat(K,0,W,H-X,W,H,Y);return K}}class A6 extends tJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}}A6.prototype.ValueTypeName="quaternion";A6.prototype.InterpolantFactoryMethodSmooth=void 0;class D8 extends tJ{constructor(J,Q,$){super(J,Q,$)}}D8.prototype.ValueTypeName="string";D8.prototype.ValueBufferType=Array;D8.prototype.DefaultInterpolation=2300;D8.prototype.InterpolantFactoryMethodLinear=void 0;D8.prototype.InterpolantFactoryMethodSmooth=void 0;class P$ extends tJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}P$.prototype.ValueTypeName="vector";class C${constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,X)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,F=H.length;N<F;N+=2){let q=H[N],R=H[N+1];if(q.global)q.lastIndex=0;if(q.test(U))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var PK=new C$;class _${constructor(J){if(this.manager=J!==void 0?J:PK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}_$.DEFAULT_MATERIAL_NAME="__DEFAULT";class P6 extends DJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new g0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var qQ=new $J,RZ=new h,kZ=new h;class w${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new x0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new z7,this._frameExtents=new x0(1,1),this._viewportCount=1,this._viewports=[new HJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(RZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(RZ),kZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(kZ),Q.updateMatrixWorld(),qQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(qQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var Q6=new h,$6=new S9,q9=new h;class C6 extends DJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $J,this.projectionMatrix=new $J,this.projectionMatrixInverse=new $J,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(Q6,$6,q9),q9.x===1&&q9.y===1&&q9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Q6,$6,q9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(Q6,$6,q9),q9.x===1&&q9.y===1&&q9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Q6,$6,q9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var d9=new h,LZ=new x0,VZ=new x0;class SJ extends C6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=Z6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(m6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return Z6*2*Math.atan(Math.tan(m6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){d9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(d9.x,d9.y).multiplyScalar(-J/d9.z),d9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(d9.x,d9.y).multiplyScalar(-J/d9.z)}getViewSize(J,Q){return this.getViewBounds(J,LZ,VZ),Q.subVectors(VZ,LZ)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(m6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/H,Z*=W.width/Y,$*=W.height/H}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class CK extends w${constructor(){super(new SJ(90,1,0.5,500));this.isPointLightShadow=!0}}class _6 extends P6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new CK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class B7 extends C6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class _K extends w${constructor(){super(new B7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class I7 extends P6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(DJ.DEFAULT_UP),this.updateMatrix(),this.target=new DJ,this.shadow=new _K}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var g8=-90,p8=1;class T$ extends DJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new SJ(g8,p8,J,Q);Z.layers=this.layers,this.add(Z);let K=new SJ(g8,p8,J,Q);K.layers=this.layers,this.add(K);let W=new SJ(g8,p8,J,Q);W.layers=this.layers,this.add(W);let X=new SJ(g8,p8,J,Q);X.layers=this.layers,this.add(X);let Y=new SJ(g8,p8,J,Q);Y.layers=this.layers,this.add(Y);let H=new SJ(g8,p8,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,H,U]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let V=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=V,J.setRenderTarget($,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,F,q),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class S$ extends SJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var j$="\\[\\]\\.:\\/",iW=new RegExp("["+j$+"]","g"),v$="[^"+j$+"]",oW="[^"+j$.replace("\\.","")+"]",aW=/((?:WC+[\/:])*)/.source.replace("WC",v$),rW=/(WCOD+)?/.source.replace("WCOD",oW),tW=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",v$),eW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",v$),JX=new RegExp("^"+aW+rW+tW+eW+"$"),QX=["material","materials","bones","map"];class wK{constructor(J,Q,$){let Z=$||e0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class e0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||e0.parseTrackName(Q),this.node=e0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new e0(J,Q,$);else return new e0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iW,"")}static parseTrackName(J){let Q=JX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(QX.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=e0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){_0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){C0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){C0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){C0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){C0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){C0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){C0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){C0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;C0("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){C0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){C0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}e0.Composite=wK;e0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};e0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};e0.prototype.GetterByBindingType=[e0.prototype._getValue_direct,e0.prototype._getValue_array,e0.prototype._getValue_arrayElement,e0.prototype._getValue_toArray];e0.prototype.SetterByBindingTypeAndVersioning=[[e0.prototype._setValue_direct,e0.prototype._setValue_direct_setNeedsUpdate,e0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_array,e0.prototype._setValue_array_setNeedsUpdate,e0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_arrayElement,e0.prototype._setValue_arrayElement_setNeedsUpdate,e0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[e0.prototype._setValue_fromArray,e0.prototype._setValue_fromArray_setNeedsUpdate,e0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wq=new Float32Array(1);var MZ=new $J;class w6{constructor(J,Q,$=0,Z=1/0){this.ray=new V6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new V7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else C0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return MZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(MZ),this}intersectObject(J,Q=!0,$=[]){return GQ(J,this,$,Q),$.sort(zZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)GQ(J[Z],this,$,Q);return $.sort(zZ),$}}function zZ(J,Q){return J.distance-Q.distance}function GQ(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)GQ(W[X],Q,$,!0)}}class f${static{f$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function y$(J,Q,$,Z){let K=$X(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function $X(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)_0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function tK(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function ZX(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:N}=Y,F=U.byteLength,q=J.createBuffer();J.bindBuffer(H,q),J.bufferData(H,U,N),Y.onUploadCallback();let R;if(U instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)R=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)R=J.SHORT;else if(U instanceof Uint32Array)R=J.UNSIGNED_INT;else if(U instanceof Int32Array)R=J.INT;else if(U instanceof Int8Array)R=J.BYTE;else if(U instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:R,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,H,U){let{array:N,updateRanges:F}=H;if(J.bindBuffer(U,Y),F.length===0)J.bufferSubData(U,0,N);else{F.sort((R,V)=>R.start-V.start);let q=0;for(let R=1;R<F.length;R++){let V=F[q],B=F[R];if(B.start<=V.start+V.count+1)V.count=Math.max(V.count,B.start+B.count-V.start);else++q,F[q]=B}F.length=q+1;for(let R=0,V=F.length;R<V;R++){let B=F[R];J.bufferSubData(U,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,H),U.version=Y.version}}return{get:K,remove:W,update:X}}var KX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WX=`#ifdef USE_ALPHAHASH
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
#endif`,XX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qX=`#ifdef USE_AOMAP
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
#endif`,GX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NX=`#ifdef USE_BATCHING
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
#endif`,FX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RX=`#ifdef USE_IRIDESCENCE
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
#endif`,kX=`#ifdef USE_BUMPMAP
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
#endif`,LX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,CX=`#define PI 3.141592653589793
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
} // validated`,_X=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wX=`vec3 transformedNormal = objectNormal;
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
#endif`,TX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fX="gl_FragColor = linearToOutputTexel( gl_FragColor );",yX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bX=`#ifdef USE_ENVMAP
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
#endif`,hX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xX=`#ifdef USE_ENVMAP
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
#endif`,gX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pX=`#ifdef USE_ENVMAP
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
#endif`,mX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cX=`#ifdef USE_GRADIENTMAP
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
}`,nX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oX=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aX=`#ifdef USE_ENVMAP
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
#endif`,rX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JY=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QY=`PhysicalMaterial material;
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
#endif`,$Y=`uniform sampler2D dfgLUT;
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
}`,ZY=`
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
#endif`,KY=`#if defined( RE_IndirectDiffuse )
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
#endif`,WY=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XY=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,YY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OY=`#if defined( USE_POINTS_UV )
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
#endif`,DY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VY=`#ifdef USE_MORPHTARGETS
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
#endif`,MY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CY=`#ifdef USE_NORMALMAP
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
#endif`,_Y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fY=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dY=`float getShadowMask() {
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
}`,uY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cY=`#ifdef USE_SKINNING
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
#endif`,nY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sY=`#ifdef USE_SKINNING
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
#endif`,iY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rY=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tY=`#ifdef USE_TRANSMISSION
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
#endif`,eY=`#ifdef USE_TRANSMISSION
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
#endif`,JH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$H=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WH=`uniform sampler2D t2D;
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
}`,XH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YH=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qH=`#include <common>
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
}`,GH=`#if DEPTH_PACKING == 3200
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
}`,NH=`#define DISTANCE
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
}`,FH=`#define DISTANCE
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
}`,OH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EH=`uniform float scale;
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
}`,RH=`uniform vec3 diffuse;
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
}`,kH=`#include <common>
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
}`,LH=`uniform vec3 diffuse;
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
}`,VH=`#define LAMBERT
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
}`,MH=`#define LAMBERT
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
}`,zH=`#define MATCAP
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
}`,BH=`#define MATCAP
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
}`,IH=`#define NORMAL
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
}`,AH=`#define NORMAL
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
}`,PH=`#define PHONG
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
}`,CH=`#define PHONG
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
}`,_H=`#define STANDARD
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
}`,wH=`#define STANDARD
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
}`,TH=`#define TOON
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
}`,SH=`#define TOON
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
}`,jH=`uniform float size;
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
}`,vH=`uniform vec3 diffuse;
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
}`,fH=`#include <common>
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
}`,yH=`uniform vec3 color;
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
}`,bH=`uniform float rotation;
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
}`,hH=`uniform vec3 diffuse;
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
}`,b0={alphahash_fragment:KX,alphahash_pars_fragment:WX,alphamap_fragment:XX,alphamap_pars_fragment:YX,alphatest_fragment:HX,alphatest_pars_fragment:UX,aomap_fragment:qX,aomap_pars_fragment:GX,batching_pars_vertex:NX,batching_vertex:FX,begin_vertex:OX,beginnormal_vertex:DX,bsdfs:EX,iridescence_fragment:RX,bumpmap_pars_fragment:kX,clipping_planes_fragment:LX,clipping_planes_pars_fragment:VX,clipping_planes_pars_vertex:MX,clipping_planes_vertex:zX,color_fragment:BX,color_pars_fragment:IX,color_pars_vertex:AX,color_vertex:PX,common:CX,cube_uv_reflection_fragment:_X,defaultnormal_vertex:wX,displacementmap_pars_vertex:TX,displacementmap_vertex:SX,emissivemap_fragment:jX,emissivemap_pars_fragment:vX,colorspace_fragment:fX,colorspace_pars_fragment:yX,envmap_fragment:bX,envmap_common_pars_fragment:hX,envmap_pars_fragment:xX,envmap_pars_vertex:gX,envmap_physical_pars_fragment:aX,envmap_vertex:pX,fog_vertex:mX,fog_pars_vertex:lX,fog_fragment:dX,fog_pars_fragment:uX,gradientmap_pars_fragment:cX,lightmap_pars_fragment:nX,lights_lambert_fragment:sX,lights_lambert_pars_fragment:iX,lights_pars_begin:oX,lights_toon_fragment:rX,lights_toon_pars_fragment:tX,lights_phong_fragment:eX,lights_phong_pars_fragment:JY,lights_physical_fragment:QY,lights_physical_pars_fragment:$Y,lights_fragment_begin:ZY,lights_fragment_maps:KY,lights_fragment_end:WY,lightprobes_pars_fragment:XY,logdepthbuf_fragment:YY,logdepthbuf_pars_fragment:HY,logdepthbuf_pars_vertex:UY,logdepthbuf_vertex:qY,map_fragment:GY,map_pars_fragment:NY,map_particle_fragment:FY,map_particle_pars_fragment:OY,metalnessmap_fragment:DY,metalnessmap_pars_fragment:EY,morphinstance_vertex:RY,morphcolor_vertex:kY,morphnormal_vertex:LY,morphtarget_pars_vertex:VY,morphtarget_vertex:MY,normal_fragment_begin:zY,normal_fragment_maps:BY,normal_pars_fragment:IY,normal_pars_vertex:AY,normal_vertex:PY,normalmap_pars_fragment:CY,clearcoat_normal_fragment_begin:_Y,clearcoat_normal_fragment_maps:wY,clearcoat_pars_fragment:TY,iridescence_pars_fragment:SY,opaque_fragment:jY,packing:vY,premultiplied_alpha_fragment:fY,project_vertex:yY,dithering_fragment:bY,dithering_pars_fragment:hY,roughnessmap_fragment:xY,roughnessmap_pars_fragment:gY,shadowmap_pars_fragment:pY,shadowmap_pars_vertex:mY,shadowmap_vertex:lY,shadowmask_pars_fragment:dY,skinbase_vertex:uY,skinning_pars_vertex:cY,skinning_vertex:nY,skinnormal_vertex:sY,specularmap_fragment:iY,specularmap_pars_fragment:oY,tonemapping_fragment:aY,tonemapping_pars_fragment:rY,transmission_fragment:tY,transmission_pars_fragment:eY,uv_pars_fragment:JH,uv_pars_vertex:QH,uv_vertex:$H,worldpos_vertex:ZH,background_vert:KH,background_frag:WH,backgroundCube_vert:XH,backgroundCube_frag:YH,cube_vert:HH,cube_frag:UH,depth_vert:qH,depth_frag:GH,distance_vert:NH,distance_frag:FH,equirect_vert:OH,equirect_frag:DH,linedashed_vert:EH,linedashed_frag:RH,meshbasic_vert:kH,meshbasic_frag:LH,meshlambert_vert:VH,meshlambert_frag:MH,meshmatcap_vert:zH,meshmatcap_frag:BH,meshnormal_vert:IH,meshnormal_frag:AH,meshphong_vert:PH,meshphong_frag:CH,meshphysical_vert:_H,meshphysical_frag:wH,meshtoon_vert:TH,meshtoon_frag:SH,points_vert:jH,points_frag:vH,shadow_vert:fH,shadow_frag:yH,sprite_vert:bH,sprite_frag:hH},N0={common:{diffuse:{value:new g0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j0}},envmap:{envMap:{value:null},envMapRotation:{value:new j0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j0},normalScale:{value:new x0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new g0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new h},probesMax:{value:new h},probesResolution:{value:new h}},points:{diffuse:{value:new g0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0},uvTransform:{value:new j0}},sprite:{diffuse:{value:new g0(16777215)},opacity:{value:1},center:{value:new x0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}}},R9={basic:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.fog]),vertexShader:b0.meshbasic_vert,fragmentShader:b0.meshbasic_frag},lambert:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new g0(0)},envMapIntensity:{value:1}}]),vertexShader:b0.meshlambert_vert,fragmentShader:b0.meshlambert_frag},phong:{uniforms:fJ([N0.common,N0.specularmap,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,N0.lights,{emissive:{value:new g0(0)},specular:{value:new g0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:b0.meshphong_vert,fragmentShader:b0.meshphong_frag},standard:{uniforms:fJ([N0.common,N0.envmap,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.roughnessmap,N0.metalnessmap,N0.fog,N0.lights,{emissive:{value:new g0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag},toon:{uniforms:fJ([N0.common,N0.aomap,N0.lightmap,N0.emissivemap,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.gradientmap,N0.fog,N0.lights,{emissive:{value:new g0(0)}}]),vertexShader:b0.meshtoon_vert,fragmentShader:b0.meshtoon_frag},matcap:{uniforms:fJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,N0.fog,{matcap:{value:null}}]),vertexShader:b0.meshmatcap_vert,fragmentShader:b0.meshmatcap_frag},points:{uniforms:fJ([N0.points,N0.fog]),vertexShader:b0.points_vert,fragmentShader:b0.points_frag},dashed:{uniforms:fJ([N0.common,N0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:b0.linedashed_vert,fragmentShader:b0.linedashed_frag},depth:{uniforms:fJ([N0.common,N0.displacementmap]),vertexShader:b0.depth_vert,fragmentShader:b0.depth_frag},normal:{uniforms:fJ([N0.common,N0.bumpmap,N0.normalmap,N0.displacementmap,{opacity:{value:1}}]),vertexShader:b0.meshnormal_vert,fragmentShader:b0.meshnormal_frag},sprite:{uniforms:fJ([N0.sprite,N0.fog]),vertexShader:b0.sprite_vert,fragmentShader:b0.sprite_frag},background:{uniforms:{uvTransform:{value:new j0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:b0.background_vert,fragmentShader:b0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j0}},vertexShader:b0.backgroundCube_vert,fragmentShader:b0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:b0.cube_vert,fragmentShader:b0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:b0.equirect_vert,fragmentShader:b0.equirect_frag},distance:{uniforms:fJ([N0.common,N0.displacementmap,{referencePosition:{value:new h},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:b0.distance_vert,fragmentShader:b0.distance_frag},shadow:{uniforms:fJ([N0.lights,N0.fog,{color:{value:new g0(0)},opacity:{value:1}}]),vertexShader:b0.shadow_vert,fragmentShader:b0.shadow_frag}};R9.physical={uniforms:fJ([R9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j0},clearcoatNormalScale:{value:new x0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j0},sheen:{value:0},sheenColor:{value:new g0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j0},transmissionSamplerSize:{value:new x0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j0},attenuationDistance:{value:0},attenuationColor:{value:new g0(0)},specularColor:{value:new g0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j0},anisotropyVector:{value:new x0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j0}}]),vertexShader:b0.meshphysical_vert,fragmentShader:b0.meshphysical_frag};var T6={r:0,b:0,g:0},xH=new $J,eK=new j0;eK.set(-1,0,0,0,1,0,0,0,1);function gH(J,Q,$,Z,K,W){let X=new g0(0),Y=K===!0?0:1,H,U,N=null,F=0,q=null;function R(S){let _=S.isScene===!0?S.background:null;if(_&&_.isTexture){let E=S.backgroundBlurriness>0;_=Q.get(_,E)}return _}function V(S){let _=!1,E=R(S);if(E===null)D(X,Y);else if(E&&E.isColor)D(E,1),_=!0;let P=J.xr.getEnvironmentBlendMode();if(P==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(P==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||_)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(S,_){let E=R(_);if(E&&(E.isCubeTexture||E.mapping===D7)){if(U===void 0)U=new T0(new MJ(1,1,1),new rJ({name:"BackgroundCubeMaterial",uniforms:N8(R9.backgroundCube.uniforms),vertexShader:R9.backgroundCube.vertexShader,fragmentShader:R9.backgroundCube.fragmentShader,side:vJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=E,U.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(xH.makeRotationFromEuler(_.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(eK);if(U.material.toneMapped=d0.getTransfer(E.colorSpace)!==WJ,N!==E||F!==E.version||q!==J.toneMapping)U.material.needsUpdate=!0,N=E,F=E.version,q=J.toneMapping;U.layers.enableAll(),S.unshift(U,U.geometry,U.material,0,0,null)}else if(E&&E.isTexture){if(H===void 0)H=new T0(new cJ(2,2),new rJ({name:"BackgroundMaterial",uniforms:N8(R9.background.uniforms),vertexShader:R9.background.vertexShader,fragmentShader:R9.background.fragmentShader,side:u8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=E,H.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,H.material.toneMapped=d0.getTransfer(E.colorSpace)!==WJ,E.matrixAutoUpdate===!0)E.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(E.matrix),N!==E||F!==E.version||q!==J.toneMapping)H.material.needsUpdate=!0,N=E,F=E.version,q=J.toneMapping;H.layers.enableAll(),S.unshift(H,H.geometry,H.material,0,0,null)}}function D(S,_){S.getRGB(T6,D$(J)),$.buffers.color.setClear(T6.r,T6.g,T6.b,_,W)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(S,_=1){X.set(S),Y=_,D(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(S){Y=S,D(X,Y)},render:V,addToRenderList:B,dispose:O}}function pH(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(C,p,o,g,u){let c=!1,x=F(C,g,o,p);if(W!==x)W=x,U(W.object);if(c=R(C,g,o,u),c)V(C,g,o,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(c||X){if(X=!1,E(C,p,o,g),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function H(){return J.createVertexArray()}function U(C){return J.bindVertexArray(C)}function N(C){return J.deleteVertexArray(C)}function F(C,p,o,g){let u=g.wireframe===!0,c=Z[p.id];if(c===void 0)c={},Z[p.id]=c;let x=C.isInstancedMesh===!0?C.id:0,t=c[x];if(t===void 0)t={},c[x]=t;let e=t[o.id];if(e===void 0)e={},t[o.id]=e;let G0=e[u];if(G0===void 0)G0=q(H()),e[u]=G0;return G0}function q(C){let p=[],o=[],g=[];for(let u=0;u<$;u++)p[u]=0,o[u]=0,g[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:o,attributeDivisors:g,object:C,attributes:{},index:null}}function R(C,p,o,g){let u=W.attributes,c=p.attributes,x=0,t=o.getAttributes();for(let e in t)if(t[e].location>=0){let M0=u[e],k0=c[e];if(k0===void 0){if(e==="instanceMatrix"&&C.instanceMatrix)k0=C.instanceMatrix;if(e==="instanceColor"&&C.instanceColor)k0=C.instanceColor}if(M0===void 0)return!0;if(M0.attribute!==k0)return!0;if(k0&&M0.data!==k0.data)return!0;x++}if(W.attributesNum!==x)return!0;if(W.index!==g)return!0;return!1}function V(C,p,o,g){let u={},c=p.attributes,x=0,t=o.getAttributes();for(let e in t)if(t[e].location>=0){let M0=c[e];if(M0===void 0){if(e==="instanceMatrix"&&C.instanceMatrix)M0=C.instanceMatrix;if(e==="instanceColor"&&C.instanceColor)M0=C.instanceColor}let k0={};if(k0.attribute=M0,M0&&M0.data)k0.data=M0.data;u[e]=k0,x++}W.attributes=u,W.attributesNum=x,W.index=g}function B(){let C=W.newAttributes;for(let p=0,o=C.length;p<o;p++)C[p]=0}function D(C){O(C,0)}function O(C,p){let{newAttributes:o,enabledAttributes:g,attributeDivisors:u}=W;if(o[C]=1,g[C]===0)J.enableVertexAttribArray(C),g[C]=1;if(u[C]!==p)J.vertexAttribDivisor(C,p),u[C]=p}function S(){let{newAttributes:C,enabledAttributes:p}=W;for(let o=0,g=p.length;o<g;o++)if(p[o]!==C[o])J.disableVertexAttribArray(o),p[o]=0}function _(C,p,o,g,u,c,x){if(x===!0)J.vertexAttribIPointer(C,p,o,u,c);else J.vertexAttribPointer(C,p,o,g,u,c)}function E(C,p,o,g){B();let u=g.attributes,c=o.getAttributes(),x=p.defaultAttributeValues;for(let t in c){let e=c[t];if(e.location>=0){let G0=u[t];if(G0===void 0){if(t==="instanceMatrix"&&C.instanceMatrix)G0=C.instanceMatrix;if(t==="instanceColor"&&C.instanceColor)G0=C.instanceColor}if(G0!==void 0){let{normalized:M0,itemSize:k0}=G0,YJ=Q.get(G0);if(YJ===void 0)continue;let{buffer:s0,type:i,bytesPerElement:Y0}=YJ,O0=i===J.INT||i===J.UNSIGNED_INT||G0.gpuType===BQ;if(G0.isInterleavedBufferAttribute){let D0=G0.data,P0=D0.stride,p0=G0.offset;if(D0.isInstancedInterleavedBuffer){for(let f0=0;f0<e.locationSize;f0++)O(e.location+f0,D0.meshPerAttribute);if(C.isInstancedMesh!==!0&&g._maxInstanceCount===void 0)g._maxInstanceCount=D0.meshPerAttribute*D0.count}else for(let f0=0;f0<e.locationSize;f0++)D(e.location+f0);J.bindBuffer(J.ARRAY_BUFFER,s0);for(let f0=0;f0<e.locationSize;f0++)_(e.location+f0,k0/e.locationSize,i,M0,P0*Y0,(p0+k0/e.locationSize*f0)*Y0,O0)}else{if(G0.isInstancedBufferAttribute){for(let D0=0;D0<e.locationSize;D0++)O(e.location+D0,G0.meshPerAttribute);if(C.isInstancedMesh!==!0&&g._maxInstanceCount===void 0)g._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let D0=0;D0<e.locationSize;D0++)D(e.location+D0);J.bindBuffer(J.ARRAY_BUFFER,s0);for(let D0=0;D0<e.locationSize;D0++)_(e.location+D0,k0/e.locationSize,i,M0,k0*Y0,k0/e.locationSize*D0*Y0,O0)}}else if(x!==void 0){let M0=x[t];if(M0!==void 0)switch(M0.length){case 2:J.vertexAttrib2fv(e.location,M0);break;case 3:J.vertexAttrib3fv(e.location,M0);break;case 4:J.vertexAttrib4fv(e.location,M0);break;default:J.vertexAttrib1fv(e.location,M0)}}}}S()}function P(){z();for(let C in Z){let p=Z[C];for(let o in p){let g=p[o];for(let u in g){let c=g[u];for(let x in c)N(c[x].object),delete c[x];delete g[u]}}delete Z[C]}}function A(C){if(Z[C.id]===void 0)return;let p=Z[C.id];for(let o in p){let g=p[o];for(let u in g){let c=g[u];for(let x in c)N(c[x].object),delete c[x];delete g[u]}}delete Z[C.id]}function w(C){for(let p in Z){let o=Z[p];for(let g in o){let u=o[g];if(u[C.id]===void 0)continue;let c=u[C.id];for(let x in c)N(c[x].object),delete c[x];delete u[C.id]}}}function L(C){for(let p in Z){let o=Z[p],g=C.isInstancedMesh===!0?C.id:0,u=o[g];if(u===void 0)continue;for(let c in u){let x=u[c];for(let t in x)N(x[t].object),delete x[t];delete u[c]}if(delete o[g],Object.keys(o).length===0)delete Z[p]}}function z(){if(l(),X=!0,W===K)return;W=K,U(W.object)}function l(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:z,resetDefaultState:l,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfObject:L,releaseStatesOfProgram:w,initAttributes:B,enableAttribute:D,disableUnusedAttributes:S}}function mH(J,Q,$){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function X(H,U,N){if(N===0)return;J.drawArraysInstanced(Z,H,U,N),$.update(U,Z,N)}function Y(H,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,N);let q=0;for(let R=0;R<N;R++)q+=U[R];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function lH(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(w){if(w!==O9&&Z.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let L=w===w9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==K9&&Z.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_9&&!L)return!1;return!0}function H(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=H(U);if(N!==U)_0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let F=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)_0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),S=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),_=J.getParameter(J.MAX_VARYING_VECTORS),E=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=J.getParameter(J.MAX_SAMPLES),A=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:q,maxTextures:R,maxVertexTextures:V,maxTextureSize:B,maxCubemapSize:D,maxAttributes:O,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:E,maxSamples:P,samples:A}}function dH(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new P9,Y=new j0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,q){let R=F.length!==0||q||Z!==0||K;return K=q,Z=F.length,R},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,q){$=N(F,q,0)},this.setState=function(F,q,R){let{clippingPlanes:V,clipIntersection:B,clipShadows:D}=F,O=J.get(F);if(!K||V===null||V.length===0||W&&!D)if(W)N(null);else U();else{let S=W?0:Z,_=S*4,E=O.clippingState||null;H.value=E,E=N(V,q,_,R);for(let P=0;P!==_;++P)E[P]=$[P];O.clippingState=E,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=S}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(F,q,R,V){let B=F!==null?F.length:0,D=null;if(B!==0){if(D=H.value,V!==!0||D===null){let O=R+B*4,S=q.matrixWorldInverse;if(Y.getNormalMatrix(S),D===null||D.length<O)D=new Float32Array(O);for(let _=0,E=R;_!==B;++_,E+=4)X.copy(F[_]).applyMatrix4(S,Y),X.normal.toArray(D,E),D[E+3]=X.constant}H.value=D,H.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,D}}var i9=4,TK=[0.125,0.215,0.35,0.446,0.526,0.582],E8=20,uH=256,A7=new B7,SK=new g0,b$=null,h$=0,x$=0,g$=!1,cH=new h;class w7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=cH}=K;b$=this._renderer.getRenderTarget(),h$=this._renderer.getActiveCubeFace(),x$=this._renderer.getActiveMipmapLevel(),g$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=fK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=vK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(b$,h$,x$),this._renderer.xr.enabled=g$,J.scissorTest=!1,a8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===n8||J.mapping===K8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);b$=this._renderer.getRenderTarget(),h$=this._renderer.getActiveCubeFace(),x$=this._renderer.getActiveMipmapLevel(),g$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:RJ,minFilter:RJ,generateMipmaps:!1,type:w9,format:O9,colorSpace:X$,depthBuffer:!1},Z=jK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=jK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nH(K)),this._blurMaterial=iH(K,J,Q),this._ggxMaterial=sH(K,J,Q)}return Z}_compileMaterial(J){let Q=new T0(new W9,J);this._renderer.compile(Q,A7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new SJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,q=N.toneMapping;if(N.getClearColor(SK),N.toneMapping=Z9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new T0(new MJ,new hJ({name:"PMREM.Background",side:vJ,depthWrite:!1,depthTest:!1}));let V=this._backgroundBox,B=V.material,D=!1,O=J.background;if(O){if(O.isColor)B.color.copy(O),J.background=null,D=!0}else B.color.copy(SK),D=!0;for(let S=0;S<6;S++){let _=S%3;if(_===0)Y.up.set(0,H[S],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+U[S],K.y,K.z);else if(_===1)Y.up.set(0,0,H[S]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+U[S],K.z);else Y.up.set(0,H[S],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+U[S]);let E=this._cubeSize;if(a8(Z,_*E,S>2?E:0,E,E),N.setRenderTarget(Z),D)N.render(V,Y);N.render(J,Y)}N.toneMapping=q,N.autoClear=F,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===n8||J.mapping===K8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=fK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=vK();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;a8(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,A7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(H*H-U*U),F=0+H*1.25,q=N*F,{_lodMax:R}=this,V=this._sizeLods[$],B=3*V*($>R-i9?$-R+i9:0),D=4*(this._cubeSize-V);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=R-Q,a8(K,B,D,3*V,2*V),Z.setRenderTarget(K),Z.render(X,A7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=R-$,a8(J,B,D,3*V,2*V),Z.setRenderTarget(J),Z.render(X,A7)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,H=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")C0("blur direction must be either latitudinal or longitudinal!");let U=3,N=this._lodMeshes[Z];N.material=H;let F=H.uniforms,q=this._sizeLods[$]-1,R=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*E8-1),V=K/R,B=isFinite(K)?1+Math.floor(U*V):E8;if(B>E8)_0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${B} samples when the maximum is set to ${E8}`);let D=[],O=0;for(let A=0;A<E8;++A){let w=A/V,L=Math.exp(-w*w/2);if(D.push(L),A===0)O+=L;else if(A<B)O+=2*L}for(let A=0;A<D.length;A++)D[A]=D[A]/O;if(F.envMap.value=J.texture,F.samples.value=B,F.weights.value=D,F.latitudinal.value=W==="latitudinal",X)F.poleAxis.value=X;let{_lodMax:S}=this;F.dTheta.value=R,F.mipInt.value=S-$;let _=this._sizeLods[Z],E=3*_*(Z>S-i9?Z-S+i9:0),P=4*(this._cubeSize-_);a8(Q,E,P,3*_,2*_),Y.setRenderTarget(Q),Y.render(N,A7)}}function nH(J){let Q=[],$=[],Z=[],K=J,W=J-i9+1+TK.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let H=1/Y;if(X>J-i9)H=TK[X-J+i9-1];else if(X===0)H=0;$.push(H);let U=1/(Y-2),N=-U,F=1+U,q=[N,N,F,N,F,F,N,N,F,F,N,F],R=6,V=6,B=3,D=2,O=1,S=new Float32Array(B*V*R),_=new Float32Array(D*V*R),E=new Float32Array(O*V*R);for(let A=0;A<R;A++){let w=A%3*2/3-1,L=A>2?0:-1,z=[w,L,0,w+0.6666666666666666,L,0,w+0.6666666666666666,L+1,0,w,L,0,w+0.6666666666666666,L+1,0,w,L+1,0];S.set(z,B*V*A),_.set(q,D*V*A);let l=[A,A,A,A,A,A];E.set(l,O*V*A)}let P=new W9;if(P.setAttribute("position",new uJ(S,B)),P.setAttribute("uv",new uJ(_,D)),P.setAttribute("faceIndex",new uJ(E,O)),Z.push(new T0(P,null)),K>i9)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function jK(J,Q,$){let Z=new aJ(J,Q,$);return Z.texture.mapping=D7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function a8(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function sH(J,Q,$){return new rJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uH,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:j6(),fragmentShader:`

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
		`,blending:F9,depthTest:!1,depthWrite:!1})}function iH(J,Q,$){let Z=new Float32Array(E8),K=new h(0,1,0);return new rJ({name:"SphericalGaussianBlur",defines:{n:E8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:j6(),fragmentShader:`

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
		`,blending:F9,depthTest:!1,depthWrite:!1})}function vK(){return new rJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:j6(),fragmentShader:`

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
		`,blending:F9,depthTest:!1,depthWrite:!1})}function fK(){return new rJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:j6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:F9,depthTest:!1,depthWrite:!1})}function j6(){return`

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
	`}class u$ extends aJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new z6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new MJ(5,5,5),K=new rJ({name:"CubemapFromEquirect",uniforms:N8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:vJ,blending:F9});K.uniforms.tEquirect.value=Q;let W=new T0(Z,K),X=Q.minFilter;if(Q.minFilter===W8)Q.minFilter=RJ;return new T$(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function oH(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,R=!1){if(q===null||q===void 0)return null;if(R)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let R=q.mapping;if(R===W6||R===X6)if(Q.has(q)){let V=Q.get(q).texture;return Y(V,q.mapping)}else{let V=q.image;if(V&&V.height>0){let B=new u$(V.height);return B.fromEquirectangularTexture(J,q),Q.set(q,B),q.addEventListener("dispose",U),Y(B.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let R=q.mapping,V=R===W6||R===X6,B=R===n8||R===K8;if(V||B){let D=$.get(q),O=D!==void 0?D.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==O){if(Z===null)Z=new w7(J);return D=V?Z.fromEquirectangular(q,D):Z.fromCubemap(q,D),D.texture.pmremVersion=q.pmremVersion,$.set(q,D),D.texture}else if(D!==void 0)return D.texture;else{let S=q.image;if(V&&S&&S.height>0||B&&S&&H(S)){if(Z===null)Z=new w7(J);return D=V?Z.fromEquirectangular(q):Z.fromCubemap(q),D.texture.pmremVersion=q.pmremVersion,$.set(q,D),q.addEventListener("dispose",N),D.texture}else return null}}}return q}function Y(q,R){if(R===W6)q.mapping=n8;else if(R===X6)q.mapping=K8;return q}function H(q){let R=0,V=6;for(let B=0;B<V;B++)if(q[B]!==void 0)R++;return R===V}function U(q){let R=q.target;R.removeEventListener("dispose",U);let V=Q.get(R);if(V!==void 0)Q.delete(R),V.dispose()}function N(q){let R=q.target;R.removeEventListener("dispose",N);let V=$.get(R);if(V!==void 0)$.delete(R),V.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function aH(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)Z8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function rH(J,Q,$,Z){let K={},W=new WeakMap;function X(F){let q=F.target;if(q.index!==null)Q.remove(q.index);for(let V in q.attributes)Q.remove(q.attributes[V]);q.removeEventListener("dispose",X),delete K[q.id];let R=W.get(q);if(R)Q.remove(R),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(F,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function H(F){let q=F.attributes;for(let R in q)Q.update(q[R],J.ARRAY_BUFFER)}function U(F){let q=[],R=F.index,V=F.attributes.position,B=0;if(V===void 0)return;if(R!==null){let S=R.array;B=R.version;for(let _=0,E=S.length;_<E;_+=3){let P=S[_+0],A=S[_+1],w=S[_+2];q.push(P,A,A,w,w,P)}}else{let S=V.array;B=V.version;for(let _=0,E=S.length/3-1;_<E;_+=3){let P=_+0,A=_+1,w=_+2;q.push(P,A,A,w,w,P)}}let D=new(V.count>=65535?L6:k6)(q,1);D.version=B;let O=W.get(F);if(O)Q.remove(O);W.set(F,D)}function N(F){let q=W.get(F);if(q){let R=F.index;if(R!==null){if(q.version<R.version)U(F)}}else U(F);return W.get(F)}return{get:Y,update:H,getWireframeAttribute:N}}function tH(J,Q,$){let Z;function K(F){Z=F}let W,X;function Y(F){W=F.type,X=F.bytesPerElement}function H(F,q){J.drawElements(Z,q,W,F*X),$.update(q,Z,1)}function U(F,q,R){if(R===0)return;J.drawElementsInstanced(Z,q,W,F*X,R),$.update(q,Z,R)}function N(F,q,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,F,0,R);let B=0;for(let D=0;D<R;D++)B+=q[D];$.update(B,Z,1)}this.setMode=K,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function eH(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:C0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function JU(J,Q,$){let Z=new WeakMap,K=new HJ;function W(X,Y,H){let U=X.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=N!==void 0?N.length:0,q=Z.get(Y);if(q===void 0||q.count!==F){let z=function(){w.dispose(),Z.delete(Y),Y.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let R=Y.morphAttributes.position!==void 0,V=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,D=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],S=Y.morphAttributes.color||[],_=0;if(R===!0)_=1;if(V===!0)_=2;if(B===!0)_=3;let E=Y.attributes.position.count*_,P=1;if(E>Q.maxTextureSize)P=Math.ceil(E/Q.maxTextureSize),E=Q.maxTextureSize;let A=new Float32Array(E*P*4*F),w=new R6(A,E,P,F);w.type=_9,w.needsUpdate=!0;let L=_*4;for(let l=0;l<F;l++){let C=D[l],p=O[l],o=S[l],g=E*P*4*l;for(let u=0;u<C.count;u++){let c=u*L;if(R===!0)K.fromBufferAttribute(C,u),A[g+c+0]=K.x,A[g+c+1]=K.y,A[g+c+2]=K.z,A[g+c+3]=0;if(V===!0)K.fromBufferAttribute(p,u),A[g+c+4]=K.x,A[g+c+5]=K.y,A[g+c+6]=K.z,A[g+c+7]=0;if(B===!0)K.fromBufferAttribute(o,u),A[g+c+8]=K.x,A[g+c+9]=K.y,A[g+c+10]=K.z,A[g+c+11]=o.itemSize===4?K.w:1}}q={count:F,texture:w,size:new x0(E,P)},Z.set(Y,q),Y.addEventListener("dispose",z)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let R=0;for(let B=0;B<U.length;B++)R+=U[B];let V=Y.morphTargetsRelative?1:1-R;H.getUniforms().setValue(J,"morphTargetBaseInfluence",V),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function QU(J,Q,$,Z,K){let W=new WeakMap;function X(U){let N=K.render.frame,F=U.geometry,q=Q.get(U,F);if(W.get(q)!==N)Q.update(q),W.set(q,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let R=U.skeleton;if(W.get(R)!==N)R.update(),W.set(R,N)}return q}function Y(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:X,dispose:Y}}var $U={[RQ]:"LINEAR_TONE_MAPPING",[kQ]:"REINHARD_TONE_MAPPING",[LQ]:"CINEON_TONE_MAPPING",[O7]:"ACES_FILMIC_TONE_MAPPING",[MQ]:"AGX_TONE_MAPPING",[zQ]:"NEUTRAL_TONE_MAPPING",[VQ]:"CUSTOM_TONE_MAPPING"};function ZU(J,Q,$,Z,K,W){let X=new aJ(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new s9(Q,$):void 0}),Y=new aJ(Q,$,{type:w9,depthBuffer:!1,stencilBuffer:!1}),H=new W9;H.setAttribute("position",new pJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new pJ([0,2,0,0,2,0],2));let U=new E$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new T0(H,U),F=new B7(-1,1,1,-1,0,1),q=null,R=null,V=!1,B,D=null,O=[],S=!1;this.setSize=function(_,E){X.setSize(_,E),Y.setSize(_,E);for(let P=0;P<O.length;P++){let A=O[P];if(A.setSize)A.setSize(_,E)}},this.setEffects=function(_){O=_,S=O.length>0&&O[0].isRenderPass===!0;let{width:E,height:P}=X;for(let A=0;A<O.length;A++){let w=O[A];if(w.setSize)w.setSize(E,P)}},this.begin=function(_,E){if(V)return!1;if(_.toneMapping===Z9&&O.length===0)return!1;if(D=E,E!==null){let{width:P,height:A}=E;if(X.width!==P||X.height!==A)this.setSize(P,A)}if(S===!1)_.setRenderTarget(X);return B=_.toneMapping,_.toneMapping=Z9,!0},this.hasRenderPass=function(){return S},this.end=function(_,E){_.toneMapping=B,V=!0;let P=X,A=Y;for(let w=0;w<O.length;w++){let L=O[w];if(L.enabled===!1)continue;if(L.render(_,A,P,E),L.needsSwap!==!1){let z=P;P=A,A=z}}if(q!==_.outputColorSpace||R!==_.toneMapping){if(q=_.outputColorSpace,R=_.toneMapping,U.defines={},d0.getTransfer(q)===WJ)U.defines.SRGB_TRANSFER="";let w=$U[R];if(w)U.defines[w]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=P.texture,_.setRenderTarget(D),_.render(N,F),D=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),H.dispose(),U.dispose()}}var JW=new PJ,l$=new s9(1,1),QW=new R6,$W=new F$,ZW=new z6,yK=[],bK=[],hK=new Float32Array(16),xK=new Float32Array(9),gK=new Float32Array(4);function r8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=yK[K];if(W===void 0)W=new Float32Array(K),yK[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function zJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function BJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function v6(J,Q){let $=bK[Q];if($===void 0)$=new Int32Array(Q),bK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function KU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function WU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2fv(this.addr,Q),BJ($,Q)}}function XU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(zJ($,Q))return;J.uniform3fv(this.addr,Q),BJ($,Q)}}function YU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4fv(this.addr,Q),BJ($,Q)}}function HU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),BJ($,Q)}else{if(zJ($,Z))return;gK.set(Z),J.uniformMatrix2fv(this.addr,!1,gK),BJ($,Z)}}function UU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),BJ($,Q)}else{if(zJ($,Z))return;xK.set(Z),J.uniformMatrix3fv(this.addr,!1,xK),BJ($,Z)}}function qU(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(zJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),BJ($,Q)}else{if(zJ($,Z))return;hK.set(Z),J.uniformMatrix4fv(this.addr,!1,hK),BJ($,Z)}}function GU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function NU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2iv(this.addr,Q),BJ($,Q)}}function FU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(zJ($,Q))return;J.uniform3iv(this.addr,Q),BJ($,Q)}}function OU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4iv(this.addr,Q),BJ($,Q)}}function DU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function EU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(zJ($,Q))return;J.uniform2uiv(this.addr,Q),BJ($,Q)}}function RU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(zJ($,Q))return;J.uniform3uiv(this.addr,Q),BJ($,Q)}}function kU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(zJ($,Q))return;J.uniform4uiv(this.addr,Q),BJ($,Q)}}function LU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)l$.compareFunction=$.isReversedDepthBuffer()?E6:D6,W=l$;else W=JW;$.setTexture2D(Q||W,K)}function VU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||$W,K)}function MU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||ZW,K)}function zU(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||QW,K)}function BU(J){switch(J){case 5126:return KU;case 35664:return WU;case 35665:return XU;case 35666:return YU;case 35674:return HU;case 35675:return UU;case 35676:return qU;case 5124:case 35670:return GU;case 35667:case 35671:return NU;case 35668:case 35672:return FU;case 35669:case 35673:return OU;case 5125:return DU;case 36294:return EU;case 36295:return RU;case 36296:return kU;case 35678:case 36198:case 36298:case 36306:case 35682:return LU;case 35679:case 36299:case 36307:return VU;case 35680:case 36300:case 36308:case 36293:return MU;case 36289:case 36303:case 36311:case 36292:return zU}}function IU(J,Q){J.uniform1fv(this.addr,Q)}function AU(J,Q){let $=r8(Q,this.size,2);J.uniform2fv(this.addr,$)}function PU(J,Q){let $=r8(Q,this.size,3);J.uniform3fv(this.addr,$)}function CU(J,Q){let $=r8(Q,this.size,4);J.uniform4fv(this.addr,$)}function _U(J,Q){let $=r8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function wU(J,Q){let $=r8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function TU(J,Q){let $=r8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function SU(J,Q){J.uniform1iv(this.addr,Q)}function jU(J,Q){J.uniform2iv(this.addr,Q)}function vU(J,Q){J.uniform3iv(this.addr,Q)}function fU(J,Q){J.uniform4iv(this.addr,Q)}function yU(J,Q){J.uniform1uiv(this.addr,Q)}function bU(J,Q){J.uniform2uiv(this.addr,Q)}function hU(J,Q){J.uniform3uiv(this.addr,Q)}function xU(J,Q){J.uniform4uiv(this.addr,Q)}function gU(J,Q,$){let Z=this.cache,K=Q.length,W=v6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),BJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=l$;else X=JW;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function pU(J,Q,$){let Z=this.cache,K=Q.length,W=v6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),BJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||$W,W[X])}function mU(J,Q,$){let Z=this.cache,K=Q.length,W=v6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),BJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||ZW,W[X])}function lU(J,Q,$){let Z=this.cache,K=Q.length,W=v6($,K);if(!zJ(Z,W))J.uniform1iv(this.addr,W),BJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||QW,W[X])}function dU(J){switch(J){case 5126:return IU;case 35664:return AU;case 35665:return PU;case 35666:return CU;case 35674:return _U;case 35675:return wU;case 35676:return TU;case 5124:case 35670:return SU;case 35667:case 35671:return jU;case 35668:case 35672:return vU;case 35669:case 35673:return fU;case 5125:return yU;case 36294:return bU;case 36295:return hU;case 36296:return xU;case 35678:case 36198:case 36298:case 36306:case 35682:return gU;case 35679:case 36299:case 36307:return pU;case 35680:case 36300:case 36308:case 36293:return mU;case 36289:case 36303:case 36311:case 36292:return lU}}class KW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=BU(Q.type)}}class WW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=dU(Q.type)}}class XW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var p$=/(\w+)(\])?(\[|\.)?/g;function pK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function uU(J,Q,$){let Z=J.name,K=Z.length;p$.lastIndex=0;while(!0){let W=p$.exec(Z),X=p$.lastIndex,Y=W[1],H=W[2]==="]",U=W[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===K){pK($,U===void 0?new KW(Y,J,Q):new WW(Y,J,Q));break}else{let F=$.map[Y];if(F===void 0)F=new XW(Y),pK($,F);$=F}}}class _7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);uU(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function mK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var cU=37297,nU=0;function sU(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var lK=new j0;function iU(J){d0._getMatrix(lK,d0.workingColorSpace,J);let Q=`mat3( ${lK.elements.map(($)=>$.toFixed(4))} )`;switch(d0.getTransfer(J)){case Y$:return[Q,"LinearTransferOETF"];case WJ:return[Q,"sRGBTransferOETF"];default:return _0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function dK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+sU(J.getShaderSource(Q),Y)}else return W}function oU(J,Q){let $=iU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var aU={[RQ]:"Linear",[kQ]:"Reinhard",[LQ]:"Cineon",[O7]:"ACESFilmic",[MQ]:"AgX",[zQ]:"Neutral",[VQ]:"Custom"};function rU(J,Q){let $=aU[Q];if($===void 0)return _0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var S6=new h;function tU(){d0.getLuminanceCoefficients(S6);let J=S6.x.toFixed(4),Q=S6.y.toFixed(4),$=S6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function eU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(C7).join(`
`)}function J5(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Q5(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function C7(J){return J!==""}function uK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function cK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var $5=/^[ \t]*#include +<([\w\d./]+)>/gm;function d$(J){return J.replace($5,K5)}var Z5=new Map;function K5(J,Q){let $=b0[Q];if($===void 0){let Z=Z5.get(Q);if(Z!==void 0)$=b0[Z],_0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return d$($)}var W5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nK(J){return J.replace(W5,X5)}function X5(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function sK(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Y5={[N7]:"SHADOWMAP_TYPE_PCF",[d8]:"SHADOWMAP_TYPE_VSM"};function H5(J){return Y5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U5={[n8]:"ENVMAP_TYPE_CUBE",[K8]:"ENVMAP_TYPE_CUBE",[D7]:"ENVMAP_TYPE_CUBE_UV"};function q5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return U5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var G5={[K8]:"ENVMAP_MODE_REFRACTION"};function N5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return G5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F5={[JK]:"ENVMAP_BLENDING_MULTIPLY",[QK]:"ENVMAP_BLENDING_MIX",[$K]:"ENVMAP_BLENDING_ADD"};function O5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return F5[J.combine]||"ENVMAP_BLENDING_NONE"}function D5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function E5(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=H5($),U=q5($),N=N5($),F=O5($),q=D5($),R=eU($),V=J5(W),B=K.createProgram(),D,O,S=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(C7).join(`
`),D.length>0)D+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(C7).join(`
`),O.length>0)O+=`
`}else D=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(C7).join(`
`),O=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+F:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==Z9?"#define TONE_MAPPING":"",$.toneMapping!==Z9?b0.tonemapping_pars_fragment:"",$.toneMapping!==Z9?rU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",b0.colorspace_pars_fragment,oU("linearToOutputTexel",$.outputColorSpace),tU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(C7).join(`
`);if(X=d$(X),X=uK(X,$),X=cK(X,$),Y=d$(Y),Y=uK(Y,$),Y=cK(Y,$),X=nK(X),Y=nK(Y),$.isRawShaderMaterial!==!0)S=`#version 300 es
`,D=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,O=["#define varying in",$.glslVersion===H$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===H$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let _=S+D+X,E=S+O+Y,P=mK(K,K.VERTEX_SHADER,_),A=mK(K,K.FRAGMENT_SHADER,E);if(K.attachShader(B,P),K.attachShader(B,A),$.index0AttributeName!==void 0)K.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function w(C){if(J.debug.checkShaderErrors){let p=K.getProgramInfoLog(B)||"",o=K.getShaderInfoLog(P)||"",g=K.getShaderInfoLog(A)||"",u=p.trim(),c=o.trim(),x=g.trim(),t=!0,e=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(t=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,P,A);else{let G0=dK(K,P,"vertex"),M0=dK(K,A,"fragment");C0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+u+`
`+G0+`
`+M0)}else if(u!=="")_0("WebGLProgram: Program Info Log:",u);else if(c===""||x==="")e=!1;if(e)C.diagnostics={runnable:t,programLog:u,vertexShader:{log:c,prefix:D},fragmentShader:{log:x,prefix:O}}}K.deleteShader(P),K.deleteShader(A),L=new _7(K,B),z=Q5(K,B)}let L;this.getUniforms=function(){if(L===void 0)w(this);return L};let z;this.getAttributes=function(){if(z===void 0)w(this);return z};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=K.getProgramParameter(B,cU);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=nU++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=P,this.fragmentShader=A,this}var R5=0;class YW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new HW(J),Q.set(J,$);return $}}class HW{constructor(J){this.id=R5++,this.code=J,this.usedTimes=0}}function k5(J){return J===H8||J===F6||J===O6}function L5(J,Q,$,Z,K,W){let X=new V7,Y=new YW,H=new Set,U=[],N=new Map,F=Z.logarithmicDepthBuffer,q=Z.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function V(L){if(H.add(L),L===0)return"uv";return`uv${L}`}function B(L,z,l,C,p,o){let g=C.fog,u=p.geometry,c=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?C.environment:null,x=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,t=Q.get(L.envMap||c,x),e=!!t&&t.mapping===D7?t.image.height:null,G0=R[L.type];if(L.precision!==null){if(q=Z.getMaxPrecision(L.precision),q!==L.precision)_0("WebGLProgram.getParameters:",L.precision,"not supported, using",q,"instead.")}let M0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,k0=M0!==void 0?M0.length:0,YJ=0;if(u.morphAttributes.position!==void 0)YJ=1;if(u.morphAttributes.normal!==void 0)YJ=2;if(u.morphAttributes.color!==void 0)YJ=3;let s0,i,Y0,O0;if(G0){let w0=R9[G0];s0=w0.vertexShader,i=w0.fragmentShader}else{s0=L.vertexShader,i=L.fragmentShader;let w0=Y.getVertexShaderStage(L),t0=Y.getFragmentShaderStage(L);Y.update(L,w0,t0),Y0=w0.id,O0=t0.id}let D0=J.getRenderTarget(),P0=J.state.buffers.depth.getReversed(),p0=p.isInstancedMesh===!0,f0=p.isBatchedMesh===!0,y0=!!L.map,o0=!!L.matcap,m0=!!t,v0=!!L.aoMap,NJ=!!L.lightMap,yJ=!!L.bumpMap&&L.wireframe===!1,a0=!!L.normalMap,VJ=!!L.displacementMap,UJ=!!L.emissiveMap,qJ=!!L.metalnessMap,y=!!L.roughnessMap,AJ=L.anisotropy>0,u0=L.clearcoat>0,r0=L.dispersion>0,M=L.iridescence>0,k=L.sheen>0,j=L.transmission>0,m=AJ&&!!L.anisotropyMap,a=u0&&!!L.clearcoatMap,Q0=u0&&!!L.clearcoatNormalMap,W0=u0&&!!L.clearcoatRoughnessMap,d=M&&!!L.iridescenceMap,s=M&&!!L.iridescenceThicknessMap,F0=k&&!!L.sheenColorMap,V0=k&&!!L.sheenRoughnessMap,q0=!!L.specularMap,$0=!!L.specularColorMap,I0=!!L.specularIntensityMap,A0=j&&!!L.transmissionMap,c0=j&&!!L.thicknessMap,f=!!L.gradientMap,X0=!!L.alphaMap,n=L.alphaTest>0,H0=!!L.alphaHash,E0=!!L.extensions,r=Z9;if(L.toneMapped){if(D0===null||D0.isXRRenderTarget===!0)r=J.toneMapping}let U0={shaderID:G0,shaderType:L.type,shaderName:L.name,vertexShader:s0,fragmentShader:i,defines:L.defines,customVertexShaderID:Y0,customFragmentShaderID:O0,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:q,batching:f0,batchingColor:f0&&p._colorsTexture!==null,instancing:p0,instancingColor:p0&&p.instanceColor!==null,instancingMorph:p0&&p.morphTexture!==null,outputColorSpace:D0===null?J.outputColorSpace:D0.isXRRenderTarget===!0?D0.texture.colorSpace:d0.workingColorSpace,alphaToCoverage:!!L.alphaToCoverage,map:y0,matcap:o0,envMap:m0,envMapMode:m0&&t.mapping,envMapCubeUVHeight:e,aoMap:v0,lightMap:NJ,bumpMap:yJ,normalMap:a0,displacementMap:VJ,emissiveMap:UJ,normalMapObjectSpace:a0&&L.normalMapType===FK,normalMapTangentSpace:a0&&L.normalMapType===W$,packedNormalMap:a0&&L.normalMapType===W$&&k5(L.normalMap.format),metalnessMap:qJ,roughnessMap:y,anisotropy:AJ,anisotropyMap:m,clearcoat:u0,clearcoatMap:a,clearcoatNormalMap:Q0,clearcoatRoughnessMap:W0,dispersion:r0,iridescence:M,iridescenceMap:d,iridescenceThicknessMap:s,sheen:k,sheenColorMap:F0,sheenRoughnessMap:V0,specularMap:q0,specularColorMap:$0,specularIntensityMap:I0,transmission:j,transmissionMap:A0,thicknessMap:c0,gradientMap:f,opaque:L.transparent===!1&&L.blending===F7&&L.alphaToCoverage===!1,alphaMap:X0,alphaTest:n,alphaHash:H0,combine:L.combine,mapUv:y0&&V(L.map.channel),aoMapUv:v0&&V(L.aoMap.channel),lightMapUv:NJ&&V(L.lightMap.channel),bumpMapUv:yJ&&V(L.bumpMap.channel),normalMapUv:a0&&V(L.normalMap.channel),displacementMapUv:VJ&&V(L.displacementMap.channel),emissiveMapUv:UJ&&V(L.emissiveMap.channel),metalnessMapUv:qJ&&V(L.metalnessMap.channel),roughnessMapUv:y&&V(L.roughnessMap.channel),anisotropyMapUv:m&&V(L.anisotropyMap.channel),clearcoatMapUv:a&&V(L.clearcoatMap.channel),clearcoatNormalMapUv:Q0&&V(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W0&&V(L.clearcoatRoughnessMap.channel),iridescenceMapUv:d&&V(L.iridescenceMap.channel),iridescenceThicknessMapUv:s&&V(L.iridescenceThicknessMap.channel),sheenColorMapUv:F0&&V(L.sheenColorMap.channel),sheenRoughnessMapUv:V0&&V(L.sheenRoughnessMap.channel),specularMapUv:q0&&V(L.specularMap.channel),specularColorMapUv:$0&&V(L.specularColorMap.channel),specularIntensityMapUv:I0&&V(L.specularIntensityMap.channel),transmissionMapUv:A0&&V(L.transmissionMap.channel),thicknessMapUv:c0&&V(L.thicknessMap.channel),alphaMapUv:X0&&V(L.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(a0||AJ),vertexNormals:!!u.attributes.normal,vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!u.attributes.uv&&(y0||X0),fog:!!g,useFog:L.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:L.wireframe===!1&&(L.flatShading===!0||u.attributes.normal===void 0&&a0===!1&&(L.isMeshLambertMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isMeshPhysicalMaterial)),sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:P0,skinning:p.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:k0,morphTextureStride:YJ,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:r,decodeVideoTexture:y0&&L.map.isVideoTexture===!0&&d0.getTransfer(L.map.colorSpace)===WJ,decodeVideoTextureEmissive:UJ&&L.emissiveMap.isVideoTexture===!0&&d0.getTransfer(L.emissiveMap.colorSpace)===WJ,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===N9,flipSided:L.side===vJ,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:E0&&L.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(E0&&L.extensions.multiDraw===!0||f0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return U0.vertexUv1s=H.has(1),U0.vertexUv2s=H.has(2),U0.vertexUv3s=H.has(3),H.clear(),U0}function D(L){let z=[];if(L.shaderID)z.push(L.shaderID);else z.push(L.customVertexShaderID),z.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let l in L.defines)z.push(l),z.push(L.defines[l]);if(L.isRawShaderMaterial===!1)O(z,L),S(z,L),z.push(J.outputColorSpace);return z.push(L.customProgramCacheKey),z.join()}function O(L,z){L.push(z.precision),L.push(z.outputColorSpace),L.push(z.envMapMode),L.push(z.envMapCubeUVHeight),L.push(z.mapUv),L.push(z.alphaMapUv),L.push(z.lightMapUv),L.push(z.aoMapUv),L.push(z.bumpMapUv),L.push(z.normalMapUv),L.push(z.displacementMapUv),L.push(z.emissiveMapUv),L.push(z.metalnessMapUv),L.push(z.roughnessMapUv),L.push(z.anisotropyMapUv),L.push(z.clearcoatMapUv),L.push(z.clearcoatNormalMapUv),L.push(z.clearcoatRoughnessMapUv),L.push(z.iridescenceMapUv),L.push(z.iridescenceThicknessMapUv),L.push(z.sheenColorMapUv),L.push(z.sheenRoughnessMapUv),L.push(z.specularMapUv),L.push(z.specularColorMapUv),L.push(z.specularIntensityMapUv),L.push(z.transmissionMapUv),L.push(z.thicknessMapUv),L.push(z.combine),L.push(z.fogExp2),L.push(z.sizeAttenuation),L.push(z.morphTargetsCount),L.push(z.morphAttributeCount),L.push(z.numDirLights),L.push(z.numPointLights),L.push(z.numSpotLights),L.push(z.numSpotLightMaps),L.push(z.numHemiLights),L.push(z.numRectAreaLights),L.push(z.numDirLightShadows),L.push(z.numPointLightShadows),L.push(z.numSpotLightShadows),L.push(z.numSpotLightShadowsWithMaps),L.push(z.numLightProbes),L.push(z.shadowMapType),L.push(z.toneMapping),L.push(z.numClippingPlanes),L.push(z.numClipIntersection),L.push(z.depthPacking)}function S(L,z){if(X.disableAll(),z.instancing)X.enable(0);if(z.instancingColor)X.enable(1);if(z.instancingMorph)X.enable(2);if(z.matcap)X.enable(3);if(z.envMap)X.enable(4);if(z.normalMapObjectSpace)X.enable(5);if(z.normalMapTangentSpace)X.enable(6);if(z.clearcoat)X.enable(7);if(z.iridescence)X.enable(8);if(z.alphaTest)X.enable(9);if(z.vertexColors)X.enable(10);if(z.vertexAlphas)X.enable(11);if(z.vertexUv1s)X.enable(12);if(z.vertexUv2s)X.enable(13);if(z.vertexUv3s)X.enable(14);if(z.vertexTangents)X.enable(15);if(z.anisotropy)X.enable(16);if(z.alphaHash)X.enable(17);if(z.batching)X.enable(18);if(z.dispersion)X.enable(19);if(z.batchingColor)X.enable(20);if(z.gradientMap)X.enable(21);if(z.packedNormalMap)X.enable(22);if(z.vertexNormals)X.enable(23);if(L.push(X.mask),X.disableAll(),z.fog)X.enable(0);if(z.useFog)X.enable(1);if(z.flatShading)X.enable(2);if(z.logarithmicDepthBuffer)X.enable(3);if(z.reversedDepthBuffer)X.enable(4);if(z.skinning)X.enable(5);if(z.morphTargets)X.enable(6);if(z.morphNormals)X.enable(7);if(z.morphColors)X.enable(8);if(z.premultipliedAlpha)X.enable(9);if(z.shadowMapEnabled)X.enable(10);if(z.doubleSided)X.enable(11);if(z.flipSided)X.enable(12);if(z.useDepthPacking)X.enable(13);if(z.dithering)X.enable(14);if(z.transmission)X.enable(15);if(z.sheen)X.enable(16);if(z.opaque)X.enable(17);if(z.pointsUvs)X.enable(18);if(z.decodeVideoTexture)X.enable(19);if(z.decodeVideoTextureEmissive)X.enable(20);if(z.alphaToCoverage)X.enable(21);if(z.numLightProbeGrids>0)X.enable(22);if(z.hasPositionAttribute)X.enable(23);L.push(X.mask)}function _(L){let z=R[L.type],l;if(z){let C=R9[z];l=AK.clone(C.uniforms)}else l=L.uniforms;return l}function E(L,z){let l=N.get(z);if(l!==void 0)++l.usedTimes;else l=new E5(J,z,L,K),U.push(l),N.set(z,l);return l}function P(L){if(--L.usedTimes===0){let z=U.indexOf(L);U[z]=U[U.length-1],U.pop(),N.delete(L.cacheKey),L.destroy()}}function A(L){Y.remove(L)}function w(){Y.dispose()}return{getParameters:B,getProgramCacheKey:D,getUniforms:_,acquireProgram:E,releaseProgram:P,releaseShaderCache:A,programs:U,dispose:w}}function V5(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function M5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function iK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function oK(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let R=0;if(q.isInstancedMesh)R+=2;if(q.isSkinnedMesh)R+=1;return R}function Y(q,R,V,B,D,O){let S=J[Q];if(S===void 0)S={id:q.id,object:q,geometry:R,material:V,materialVariant:X(q),groupOrder:B,renderOrder:q.renderOrder,z:D,group:O},J[Q]=S;else S.id=q.id,S.object=q,S.geometry=R,S.material=V,S.materialVariant=X(q),S.groupOrder=B,S.renderOrder=q.renderOrder,S.z=D,S.group=O;return Q++,S}function H(q,R,V,B,D,O){let S=Y(q,R,V,B,D,O);if(V.transmission>0)Z.push(S);else if(V.transparent===!0)K.push(S);else $.push(S)}function U(q,R,V,B,D,O){let S=Y(q,R,V,B,D,O);if(V.transmission>0)Z.unshift(S);else if(V.transparent===!0)K.unshift(S);else $.unshift(S)}function N(q,R,V){if($.length>1)$.sort(q||M5);if(Z.length>1)Z.sort(R||iK);if(K.length>1)K.sort(R||iK);if(V)$.reverse(),Z.reverse(),K.reverse()}function F(){for(let q=Q,R=J.length;q<R;q++){let V=J[q];if(V.id===null)break;V.id=null,V.object=null,V.geometry=null,V.material=null,V.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:N}}function z5(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new oK,J.set(Z,[X]);else if(K>=W.length)X=new oK,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function B5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new h,color:new g0};break;case"SpotLight":$={position:new h,direction:new h,color:new g0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new h,color:new g0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new h,skyColor:new g0,groundColor:new g0};break;case"RectAreaLight":$={color:new g0,position:new h,halfWidth:new h,halfHeight:new h};break}return J[Q.id]=$,$}}}function I5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var A5=0;function P5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function C5(J){let Q=new B5,$=I5(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new h);let K=new h,W=new $J,X=new $J;function Y(U){let N=0,F=0,q=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let R=0,V=0,B=0,D=0,O=0,S=0,_=0,E=0,P=0,A=0,w=0;U.sort(P5);for(let z=0,l=U.length;z<l;z++){let C=U[z],p=C.color,o=C.intensity,g=C.distance,u=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===H8)u=C.shadow.map.texture;else u=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)N+=p.r*o,F+=p.g*o,q+=p.b*o;else if(C.isLightProbe){for(let c=0;c<9;c++)Z.probe[c].addScaledVector(C.sh.coefficients[c],o);w++}else if(C.isDirectionalLight){let c=Q.get(C);if(c.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let x=C.shadow,t=$.get(C);t.shadowIntensity=x.intensity,t.shadowBias=x.bias,t.shadowNormalBias=x.normalBias,t.shadowRadius=x.radius,t.shadowMapSize=x.mapSize,Z.directionalShadow[R]=t,Z.directionalShadowMap[R]=u,Z.directionalShadowMatrix[R]=C.shadow.matrix,S++}Z.directional[R]=c,R++}else if(C.isSpotLight){let c=Q.get(C);c.position.setFromMatrixPosition(C.matrixWorld),c.color.copy(p).multiplyScalar(o),c.distance=g,c.coneCos=Math.cos(C.angle),c.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),c.decay=C.decay,Z.spot[B]=c;let x=C.shadow;if(C.map){if(Z.spotLightMap[P]=C.map,P++,x.updateMatrices(C),C.castShadow)A++}if(Z.spotLightMatrix[B]=x.matrix,C.castShadow){let t=$.get(C);t.shadowIntensity=x.intensity,t.shadowBias=x.bias,t.shadowNormalBias=x.normalBias,t.shadowRadius=x.radius,t.shadowMapSize=x.mapSize,Z.spotShadow[B]=t,Z.spotShadowMap[B]=u,E++}B++}else if(C.isRectAreaLight){let c=Q.get(C);c.color.copy(p).multiplyScalar(o),c.halfWidth.set(C.width*0.5,0,0),c.halfHeight.set(0,C.height*0.5,0),Z.rectArea[D]=c,D++}else if(C.isPointLight){let c=Q.get(C);if(c.color.copy(C.color).multiplyScalar(C.intensity),c.distance=C.distance,c.decay=C.decay,C.castShadow){let x=C.shadow,t=$.get(C);t.shadowIntensity=x.intensity,t.shadowBias=x.bias,t.shadowNormalBias=x.normalBias,t.shadowRadius=x.radius,t.shadowMapSize=x.mapSize,t.shadowCameraNear=x.camera.near,t.shadowCameraFar=x.camera.far,Z.pointShadow[V]=t,Z.pointShadowMap[V]=u,Z.pointShadowMatrix[V]=C.shadow.matrix,_++}Z.point[V]=c,V++}else if(C.isHemisphereLight){let c=Q.get(C);c.skyColor.copy(C.color).multiplyScalar(o),c.groundColor.copy(C.groundColor).multiplyScalar(o),Z.hemi[O]=c,O++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=N0.LTC_FLOAT_1,Z.rectAreaLTC2=N0.LTC_FLOAT_2;else Z.rectAreaLTC1=N0.LTC_HALF_1,Z.rectAreaLTC2=N0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=q;let L=Z.hash;if(L.directionalLength!==R||L.pointLength!==V||L.spotLength!==B||L.rectAreaLength!==D||L.hemiLength!==O||L.numDirectionalShadows!==S||L.numPointShadows!==_||L.numSpotShadows!==E||L.numSpotMaps!==P||L.numLightProbes!==w)Z.directional.length=R,Z.spot.length=B,Z.rectArea.length=D,Z.point.length=V,Z.hemi.length=O,Z.directionalShadow.length=S,Z.directionalShadowMap.length=S,Z.pointShadow.length=_,Z.pointShadowMap.length=_,Z.spotShadow.length=E,Z.spotShadowMap.length=E,Z.directionalShadowMatrix.length=S,Z.pointShadowMatrix.length=_,Z.spotLightMatrix.length=E+P-A,Z.spotLightMap.length=P,Z.numSpotLightShadowsWithMaps=A,Z.numLightProbes=w,L.directionalLength=R,L.pointLength=V,L.spotLength=B,L.rectAreaLength=D,L.hemiLength=O,L.numDirectionalShadows=S,L.numPointShadows=_,L.numSpotShadows=E,L.numSpotMaps=P,L.numLightProbes=w,Z.version=A5++}function H(U,N){let F=0,q=0,R=0,V=0,B=0,D=N.matrixWorldInverse;for(let O=0,S=U.length;O<S;O++){let _=U[O];if(_.isDirectionalLight){let E=Z.directional[F];E.direction.setFromMatrixPosition(_.matrixWorld),K.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(K),E.direction.transformDirection(D),F++}else if(_.isSpotLight){let E=Z.spot[R];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(D),E.direction.setFromMatrixPosition(_.matrixWorld),K.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(K),E.direction.transformDirection(D),R++}else if(_.isRectAreaLight){let E=Z.rectArea[V];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(D),X.identity(),W.copy(_.matrixWorld),W.premultiply(D),X.extractRotation(W),E.halfWidth.set(_.width*0.5,0,0),E.halfHeight.set(0,_.height*0.5,0),E.halfWidth.applyMatrix4(X),E.halfHeight.applyMatrix4(X),V++}else if(_.isPointLight){let E=Z.point[q];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(D),q++}else if(_.isHemisphereLight){let E=Z.hemi[B];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(D),B++}}}return{setup:Y,setupView:H,state:Z}}function aK(J){let Q=new C5(J),$=[],Z=[],K=[];function W(q){F.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function H(q){K.push(q)}function U(){Q.setup($)}function N(q){Q.setupView($,q)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:N,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function _5(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new aK(J),Q.set(K,[Y]);else if(W>=X.length)Y=new aK(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var w5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T5=`uniform sampler2D shadow_pass;
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
}`,S5=[new h(1,0,0),new h(-1,0,0),new h(0,1,0),new h(0,-1,0),new h(0,0,1),new h(0,0,-1)],j5=[new h(0,-1,0),new h(0,-1,0),new h(0,0,1),new h(0,0,-1),new h(0,-1,0),new h(0,-1,0)],rK=new $J,P7=new h,m$=new h;function v5(J,Q,$){let Z=new z7,K=new x0,W=new x0,X=new HJ,Y=new R$,H=new k$,U={},N=$.maxTextureSize,F={[u8]:vJ,[vJ]:u8,[N9]:N9},q=new rJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new x0},radius:{value:4}},vertexShader:w5,fragmentShader:T5}),R=q.clone();R.defines.HORIZONTAL_PASS=1;let V=new W9;V.setAttribute("position",new uJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new T0(V,q),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N7;let O=this.type;this.render=function(A,w,L){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(A.length===0)return;if(this.type===PZ)_0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=N7;let z=J.getRenderTarget(),l=J.getActiveCubeFace(),C=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(F9),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let o=O!==this.type;if(o)w.traverse(function(g){if(g.material)if(Array.isArray(g.material))g.material.forEach((u)=>u.needsUpdate=!0);else g.material.needsUpdate=!0});for(let g=0,u=A.length;g<u;g++){let c=A[g],x=c.shadow;if(x===void 0){_0("WebGLShadowMap:",c,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;K.copy(x.mapSize);let t=x.getFrameExtents();if(K.multiply(t),W.copy(x.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/t.x),K.x=W.x*t.x,x.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/t.y),K.y=W.y*t.y,x.mapSize.y=W.y}let e=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=e,x.map===null||o===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===d8){if(c.isPointLight){_0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new aJ(K.x,K.y,{format:H8,type:w9,minFilter:RJ,magFilter:RJ,generateMipmaps:!1}),x.map.texture.name=c.name+".shadowMap",x.map.depthTexture=new s9(K.x,K.y,_9),x.map.depthTexture.name=c.name+".shadowMapDepth",x.map.depthTexture.format=X8,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=u9,x.map.depthTexture.magFilter=u9}else{if(c.isPointLight)x.map=new u$(K.x),x.map.depthTexture=new O$(K.x,c9);else x.map=new aJ(K.x,K.y),x.map.depthTexture=new s9(K.x,K.y,c9);if(x.map.depthTexture.name=c.name+".shadowMap",x.map.depthTexture.format=X8,this.type===N7)x.map.depthTexture.compareFunction=e?E6:D6,x.map.depthTexture.minFilter=RJ,x.map.depthTexture.magFilter=RJ;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=u9,x.map.depthTexture.magFilter=u9}x.camera.updateProjectionMatrix()}let G0=x.map.isWebGLCubeRenderTarget?6:1;for(let M0=0;M0<G0;M0++){if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,M0),J.clear();else{if(M0===0)J.setRenderTarget(x.map),J.clear();let k0=x.getViewport(M0);X.set(W.x*k0.x,W.y*k0.y,W.x*k0.z,W.y*k0.w),p.viewport(X)}if(c.isPointLight){let{camera:k0,matrix:YJ}=x,s0=c.distance||k0.far;if(s0!==k0.far)k0.far=s0,k0.updateProjectionMatrix();P7.setFromMatrixPosition(c.matrixWorld),k0.position.copy(P7),m$.copy(k0.position),m$.add(S5[M0]),k0.up.copy(j5[M0]),k0.lookAt(m$),k0.updateMatrixWorld(),YJ.makeTranslation(-P7.x,-P7.y,-P7.z),rK.multiplyMatrices(k0.projectionMatrix,k0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(rK,k0.coordinateSystem,k0.reversedDepth)}else x.updateMatrices(c);Z=x.getFrustum(),E(w,L,x.camera,c,this.type)}if(x.isPointLightShadow!==!0&&this.type===d8)S(x,L);x.needsUpdate=!1}O=this.type,D.needsUpdate=!1,J.setRenderTarget(z,l,C)};function S(A,w){let L=Q.update(B);if(q.defines.VSM_SAMPLES!==A.blurSamples)q.defines.VSM_SAMPLES=A.blurSamples,R.defines.VSM_SAMPLES=A.blurSamples,q.needsUpdate=!0,R.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new aJ(K.x,K.y,{format:H8,type:w9});q.uniforms.shadow_pass.value=A.map.depthTexture,q.uniforms.resolution.value=A.mapSize,q.uniforms.radius.value=A.radius,J.setRenderTarget(A.mapPass),J.clear(),J.renderBufferDirect(w,null,L,q,B,null),R.uniforms.shadow_pass.value=A.mapPass.texture,R.uniforms.resolution.value=A.mapSize,R.uniforms.radius.value=A.radius,J.setRenderTarget(A.map),J.clear(),J.renderBufferDirect(w,null,L,R,B,null)}function _(A,w,L,z){let l=null,C=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)l=C;else if(l=L.isPointLight===!0?H:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let p=l.uuid,o=w.uuid,g=U[p];if(g===void 0)g={},U[p]=g;let u=g[o];if(u===void 0)u=l.clone(),g[o]=u,w.addEventListener("dispose",P);l=u}if(l.visible=w.visible,l.wireframe=w.wireframe,z===d8)l.side=w.shadowSide!==null?w.shadowSide:w.side;else l.side=w.shadowSide!==null?w.shadowSide:F[w.side];if(l.alphaMap=w.alphaMap,l.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,l.map=w.map,l.clipShadows=w.clipShadows,l.clippingPlanes=w.clippingPlanes,l.clipIntersection=w.clipIntersection,l.displacementMap=w.displacementMap,l.displacementScale=w.displacementScale,l.displacementBias=w.displacementBias,l.wireframeLinewidth=w.wireframeLinewidth,l.linewidth=w.linewidth,L.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let p=J.properties.get(l);p.light=L}return l}function E(A,w,L,z,l){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&l===d8)&&(!A.frustumCulled||Z.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let o=Q.update(A),g=A.material;if(Array.isArray(g)){let u=o.groups;for(let c=0,x=u.length;c<x;c++){let t=u[c],e=g[t.materialIndex];if(e&&e.visible){let G0=_(A,e,z,l);A.onBeforeShadow(J,A,w,L,o,G0,t),J.renderBufferDirect(L,null,o,G0,A,t),A.onAfterShadow(J,A,w,L,o,G0,t)}}}else if(g.visible){let u=_(A,g,z,l);A.onBeforeShadow(J,A,w,L,o,u,null),J.renderBufferDirect(L,null,o,u,A,null),A.onAfterShadow(J,A,w,L,o,u,null)}}}let p=A.children;for(let o=0,g=p.length;o<g;o++)E(p[o],w,L,z,l)}function P(A){A.target.removeEventListener("dispose",P);for(let L in U){let z=U[L],l=A.target.uuid;if(l in z)z[l].dispose(),delete z[l]}}}function f5(J,Q){function $(){let f=!1,X0=new HJ,n=null,H0=new HJ(0,0,0,0);return{setMask:function(E0){if(n!==E0&&!f)J.colorMask(E0,E0,E0,E0),n=E0},setLocked:function(E0){f=E0},setClear:function(E0,r,U0,w0,t0){if(t0===!0)E0*=w0,r*=w0,U0*=w0;if(X0.set(E0,r,U0,w0),H0.equals(X0)===!1)J.clearColor(E0,r,U0,w0),H0.copy(X0)},reset:function(){f=!1,n=null,H0.set(-1,0,0,0)}}}function Z(){let f=!1,X0=!1,n=null,H0=null,E0=null;return{setReversed:function(r){if(X0!==r){let U0=Q.get("EXT_clip_control");if(r)U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.ZERO_TO_ONE_EXT);else U0.clipControlEXT(U0.LOWER_LEFT_EXT,U0.NEGATIVE_ONE_TO_ONE_EXT);X0=r;let w0=E0;E0=null,this.setClear(w0)}},getReversed:function(){return X0},setTest:function(r){if(r)D0(J.DEPTH_TEST);else P0(J.DEPTH_TEST)},setMask:function(r){if(n!==r&&!f)J.depthMask(r),n=r},setFunc:function(r){if(X0)r=BK[r];if(H0!==r){switch(r){case sZ:J.depthFunc(J.NEVER);break;case iZ:J.depthFunc(J.ALWAYS);break;case oZ:J.depthFunc(J.LESS);break;case EQ:J.depthFunc(J.LEQUAL);break;case aZ:J.depthFunc(J.EQUAL);break;case rZ:J.depthFunc(J.GEQUAL);break;case tZ:J.depthFunc(J.GREATER);break;case eZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}H0=r}},setLocked:function(r){f=r},setClear:function(r){if(E0!==r){if(E0=r,X0)r=1-r;J.clearDepth(r)}},reset:function(){f=!1,n=null,H0=null,E0=null,X0=!1}}}function K(){let f=!1,X0=null,n=null,H0=null,E0=null,r=null,U0=null,w0=null,t0=null;return{setTest:function(l0){if(!f)if(l0)D0(J.STENCIL_TEST);else P0(J.STENCIL_TEST)},setMask:function(l0){if(X0!==l0&&!f)J.stencilMask(l0),X0=l0},setFunc:function(l0,nJ,bJ){if(n!==l0||H0!==nJ||E0!==bJ)J.stencilFunc(l0,nJ,bJ),n=l0,H0=nJ,E0=bJ},setOp:function(l0,nJ,bJ){if(r!==l0||U0!==nJ||w0!==bJ)J.stencilOp(l0,nJ,bJ),r=l0,U0=nJ,w0=bJ},setLocked:function(l0){f=l0},setClear:function(l0){if(t0!==l0)J.clearStencil(l0),t0=l0},reset:function(){f=!1,X0=null,n=null,H0=null,E0=null,r=null,U0=null,w0=null,t0=null}}}let W=new $,X=new Z,Y=new K,H=new WeakMap,U=new WeakMap,N={},F={},q={},R=new WeakMap,V=[],B=null,D=!1,O=null,S=null,_=null,E=null,P=null,A=null,w=null,L=new g0(0,0,0),z=0,l=!1,C=null,p=null,o=null,g=null,u=null,c=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,t=0,e=J.getParameter(J.VERSION);if(e.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(e)[1]),x=t>=1;else if(e.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(e)[1]),x=t>=2;let G0=null,M0={},k0=J.getParameter(J.SCISSOR_BOX),YJ=J.getParameter(J.VIEWPORT),s0=new HJ().fromArray(k0),i=new HJ().fromArray(YJ);function Y0(f,X0,n,H0){let E0=new Uint8Array(4),r=J.createTexture();J.bindTexture(f,r),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let U0=0;U0<n;U0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(X0,0,J.RGBA,1,1,H0,0,J.RGBA,J.UNSIGNED_BYTE,E0);else J.texImage2D(X0+U0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,E0);return r}let O0={};O0[J.TEXTURE_2D]=Y0(J.TEXTURE_2D,J.TEXTURE_2D,1),O0[J.TEXTURE_CUBE_MAP]=Y0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),O0[J.TEXTURE_2D_ARRAY]=Y0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),O0[J.TEXTURE_3D]=Y0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),D0(J.DEPTH_TEST),X.setFunc(EQ),yJ(!1),a0(NQ),D0(J.CULL_FACE),v0(F9);function D0(f){if(N[f]!==!0)J.enable(f),N[f]=!0}function P0(f){if(N[f]!==!1)J.disable(f),N[f]=!1}function p0(f,X0){if(q[f]!==X0){if(J.bindFramebuffer(f,X0),q[f]=X0,f===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=X0;if(f===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=X0;return!0}return!1}function f0(f,X0){let n=V,H0=!1;if(f){if(n=R.get(X0),n===void 0)n=[],R.set(X0,n);let E0=f.textures;if(n.length!==E0.length||n[0]!==J.COLOR_ATTACHMENT0){for(let r=0,U0=E0.length;r<U0;r++)n[r]=J.COLOR_ATTACHMENT0+r;n.length=E0.length,H0=!0}}else if(n[0]!==J.BACK)n[0]=J.BACK,H0=!0;if(H0)J.drawBuffers(n)}function y0(f){if(B!==f)return J.useProgram(f),B=f,!0;return!1}let o0={[c8]:J.FUNC_ADD,[_Z]:J.FUNC_SUBTRACT,[wZ]:J.FUNC_REVERSE_SUBTRACT};o0[TZ]=J.MIN,o0[SZ]=J.MAX;let m0={[jZ]:J.ZERO,[vZ]:J.ONE,[fZ]:J.SRC_COLOR,[bZ]:J.SRC_ALPHA,[lZ]:J.SRC_ALPHA_SATURATE,[pZ]:J.DST_COLOR,[xZ]:J.DST_ALPHA,[yZ]:J.ONE_MINUS_SRC_COLOR,[hZ]:J.ONE_MINUS_SRC_ALPHA,[mZ]:J.ONE_MINUS_DST_COLOR,[gZ]:J.ONE_MINUS_DST_ALPHA,[dZ]:J.CONSTANT_COLOR,[uZ]:J.ONE_MINUS_CONSTANT_COLOR,[cZ]:J.CONSTANT_ALPHA,[nZ]:J.ONE_MINUS_CONSTANT_ALPHA};function v0(f,X0,n,H0,E0,r,U0,w0,t0,l0){if(f===F9){if(D===!0)P0(J.BLEND),D=!1;return}if(D===!1)D0(J.BLEND),D=!0;if(f!==CZ){if(f!==O||l0!==l){if(S!==c8||P!==c8)J.blendEquation(J.FUNC_ADD),S=c8,P=c8;if(l0)switch(f){case F7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case FQ:J.blendFunc(J.ONE,J.ONE);break;case OQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case DQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:C0("WebGLState: Invalid blending: ",f);break}else switch(f){case F7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case FQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case OQ:C0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case DQ:C0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:C0("WebGLState: Invalid blending: ",f);break}_=null,E=null,A=null,w=null,L.set(0,0,0),z=0,O=f,l=l0}return}if(E0=E0||X0,r=r||n,U0=U0||H0,X0!==S||E0!==P)J.blendEquationSeparate(o0[X0],o0[E0]),S=X0,P=E0;if(n!==_||H0!==E||r!==A||U0!==w)J.blendFuncSeparate(m0[n],m0[H0],m0[r],m0[U0]),_=n,E=H0,A=r,w=U0;if(w0.equals(L)===!1||t0!==z)J.blendColor(w0.r,w0.g,w0.b,t0),L.copy(w0),z=t0;O=f,l=!1}function NJ(f,X0){f.side===N9?P0(J.CULL_FACE):D0(J.CULL_FACE);let n=f.side===vJ;if(X0)n=!n;yJ(n),f.blending===F7&&f.transparent===!1?v0(F9):v0(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),W.setMask(f.colorWrite);let H0=f.stencilWrite;if(Y.setTest(H0),H0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);UJ(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?D0(J.SAMPLE_ALPHA_TO_COVERAGE):P0(J.SAMPLE_ALPHA_TO_COVERAGE)}function yJ(f){if(C!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);C=f}}function a0(f){if(f!==IZ){if(D0(J.CULL_FACE),f!==p)if(f===NQ)J.cullFace(J.BACK);else if(f===AZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else P0(J.CULL_FACE);p=f}function VJ(f){if(f!==o){if(x)J.lineWidth(f);o=f}}function UJ(f,X0,n){if(f){if(D0(J.POLYGON_OFFSET_FILL),g!==X0||u!==n){if(g=X0,u=n,X.getReversed())X0=-X0;J.polygonOffset(X0,n)}}else P0(J.POLYGON_OFFSET_FILL)}function qJ(f){if(f)D0(J.SCISSOR_TEST);else P0(J.SCISSOR_TEST)}function y(f){if(f===void 0)f=J.TEXTURE0+c-1;if(G0!==f)J.activeTexture(f),G0=f}function AJ(f,X0,n){if(n===void 0)if(G0===null)n=J.TEXTURE0+c-1;else n=G0;let H0=M0[n];if(H0===void 0)H0={type:void 0,texture:void 0},M0[n]=H0;if(H0.type!==f||H0.texture!==X0){if(G0!==n)J.activeTexture(n),G0=n;J.bindTexture(f,X0||O0[f]),H0.type=f,H0.texture=X0}}function u0(){let f=M0[G0];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function r0(){try{J.compressedTexImage2D(...arguments)}catch(f){C0("WebGLState:",f)}}function M(){try{J.compressedTexImage3D(...arguments)}catch(f){C0("WebGLState:",f)}}function k(){try{J.texSubImage2D(...arguments)}catch(f){C0("WebGLState:",f)}}function j(){try{J.texSubImage3D(...arguments)}catch(f){C0("WebGLState:",f)}}function m(){try{J.compressedTexSubImage2D(...arguments)}catch(f){C0("WebGLState:",f)}}function a(){try{J.compressedTexSubImage3D(...arguments)}catch(f){C0("WebGLState:",f)}}function Q0(){try{J.texStorage2D(...arguments)}catch(f){C0("WebGLState:",f)}}function W0(){try{J.texStorage3D(...arguments)}catch(f){C0("WebGLState:",f)}}function d(){try{J.texImage2D(...arguments)}catch(f){C0("WebGLState:",f)}}function s(){try{J.texImage3D(...arguments)}catch(f){C0("WebGLState:",f)}}function F0(f){if(F[f]!==void 0)return F[f];else return J.getParameter(f)}function V0(f,X0){if(F[f]!==X0)J.pixelStorei(f,X0),F[f]=X0}function q0(f){if(s0.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),s0.copy(f)}function $0(f){if(i.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),i.copy(f)}function I0(f,X0){let n=U.get(X0);if(n===void 0)n=new WeakMap,U.set(X0,n);let H0=n.get(f);if(H0===void 0)H0=J.getUniformBlockIndex(X0,f.name),n.set(f,H0)}function A0(f,X0){let H0=U.get(X0).get(f);if(H.get(X0)!==H0)J.uniformBlockBinding(X0,H0,f.__bindingPointIndex),H.set(X0,H0)}function c0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},F={},G0=null,M0={},q={},R=new WeakMap,V=[],B=null,D=!1,O=null,S=null,_=null,E=null,P=null,A=null,w=null,L=new g0(0,0,0),z=0,l=!1,C=null,p=null,o=null,g=null,u=null,s0.set(0,0,J.canvas.width,J.canvas.height),i.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:D0,disable:P0,bindFramebuffer:p0,drawBuffers:f0,useProgram:y0,setBlending:v0,setMaterial:NJ,setFlipSided:yJ,setCullFace:a0,setLineWidth:VJ,setPolygonOffset:UJ,setScissorTest:qJ,activeTexture:y,bindTexture:AJ,unbindTexture:u0,compressedTexImage2D:r0,compressedTexImage3D:M,texImage2D:d,texImage3D:s,pixelStorei:V0,getParameter:F0,updateUBOMapping:I0,uniformBlockBinding:A0,texStorage2D:Q0,texStorage3D:W0,texSubImage2D:k,texSubImage3D:j,compressedTexSubImage2D:m,compressedTexSubImage3D:a,scissor:q0,viewport:$0,reset:c0}}function y5(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new x0,N=new WeakMap,F=new Set,q,R=new WeakMap,V=!1;try{V=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function B(M,k){return V?new OffscreenCanvas(M,k):G7("canvas")}function D(M,k,j){let m=1,a=r0(M);if(a.width>j||a.height>j)m=j/Math.max(a.width,a.height);if(m<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let Q0=Math.floor(m*a.width),W0=Math.floor(m*a.height);if(q===void 0)q=B(Q0,W0);let d=k?B(Q0,W0):q;return d.width=Q0,d.height=W0,d.getContext("2d").drawImage(M,0,0,Q0,W0),_0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+Q0+"x"+W0+")."),d}else{if("data"in M)_0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return M}return M}function O(M){return M.generateMipmaps}function S(M){J.generateMipmap(M)}function _(M){if(M.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function E(M,k,j,m,a,Q0=!1){if(M!==null){if(J[M]!==void 0)return J[M];_0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let W0;if(m){if(W0=Q.get("EXT_texture_norm16"),!W0)_0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let d=k;if(k===J.RED){if(j===J.FLOAT)d=J.R32F;if(j===J.HALF_FLOAT)d=J.R16F;if(j===J.UNSIGNED_BYTE)d=J.R8;if(j===J.UNSIGNED_SHORT&&W0)d=W0.R16_EXT;if(j===J.SHORT&&W0)d=W0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(j===J.UNSIGNED_BYTE)d=J.R8UI;if(j===J.UNSIGNED_SHORT)d=J.R16UI;if(j===J.UNSIGNED_INT)d=J.R32UI;if(j===J.BYTE)d=J.R8I;if(j===J.SHORT)d=J.R16I;if(j===J.INT)d=J.R32I}if(k===J.RG){if(j===J.FLOAT)d=J.RG32F;if(j===J.HALF_FLOAT)d=J.RG16F;if(j===J.UNSIGNED_BYTE)d=J.RG8;if(j===J.UNSIGNED_SHORT&&W0)d=W0.RG16_EXT;if(j===J.SHORT&&W0)d=W0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(j===J.UNSIGNED_BYTE)d=J.RG8UI;if(j===J.UNSIGNED_SHORT)d=J.RG16UI;if(j===J.UNSIGNED_INT)d=J.RG32UI;if(j===J.BYTE)d=J.RG8I;if(j===J.SHORT)d=J.RG16I;if(j===J.INT)d=J.RG32I}if(k===J.RGB_INTEGER){if(j===J.UNSIGNED_BYTE)d=J.RGB8UI;if(j===J.UNSIGNED_SHORT)d=J.RGB16UI;if(j===J.UNSIGNED_INT)d=J.RGB32UI;if(j===J.BYTE)d=J.RGB8I;if(j===J.SHORT)d=J.RGB16I;if(j===J.INT)d=J.RGB32I}if(k===J.RGBA_INTEGER){if(j===J.UNSIGNED_BYTE)d=J.RGBA8UI;if(j===J.UNSIGNED_SHORT)d=J.RGBA16UI;if(j===J.UNSIGNED_INT)d=J.RGBA32UI;if(j===J.BYTE)d=J.RGBA8I;if(j===J.SHORT)d=J.RGBA16I;if(j===J.INT)d=J.RGBA32I}if(k===J.RGB){if(j===J.UNSIGNED_SHORT&&W0)d=W0.RGB16_EXT;if(j===J.SHORT&&W0)d=W0.RGB16_SNORM_EXT;if(j===J.UNSIGNED_INT_5_9_9_9_REV)d=J.RGB9_E5;if(j===J.UNSIGNED_INT_10F_11F_11F_REV)d=J.R11F_G11F_B10F}if(k===J.RGBA){let s=Q0?Y$:d0.getTransfer(a);if(j===J.FLOAT)d=J.RGBA32F;if(j===J.HALF_FLOAT)d=J.RGBA16F;if(j===J.UNSIGNED_BYTE)d=s===WJ?J.SRGB8_ALPHA8:J.RGBA8;if(j===J.UNSIGNED_SHORT&&W0)d=W0.RGBA16_EXT;if(j===J.SHORT&&W0)d=W0.RGBA16_SNORM_EXT;if(j===J.UNSIGNED_SHORT_4_4_4_4)d=J.RGBA4;if(j===J.UNSIGNED_SHORT_5_5_5_1)d=J.RGB5_A1}if(d===J.R16F||d===J.R32F||d===J.RG16F||d===J.RG32F||d===J.RGBA16F||d===J.RGBA32F)Q.get("EXT_color_buffer_float");return d}function P(M,k){let j;if(M){if(k===null||k===c9||k===s8)j=J.DEPTH24_STENCIL8;else if(k===_9)j=J.DEPTH32F_STENCIL8;else if(k===R7)j=J.DEPTH24_STENCIL8,_0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===c9||k===s8)j=J.DEPTH_COMPONENT24;else if(k===_9)j=J.DEPTH_COMPONENT32F;else if(k===R7)j=J.DEPTH_COMPONENT16;return j}function A(M,k){if(O(M)===!0||M.isFramebufferTexture&&M.minFilter!==u9&&M.minFilter!==RJ)return Math.log2(Math.max(k.width,k.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return k.mipmaps.length;else return 1}function w(M){let k=M.target;if(k.removeEventListener("dispose",w),z(k),k.isVideoTexture)N.delete(k);if(k.isHTMLTexture)F.delete(k)}function L(M){let k=M.target;k.removeEventListener("dispose",L),C(k)}function z(M){let k=Z.get(M);if(k.__webglInit===void 0)return;let j=M.source,m=R.get(j);if(m){let a=m[k.__cacheKey];if(a.usedTimes--,a.usedTimes===0)l(M);if(Object.keys(m).length===0)R.delete(j)}Z.remove(M)}function l(M){let k=Z.get(M);J.deleteTexture(k.__webglTexture);let j=M.source,m=R.get(j);delete m[k.__cacheKey],X.memory.textures--}function C(M){let k=Z.get(M);if(M.depthTexture)M.depthTexture.dispose(),Z.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let m=0;m<6;m++){if(Array.isArray(k.__webglFramebuffer[m]))for(let a=0;a<k.__webglFramebuffer[m].length;a++)J.deleteFramebuffer(k.__webglFramebuffer[m][a]);else J.deleteFramebuffer(k.__webglFramebuffer[m]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[m])}else{if(Array.isArray(k.__webglFramebuffer))for(let m=0;m<k.__webglFramebuffer.length;m++)J.deleteFramebuffer(k.__webglFramebuffer[m]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let m=0;m<k.__webglColorRenderbuffer.length;m++)if(k.__webglColorRenderbuffer[m])J.deleteRenderbuffer(k.__webglColorRenderbuffer[m])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let j=M.textures;for(let m=0,a=j.length;m<a;m++){let Q0=Z.get(j[m]);if(Q0.__webglTexture)J.deleteTexture(Q0.__webglTexture),X.memory.textures--;Z.remove(j[m])}Z.remove(M)}let p=0;function o(){p=0}function g(){return p}function u(M){p=M}function c(){let M=p;if(M>=K.maxTextures)_0("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+K.maxTextures);return p+=1,M}function x(M){let k=[];return k.push(M.wrapS),k.push(M.wrapT),k.push(M.wrapR||0),k.push(M.magFilter),k.push(M.minFilter),k.push(M.anisotropy),k.push(M.internalFormat),k.push(M.format),k.push(M.type),k.push(M.generateMipmaps),k.push(M.premultiplyAlpha),k.push(M.flipY),k.push(M.unpackAlignment),k.push(M.colorSpace),k.join()}function t(M,k){let j=Z.get(M);if(M.isVideoTexture)AJ(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&j.__version!==M.version){let m=M.image;if(m===null)_0("WebGLRenderer: Texture marked for update but no image data found.");else if(m.complete===!1)_0("WebGLRenderer: Texture marked for update but image is incomplete");else{P0(j,M,k);return}}else if(M.isExternalTexture)j.__webglTexture=M.sourceTexture?M.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,j.__webglTexture,J.TEXTURE0+k)}function e(M,k){let j=Z.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&j.__version!==M.version){P0(j,M,k);return}else if(M.isExternalTexture)j.__webglTexture=M.sourceTexture?M.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,j.__webglTexture,J.TEXTURE0+k)}function G0(M,k){let j=Z.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&j.__version!==M.version){P0(j,M,k);return}$.bindTexture(J.TEXTURE_3D,j.__webglTexture,J.TEXTURE0+k)}function M0(M,k){let j=Z.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&j.__version!==M.version){p0(j,M,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,j.__webglTexture,J.TEXTURE0+k)}let k0={[ZK]:J.REPEAT,[Y6]:J.CLAMP_TO_EDGE,[KK]:J.MIRRORED_REPEAT},YJ={[u9]:J.NEAREST,[WK]:J.NEAREST_MIPMAP_NEAREST,[E7]:J.NEAREST_MIPMAP_LINEAR,[RJ]:J.LINEAR,[H6]:J.LINEAR_MIPMAP_NEAREST,[W8]:J.LINEAR_MIPMAP_LINEAR},s0={[OK]:J.NEVER,[LK]:J.ALWAYS,[DK]:J.LESS,[D6]:J.LEQUAL,[EK]:J.EQUAL,[E6]:J.GEQUAL,[RK]:J.GREATER,[kK]:J.NOTEQUAL};function i(M,k){if(k.type===_9&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===RJ||k.magFilter===H6||k.magFilter===E7||k.magFilter===W8||k.minFilter===RJ||k.minFilter===H6||k.minFilter===E7||k.minFilter===W8))_0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(M,J.TEXTURE_WRAP_S,k0[k.wrapS]),J.texParameteri(M,J.TEXTURE_WRAP_T,k0[k.wrapT]),M===J.TEXTURE_3D||M===J.TEXTURE_2D_ARRAY)J.texParameteri(M,J.TEXTURE_WRAP_R,k0[k.wrapR]);if(J.texParameteri(M,J.TEXTURE_MAG_FILTER,YJ[k.magFilter]),J.texParameteri(M,J.TEXTURE_MIN_FILTER,YJ[k.minFilter]),k.compareFunction)J.texParameteri(M,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(M,J.TEXTURE_COMPARE_FUNC,s0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===u9)return;if(k.minFilter!==E7&&k.minFilter!==W8)return;if(k.type===_9&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let j=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(M,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,K.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function Y0(M,k){let j=!1;if(M.__webglInit===void 0)M.__webglInit=!0,k.addEventListener("dispose",w);let m=k.source,a=R.get(m);if(a===void 0)a={},R.set(m,a);let Q0=x(k);if(Q0!==M.__cacheKey){if(a[Q0]===void 0)a[Q0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,j=!0;a[Q0].usedTimes++;let W0=a[M.__cacheKey];if(W0!==void 0){if(a[M.__cacheKey].usedTimes--,W0.usedTimes===0)l(k)}M.__cacheKey=Q0,M.__webglTexture=a[Q0].texture}return j}function O0(M,k,j){return Math.floor(Math.floor(M/j)/k)}function D0(M,k,j,m){let Q0=M.updateRanges;if(Q0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,j,m,k.data);else{Q0.sort((V0,q0)=>V0.start-q0.start);let W0=0;for(let V0=1;V0<Q0.length;V0++){let q0=Q0[W0],$0=Q0[V0],I0=q0.start+q0.count,A0=O0($0.start,k.width,4),c0=O0(q0.start,k.width,4);if($0.start<=I0+1&&A0===c0&&O0($0.start+$0.count-1,k.width,4)===A0)q0.count=Math.max(q0.count,$0.start+$0.count-q0.start);else++W0,Q0[W0]=$0}Q0.length=W0+1;let d=$.getParameter(J.UNPACK_ROW_LENGTH),s=$.getParameter(J.UNPACK_SKIP_PIXELS),F0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let V0=0,q0=Q0.length;V0<q0;V0++){let $0=Q0[V0],I0=Math.floor($0.start/4),A0=Math.ceil($0.count/4),c0=I0%k.width,f=Math.floor(I0/k.width),X0=A0,n=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,c0),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,c0,f,X0,1,j,m,k.data)}M.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,d),$.pixelStorei(J.UNPACK_SKIP_PIXELS,s),$.pixelStorei(J.UNPACK_SKIP_ROWS,F0)}}function P0(M,k,j){let m=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)m=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)m=J.TEXTURE_3D;let a=Y0(M,k),Q0=k.source;$.bindTexture(m,M.__webglTexture,J.TEXTURE0+j);let W0=Z.get(Q0);if(Q0.version!==W0.__version||a===!0){if($.activeTexture(J.TEXTURE0+j),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let n=d0.getPrimaries(d0.workingColorSpace),H0=k.colorSpace===U8?null:d0.getPrimaries(k.colorSpace),E0=k.colorSpace===U8||n===H0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,E0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let s=D(k.image,!1,K.maxTextureSize);s=u0(k,s);let F0=W.convert(k.format,k.colorSpace),V0=W.convert(k.type),q0=E(k.internalFormat,F0,V0,k.normalized,k.colorSpace,k.isVideoTexture);i(m,k);let $0,I0=k.mipmaps,A0=k.isVideoTexture!==!0,c0=W0.__version===void 0||a===!0,f=Q0.dataReady,X0=A(k,s);if(k.isDepthTexture){if(q0=P(k.format===Y8,k.type),c0)if(A0)$.texStorage2D(J.TEXTURE_2D,1,q0,s.width,s.height);else $.texImage2D(J.TEXTURE_2D,0,q0,s.width,s.height,0,F0,V0,null)}else if(k.isDataTexture)if(I0.length>0){if(A0&&c0)$.texStorage2D(J.TEXTURE_2D,X0,q0,I0[0].width,I0[0].height);for(let n=0,H0=I0.length;n<H0;n++)if($0=I0[n],A0){if(f)$.texSubImage2D(J.TEXTURE_2D,n,0,0,$0.width,$0.height,F0,V0,$0.data)}else $.texImage2D(J.TEXTURE_2D,n,q0,$0.width,$0.height,0,F0,V0,$0.data);k.generateMipmaps=!1}else if(A0){if(c0)$.texStorage2D(J.TEXTURE_2D,X0,q0,s.width,s.height);if(f)D0(k,s,F0,V0)}else $.texImage2D(J.TEXTURE_2D,0,q0,s.width,s.height,0,F0,V0,s.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(A0&&c0)$.texStorage3D(J.TEXTURE_2D_ARRAY,X0,q0,I0[0].width,I0[0].height,s.depth);for(let n=0,H0=I0.length;n<H0;n++)if($0=I0[n],k.format!==O9)if(F0!==null)if(A0){if(f)if(k.layerUpdates.size>0){let E0=y$($0.width,$0.height,k.format,k.type);for(let r of k.layerUpdates){let U0=$0.data.subarray(r*E0/$0.data.BYTES_PER_ELEMENT,(r+1)*E0/$0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,r,$0.width,$0.height,1,F0,U0)}k.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,$0.width,$0.height,s.depth,F0,$0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,n,q0,$0.width,$0.height,s.depth,0,$0.data,0,0);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,$0.width,$0.height,s.depth,F0,V0,$0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,n,q0,$0.width,$0.height,s.depth,0,F0,V0,$0.data)}else{if(A0&&c0)$.texStorage2D(J.TEXTURE_2D,X0,q0,I0[0].width,I0[0].height);for(let n=0,H0=I0.length;n<H0;n++)if($0=I0[n],k.format!==O9)if(F0!==null)if(A0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,n,0,0,$0.width,$0.height,F0,$0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,n,q0,$0.width,$0.height,0,$0.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A0){if(f)$.texSubImage2D(J.TEXTURE_2D,n,0,0,$0.width,$0.height,F0,V0,$0.data)}else $.texImage2D(J.TEXTURE_2D,n,q0,$0.width,$0.height,0,F0,V0,$0.data)}else if(k.isDataArrayTexture)if(A0){if(c0)$.texStorage3D(J.TEXTURE_2D_ARRAY,X0,q0,s.width,s.height,s.depth);if(f)if(k.layerUpdates.size>0){let n=y$(s.width,s.height,k.format,k.type);for(let H0 of k.layerUpdates){let E0=s.data.subarray(H0*n/s.data.BYTES_PER_ELEMENT,(H0+1)*n/s.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,H0,s.width,s.height,1,F0,V0,E0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,F0,V0,s.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,q0,s.width,s.height,s.depth,0,F0,V0,s.data);else if(k.isData3DTexture)if(A0){if(c0)$.texStorage3D(J.TEXTURE_3D,X0,q0,s.width,s.height,s.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,F0,V0,s.data)}else $.texImage3D(J.TEXTURE_3D,0,q0,s.width,s.height,s.depth,0,F0,V0,s.data);else if(k.isFramebufferTexture){if(c0)if(A0)$.texStorage2D(J.TEXTURE_2D,X0,q0,s.width,s.height);else{let{width:n,height:H0}=s;for(let E0=0;E0<X0;E0++)$.texImage2D(J.TEXTURE_2D,E0,q0,n,H0,0,F0,V0,null),n>>=1,H0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let n=J.canvas;if(!n.hasAttribute("layoutsubtree"))n.setAttribute("layoutsubtree","true");if(s.parentNode!==n){n.appendChild(s),F.add(k),n.onpaint=(H0)=>{let E0=H0.changedElements;for(let r of F)if(E0.includes(r.image))r.needsUpdate=!0},n.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,s);else{let{RGBA:E0,RGBA:r,UNSIGNED_BYTE:U0}=J;J.texElementImage2D(J.TEXTURE_2D,0,E0,r,U0,s)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(I0.length>0){if(A0&&c0){let n=r0(I0[0]);$.texStorage2D(J.TEXTURE_2D,X0,q0,n.width,n.height)}for(let n=0,H0=I0.length;n<H0;n++)if($0=I0[n],A0){if(f)$.texSubImage2D(J.TEXTURE_2D,n,0,0,F0,V0,$0)}else $.texImage2D(J.TEXTURE_2D,n,q0,F0,V0,$0);k.generateMipmaps=!1}else if(A0){if(c0){let n=r0(s);$.texStorage2D(J.TEXTURE_2D,X0,q0,n.width,n.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,F0,V0,s)}else $.texImage2D(J.TEXTURE_2D,0,q0,F0,V0,s);if(O(k))S(m);if(W0.__version=Q0.version,k.onUpdate)k.onUpdate(k)}M.__version=k.version}function p0(M,k,j){if(k.image.length!==6)return;let m=Y0(M,k),a=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,M.__webglTexture,J.TEXTURE0+j);let Q0=Z.get(a);if(a.version!==Q0.__version||m===!0){$.activeTexture(J.TEXTURE0+j);let W0=d0.getPrimaries(d0.workingColorSpace),d=k.colorSpace===U8?null:d0.getPrimaries(k.colorSpace),s=k.colorSpace===U8||W0===d?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let F0=k.isCompressedTexture||k.image[0].isCompressedTexture,V0=k.image[0]&&k.image[0].isDataTexture,q0=[];for(let r=0;r<6;r++){if(!F0&&!V0)q0[r]=D(k.image[r],!0,K.maxCubemapSize);else q0[r]=V0?k.image[r].image:k.image[r];q0[r]=u0(k,q0[r])}let $0=q0[0],I0=W.convert(k.format,k.colorSpace),A0=W.convert(k.type),c0=E(k.internalFormat,I0,A0,k.normalized,k.colorSpace),f=k.isVideoTexture!==!0,X0=Q0.__version===void 0||m===!0,n=a.dataReady,H0=A(k,$0);i(J.TEXTURE_CUBE_MAP,k);let E0;if(F0){if(f&&X0)$.texStorage2D(J.TEXTURE_CUBE_MAP,H0,c0,$0.width,$0.height);for(let r=0;r<6;r++){E0=q0[r].mipmaps;for(let U0=0;U0<E0.length;U0++){let w0=E0[U0];if(k.format!==O9)if(I0!==null)if(f){if(n)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0,0,0,w0.width,w0.height,I0,w0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0,c0,w0.width,w0.height,0,w0.data);else _0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0,0,0,w0.width,w0.height,I0,A0,w0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0,c0,w0.width,w0.height,0,I0,A0,w0.data)}}}else{if(E0=k.mipmaps,f&&X0){if(E0.length>0)H0++;let r=r0(q0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,H0,c0,r.width,r.height)}for(let r=0;r<6;r++)if(V0){if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,q0[r].width,q0[r].height,I0,A0,q0[r].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,c0,q0[r].width,q0[r].height,0,I0,A0,q0[r].data);for(let U0=0;U0<E0.length;U0++){let t0=E0[U0].image[r].image;if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0+1,0,0,t0.width,t0.height,I0,A0,t0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0+1,c0,t0.width,t0.height,0,I0,A0,t0.data)}}else{if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,I0,A0,q0[r])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,c0,I0,A0,q0[r]);for(let U0=0;U0<E0.length;U0++){let w0=E0[U0];if(f){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0+1,0,0,I0,A0,w0.image[r])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,U0+1,c0,I0,A0,w0.image[r])}}}if(O(k))S(J.TEXTURE_CUBE_MAP);if(Q0.__version=a.version,k.onUpdate)k.onUpdate(k)}M.__version=k.version}function f0(M,k,j,m,a,Q0){let W0=W.convert(j.format,j.colorSpace),d=W.convert(j.type),s=E(j.internalFormat,W0,d,j.normalized,j.colorSpace),F0=Z.get(k),V0=Z.get(j);if(V0.__renderTarget=k,!F0.__hasExternalTextures){let q0=Math.max(1,k.width>>Q0),$0=Math.max(1,k.height>>Q0);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,Q0,s,q0,$0,k.depth,0,W0,d,null);else $.texImage2D(a,Q0,s,q0,$0,0,W0,d,null)}if($.bindFramebuffer(J.FRAMEBUFFER,M),y(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,m,a,V0.__webglTexture,0,qJ(k));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,m,a,V0.__webglTexture,Q0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function y0(M,k,j){if(J.bindRenderbuffer(J.RENDERBUFFER,M),k.depthBuffer){let m=k.depthTexture,a=m&&m.isDepthTexture?m.type:null,Q0=P(k.stencilBuffer,a),W0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(y(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,qJ(k),Q0,k.width,k.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,qJ(k),Q0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,Q0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,M)}else{let m=k.textures;for(let a=0;a<m.length;a++){let Q0=m[a],W0=W.convert(Q0.format,Q0.colorSpace),d=W.convert(Q0.type),s=E(Q0.internalFormat,W0,d,Q0.normalized,Q0.colorSpace);if(y(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,qJ(k),s,k.width,k.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,qJ(k),s,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,s,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function o0(M,k,j){let m=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,M),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let a=Z.get(k.depthTexture);if(a.__renderTarget=k,!a.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(m){if(a.__webglInit===void 0)a.__webglInit=!0,k.depthTexture.addEventListener("dispose",w);if(a.__webglTexture===void 0){a.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,a.__webglTexture),i(J.TEXTURE_CUBE_MAP,k.depthTexture);let F0=W.convert(k.depthTexture.format),V0=W.convert(k.depthTexture.type),q0;if(k.depthTexture.format===X8)q0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===Y8)q0=J.DEPTH24_STENCIL8;for(let $0=0;$0<6;$0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,q0,k.width,k.height,0,F0,V0,null)}}else t(k.depthTexture,0);let Q0=a.__webglTexture,W0=qJ(k),d=m?J.TEXTURE_CUBE_MAP_POSITIVE_X+j:J.TEXTURE_2D,s=k.depthTexture.format===Y8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===X8)if(y(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,d,Q0,0,W0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,d,Q0,0);else if(k.depthTexture.format===Y8)if(y(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,d,Q0,0,W0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,d,Q0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function m0(M){let k=Z.get(M),j=M.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==M.depthTexture){let m=M.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(m){let a=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,m.removeEventListener("dispose",a)};m.addEventListener("dispose",a),k.__depthDisposeCallback=a}k.__boundDepthTexture=m}if(M.depthTexture&&!k.__autoAllocateDepthBuffer)if(j)for(let m=0;m<6;m++)o0(k.__webglFramebuffer[m],M,m);else{let m=M.texture.mipmaps;if(m&&m.length>0)o0(k.__webglFramebuffer[0],M,0);else o0(k.__webglFramebuffer,M,0)}else if(j){k.__webglDepthbuffer=[];for(let m=0;m<6;m++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[m]),k.__webglDepthbuffer[m]===void 0)k.__webglDepthbuffer[m]=J.createRenderbuffer(),y0(k.__webglDepthbuffer[m],M,!1);else{let a=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=k.__webglDepthbuffer[m];J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Q0)}}else{let m=M.texture.mipmaps;if(m&&m.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),y0(k.__webglDepthbuffer,M,!1);else{let a=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,Q0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function v0(M,k,j){let m=Z.get(M);if(k!==void 0)f0(m.__webglFramebuffer,M,M.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(j!==void 0)m0(M)}function NJ(M){let k=M.texture,j=Z.get(M),m=Z.get(k);M.addEventListener("dispose",L);let a=M.textures,Q0=M.isWebGLCubeRenderTarget===!0,W0=a.length>1;if(!W0){if(m.__webglTexture===void 0)m.__webglTexture=J.createTexture();m.__version=k.version,X.memory.textures++}if(Q0){j.__webglFramebuffer=[];for(let d=0;d<6;d++)if(k.mipmaps&&k.mipmaps.length>0){j.__webglFramebuffer[d]=[];for(let s=0;s<k.mipmaps.length;s++)j.__webglFramebuffer[d][s]=J.createFramebuffer()}else j.__webglFramebuffer[d]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){j.__webglFramebuffer=[];for(let d=0;d<k.mipmaps.length;d++)j.__webglFramebuffer[d]=J.createFramebuffer()}else j.__webglFramebuffer=J.createFramebuffer();if(W0)for(let d=0,s=a.length;d<s;d++){let F0=Z.get(a[d]);if(F0.__webglTexture===void 0)F0.__webglTexture=J.createTexture(),X.memory.textures++}if(M.samples>0&&y(M)===!1){j.__webglMultisampledFramebuffer=J.createFramebuffer(),j.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let d=0;d<a.length;d++){let s=a[d];j.__webglColorRenderbuffer[d]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,j.__webglColorRenderbuffer[d]);let F0=W.convert(s.format,s.colorSpace),V0=W.convert(s.type),q0=E(s.internalFormat,F0,V0,s.normalized,s.colorSpace,M.isXRRenderTarget===!0),$0=qJ(M);J.renderbufferStorageMultisample(J.RENDERBUFFER,$0,q0,M.width,M.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+d,J.RENDERBUFFER,j.__webglColorRenderbuffer[d])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),M.depthBuffer)j.__webglDepthRenderbuffer=J.createRenderbuffer(),y0(j.__webglDepthRenderbuffer,M,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Q0){$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture),i(J.TEXTURE_CUBE_MAP,k);for(let d=0;d<6;d++)if(k.mipmaps&&k.mipmaps.length>0)for(let s=0;s<k.mipmaps.length;s++)f0(j.__webglFramebuffer[d][s],M,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,s);else f0(j.__webglFramebuffer[d],M,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+d,0);if(O(k))S(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(W0){for(let d=0,s=a.length;d<s;d++){let F0=a[d],V0=Z.get(F0),q0=J.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)q0=M.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(q0,V0.__webglTexture),i(q0,F0),f0(j.__webglFramebuffer,M,F0,J.COLOR_ATTACHMENT0+d,q0,0),O(F0))S(q0)}$.unbindTexture()}else{let d=J.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)d=M.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(d,m.__webglTexture),i(d,k),k.mipmaps&&k.mipmaps.length>0)for(let s=0;s<k.mipmaps.length;s++)f0(j.__webglFramebuffer[s],M,k,J.COLOR_ATTACHMENT0,d,s);else f0(j.__webglFramebuffer,M,k,J.COLOR_ATTACHMENT0,d,0);if(O(k))S(d);$.unbindTexture()}if(M.depthBuffer)m0(M)}function yJ(M){let k=M.textures;for(let j=0,m=k.length;j<m;j++){let a=k[j];if(O(a)){let Q0=_(M),W0=Z.get(a).__webglTexture;$.bindTexture(Q0,W0),S(Q0),$.unbindTexture()}}}let a0=[],VJ=[];function UJ(M){if(M.samples>0){if(y(M)===!1){let{textures:k,width:j,height:m}=M,a=J.COLOR_BUFFER_BIT,Q0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,W0=Z.get(M),d=k.length>1;if(d)for(let F0=0;F0<k.length;F0++)$.bindFramebuffer(J.FRAMEBUFFER,W0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+F0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,W0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+F0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,W0.__webglMultisampledFramebuffer);let s=M.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,W0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,W0.__webglFramebuffer);for(let F0=0;F0<k.length;F0++){if(M.resolveDepthBuffer){if(M.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(d){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,W0.__webglColorRenderbuffer[F0]);let V0=Z.get(k[F0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,V0,0)}if(J.blitFramebuffer(0,0,j,m,0,0,j,m,a,J.NEAREST),H===!0){if(a0.length=0,VJ.length=0,a0.push(J.COLOR_ATTACHMENT0+F0),M.depthBuffer&&M.resolveDepthBuffer===!1)a0.push(Q0),VJ.push(Q0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,VJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,a0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),d)for(let F0=0;F0<k.length;F0++){$.bindFramebuffer(J.FRAMEBUFFER,W0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+F0,J.RENDERBUFFER,W0.__webglColorRenderbuffer[F0]);let V0=Z.get(k[F0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,W0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+F0,J.TEXTURE_2D,V0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,W0.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&H){let k=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function qJ(M){return Math.min(K.maxSamples,M.samples)}function y(M){let k=Z.get(M);return M.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function AJ(M){let k=X.render.frame;if(N.get(M)!==k)N.set(M,k),M.update()}function u0(M,k){let{colorSpace:j,format:m,type:a}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return k;if(j!==X$&&j!==U8)if(d0.getTransfer(j)===WJ){if(m!==O9||a!==K9)_0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else C0("WebGLTextures: Unsupported texture color space:",j);return k}function r0(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)U.width=M.naturalWidth||M.width,U.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)U.width=M.displayWidth,U.height=M.displayHeight;else U.width=M.width,U.height=M.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=o,this.getTextureUnits=g,this.setTextureUnits=u,this.setTexture2D=t,this.setTexture2DArray=e,this.setTexture3D=G0,this.setTextureCube=M0,this.rebindTextures=v0,this.setupRenderTarget=NJ,this.updateRenderTargetMipmap=yJ,this.updateMultisampleRenderTarget=UJ,this.setupDepthRenderbuffer=m0,this.setupFrameBufferTexture=f0,this.useMultisampledRTT=y,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function b5(J,Q){function $(Z,K=U8){let W,X=d0.getTransfer(K);if(Z===K9)return J.UNSIGNED_BYTE;if(Z===IQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===AQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===HK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===UK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===XK)return J.BYTE;if(Z===YK)return J.SHORT;if(Z===R7)return J.UNSIGNED_SHORT;if(Z===BQ)return J.INT;if(Z===c9)return J.UNSIGNED_INT;if(Z===_9)return J.FLOAT;if(Z===w9)return J.HALF_FLOAT;if(Z===qK)return J.ALPHA;if(Z===GK)return J.RGB;if(Z===O9)return J.RGBA;if(Z===X8)return J.DEPTH_COMPONENT;if(Z===Y8)return J.DEPTH_STENCIL;if(Z===NK)return J.RED;if(Z===PQ)return J.RED_INTEGER;if(Z===H8)return J.RG;if(Z===CQ)return J.RG_INTEGER;if(Z===_Q)return J.RGBA_INTEGER;if(Z===U6||Z===q6||Z===G6||Z===N6)if(X===WJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===U6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===q6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===G6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===N6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===U6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===q6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===G6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===N6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===wQ||Z===TQ||Z===SQ||Z===jQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===wQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===TQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===SQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===jQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===vQ||Z===fQ||Z===yQ||Z===bQ||Z===hQ||Z===F6||Z===xQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===vQ||Z===fQ)return X===WJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===yQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===bQ)return W.COMPRESSED_R11_EAC;if(Z===hQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===F6)return W.COMPRESSED_RG11_EAC;if(Z===xQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===gQ||Z===pQ||Z===mQ||Z===lQ||Z===dQ||Z===uQ||Z===cQ||Z===nQ||Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===rQ||Z===tQ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===gQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===pQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===mQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===lQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===dQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===uQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===cQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===nQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===sQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===iQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===oQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===aQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===rQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===tQ)return X===WJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===eQ||Z===J$||Z===Q$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===eQ)return X===WJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===J$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===Q$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===$$||Z===Z$||Z===O6||Z===K$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===$$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===Z$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===O6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===K$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===s8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var h5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x5=`
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

}`;class UW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new B6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new rJ({vertexShader:h5,fragmentShader:x5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new T0(new cJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qW extends T9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,H=null,U=null,N=null,F=null,q=null,R=null,V=typeof XRWebGLBinding<"u",B=new UW,D={},O=Q.getContextAttributes(),S=null,_=null,E=[],P=[],A=new x0,w=null,L=new SJ;L.viewport=new HJ;let z=new SJ;z.viewport=new HJ;let l=[L,z],C=new S$,p=null,o=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let Y0=E[i];if(Y0===void 0)Y0=new M7,E[i]=Y0;return Y0.getTargetRaySpace()},this.getControllerGrip=function(i){let Y0=E[i];if(Y0===void 0)Y0=new M7,E[i]=Y0;return Y0.getGripSpace()},this.getHand=function(i){let Y0=E[i];if(Y0===void 0)Y0=new M7,E[i]=Y0;return Y0.getHandSpace()};function g(i){let Y0=P.indexOf(i.inputSource);if(Y0===-1)return;let O0=E[Y0];if(O0!==void 0)O0.update(i.inputSource,i.frame,H||W),O0.dispatchEvent({type:i.type,data:i.inputSource})}function u(){Z.removeEventListener("select",g),Z.removeEventListener("selectstart",g),Z.removeEventListener("selectend",g),Z.removeEventListener("squeeze",g),Z.removeEventListener("squeezestart",g),Z.removeEventListener("squeezeend",g),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",c);for(let i=0;i<E.length;i++){let Y0=P[i];if(Y0===null)continue;P[i]=null,E[i].disconnect(Y0)}p=null,o=null,B.reset();for(let i in D)delete D[i];J.setRenderTarget(S),q=null,F=null,N=null,Z=null,_=null,s0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(A.width,A.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if(K=i,$.isPresenting===!0)_0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(X=i,$.isPresenting===!0)_0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(i){H=i},this.getBaseLayer=function(){return F!==null?F:q},this.getBinding=function(){if(N===null&&V)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return R},this.getSession=function(){return Z},this.setSession=async function(i){if(Z=i,Z!==null){if(S=J.getRenderTarget(),Z.addEventListener("select",g),Z.addEventListener("selectstart",g),Z.addEventListener("selectend",g),Z.addEventListener("squeeze",g),Z.addEventListener("squeezestart",g),Z.addEventListener("squeezeend",g),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",c),O.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(A),!(V&&("createProjectionLayer"in XRWebGLBinding.prototype))){let O0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,O0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),_=new aJ(q.framebufferWidth,q.framebufferHeight,{format:O9,type:K9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let O0=null,D0=null,P0=null;if(O.depth)P0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,O0=O.stencil?Y8:X8,D0=O.stencil?s8:c9;let p0={colorFormat:Q.RGBA8,depthFormat:P0,scaleFactor:K};N=this.getBinding(),F=N.createProjectionLayer(p0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),_=new aJ(F.textureWidth,F.textureHeight,{format:O9,type:K9,depthTexture:new s9(F.textureWidth,F.textureHeight,D0,void 0,void 0,void 0,void 0,void 0,void 0,O0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await Z.requestReferenceSpace(X),s0.setContext(Z),s0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function c(i){for(let Y0=0;Y0<i.removed.length;Y0++){let O0=i.removed[Y0],D0=P.indexOf(O0);if(D0>=0)P[D0]=null,E[D0].disconnect(O0)}for(let Y0=0;Y0<i.added.length;Y0++){let O0=i.added[Y0],D0=P.indexOf(O0);if(D0===-1){for(let p0=0;p0<E.length;p0++)if(p0>=P.length){P.push(O0),D0=p0;break}else if(P[p0]===null){P[p0]=O0,D0=p0;break}if(D0===-1)break}let P0=E[D0];if(P0)P0.connect(O0)}}let x=new h,t=new h;function e(i,Y0,O0){x.setFromMatrixPosition(Y0.matrixWorld),t.setFromMatrixPosition(O0.matrixWorld);let D0=x.distanceTo(t),P0=Y0.projectionMatrix.elements,p0=O0.projectionMatrix.elements,f0=P0[14]/(P0[10]-1),y0=P0[14]/(P0[10]+1),o0=(P0[9]+1)/P0[5],m0=(P0[9]-1)/P0[5],v0=(P0[8]-1)/P0[0],NJ=(p0[8]+1)/p0[0],yJ=f0*v0,a0=f0*NJ,VJ=D0/(-v0+NJ),UJ=VJ*-v0;if(Y0.matrixWorld.decompose(i.position,i.quaternion,i.scale),i.translateX(UJ),i.translateZ(VJ),i.matrixWorld.compose(i.position,i.quaternion,i.scale),i.matrixWorldInverse.copy(i.matrixWorld).invert(),P0[10]===-1)i.projectionMatrix.copy(Y0.projectionMatrix),i.projectionMatrixInverse.copy(Y0.projectionMatrixInverse);else{let qJ=f0+VJ,y=y0+VJ,AJ=yJ-UJ,u0=a0+(D0-UJ),r0=o0*y0/y*qJ,M=m0*y0/y*qJ;i.projectionMatrix.makePerspective(AJ,u0,r0,M,qJ,y),i.projectionMatrixInverse.copy(i.projectionMatrix).invert()}}function G0(i,Y0){if(Y0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices(Y0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(Z===null)return;let{near:Y0,far:O0}=i;if(B.texture!==null){if(B.depthNear>0)Y0=B.depthNear;if(B.depthFar>0)O0=B.depthFar}if(C.near=z.near=L.near=Y0,C.far=z.far=L.far=O0,p!==C.near||o!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),p=C.near,o=C.far;C.layers.mask=i.layers.mask|6,L.layers.mask=C.layers.mask&-5,z.layers.mask=C.layers.mask&-3;let D0=i.parent,P0=C.cameras;G0(C,D0);for(let p0=0;p0<P0.length;p0++)G0(P0[p0],D0);if(P0.length===2)e(C,L,z);else C.projectionMatrix.copy(L.projectionMatrix);M0(i,C,D0)};function M0(i,Y0,O0){if(O0===null)i.matrix.copy(Y0.matrixWorld);else i.matrix.copy(O0.matrixWorld),i.matrix.invert(),i.matrix.multiply(Y0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy(Y0.projectionMatrix),i.projectionMatrixInverse.copy(Y0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=Z6*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(F===null&&q===null)return;return Y},this.setFoveation=function(i){if(Y=i,F!==null)F.fixedFoveation=i;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=i},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(C)},this.getCameraTexture=function(i){return D[i]};let k0=null;function YJ(i,Y0){if(U=Y0.getViewerPose(H||W),R=Y0,U!==null){let O0=U.views;if(q!==null)J.setRenderTargetFramebuffer(_,q.framebuffer),J.setRenderTarget(_);let D0=!1;if(O0.length!==C.cameras.length)C.cameras.length=0,D0=!0;for(let y0=0;y0<O0.length;y0++){let o0=O0[y0],m0=null;if(q!==null)m0=q.getViewport(o0);else{let NJ=N.getViewSubImage(F,o0);if(m0=NJ.viewport,y0===0)J.setRenderTargetTextures(_,NJ.colorTexture,NJ.depthStencilTexture),J.setRenderTarget(_)}let v0=l[y0];if(v0===void 0)v0=new SJ,v0.layers.enable(y0),v0.viewport=new HJ,l[y0]=v0;if(v0.matrix.fromArray(o0.transform.matrix),v0.matrix.decompose(v0.position,v0.quaternion,v0.scale),v0.projectionMatrix.fromArray(o0.projectionMatrix),v0.projectionMatrixInverse.copy(v0.projectionMatrix).invert(),v0.viewport.set(m0.x,m0.y,m0.width,m0.height),y0===0)C.matrix.copy(v0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(D0===!0)C.cameras.push(v0)}let P0=Z.enabledFeatures;if(P0&&P0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&V){N=$.getBinding();let y0=N.getDepthInformation(O0[0]);if(y0&&y0.isValid&&y0.texture)B.init(y0,Z.renderState)}if(P0&&P0.includes("camera-access")&&V){J.state.unbindTexture(),N=$.getBinding();for(let y0=0;y0<O0.length;y0++){let o0=O0[y0].camera;if(o0){let m0=D[o0];if(!m0)m0=new B6,D[o0]=m0;let v0=N.getCameraImage(o0);m0.sourceTexture=v0}}}}for(let O0=0;O0<E.length;O0++){let D0=P[O0],P0=E[O0];if(D0!==null&&P0!==void 0)P0.update(D0,Y0,H||W)}if(k0)k0(i,Y0);if(Y0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Y0});R=null}let s0=new tK;s0.setAnimationLoop(YJ),this.setAnimationLoop=function(i){k0=i},this.dispose=function(){}}}var g5=new $J,GW=new j0;GW.set(-1,0,0,0,1,0,0,0,1);function p5(J,Q){function $(D,O){if(D.matrixAutoUpdate===!0)D.updateMatrix();O.value.copy(D.matrix)}function Z(D,O){if(O.color.getRGB(D.fogColor.value,D$(J)),O.isFog)D.fogNear.value=O.near,D.fogFar.value=O.far;else if(O.isFogExp2)D.fogDensity.value=O.density}function K(D,O,S,_,E){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)W(D,O);else if(O.isMeshLambertMaterial){if(W(D,O),O.envMap)D.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)W(D,O),F(D,O);else if(O.isMeshPhongMaterial){if(W(D,O),N(D,O),O.envMap)D.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(W(D,O),q(D,O),O.isMeshPhysicalMaterial)R(D,O,E)}else if(O.isMeshMatcapMaterial)W(D,O),V(D,O);else if(O.isMeshDepthMaterial)W(D,O);else if(O.isMeshDistanceMaterial)W(D,O),B(D,O);else if(O.isMeshNormalMaterial)W(D,O);else if(O.isLineBasicMaterial){if(X(D,O),O.isLineDashedMaterial)Y(D,O)}else if(O.isPointsMaterial)H(D,O,S,_);else if(O.isSpriteMaterial)U(D,O);else if(O.isShadowMaterial)D.color.value.copy(O.color),D.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function W(D,O){if(D.opacity.value=O.opacity,O.color)D.diffuse.value.copy(O.color);if(O.emissive)D.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)D.map.value=O.map,$(O.map,D.mapTransform);if(O.alphaMap)D.alphaMap.value=O.alphaMap,$(O.alphaMap,D.alphaMapTransform);if(O.bumpMap){if(D.bumpMap.value=O.bumpMap,$(O.bumpMap,D.bumpMapTransform),D.bumpScale.value=O.bumpScale,O.side===vJ)D.bumpScale.value*=-1}if(O.normalMap){if(D.normalMap.value=O.normalMap,$(O.normalMap,D.normalMapTransform),D.normalScale.value.copy(O.normalScale),O.side===vJ)D.normalScale.value.negate()}if(O.displacementMap)D.displacementMap.value=O.displacementMap,$(O.displacementMap,D.displacementMapTransform),D.displacementScale.value=O.displacementScale,D.displacementBias.value=O.displacementBias;if(O.emissiveMap)D.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,D.emissiveMapTransform);if(O.specularMap)D.specularMap.value=O.specularMap,$(O.specularMap,D.specularMapTransform);if(O.alphaTest>0)D.alphaTest.value=O.alphaTest;let S=Q.get(O),_=S.envMap,E=S.envMapRotation;if(_){if(D.envMap.value=_,D.envMapRotation.value.setFromMatrix4(g5.makeRotationFromEuler(E)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)D.envMapRotation.value.premultiply(GW);D.reflectivity.value=O.reflectivity,D.ior.value=O.ior,D.refractionRatio.value=O.refractionRatio}if(O.lightMap)D.lightMap.value=O.lightMap,D.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,D.lightMapTransform);if(O.aoMap)D.aoMap.value=O.aoMap,D.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,D.aoMapTransform)}function X(D,O){if(D.diffuse.value.copy(O.color),D.opacity.value=O.opacity,O.map)D.map.value=O.map,$(O.map,D.mapTransform)}function Y(D,O){D.dashSize.value=O.dashSize,D.totalSize.value=O.dashSize+O.gapSize,D.scale.value=O.scale}function H(D,O,S,_){if(D.diffuse.value.copy(O.color),D.opacity.value=O.opacity,D.size.value=O.size*S,D.scale.value=_*0.5,O.map)D.map.value=O.map,$(O.map,D.uvTransform);if(O.alphaMap)D.alphaMap.value=O.alphaMap,$(O.alphaMap,D.alphaMapTransform);if(O.alphaTest>0)D.alphaTest.value=O.alphaTest}function U(D,O){if(D.diffuse.value.copy(O.color),D.opacity.value=O.opacity,D.rotation.value=O.rotation,O.map)D.map.value=O.map,$(O.map,D.mapTransform);if(O.alphaMap)D.alphaMap.value=O.alphaMap,$(O.alphaMap,D.alphaMapTransform);if(O.alphaTest>0)D.alphaTest.value=O.alphaTest}function N(D,O){D.specular.value.copy(O.specular),D.shininess.value=Math.max(O.shininess,0.0001)}function F(D,O){if(O.gradientMap)D.gradientMap.value=O.gradientMap}function q(D,O){if(D.metalness.value=O.metalness,O.metalnessMap)D.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=O.roughness,O.roughnessMap)D.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,D.roughnessMapTransform);if(O.envMap)D.envMapIntensity.value=O.envMapIntensity}function R(D,O,S){if(D.ior.value=O.ior,O.sheen>0){if(D.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),D.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)D.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,D.sheenColorMapTransform);if(O.sheenRoughnessMap)D.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(D.clearcoat.value=O.clearcoat,D.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)D.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,D.clearcoatMapTransform);if(O.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(D.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===vJ)D.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)D.dispersion.value=O.dispersion;if(O.iridescence>0){if(D.iridescence.value=O.iridescence,D.iridescenceIOR.value=O.iridescenceIOR,D.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)D.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,D.iridescenceMapTransform);if(O.iridescenceThicknessMap)D.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(O.transmission>0){if(D.transmission.value=O.transmission,D.transmissionSamplerMap.value=S.texture,D.transmissionSamplerSize.value.set(S.width,S.height),O.transmissionMap)D.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=O.thickness,O.thicknessMap)D.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=O.attenuationDistance,D.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(D.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)D.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=O.specularIntensity,D.specularColor.value.copy(O.specularColor),O.specularColorMap)D.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,D.specularColorMapTransform);if(O.specularIntensityMap)D.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,D.specularIntensityMapTransform)}function V(D,O){if(O.matcap)D.matcap.value=O.matcap}function B(D,O){let S=Q.get(O).light;D.referencePosition.value.setFromMatrixPosition(S.matrixWorld),D.nearDistance.value=S.shadow.camera.near,D.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function m5(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(E,P){let A=P.program;Z.uniformBlockBinding(E,A)}function U(E,P){let A=K[E.id];if(A===void 0)D(E),A=N(E),K[E.id]=A,E.addEventListener("dispose",S);let w=P.program;Z.updateUBOMapping(E,w);let L=Q.render.frame;if(W[E.id]!==L)q(E),W[E.id]=L}function N(E){let P=F();E.__bindingPointIndex=P;let A=J.createBuffer(),w=E.__size,L=E.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,w,L),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,P,A),A}function F(){for(let E=0;E<Y;E++)if(X.indexOf(E)===-1)return X.push(E),E;return C0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(E){let P=K[E.id],A=E.uniforms,w=E.__cache;J.bindBuffer(J.UNIFORM_BUFFER,P);for(let L=0,z=A.length;L<z;L++){let l=A[L];if(Array.isArray(l))for(let C=0,p=l.length;C<p;C++)R(l[C],L,C,w);else R(l,L,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(E,P,A,w){if(B(E,P,A,w)===!0){let{__offset:L,value:z}=E;if(Array.isArray(z)){let l=0;for(let C=0;C<z.length;C++){let p=z[C],o=O(p);if(V(p,E.__data,l),typeof p!=="number"&&typeof p!=="boolean"&&!p.isMatrix3&&!ArrayBuffer.isView(p))l+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else V(z,E.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,L,E.__data)}}function V(E,P,A){if(typeof E==="number"||typeof E==="boolean")P[0]=E;else if(E.isMatrix3)P[0]=E.elements[0],P[1]=E.elements[1],P[2]=E.elements[2],P[3]=0,P[4]=E.elements[3],P[5]=E.elements[4],P[6]=E.elements[5],P[7]=0,P[8]=E.elements[6],P[9]=E.elements[7],P[10]=E.elements[8],P[11]=0;else if(ArrayBuffer.isView(E))P.set(new E.constructor(E.buffer,E.byteOffset,P.length));else E.toArray(P,A)}function B(E,P,A,w){let L=E.value,z=P+"_"+A;if(w[z]===void 0){if(typeof L==="number"||typeof L==="boolean")w[z]=L;else if(ArrayBuffer.isView(L))w[z]=L.slice();else w[z]=L.clone();return!0}else{let l=w[z];if(typeof L==="number"||typeof L==="boolean"){if(l!==L)return w[z]=L,!0}else if(ArrayBuffer.isView(L))return!0;else if(l.equals(L)===!1)return l.copy(L),!0}return!1}function D(E){let P=E.uniforms,A=0,w=16;for(let z=0,l=P.length;z<l;z++){let C=Array.isArray(P[z])?P[z]:[P[z]];for(let p=0,o=C.length;p<o;p++){let g=C[p],u=Array.isArray(g.value)?g.value:[g.value];for(let c=0,x=u.length;c<x;c++){let t=u[c],e=O(t),G0=A%w,M0=G0%e.boundary,k0=G0+M0;if(A+=M0,k0!==0&&w-k0<e.storage)A+=w-k0;g.__data=new Float32Array(e.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=A,A+=e.storage}}}let L=A%w;if(L>0)A+=w-L;return E.__size=A,E.__cache={},this}function O(E){let P={boundary:0,storage:0};if(typeof E==="number"||typeof E==="boolean")P.boundary=4,P.storage=4;else if(E.isVector2)P.boundary=8,P.storage=8;else if(E.isVector3||E.isColor)P.boundary=16,P.storage=12;else if(E.isVector4)P.boundary=16,P.storage=16;else if(E.isMatrix3)P.boundary=48,P.storage=48;else if(E.isMatrix4)P.boundary=64,P.storage=64;else if(E.isTexture)_0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(E))P.boundary=16,P.storage=E.byteLength;else _0("WebGLRenderer: Unsupported uniform value type.",E);return P}function S(E){let P=E.target;P.removeEventListener("dispose",S);let A=X.indexOf(P.__bindingPointIndex);X.splice(A,1),J.deleteBuffer(K[P.id]),delete K[P.id],delete W[P.id]}function _(){for(let E in K)J.deleteBuffer(K[E]);X=[],K={},W={}}return{bind:H,update:U,dispose:_}}var l5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),E9=null;function d5(){if(E9===null)E9=new M6(l5,16,16,H8,w9),E9.name="DFG_LUT",E9.minFilter=RJ,E9.magFilter=RJ,E9.wrapS=Y6,E9.wrapT=Y6,E9.generateMipmaps=!1,E9.needsUpdate=!0;return E9}class c${constructor(J={}){let{canvas:Q=VK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:q=K9}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=W;let V=q,B=new Set([_Q,CQ,PQ]),D=new Set([K9,c9,R7,s8,IQ,AQ]),O=new Uint32Array(4),S=new Int32Array(4),_=new h,E=null,P=null,A=[],w=[],L=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Z9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,l=!1,C=null,p=null,o=null,g=null;this._outputColorSpace=D9;let u=0,c=0,x=null,t=-1,e=null,G0=new HJ,M0=new HJ,k0=null,YJ=new g0(0),s0=0,i=Q.width,Y0=Q.height,O0=1,D0=null,P0=null,p0=new HJ(0,0,i,Y0),f0=new HJ(0,0,i,Y0),y0=!1,o0=new z7,m0=!1,v0=!1,NJ=new $J,yJ=new h,a0=new HJ,VJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},UJ=!1;function qJ(){return x===null?O0:1}let y=$;function AJ(G,I){return Q.getContext(G,I)}try{let G={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BZ}`);if(Q.addEventListener("webglcontextlost",w0,!1),Q.addEventListener("webglcontextrestored",t0,!1),Q.addEventListener("webglcontextcreationerror",l0,!1),y===null){if(y=AJ("webgl2",G),y===null)if(AJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(G){throw C0("WebGLRenderer: "+G.message),G}let u0,r0,M,k,j,m,a,Q0,W0,d,s,F0,V0,q0,$0,I0,A0,c0,f,X0,n,H0,E0;function r(){if(u0=new aH(y),u0.init(),n=new b5(y,u0),r0=new lH(y,u0,J,n),M=new f5(y,u0),r0.reversedDepthBuffer&&F)M.buffers.depth.setReversed(!0);p=y.createFramebuffer(),o=y.createFramebuffer(),g=y.createFramebuffer(),k=new eH(y),j=new V5,m=new y5(y,u0,M,j,r0,n,k),a=new oH(z),Q0=new ZX(y),H0=new pH(y,Q0),W0=new rH(y,Q0,k,H0),d=new QU(y,W0,Q0,H0,k),c0=new JU(y,r0,m),$0=new dH(j),s=new L5(z,a,u0,r0,H0,$0),F0=new p5(z,j),V0=new z5,q0=new _5(u0),A0=new gH(z,a,M,d,R,Y),I0=new v5(z,d,r0),E0=new m5(y,k,r0,M),f=new mH(y,u0,k),X0=new tH(y,u0,k),k.programs=s.programs,z.capabilities=r0,z.extensions=u0,z.properties=j,z.renderLists=V0,z.shadowMap=I0,z.state=M,z.info=k}if(r(),V!==K9)L=new ZU(V,Q.width,Q.height,X,Z,K);let U0=new qW(z,y);this.xr=U0,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let G=u0.get("WEBGL_lose_context");if(G)G.loseContext()},this.forceContextRestore=function(){let G=u0.get("WEBGL_lose_context");if(G)G.restoreContext()},this.getPixelRatio=function(){return O0},this.setPixelRatio=function(G){if(G===void 0)return;O0=G,this.setSize(i,Y0,!1)},this.getSize=function(G){return G.set(i,Y0)},this.setSize=function(G,I,T=!0){if(U0.isPresenting){_0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(i=G,Y0=I,Q.width=Math.floor(G*O0),Q.height=Math.floor(I*O0),T===!0)Q.style.width=G+"px",Q.style.height=I+"px";if(L!==null)L.setSize(Q.width,Q.height);this.setViewport(0,0,G,I)},this.getDrawingBufferSize=function(G){return G.set(i*O0,Y0*O0).floor()},this.setDrawingBufferSize=function(G,I,T){i=G,Y0=I,O0=T,Q.width=Math.floor(G*T),Q.height=Math.floor(I*T),this.setViewport(0,0,G,I)},this.setEffects=function(G){if(V===K9){C0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(G){for(let I=0;I<G.length;I++)if(G[I].isOutputPass===!0){_0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(G||[])},this.getCurrentViewport=function(G){return G.copy(G0)},this.getViewport=function(G){return G.copy(p0)},this.setViewport=function(G,I,T,b){if(G.isVector4)p0.set(G.x,G.y,G.z,G.w);else p0.set(G,I,T,b);M.viewport(G0.copy(p0).multiplyScalar(O0).round())},this.getScissor=function(G){return G.copy(f0)},this.setScissor=function(G,I,T,b){if(G.isVector4)f0.set(G.x,G.y,G.z,G.w);else f0.set(G,I,T,b);M.scissor(M0.copy(f0).multiplyScalar(O0).round())},this.getScissorTest=function(){return y0},this.setScissorTest=function(G){M.setScissorTest(y0=G)},this.setOpaqueSort=function(G){D0=G},this.setTransparentSort=function(G){P0=G},this.getClearColor=function(G){return G.copy(A0.getClearColor())},this.setClearColor=function(){A0.setClearColor(...arguments)},this.getClearAlpha=function(){return A0.getClearAlpha()},this.setClearAlpha=function(){A0.setClearAlpha(...arguments)},this.clear=function(G=!0,I=!0,T=!0){let b=0;if(G){let v=!1;if(x!==null){let J0=x.texture.format;v=B.has(J0)}if(v){let J0=x.texture.type,Z0=D.has(J0),K0=A0.getClearColor(),R0=A0.getClearAlpha(),z0=K0.r,S0=K0.g,h0=K0.b;if(Z0)O[0]=z0,O[1]=S0,O[2]=h0,O[3]=R0,y.clearBufferuiv(y.COLOR,0,O);else S[0]=z0,S[1]=S0,S[2]=h0,S[3]=R0,y.clearBufferiv(y.COLOR,0,S)}else b|=y.COLOR_BUFFER_BIT}if(I)b|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(T)b|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)y.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(G){G.setRenderer(this),C=G},this.dispose=function(){Q.removeEventListener("webglcontextlost",w0,!1),Q.removeEventListener("webglcontextrestored",t0,!1),Q.removeEventListener("webglcontextcreationerror",l0,!1),A0.dispose(),V0.dispose(),q0.dispose(),j.dispose(),a.dispose(),d.dispose(),H0.dispose(),E0.dispose(),s.dispose(),U0.dispose(),U0.removeEventListener("sessionstart",Q7),U0.removeEventListener("sessionend",z8),Y9.stop()};function w0(G){G.preventDefault(),q$("WebGLRenderer: Context Lost."),l=!0}function t0(){q$("WebGLRenderer: Context Restored."),l=!1;let G=k.autoReset,I=I0.enabled,T=I0.autoUpdate,b=I0.needsUpdate,v=I0.type;r(),k.autoReset=G,I0.enabled=I,I0.autoUpdate=T,I0.needsUpdate=b,I0.type=v}function l0(G){C0("WebGLRenderer: A WebGL context could not be created. Reason: ",G.statusMessage)}function nJ(G){let I=G.target;I.removeEventListener("dispose",nJ),bJ(I)}function bJ(G){b6(G),j.remove(G)}function b6(G){let I=j.get(G).programs;if(I!==void 0){if(I.forEach(function(T){s.releaseProgram(T)}),G.isShaderMaterial)s.releaseShaderCache(G)}}this.renderBufferDirect=function(G,I,T,b,v,J0){if(I===null)I=VJ;let Z0=v.isMesh&&v.matrixWorld.determinantAffine()<0,K0=x6(G,I,T,b,v);M.setMaterial(b,Z0);let R0=T.index,z0=1;if(b.wireframe===!0){if(R0=W0.getWireframeAttribute(T),R0===void 0)return;z0=2}let S0=T.drawRange,h0=T.attributes.position,B0=S0.start*z0,QJ=(S0.start+S0.count)*z0;if(J0!==null)B0=Math.max(B0,J0.start*z0),QJ=Math.min(QJ,(J0.start+J0.count)*z0);if(R0!==null)B0=Math.max(B0,0),QJ=Math.min(QJ,R0.count);else if(h0!==void 0&&h0!==null)B0=Math.max(B0,0),QJ=Math.min(QJ,h0.count);let FJ=QJ-B0;if(FJ<0||FJ===1/0)return;H0.setup(v,b,K0,T,R0);let GJ,ZJ=f;if(R0!==null)GJ=Q0.get(R0),ZJ=X0,ZJ.setIndex(GJ);if(v.isMesh)if(b.wireframe===!0)M.setLineWidth(b.wireframeLinewidth*qJ()),ZJ.setMode(y.LINES);else ZJ.setMode(y.TRIANGLES);else if(v.isLine){let _J=b.linewidth;if(_J===void 0)_J=1;if(M.setLineWidth(_J*qJ()),v.isLineSegments)ZJ.setMode(y.LINES);else if(v.isLineLoop)ZJ.setMode(y.LINE_LOOP);else ZJ.setMode(y.LINE_STRIP)}else if(v.isPoints)ZJ.setMode(y.POINTS);else if(v.isSprite)ZJ.setMode(y.TRIANGLES);if(v.isBatchedMesh)if(!u0.get("WEBGL_multi_draw")){let{_multiDrawStarts:_J,_multiDrawCounts:L0,_multiDrawCount:mJ}=v,i0=R0?Q0.get(R0).bytesPerElement:1,sJ=j.get(b).currentProgram.getUniforms();for(let U9=0;U9<mJ;U9++)sJ.setValue(y,"_gl_DrawID",U9),ZJ.render(_J[U9]/i0,L0[U9])}else ZJ.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else if(v.isInstancedMesh)ZJ.renderInstances(B0,FJ,v.count);else if(T.isInstancedBufferGeometry){let _J=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,L0=Math.min(T.instanceCount,_J);ZJ.renderInstances(B0,FJ,L0)}else ZJ.render(B0,FJ)};function M8(G,I,T){if(G.transparent===!0&&G.side===N9&&G.forceSinglePass===!1)G.side=vJ,G.needsUpdate=!0,f9(G,I,T),G.side=u8,G.needsUpdate=!0,f9(G,I,T),G.side=N9;else f9(G,I,T)}this.compile=function(G,I,T=null){if(T===null)T=G;if(P=q0.get(T),P.init(I),w.push(P),T.traverseVisible(function(v){if(v.isLight&&v.layers.test(I.layers)){if(P.pushLight(v),v.castShadow)P.pushShadow(v)}}),G!==T)G.traverseVisible(function(v){if(v.isLight&&v.layers.test(I.layers)){if(P.pushLight(v),v.castShadow)P.pushShadow(v)}});P.setupLights();let b=new Set;return G.traverse(function(v){if(!(v.isMesh||v.isPoints||v.isLine||v.isSprite))return;let J0=v.material;if(J0)if(Array.isArray(J0))for(let Z0=0;Z0<J0.length;Z0++){let K0=J0[Z0];M8(K0,T,v),b.add(K0)}else M8(J0,T,v),b.add(J0)}),P=w.pop(),b},this.compileAsync=function(G,I,T=null){let b=this.compile(G,I,T);return new Promise((v)=>{function J0(){if(b.forEach(function(Z0){if(j.get(Z0).currentProgram.isReady())b.delete(Z0)}),b.size===0){v(G);return}setTimeout(J0,10)}if(u0.get("KHR_parallel_shader_compile")!==null)J0();else setTimeout(J0,10)})};let J7=null;function h6(G){if(J7)J7(G)}function Q7(){Y9.stop()}function z8(){Y9.start()}let Y9=new tK;if(Y9.setAnimationLoop(h6),typeof self<"u")Y9.setContext(self);this.setAnimationLoop=function(G){J7=G,U0.setAnimationLoop(G),G===null?Y9.stop():Y9.start()},U0.addEventListener("sessionstart",Q7),U0.addEventListener("sessionend",z8),this.render=function(G,I){if(I!==void 0&&I.isCamera!==!0){C0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(C!==null)C.renderStart(G,I);let T=U0.enabled===!0&&U0.isPresenting===!0,b=L!==null&&(x===null||T)&&L.begin(z,x);if(G.matrixWorldAutoUpdate===!0)G.updateMatrixWorld();if(I.parent===null&&I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(U0.enabled===!0&&U0.isPresenting===!0&&(L===null||L.isCompositing()===!1)){if(U0.cameraAutoUpdate===!0)U0.updateCamera(I);I=U0.getCamera()}if(G.isScene===!0)G.onBeforeRender(z,G,I,x);if(P=q0.get(G,w.length),P.init(I),P.state.textureUnits=m.getTextureUnits(),w.push(P),NJ.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),o0.setFromProjectionMatrix(NJ,U$,I.reversedDepth),v0=this.localClippingEnabled,m0=$0.init(this.clippingPlanes,v0),E=V0.get(G,A.length),E.init(),A.push(E),U0.enabled===!0&&U0.isPresenting===!0){let Z0=z.xr.getDepthSensingMesh();if(Z0!==null)H9(Z0,I,-1/0,z.sortObjects)}if(H9(G,I,0,z.sortObjects),E.finish(),z.sortObjects===!0)E.sort(D0,P0,I.reversedDepth);if(UJ=U0.enabled===!1||U0.isPresenting===!1||U0.hasDepthSensing()===!1,UJ)A0.addToRenderList(E,G);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(m0===!0)$0.beginShadows();let v=P.state.shadowsArray;if(I0.render(v,G,I),m0===!0)$0.endShadows();if((b&&L.hasRenderPass())===!1){let{opaque:Z0,transmissive:K0}=E;if(P.setupLights(),I.isArrayCamera){let R0=I.cameras;if(K0.length>0)for(let z0=0,S0=R0.length;z0<S0;z0++){let h0=R0[z0];B8(Z0,K0,G,h0)}if(UJ)A0.render(G);for(let z0=0,S0=R0.length;z0<S0;z0++){let h0=R0[z0];$7(E,G,h0,h0.viewport)}}else{if(K0.length>0)B8(Z0,K0,G,I);if(UJ)A0.render(G);$7(E,G,I)}}if(x!==null&&c===0)m.updateMultisampleRenderTarget(x),m.updateRenderTargetMipmap(x);if(b)L.end(z);if(G.isScene===!0)G.onAfterRender(z,G,I);if(H0.resetDefaultState(),t=-1,e=null,w.pop(),w.length>0){if(P=w[w.length-1],m.setTextureUnits(P.state.textureUnits),m0===!0)$0.setGlobalState(z.clippingPlanes,P.state.camera)}else P=null;if(A.pop(),A.length>0)E=A[A.length-1];else E=null;if(C!==null)C.renderEnd()};function H9(G,I,T,b){if(G.visible===!1)return;if(G.layers.test(I.layers)){if(G.isGroup)T=G.renderOrder;else if(G.isLOD){if(G.autoUpdate===!0)G.update(I)}else if(G.isLightProbeGrid)P.pushLightProbeGrid(G);else if(G.isLight){if(P.pushLight(G),G.castShadow)P.pushShadow(G)}else if(G.isSprite){if(!G.frustumCulled||o0.intersectsSprite(G)){if(b)a0.setFromMatrixPosition(G.matrixWorld).applyMatrix4(NJ);let Z0=d.update(G),K0=G.material;if(K0.visible)E.push(G,Z0,K0,T,a0.z,null)}}else if(G.isMesh||G.isLine||G.isPoints){if(!G.frustumCulled||o0.intersectsObject(G)){let Z0=d.update(G),K0=G.material;if(b){if(G.boundingSphere!==void 0){if(G.boundingSphere===null)G.computeBoundingSphere();a0.copy(G.boundingSphere.center)}else{if(Z0.boundingSphere===null)Z0.computeBoundingSphere();a0.copy(Z0.boundingSphere.center)}a0.applyMatrix4(G.matrixWorld).applyMatrix4(NJ)}if(Array.isArray(K0)){let R0=Z0.groups;for(let z0=0,S0=R0.length;z0<S0;z0++){let h0=R0[z0],B0=K0[h0.materialIndex];if(B0&&B0.visible)E.push(G,Z0,B0,T,a0.z,h0)}}else if(K0.visible)E.push(G,Z0,K0,T,a0.z,null)}}}let J0=G.children;for(let Z0=0,K0=J0.length;Z0<K0;Z0++)H9(J0[Z0],I,T,b)}function $7(G,I,T,b){let{opaque:v,transmissive:J0,transparent:Z0}=G;if(P.setupLightsView(T),m0===!0)$0.setGlobalState(z.clippingPlanes,T);if(b)M.viewport(G0.copy(b));if(v.length>0)r9(v,I,T);if(J0.length>0)r9(J0,I,T);if(Z0.length>0)r9(Z0,I,T);M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function B8(G,I,T,b){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[b.id]===void 0){let B0=u0.has("EXT_color_buffer_half_float")||u0.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[b.id]=new aJ(1,1,{generateMipmaps:!0,type:B0?w9:K9,minFilter:W8,samples:Math.max(4,r0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:d0.workingColorSpace})}let J0=P.state.transmissionRenderTarget[b.id],Z0=b.viewport||G0;J0.setSize(Z0.z*z.transmissionResolutionScale,Z0.w*z.transmissionResolutionScale);let K0=z.getRenderTarget(),R0=z.getActiveCubeFace(),z0=z.getActiveMipmapLevel();if(z.setRenderTarget(J0),z.getClearColor(YJ),s0=z.getClearAlpha(),s0<1)z.setClearColor(16777215,0.5);if(z.clear(),UJ)A0.render(T);let S0=z.toneMapping;z.toneMapping=Z9;let h0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(P.setupLightsView(b),m0===!0)$0.setGlobalState(z.clippingPlanes,b);if(r9(G,T,b),m.updateMultisampleRenderTarget(J0),m.updateRenderTargetMipmap(J0),u0.has("WEBGL_multisampled_render_to_texture")===!1){let B0=!1;for(let QJ=0,FJ=I.length;QJ<FJ;QJ++){let GJ=I[QJ],{object:ZJ,geometry:_J,material:L0,group:mJ}=GJ;if(L0.side===N9&&ZJ.layers.test(b.layers)){let i0=L0.side;L0.side=vJ,L0.needsUpdate=!0,I8(ZJ,T,b,_J,L0,mJ),L0.side=i0,L0.needsUpdate=!0,B0=!0}}if(B0===!0)m.updateMultisampleRenderTarget(J0),m.updateRenderTargetMipmap(J0)}if(z.setRenderTarget(K0,R0,z0),z.setClearColor(YJ,s0),h0!==void 0)b.viewport=h0;z.toneMapping=S0}function r9(G,I,T){let b=I.isScene===!0?I.overrideMaterial:null;for(let v=0,J0=G.length;v<J0;v++){let Z0=G[v],{object:K0,geometry:R0,group:z0}=Z0,S0=Z0.material;if(S0.allowOverride===!0&&b!==null)S0=b;if(K0.layers.test(T.layers))I8(K0,I,T,R0,S0,z0)}}function I8(G,I,T,b,v,J0){if(G.onBeforeRender(z,I,T,b,v,J0),G.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,G.matrixWorld),G.normalMatrix.getNormalMatrix(G.modelViewMatrix),v.onBeforeRender(z,I,T,b,G,J0),v.transparent===!0&&v.side===N9&&v.forceSinglePass===!1)v.side=vJ,v.needsUpdate=!0,z.renderBufferDirect(T,I,b,v,G,J0),v.side=u8,v.needsUpdate=!0,z.renderBufferDirect(T,I,b,v,G,J0),v.side=N9;else z.renderBufferDirect(T,I,b,v,G,J0);G.onAfterRender(z,I,T,b,v,J0)}function f9(G,I,T){if(I.isScene!==!0)I=VJ;let b=j.get(G),v=P.state.lights,J0=P.state.shadowsArray,Z0=v.state.version,K0=s.getParameters(G,v.state,J0,I,T,P.state.lightProbeGridArray),R0=s.getProgramCacheKey(K0),z0=b.programs;b.environment=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,b.fog=I.fog;let S0=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap;if(b.envMap=a.get(G.envMap||b.environment,S0),b.envMapRotation=b.environment!==null&&G.envMap===null?I.environmentRotation:G.envMapRotation,z0===void 0)G.addEventListener("dispose",nJ),z0=new Map,b.programs=z0;let h0=z0.get(R0);if(h0!==void 0){if(b.currentProgram===h0&&b.lightsStateVersion===Z0)return Z7(G,K0),h0}else{if(K0.uniforms=s.getUniforms(G),C!==null&&G.isNodeMaterial)C.build(G,T,K0);G.onBeforeCompile(K0,z),h0=s.acquireProgram(K0,R0),z0.set(R0,h0),b.uniforms=K0.uniforms}let B0=b.uniforms;if(!G.isShaderMaterial&&!G.isRawShaderMaterial||G.clipping===!0)B0.clippingPlanes=$0.uniform;if(Z7(G,K0),b.needsLights=v7(G),b.lightsStateVersion=Z0,b.needsLights)B0.ambientLightColor.value=v.state.ambient,B0.lightProbe.value=v.state.probe,B0.directionalLights.value=v.state.directional,B0.directionalLightShadows.value=v.state.directionalShadow,B0.spotLights.value=v.state.spot,B0.spotLightShadows.value=v.state.spotShadow,B0.rectAreaLights.value=v.state.rectArea,B0.ltc_1.value=v.state.rectAreaLTC1,B0.ltc_2.value=v.state.rectAreaLTC2,B0.pointLights.value=v.state.point,B0.pointLightShadows.value=v.state.pointShadow,B0.hemisphereLights.value=v.state.hemi,B0.directionalShadowMatrix.value=v.state.directionalShadowMatrix,B0.spotLightMatrix.value=v.state.spotLightMatrix,B0.spotLightMap.value=v.state.spotLightMap,B0.pointShadowMatrix.value=v.state.pointShadowMatrix;return b.lightProbeGrid=P.state.lightProbeGridArray.length>0,b.currentProgram=h0,b.uniformsList=null,h0}function j7(G){if(G.uniformsList===null){let I=G.currentProgram.getUniforms();G.uniformsList=_7.seqWithValue(I.seq,G.uniforms)}return G.uniformsList}function Z7(G,I){let T=j.get(G);T.outputColorSpace=I.outputColorSpace,T.batching=I.batching,T.batchingColor=I.batchingColor,T.instancing=I.instancing,T.instancingColor=I.instancingColor,T.instancingMorph=I.instancingMorph,T.skinning=I.skinning,T.morphTargets=I.morphTargets,T.morphNormals=I.morphNormals,T.morphColors=I.morphColors,T.morphTargetsCount=I.morphTargetsCount,T.numClippingPlanes=I.numClippingPlanes,T.numIntersection=I.numClipIntersection,T.vertexAlphas=I.vertexAlphas,T.vertexTangents=I.vertexTangents,T.toneMapping=I.toneMapping}function A8(G,I){if(G.length===0)return null;if(G.length===1)return G[0].texture!==null?G[0]:null;_.setFromMatrixPosition(I.matrixWorld);for(let T=0,b=G.length;T<b;T++){let v=G[T];if(v.texture!==null&&v.boundingBox.containsPoint(_))return v}return null}function x6(G,I,T,b,v){if(I.isScene!==!0)I=VJ;m.resetTextureUnits();let J0=I.fog,Z0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,K0=x===null?z.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:d0.workingColorSpace,R0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z0=a.get(b.envMap||Z0,R0),S0=b.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,h0=!!T.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),B0=!!T.morphAttributes.position,QJ=!!T.morphAttributes.normal,FJ=!!T.morphAttributes.color,GJ=Z9;if(b.toneMapped){if(x===null||x.isXRRenderTarget===!0)GJ=z.toneMapping}let ZJ=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,_J=ZJ!==void 0?ZJ.length:0,L0=j.get(b),mJ=P.state.lights;if(m0===!0){if(v0===!0||G!==e){let XJ=G===e&&b.id===t;$0.setState(b,G,XJ)}}let i0=!1;if(b.version===L0.__version){if(L0.needsLights&&L0.lightsStateVersion!==mJ.state.version)i0=!0;else if(L0.outputColorSpace!==K0)i0=!0;else if(v.isBatchedMesh&&L0.batching===!1)i0=!0;else if(!v.isBatchedMesh&&L0.batching===!0)i0=!0;else if(v.isBatchedMesh&&L0.batchingColor===!0&&v.colorTexture===null)i0=!0;else if(v.isBatchedMesh&&L0.batchingColor===!1&&v.colorTexture!==null)i0=!0;else if(v.isInstancedMesh&&L0.instancing===!1)i0=!0;else if(!v.isInstancedMesh&&L0.instancing===!0)i0=!0;else if(v.isSkinnedMesh&&L0.skinning===!1)i0=!0;else if(!v.isSkinnedMesh&&L0.skinning===!0)i0=!0;else if(v.isInstancedMesh&&L0.instancingColor===!0&&v.instanceColor===null)i0=!0;else if(v.isInstancedMesh&&L0.instancingColor===!1&&v.instanceColor!==null)i0=!0;else if(v.isInstancedMesh&&L0.instancingMorph===!0&&v.morphTexture===null)i0=!0;else if(v.isInstancedMesh&&L0.instancingMorph===!1&&v.morphTexture!==null)i0=!0;else if(L0.envMap!==z0)i0=!0;else if(b.fog===!0&&L0.fog!==J0)i0=!0;else if(L0.numClippingPlanes!==void 0&&(L0.numClippingPlanes!==$0.numPlanes||L0.numIntersection!==$0.numIntersection))i0=!0;else if(L0.vertexAlphas!==S0)i0=!0;else if(L0.vertexTangents!==h0)i0=!0;else if(L0.morphTargets!==B0)i0=!0;else if(L0.morphNormals!==QJ)i0=!0;else if(L0.morphColors!==FJ)i0=!0;else if(L0.toneMapping!==GJ)i0=!0;else if(L0.morphTargetsCount!==_J)i0=!0;else if(!!L0.lightProbeGrid!==P.state.lightProbeGridArray.length>0)i0=!0}else i0=!0,L0.__version=b.version;let sJ=L0.currentProgram;if(i0===!0){if(sJ=f9(b,I,v),C&&b.isNodeMaterial)C.onUpdateProgram(b,sJ,L0)}let U9=!1,y9=!1,P8=!1,KJ=sJ.getUniforms(),OJ=L0.uniforms;if(M.useProgram(sJ.program))U9=!0,y9=!0,P8=!0;if(b.id!==t)t=b.id,y9=!0;if(L0.needsLights){let XJ=A8(P.state.lightProbeGridArray,v);if(L0.lightProbeGrid!==XJ)L0.lightProbeGrid=XJ,y9=!0}if(U9||e!==G){if(M.buffers.depth.getReversed()&&G.reversedDepth!==!0)G._reversedDepth=!0,G.updateProjectionMatrix();KJ.setValue(y,"projectionMatrix",G.projectionMatrix),KJ.setValue(y,"viewMatrix",G.matrixWorldInverse);let h9=KJ.map.cameraPosition;if(h9!==void 0)h9.setValue(y,yJ.setFromMatrixPosition(G.matrixWorld));if(r0.logarithmicDepthBuffer)KJ.setValue(y,"logDepthBufFC",2/(Math.log(G.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)KJ.setValue(y,"isOrthographic",G.isOrthographicCamera===!0);if(e!==G)e=G,y9=!0,P8=!0}if(L0.needsLights){if(mJ.state.directionalShadowMap.length>0)KJ.setValue(y,"directionalShadowMap",mJ.state.directionalShadowMap,m);if(mJ.state.spotShadowMap.length>0)KJ.setValue(y,"spotShadowMap",mJ.state.spotShadowMap,m);if(mJ.state.pointShadowMap.length>0)KJ.setValue(y,"pointShadowMap",mJ.state.pointShadowMap,m)}if(v.isSkinnedMesh){KJ.setOptional(y,v,"bindMatrix"),KJ.setOptional(y,v,"bindMatrixInverse");let XJ=v.skeleton;if(XJ){if(XJ.boneTexture===null)XJ.computeBoneTexture();KJ.setValue(y,"boneTexture",XJ.boneTexture,m)}}if(v.isBatchedMesh){if(KJ.setOptional(y,v,"batchingTexture"),KJ.setValue(y,"batchingTexture",v._matricesTexture,m),KJ.setOptional(y,v,"batchingIdTexture"),KJ.setValue(y,"batchingIdTexture",v._indirectTexture,m),KJ.setOptional(y,v,"batchingColorTexture"),v._colorsTexture!==null)KJ.setValue(y,"batchingColorTexture",v._colorsTexture,m)}let b9=T.morphAttributes;if(b9.position!==void 0||b9.normal!==void 0||b9.color!==void 0)c0.update(v,T,sJ);if(y9||L0.receiveShadow!==v.receiveShadow)L0.receiveShadow=v.receiveShadow,KJ.setValue(y,"receiveShadow",v.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&I.environment!==null)OJ.envMapIntensity.value=I.environmentIntensity;if(OJ.dfgLUT!==void 0)OJ.dfgLUT.value=d5();if(y9){if(KJ.setValue(y,"toneMappingExposure",z.toneMappingExposure),L0.needsLights)g6(OJ,P8);if(J0&&b.fog===!0)F0.refreshFogUniforms(OJ,J0);if(F0.refreshMaterialUniforms(OJ,b,O0,Y0,P.state.transmissionRenderTarget[G.id]),L0.needsLights&&L0.lightProbeGrid){let XJ=L0.lightProbeGrid;OJ.probesSH.value=XJ.texture,OJ.probesMin.value.copy(XJ.boundingBox.min),OJ.probesMax.value.copy(XJ.boundingBox.max),OJ.probesResolution.value.copy(XJ.resolution)}_7.upload(y,j7(L0),OJ,m)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)_7.upload(y,j7(L0),OJ,m),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)KJ.setValue(y,"center",v.center);if(KJ.setValue(y,"modelViewMatrix",v.modelViewMatrix),KJ.setValue(y,"normalMatrix",v.normalMatrix),KJ.setValue(y,"modelMatrix",v.matrixWorld),b.uniformsGroups!==void 0){let XJ=b.uniformsGroups;for(let h9=0,C8=XJ.length;h9<C8;h9++){let r$=XJ[h9];E0.update(r$,sJ),E0.bind(r$,sJ)}}return sJ}function g6(G,I){G.ambientLightColor.needsUpdate=I,G.lightProbe.needsUpdate=I,G.directionalLights.needsUpdate=I,G.directionalLightShadows.needsUpdate=I,G.pointLights.needsUpdate=I,G.pointLightShadows.needsUpdate=I,G.spotLights.needsUpdate=I,G.spotLightShadows.needsUpdate=I,G.rectAreaLights.needsUpdate=I,G.hemisphereLights.needsUpdate=I}function v7(G){return G.isMeshLambertMaterial||G.isMeshToonMaterial||G.isMeshPhongMaterial||G.isMeshStandardMaterial||G.isShadowMaterial||G.isShaderMaterial&&G.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return c},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(G,I,T){let b=j.get(G);if(b.__autoAllocateDepthBuffer=G.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;j.get(G.texture).__webglTexture=I,j.get(G.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:T,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(G,I){let T=j.get(G);T.__webglFramebuffer=I,T.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(G,I=0,T=0){x=G,u=I,c=T;let b=null,v=!1,J0=!1;if(G){let K0=j.get(G);if(K0.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(y.FRAMEBUFFER,K0.__webglFramebuffer),G0.copy(G.viewport),M0.copy(G.scissor),k0=G.scissorTest,M.viewport(G0),M.scissor(M0),M.setScissorTest(k0),t=-1;return}else if(K0.__webglFramebuffer===void 0)m.setupRenderTarget(G);else if(K0.__hasExternalTextures)m.rebindTextures(G,j.get(G.texture).__webglTexture,j.get(G.depthTexture).__webglTexture);else if(G.depthBuffer){let S0=G.depthTexture;if(K0.__boundDepthTexture!==S0){if(S0!==null&&j.has(S0)&&(G.width!==S0.image.width||G.height!==S0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(G)}}let R0=G.texture;if(R0.isData3DTexture||R0.isDataArrayTexture||R0.isCompressedArrayTexture)J0=!0;let z0=j.get(G).__webglFramebuffer;if(G.isWebGLCubeRenderTarget){if(Array.isArray(z0[I]))b=z0[I][T];else b=z0[I];v=!0}else if(G.samples>0&&m.useMultisampledRTT(G)===!1)b=j.get(G).__webglMultisampledFramebuffer;else if(Array.isArray(z0))b=z0[T];else b=z0;G0.copy(G.viewport),M0.copy(G.scissor),k0=G.scissorTest}else G0.copy(p0).multiplyScalar(O0).floor(),M0.copy(f0).multiplyScalar(O0).floor(),k0=y0;if(T!==0)b=p;if(M.bindFramebuffer(y.FRAMEBUFFER,b))M.drawBuffers(G,b);if(M.viewport(G0),M.scissor(M0),M.setScissorTest(k0),v){let K0=j.get(G.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+I,K0.__webglTexture,T)}else if(J0){let K0=I;for(let R0=0;R0<G.textures.length;R0++){let z0=j.get(G.textures[R0]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+R0,z0.__webglTexture,T,K0)}}else if(G!==null&&T!==0){let K0=j.get(G.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,K0.__webglTexture,T)}t=-1},this.readRenderTargetPixels=function(G,I,T,b,v,J0,Z0,K0=0){if(!(G&&G.isWebGLRenderTarget)){C0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let R0=j.get(G).__webglFramebuffer;if(G.isWebGLCubeRenderTarget&&Z0!==void 0)R0=R0[Z0];if(R0){M.bindFramebuffer(y.FRAMEBUFFER,R0);try{let z0=G.textures[K0],S0=z0.format,h0=z0.type;if(G.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+K0);if(!r0.textureFormatReadable(S0)){C0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!r0.textureTypeReadable(h0)){C0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(I>=0&&I<=G.width-b&&(T>=0&&T<=G.height-v))y.readPixels(I,T,b,v,n.convert(S0),n.convert(h0),J0)}finally{let z0=x!==null?j.get(x).__webglFramebuffer:null;M.bindFramebuffer(y.FRAMEBUFFER,z0)}}},this.readRenderTargetPixelsAsync=async function(G,I,T,b,v,J0,Z0,K0=0){if(!(G&&G.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let R0=j.get(G).__webglFramebuffer;if(G.isWebGLCubeRenderTarget&&Z0!==void 0)R0=R0[Z0];if(R0)if(I>=0&&I<=G.width-b&&(T>=0&&T<=G.height-v)){M.bindFramebuffer(y.FRAMEBUFFER,R0);let z0=G.textures[K0],S0=z0.format,h0=z0.type;if(G.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+K0);if(!r0.textureFormatReadable(S0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!r0.textureTypeReadable(h0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let B0=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,B0),y.bufferData(y.PIXEL_PACK_BUFFER,J0.byteLength,y.STREAM_READ),y.readPixels(I,T,b,v,n.convert(S0),n.convert(h0),0);let QJ=x!==null?j.get(x).__webglFramebuffer:null;M.bindFramebuffer(y.FRAMEBUFFER,QJ);let FJ=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await zK(y,FJ,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,B0),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,J0),y.deleteBuffer(B0),y.deleteSync(FJ),J0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(G,I=null,T=0){let b=Math.pow(2,-T),v=Math.floor(G.image.width*b),J0=Math.floor(G.image.height*b),Z0=I!==null?I.x:0,K0=I!==null?I.y:0;m.setTexture2D(G,0),y.copyTexSubImage2D(y.TEXTURE_2D,T,0,0,Z0,K0,v,J0),M.unbindTexture()},this.copyTextureToTexture=function(G,I,T=null,b=null,v=0,J0=0){let Z0,K0,R0,z0,S0,h0,B0,QJ,FJ,GJ=G.isCompressedTexture?G.mipmaps[J0]:G.image;if(T!==null)Z0=T.max.x-T.min.x,K0=T.max.y-T.min.y,R0=T.isBox3?T.max.z-T.min.z:1,z0=T.min.x,S0=T.min.y,h0=T.isBox3?T.min.z:0;else{let OJ=Math.pow(2,-v);if(Z0=Math.floor(GJ.width*OJ),K0=Math.floor(GJ.height*OJ),G.isDataArrayTexture)R0=GJ.depth;else if(G.isData3DTexture)R0=Math.floor(GJ.depth*OJ);else R0=1;z0=0,S0=0,h0=0}if(b!==null)B0=b.x,QJ=b.y,FJ=b.z;else B0=0,QJ=0,FJ=0;let ZJ=n.convert(I.format),_J=n.convert(I.type),L0;if(I.isData3DTexture)m.setTexture3D(I,0),L0=y.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)m.setTexture2DArray(I,0),L0=y.TEXTURE_2D_ARRAY;else m.setTexture2D(I,0),L0=y.TEXTURE_2D;M.activeTexture(y.TEXTURE0),M.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,I.flipY),M.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),M.pixelStorei(y.UNPACK_ALIGNMENT,I.unpackAlignment);let mJ=M.getParameter(y.UNPACK_ROW_LENGTH),i0=M.getParameter(y.UNPACK_IMAGE_HEIGHT),sJ=M.getParameter(y.UNPACK_SKIP_PIXELS),U9=M.getParameter(y.UNPACK_SKIP_ROWS),y9=M.getParameter(y.UNPACK_SKIP_IMAGES);M.pixelStorei(y.UNPACK_ROW_LENGTH,GJ.width),M.pixelStorei(y.UNPACK_IMAGE_HEIGHT,GJ.height),M.pixelStorei(y.UNPACK_SKIP_PIXELS,z0),M.pixelStorei(y.UNPACK_SKIP_ROWS,S0),M.pixelStorei(y.UNPACK_SKIP_IMAGES,h0);let P8=G.isDataArrayTexture||G.isData3DTexture,KJ=I.isDataArrayTexture||I.isData3DTexture;if(G.isDepthTexture){let OJ=j.get(G),b9=j.get(I),XJ=j.get(OJ.__renderTarget),h9=j.get(b9.__renderTarget);M.bindFramebuffer(y.READ_FRAMEBUFFER,XJ.__webglFramebuffer),M.bindFramebuffer(y.DRAW_FRAMEBUFFER,h9.__webglFramebuffer);for(let C8=0;C8<R0;C8++){if(P8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(G).__webglTexture,v,h0+C8),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(I).__webglTexture,J0,FJ+C8);y.blitFramebuffer(z0,S0,Z0,K0,B0,QJ,Z0,K0,y.DEPTH_BUFFER_BIT,y.NEAREST)}M.bindFramebuffer(y.READ_FRAMEBUFFER,null),M.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(v!==0||G.isRenderTargetTexture||j.has(G)){let OJ=j.get(G),b9=j.get(I);M.bindFramebuffer(y.READ_FRAMEBUFFER,o),M.bindFramebuffer(y.DRAW_FRAMEBUFFER,g);for(let XJ=0;XJ<R0;XJ++){if(P8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,OJ.__webglTexture,v,h0+XJ);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,OJ.__webglTexture,v);if(KJ)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,b9.__webglTexture,J0,FJ+XJ);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,b9.__webglTexture,J0);if(v!==0)y.blitFramebuffer(z0,S0,Z0,K0,B0,QJ,Z0,K0,y.COLOR_BUFFER_BIT,y.NEAREST);else if(KJ)y.copyTexSubImage3D(L0,J0,B0,QJ,FJ+XJ,z0,S0,Z0,K0);else y.copyTexSubImage2D(L0,J0,B0,QJ,z0,S0,Z0,K0)}M.bindFramebuffer(y.READ_FRAMEBUFFER,null),M.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(KJ)if(G.isDataTexture||G.isData3DTexture)y.texSubImage3D(L0,J0,B0,QJ,FJ,Z0,K0,R0,ZJ,_J,GJ.data);else if(I.isCompressedArrayTexture)y.compressedTexSubImage3D(L0,J0,B0,QJ,FJ,Z0,K0,R0,ZJ,GJ.data);else y.texSubImage3D(L0,J0,B0,QJ,FJ,Z0,K0,R0,ZJ,_J,GJ);else if(G.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,J0,B0,QJ,Z0,K0,ZJ,_J,GJ.data);else if(G.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,J0,B0,QJ,GJ.width,GJ.height,ZJ,GJ.data);else y.texSubImage2D(y.TEXTURE_2D,J0,B0,QJ,Z0,K0,ZJ,_J,GJ);if(M.pixelStorei(y.UNPACK_ROW_LENGTH,mJ),M.pixelStorei(y.UNPACK_IMAGE_HEIGHT,i0),M.pixelStorei(y.UNPACK_SKIP_PIXELS,sJ),M.pixelStorei(y.UNPACK_SKIP_ROWS,U9),M.pixelStorei(y.UNPACK_SKIP_IMAGES,y9),J0===0&&I.generateMipmaps)y.generateMipmap(L0);M.unbindTexture()},this.initRenderTarget=function(G){if(j.get(G).__webglFramebuffer===void 0)m.setupRenderTarget(G)},this.initTexture=function(G){if(G.isCubeTexture)m.setTextureCube(G,0);else if(G.isData3DTexture)m.setTexture3D(G,0);else if(G.isDataArrayTexture||G.isCompressedArrayTexture)m.setTexture2DArray(G,0);else m.setTexture2D(G,0);M.unbindTexture()},this.resetState=function(){u=0,c=0,x=null,M.reset(),H0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return U$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=d0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=d0._getUnpackColorSpace()}}var T7=new h;function eJ(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),H=Math.PI/4;T7.copy(Q),T7[Z]=0,T7.normalize();let U=0.5*X/(X+Y),N=1-T7.angleTo(J)/H;if(Math.sign(T7[$])===1)return N*U;else return Y/(X+Y)+U+U*(1-N)}class k9 extends MJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new h,H=new h,U=new h(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,F=this.attributes.normal.array,q=this.attributes.uv.array,R=N.length/6,V=new h,B=0.5/W;for(let D=0,O=0;D<N.length;D+=3,O+=2)switch(Y.fromArray(N,D),H.copy(Y),H.x-=Math.sign(H.x)*B,H.y-=Math.sign(H.y)*B,H.z-=Math.sign(H.z)*B,H.normalize(),N[D+0]=U.x*Math.sign(Y.x)+H.x*K,N[D+1]=U.y*Math.sign(Y.y)+H.y*K,N[D+2]=U.z*Math.sign(Y.z)+H.z*K,F[D+0]=H.x,F[D+1]=H.y,F[D+2]=H.z,Math.floor(D/R)){case 0:V.set(1,0,0),q[O+0]=eJ(V,H,"z","y",K,$),q[O+1]=1-eJ(V,H,"y","z",K,Q);break;case 1:V.set(-1,0,0),q[O+0]=1-eJ(V,H,"z","y",K,$),q[O+1]=1-eJ(V,H,"y","z",K,Q);break;case 2:V.set(0,1,0),q[O+0]=1-eJ(V,H,"x","z",K,J),q[O+1]=eJ(V,H,"z","x",K,$);break;case 3:V.set(0,-1,0),q[O+0]=1-eJ(V,H,"x","z",K,J),q[O+1]=1-eJ(V,H,"z","x",K,$);break;case 4:V.set(0,0,1),q[O+0]=1-eJ(V,H,"x","y",K,J),q[O+1]=1-eJ(V,H,"y","x",K,Q);break;case 5:V.set(0,0,-1),q[O+0]=eJ(V,H,"x","y",K,J),q[O+1]=1-eJ(V,H,"y","x",K,Q);break}}static fromJSON(J){return new k9(J.width,J.height,J.depth,J.segments,J.radius)}}class n$ extends i8{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new MJ;J.deleteAttribute("uv");let Q=new xJ({side:vJ}),$=new xJ,Z=new _6(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new T0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new o8(J,$,6),X=new DJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new T0(J,t8(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let H=new T0(J,t8(50));H.position.set(-16.109,18.021,-8.207),H.scale.set(0.1,2.425,2.751),this.add(H);let U=new T0(J,t8(17));U.position.set(14.904,12.198,-1.832),U.scale.set(0.15,4.265,6.331),this.add(U);let N=new T0(J,t8(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let F=new T0(J,t8(20));F.position.set(3.235,11.486,-12.541),F.scale.set(2.5,2,0.1),this.add(F);let q=new T0(J,t8(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function t8(J){return new I6({color:0,emissive:16777215,emissiveIntensity:J})}var R8=653429,LJ="#09F875",JJ="rgba(9,248,117,0.55)",s$="rgba(9,248,117,0.28)",u5="#0A0A0A",a$="#070808",kJ="#F2F4F2",V8="'SF Mono', ui-monospace, Menlo, Consolas, monospace",o9="'Space Grotesk', -apple-system, sans-serif",a9=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],L9=matchMedia("(prefers-reduced-motion: reduce)").matches,NW=null,k8=()=>NW=NW||new(window.AudioContext||window.webkitAudioContext);function X9(J,Q,$,Z=0.045,K="triangle"){let W=k8(),X=W.createOscillator(),Y=W.createGain();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var CJ={detent(J=0){try{let Q=k8();if(Q.state==="suspended")Q.resume();X9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=k8();X9(420,J.currentTime+0.01,0.04,0.05),X9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=k8();X9(120,J.currentTime+0.01,0.09,0.08,"sine"),X9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=k8();X9(660,J.currentTime+0.02,0.05),X9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=k8();X9(220,J.currentTime+0.02,0.05,0.07),X9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=k8();X9(240,J.currentTime+0.01,0.05,0.05,"sine"),X9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class L8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var c5=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],f6={w:240,h:254};function y6(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/f6.w,Z/f6.w),J.fillStyle=K;for(let X of c5)J.fill(X);J.restore()}var n5=[[6,9,11,5],[15,5,5,4],[20,6,2,1],[4,8,3,2],[2,10,3,2],[8,14,1,3],[13,14,1,3],[7,17,3,1],[12,17,3,1]],i$=[[7,5,8,3],[9,8,5,1]],s5=[[7,8,8,3]],o$=[[8,10,7,3],[9,13,4,1]],S7=[17,6,1.4,1.4];class OW{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?i$:o$}if(this.state==="happy")return Math.floor(J*8)%2?i$:o$;if(this.state==="droop")return o$;return Math.floor(J)%7===6?i$:s5}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),H=18*Z;if(X>0.01){let U=1+Math.sin(W*1.1)*0.012,N=15*Z*U;y6(J,Q+(24*Z-N)/2,$+H-N*(f6.h/f6.w),N,LJ,X)}if(Y>0.01){let U=this.state==="droop";J.save(),J.globalAlpha=Y,J.fillStyle=LJ;let N=(F,q,R,V)=>J.fillRect(Q+F*Z,$+(q-this.hopY/24)*Z,R*Z,V*Z);for(let[F,q,R,V]of n5){let B=U&&q<=6&&F>=15?q+2:q;N(F,B,R,V)}for(let[F,q,R,V]of this.wingCells(W))N(F,U?q+2:q,R,V);if(!this.blinking()){J.fillStyle=a$;let F=U?S7[1]+2:S7[1];J.fillRect(Q+S7[0]*Z,$+(F-this.hopY/24)*Z,S7[2]*Z,S7[3]*Z)}J.restore()}}}var i5=(J)=>J<0.5?2*J*J:1-Math.pow(-2*J+2,2)/2,V9=1024,e8=640;class DW{canvas=document.createElement("canvas");ctx;tex;vireo=new OW;mode=0;lane="inference";meta=null;history=[];booted=L9;bootT=0;busy=!1;status="";chat=null;search=null;xprof=null;err=null;armed=null;tabRects=[];dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=V9,this.canvas.height=e8,this.ctx=this.canvas.getContext("2d"),this.tex=new v9(this.canvas),this.tex.colorSpace=D9,this.tex.generateMipmaps=!1,this.tex.minFilter=RJ}modeName(){return a9[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(!this.booted){if(this.bootT+=J,this.bootT>1.5)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=L9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc+=J;let $=!this.booted?0.05:0.1;if(this.acc>=$){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey)return this.lastKey=Z,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=LJ,W=V8,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=a$,Q.fillRect(0,0,V9,e8),!this.booted){let Y=this.bootT,H=Math.min(1,Y/0.55);Q.fillStyle=LJ;let U=[56,30,18];for(let N=0;N<3;N++){let F=-320+(V9+560)*i5(Math.min(1,H*1.3-N*0.09));Q.save(),Q.translate(F,96+N*74),Q.transform(1,0,-0.7,1,0,0),Q.fillRect(0,0,210,U[N]),Q.restore()}if(Y>0.55)this.text("VANTIS WALLET TERMINAL",64,330,40,kJ,o9,"700");if(Y>0.85)this.text("WLT-01 · SESSION OPEN",64,392,22,JJ);if(Y>1.1&&this.meta?.handle)this.text(`CARD DETECTED — @${this.meta.handle}`.toUpperCase(),64,430,22,LJ);return}this.tabRects=[];let $=44;for(let Y=0;Y<a9.length;Y++){let H=Y===this.mode;Q.font=`600 22px ${V8}`;let U=Q.measureText(a9[Y]).width;if(H)Q.fillStyle=LJ,Q.beginPath(),Q.roundRect($-14,24,U+28,40,8),Q.fill();this.text(a9[Y],$,33,22,H?a$:JJ),this.tabRects.push({x:$-14,y:16,w:U+28,h:56,mode:Y}),$+=U+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${V8}`,this.text(`MAIN ${Z}`,V9-44-Q.measureText(`MAIN ${Z}`).width,33,22,kJ),Q.fillStyle=s$,Q.fillRect(44,80,V9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,JJ),this.wrap(this.err,52).slice(0,4).forEach((Y,H)=>this.text(Y,64,K+46+H*34,24,kJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=s$,Q.fillRect(44,e8-140,V9-88,2),this.vireo.draw(Q,52,e8-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${V8}`,this.text(X,V9-44-Q.measureText(X).width,e8-72,21,this.busy?LJ:JJ)}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,JJ),this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,kJ,o9,"700"),this.text("MAIN BALANCE",46,J+156,20,JJ),Q?.tier){let X=this.ctx;X.font=`600 20px ${V8}`;let Y=`TIER ${String(Q.tier).toUpperCase()}`,H=X.measureText(Y).width;X.strokeStyle=JJ,X.lineWidth=2,X.beginPath(),X.roundRect(44,J+198,H+28,38,19),X.stroke(),this.text(Y,58,J+207,20,LJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+H,J+207,20,JJ)}let K=(X,Y,H,U)=>{let N=this.ctx;this.text(X,560,H,22,U?LJ:JJ);let F=Y?`$${Y.balance_usd.toFixed(2)}`:"$—";N.font=`700 30px ${o9}`,this.text(F,V9-44-N.measureText(F).width,H-6,30,kJ,o9,"700");let q=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),R=Math.max(6,(Y?.balance_usd||0)/q*420);N.fillStyle="rgba(9,248,117,0.16)",N.fillRect(560,H+44,420,10),N.fillStyle=U?LJ:JJ,N.fillRect(560,H+44,R,10),this.text(U?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,H+68,18,JJ)};K("INFERENCE",$,J+10,!0),K("DEV TOOLS",Z,J+130,!1);let W=this.history[0];if(W){let X=W.amount_usd>=0?`+$${W.amount_usd.toFixed(2)}`:`−$${Math.abs(W.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,JJ),this.text(`${X}  ${String(W.description||"").slice(0,52)}`,200,J+268,20,kJ)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,JJ),this.text(this.armed.quote,64,J+44,25,kJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,LJ,o9,"700"),this.status="SETTLES FROM REAL USAGE";return}if(!Q){this.text("TEST-FIRE THE RAIL",64,J+6,22,JJ),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,kJ),this.text("billed to your Inference lane.",64,J+80,26,kJ),this.text("Type below, then press the green key.",64,J+138,24,JJ),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}this.text("> "+Q.prompt.slice(0,46),64,J+4,22,JJ);let $=Q.text.slice(0,Math.floor(Q.shown)),Z=this.wrap($,62),K=8;if(Z.slice(-K).forEach((W,X)=>this.text(W,64,J+42+X*34,24,kJ)),Q.line&&Q.shown>=Q.text.length)this.text(Q.line,64,J+42+Math.min(Z.length,K)*34+10,20,LJ)}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,JJ),this.text("One real query against the open web.",64,J+44,26,kJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,JJ),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,JJ),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,kJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,JJ)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,LJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,JJ),this.text("Public metrics for any handle —",64,J+44,26,kJ),this.text("the same read the scoring agent makes.",64,J+80,26,kJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,JJ),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,kJ,o9,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,JJ);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,LJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,JJ);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,kJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,JJ),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,kJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?LJ:JJ),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,kJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,H,U,N)=>{let F=this.ctx;F.strokeStyle=H?LJ:s$,F.lineWidth=H?3:2,F.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,H?LJ:JJ),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,kJ,o9,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,JJ),this.wrap(N,30).slice(0,3).forEach((q,R)=>this.text(q,Y+28,J+196+R*28,19,U?kJ:JJ))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}function o5(J,Q){let $=document.createElement("canvas");$.width=512,$.height=320;let Z=$.getContext("2d"),K={ink:{top:"#0C0C0B",bottom:"#191917",fg:"#FFFFFF",accent:LJ},carbon:{top:"#151515",bottom:"#2B2B29",fg:"#E8E8E4",accent:LJ},signal:{top:"#0AF77A",bottom:"#05C75F",fg:"#0A0A0A",accent:"#0A0A0A"},mint:{top:"#F2FFF8",bottom:"#BFFADA",fg:"#0A0A0A",accent:"#0B7A3E"},mono:{top:"#FFFFFF",bottom:"#E8E8E2",fg:"#0A0A0A",accent:"#0B7A3E"}},W=K[Q||"ink"]||K.ink,X=Z.createLinearGradient(0,0,512,320);X.addColorStop(0,W.top),X.addColorStop(1,W.bottom),Z.fillStyle=X,Z.fillRect(0,0,512,320),y6(Z,44,36,96,W.accent),Z.font=`700 52px ${o9}`,Z.fillStyle=W.fg,Z.fillText(J?`@${J}`:"VANTIS",44,248),Z.font=`600 22px ${V8}`,Z.fillStyle=W.accent,Z.fillText("VANTIS CARD",46,288);let Y=new v9($);return Y.colorSpace=D9,Y.generateMipmaps=!1,Y.minFilter=RJ,Y}function a5(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new v9(J);return Z.colorSpace=D9,Z}function FW(){let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(1.5,devicePixelRatio||1),$;try{$=new c$({antialias:Q<1.5,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=D9,$.toneMapping=O7,$.toneMappingExposure=1.12,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new i8,K=new w7($);Z.environment=K.fromScene(new n$,0.04).texture;let W=new I7(16777215,1.35);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new I7(14680046,0.25);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new SJ(30,1,0.1,20);Y.position.set(0,0.94,2.8),Y.lookAt(0,0.3,0);function H(G,I,T="rgba(9,248,117,0.65)"){let b=document.createElement("canvas"),v=Math.max(64,G.length*I*0.75),J0=I*2;b.width=v*2,b.height=J0*2;let Z0=b.getContext("2d");Z0.scale(2,2),Z0.font=`600 ${I}px ${V8}`,Z0.fillStyle=T,Z0.textBaseline="middle",Z0.textAlign="center",Z0.fillText(G,v/2,J0/2);let K0=new v9(b);K0.colorSpace=D9,K0.generateMipmaps=!1,K0.minFilter=RJ;let R0=new T0(new cJ(v/640,J0/640),new hJ({map:K0,transparent:!0}));return R0.material.toneMapped=!1,R0}let U=new xJ({color:1382166,roughness:0.48,metalness:0.35,envMapIntensity:0.85}),N=new xJ({color:658186,roughness:0.75,metalness:0.25}),F=new xJ({color:R8,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:R8,emissiveIntensity:0.42});F.toneMapped=!1;let q=new hJ({color:R8});q.toneMapped=!1;let R=new g0(1327146),V=new jJ;Z.add(V);let B=new jJ,D=new T0(new k9(1.72,0.11,0.86,4,0.028),U);B.add(D),B.position.set(0,0,0.16),B.rotation.x=0.1,V.add(B);let O=new jJ,S=new T0(new k9(1.72,0.82,0.12,4,0.028),U);O.add(S);let _=new T0(new MJ(1.52,0.7,0.02),N);_.position.set(0,0.015,0.058),O.add(_);let E=new DW,P=new T0(new cJ(1.44,0.62),new hJ({map:E.tex}));P.position.set(0,0.015,0.074),O.add(P);let A=new T0(new cJ(1.5,0.68),new xJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));A.position.set(0,0.015,0.08),O.add(A),O.position.set(0,0.46,-0.32),O.rotation.x=-0.42,V.add(O);let w=new T0(new MJ(1.66,0.012,0.012),q);w.position.set(0,0.1,-0.3),V.add(w);let L=new jJ,z=new T0(new G8(0.135,0.145,0.1,48),new xJ({color:1645338,roughness:0.45,metalness:0.5,envMapIntensity:0.8}));L.add(z);let l=new T0(new G8(0.105,0.105,0.012,40),new xJ({color:1053201,roughness:0.35,metalness:0.6,envMapIntensity:0.9}));l.position.y=0.056,L.add(l);let C=new o8(new MJ(0.014,0.08,0.022),new xJ({color:789772,roughness:0.55,metalness:0.5}),28),p=new DJ;for(let G=0;G<28;G++){let I=G/28*Math.PI*2;p.position.set(Math.cos(I)*0.14,-0.005,Math.sin(I)*0.14),p.rotation.y=-I,p.updateMatrix(),C.setMatrixAt(G,p.matrix)}L.add(C);let o=new T0(new MJ(0.016,0.01,0.08),q);o.position.set(0,0.062,-0.07),L.add(o),L.position.set(0.56,0.1,0.28),B.add(L);let g=H("DIAL",13);g.rotation.x=-Math.PI/2,g.position.set(0.56,0.058,0.475),B.add(g);let u=new jJ,c=new T0(new k9(0.3,0.07,0.3,3,0.024),F);u.add(c);let x=document.createElement("canvas");x.width=x.height=128,y6(x.getContext("2d"),28,24,72,u5);let t=new v9(x);t.colorSpace=D9,t.generateMipmaps=!1,t.minFilter=RJ;let e=new T0(new cJ(0.13,0.13),new hJ({map:t,transparent:!0}));e.material.toneMapped=!1,e.rotation.x=-Math.PI/2,e.position.y=0.037,c.add(e);let G0=new T0(new MJ(0.36,0.02,0.36),N);G0.position.y=-0.042,u.add(G0),u.position.set(-0.52,0.09,0.28),B.add(u);let M0=H("FIRE",13);M0.rotation.x=-Math.PI/2,M0.position.set(-0.52,0.058,0.475),B.add(M0);let k0=new jJ,YJ=new T0(new k9(0.3,0.026,0.13,2,0.012),N);k0.add(YJ);let s0=new jJ,i=new T0(new MJ(0.05,0.1,0.05),new xJ({color:1645338,roughness:0.45,metalness:0.5,envMapIntensity:0.8}));i.position.y=0.05,s0.add(i);let Y0=new T0(new k9(0.075,0.035,0.06,2,0.014),F);Y0.position.y=0.11,s0.add(Y0),k0.add(s0),k0.position.set(0.05,0.075,0.28),B.add(k0);let O0=H("INF",12);O0.rotation.x=-Math.PI/2,O0.position.set(-0.12,0.058,0.28),B.add(O0);let D0=H("DEV",12);D0.rotation.x=-Math.PI/2,D0.position.set(0.22,0.058,0.28),B.add(D0);let P0=new G8(0.013,0.013,0.016,12),p0=new T0(P0,new hJ({color:R8}));p0.material.toneMapped=!1,p0.position.set(-0.12,0.056,0.35),B.add(p0);let f0=new T0(P0,new hJ({color:R}));f0.material.toneMapped=!1,f0.position.set(0.22,0.056,0.35),B.add(f0);let y0=document.createElement("canvas");y0.width=240,y0.height=254,y6(y0.getContext("2d"),0,0,240,LJ);let o0=new v9(y0);o0.colorSpace=D9,o0.generateMipmaps=!1,o0.minFilter=RJ;let m0=new T0(new cJ(0.085,0.09),new hJ({map:o0,transparent:!0}));m0.material.toneMapped=!1,m0.rotation.x=-Math.PI/2,m0.position.set(0,0.058,0.47),B.add(m0);let v0=new jJ;v0.position.set(0.74,0.31,-0.13),v0.rotation.x=-0.42,V.add(v0);let NJ=new T0(new k9(0.54,0.06,0.09,2,0.014),N);NJ.position.set(0,-0.16,0.01),v0.add(NJ);let yJ=new T0(new MJ(0.54,0.005,0.004),q);yJ.position.set(0,-0.128,0.055),v0.add(yJ);let a0=new jJ,VJ=new T0(new k9(0.5,0.32,0.016,2,0.008),new xJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}));a0.add(VJ);let UJ=new hJ;UJ.toneMapped=!1;let qJ=new T0(new cJ(0.48,0.3),UJ);qJ.position.z=0.0095,a0.add(qJ),v0.add(a0);let y=new T0(new cJ(2.9,1.9),new hJ({map:a5(),transparent:!0,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.y=-0.14,Z.add(y),V.position.y=0.02;let AJ=new L8(0,60,14),u0=new L8(0,60,14),r0=new L8(0,170,20),M=new L8(0,400,24),k=new L8(-0.22,240,20),j=new L8(L9?0:0.9,90,16),m={t:0},a=(G,I=!1)=>{let T=(G%a9.length+a9.length)%a9.length;if(T===E.mode)return;if(E.mode=T,E.err=null,E.armed=null,E.dirty=!0,r0.target=-T*(Math.PI*2/8),!I)CJ.detent(T);E.vireo.poke(),$0(),V0(`Mode: ${a9[T]}`)},Q0=document.getElementById("dv-input-row"),W0=document.getElementById("dv-input"),d=document.getElementById("dv-go"),s=document.getElementById("dv-alt"),F0=document.getElementById("dv-live"),V0=(G)=>{if(F0)F0.textContent=G},q0={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}};function $0(){let G=E.modeName(),I=q0[G];if(Q0)Q0.style.display=I?"flex":"none";if(I&&W0)W0.placeholder=I.ph;if(I&&d)d.textContent=I.go;if(s)if(G==="HOME"||G==="LANES")s.style.display="",s.textContent=G==="LANES"?"Sweep lane":"Fund lane";else s.style.display="none"}async function I0(){try{let G=await fetch("/api/playground/meta");if(!G.ok)return;if(E.meta=await G.json(),E.meta?.handle){if(UJ.map=o5(E.meta.handle,E.meta.variant),UJ.needsUpdate=!0,j.target>0){if(j.target=0,!L9)setTimeout(()=>CJ.dock(),380)}}E.dirty=!0}catch{}}async function A0(){try{let G=await fetch("/api/credits/history");if(!G.ok)return;let I=await G.json();E.history=I.entries||[],E.dirty=!0}catch{}}addEventListener("vc-balances",(G)=>{let I=G.detail||{};if(!E.meta)return;let T=E.meta.main_balance_usd;E.meta.main_balance_usd=I.main??E.meta.main_balance_usd;for(let b of I.wallets||[]){let v=b.purpose==="inference"?E.meta.lanes?.inference:E.meta.lanes?.devtools;if(v)v.balance_usd=b.balance_usd,v.consumed_usd=b.consumed_usd}if(typeof I.main==="number"&&I.main!==T)E.vireo.set("happy");E.dirty=!0,A0()});function c0(G){let I=E.meta?.lanes?.[G];return I?{id:I.id,name:G==="inference"?"Inference":"Developer tools"}:null}function f(G){let I=c0(G);if(!I)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:I}))}async function X0(G){let I=c0(G);if(!I)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:I}))}let n=null,H0=!1;function E0(){if(E.busy)return!1;if(q0[E.modeName()]&&!(W0?.value||"").trim())return W0?.focus(),E.vireo.set("alert"),E.dirty=!0,CJ.err(),!1;return!0}async function r(){if(E.busy)return;let G=E.modeName();if(E.err=null,G==="HOME"){f("inference");return}if(G==="LANES"){f(E.lane);return}if(G==="LEDGER"){A0();return}let I=q0[G],T=(W0?.value||"").trim();if(I&&!T){W0?.focus(),E.vireo.set("alert"),CJ.err();return}if(G==="CHAT"&&!E.armed){let v=(Math.ceil((T.length+180)/4)*0.14+112.00000000000001)/1e6,J0=E.meta?.vantis_price_usd?v/E.meta.vantis_price_usd:null;E.armed={until:performance.now()+3000,quote:`UP TO $${v.toFixed(6)}${J0?` · ~${J0.toFixed(4)} VANTIS`:""} AT LIST`},E.dirty=!0,V0("Armed. Press again to fire.");return}E.armed=null,E.busy=!0,E.vireo.set("work"),E.vireo.flapRate=3,E.dirty=!0;try{if(G==="CHAT"){E.chat={prompt:T,text:"",shown:0,line:""};let b=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:T})}),v=await b.json();if(!b.ok){if(E.chat=null,v.error==="lane_empty")E.err=`Inference lane is empty — it needs about $${(v.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,E.vireo.set("droop");else if(v.error==="rate_limited")E.err="Easy — a few seconds between fires.",E.vireo.set("alert");else E.err="The rail refused that one. Try again.",E.vireo.set("alert");CJ.err()}else{if(E.chat.text=v.text||"",E.chat.line=`${(v.latency_ms/1000).toFixed(1)}s · ${v.tokens_out} TOK OUT · $${(v.cost_usd||0).toFixed(6)} → ${(v.vantis_burned||0).toFixed(4)} VANTIS BURNED`,E.meta?.lanes?.inference)E.meta.lanes.inference.balance_usd=v.lane_balance_usd;CJ.ok(),V0(`Answer: ${v.text}`)}}else if(G==="SEARCH"){let b=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:T})}),v=await b.json();if(!b.ok){if(v.error==="demo_exhausted")E.err="Today's free searches are spent — more tomorrow.";else E.err="Search did not go through.";E.vireo.set("alert"),CJ.err()}else E.search={query:T,results:v.results,left:v.left_today},E.vireo.set("happy"),CJ.ok(),V0(`${v.results.length} results`)}else if(G==="X LOOKUP"){let b=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:T})}),v=await b.json();if(!b.ok)E.err=v.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":v.error==="handle_not_found"?"No such handle — check the spelling.":v.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",E.vireo.set("alert"),CJ.err();else E.xprof={profile:v.profile,left:v.left_today},E.vireo.set("happy"),CJ.ok(),V0(`@${v.profile.handle}: ${v.profile.followers} followers`)}}catch{E.err="Network hiccup — try again.",E.vireo.set("alert"),CJ.err()}finally{if(E.busy=!1,E.vireo.state==="work")E.vireo.set("idle");E.dirty=!0}}let U0=-1e9,w0=new w6,t0=new x0,l0=null,nJ=new hJ({visible:!1}),bJ=(G,I,T,b,v,J0=0,Z0=0,K0=0)=>{let R0=new T0(new MJ(I,T,b),nJ);return R0.position.set(J0,Z0,K0),R0.userData.hit=G,v.add(R0),R0},b6=[bJ("knob",0.34,0.16,0.34,L),bJ("key",0.34,0.14,0.34,u),bJ("lever",0.26,0.2,0.14,k0,0,0.06,0),bJ("card",0.6,0.5,0.12,v0,0,-0.02,0),bJ("screen",1.44,0.62,0.06,O,0,0.015,0.08)];function M8(G){let I=$.domElement.getBoundingClientRect();t0.x=(G.clientX-I.left)/I.width*2-1,t0.y=-((G.clientY-I.top)/I.height)*2+1,w0.setFromCamera(t0,Y);let T=w0.intersectObjects(b6,!1);return T.length?T[0].object.userData.hit:null}function J7(G){let I=$.domElement.getBoundingClientRect();t0.x=(G.clientX-I.left)/I.width*2-1,t0.y=-((G.clientY-I.top)/I.height)*2+1,w0.setFromCamera(t0,Y);let T=w0.intersectObject(P,!1)[0];if(!T?.uv)return null;return{cx:T.uv.x*V9,cy:(1-T.uv.y)*e8}}function h6(G){let I=J7(G);if(!I)return;for(let T of E.tabRects)if(I.cx>=T.x&&I.cx<=T.x+T.w&&I.cy>=T.y&&I.cy<=T.y+T.h){a(T.mode);return}if(E.modeName()==="LANES"&&I.cy>100&&I.cy<460){let T=I.cx<V9/2?"inference":"devtools";if(T!==E.lane)E.lane=T,k.target=T==="inference"?-0.22:0.22,CJ.lever(),E.dirty=!0,V0(`Lane: ${E.lane}`)}}$.domElement.addEventListener("pointerdown",(G)=>{U0=performance.now();let I=M8(G);if(!I)return;if(E.vireo.poke(),I==="knob")l0={x:G.clientX,base:E.mode,acc:0},$.domElement.setPointerCapture(G.pointerId);else if(I==="key"){if(!E0())return;M.target=-0.032,CJ.press(),H0=!1,n=setTimeout(()=>{if(H0=!0,E.modeName()==="LANES")X0(E.lane)},650)}else if(I==="lever"){if(E.lane=E.lane==="inference"?"devtools":"inference",k.target=E.lane==="inference"?-0.22:0.22,CJ.lever(),E.dirty=!0,E.modeName()!=="LANES")a(5,!0);V0(`Lane: ${E.lane}`)}else if(I==="screen")h6(G);else if(I==="card")a(0)});let Q7=0,z8=null;$.domElement.addEventListener("pointermove",(G)=>{U0=performance.now();let I=$.domElement.getBoundingClientRect(),T=(G.clientX-I.left)/I.width*2-1,b=(G.clientY-I.top)/I.height*2-1;if(!L9)u0.target=T*0.1,AJ.target=b*0.055;if(l0){let J0=G.clientX-l0.x,Z0=Math.round(J0/52);if(Z0!==l0.acc)a(l0.base+Z0),l0.acc=Z0;$.domElement.style.cursor="grabbing";return}let v=performance.now();if(v-Q7>80)Q7=v,z8=M8(G),$.domElement.style.cursor=z8?"pointer":"default"});let Y9=(G)=>{if(l0){l0=null;try{$.domElement.releasePointerCapture(G.pointerId)}catch{}}if(M.target!==0){if(M.target=0,clearTimeout(n),!H0)r()}};$.domElement.addEventListener("pointerup",Y9),$.domElement.addEventListener("pointerleave",(G)=>{if(!l0)AJ.target=0,u0.target=0;Y9(G)});let H9=0,$7=null;$.domElement.addEventListener("wheel",(G)=>{if(z8!=="knob"&&!l0)return;G.preventDefault(),H9+=G.deltaY,clearTimeout($7),$7=setTimeout(()=>H9=0,200);while(Math.abs(H9)>=100)a(E.mode+(H9>0?1:-1)),H9-=Math.sign(H9)*100},{passive:!1});let B8=()=>{if(!E0())return;M.target=-0.032,setTimeout(()=>M.target=0,130),CJ.press(),r()};addEventListener("keydown",(G)=>{if(G.target===W0){if(G.key==="Enter")G.preventDefault(),B8();return}if(G.target?.tagName==="INPUT"||G.target?.tagName==="TEXTAREA")return;if(G.key==="ArrowRight")a(E.mode+1);else if(G.key==="ArrowLeft")a(E.mode-1);else if(G.key==="Enter")B8();else if(G.key.toLowerCase()==="l")E.lane=E.lane==="inference"?"devtools":"inference",k.target=E.lane==="inference"?-0.22:0.22,CJ.lever(),E.dirty=!0}),d?.addEventListener("click",B8),s?.addEventListener("click",()=>{if(E.modeName()==="LANES")X0(E.lane);else f("inference")});function r9(){let G=J.clientWidth,I=Math.max(360,Math.min(640,Math.round(G*0.62)));$.setSize(G,I),Y.aspect=G/I,Y.position.z=G<560?3.9:G<760?3.4:3.05,Y.updateProjectionMatrix(),E.dirty=!0}new ResizeObserver(r9).observe(J),r9();let I8=performance.now(),f9=0,j7=[AJ,u0,r0,M,k,j];function Z7(G){f9=requestAnimationFrame(Z7);let I=Math.min(0.25,(G-I8)/1000),T=Math.min(0.05,I);I8=G;let b=G/1000;m.t=b;let v=E.step(I,b),J0=G-U0<2500;if(!(!E.booted||E.busy||v||J0||j7.some((K0)=>!K0.settled())))if(Math.abs(V.position.y-0.02)>0.0004)V.position.y+=(0.02-V.position.y)*Math.min(1,T*3);else return;else if(!L9&&J0)V.position.y=0.02+Math.sin(b*0.9)*0.012;if(!L9)V.rotation.x=AJ.step(T),V.rotation.y=u0.step(T);L.rotation.y=r0.step(T),c.position.y=M.step(T),s0.rotation.z=k.step(T),a0.position.x=j.step(T),f0.material.color.set(E.lane==="devtools"?R8:1327146),p0.material.color.set(E.lane==="inference"?R8:1327146),q.color.setHex(R8).multiplyScalar(E.busy?0.75+Math.sin(b*9)*0.25:1),$.render(Z,Y)}if(L9){let G=()=>{E.step(0.03333333333333333,performance.now()/1000),L.rotation.y=r0.target,c.position.y=M.target,s0.rotation.z=k.target,a0.position.x=j.target,$.render(Z,Y)};setInterval(G,250),G()}else{let G=!0,I=!1,T=()=>{let b=G&&!document.hidden;if(b&&!I)I=!0,I8=performance.now(),f9=requestAnimationFrame(Z7);else if(!b&&I)I=!1,cancelAnimationFrame(f9)};new IntersectionObserver((b)=>{G=b[0]?.isIntersecting!==!1,T()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",T),T()}let A8=new h;function x6(G){return G.getWorldPosition(A8),A8.project(Y),{x:(A8.x+1)/2*$.domElement.clientWidth,y:(1-A8.y)/2*$.domElement.clientHeight}}function g6(){let G=[{obj:P,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — chat, search, lookups, your ledger."},{obj:u,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:L,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:k0,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up there is the session."}],I=document.createElement("div");I.className="dv-coach",I.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(I);let T=I.querySelector(".dv-coach-ring"),b=I.querySelector(".dv-coach-step"),v=I.querySelector(".dv-coach-txt"),J0=I.querySelector('[data-a="next"]'),Z0=0,K0=()=>{let z0=G[Z0],S0=x6(z0.obj);T.style.left=S0.x+"px",T.style.top=S0.y+"px",T.style.width=T.style.height=z0.ring+"px",b.textContent=`${Z0+1} / ${G.length} — ${z0.k}`,v.textContent=z0.txt,J0.textContent=Z0===G.length-1?"Start":"Next",CJ.detent(Z0)},R0=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}I.remove()};I.querySelector('[data-a="skip"]').addEventListener("click",R0),J0.addEventListener("click",()=>{if(Z0++,Z0>=G.length)R0();else K0()}),K0()}let v7=!1;try{v7=!!localStorage.getItem("vc-device-coach")}catch{}if(!v7&&!L9)setTimeout(g6,L9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),$0(),I0().then(A0),window.__device={ready:!0,os:E,setMode:(G)=>a(G),pickAt:(G,I)=>M8({clientX:G,clientY:I}),frames:()=>$.info.render.frame,screenClientPoint:(G,I)=>{let T=new h((G-0.5)*1.44,(I-0.5)*0.62,0);P.localToWorld(T),T.project(Y);let b=$.domElement.getBoundingClientRect();return{x:b.left+(T.x+1)/2*b.width,y:b.top+(1-T.y)/2*b.height}},fire:r,snapshot:()=>{return $.render(Z,Y),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",FW);else FW();
