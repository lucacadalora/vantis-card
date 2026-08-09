var DW=Object.create;var{getPrototypeOf:RW,defineProperty:Q8,getOwnPropertyNames:p6,getOwnPropertyDescriptor:kW}=Object,h7=Object.prototype.hasOwnProperty;function x7(J){return this[J]}var r5=(J,Q,$)=>{var Z=p6(Q);for(let K of Z)if(!h7.call(J,K)&&K!=="default")Q8(J,K,{get:x7.bind(Q,K),enumerable:!0});if($){for(let K of Z)if(!h7.call($,K)&&K!=="default")Q8($,K,{get:x7.bind(Q,K),enumerable:!0});return $}},LW,VW,t5=(J,Q,$)=>{var Z=J!=null&&typeof J==="object";if(Z){var K=Q?LW??=new WeakMap:VW??=new WeakMap,W=K.get(J);if(W)return W}$=J!=null?DW(RW(J)):{};let X=Q||!J||!J.__esModule?Q8($,"default",{value:J,enumerable:!0}):$;for(let Y of p6(J))if(!h7.call(X,Y))Q8(X,Y,{get:x7.bind(J,Y),enumerable:!0});if(Z)K.set(J,X);return X},e5=(J)=>{var Q=(t$??=new WeakMap).get(J),$;if(Q)return Q;if(Q=Q8({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function"){for(var Z of p6(J))if(!h7.call(Q,Z))Q8(Q,Z,{get:x7.bind(J,Z),enumerable:!($=kW(J,Z))||$.enumerable})}return t$.set(J,Q),Q},t$,Jq=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var zW=(J)=>J;function MW(J,Q){this[J]=zW.bind(null,Q)}var Qq=(J,Q)=>{for(var $ in Q)Q8(J,$,{get:Q[$],enumerable:!0,configurable:!0,set:MW.bind(Q,$)})};var $q=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var Zq=((J)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(J,{get:(Q,$)=>(typeof require<"u"?require:Q)[$]}):J)(function(J){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var BZ="185";var IZ=0,GQ=1,AZ=2;var E7=1,CZ=2,n8=3,s8=0,yJ=1,E9=2,D9=0,D7=1,FQ=2,OQ=3,EQ=4,PZ=5;var i8=100,_Z=101,wZ=102,TZ=103,SZ=104,jZ=200,fZ=201,vZ=202,yZ=203,bZ=204,hZ=205,xZ=206,gZ=207,pZ=208,mZ=209,lZ=210,dZ=211,uZ=212,cZ=213,nZ=214,sZ=0,iZ=1,oZ=2,DQ=3,aZ=4,rZ=5,tZ=6,eZ=7,JK=0,QK=1,$K=2,U9=0,RQ=1,kQ=2,LQ=3,R7=4,VQ=5,zQ=6,MQ=7;var o8=301,Y8=302,U6=303,H6=304,k7=306,ZK=1000,q6=1001,KK=1002,i9=1003,WK=1004;var L7=1005;var LJ=1006,N6=1007;var U8=1008;var H9=1009,XK=1010,YK=1011,V7=1012,BQ=1013,o9=1014,T9=1015,S9=1016,IQ=1017,AQ=1018,a8=1020,UK=35902,HK=35899,qK=1021,NK=1022,R9=1023,H8=1026,q8=1027,GK=1028,CQ=1029,N8=1030,PQ=1031;var _Q=1033,G6=33776,F6=33777,O6=33778,E6=33779,wQ=35840,TQ=35841,SQ=35842,jQ=35843,fQ=36196,vQ=37492,yQ=37496,bQ=37488,hQ=37489,D6=37490,xQ=37491,gQ=37808,pQ=37809,mQ=37810,lQ=37811,dQ=37812,uQ=37813,cQ=37814,nQ=37815,sQ=37816,iQ=37817,oQ=37818,aQ=37819,rQ=37820,tQ=37821,eQ=36492,J$=36494,Q$=36495,$$=36283,Z$=36284,R6=36285,K$=36286;var W$=0,FK=1,G8="",q9="srgb",X$="srgb-linear",Y$="linear",YJ="srgb";var OK=512,EK=513,DK=514,k6=515,RK=516,kK=517,L6=518,LK=519;var U$="300 es",H$=2000;function BW(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function IW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function O7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function VK(){let J=O7("canvas");return J.style.display="block",J}var e$={},c8=null;function q$(...J){let Q="THREE."+J.shift();if(c8)c8("log",Q,...J);else console.log(Q,...J)}function zK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function f0(...J){J=zK(J);let Q="THREE."+J.shift();if(c8)c8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function j0(...J){J=zK(J);let Q="THREE."+J.shift();if(c8)c8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function X8(...J){let Q=J.join(" ");if(Q in e$)return;e$[Q]=!0,f0(...J)}function MK(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var BK={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class j9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var jJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var m6=Math.PI/180,X6=180/Math.PI;function z7(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(jJ[J&255]+jJ[J>>8&255]+jJ[J>>16&255]+jJ[J>>24&255]+"-"+jJ[Q&255]+jJ[Q>>8&255]+"-"+jJ[Q>>16&15|64]+jJ[Q>>24&255]+"-"+jJ[$&63|128]+jJ[$>>8&255]+"-"+jJ[$>>16&255]+jJ[$>>24&255]+jJ[Z&255]+jJ[Z>>8&255]+jJ[Z>>16&255]+jJ[Z>>24&255]).toLowerCase()}function i0(J,Q,$){return Math.max(Q,Math.min($,J))}function AW(J,Q){return(J%Q+Q)%Q}function l6(J,Q,$){return(1-$)*J+$*Q}function Y7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function mJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class u0{static{u0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(i0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class f9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],U=$[Z+1],H=$[Z+2],N=$[Z+3],F=K[W+0],q=K[W+1],D=K[W+2],V=K[W+3];if(N!==V||Y!==F||U!==q||H!==D){let B=Y*F+U*q+H*D+N*V;if(B<0)F=-F,q=-q,D=-D,V=-V,B=-B;let G=1-X;if(B<0.9995){let O=Math.acos(B),w=Math.sin(O);G=Math.sin(G*O)/w,X=Math.sin(X*O)/w,Y=Y*G+F*X,U=U*G+q*X,H=H*G+D*X,N=N*G+V*X}else{Y=Y*G+F*X,U=U*G+q*X,H=H*G+D*X,N=N*G+V*X;let O=1/Math.sqrt(Y*Y+U*U+H*H+N*N);Y*=O,U*=O,H*=O,N*=O}}J[Q]=Y,J[Q+1]=U,J[Q+2]=H,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],U=$[Z+2],H=$[Z+3],N=K[W],F=K[W+1],q=K[W+2],D=K[W+3];return J[Q]=X*D+H*N+Y*q-U*F,J[Q+1]=Y*D+H*F+U*N-X*q,J[Q+2]=U*D+H*q+X*F-Y*N,J[Q+3]=H*D-X*N-Y*F-U*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,U=X($/2),H=X(Z/2),N=X(K/2),F=Y($/2),q=Y(Z/2),D=Y(K/2);switch(W){case"XYZ":this._x=F*H*N+U*q*D,this._y=U*q*N-F*H*D,this._z=U*H*D+F*q*N,this._w=U*H*N-F*q*D;break;case"YXZ":this._x=F*H*N+U*q*D,this._y=U*q*N-F*H*D,this._z=U*H*D-F*q*N,this._w=U*H*N+F*q*D;break;case"ZXY":this._x=F*H*N-U*q*D,this._y=U*q*N+F*H*D,this._z=U*H*D+F*q*N,this._w=U*H*N-F*q*D;break;case"ZYX":this._x=F*H*N-U*q*D,this._y=U*q*N+F*H*D,this._z=U*H*D-F*q*N,this._w=U*H*N+F*q*D;break;case"YZX":this._x=F*H*N+U*q*D,this._y=U*q*N+F*H*D,this._z=U*H*D-F*q*N,this._w=U*H*N-F*q*D;break;case"XZY":this._x=F*H*N-U*q*D,this._y=U*q*N-F*H*D,this._z=U*H*D+F*q*N,this._w=U*H*N+F*q*D;break;default:f0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],U=Q[2],H=Q[6],N=Q[10],F=$+X+N;if(F>0){let q=0.5/Math.sqrt(F+1);this._w=0.25/q,this._x=(H-Y)*q,this._y=(K-U)*q,this._z=(W-Z)*q}else if($>X&&$>N){let q=2*Math.sqrt(1+$-X-N);this._w=(H-Y)/q,this._x=0.25*q,this._y=(Z+W)/q,this._z=(K+U)/q}else if(X>N){let q=2*Math.sqrt(1+X-$-N);this._w=(K-U)/q,this._x=(Z+W)/q,this._y=0.25*q,this._z=(Y+H)/q}else{let q=2*Math.sqrt(1+N-$-X);this._w=(W-Z)/q,this._x=(K+U)/q,this._y=(Y+H)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(i0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,U=Q._z,H=Q._w;return this._x=$*H+W*X+Z*U-K*Y,this._y=Z*H+W*Y+K*X-$*U,this._z=K*H+W*U+$*Y-Z*X,this._w=W*H-$*X-Z*Y-K*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let U=Math.acos(X),H=Math.sin(U);Y=Math.sin(Y*U)/H,Q=Math.sin(Q*U)/H,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{static{y.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(JZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(JZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,U=2*(W*Z-X*$),H=2*(X*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+Y*U+W*N-X*H,this.y=$+Y*H+X*U-K*N,this.z=Z+Y*N+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this.z=i0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this.z=i0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return d6.copy(this).projectOnVector(J),this.sub(d6)}reflect(J){return this.sub(d6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(i0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var d6=new y,JZ=new f9;class y0{static{y0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U)}set(J,Q,$,Z,K,W,X,Y,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=X,H[3]=Q,H[4]=K,H[5]=Y,H[6]=$,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],U=$[1],H=$[4],N=$[7],F=$[2],q=$[5],D=$[8],V=Z[0],B=Z[3],G=Z[6],O=Z[1],w=Z[4],P=Z[7],E=Z[2],A=Z[5],I=Z[8];return K[0]=W*V+X*O+Y*E,K[3]=W*B+X*w+Y*A,K[6]=W*G+X*P+Y*I,K[1]=U*V+H*O+N*E,K[4]=U*B+H*w+N*A,K[7]=U*G+H*P+N*I,K[2]=F*V+q*O+D*E,K[5]=F*B+q*w+D*A,K[8]=F*G+q*P+D*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8];return Q*W*H-Q*X*U-$*K*H+$*X*Y+Z*K*U-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=H*W-X*U,F=X*Y-H*K,q=U*K-W*Y,D=Q*N+$*F+Z*q;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let V=1/D;return J[0]=N*V,J[1]=(Z*U-H*$)*V,J[2]=(X*$-Z*W)*V,J[3]=F*V,J[4]=(H*Q-Z*Y)*V,J[5]=(Z*K-X*Q)*V,J[6]=q*V,J[7]=($*Y-U*Q)*V,J[8]=(W*Q-$*K)*V,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),U=Math.sin(K);return this.set($*Y,$*U,-$*(Y*W+U*X)+W+J,-Z*U,Z*Y,-Z*(-U*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return X8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(u6.makeScale(J,Q)),this}rotate(J){return X8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(u6.makeRotation(-J)),this}translate(J,Q){return X8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(u6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var u6=new y0,QZ=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),$Z=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function CW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=w9(K.r),K.g=w9(K.g),K.b=w9(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=u8(K.r),K.g=u8(K.g),K.b=u8(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return X8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return X8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var s0=CW();function w9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function u8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var S8;class N${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(S8===void 0)S8=O7("canvas");S8.width=J.width,S8.height=J.height;let Z=S8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=S8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=O7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=w9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(w9(Q[$]/255)*255);else Q[$]=w9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return f0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var PW=0;class M7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PW++}),this.uuid=z7(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(c6(Z[W].image));else K.push(c6(Z[W]))}else K=c6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function c6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return N$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return f0("Texture: Unable to serialize Texture."),{}}var _W=0,n6=new y;class wJ extends j9{constructor(J=wJ.DEFAULT_IMAGE,Q=wJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,U=wJ.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:_W++}),this.uuid=z7(),this.name="",this.source=new M7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new u0(0,0),this.repeat=new u0(1,1),this.center=new u0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(n6).x}get height(){return this.source.getSize(n6).y}get depth(){return this.source.getSize(n6).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){f0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){f0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}wJ.DEFAULT_IMAGE=null;wJ.DEFAULT_MAPPING=300;wJ.DEFAULT_ANISOTROPY=1;class GJ{static{GJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,U=Y[0],H=Y[4],N=Y[8],F=Y[1],q=Y[5],D=Y[9],V=Y[2],B=Y[6],G=Y[10];if(Math.abs(H-F)<0.01&&Math.abs(N-V)<0.01&&Math.abs(D-B)<0.01){if(Math.abs(H+F)<0.1&&Math.abs(N+V)<0.1&&Math.abs(D+B)<0.1&&Math.abs(U+q+G-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let w=(U+1)/2,P=(q+1)/2,E=(G+1)/2,A=(H+F)/4,I=(N+V)/4,_=(D+B)/4;if(w>P&&w>E)if(w<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(w),Z=A/$,K=I/$;else if(P>E)if(P<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),$=A/Z,K=_/Z;else if(E<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(E),$=I/K,Z=_/K;return this.set($,Z,K,Q),this}let O=Math.sqrt((B-D)*(B-D)+(N-V)*(N-V)+(F-H)*(F-H));if(Math.abs(O)<0.001)O=1;return this.x=(B-D)/O,this.y=(N-V)/O,this.z=(F-H)/O,this.w=Math.acos((U+q+G-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this.z=i0(this.z,J.z,Q.z),this.w=i0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this.z=i0(this.z,J,Q),this.w=i0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G$ extends j9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new GJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new GJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new wJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new M7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tJ extends G${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class V6 extends wJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class F$ extends wJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WJ{static{WJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,U,H,N,F,q,D,V,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,U,H,N,F,q,D,V,B)}set(J,Q,$,Z,K,W,X,Y,U,H,N,F,q,D,V,B){let G=this.elements;return G[0]=J,G[4]=Q,G[8]=$,G[12]=Z,G[1]=K,G[5]=W,G[9]=X,G[13]=Y,G[2]=U,G[6]=H,G[10]=N,G[14]=F,G[3]=q,G[7]=D,G[11]=V,G[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/j8.setFromMatrixColumn(J,0).length(),K=1/j8.setFromMatrixColumn(J,1).length(),W=1/j8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let F=W*H,q=W*N,D=X*H,V=X*N;Q[0]=Y*H,Q[4]=-Y*N,Q[8]=U,Q[1]=q+D*U,Q[5]=F-V*U,Q[9]=-X*Y,Q[2]=V-F*U,Q[6]=D+q*U,Q[10]=W*Y}else if(J.order==="YXZ"){let F=Y*H,q=Y*N,D=U*H,V=U*N;Q[0]=F+V*X,Q[4]=D*X-q,Q[8]=W*U,Q[1]=W*N,Q[5]=W*H,Q[9]=-X,Q[2]=q*X-D,Q[6]=V+F*X,Q[10]=W*Y}else if(J.order==="ZXY"){let F=Y*H,q=Y*N,D=U*H,V=U*N;Q[0]=F-V*X,Q[4]=-W*N,Q[8]=D+q*X,Q[1]=q+D*X,Q[5]=W*H,Q[9]=V-F*X,Q[2]=-W*U,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let F=W*H,q=W*N,D=X*H,V=X*N;Q[0]=Y*H,Q[4]=D*U-q,Q[8]=F*U+V,Q[1]=Y*N,Q[5]=V*U+F,Q[9]=q*U-D,Q[2]=-U,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let F=W*Y,q=W*U,D=X*Y,V=X*U;Q[0]=Y*H,Q[4]=V-F*N,Q[8]=D*N+q,Q[1]=N,Q[5]=W*H,Q[9]=-X*H,Q[2]=-U*H,Q[6]=q*N+D,Q[10]=F-V*N}else if(J.order==="XZY"){let F=W*Y,q=W*U,D=X*Y,V=X*U;Q[0]=Y*H,Q[4]=-N,Q[8]=U*H,Q[1]=F*N+V,Q[5]=W*H,Q[9]=q*N-D,Q[2]=D*N-q,Q[6]=X*H,Q[10]=V*N+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(wW,J,TW)}lookAt(J,Q,$){let Z=this.elements;if(nJ.subVectors(J,Q),nJ.lengthSq()===0)nJ.z=1;if(nJ.normalize(),l9.crossVectors($,nJ),l9.lengthSq()===0){if(Math.abs($.z)===1)nJ.x+=0.0001;else nJ.z+=0.0001;nJ.normalize(),l9.crossVectors($,nJ)}return l9.normalize(),g7.crossVectors(nJ,l9),Z[0]=l9.x,Z[4]=g7.x,Z[8]=nJ.x,Z[1]=l9.y,Z[5]=g7.y,Z[9]=nJ.y,Z[2]=l9.z,Z[6]=g7.z,Z[10]=nJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],U=$[12],H=$[1],N=$[5],F=$[9],q=$[13],D=$[2],V=$[6],B=$[10],G=$[14],O=$[3],w=$[7],P=$[11],E=$[15],A=Z[0],I=Z[4],_=Z[8],k=Z[12],M=Z[1],d=Z[5],C=Z[9],l=Z[13],r=Z[2],p=Z[6],u=Z[10],i=Z[14],x=Z[3],J0=Z[7],Q0=Z[11],G0=Z[15];return K[0]=W*A+X*M+Y*r+U*x,K[4]=W*I+X*d+Y*p+U*J0,K[8]=W*_+X*C+Y*u+U*Q0,K[12]=W*k+X*l+Y*i+U*G0,K[1]=H*A+N*M+F*r+q*x,K[5]=H*I+N*d+F*p+q*J0,K[9]=H*_+N*C+F*u+q*Q0,K[13]=H*k+N*l+F*i+q*G0,K[2]=D*A+V*M+B*r+G*x,K[6]=D*I+V*d+B*p+G*J0,K[10]=D*_+V*C+B*u+G*Q0,K[14]=D*k+V*l+B*i+G*G0,K[3]=O*A+w*M+P*r+E*x,K[7]=O*I+w*d+P*p+E*J0,K[11]=O*_+w*C+P*u+E*Q0,K[15]=O*k+w*l+P*i+E*G0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],U=J[13],H=J[2],N=J[6],F=J[10],q=J[14],D=J[3],V=J[7],B=J[11],G=J[15],O=Y*q-U*F,w=X*q-U*N,P=X*F-Y*N,E=W*q-U*H,A=W*F-Y*H,I=W*N-X*H;return Q*(V*O-B*w+G*P)-$*(D*O-B*E+G*A)+Z*(D*w-V*E+G*I)-K*(D*P-V*A+B*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],U=J[6],H=J[10];return Q*(W*H-X*U)-$*(K*H-X*Y)+Z*(K*U-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],U=J[7],H=J[8],N=J[9],F=J[10],q=J[11],D=J[12],V=J[13],B=J[14],G=J[15],O=Q*X-$*W,w=Q*Y-Z*W,P=Q*U-K*W,E=$*Y-Z*X,A=$*U-K*X,I=Z*U-K*Y,_=H*V-N*D,k=H*B-F*D,M=H*G-q*D,d=N*B-F*V,C=N*G-q*V,l=F*G-q*B,r=O*l-w*C+P*d+E*M-A*k+I*_;if(r===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let p=1/r;return J[0]=(X*l-Y*C+U*d)*p,J[1]=(Z*C-$*l-K*d)*p,J[2]=(V*I-B*A+G*E)*p,J[3]=(F*A-N*I-q*E)*p,J[4]=(Y*M-W*l-U*k)*p,J[5]=(Q*l-Z*M+K*k)*p,J[6]=(B*P-D*I-G*w)*p,J[7]=(H*I-F*P+q*w)*p,J[8]=(W*C-X*M+U*_)*p,J[9]=($*M-Q*C-K*_)*p,J[10]=(D*A-V*P+G*O)*p,J[11]=(N*P-H*A-q*O)*p,J[12]=(X*k-W*d-Y*_)*p,J[13]=(Q*d-$*k+Z*_)*p,J[14]=(V*w-D*E-B*O)*p,J[15]=(H*E-N*w+F*O)*p,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,U=K*W,H=K*X;return this.set(U*W+$,U*X-Z*Y,U*Y+Z*X,0,U*X+Z*Y,H*X+$,H*Y-Z*W,0,U*Y-Z*X,H*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,U=K+K,H=W+W,N=X+X,F=K*U,q=K*H,D=K*N,V=W*H,B=W*N,G=X*N,O=Y*U,w=Y*H,P=Y*N,E=$.x,A=$.y,I=$.z;return Z[0]=(1-(V+G))*E,Z[1]=(q+P)*E,Z[2]=(D-w)*E,Z[3]=0,Z[4]=(q-P)*A,Z[5]=(1-(F+G))*A,Z[6]=(B+O)*A,Z[7]=0,Z[8]=(D+w)*I,Z[9]=(B-O)*I,Z[10]=(1-(F+V))*I,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=j8.set(Z[0],Z[1],Z[2]).length(),X=j8.set(Z[4],Z[5],Z[6]).length(),Y=j8.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;W9.copy(this);let U=1/W,H=1/X,N=1/Y;return W9.elements[0]*=U,W9.elements[1]*=U,W9.elements[2]*=U,W9.elements[4]*=H,W9.elements[5]*=H,W9.elements[6]*=H,W9.elements[8]*=N,W9.elements[9]*=N,W9.elements[10]*=N,Q.setFromRotationMatrix(W9),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2*K/(Q-J),N=2*K/($-Z),F=(Q+J)/(Q-J),q=($+Z)/($-Z),D,V;if(Y)D=K/(W-K),V=W*K/(W-K);else if(X===2000)D=-(W+K)/(W-K),V=-2*W*K/(W-K);else if(X===2001)D=-W/(W-K),V=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=F,U[12]=0,U[1]=0,U[5]=N,U[9]=q,U[13]=0,U[2]=0,U[6]=0,U[10]=D,U[14]=V,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let U=this.elements,H=2/(Q-J),N=2/($-Z),F=-(Q+J)/(Q-J),q=-($+Z)/($-Z),D,V;if(Y)D=1/(W-K),V=W/(W-K);else if(X===2000)D=-2/(W-K),V=-(W+K)/(W-K);else if(X===2001)D=-1/(W-K),V=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return U[0]=H,U[4]=0,U[8]=0,U[12]=F,U[1]=0,U[5]=N,U[9]=0,U[13]=q,U[2]=0,U[6]=0,U[10]=D,U[14]=V,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var j8=new y,W9=new WJ,wW=new y(0,0,0),TW=new y(1,1,1),l9=new y,g7=new y,nJ=new y,ZZ=new WJ,KZ=new f9;class O9{constructor(J=0,Q=0,$=0,Z=O9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],U=Z[5],H=Z[9],N=Z[2],F=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(i0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,q),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-i0(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(X,q),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(i0(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,q),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-i0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,q),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(i0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(X,q);break;case"XZY":if(this._z=Math.asin(-i0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,U),this._y=Math.atan2(X,K);else this._x=Math.atan2(-H,q),this._y=0;break;default:f0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return ZZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(ZZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return KZ.setFromEuler(this),this.setFromQuaternion(KZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}O9.DEFAULT_ORDER="XYZ";class B7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var SW=0,WZ=new y,f8=new f9,B9=new WJ,p7=new y,U7=new y,jW=new y,fW=new f9,XZ=new y(1,0,0),YZ=new y(0,1,0),UZ=new y(0,0,1),HZ={type:"added"},vW={type:"removed"},v8={type:"childadded",child:null},s6={type:"childremoved",child:null};class RJ extends j9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:SW++}),this.uuid=z7(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=RJ.DEFAULT_UP.clone();let J=new y,Q=new O9,$=new f9,Z=new y(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new WJ},normalMatrix:{value:new y0}}),this.matrix=new WJ,this.matrixWorld=new WJ,this.matrixAutoUpdate=RJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=RJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return f8.setFromAxisAngle(J,Q),this.quaternion.multiply(f8),this}rotateOnWorldAxis(J,Q){return f8.setFromAxisAngle(J,Q),this.quaternion.premultiply(f8),this}rotateX(J){return this.rotateOnAxis(XZ,J)}rotateY(J){return this.rotateOnAxis(YZ,J)}rotateZ(J){return this.rotateOnAxis(UZ,J)}translateOnAxis(J,Q){return WZ.copy(J).applyQuaternion(this.quaternion),this.position.add(WZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(XZ,J)}translateY(J){return this.translateOnAxis(YZ,J)}translateZ(J){return this.translateOnAxis(UZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(B9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)p7.copy(J);else p7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),U7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)B9.lookAt(U7,p7,this.up);else B9.lookAt(p7,U7,this.up);if(this.quaternion.setFromRotationMatrix(B9),Z)B9.extractRotation(Z.matrixWorld),f8.setFromRotationMatrix(B9),this.quaternion.premultiply(f8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return j0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(HZ),v8.child=J,this.dispatchEvent(v8),v8.child=null;else j0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(vW),s6.child=J,this.dispatchEvent(s6),s6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),B9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),B9.multiply(J.parent.matrixWorld);return J.applyMatrix4(B9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(HZ),v8.child=J,this.dispatchEvent(v8),v8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(U7,J,jW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(U7,fW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let U=0,H=Y.length;U<H;U++){let N=Y[U];K(J.shapes,N)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,U=this.material.length;Y<U;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),U=W(J.textures),H=W(J.images),N=W(J.shapes),F=W(J.skeletons),q=W(J.animations),D=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(H.length>0)$.images=H;if(N.length>0)$.shapes=N;if(F.length>0)$.skeletons=F;if(q.length>0)$.animations=q;if(D.length>0)$.nodes=D}return $.object=Z,$;function W(X){let Y=[];for(let U in X){let H=X[U];delete H.metadata,Y.push(H)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}RJ.DEFAULT_UP=new y(0,1,0);RJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;RJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xJ extends RJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var yW={type:"move"};class I7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new xJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new xJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new xJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let V of J.hand.values()){let B=Q.getJointPose(V,$),G=this._getHandJoint(U,V);if(B!==null)G.matrix.fromArray(B.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,G.jointRadius=B.radius;G.visible=B!==null}let H=U.joints["index-finger-tip"],N=U.joints["thumb-tip"],F=H.position.distanceTo(N.position),q=0.02,D=0.005;if(U.inputState.pinching&&F>q+D)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&F<=q-D)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(yW)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new xJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var IK={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},d9={h:0,s:0,l:0},m7={h:0,s:0,l:0};function i6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class c0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,s0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=s0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,s0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=s0.workingColorSpace){if(J=AW(J,1),Q=i0(Q,0,1),$=i0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=i6(W,K,J+0.3333333333333333),this.g=i6(W,K,J),this.b=i6(W,K,J-0.3333333333333333)}return s0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)f0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:f0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else f0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=IK[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else f0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=w9(J.r),this.g=w9(J.g),this.b=w9(J.b),this}copyLinearToSRGB(J){return this.r=u8(J.r),this.g=u8(J.g),this.b=u8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return s0.workingToColorSpace(fJ.copy(this),J),Math.round(i0(fJ.r*255,0,255))*65536+Math.round(i0(fJ.g*255,0,255))*256+Math.round(i0(fJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=s0.workingColorSpace){s0.workingToColorSpace(fJ.copy(this),Q);let{r:$,g:Z,b:K}=fJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,U,H=(X+W)/2;if(X===W)Y=0,U=0;else{let N=W-X;switch(U=H<=0.5?N/(W+X):N/(2-W-X),W){case $:Y=(Z-K)/N+(Z<K?6:0);break;case Z:Y=(K-$)/N+2;break;case K:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=U,J.l=H,J}getRGB(J,Q=s0.workingColorSpace){return s0.workingToColorSpace(fJ.copy(this),Q),J.r=fJ.r,J.g=fJ.g,J.b=fJ.b,J}getStyle(J="srgb"){s0.workingToColorSpace(fJ.copy(this),J);let{r:Q,g:$,b:Z}=fJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(d9),this.setHSL(d9.h+J,d9.s+Q,d9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(d9),J.getHSL(m7);let $=l6(d9.h,m7.h,Q),Z=l6(d9.s,m7.s,Q),K=l6(d9.l,m7.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var fJ=new c0;c0.NAMES=IK;class r8 extends RJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new O9,this.environmentIntensity=1,this.environmentRotation=new O9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var X9=new y,I9=new y,o6=new y,A9=new y,y8=new y,b8=new y,qZ=new y,a6=new y,r6=new y,t6=new y,e6=new GJ,JQ=new GJ,QQ=new GJ;class rJ{constructor(J=new y,Q=new y,$=new y){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),X9.subVectors(J,Q),Z.cross(X9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){X9.subVectors(Z,Q),I9.subVectors($,Q),o6.subVectors(J,Q);let W=X9.dot(X9),X=X9.dot(I9),Y=X9.dot(o6),U=I9.dot(I9),H=I9.dot(o6),N=W*U-X*X;if(N===0)return K.set(0,0,0),null;let F=1/N,q=(U*Y-X*H)*F,D=(W*H-X*Y)*F;return K.set(1-q-D,D,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,A9)===null)return!1;return A9.x>=0&&A9.y>=0&&A9.x+A9.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,A9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,A9.x),Y.addScaledVector(W,A9.y),Y.addScaledVector(X,A9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return e6.setScalar(0),JQ.setScalar(0),QQ.setScalar(0),e6.fromBufferAttribute(J,Q),JQ.fromBufferAttribute(J,$),QQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(e6,K.x),W.addScaledVector(JQ,K.y),W.addScaledVector(QQ,K.z),W}static isFrontFacing(J,Q,$,Z){return X9.subVectors($,Q),I9.subVectors(J,Q),X9.cross(I9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return X9.subVectors(this.c,this.b),I9.subVectors(this.a,this.b),X9.cross(I9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return rJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return rJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return rJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return rJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return rJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;y8.subVectors(Z,$),b8.subVectors(K,$),a6.subVectors(J,$);let Y=y8.dot(a6),U=b8.dot(a6);if(Y<=0&&U<=0)return Q.copy($);r6.subVectors(J,Z);let H=y8.dot(r6),N=b8.dot(r6);if(H>=0&&N<=H)return Q.copy(Z);let F=Y*N-H*U;if(F<=0&&Y>=0&&H<=0)return W=Y/(Y-H),Q.copy($).addScaledVector(y8,W);t6.subVectors(J,K);let q=y8.dot(t6),D=b8.dot(t6);if(D>=0&&q<=D)return Q.copy(K);let V=q*U-Y*D;if(V<=0&&U>=0&&D<=0)return X=U/(U-D),Q.copy($).addScaledVector(b8,X);let B=H*D-q*N;if(B<=0&&N-H>=0&&q-D>=0)return qZ.subVectors(K,Z),X=(N-H)/(N-H+(q-D)),Q.copy(Z).addScaledVector(qZ,X);let G=1/(B+V+F);return W=V*G,X=F*G,Q.copy($).addScaledVector(y8,W).addScaledVector(b8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class v9{constructor(J=new y(1/0,1/0,1/0),Q=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(Y9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(Y9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=Y9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,Y9);else Y9.fromBufferAttribute(K,W);Y9.applyMatrix4(J.matrixWorld),this.expandByPoint(Y9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();l7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();l7.copy($.boundingBox)}l7.applyMatrix4(J.matrixWorld),this.union(l7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,Y9),Y9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(H7),d7.subVectors(this.max,H7),h8.subVectors(J.a,H7),x8.subVectors(J.b,H7),g8.subVectors(J.c,H7),u9.subVectors(x8,h8),c9.subVectors(g8,x8),$8.subVectors(h8,g8);let Q=[0,-u9.z,u9.y,0,-c9.z,c9.y,0,-$8.z,$8.y,u9.z,0,-u9.x,c9.z,0,-c9.x,$8.z,0,-$8.x,-u9.y,u9.x,0,-c9.y,c9.x,0,-$8.y,$8.x,0];if(!$Q(Q,h8,x8,g8,d7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!$Q(Q,h8,x8,g8,d7))return!1;return u7.crossVectors(u9,c9),Q=[u7.x,u7.y,u7.z],$Q(Q,h8,x8,g8,d7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,Y9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(Y9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return C9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),C9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),C9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),C9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),C9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),C9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),C9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),C9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(C9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var C9=[new y,new y,new y,new y,new y,new y,new y,new y],Y9=new y,l7=new v9,h8=new y,x8=new y,g8=new y,u9=new y,c9=new y,$8=new y,H7=new y,d7=new y,u7=new y,Z8=new y;function $Q(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){Z8.fromArray(J,W);let Y=K.x*Math.abs(Z8.x)+K.y*Math.abs(Z8.y)+K.z*Math.abs(Z8.z),U=Q.dot(Z8),H=$.dot(Z8),N=Z.dot(Z8);if(Math.max(-Math.max(U,H,N),Math.min(U,H,N))>Y)return!1}return!0}var zJ=new y,c7=new u0,bW=0;class iJ extends j9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)c7.fromBufferAttribute(this,Q),c7.applyMatrix3(J),this.setXY(Q,c7.x,c7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix3(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix4(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyNormalMatrix(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.transformDirection(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=Y7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=mJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=Y7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=Y7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=Y7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=Y7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=mJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=mJ(Q,this.array),$=mJ($,this.array),Z=mJ(Z,this.array),K=mJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class z6 extends iJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class M6 extends iJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class lJ extends iJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var hW=new v9,q7=new y,ZQ=new y;class F8{constructor(J=new y,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else hW.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;q7.subVectors(J,this.center);let Q=q7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(q7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else ZQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(q7.copy(J.center).add(ZQ)),this.expandByPoint(q7.copy(J.center).sub(ZQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var xW=0,aJ=new WJ,KQ=new RJ,p8=new y,sJ=new v9,N7=new v9,PJ=new y;class N9 extends j9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xW++}),this.uuid=z7(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((BW(J))?M6:z6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new y0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return aJ.makeRotationFromQuaternion(J),this.applyMatrix4(aJ),this}rotateX(J){return aJ.makeRotationX(J),this.applyMatrix4(aJ),this}rotateY(J){return aJ.makeRotationY(J),this.applyMatrix4(aJ),this}rotateZ(J){return aJ.makeRotationZ(J),this.applyMatrix4(aJ),this}translate(J,Q,$){return aJ.makeTranslation(J,Q,$),this.applyMatrix4(aJ),this}scale(J,Q,$){return aJ.makeScale(J,Q,$),this.applyMatrix4(aJ),this}lookAt(J){return KQ.lookAt(J),KQ.updateMatrix(),this.applyMatrix4(KQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(p8).negate(),this.translate(p8.x,p8.y,p8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new lJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)f0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new v9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(sJ.setFromBufferAttribute(K),this.morphTargetsRelative)PJ.addVectors(this.boundingBox.min,sJ.min),this.boundingBox.expandByPoint(PJ),PJ.addVectors(this.boundingBox.max,sJ.max),this.boundingBox.expandByPoint(PJ);else this.boundingBox.expandByPoint(sJ.min),this.boundingBox.expandByPoint(sJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))j0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new F8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){j0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(J){let $=this.boundingSphere.center;if(sJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(N7.setFromBufferAttribute(X),this.morphTargetsRelative)PJ.addVectors(sJ.min,N7.min),sJ.expandByPoint(PJ),PJ.addVectors(sJ.max,N7.max),sJ.expandByPoint(PJ);else sJ.expandByPoint(N7.min),sJ.expandByPoint(N7.max)}sJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)PJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(PJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let U=0,H=X.count;U<H;U++){if(PJ.fromBufferAttribute(X,U),Y)p8.fromBufferAttribute(J,U),PJ.add(p8);Z=Math.max(Z,$.distanceToSquared(PJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))j0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){j0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new iJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let _=0;_<$.count;_++)X[_]=new y,Y[_]=new y;let U=new y,H=new y,N=new y,F=new u0,q=new u0,D=new u0,V=new y,B=new y;function G(_,k,M){U.fromBufferAttribute($,_),H.fromBufferAttribute($,k),N.fromBufferAttribute($,M),F.fromBufferAttribute(K,_),q.fromBufferAttribute(K,k),D.fromBufferAttribute(K,M),H.sub(U),N.sub(U),q.sub(F),D.sub(F);let d=1/(q.x*D.y-D.x*q.y);if(!isFinite(d))return;V.copy(H).multiplyScalar(D.y).addScaledVector(N,-q.y).multiplyScalar(d),B.copy(N).multiplyScalar(q.x).addScaledVector(H,-D.x).multiplyScalar(d),X[_].add(V),X[k].add(V),X[M].add(V),Y[_].add(B),Y[k].add(B),Y[M].add(B)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let _=0,k=O.length;_<k;++_){let M=O[_],d=M.start,C=M.count;for(let l=d,r=d+C;l<r;l+=3)G(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let w=new y,P=new y,E=new y,A=new y;function I(_){E.fromBufferAttribute(Z,_),A.copy(E);let k=X[_];w.copy(k),w.sub(E.multiplyScalar(E.dot(k))).normalize(),P.crossVectors(A,k);let d=P.dot(Y[_])<0?-1:1;W.setXYZW(_,w.x,w.y,w.z,d)}for(let _=0,k=O.length;_<k;++_){let M=O[_],d=M.start,C=M.count;for(let l=d,r=d+C;l<r;l+=3)I(J.getX(l+0)),I(J.getX(l+1)),I(J.getX(l+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new iJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,q=$.count;F<q;F++)$.setXYZ(F,0,0,0);let Z=new y,K=new y,W=new y,X=new y,Y=new y,U=new y,H=new y,N=new y;if(J)for(let F=0,q=J.count;F<q;F+=3){let D=J.getX(F+0),V=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute(Q,D),K.fromBufferAttribute(Q,V),W.fromBufferAttribute(Q,B),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),X.fromBufferAttribute($,D),Y.fromBufferAttribute($,V),U.fromBufferAttribute($,B),X.add(H),Y.add(H),U.add(H),$.setXYZ(D,X.x,X.y,X.z),$.setXYZ(V,Y.x,Y.y,Y.z),$.setXYZ(B,U.x,U.y,U.z)}else for(let F=0,q=Q.count;F<q;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),H.subVectors(W,K),N.subVectors(Z,K),H.cross(N),$.setXYZ(F+0,H.x,H.y,H.z),$.setXYZ(F+1,H.x,H.y,H.z),$.setXYZ(F+2,H.x,H.y,H.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)PJ.fromBufferAttribute(J,Q),PJ.normalize(),J.setXYZ(Q,PJ.x,PJ.y,PJ.z)}toNonIndexed(){function J(X,Y){let{array:U,itemSize:H,normalized:N}=X,F=new U.constructor(Y.length*H),q=0,D=0;for(let V=0,B=Y.length;V<B;V++){if(X.isInterleavedBufferAttribute)q=Y[V]*X.data.stride+X.offset;else q=Y[V]*H;for(let G=0;G<H;G++)F[D++]=U[q++]}return new iJ(F,H,N)}if(this.index===null)return f0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new N9,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],U=J(Y,$);Q.setAttribute(X,U)}let K=this.morphAttributes;for(let X in K){let Y=[],U=K[X];for(let H=0,N=U.length;H<N;H++){let F=U[H],q=J(F,$);Y.push(q)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let U=W[X];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],H=[];for(let N=0,F=U.length;N<F;N++){let q=U[N];H.push(q.toJSON(J.data))}if(H.length>0)Z[Y]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone(Q))}let K=J.morphAttributes;for(let U in K){let H=[],N=K[U];for(let F=0,q=N.length;F<q;F++)H.push(N[F].clone(Q));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let N=W[U];this.addGroup(N.start,N.count,N.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var gW=0;class a9 extends j9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:gW++}),this.uuid=z7(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new c0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){f0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){f0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new c0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new u0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new u0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var P9=new y,WQ=new y,n7=new y,n9=new y,XQ=new y,s7=new y,YQ=new y;class B6{constructor(J=new y,Q=new y(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,P9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=P9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return P9.copy(this.origin).addScaledVector(this.direction,Q),P9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){WQ.copy(J).add(Q).multiplyScalar(0.5),n7.copy(Q).sub(J).normalize(),n9.copy(this.origin).sub(WQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(n7),X=n9.dot(this.direction),Y=-n9.dot(n7),U=n9.lengthSq(),H=Math.abs(1-W*W),N,F,q,D;if(H>0)if(N=W*Y-X,F=W*X-Y,D=K*H,N>=0)if(F>=-D)if(F<=D){let V=1/H;N*=V,F*=V,q=N*(N+W*F+2*X)+F*(W*N+F+2*Y)+U}else F=K,N=Math.max(0,-(W*F+X)),q=-N*N+F*(F+2*Y)+U;else F=-K,N=Math.max(0,-(W*F+X)),q=-N*N+F*(F+2*Y)+U;else if(F<=-D)N=Math.max(0,-(-W*K+X)),F=N>0?-K:Math.min(Math.max(-K,-Y),K),q=-N*N+F*(F+2*Y)+U;else if(F<=D)N=0,F=Math.min(Math.max(-K,-Y),K),q=F*(F+2*Y)+U;else N=Math.max(0,-(W*K+X)),F=N>0?K:Math.min(Math.max(-K,-Y),K),q=-N*N+F*(F+2*Y)+U;else F=W>0?-K:K,N=Math.max(0,-(W*F+X)),q=-N*N+F*(F+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(WQ).addScaledVector(n7,F);return q}intersectSphere(J,Q){P9.subVectors(J.center,this.origin);let $=P9.dot(this.direction),Z=P9.dot(P9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,U=1/this.direction.x,H=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(U>=0)$=(J.min.x-F.x)*U,Z=(J.max.x-F.x)*U;else $=(J.max.x-F.x)*U,Z=(J.min.x-F.x)*U;if(H>=0)K=(J.min.y-F.y)*H,W=(J.max.y-F.y)*H;else K=(J.max.y-F.y)*H,W=(J.min.y-F.y)*H;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)X=(J.min.z-F.z)*N,Y=(J.max.z-F.z)*N;else X=(J.max.z-F.z)*N,Y=(J.min.z-F.z)*N;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,P9)!==null}intersectTriangle(J,Q,$,Z,K){XQ.subVectors(Q,J),s7.subVectors($,J),YQ.crossVectors(XQ,s7);let W=this.direction.dot(YQ),X;if(W>0){if(Z)return null;X=1}else if(W<0)X=-1,W=-W;else return null;n9.subVectors(this.origin,J);let Y=X*this.direction.dot(s7.crossVectors(n9,s7));if(Y<0)return null;let U=X*this.direction.dot(XQ.cross(n9));if(U<0)return null;if(Y+U>W)return null;let H=-X*n9.dot(YQ);if(H<0)return null;return this.at(H/W,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class TJ extends a9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new c0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var NZ=new WJ,K8=new B6,i7=new F8,GZ=new y,o7=new y,a7=new y,r7=new y,UQ=new y,t7=new y,FZ=new y,e7=new y;class S0 extends RJ{constructor(J=new N9,Q=new TJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){t7.set(0,0,0);for(let Y=0,U=K.length;Y<U;Y++){let H=X[Y],N=K[Y];if(H===0)continue;if(UQ.fromBufferAttribute(N,J),W)t7.addScaledVector(UQ,H);else t7.addScaledVector(UQ.sub(Q),H)}Q.add(t7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(i7.copy($.boundingSphere),i7.applyMatrix4(K),K8.copy(J.ray).recast(J.near),i7.containsPoint(K8.origin)===!1){if(K8.intersectSphere(i7,GZ)===null)return;if(K8.origin.distanceToSquared(GZ)>(J.far-J.near)**2)return}if(NZ.copy(K).invert(),K8.copy(J.ray).applyMatrix4(NZ),$.boundingBox!==null){if(K8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,K8)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,N=K.attributes.normal,F=K.groups,q=K.drawRange;if(X!==null)if(Array.isArray(W))for(let D=0,V=F.length;D<V;D++){let B=F[D],G=W[B.materialIndex],O=Math.max(B.start,q.start),w=Math.min(X.count,Math.min(B.start+B.count,q.start+q.count));for(let P=O,E=w;P<E;P+=3){let A=X.getX(P),I=X.getX(P+1),_=X.getX(P+2);if(Z=J6(this,G,J,$,U,H,N,A,I,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let D=Math.max(0,q.start),V=Math.min(X.count,q.start+q.count);for(let B=D,G=V;B<G;B+=3){let O=X.getX(B),w=X.getX(B+1),P=X.getX(B+2);if(Z=J6(this,W,J,$,U,H,N,O,w,P),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let D=0,V=F.length;D<V;D++){let B=F[D],G=W[B.materialIndex],O=Math.max(B.start,q.start),w=Math.min(Y.count,Math.min(B.start+B.count,q.start+q.count));for(let P=O,E=w;P<E;P+=3){let A=P,I=P+1,_=P+2;if(Z=J6(this,G,J,$,U,H,N,A,I,_),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let D=Math.max(0,q.start),V=Math.min(Y.count,q.start+q.count);for(let B=D,G=V;B<G;B+=3){let O=B,w=B+1,P=B+2;if(Z=J6(this,W,J,$,U,H,N,O,w,P),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}}}function pW(J,Q,$,Z,K,W,X,Y){let U;if(Q.side===1)U=Z.intersectTriangle(X,W,K,!0,Y);else U=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(U===null)return null;e7.copy(Y),e7.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(e7);if(H<$.near||H>$.far)return null;return{distance:H,point:e7.clone(),object:J}}function J6(J,Q,$,Z,K,W,X,Y,U,H){J.getVertexPosition(Y,o7),J.getVertexPosition(U,a7),J.getVertexPosition(H,r7);let N=pW(J,Q,$,Z,o7,a7,r7,FZ);if(N){let F=new y;if(rJ.getBarycoord(FZ,o7,a7,r7,F),K)N.uv=rJ.getInterpolatedAttribute(K,Y,U,H,F,new u0);if(W)N.uv1=rJ.getInterpolatedAttribute(W,Y,U,H,F,new u0);if(X){if(N.normal=rJ.getInterpolatedAttribute(X,Y,U,H,F,new y),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let q={a:Y,b:U,c:H,normal:new y,materialIndex:0};rJ.getNormal(o7,a7,r7,q.normal),N.face=q,N.barycoord=F}return N}class I6 extends wJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,U=1003,H=1003,N,F){super(null,W,X,Y,U,H,Z,K,N,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Y6 extends iJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var m8=new WJ,OZ=new WJ,Q6=[],EZ=new v9,mW=new WJ,G7=new S0,F7=new F8;class O8 extends S0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new Y6(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,mW)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new v9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,m8),EZ.copy(J.boundingBox).applyMatrix4(m8),this.boundingBox.union(EZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new F8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,m8),F7.copy(J.boundingSphere).applyMatrix4(m8),this.boundingSphere.union(F7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let X=0;X<$.length;X++)$[X]=Z[W+X]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(G7.geometry=this.geometry,G7.material=this.material,G7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(F7.copy(this.boundingSphere),F7.applyMatrix4($),J.ray.intersectsSphere(F7)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,m8),OZ.multiplyMatrices($,m8),G7.matrixWorld=OZ,G7.raycast(J,Q6);for(let W=0,X=Q6.length;W<X;W++){let Y=Q6[W];Y.instanceId=K,Y.object=this,Q.push(Y)}Q6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new Y6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new I6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let U=0;U<$.length;U++)W+=$[U];let X=this.geometry.morphTargetsRelative?1:1-W,Y=Z*J;return K[Y]=X,K.set($,Y+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var HQ=new y,lW=new y,dW=new y0;class _9{constructor(J=new y(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=HQ.subVectors($,Q).cross(lW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(HQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||dW.getNormalMatrix(J),Z=this.coplanarPoint(HQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var W8=new F8,uW=new u0(0.5,0.5),$6=new y;class A7{constructor(J=new _9,Q=new _9,$=new _9,Z=new _9,K=new _9,W=new _9){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],U=K[3],H=K[4],N=K[5],F=K[6],q=K[7],D=K[8],V=K[9],B=K[10],G=K[11],O=K[12],w=K[13],P=K[14],E=K[15];if(Z[0].setComponents(U-W,q-H,G-D,E-O).normalize(),Z[1].setComponents(U+W,q+H,G+D,E+O).normalize(),Z[2].setComponents(U+X,q+N,G+V,E+w).normalize(),Z[3].setComponents(U-X,q-N,G-V,E-w).normalize(),$)Z[4].setComponents(Y,F,B,P).normalize(),Z[5].setComponents(U-Y,q-F,G-B,E-P).normalize();else if(Z[4].setComponents(U-Y,q-F,G-B,E-P).normalize(),Q===2000)Z[5].setComponents(U+Y,q+F,G+B,E+P).normalize();else if(Q===2001)Z[5].setComponents(Y,F,B,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();W8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();W8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(W8)}intersectsSprite(J){W8.center.set(0,0,0);let Q=uW.distanceTo(J.center);return W8.radius=0.7071067811865476+Q,W8.applyMatrix4(J.matrixWorld),this.intersectsSphere(W8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if($6.x=Z.normal.x>0?J.max.x:J.min.x,$6.y=Z.normal.y>0?J.max.y:J.min.y,$6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint($6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class A6 extends wJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,U,H){super(J,Q,$,Z,K,W,X,Y,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class k9 extends wJ{constructor(J,Q,$,Z,K,W,X,Y,U){super(J,Q,$,Z,K,W,X,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class r9 extends wJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,U,H=1026,N=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:N};super(F,Z,K,W,X,Y,H,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new M7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class O$ extends r9{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,U=1026){let H={width:J,height:J,depth:1},N=[H,H,H,H,H,H];super(J,J,Q,$,Z,K,W,X,Y,U);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class C6 extends wJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class OJ extends N9{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],U=[],H=[],N=[],F=0,q=0;D("z","y","x",-1,-1,$,Q,J,W,K,0),D("z","y","x",1,-1,$,Q,-J,W,K,1),D("x","z","y",1,1,J,$,Q,Z,W,2),D("x","z","y",1,-1,J,$,-Q,Z,W,3),D("x","y","z",1,-1,J,Q,$,Z,K,4),D("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new lJ(U,3)),this.setAttribute("normal",new lJ(H,3)),this.setAttribute("uv",new lJ(N,2));function D(V,B,G,O,w,P,E,A,I,_,k){let M=P/I,d=E/_,C=P/2,l=E/2,r=A/2,p=I+1,u=_+1,i=0,x=0,J0=new y;for(let Q0=0;Q0<u;Q0++){let G0=Q0*d-l;for(let A0=0;A0<p;A0++){let z0=A0*M-C;J0[V]=z0*O,J0[B]=G0*w,J0[G]=r,U.push(J0.x,J0.y,J0.z),J0[V]=0,J0[B]=0,J0[G]=A>0?1:-1,H.push(J0.x,J0.y,J0.z),N.push(A0/I),N.push(1-Q0/_),i+=1}}for(let Q0=0;Q0<_;Q0++)for(let G0=0;G0<I;G0++){let A0=F+G0+p*Q0,z0=F+G0+p*(Q0+1),HJ=F+(G0+1)+p*(Q0+1),o0=F+(G0+1)+p*Q0;Y.push(A0,z0,o0),Y.push(z0,HJ,o0),x+=6}X.addGroup(q,x,k),q+=x,F+=i}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new OJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class y9 extends N9{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let U=this;Z=Math.floor(Z),K=Math.floor(K);let H=[],N=[],F=[],q=[],D=0,V=[],B=$/2,G=0;if(O(),W===!1){if(J>0)w(!0);if(Q>0)w(!1)}this.setIndex(H),this.setAttribute("position",new lJ(N,3)),this.setAttribute("normal",new lJ(F,3)),this.setAttribute("uv",new lJ(q,2));function O(){let P=new y,E=new y,A=0,I=(Q-J)/$;for(let _=0;_<=K;_++){let k=[],M=_/K,d=M*(Q-J)+J;for(let C=0;C<=Z;C++){let l=C/Z,r=l*Y+X,p=Math.sin(r),u=Math.cos(r);E.x=d*p,E.y=-M*$+B,E.z=d*u,N.push(E.x,E.y,E.z),P.set(p,I,u).normalize(),F.push(P.x,P.y,P.z),q.push(l,1-M),k.push(D++)}V.push(k)}for(let _=0;_<Z;_++)for(let k=0;k<K;k++){let M=V[k][_],d=V[k+1][_],C=V[k+1][_+1],l=V[k][_+1];if(J>0||k!==0)H.push(M,d,l),A+=3;if(Q>0||k!==K-1)H.push(d,C,l),A+=3}U.addGroup(G,A,0),G+=A}function w(P){let E=D,A=new u0,I=new y,_=0,k=P===!0?J:Q,M=P===!0?1:-1;for(let C=1;C<=Z;C++)N.push(0,B*M,0),F.push(0,M,0),q.push(0.5,0.5),D++;let d=D;for(let C=0;C<=Z;C++){let r=C/Z*Y+X,p=Math.cos(r),u=Math.sin(r);I.x=k*u,I.y=B*M,I.z=k*p,N.push(I.x,I.y,I.z),F.push(0,M,0),A.x=p*0.5+0.5,A.y=u*0.5*M+0.5,q.push(A.x,A.y),D++}for(let C=0;C<Z;C++){let l=E+C,r=d+C;if(P===!0)H.push(r,r+1,l);else H.push(r+1,r,l);_+=3}U.addGroup(G,_,P===!0?1:2),G+=_}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class dJ extends N9{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),U=X+1,H=Y+1,N=J/X,F=Q/Y,q=[],D=[],V=[],B=[];for(let G=0;G<H;G++){let O=G*F-W;for(let w=0;w<U;w++){let P=w*N-K;D.push(P,-O,0),V.push(0,0,1),B.push(w/X),B.push(1-G/Y)}}for(let G=0;G<Y;G++)for(let O=0;O<X;O++){let w=O+U*G,P=O+U*(G+1),E=O+1+U*(G+1),A=O+1+U*G;q.push(w,P,A),q.push(P,E,A)}this.setIndex(q),this.setAttribute("position",new lJ(D,3)),this.setAttribute("normal",new lJ(V,3)),this.setAttribute("uv",new lJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new dJ(J.width,J.height,J.widthSegments,J.heightSegments)}}function E8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(DZ(K))if(K.isRenderTargetTexture)f0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(DZ(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function bJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=E8(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function DZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function cW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function E$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return s0.workingColorSpace}var AK={clone:E8,merge:bJ},nW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class eJ extends a9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nW,this.fragmentShader=sW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=E8(J.uniforms),this.uniformsGroups=cW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new c0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new u0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new y().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new GJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new y0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new WJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class D$ extends eJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class BJ extends a9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new c0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new c0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new u0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class P6 extends a9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new c0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new c0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new u0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new O9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class R$ extends a9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class k$ extends a9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Z6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class D8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class L$ extends D8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let U=($-Q)*0.5,H=this.valueSize;this._weightPrev=U/(Q-X),this._weightNext=U/(Y-$),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,q=this._weightNext,D=($-Q)/(Z-Q),V=D*D,B=V*D,G=-F*B+2*F*V-F*D,O=(1+F)*B+(-1.5-2*F)*V+(-0.5+F)*D+1,w=(-1-q)*B+(1.5+q)*V+0.5*D,P=q*B-q*V;for(let E=0;E!==X;++E)K[E]=G*W[H+E]+O*W[U+E]+w*W[Y+E]+P*W[N+E];return K}}class V$ extends D8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=($-Q)/(Z-Q),N=1-H;for(let F=0;F!==X;++F)K[F]=W[U+F]*N+W[Y+F]*H;return K}}class z$ extends D8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class M$ extends D8{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,U=Y-X,H=this.inTangents,N=this.outTangents;if(!H||!N){let D=($-Q)/(Z-Q),V=1-D;for(let B=0;B!==X;++B)K[B]=W[U+B]*V+W[Y+B]*D;return K}let F=X*2,q=J-1;for(let D=0;D!==X;++D){let V=W[U+D],B=W[Y+D],G=q*F+D*2,O=N[G],w=N[G+1],P=J*F+D*2,E=H[P],A=H[P+1],I=($-Q)/(Z-Q),_,k,M,d,C;for(let l=0;l<8;l++){_=I*I,k=_*I,M=1-I,d=M*M,C=d*M;let p=C*Q+3*d*I*O+3*M*_*E+k*Z-$;if(Math.abs(p)<0.0000000001)break;let u=3*d*(O-Q)+6*M*I*(E-O)+3*_*(Z-E);if(Math.abs(u)<0.0000000001)break;I=I-p/u,I=Math.max(0,Math.min(1,I))}K[D]=C*V+3*d*I*w+3*M*_*A+k*B}return K}}class J9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Z6(Q,this.TimeBufferType),this.values=Z6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:Z6(J.times,Array),values:Z6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new z$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new V$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new L$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new M$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return f0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)j0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)j0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){j0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){j0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(IW(Z))for(let X=0,Y=Z.length;X!==Y;++X){let U=Z[X];if(isNaN(U)){j0("KeyframeTrack: Value is not a valid number.",this,X,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,U=J[X],H=J[X+1];if(U!==H&&(X!==1||U!==J[0]))if(!Z){let N=X*$,F=N-$,q=N+$;for(let D=0;D!==$;++D){let V=Q[N+D];if(V!==Q[F+D]||V!==Q[q+D]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let N=X*$,F=W*$;for(let q=0;q!==$;++q)Q[F+q]=Q[N+q]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,U=0;U!==$;++U)Q[Y+U]=Q[X+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}J9.prototype.ValueTypeName="";J9.prototype.TimeBufferType=Float32Array;J9.prototype.ValueBufferType=Float32Array;J9.prototype.DefaultInterpolation=2301;class R8 extends J9{constructor(J,Q,$){super(J,Q,$)}}R8.prototype.ValueTypeName="bool";R8.prototype.ValueBufferType=Array;R8.prototype.DefaultInterpolation=2300;R8.prototype.InterpolantFactoryMethodLinear=void 0;R8.prototype.InterpolantFactoryMethodSmooth=void 0;class B$ extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}B$.prototype.ValueTypeName="color";class I$ extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}I$.prototype.ValueTypeName="number";class A$ extends D8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),U=J*X;for(let H=U+X;U!==H;U+=4)f9.slerpFlat(K,0,W,U-X,W,U,Y);return K}}class _6 extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new A$(this.times,this.values,this.getValueSize(),J)}}_6.prototype.ValueTypeName="quaternion";_6.prototype.InterpolantFactoryMethodSmooth=void 0;class k8 extends J9{constructor(J,Q,$){super(J,Q,$)}}k8.prototype.ValueTypeName="string";k8.prototype.ValueBufferType=Array;k8.prototype.DefaultInterpolation=2300;k8.prototype.InterpolantFactoryMethodLinear=void 0;k8.prototype.InterpolantFactoryMethodSmooth=void 0;class C$ extends J9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}C$.prototype.ValueTypeName="vector";class P${constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(H){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,X)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),Y)return Y(H);return H},this.setURLModifier=function(H){return Y=H,this},this.addHandler=function(H,N){return U.push(H,N),this},this.removeHandler=function(H){let N=U.indexOf(H);if(N!==-1)U.splice(N,2);return this},this.getHandler=function(H){for(let N=0,F=U.length;N<F;N+=2){let q=U[N],D=U[N+1];if(q.global)q.lastIndex=0;if(q.test(H))return D}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var CK=new P$;class _${constructor(J){if(this.manager=J!==void 0?J:CK,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}_$.DEFAULT_MATERIAL_NAME="__DEFAULT";class w6 extends RJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new c0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var qQ=new WJ,RZ=new y,kZ=new y;class w${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new u0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new WJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new A7,this._frameExtents=new u0(1,1),this._viewportCount=1,this._viewports=[new GJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(RZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(RZ),kZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(kZ),Q.updateMatrixWorld(),qQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qQ,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(qQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var K6=new y,W6=new f9,F9=new y;class T6 extends RJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new WJ,this.projectionMatrix=new WJ,this.projectionMatrixInverse=new WJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(K6,W6,F9),F9.x===1&&F9.y===1&&F9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(K6,W6,F9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(K6,W6,F9),F9.x===1&&F9.y===1&&F9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(K6,W6,F9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var s9=new y,LZ=new u0,VZ=new u0;class vJ extends T6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=X6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(m6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return X6*2*Math.atan(Math.tan(m6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){s9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(s9.x,s9.y).multiplyScalar(-J/s9.z),s9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(s9.x,s9.y).multiplyScalar(-J/s9.z)}getViewSize(J,Q){return this.getViewBounds(J,LZ,VZ),Q.subVectors(VZ,LZ)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(m6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/U,Z*=W.width/Y,$*=W.height/U}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class PK extends w${constructor(){super(new vJ(90,1,0.5,500));this.isPointLightShadow=!0}}class S6 extends w6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new PK}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class C7 extends T6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,X-=H*this.view.offsetY,Y=X-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class _K extends w${constructor(){super(new C7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class t8 extends w6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(RJ.DEFAULT_UP),this.updateMatrix(),this.target=new RJ,this.shadow=new _K}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}var l8=-90,d8=1;class T$ extends RJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new vJ(l8,d8,J,Q);Z.layers=this.layers,this.add(Z);let K=new vJ(l8,d8,J,Q);K.layers=this.layers,this.add(K);let W=new vJ(l8,d8,J,Q);W.layers=this.layers,this.add(W);let X=new vJ(l8,d8,J,Q);X.layers=this.layers,this.add(X);let Y=new vJ(l8,d8,J,Q);Y.layers=this.layers,this.add(Y);let U=new vJ(l8,d8,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,U,H]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),D=J.xr.enabled;J.xr.enabled=!1;let V=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=V,J.setRenderTarget($,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render(Q,H),J.setRenderTarget(N,F,q),J.xr.enabled=D,$.texture.needsPMREMUpdate=!0}}class S$ extends vJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var j$="\\[\\]\\.:\\/",iW=new RegExp("["+j$+"]","g"),f$="[^"+j$+"]",oW="[^"+j$.replace("\\.","")+"]",aW=/((?:WC+[\/:])*)/.source.replace("WC",f$),rW=/(WCOD+)?/.source.replace("WCOD",oW),tW=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",f$),eW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",f$),JX=new RegExp("^"+aW+rW+tW+eW+"$"),QX=["material","materials","bones","map"];class wK{constructor(J,Q,$){let Z=$||QJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class QJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||QJ.parseTrackName(Q),this.node=QJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new QJ(J,Q,$);else return new QJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iW,"")}static parseTrackName(J){let Q=JX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(QX.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=QJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){f0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){j0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){j0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){j0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){j0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){j0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){j0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=Q.nodeName;j0("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){j0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}QJ.Composite=wK;QJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};QJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};QJ.prototype.GetterByBindingType=[QJ.prototype._getValue_direct,QJ.prototype._getValue_array,QJ.prototype._getValue_arrayElement,QJ.prototype._getValue_toArray];QJ.prototype.SetterByBindingTypeAndVersioning=[[QJ.prototype._setValue_direct,QJ.prototype._setValue_direct_setNeedsUpdate,QJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[QJ.prototype._setValue_array,QJ.prototype._setValue_array_setNeedsUpdate,QJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[QJ.prototype._setValue_arrayElement,QJ.prototype._setValue_arrayElement_setNeedsUpdate,QJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[QJ.prototype._setValue_fromArray,QJ.prototype._setValue_fromArray_setNeedsUpdate,QJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wq=new Float32Array(1);var zZ=new WJ;class j6{constructor(J,Q,$=0,Z=1/0){this.ray=new B6(J,Q),this.near=$,this.far=Z,this.camera=null,this.layers=new B7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else j0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return zZ.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zZ),this}intersectObject(J,Q=!0,$=[]){return NQ(J,this,$,Q),$.sort(MZ),$}intersectObjects(J,Q=!0,$=[]){for(let Z=0,K=J.length;Z<K;Z++)NQ(J[Z],this,$,Q);return $.sort(MZ),$}}function MZ(J,Q){return J.distance-Q.distance}function NQ(J,Q,$,Z){let K=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)K=!1}if(K===!0&&Z===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)NQ(W[X],Q,$,!0)}}class v${static{v$.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function y$(J,Q,$,Z){let K=$X(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function $X(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)f0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function tK(){let J=null,Q=!1,$=null,Z=null;function K(W,X){$(W,X),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function ZX(J){let Q=new WeakMap;function $(Y,U){let{array:H,usage:N}=Y,F=H.byteLength,q=J.createBuffer();J.bindBuffer(U,q),J.bufferData(U,H,N),Y.onUploadCallback();let D;if(H instanceof Float32Array)D=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)D=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(Y.isFloat16BufferAttribute)D=J.HALF_FLOAT;else D=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)D=J.SHORT;else if(H instanceof Uint32Array)D=J.UNSIGNED_INT;else if(H instanceof Int32Array)D=J.INT;else if(H instanceof Int8Array)D=J.BYTE;else if(H instanceof Uint8Array)D=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)D=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:q,type:D,bytesPerElement:H.BYTES_PER_ELEMENT,version:Y.version,size:F}}function Z(Y,U,H){let{array:N,updateRanges:F}=U;if(J.bindBuffer(H,Y),F.length===0)J.bufferSubData(H,0,N);else{F.sort((D,V)=>D.start-V.start);let q=0;for(let D=1;D<F.length;D++){let V=F[q],B=F[D];if(B.start<=V.start+V.count+1)V.count=Math.max(V.count,B.start+B.count-V.start);else++q,F[q]=B}F.length=q+1;for(let D=0,V=F.length;D<V;D++){let B=F[D];J.bufferSubData(H,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function X(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let H=Q.get(Y);if(H===void 0)Q.set(Y,$(Y,U));else if(H.version<Y.version){if(H.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,Y,U),H.version=Y.version}}return{get:K,remove:W,update:X}}var KX=`#ifdef USE_ALPHAHASH
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
#endif`,UX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HX=`#ifdef USE_ALPHATEST
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
#endif`,NX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GX=`#ifdef USE_BATCHING
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
#endif`,EX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DX=`float G_BlinnPhong_Implicit( ) {
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
#endif`,zX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PX=`#define PI 3.141592653589793
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
#endif`,fX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vX="gl_FragColor = linearToOutputTexel( gl_FragColor );",yX=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,UY=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qY=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NY=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GY=`#ifdef USE_MAP
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
#endif`,EY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DY=`#ifdef USE_METALNESSMAP
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
#endif`,zY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,CY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PY=`#ifdef USE_NORMALMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vY=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,JU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$U=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WU=`uniform sampler2D t2D;
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
}`,XU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qU=`#include <common>
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
}`,NU=`#if DEPTH_PACKING == 3200
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
}`,GU=`#define DISTANCE
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
}`,FU=`#define DISTANCE
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
}`,OU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DU=`uniform float scale;
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
}`,RU=`uniform vec3 diffuse;
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
}`,kU=`#include <common>
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
}`,LU=`uniform vec3 diffuse;
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
}`,VU=`#define LAMBERT
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
}`,zU=`#define LAMBERT
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
}`,MU=`#define MATCAP
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
}`,BU=`#define MATCAP
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
}`,IU=`#define NORMAL
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
}`,AU=`#define NORMAL
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
}`,CU=`#define PHONG
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
}`,PU=`#define PHONG
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
}`,_U=`#define STANDARD
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
}`,wU=`#define STANDARD
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
}`,TU=`#define TOON
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
}`,SU=`#define TOON
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
}`,jU=`uniform float size;
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
}`,fU=`uniform vec3 diffuse;
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
}`,vU=`#include <common>
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
}`,yU=`uniform vec3 color;
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
}`,bU=`uniform float rotation;
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
}`,hU=`uniform vec3 diffuse;
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
}`,l0={alphahash_fragment:KX,alphahash_pars_fragment:WX,alphamap_fragment:XX,alphamap_pars_fragment:YX,alphatest_fragment:UX,alphatest_pars_fragment:HX,aomap_fragment:qX,aomap_pars_fragment:NX,batching_pars_vertex:GX,batching_vertex:FX,begin_vertex:OX,beginnormal_vertex:EX,bsdfs:DX,iridescence_fragment:RX,bumpmap_pars_fragment:kX,clipping_planes_fragment:LX,clipping_planes_pars_fragment:VX,clipping_planes_pars_vertex:zX,clipping_planes_vertex:MX,color_fragment:BX,color_pars_fragment:IX,color_pars_vertex:AX,color_vertex:CX,common:PX,cube_uv_reflection_fragment:_X,defaultnormal_vertex:wX,displacementmap_pars_vertex:TX,displacementmap_vertex:SX,emissivemap_fragment:jX,emissivemap_pars_fragment:fX,colorspace_fragment:vX,colorspace_pars_fragment:yX,envmap_fragment:bX,envmap_common_pars_fragment:hX,envmap_pars_fragment:xX,envmap_pars_vertex:gX,envmap_physical_pars_fragment:aX,envmap_vertex:pX,fog_vertex:mX,fog_pars_vertex:lX,fog_fragment:dX,fog_pars_fragment:uX,gradientmap_pars_fragment:cX,lightmap_pars_fragment:nX,lights_lambert_fragment:sX,lights_lambert_pars_fragment:iX,lights_pars_begin:oX,lights_toon_fragment:rX,lights_toon_pars_fragment:tX,lights_phong_fragment:eX,lights_phong_pars_fragment:JY,lights_physical_fragment:QY,lights_physical_pars_fragment:$Y,lights_fragment_begin:ZY,lights_fragment_maps:KY,lights_fragment_end:WY,lightprobes_pars_fragment:XY,logdepthbuf_fragment:YY,logdepthbuf_pars_fragment:UY,logdepthbuf_pars_vertex:HY,logdepthbuf_vertex:qY,map_fragment:NY,map_pars_fragment:GY,map_particle_fragment:FY,map_particle_pars_fragment:OY,metalnessmap_fragment:EY,metalnessmap_pars_fragment:DY,morphinstance_vertex:RY,morphcolor_vertex:kY,morphnormal_vertex:LY,morphtarget_pars_vertex:VY,morphtarget_vertex:zY,normal_fragment_begin:MY,normal_fragment_maps:BY,normal_pars_fragment:IY,normal_pars_vertex:AY,normal_vertex:CY,normalmap_pars_fragment:PY,clearcoat_normal_fragment_begin:_Y,clearcoat_normal_fragment_maps:wY,clearcoat_pars_fragment:TY,iridescence_pars_fragment:SY,opaque_fragment:jY,packing:fY,premultiplied_alpha_fragment:vY,project_vertex:yY,dithering_fragment:bY,dithering_pars_fragment:hY,roughnessmap_fragment:xY,roughnessmap_pars_fragment:gY,shadowmap_pars_fragment:pY,shadowmap_pars_vertex:mY,shadowmap_vertex:lY,shadowmask_pars_fragment:dY,skinbase_vertex:uY,skinning_pars_vertex:cY,skinning_vertex:nY,skinnormal_vertex:sY,specularmap_fragment:iY,specularmap_pars_fragment:oY,tonemapping_fragment:aY,tonemapping_pars_fragment:rY,transmission_fragment:tY,transmission_pars_fragment:eY,uv_pars_fragment:JU,uv_pars_vertex:QU,uv_vertex:$U,worldpos_vertex:ZU,background_vert:KU,background_frag:WU,backgroundCube_vert:XU,backgroundCube_frag:YU,cube_vert:UU,cube_frag:HU,depth_vert:qU,depth_frag:NU,distance_vert:GU,distance_frag:FU,equirect_vert:OU,equirect_frag:EU,linedashed_vert:DU,linedashed_frag:RU,meshbasic_vert:kU,meshbasic_frag:LU,meshlambert_vert:VU,meshlambert_frag:zU,meshmatcap_vert:MU,meshmatcap_frag:BU,meshnormal_vert:IU,meshnormal_frag:AU,meshphong_vert:CU,meshphong_frag:PU,meshphysical_vert:_U,meshphysical_frag:wU,meshtoon_vert:TU,meshtoon_frag:SU,points_vert:jU,points_frag:fU,shadow_vert:vU,shadow_frag:yU,sprite_vert:bU,sprite_frag:hU},D0={common:{diffuse:{value:new c0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new u0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new c0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new y},probesMax:{value:new y},probesResolution:{value:new y}},points:{diffuse:{value:new c0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new c0(16777215)},opacity:{value:1},center:{value:new u0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},V9={basic:{uniforms:bJ([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.fog]),vertexShader:l0.meshbasic_vert,fragmentShader:l0.meshbasic_frag},lambert:{uniforms:bJ([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new c0(0)},envMapIntensity:{value:1}}]),vertexShader:l0.meshlambert_vert,fragmentShader:l0.meshlambert_frag},phong:{uniforms:bJ([D0.common,D0.specularmap,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,D0.lights,{emissive:{value:new c0(0)},specular:{value:new c0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:l0.meshphong_vert,fragmentShader:l0.meshphong_frag},standard:{uniforms:bJ([D0.common,D0.envmap,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.roughnessmap,D0.metalnessmap,D0.fog,D0.lights,{emissive:{value:new c0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag},toon:{uniforms:bJ([D0.common,D0.aomap,D0.lightmap,D0.emissivemap,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.gradientmap,D0.fog,D0.lights,{emissive:{value:new c0(0)}}]),vertexShader:l0.meshtoon_vert,fragmentShader:l0.meshtoon_frag},matcap:{uniforms:bJ([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,D0.fog,{matcap:{value:null}}]),vertexShader:l0.meshmatcap_vert,fragmentShader:l0.meshmatcap_frag},points:{uniforms:bJ([D0.points,D0.fog]),vertexShader:l0.points_vert,fragmentShader:l0.points_frag},dashed:{uniforms:bJ([D0.common,D0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:l0.linedashed_vert,fragmentShader:l0.linedashed_frag},depth:{uniforms:bJ([D0.common,D0.displacementmap]),vertexShader:l0.depth_vert,fragmentShader:l0.depth_frag},normal:{uniforms:bJ([D0.common,D0.bumpmap,D0.normalmap,D0.displacementmap,{opacity:{value:1}}]),vertexShader:l0.meshnormal_vert,fragmentShader:l0.meshnormal_frag},sprite:{uniforms:bJ([D0.sprite,D0.fog]),vertexShader:l0.sprite_vert,fragmentShader:l0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:l0.background_vert,fragmentShader:l0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:l0.backgroundCube_vert,fragmentShader:l0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:l0.cube_vert,fragmentShader:l0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:l0.equirect_vert,fragmentShader:l0.equirect_frag},distance:{uniforms:bJ([D0.common,D0.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:l0.distance_vert,fragmentShader:l0.distance_frag},shadow:{uniforms:bJ([D0.lights,D0.fog,{color:{value:new c0(0)},opacity:{value:1}}]),vertexShader:l0.shadow_vert,fragmentShader:l0.shadow_frag}};V9.physical={uniforms:bJ([V9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new u0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new c0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new u0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new c0(0)},specularColor:{value:new c0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new u0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:l0.meshphysical_vert,fragmentShader:l0.meshphysical_frag};var f6={r:0,b:0,g:0},xU=new WJ,eK=new y0;eK.set(-1,0,0,0,1,0,0,0,1);function gU(J,Q,$,Z,K,W){let X=new c0(0),Y=K===!0?0:1,U,H,N=null,F=0,q=null;function D(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){let E=w.backgroundBlurriness>0;P=Q.get(P,E)}return P}function V(w){let P=!1,E=D(w);if(E===null)G(X,Y);else if(E&&E.isColor)G(E,1),P=!0;let A=J.xr.getEnvironmentBlendMode();if(A==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(A==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(w,P){let E=D(P);if(E&&(E.isCubeTexture||E.mapping===k7)){if(H===void 0)H=new S0(new OJ(1,1,1),new eJ({name:"BackgroundCubeMaterial",uniforms:E8(V9.backgroundCube.uniforms),vertexShader:V9.backgroundCube.vertexShader,fragmentShader:V9.backgroundCube.fragmentShader,side:yJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(A,I,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=E,H.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(xU.makeRotationFromEuler(P.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply(eK);if(H.material.toneMapped=s0.getTransfer(E.colorSpace)!==YJ,N!==E||F!==E.version||q!==J.toneMapping)H.material.needsUpdate=!0,N=E,F=E.version,q=J.toneMapping;H.layers.enableAll(),w.unshift(H,H.geometry,H.material,0,0,null)}else if(E&&E.isTexture){if(U===void 0)U=new S0(new dJ(2,2),new eJ({name:"BackgroundMaterial",uniforms:E8(V9.background.uniforms),vertexShader:V9.background.vertexShader,fragmentShader:V9.background.fragmentShader,side:s8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=E,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.toneMapped=s0.getTransfer(E.colorSpace)!==YJ,E.matrixAutoUpdate===!0)E.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(E.matrix),N!==E||F!==E.version||q!==J.toneMapping)U.material.needsUpdate=!0,N=E,F=E.version,q=J.toneMapping;U.layers.enableAll(),w.unshift(U,U.geometry,U.material,0,0,null)}}function G(w,P){w.getRGB(f6,E$(J)),$.buffers.color.setClear(f6.r,f6.g,f6.b,P,W)}function O(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(w,P=1){X.set(w),Y=P,G(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(w){Y=w,G(X,Y)},render:V,addToRenderList:B,dispose:O}}function pU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=q(null),W=K,X=!1;function Y(C,l,r,p,u){let i=!1,x=F(C,p,r,l);if(W!==x)W=x,H(W.object);if(i=D(C,p,r,u),i)V(C,p,r,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(i||X){if(X=!1,E(C,l,r,p),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function U(){return J.createVertexArray()}function H(C){return J.bindVertexArray(C)}function N(C){return J.deleteVertexArray(C)}function F(C,l,r,p){let u=p.wireframe===!0,i=Z[l.id];if(i===void 0)i={},Z[l.id]=i;let x=C.isInstancedMesh===!0?C.id:0,J0=i[x];if(J0===void 0)J0={},i[x]=J0;let Q0=J0[r.id];if(Q0===void 0)Q0={},J0[r.id]=Q0;let G0=Q0[u];if(G0===void 0)G0=q(U()),Q0[u]=G0;return G0}function q(C){let l=[],r=[],p=[];for(let u=0;u<$;u++)l[u]=0,r[u]=0,p[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:r,attributeDivisors:p,object:C,attributes:{},index:null}}function D(C,l,r,p){let u=W.attributes,i=l.attributes,x=0,J0=r.getAttributes();for(let Q0 in J0)if(J0[Q0].location>=0){let A0=u[Q0],z0=i[Q0];if(z0===void 0){if(Q0==="instanceMatrix"&&C.instanceMatrix)z0=C.instanceMatrix;if(Q0==="instanceColor"&&C.instanceColor)z0=C.instanceColor}if(A0===void 0)return!0;if(A0.attribute!==z0)return!0;if(z0&&A0.data!==z0.data)return!0;x++}if(W.attributesNum!==x)return!0;if(W.index!==p)return!0;return!1}function V(C,l,r,p){let u={},i=l.attributes,x=0,J0=r.getAttributes();for(let Q0 in J0)if(J0[Q0].location>=0){let A0=i[Q0];if(A0===void 0){if(Q0==="instanceMatrix"&&C.instanceMatrix)A0=C.instanceMatrix;if(Q0==="instanceColor"&&C.instanceColor)A0=C.instanceColor}let z0={};if(z0.attribute=A0,A0&&A0.data)z0.data=A0.data;u[Q0]=z0,x++}W.attributes=u,W.attributesNum=x,W.index=p}function B(){let C=W.newAttributes;for(let l=0,r=C.length;l<r;l++)C[l]=0}function G(C){O(C,0)}function O(C,l){let{newAttributes:r,enabledAttributes:p,attributeDivisors:u}=W;if(r[C]=1,p[C]===0)J.enableVertexAttribArray(C),p[C]=1;if(u[C]!==l)J.vertexAttribDivisor(C,l),u[C]=l}function w(){let{newAttributes:C,enabledAttributes:l}=W;for(let r=0,p=l.length;r<p;r++)if(l[r]!==C[r])J.disableVertexAttribArray(r),l[r]=0}function P(C,l,r,p,u,i,x){if(x===!0)J.vertexAttribIPointer(C,l,r,u,i);else J.vertexAttribPointer(C,l,r,p,u,i)}function E(C,l,r,p){B();let u=p.attributes,i=r.getAttributes(),x=l.defaultAttributeValues;for(let J0 in i){let Q0=i[J0];if(Q0.location>=0){let G0=u[J0];if(G0===void 0){if(J0==="instanceMatrix"&&C.instanceMatrix)G0=C.instanceMatrix;if(J0==="instanceColor"&&C.instanceColor)G0=C.instanceColor}if(G0!==void 0){let{normalized:A0,itemSize:z0}=G0,HJ=Q.get(G0);if(HJ===void 0)continue;let{buffer:o0,type:a,bytesPerElement:U0}=HJ,L0=a===J.INT||a===J.UNSIGNED_INT||G0.gpuType===BQ;if(G0.isInterleavedBufferAttribute){let V0=G0.data,T0=V0.stride,d0=G0.offset;if(V0.isInstancedInterleavedBuffer){for(let x0=0;x0<Q0.locationSize;x0++)O(Q0.location+x0,V0.meshPerAttribute);if(C.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=V0.meshPerAttribute*V0.count}else for(let x0=0;x0<Q0.locationSize;x0++)G(Q0.location+x0);J.bindBuffer(J.ARRAY_BUFFER,o0);for(let x0=0;x0<Q0.locationSize;x0++)P(Q0.location+x0,z0/Q0.locationSize,a,A0,T0*U0,(d0+z0/Q0.locationSize*x0)*U0,L0)}else{if(G0.isInstancedBufferAttribute){for(let V0=0;V0<Q0.locationSize;V0++)O(Q0.location+V0,G0.meshPerAttribute);if(C.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let V0=0;V0<Q0.locationSize;V0++)G(Q0.location+V0);J.bindBuffer(J.ARRAY_BUFFER,o0);for(let V0=0;V0<Q0.locationSize;V0++)P(Q0.location+V0,z0/Q0.locationSize,a,A0,z0*U0,z0/Q0.locationSize*V0*U0,L0)}}else if(x!==void 0){let A0=x[J0];if(A0!==void 0)switch(A0.length){case 2:J.vertexAttrib2fv(Q0.location,A0);break;case 3:J.vertexAttrib3fv(Q0.location,A0);break;case 4:J.vertexAttrib4fv(Q0.location,A0);break;default:J.vertexAttrib1fv(Q0.location,A0)}}}}w()}function A(){M();for(let C in Z){let l=Z[C];for(let r in l){let p=l[r];for(let u in p){let i=p[u];for(let x in i)N(i[x].object),delete i[x];delete p[u]}}delete Z[C]}}function I(C){if(Z[C.id]===void 0)return;let l=Z[C.id];for(let r in l){let p=l[r];for(let u in p){let i=p[u];for(let x in i)N(i[x].object),delete i[x];delete p[u]}}delete Z[C.id]}function _(C){for(let l in Z){let r=Z[l];for(let p in r){let u=r[p];if(u[C.id]===void 0)continue;let i=u[C.id];for(let x in i)N(i[x].object),delete i[x];delete u[C.id]}}}function k(C){for(let l in Z){let r=Z[l],p=C.isInstancedMesh===!0?C.id:0,u=r[p];if(u===void 0)continue;for(let i in u){let x=u[i];for(let J0 in x)N(x[J0].object),delete x[J0];delete u[i]}if(delete r[p],Object.keys(r).length===0)delete Z[l]}}function M(){if(d(),X=!0,W===K)return;W=K,H(W.object)}function d(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:M,resetDefaultState:d,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfObject:k,releaseStatesOfProgram:_,initAttributes:B,enableAttribute:G,disableUnusedAttributes:w}}function mU(J,Q,$){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),$.update(H,Z,1)}function X(U,H,N){if(N===0)return;J.drawArraysInstanced(Z,U,H,N),$.update(H,Z,N)}function Y(U,H,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,N);let q=0;for(let D=0;D<N;D++)q+=H[D];$.update(q,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function lU(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(_){if(_!==R9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let k=_===S9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==H9&&Z.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==T9&&!k)return!1;return!0}function U(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=$.precision!==void 0?$.precision:"highp",N=U(H);if(N!==H)f0("WebGLRenderer:",H,"not supported, using",N,"instead."),H=N;let F=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&q===!1)f0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let D=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),G=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),w=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),E=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:X,textureTypeReadable:Y,precision:H,logarithmicDepthBuffer:F,reversedDepthBuffer:q,maxTextures:D,maxVertexTextures:V,maxTextureSize:B,maxCubemapSize:G,maxAttributes:O,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:E,maxSamples:A,samples:I}}function dU(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new _9,Y=new y0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(F,q){let D=F.length!==0||q||Z!==0||K;return K=q,Z=F.length,D},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,q){$=N(F,q,0)},this.setState=function(F,q,D){let{clippingPlanes:V,clipIntersection:B,clipShadows:G}=F,O=J.get(F);if(!K||V===null||V.length===0||W&&!G)if(W)N(null);else H();else{let w=W?0:Z,P=w*4,E=O.clippingState||null;U.value=E,E=N(V,q,P,D);for(let A=0;A!==P;++A)E[A]=$[A];O.clippingState=E,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=w}};function H(){if(U.value!==$)U.value=$,U.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(F,q,D,V){let B=F!==null?F.length:0,G=null;if(B!==0){if(G=U.value,V!==!0||G===null){let O=D+B*4,w=q.matrixWorldInverse;if(Y.getNormalMatrix(w),G===null||G.length<O)G=new Float32Array(O);for(let P=0,E=D;P!==B;++P,E+=4)X.copy(F[P]).applyMatrix4(w,Y),X.normal.toArray(G,E),G[E+3]=X.constant}U.value=G,U.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,G}}var t9=4,TK=[0.125,0.215,0.35,0.446,0.526,0.582],L8=20,uU=256,P7=new C7,SK=new c0,b$=null,h$=0,x$=0,g$=!1,cU=new y;class S7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=cU}=K;b$=this._renderer.getRenderTarget(),h$=this._renderer.getActiveCubeFace(),x$=this._renderer.getActiveMipmapLevel(),g$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=vK(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=fK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(b$,h$,x$),this._renderer.xr.enabled=g$,J.scissorTest=!1,e8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===o8||J.mapping===Y8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);b$=this._renderer.getRenderTarget(),h$=this._renderer.getActiveCubeFace(),x$=this._renderer.getActiveMipmapLevel(),g$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:LJ,minFilter:LJ,generateMipmaps:!1,type:S9,format:R9,colorSpace:X$,depthBuffer:!1},Z=jK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=jK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nU(K)),this._blurMaterial=iU(K,J,Q),this._ggxMaterial=sU(K,J,Q)}return Z}_compileMaterial(J){let Q=new S0(new N9,J);this._renderer.compile(Q,P7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new vJ(90,1,Q,$),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,q=N.toneMapping;if(N.getClearColor(SK),N.toneMapping=U9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new S0(new OJ,new TJ({name:"PMREM.Background",side:yJ,depthWrite:!1,depthTest:!1}));let V=this._backgroundBox,B=V.material,G=!1,O=J.background;if(O){if(O.isColor)B.color.copy(O),J.background=null,G=!0}else B.color.copy(SK),G=!0;for(let w=0;w<6;w++){let P=w%3;if(P===0)Y.up.set(0,U[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+H[w],K.y,K.z);else if(P===1)Y.up.set(0,0,U[w]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+H[w],K.z);else Y.up.set(0,U[w],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+H[w]);let E=this._cubeSize;if(e8(Z,P*E,w>2?E:0,E,E),N.setRenderTarget(Z),G)N.render(V,Y);N.render(J,Y)}N.toneMapping=q,N.autoClear=F,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===o8||J.mapping===Y8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=vK();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=fK();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;e8(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,P7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,U=$/(this._lodMeshes.length-1),H=Q/(this._lodMeshes.length-1),N=Math.sqrt(U*U-H*H),F=0+U*1.25,q=N*F,{_lodMax:D}=this,V=this._sizeLods[$],B=3*V*($>D-t9?$-D+t9:0),G=4*(this._cubeSize-V);Y.envMap.value=J.texture,Y.roughness.value=q,Y.mipInt.value=D-Q,e8(K,B,G,3*V,2*V),Z.setRenderTarget(K),Z.render(X,P7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=D-$,e8(J,B,G,3*V,2*V),Z.setRenderTarget(J),Z.render(X,P7)}_blur(J,Q,$,Z,K){let W=this._pingPongRenderTarget;this._halfBlur(J,W,Q,$,Z,"latitudinal",K),this._halfBlur(W,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,W,X){let Y=this._renderer,U=this._blurMaterial;if(W!=="latitudinal"&&W!=="longitudinal")j0("blur direction must be either latitudinal or longitudinal!");let H=3,N=this._lodMeshes[Z];N.material=U;let F=U.uniforms,q=this._sizeLods[$]-1,D=isFinite(K)?Math.PI/(2*q):2*Math.PI/(2*L8-1),V=K/D,B=isFinite(K)?1+Math.floor(H*V):L8;if(B>L8)f0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${B} samples when the maximum is set to ${L8}`);let G=[],O=0;for(let I=0;I<L8;++I){let _=I/V,k=Math.exp(-_*_/2);if(G.push(k),I===0)O+=k;else if(I<B)O+=2*k}for(let I=0;I<G.length;I++)G[I]=G[I]/O;if(F.envMap.value=J.texture,F.samples.value=B,F.weights.value=G,F.latitudinal.value=W==="latitudinal",X)F.poleAxis.value=X;let{_lodMax:w}=this;F.dTheta.value=D,F.mipInt.value=w-$;let P=this._sizeLods[Z],E=3*P*(Z>w-t9?Z-w+t9:0),A=4*(this._cubeSize-P);e8(Q,E,A,3*P,2*P),Y.setRenderTarget(Q),Y.render(N,P7)}}function nU(J){let Q=[],$=[],Z=[],K=J,W=J-t9+1+TK.length;for(let X=0;X<W;X++){let Y=Math.pow(2,K);Q.push(Y);let U=1/Y;if(X>J-t9)U=TK[X-J+t9-1];else if(X===0)U=0;$.push(U);let H=1/(Y-2),N=-H,F=1+H,q=[N,N,F,N,F,F,N,N,F,F,N,F],D=6,V=6,B=3,G=2,O=1,w=new Float32Array(B*V*D),P=new Float32Array(G*V*D),E=new Float32Array(O*V*D);for(let I=0;I<D;I++){let _=I%3*2/3-1,k=I>2?0:-1,M=[_,k,0,_+0.6666666666666666,k,0,_+0.6666666666666666,k+1,0,_,k,0,_+0.6666666666666666,k+1,0,_,k+1,0];w.set(M,B*V*I),P.set(q,G*V*I);let d=[I,I,I,I,I,I];E.set(d,O*V*I)}let A=new N9;if(A.setAttribute("position",new iJ(w,B)),A.setAttribute("uv",new iJ(P,G)),A.setAttribute("faceIndex",new iJ(E,O)),Z.push(new S0(A,null)),K>t9)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function jK(J,Q,$){let Z=new tJ(J,Q,$);return Z.texture.mapping=k7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function e8(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function sU(J,Q,$){return new eJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uU,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:y6(),fragmentShader:`

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
		`,blending:D9,depthTest:!1,depthWrite:!1})}function iU(J,Q,$){let Z=new Float32Array(L8),K=new y(0,1,0);return new eJ({name:"SphericalGaussianBlur",defines:{n:L8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:y6(),fragmentShader:`

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
		`,blending:D9,depthTest:!1,depthWrite:!1})}function fK(){return new eJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:y6(),fragmentShader:`

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
		`,blending:D9,depthTest:!1,depthWrite:!1})}function vK(){return new eJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:y6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:D9,depthTest:!1,depthWrite:!1})}function y6(){return`

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
	`}class u$ extends tJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new A6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new OJ(5,5,5),K=new eJ({name:"CubemapFromEquirect",uniforms:E8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:yJ,blending:D9});K.uniforms.tEquirect.value=Q;let W=new S0(Z,K),X=Q.minFilter;if(Q.minFilter===U8)Q.minFilter=LJ;return new T$(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function oU(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(q,D=!1){if(q===null||q===void 0)return null;if(D)return X(q);return W(q)}function W(q){if(q&&q.isTexture){let D=q.mapping;if(D===U6||D===H6)if(Q.has(q)){let V=Q.get(q).texture;return Y(V,q.mapping)}else{let V=q.image;if(V&&V.height>0){let B=new u$(V.height);return B.fromEquirectangularTexture(J,q),Q.set(q,B),q.addEventListener("dispose",H),Y(B.texture,q.mapping)}else return null}}return q}function X(q){if(q&&q.isTexture){let D=q.mapping,V=D===U6||D===H6,B=D===o8||D===Y8;if(V||B){let G=$.get(q),O=G!==void 0?G.texture.pmremVersion:0;if(q.isRenderTargetTexture&&q.pmremVersion!==O){if(Z===null)Z=new S7(J);return G=V?Z.fromEquirectangular(q,G):Z.fromCubemap(q,G),G.texture.pmremVersion=q.pmremVersion,$.set(q,G),G.texture}else if(G!==void 0)return G.texture;else{let w=q.image;if(V&&w&&w.height>0||B&&w&&U(w)){if(Z===null)Z=new S7(J);return G=V?Z.fromEquirectangular(q):Z.fromCubemap(q),G.texture.pmremVersion=q.pmremVersion,$.set(q,G),q.addEventListener("dispose",N),G.texture}else return null}}}return q}function Y(q,D){if(D===U6)q.mapping=o8;else if(D===H6)q.mapping=Y8;return q}function U(q){let D=0,V=6;for(let B=0;B<V;B++)if(q[B]!==void 0)D++;return D===V}function H(q){let D=q.target;D.removeEventListener("dispose",H);let V=Q.get(D);if(V!==void 0)Q.delete(D),V.dispose()}function N(q){let D=q.target;D.removeEventListener("dispose",N);let V=$.get(D);if(V!==void 0)$.delete(D),V.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function aU(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)X8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function rU(J,Q,$,Z){let K={},W=new WeakMap;function X(F){let q=F.target;if(q.index!==null)Q.remove(q.index);for(let V in q.attributes)Q.remove(q.attributes[V]);q.removeEventListener("dispose",X),delete K[q.id];let D=W.get(q);if(D)Q.remove(D),W.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function Y(F,q){if(K[q.id]===!0)return q;return q.addEventListener("dispose",X),K[q.id]=!0,$.memory.geometries++,q}function U(F){let q=F.attributes;for(let D in q)Q.update(q[D],J.ARRAY_BUFFER)}function H(F){let q=[],D=F.index,V=F.attributes.position,B=0;if(V===void 0)return;if(D!==null){let w=D.array;B=D.version;for(let P=0,E=w.length;P<E;P+=3){let A=w[P+0],I=w[P+1],_=w[P+2];q.push(A,I,I,_,_,A)}}else{let w=V.array;B=V.version;for(let P=0,E=w.length/3-1;P<E;P+=3){let A=P+0,I=P+1,_=P+2;q.push(A,I,I,_,_,A)}}let G=new(V.count>=65535?M6:z6)(q,1);G.version=B;let O=W.get(F);if(O)Q.remove(O);W.set(F,G)}function N(F){let q=W.get(F);if(q){let D=F.index;if(D!==null){if(q.version<D.version)H(F)}}else H(F);return W.get(F)}return{get:Y,update:U,getWireframeAttribute:N}}function tU(J,Q,$){let Z;function K(F){Z=F}let W,X;function Y(F){W=F.type,X=F.bytesPerElement}function U(F,q){J.drawElements(Z,q,W,F*X),$.update(q,Z,1)}function H(F,q,D){if(D===0)return;J.drawElementsInstanced(Z,q,W,F*X,D),$.update(q,Z,D)}function N(F,q,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,q,0,W,F,0,D);let B=0;for(let G=0;G<D;G++)B+=q[G];$.update(B,Z,1)}this.setMode=K,this.setIndex=Y,this.render=U,this.renderInstances=H,this.renderMultiDraw=N}function eU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:j0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function JH(J,Q,$){let Z=new WeakMap,K=new GJ;function W(X,Y,U){let H=X.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=N!==void 0?N.length:0,q=Z.get(Y);if(q===void 0||q.count!==F){let M=function(){_.dispose(),Z.delete(Y),Y.removeEventListener("dispose",M)};if(q!==void 0)q.texture.dispose();let D=Y.morphAttributes.position!==void 0,V=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,G=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],w=Y.morphAttributes.color||[],P=0;if(D===!0)P=1;if(V===!0)P=2;if(B===!0)P=3;let E=Y.attributes.position.count*P,A=1;if(E>Q.maxTextureSize)A=Math.ceil(E/Q.maxTextureSize),E=Q.maxTextureSize;let I=new Float32Array(E*A*4*F),_=new V6(I,E,A,F);_.type=T9,_.needsUpdate=!0;let k=P*4;for(let d=0;d<F;d++){let C=G[d],l=O[d],r=w[d],p=E*A*4*d;for(let u=0;u<C.count;u++){let i=u*k;if(D===!0)K.fromBufferAttribute(C,u),I[p+i+0]=K.x,I[p+i+1]=K.y,I[p+i+2]=K.z,I[p+i+3]=0;if(V===!0)K.fromBufferAttribute(l,u),I[p+i+4]=K.x,I[p+i+5]=K.y,I[p+i+6]=K.z,I[p+i+7]=0;if(B===!0)K.fromBufferAttribute(r,u),I[p+i+8]=K.x,I[p+i+9]=K.y,I[p+i+10]=K.z,I[p+i+11]=r.itemSize===4?K.w:1}}q={count:F,texture:_,size:new u0(E,A)},Z.set(Y,q),Y.addEventListener("dispose",M)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let D=0;for(let B=0;B<H.length;B++)D+=H[B];let V=Y.morphTargetsRelative?1:1-D;U.getUniforms().setValue(J,"morphTargetBaseInfluence",V),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:W}}function QH(J,Q,$,Z,K){let W=new WeakMap;function X(H){let N=K.render.frame,F=H.geometry,q=Q.get(H,F);if(W.get(q)!==N)Q.update(q),W.set(q,N);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==N){if($.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)$.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,N)}}if(H.isSkinnedMesh){let D=H.skeleton;if(W.get(D)!==N)D.update(),W.set(D,N)}return q}function Y(){W=new WeakMap}function U(H){let N=H.target;if(N.removeEventListener("dispose",U),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:X,dispose:Y}}var $H={[RQ]:"LINEAR_TONE_MAPPING",[kQ]:"REINHARD_TONE_MAPPING",[LQ]:"CINEON_TONE_MAPPING",[R7]:"ACES_FILMIC_TONE_MAPPING",[zQ]:"AGX_TONE_MAPPING",[MQ]:"NEUTRAL_TONE_MAPPING",[VQ]:"CUSTOM_TONE_MAPPING"};function ZH(J,Q,$,Z,K,W){let X=new tJ(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,depthTexture:K?new r9(Q,$):void 0}),Y=new tJ(Q,$,{type:S9,depthBuffer:!1,stencilBuffer:!1}),U=new N9;U.setAttribute("position",new lJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new lJ([0,2,0,0,2,0],2));let H=new D$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new S0(U,H),F=new C7(-1,1,1,-1,0,1),q=null,D=null,V=!1,B,G=null,O=[],w=!1;this.setSize=function(P,E){X.setSize(P,E),Y.setSize(P,E);for(let A=0;A<O.length;A++){let I=O[A];if(I.setSize)I.setSize(P,E)}},this.setEffects=function(P){O=P,w=O.length>0&&O[0].isRenderPass===!0;let{width:E,height:A}=X;for(let I=0;I<O.length;I++){let _=O[I];if(_.setSize)_.setSize(E,A)}},this.begin=function(P,E){if(V)return!1;if(P.toneMapping===U9&&O.length===0)return!1;if(G=E,E!==null){let{width:A,height:I}=E;if(X.width!==A||X.height!==I)this.setSize(A,I)}if(w===!1)P.setRenderTarget(X);return B=P.toneMapping,P.toneMapping=U9,!0},this.hasRenderPass=function(){return w},this.end=function(P,E){P.toneMapping=B,V=!0;let A=X,I=Y;for(let _=0;_<O.length;_++){let k=O[_];if(k.enabled===!1)continue;if(k.render(P,I,A,E),k.needsSwap!==!1){let M=A;A=I,I=M}}if(q!==P.outputColorSpace||D!==P.toneMapping){if(q=P.outputColorSpace,D=P.toneMapping,H.defines={},s0.getTransfer(q)===YJ)H.defines.SRGB_TRANSFER="";let _=$H[D];if(_)H.defines[_]="";H.needsUpdate=!0}H.uniforms.tDiffuse.value=A.texture,P.setRenderTarget(G),P.render(N,F),G=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(X.depthTexture)X.depthTexture.dispose();X.dispose(),Y.dispose(),U.dispose(),H.dispose()}}var JW=new wJ,l$=new r9(1,1),QW=new V6,$W=new F$,ZW=new A6,yK=[],bK=[],hK=new Float32Array(16),xK=new Float32Array(9),gK=new Float32Array(4);function J7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=yK[K];if(W===void 0)W=new Float32Array(K),yK[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function IJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function AJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function b6(J,Q){let $=bK[Q];if($===void 0)$=new Int32Array(Q),bK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function KH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function WH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(IJ($,Q))return;J.uniform2fv(this.addr,Q),AJ($,Q)}}function XH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(IJ($,Q))return;J.uniform3fv(this.addr,Q),AJ($,Q)}}function YH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(IJ($,Q))return;J.uniform4fv(this.addr,Q),AJ($,Q)}}function UH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(IJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),AJ($,Q)}else{if(IJ($,Z))return;gK.set(Z),J.uniformMatrix2fv(this.addr,!1,gK),AJ($,Z)}}function HH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(IJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),AJ($,Q)}else{if(IJ($,Z))return;xK.set(Z),J.uniformMatrix3fv(this.addr,!1,xK),AJ($,Z)}}function qH(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(IJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),AJ($,Q)}else{if(IJ($,Z))return;hK.set(Z),J.uniformMatrix4fv(this.addr,!1,hK),AJ($,Z)}}function NH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function GH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(IJ($,Q))return;J.uniform2iv(this.addr,Q),AJ($,Q)}}function FH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(IJ($,Q))return;J.uniform3iv(this.addr,Q),AJ($,Q)}}function OH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(IJ($,Q))return;J.uniform4iv(this.addr,Q),AJ($,Q)}}function EH(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function DH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(IJ($,Q))return;J.uniform2uiv(this.addr,Q),AJ($,Q)}}function RH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(IJ($,Q))return;J.uniform3uiv(this.addr,Q),AJ($,Q)}}function kH(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(IJ($,Q))return;J.uniform4uiv(this.addr,Q),AJ($,Q)}}function LH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)l$.compareFunction=$.isReversedDepthBuffer()?L6:k6,W=l$;else W=JW;$.setTexture2D(Q||W,K)}function VH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||$W,K)}function zH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||ZW,K)}function MH(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||QW,K)}function BH(J){switch(J){case 5126:return KH;case 35664:return WH;case 35665:return XH;case 35666:return YH;case 35674:return UH;case 35675:return HH;case 35676:return qH;case 5124:case 35670:return NH;case 35667:case 35671:return GH;case 35668:case 35672:return FH;case 35669:case 35673:return OH;case 5125:return EH;case 36294:return DH;case 36295:return RH;case 36296:return kH;case 35678:case 36198:case 36298:case 36306:case 35682:return LH;case 35679:case 36299:case 36307:return VH;case 35680:case 36300:case 36308:case 36293:return zH;case 36289:case 36303:case 36311:case 36292:return MH}}function IH(J,Q){J.uniform1fv(this.addr,Q)}function AH(J,Q){let $=J7(Q,this.size,2);J.uniform2fv(this.addr,$)}function CH(J,Q){let $=J7(Q,this.size,3);J.uniform3fv(this.addr,$)}function PH(J,Q){let $=J7(Q,this.size,4);J.uniform4fv(this.addr,$)}function _H(J,Q){let $=J7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function wH(J,Q){let $=J7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function TH(J,Q){let $=J7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function SH(J,Q){J.uniform1iv(this.addr,Q)}function jH(J,Q){J.uniform2iv(this.addr,Q)}function fH(J,Q){J.uniform3iv(this.addr,Q)}function vH(J,Q){J.uniform4iv(this.addr,Q)}function yH(J,Q){J.uniform1uiv(this.addr,Q)}function bH(J,Q){J.uniform2uiv(this.addr,Q)}function hH(J,Q){J.uniform3uiv(this.addr,Q)}function xH(J,Q){J.uniform4uiv(this.addr,Q)}function gH(J,Q,$){let Z=this.cache,K=Q.length,W=b6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=l$;else X=JW;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function pH(J,Q,$){let Z=this.cache,K=Q.length,W=b6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||$W,W[X])}function mH(J,Q,$){let Z=this.cache,K=Q.length,W=b6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||ZW,W[X])}function lH(J,Q,$){let Z=this.cache,K=Q.length,W=b6($,K);if(!IJ(Z,W))J.uniform1iv(this.addr,W),AJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||QW,W[X])}function dH(J){switch(J){case 5126:return IH;case 35664:return AH;case 35665:return CH;case 35666:return PH;case 35674:return _H;case 35675:return wH;case 35676:return TH;case 5124:case 35670:return SH;case 35667:case 35671:return jH;case 35668:case 35672:return fH;case 35669:case 35673:return vH;case 5125:return yH;case 36294:return bH;case 36295:return hH;case 36296:return xH;case 35678:case 36198:case 36298:case 36306:case 35682:return gH;case 35679:case 36299:case 36307:return pH;case 35680:case 36300:case 36308:case 36293:return mH;case 36289:case 36303:case 36311:case 36292:return lH}}class KW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=BH(Q.type)}}class WW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=dH(Q.type)}}class XW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var p$=/(\w+)(\])?(\[|\.)?/g;function pK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function uH(J,Q,$){let Z=J.name,K=Z.length;p$.lastIndex=0;while(!0){let W=p$.exec(Z),X=p$.lastIndex,Y=W[1],U=W[2]==="]",H=W[3];if(U)Y=Y|0;if(H===void 0||H==="["&&X+2===K){pK($,H===void 0?new KW(Y,J,Q):new WW(Y,J,Q));break}else{let F=$.map[Y];if(F===void 0)F=new XW(Y),pK($,F);$=F}}}class T7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);uH(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function mK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var cH=37297,nH=0;function sH(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var lK=new y0;function iH(J){s0._getMatrix(lK,s0.workingColorSpace,J);let Q=`mat3( ${lK.elements.map(($)=>$.toFixed(4))} )`;switch(s0.getTransfer(J)){case Y$:return[Q,"LinearTransferOETF"];case YJ:return[Q,"sRGBTransferOETF"];default:return f0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function dK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+sH(J.getShaderSource(Q),Y)}else return W}function oH(J,Q){let $=iH(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var aH={[RQ]:"Linear",[kQ]:"Reinhard",[LQ]:"Cineon",[R7]:"ACESFilmic",[zQ]:"AgX",[MQ]:"Neutral",[VQ]:"Custom"};function rH(J,Q){let $=aH[Q];if($===void 0)return f0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var v6=new y;function tH(){s0.getLuminanceCoefficients(v6);let J=v6.x.toFixed(4),Q=v6.y.toFixed(4),$=v6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function eH(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(w7).join(`
`)}function J5(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Q5(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function w7(J){return J!==""}function uK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function cK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var $5=/^[ \t]*#include +<([\w\d./]+)>/gm;function d$(J){return J.replace($5,K5)}var Z5=new Map;function K5(J,Q){let $=l0[Q];if($===void 0){let Z=Z5.get(Q);if(Z!==void 0)$=l0[Z],f0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return d$($)}var W5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nK(J){return J.replace(W5,X5)}function X5(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function sK(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Y5={[E7]:"SHADOWMAP_TYPE_PCF",[n8]:"SHADOWMAP_TYPE_VSM"};function U5(J){return Y5[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H5={[o8]:"ENVMAP_TYPE_CUBE",[Y8]:"ENVMAP_TYPE_CUBE",[k7]:"ENVMAP_TYPE_CUBE_UV"};function q5(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return H5[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var N5={[Y8]:"ENVMAP_MODE_REFRACTION"};function G5(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return N5[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F5={[JK]:"ENVMAP_BLENDING_MULTIPLY",[QK]:"ENVMAP_BLENDING_MIX",[$K]:"ENVMAP_BLENDING_ADD"};function O5(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return F5[J.combine]||"ENVMAP_BLENDING_NONE"}function E5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function D5(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,U=U5($),H=q5($),N=G5($),F=O5($),q=E5($),D=eH($),V=J5(W),B=K.createProgram(),G,O,w=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(G=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(w7).join(`
`),G.length>0)G+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V].filter(w7).join(`
`),O.length>0)O+=`
`}else G=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(w7).join(`
`),O=[sK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,V,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+H:"",$.envMap?"#define "+N:"",$.envMap?"#define "+F:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==U9?"#define TONE_MAPPING":"",$.toneMapping!==U9?l0.tonemapping_pars_fragment:"",$.toneMapping!==U9?rH("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",l0.colorspace_pars_fragment,oH("linearToOutputTexel",$.outputColorSpace),tH(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(w7).join(`
`);if(X=d$(X),X=uK(X,$),X=cK(X,$),Y=d$(Y),Y=uK(Y,$),Y=cK(Y,$),X=nK(X),Y=nK(Y),$.isRawShaderMaterial!==!0)w=`#version 300 es
`,G=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+G,O=["#define varying in",$.glslVersion===U$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===U$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let P=w+G+X,E=w+O+Y,A=mK(K,K.VERTEX_SHADER,P),I=mK(K,K.FRAGMENT_SHADER,E);if(K.attachShader(B,A),K.attachShader(B,I),$.index0AttributeName!==void 0)K.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function _(C){if(J.debug.checkShaderErrors){let l=K.getProgramInfoLog(B)||"",r=K.getShaderInfoLog(A)||"",p=K.getShaderInfoLog(I)||"",u=l.trim(),i=r.trim(),x=p.trim(),J0=!0,Q0=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(J0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,A,I);else{let G0=dK(K,A,"vertex"),A0=dK(K,I,"fragment");j0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+u+`
`+G0+`
`+A0)}else if(u!=="")f0("WebGLProgram: Program Info Log:",u);else if(i===""||x==="")Q0=!1;if(Q0)C.diagnostics={runnable:J0,programLog:u,vertexShader:{log:i,prefix:G},fragmentShader:{log:x,prefix:O}}}K.deleteShader(A),K.deleteShader(I),k=new T7(K,B),M=Q5(K,B)}let k;this.getUniforms=function(){if(k===void 0)_(this);return k};let M;this.getAttributes=function(){if(M===void 0)_(this);return M};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=K.getProgramParameter(B,cH);return d},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=nH++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=A,this.fragmentShader=I,this}var R5=0;class YW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new UW(J),Q.set(J,$);return $}}class UW{constructor(J){this.id=R5++,this.code=J,this.usedTimes=0}}function k5(J){return J===N8||J===D6||J===R6}function L5(J,Q,$,Z,K,W){let X=new B7,Y=new YW,U=new Set,H=[],N=new Map,F=Z.logarithmicDepthBuffer,q=Z.precision,D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function V(k){if(U.add(k),k===0)return"uv";return`uv${k}`}function B(k,M,d,C,l,r){let p=C.fog,u=l.geometry,i=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?C.environment:null,x=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,J0=Q.get(k.envMap||i,x),Q0=!!J0&&J0.mapping===k7?J0.image.height:null,G0=D[k.type];if(k.precision!==null){if(q=Z.getMaxPrecision(k.precision),q!==k.precision)f0("WebGLProgram.getParameters:",k.precision,"not supported, using",q,"instead.")}let A0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,z0=A0!==void 0?A0.length:0,HJ=0;if(u.morphAttributes.position!==void 0)HJ=1;if(u.morphAttributes.normal!==void 0)HJ=2;if(u.morphAttributes.color!==void 0)HJ=3;let o0,a,U0,L0;if(G0){let v0=V9[G0];o0=v0.vertexShader,a=v0.fragmentShader}else{o0=k.vertexShader,a=k.fragmentShader;let v0=Y.getVertexShaderStage(k),qJ=Y.getFragmentShaderStage(k);Y.update(k,v0,qJ),U0=v0.id,L0=qJ.id}let V0=J.getRenderTarget(),T0=J.state.buffers.depth.getReversed(),d0=l.isInstancedMesh===!0,x0=l.isBatchedMesh===!0,m0=!!k.map,JJ=!!k.matcap,n0=!!J0,g0=!!k.aoMap,VJ=!!k.lightMap,hJ=!!k.bumpMap&&k.wireframe===!1,t0=!!k.normalMap,MJ=!!k.displacementMap,FJ=!!k.emissiveMap,DJ=!!k.metalnessMap,j=!!k.roughnessMap,gJ=k.anisotropy>0,e0=k.clearcoat>0,ZJ=k.dispersion>0,z=k.iridescence>0,R=k.sheen>0,T=k.transmission>0,g=gJ&&!!k.anisotropyMap,t=e0&&!!k.clearcoatMap,Z0=e0&&!!k.clearcoatNormalMap,H0=e0&&!!k.clearcoatRoughnessMap,c=z&&!!k.iridescenceMap,o=z&&!!k.iridescenceThicknessMap,E0=R&&!!k.sheenColorMap,C0=R&&!!k.sheenRoughnessMap,q0=!!k.specularMap,$0=!!k.specularColorMap,P0=!!k.specularIntensityMap,w0=T&&!!k.transmissionMap,a0=T&&!!k.thicknessMap,S=!!k.gradientMap,Y0=!!k.alphaMap,n=k.alphaTest>0,N0=!!k.alphaHash,R0=!!k.extensions,e=U9;if(k.toneMapped){if(V0===null||V0.isXRRenderTarget===!0)e=J.toneMapping}let X0={shaderID:G0,shaderType:k.type,shaderName:k.name,vertexShader:o0,fragmentShader:a,defines:k.defines,customVertexShaderID:U0,customFragmentShaderID:L0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:q,batching:x0,batchingColor:x0&&l._colorsTexture!==null,instancing:d0,instancingColor:d0&&l.instanceColor!==null,instancingMorph:d0&&l.morphTexture!==null,outputColorSpace:V0===null?J.outputColorSpace:V0.isXRRenderTarget===!0?V0.texture.colorSpace:s0.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:m0,matcap:JJ,envMap:n0,envMapMode:n0&&J0.mapping,envMapCubeUVHeight:Q0,aoMap:g0,lightMap:VJ,bumpMap:hJ,normalMap:t0,displacementMap:MJ,emissiveMap:FJ,normalMapObjectSpace:t0&&k.normalMapType===FK,normalMapTangentSpace:t0&&k.normalMapType===W$,packedNormalMap:t0&&k.normalMapType===W$&&k5(k.normalMap.format),metalnessMap:DJ,roughnessMap:j,anisotropy:gJ,anisotropyMap:g,clearcoat:e0,clearcoatMap:t,clearcoatNormalMap:Z0,clearcoatRoughnessMap:H0,dispersion:ZJ,iridescence:z,iridescenceMap:c,iridescenceThicknessMap:o,sheen:R,sheenColorMap:E0,sheenRoughnessMap:C0,specularMap:q0,specularColorMap:$0,specularIntensityMap:P0,transmission:T,transmissionMap:w0,thicknessMap:a0,gradientMap:S,opaque:k.transparent===!1&&k.blending===D7&&k.alphaToCoverage===!1,alphaMap:Y0,alphaTest:n,alphaHash:N0,combine:k.combine,mapUv:m0&&V(k.map.channel),aoMapUv:g0&&V(k.aoMap.channel),lightMapUv:VJ&&V(k.lightMap.channel),bumpMapUv:hJ&&V(k.bumpMap.channel),normalMapUv:t0&&V(k.normalMap.channel),displacementMapUv:MJ&&V(k.displacementMap.channel),emissiveMapUv:FJ&&V(k.emissiveMap.channel),metalnessMapUv:DJ&&V(k.metalnessMap.channel),roughnessMapUv:j&&V(k.roughnessMap.channel),anisotropyMapUv:g&&V(k.anisotropyMap.channel),clearcoatMapUv:t&&V(k.clearcoatMap.channel),clearcoatNormalMapUv:Z0&&V(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H0&&V(k.clearcoatRoughnessMap.channel),iridescenceMapUv:c&&V(k.iridescenceMap.channel),iridescenceThicknessMapUv:o&&V(k.iridescenceThicknessMap.channel),sheenColorMapUv:E0&&V(k.sheenColorMap.channel),sheenRoughnessMapUv:C0&&V(k.sheenRoughnessMap.channel),specularMapUv:q0&&V(k.specularMap.channel),specularColorMapUv:$0&&V(k.specularColorMap.channel),specularIntensityMapUv:P0&&V(k.specularIntensityMap.channel),transmissionMapUv:w0&&V(k.transmissionMap.channel),thicknessMapUv:a0&&V(k.thicknessMap.channel),alphaMapUv:Y0&&V(k.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(t0||gJ),vertexNormals:!!u.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!u.attributes.uv&&(m0||Y0),fog:!!p,useFog:k.fog===!0,fogExp2:!!p&&p.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||u.attributes.normal===void 0&&t0===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:T0,skinning:l.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:z0,morphTextureStride:HJ,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:r.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:e,decodeVideoTexture:m0&&k.map.isVideoTexture===!0&&s0.getTransfer(k.map.colorSpace)===YJ,decodeVideoTextureEmissive:FJ&&k.emissiveMap.isVideoTexture===!0&&s0.getTransfer(k.emissiveMap.colorSpace)===YJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===E9,flipSided:k.side===yJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:R0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R0&&k.extensions.multiDraw===!0||x0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return X0.vertexUv1s=U.has(1),X0.vertexUv2s=U.has(2),X0.vertexUv3s=U.has(3),U.clear(),X0}function G(k){let M=[];if(k.shaderID)M.push(k.shaderID);else M.push(k.customVertexShaderID),M.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let d in k.defines)M.push(d),M.push(k.defines[d]);if(k.isRawShaderMaterial===!1)O(M,k),w(M,k),M.push(J.outputColorSpace);return M.push(k.customProgramCacheKey),M.join()}function O(k,M){k.push(M.precision),k.push(M.outputColorSpace),k.push(M.envMapMode),k.push(M.envMapCubeUVHeight),k.push(M.mapUv),k.push(M.alphaMapUv),k.push(M.lightMapUv),k.push(M.aoMapUv),k.push(M.bumpMapUv),k.push(M.normalMapUv),k.push(M.displacementMapUv),k.push(M.emissiveMapUv),k.push(M.metalnessMapUv),k.push(M.roughnessMapUv),k.push(M.anisotropyMapUv),k.push(M.clearcoatMapUv),k.push(M.clearcoatNormalMapUv),k.push(M.clearcoatRoughnessMapUv),k.push(M.iridescenceMapUv),k.push(M.iridescenceThicknessMapUv),k.push(M.sheenColorMapUv),k.push(M.sheenRoughnessMapUv),k.push(M.specularMapUv),k.push(M.specularColorMapUv),k.push(M.specularIntensityMapUv),k.push(M.transmissionMapUv),k.push(M.thicknessMapUv),k.push(M.combine),k.push(M.fogExp2),k.push(M.sizeAttenuation),k.push(M.morphTargetsCount),k.push(M.morphAttributeCount),k.push(M.numDirLights),k.push(M.numPointLights),k.push(M.numSpotLights),k.push(M.numSpotLightMaps),k.push(M.numHemiLights),k.push(M.numRectAreaLights),k.push(M.numDirLightShadows),k.push(M.numPointLightShadows),k.push(M.numSpotLightShadows),k.push(M.numSpotLightShadowsWithMaps),k.push(M.numLightProbes),k.push(M.shadowMapType),k.push(M.toneMapping),k.push(M.numClippingPlanes),k.push(M.numClipIntersection),k.push(M.depthPacking)}function w(k,M){if(X.disableAll(),M.instancing)X.enable(0);if(M.instancingColor)X.enable(1);if(M.instancingMorph)X.enable(2);if(M.matcap)X.enable(3);if(M.envMap)X.enable(4);if(M.normalMapObjectSpace)X.enable(5);if(M.normalMapTangentSpace)X.enable(6);if(M.clearcoat)X.enable(7);if(M.iridescence)X.enable(8);if(M.alphaTest)X.enable(9);if(M.vertexColors)X.enable(10);if(M.vertexAlphas)X.enable(11);if(M.vertexUv1s)X.enable(12);if(M.vertexUv2s)X.enable(13);if(M.vertexUv3s)X.enable(14);if(M.vertexTangents)X.enable(15);if(M.anisotropy)X.enable(16);if(M.alphaHash)X.enable(17);if(M.batching)X.enable(18);if(M.dispersion)X.enable(19);if(M.batchingColor)X.enable(20);if(M.gradientMap)X.enable(21);if(M.packedNormalMap)X.enable(22);if(M.vertexNormals)X.enable(23);if(k.push(X.mask),X.disableAll(),M.fog)X.enable(0);if(M.useFog)X.enable(1);if(M.flatShading)X.enable(2);if(M.logarithmicDepthBuffer)X.enable(3);if(M.reversedDepthBuffer)X.enable(4);if(M.skinning)X.enable(5);if(M.morphTargets)X.enable(6);if(M.morphNormals)X.enable(7);if(M.morphColors)X.enable(8);if(M.premultipliedAlpha)X.enable(9);if(M.shadowMapEnabled)X.enable(10);if(M.doubleSided)X.enable(11);if(M.flipSided)X.enable(12);if(M.useDepthPacking)X.enable(13);if(M.dithering)X.enable(14);if(M.transmission)X.enable(15);if(M.sheen)X.enable(16);if(M.opaque)X.enable(17);if(M.pointsUvs)X.enable(18);if(M.decodeVideoTexture)X.enable(19);if(M.decodeVideoTextureEmissive)X.enable(20);if(M.alphaToCoverage)X.enable(21);if(M.numLightProbeGrids>0)X.enable(22);if(M.hasPositionAttribute)X.enable(23);k.push(X.mask)}function P(k){let M=D[k.type],d;if(M){let C=V9[M];d=AK.clone(C.uniforms)}else d=k.uniforms;return d}function E(k,M){let d=N.get(M);if(d!==void 0)++d.usedTimes;else d=new D5(J,M,k,K),H.push(d),N.set(M,d);return d}function A(k){if(--k.usedTimes===0){let M=H.indexOf(k);H[M]=H[H.length-1],H.pop(),N.delete(k.cacheKey),k.destroy()}}function I(k){Y.remove(k)}function _(){Y.dispose()}return{getParameters:B,getProgramCacheKey:G,getUniforms:P,acquireProgram:E,releaseProgram:A,releaseShaderCache:I,programs:H,dispose:_}}function V5(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,U){J.get(X)[Y]=U}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function z5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function iK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function oK(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(q){let D=0;if(q.isInstancedMesh)D+=2;if(q.isSkinnedMesh)D+=1;return D}function Y(q,D,V,B,G,O){let w=J[Q];if(w===void 0)w={id:q.id,object:q,geometry:D,material:V,materialVariant:X(q),groupOrder:B,renderOrder:q.renderOrder,z:G,group:O},J[Q]=w;else w.id=q.id,w.object=q,w.geometry=D,w.material=V,w.materialVariant=X(q),w.groupOrder=B,w.renderOrder=q.renderOrder,w.z=G,w.group=O;return Q++,w}function U(q,D,V,B,G,O){let w=Y(q,D,V,B,G,O);if(V.transmission>0)Z.push(w);else if(V.transparent===!0)K.push(w);else $.push(w)}function H(q,D,V,B,G,O){let w=Y(q,D,V,B,G,O);if(V.transmission>0)Z.unshift(w);else if(V.transparent===!0)K.unshift(w);else $.unshift(w)}function N(q,D,V){if($.length>1)$.sort(q||z5);if(Z.length>1)Z.sort(D||iK);if(K.length>1)K.sort(D||iK);if(V)$.reverse(),Z.reverse(),K.reverse()}function F(){for(let q=Q,D=J.length;q<D;q++){let V=J[q];if(V.id===null)break;V.id=null,V.object=null,V.geometry=null,V.material=null,V.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:F,sort:N}}function M5(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new oK,J.set(Z,[X]);else if(K>=W.length)X=new oK,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function B5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new y,color:new c0};break;case"SpotLight":$={position:new y,direction:new y,color:new c0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new y,color:new c0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new y,skyColor:new c0,groundColor:new c0};break;case"RectAreaLight":$={color:new c0,position:new y,halfWidth:new y,halfHeight:new y};break}return J[Q.id]=$,$}}}function I5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new u0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var A5=0;function C5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function P5(J){let Q=new B5,$=I5(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new y);let K=new y,W=new WJ,X=new WJ;function Y(H){let N=0,F=0,q=0;for(let M=0;M<9;M++)Z.probe[M].set(0,0,0);let D=0,V=0,B=0,G=0,O=0,w=0,P=0,E=0,A=0,I=0,_=0;H.sort(C5);for(let M=0,d=H.length;M<d;M++){let C=H[M],l=C.color,r=C.intensity,p=C.distance,u=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===N8)u=C.shadow.map.texture;else u=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)N+=l.r*r,F+=l.g*r,q+=l.b*r;else if(C.isLightProbe){for(let i=0;i<9;i++)Z.probe[i].addScaledVector(C.sh.coefficients[i],r);_++}else if(C.isDirectionalLight){let i=Q.get(C);if(i.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let x=C.shadow,J0=$.get(C);J0.shadowIntensity=x.intensity,J0.shadowBias=x.bias,J0.shadowNormalBias=x.normalBias,J0.shadowRadius=x.radius,J0.shadowMapSize=x.mapSize,Z.directionalShadow[D]=J0,Z.directionalShadowMap[D]=u,Z.directionalShadowMatrix[D]=C.shadow.matrix,w++}Z.directional[D]=i,D++}else if(C.isSpotLight){let i=Q.get(C);i.position.setFromMatrixPosition(C.matrixWorld),i.color.copy(l).multiplyScalar(r),i.distance=p,i.coneCos=Math.cos(C.angle),i.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),i.decay=C.decay,Z.spot[B]=i;let x=C.shadow;if(C.map){if(Z.spotLightMap[A]=C.map,A++,x.updateMatrices(C),C.castShadow)I++}if(Z.spotLightMatrix[B]=x.matrix,C.castShadow){let J0=$.get(C);J0.shadowIntensity=x.intensity,J0.shadowBias=x.bias,J0.shadowNormalBias=x.normalBias,J0.shadowRadius=x.radius,J0.shadowMapSize=x.mapSize,Z.spotShadow[B]=J0,Z.spotShadowMap[B]=u,E++}B++}else if(C.isRectAreaLight){let i=Q.get(C);i.color.copy(l).multiplyScalar(r),i.halfWidth.set(C.width*0.5,0,0),i.halfHeight.set(0,C.height*0.5,0),Z.rectArea[G]=i,G++}else if(C.isPointLight){let i=Q.get(C);if(i.color.copy(C.color).multiplyScalar(C.intensity),i.distance=C.distance,i.decay=C.decay,C.castShadow){let x=C.shadow,J0=$.get(C);J0.shadowIntensity=x.intensity,J0.shadowBias=x.bias,J0.shadowNormalBias=x.normalBias,J0.shadowRadius=x.radius,J0.shadowMapSize=x.mapSize,J0.shadowCameraNear=x.camera.near,J0.shadowCameraFar=x.camera.far,Z.pointShadow[V]=J0,Z.pointShadowMap[V]=u,Z.pointShadowMatrix[V]=C.shadow.matrix,P++}Z.point[V]=i,V++}else if(C.isHemisphereLight){let i=Q.get(C);i.skyColor.copy(C.color).multiplyScalar(r),i.groundColor.copy(C.groundColor).multiplyScalar(r),Z.hemi[O]=i,O++}}if(G>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=D0.LTC_FLOAT_1,Z.rectAreaLTC2=D0.LTC_FLOAT_2;else Z.rectAreaLTC1=D0.LTC_HALF_1,Z.rectAreaLTC2=D0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=q;let k=Z.hash;if(k.directionalLength!==D||k.pointLength!==V||k.spotLength!==B||k.rectAreaLength!==G||k.hemiLength!==O||k.numDirectionalShadows!==w||k.numPointShadows!==P||k.numSpotShadows!==E||k.numSpotMaps!==A||k.numLightProbes!==_)Z.directional.length=D,Z.spot.length=B,Z.rectArea.length=G,Z.point.length=V,Z.hemi.length=O,Z.directionalShadow.length=w,Z.directionalShadowMap.length=w,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.spotShadow.length=E,Z.spotShadowMap.length=E,Z.directionalShadowMatrix.length=w,Z.pointShadowMatrix.length=P,Z.spotLightMatrix.length=E+A-I,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=_,k.directionalLength=D,k.pointLength=V,k.spotLength=B,k.rectAreaLength=G,k.hemiLength=O,k.numDirectionalShadows=w,k.numPointShadows=P,k.numSpotShadows=E,k.numSpotMaps=A,k.numLightProbes=_,Z.version=A5++}function U(H,N){let F=0,q=0,D=0,V=0,B=0,G=N.matrixWorldInverse;for(let O=0,w=H.length;O<w;O++){let P=H[O];if(P.isDirectionalLight){let E=Z.directional[F];E.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(K),E.direction.transformDirection(G),F++}else if(P.isSpotLight){let E=Z.spot[D];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(G),E.direction.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(P.target.matrixWorld),E.direction.sub(K),E.direction.transformDirection(G),D++}else if(P.isRectAreaLight){let E=Z.rectArea[V];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(G),X.identity(),W.copy(P.matrixWorld),W.premultiply(G),X.extractRotation(W),E.halfWidth.set(P.width*0.5,0,0),E.halfHeight.set(0,P.height*0.5,0),E.halfWidth.applyMatrix4(X),E.halfHeight.applyMatrix4(X),V++}else if(P.isPointLight){let E=Z.point[q];E.position.setFromMatrixPosition(P.matrixWorld),E.position.applyMatrix4(G),q++}else if(P.isHemisphereLight){let E=Z.hemi[B];E.direction.setFromMatrixPosition(P.matrixWorld),E.direction.transformDirection(G),B++}}}return{setup:Y,setupView:U,state:Z}}function aK(J){let Q=new P5(J),$=[],Z=[],K=[];function W(q){F.camera=q,$.length=0,Z.length=0,K.length=0}function X(q){$.push(q)}function Y(q){Z.push(q)}function U(q){K.push(q)}function H(){Q.setup($)}function N(q){Q.setupView($,q)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:H,setupLightsView:N,pushLight:X,pushShadow:Y,pushLightProbeGrid:U}}function _5(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new aK(J),Q.set(K,[Y]);else if(W>=X.length)Y=new aK(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var w5=`void main() {
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
}`,S5=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],j5=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],rK=new WJ,_7=new y,m$=new y;function f5(J,Q,$){let Z=new A7,K=new u0,W=new u0,X=new GJ,Y=new R$,U=new k$,H={},N=$.maxTextureSize,F={[s8]:yJ,[yJ]:s8,[E9]:E9},q=new eJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new u0},radius:{value:4}},vertexShader:w5,fragmentShader:T5}),D=q.clone();D.defines.HORIZONTAL_PASS=1;let V=new N9;V.setAttribute("position",new iJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new S0(V,q),G=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E7;let O=this.type;this.render=function(I,_,k){if(G.enabled===!1)return;if(G.autoUpdate===!1&&G.needsUpdate===!1)return;if(I.length===0)return;if(this.type===CZ)f0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=E7;let M=J.getRenderTarget(),d=J.getActiveCubeFace(),C=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(D9),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let r=O!==this.type;if(r)_.traverse(function(p){if(p.material)if(Array.isArray(p.material))p.material.forEach((u)=>u.needsUpdate=!0);else p.material.needsUpdate=!0});for(let p=0,u=I.length;p<u;p++){let i=I[p],x=i.shadow;if(x===void 0){f0("WebGLShadowMap:",i,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;K.copy(x.mapSize);let J0=x.getFrameExtents();if(K.multiply(J0),W.copy(x.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/J0.x),K.x=W.x*J0.x,x.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/J0.y),K.y=W.y*J0.y,x.mapSize.y=W.y}let Q0=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=Q0,x.map===null||r===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===n8){if(i.isPointLight){f0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new tJ(K.x,K.y,{format:N8,type:S9,minFilter:LJ,magFilter:LJ,generateMipmaps:!1}),x.map.texture.name=i.name+".shadowMap",x.map.depthTexture=new r9(K.x,K.y,T9),x.map.depthTexture.name=i.name+".shadowMapDepth",x.map.depthTexture.format=H8,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=i9,x.map.depthTexture.magFilter=i9}else{if(i.isPointLight)x.map=new u$(K.x),x.map.depthTexture=new O$(K.x,o9);else x.map=new tJ(K.x,K.y),x.map.depthTexture=new r9(K.x,K.y,o9);if(x.map.depthTexture.name=i.name+".shadowMap",x.map.depthTexture.format=H8,this.type===E7)x.map.depthTexture.compareFunction=Q0?L6:k6,x.map.depthTexture.minFilter=LJ,x.map.depthTexture.magFilter=LJ;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=i9,x.map.depthTexture.magFilter=i9}x.camera.updateProjectionMatrix()}let G0=x.map.isWebGLCubeRenderTarget?6:1;for(let A0=0;A0<G0;A0++){if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,A0),J.clear();else{if(A0===0)J.setRenderTarget(x.map),J.clear();let z0=x.getViewport(A0);X.set(W.x*z0.x,W.y*z0.y,W.x*z0.z,W.y*z0.w),l.viewport(X)}if(i.isPointLight){let{camera:z0,matrix:HJ}=x,o0=i.distance||z0.far;if(o0!==z0.far)z0.far=o0,z0.updateProjectionMatrix();_7.setFromMatrixPosition(i.matrixWorld),z0.position.copy(_7),m$.copy(z0.position),m$.add(S5[A0]),z0.up.copy(j5[A0]),z0.lookAt(m$),z0.updateMatrixWorld(),HJ.makeTranslation(-_7.x,-_7.y,-_7.z),rK.multiplyMatrices(z0.projectionMatrix,z0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(rK,z0.coordinateSystem,z0.reversedDepth)}else x.updateMatrices(i);Z=x.getFrustum(),E(_,k,x.camera,i,this.type)}if(x.isPointLightShadow!==!0&&this.type===n8)w(x,k);x.needsUpdate=!1}O=this.type,G.needsUpdate=!1,J.setRenderTarget(M,d,C)};function w(I,_){let k=Q.update(B);if(q.defines.VSM_SAMPLES!==I.blurSamples)q.defines.VSM_SAMPLES=I.blurSamples,D.defines.VSM_SAMPLES=I.blurSamples,q.needsUpdate=!0,D.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new tJ(K.x,K.y,{format:N8,type:S9});q.uniforms.shadow_pass.value=I.map.depthTexture,q.uniforms.resolution.value=I.mapSize,q.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(_,null,k,q,B,null),D.uniforms.shadow_pass.value=I.mapPass.texture,D.uniforms.resolution.value=I.mapSize,D.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(_,null,k,D,B,null)}function P(I,_,k,M){let d=null,C=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)d=C;else if(d=k.isPointLight===!0?U:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let l=d.uuid,r=_.uuid,p=H[l];if(p===void 0)p={},H[l]=p;let u=p[r];if(u===void 0)u=d.clone(),p[r]=u,_.addEventListener("dispose",A);d=u}if(d.visible=_.visible,d.wireframe=_.wireframe,M===n8)d.side=_.shadowSide!==null?_.shadowSide:_.side;else d.side=_.shadowSide!==null?_.shadowSide:F[_.side];if(d.alphaMap=_.alphaMap,d.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,d.map=_.map,d.clipShadows=_.clipShadows,d.clippingPlanes=_.clippingPlanes,d.clipIntersection=_.clipIntersection,d.displacementMap=_.displacementMap,d.displacementScale=_.displacementScale,d.displacementBias=_.displacementBias,d.wireframeLinewidth=_.wireframeLinewidth,d.linewidth=_.linewidth,k.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let l=J.properties.get(d);l.light=k}return d}function E(I,_,k,M,d){if(I.visible===!1)return;if(I.layers.test(_.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&d===n8)&&(!I.frustumCulled||Z.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);let r=Q.update(I),p=I.material;if(Array.isArray(p)){let u=r.groups;for(let i=0,x=u.length;i<x;i++){let J0=u[i],Q0=p[J0.materialIndex];if(Q0&&Q0.visible){let G0=P(I,Q0,M,d);I.onBeforeShadow(J,I,_,k,r,G0,J0),J.renderBufferDirect(k,null,r,G0,I,J0),I.onAfterShadow(J,I,_,k,r,G0,J0)}}}else if(p.visible){let u=P(I,p,M,d);I.onBeforeShadow(J,I,_,k,r,u,null),J.renderBufferDirect(k,null,r,u,I,null),I.onAfterShadow(J,I,_,k,r,u,null)}}}let l=I.children;for(let r=0,p=l.length;r<p;r++)E(l[r],_,k,M,d)}function A(I){I.target.removeEventListener("dispose",A);for(let k in H){let M=H[k],d=I.target.uuid;if(d in M)M[d].dispose(),delete M[d]}}}function v5(J,Q){function $(){let S=!1,Y0=new GJ,n=null,N0=new GJ(0,0,0,0);return{setMask:function(R0){if(n!==R0&&!S)J.colorMask(R0,R0,R0,R0),n=R0},setLocked:function(R0){S=R0},setClear:function(R0,e,X0,v0,qJ){if(qJ===!0)R0*=v0,e*=v0,X0*=v0;if(Y0.set(R0,e,X0,v0),N0.equals(Y0)===!1)J.clearColor(R0,e,X0,v0),N0.copy(Y0)},reset:function(){S=!1,n=null,N0.set(-1,0,0,0)}}}function Z(){let S=!1,Y0=!1,n=null,N0=null,R0=null;return{setReversed:function(e){if(Y0!==e){let X0=Q.get("EXT_clip_control");if(e)X0.clipControlEXT(X0.LOWER_LEFT_EXT,X0.ZERO_TO_ONE_EXT);else X0.clipControlEXT(X0.LOWER_LEFT_EXT,X0.NEGATIVE_ONE_TO_ONE_EXT);Y0=e;let v0=R0;R0=null,this.setClear(v0)}},getReversed:function(){return Y0},setTest:function(e){if(e)V0(J.DEPTH_TEST);else T0(J.DEPTH_TEST)},setMask:function(e){if(n!==e&&!S)J.depthMask(e),n=e},setFunc:function(e){if(Y0)e=BK[e];if(N0!==e){switch(e){case sZ:J.depthFunc(J.NEVER);break;case iZ:J.depthFunc(J.ALWAYS);break;case oZ:J.depthFunc(J.LESS);break;case DQ:J.depthFunc(J.LEQUAL);break;case aZ:J.depthFunc(J.EQUAL);break;case rZ:J.depthFunc(J.GEQUAL);break;case tZ:J.depthFunc(J.GREATER);break;case eZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}N0=e}},setLocked:function(e){S=e},setClear:function(e){if(R0!==e){if(R0=e,Y0)e=1-e;J.clearDepth(e)}},reset:function(){S=!1,n=null,N0=null,R0=null,Y0=!1}}}function K(){let S=!1,Y0=null,n=null,N0=null,R0=null,e=null,X0=null,v0=null,qJ=null;return{setTest:function(KJ){if(!S)if(KJ)V0(J.STENCIL_TEST);else T0(J.STENCIL_TEST)},setMask:function(KJ){if(Y0!==KJ&&!S)J.stencilMask(KJ),Y0=KJ},setFunc:function(KJ,pJ,oJ){if(n!==KJ||N0!==pJ||R0!==oJ)J.stencilFunc(KJ,pJ,oJ),n=KJ,N0=pJ,R0=oJ},setOp:function(KJ,pJ,oJ){if(e!==KJ||X0!==pJ||v0!==oJ)J.stencilOp(KJ,pJ,oJ),e=KJ,X0=pJ,v0=oJ},setLocked:function(KJ){S=KJ},setClear:function(KJ){if(qJ!==KJ)J.clearStencil(KJ),qJ=KJ},reset:function(){S=!1,Y0=null,n=null,N0=null,R0=null,e=null,X0=null,v0=null,qJ=null}}}let W=new $,X=new Z,Y=new K,U=new WeakMap,H=new WeakMap,N={},F={},q={},D=new WeakMap,V=[],B=null,G=!1,O=null,w=null,P=null,E=null,A=null,I=null,_=null,k=new c0(0,0,0),M=0,d=!1,C=null,l=null,r=null,p=null,u=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,J0=0,Q0=J.getParameter(J.VERSION);if(Q0.indexOf("WebGL")!==-1)J0=parseFloat(/^WebGL (\d)/.exec(Q0)[1]),x=J0>=1;else if(Q0.indexOf("OpenGL ES")!==-1)J0=parseFloat(/^OpenGL ES (\d)/.exec(Q0)[1]),x=J0>=2;let G0=null,A0={},z0=J.getParameter(J.SCISSOR_BOX),HJ=J.getParameter(J.VIEWPORT),o0=new GJ().fromArray(z0),a=new GJ().fromArray(HJ);function U0(S,Y0,n,N0){let R0=new Uint8Array(4),e=J.createTexture();J.bindTexture(S,e),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let X0=0;X0<n;X0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D(Y0,0,J.RGBA,1,1,N0,0,J.RGBA,J.UNSIGNED_BYTE,R0);else J.texImage2D(Y0+X0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,R0);return e}let L0={};L0[J.TEXTURE_2D]=U0(J.TEXTURE_2D,J.TEXTURE_2D,1),L0[J.TEXTURE_CUBE_MAP]=U0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),L0[J.TEXTURE_2D_ARRAY]=U0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),L0[J.TEXTURE_3D]=U0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),V0(J.DEPTH_TEST),X.setFunc(DQ),hJ(!1),t0(GQ),V0(J.CULL_FACE),g0(D9);function V0(S){if(N[S]!==!0)J.enable(S),N[S]=!0}function T0(S){if(N[S]!==!1)J.disable(S),N[S]=!1}function d0(S,Y0){if(q[S]!==Y0){if(J.bindFramebuffer(S,Y0),q[S]=Y0,S===J.DRAW_FRAMEBUFFER)q[J.FRAMEBUFFER]=Y0;if(S===J.FRAMEBUFFER)q[J.DRAW_FRAMEBUFFER]=Y0;return!0}return!1}function x0(S,Y0){let n=V,N0=!1;if(S){if(n=D.get(Y0),n===void 0)n=[],D.set(Y0,n);let R0=S.textures;if(n.length!==R0.length||n[0]!==J.COLOR_ATTACHMENT0){for(let e=0,X0=R0.length;e<X0;e++)n[e]=J.COLOR_ATTACHMENT0+e;n.length=R0.length,N0=!0}}else if(n[0]!==J.BACK)n[0]=J.BACK,N0=!0;if(N0)J.drawBuffers(n)}function m0(S){if(B!==S)return J.useProgram(S),B=S,!0;return!1}let JJ={[i8]:J.FUNC_ADD,[_Z]:J.FUNC_SUBTRACT,[wZ]:J.FUNC_REVERSE_SUBTRACT};JJ[TZ]=J.MIN,JJ[SZ]=J.MAX;let n0={[jZ]:J.ZERO,[fZ]:J.ONE,[vZ]:J.SRC_COLOR,[bZ]:J.SRC_ALPHA,[lZ]:J.SRC_ALPHA_SATURATE,[pZ]:J.DST_COLOR,[xZ]:J.DST_ALPHA,[yZ]:J.ONE_MINUS_SRC_COLOR,[hZ]:J.ONE_MINUS_SRC_ALPHA,[mZ]:J.ONE_MINUS_DST_COLOR,[gZ]:J.ONE_MINUS_DST_ALPHA,[dZ]:J.CONSTANT_COLOR,[uZ]:J.ONE_MINUS_CONSTANT_COLOR,[cZ]:J.CONSTANT_ALPHA,[nZ]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(S,Y0,n,N0,R0,e,X0,v0,qJ,KJ){if(S===D9){if(G===!0)T0(J.BLEND),G=!1;return}if(G===!1)V0(J.BLEND),G=!0;if(S!==PZ){if(S!==O||KJ!==d){if(w!==i8||A!==i8)J.blendEquation(J.FUNC_ADD),w=i8,A=i8;if(KJ)switch(S){case D7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case FQ:J.blendFunc(J.ONE,J.ONE);break;case OQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case EQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:j0("WebGLState: Invalid blending: ",S);break}else switch(S){case D7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case FQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case OQ:j0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case EQ:j0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:j0("WebGLState: Invalid blending: ",S);break}P=null,E=null,I=null,_=null,k.set(0,0,0),M=0,O=S,d=KJ}return}if(R0=R0||Y0,e=e||n,X0=X0||N0,Y0!==w||R0!==A)J.blendEquationSeparate(JJ[Y0],JJ[R0]),w=Y0,A=R0;if(n!==P||N0!==E||e!==I||X0!==_)J.blendFuncSeparate(n0[n],n0[N0],n0[e],n0[X0]),P=n,E=N0,I=e,_=X0;if(v0.equals(k)===!1||qJ!==M)J.blendColor(v0.r,v0.g,v0.b,qJ),k.copy(v0),M=qJ;O=S,d=!1}function VJ(S,Y0){S.side===E9?T0(J.CULL_FACE):V0(J.CULL_FACE);let n=S.side===yJ;if(Y0)n=!n;hJ(n),S.blending===D7&&S.transparent===!1?g0(D9):g0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),X.setFunc(S.depthFunc),X.setTest(S.depthTest),X.setMask(S.depthWrite),W.setMask(S.colorWrite);let N0=S.stencilWrite;if(Y.setTest(N0),N0)Y.setMask(S.stencilWriteMask),Y.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),Y.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);FJ(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?V0(J.SAMPLE_ALPHA_TO_COVERAGE):T0(J.SAMPLE_ALPHA_TO_COVERAGE)}function hJ(S){if(C!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);C=S}}function t0(S){if(S!==IZ){if(V0(J.CULL_FACE),S!==l)if(S===GQ)J.cullFace(J.BACK);else if(S===AZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else T0(J.CULL_FACE);l=S}function MJ(S){if(S!==r){if(x)J.lineWidth(S);r=S}}function FJ(S,Y0,n){if(S){if(V0(J.POLYGON_OFFSET_FILL),p!==Y0||u!==n){if(p=Y0,u=n,X.getReversed())Y0=-Y0;J.polygonOffset(Y0,n)}}else T0(J.POLYGON_OFFSET_FILL)}function DJ(S){if(S)V0(J.SCISSOR_TEST);else T0(J.SCISSOR_TEST)}function j(S){if(S===void 0)S=J.TEXTURE0+i-1;if(G0!==S)J.activeTexture(S),G0=S}function gJ(S,Y0,n){if(n===void 0)if(G0===null)n=J.TEXTURE0+i-1;else n=G0;let N0=A0[n];if(N0===void 0)N0={type:void 0,texture:void 0},A0[n]=N0;if(N0.type!==S||N0.texture!==Y0){if(G0!==n)J.activeTexture(n),G0=n;J.bindTexture(S,Y0||L0[S]),N0.type=S,N0.texture=Y0}}function e0(){let S=A0[G0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function ZJ(){try{J.compressedTexImage2D(...arguments)}catch(S){j0("WebGLState:",S)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(S){j0("WebGLState:",S)}}function R(){try{J.texSubImage2D(...arguments)}catch(S){j0("WebGLState:",S)}}function T(){try{J.texSubImage3D(...arguments)}catch(S){j0("WebGLState:",S)}}function g(){try{J.compressedTexSubImage2D(...arguments)}catch(S){j0("WebGLState:",S)}}function t(){try{J.compressedTexSubImage3D(...arguments)}catch(S){j0("WebGLState:",S)}}function Z0(){try{J.texStorage2D(...arguments)}catch(S){j0("WebGLState:",S)}}function H0(){try{J.texStorage3D(...arguments)}catch(S){j0("WebGLState:",S)}}function c(){try{J.texImage2D(...arguments)}catch(S){j0("WebGLState:",S)}}function o(){try{J.texImage3D(...arguments)}catch(S){j0("WebGLState:",S)}}function E0(S){if(F[S]!==void 0)return F[S];else return J.getParameter(S)}function C0(S,Y0){if(F[S]!==Y0)J.pixelStorei(S,Y0),F[S]=Y0}function q0(S){if(o0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),o0.copy(S)}function $0(S){if(a.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),a.copy(S)}function P0(S,Y0){let n=H.get(Y0);if(n===void 0)n=new WeakMap,H.set(Y0,n);let N0=n.get(S);if(N0===void 0)N0=J.getUniformBlockIndex(Y0,S.name),n.set(S,N0)}function w0(S,Y0){let N0=H.get(Y0).get(S);if(U.get(Y0)!==N0)J.uniformBlockBinding(Y0,N0,S.__bindingPointIndex),U.set(Y0,N0)}function a0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},F={},G0=null,A0={},q={},D=new WeakMap,V=[],B=null,G=!1,O=null,w=null,P=null,E=null,A=null,I=null,_=null,k=new c0(0,0,0),M=0,d=!1,C=null,l=null,r=null,p=null,u=null,o0.set(0,0,J.canvas.width,J.canvas.height),a.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:V0,disable:T0,bindFramebuffer:d0,drawBuffers:x0,useProgram:m0,setBlending:g0,setMaterial:VJ,setFlipSided:hJ,setCullFace:t0,setLineWidth:MJ,setPolygonOffset:FJ,setScissorTest:DJ,activeTexture:j,bindTexture:gJ,unbindTexture:e0,compressedTexImage2D:ZJ,compressedTexImage3D:z,texImage2D:c,texImage3D:o,pixelStorei:C0,getParameter:E0,updateUBOMapping:P0,uniformBlockBinding:w0,texStorage2D:Z0,texStorage3D:H0,texSubImage2D:R,texSubImage3D:T,compressedTexSubImage2D:g,compressedTexSubImage3D:t,scissor:q0,viewport:$0,reset:a0}}function y5(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new u0,N=new WeakMap,F=new Set,q,D=new WeakMap,V=!1;try{V=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function B(z,R){return V?new OffscreenCanvas(z,R):O7("canvas")}function G(z,R,T){let g=1,t=ZJ(z);if(t.width>T||t.height>T)g=T/Math.max(t.width,t.height);if(g<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let Z0=Math.floor(g*t.width),H0=Math.floor(g*t.height);if(q===void 0)q=B(Z0,H0);let c=R?B(Z0,H0):q;return c.width=Z0,c.height=H0,c.getContext("2d").drawImage(z,0,0,Z0,H0),f0("WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+Z0+"x"+H0+")."),c}else{if("data"in z)f0("WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return z}return z}function O(z){return z.generateMipmaps}function w(z){J.generateMipmap(z)}function P(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function E(z,R,T,g,t,Z0=!1){if(z!==null){if(J[z]!==void 0)return J[z];f0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let H0;if(g){if(H0=Q.get("EXT_texture_norm16"),!H0)f0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=R;if(R===J.RED){if(T===J.FLOAT)c=J.R32F;if(T===J.HALF_FLOAT)c=J.R16F;if(T===J.UNSIGNED_BYTE)c=J.R8;if(T===J.UNSIGNED_SHORT&&H0)c=H0.R16_EXT;if(T===J.SHORT&&H0)c=H0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.R8UI;if(T===J.UNSIGNED_SHORT)c=J.R16UI;if(T===J.UNSIGNED_INT)c=J.R32UI;if(T===J.BYTE)c=J.R8I;if(T===J.SHORT)c=J.R16I;if(T===J.INT)c=J.R32I}if(R===J.RG){if(T===J.FLOAT)c=J.RG32F;if(T===J.HALF_FLOAT)c=J.RG16F;if(T===J.UNSIGNED_BYTE)c=J.RG8;if(T===J.UNSIGNED_SHORT&&H0)c=H0.RG16_EXT;if(T===J.SHORT&&H0)c=H0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RG8UI;if(T===J.UNSIGNED_SHORT)c=J.RG16UI;if(T===J.UNSIGNED_INT)c=J.RG32UI;if(T===J.BYTE)c=J.RG8I;if(T===J.SHORT)c=J.RG16I;if(T===J.INT)c=J.RG32I}if(R===J.RGB_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RGB8UI;if(T===J.UNSIGNED_SHORT)c=J.RGB16UI;if(T===J.UNSIGNED_INT)c=J.RGB32UI;if(T===J.BYTE)c=J.RGB8I;if(T===J.SHORT)c=J.RGB16I;if(T===J.INT)c=J.RGB32I}if(R===J.RGBA_INTEGER){if(T===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(T===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(T===J.UNSIGNED_INT)c=J.RGBA32UI;if(T===J.BYTE)c=J.RGBA8I;if(T===J.SHORT)c=J.RGBA16I;if(T===J.INT)c=J.RGBA32I}if(R===J.RGB){if(T===J.UNSIGNED_SHORT&&H0)c=H0.RGB16_EXT;if(T===J.SHORT&&H0)c=H0.RGB16_SNORM_EXT;if(T===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(T===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(R===J.RGBA){let o=Z0?Y$:s0.getTransfer(t);if(T===J.FLOAT)c=J.RGBA32F;if(T===J.HALF_FLOAT)c=J.RGBA16F;if(T===J.UNSIGNED_BYTE)c=o===YJ?J.SRGB8_ALPHA8:J.RGBA8;if(T===J.UNSIGNED_SHORT&&H0)c=H0.RGBA16_EXT;if(T===J.SHORT&&H0)c=H0.RGBA16_SNORM_EXT;if(T===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(T===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function A(z,R){let T;if(z){if(R===null||R===o9||R===a8)T=J.DEPTH24_STENCIL8;else if(R===T9)T=J.DEPTH32F_STENCIL8;else if(R===V7)T=J.DEPTH24_STENCIL8,f0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===o9||R===a8)T=J.DEPTH_COMPONENT24;else if(R===T9)T=J.DEPTH_COMPONENT32F;else if(R===V7)T=J.DEPTH_COMPONENT16;return T}function I(z,R){if(O(z)===!0||z.isFramebufferTexture&&z.minFilter!==i9&&z.minFilter!==LJ)return Math.log2(Math.max(R.width,R.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return R.mipmaps.length;else return 1}function _(z){let R=z.target;if(R.removeEventListener("dispose",_),M(R),R.isVideoTexture)N.delete(R);if(R.isHTMLTexture)F.delete(R)}function k(z){let R=z.target;R.removeEventListener("dispose",k),C(R)}function M(z){let R=Z.get(z);if(R.__webglInit===void 0)return;let T=z.source,g=D.get(T);if(g){let t=g[R.__cacheKey];if(t.usedTimes--,t.usedTimes===0)d(z);if(Object.keys(g).length===0)D.delete(T)}Z.remove(z)}function d(z){let R=Z.get(z);J.deleteTexture(R.__webglTexture);let T=z.source,g=D.get(T);delete g[R.__cacheKey],X.memory.textures--}function C(z){let R=Z.get(z);if(z.depthTexture)z.depthTexture.dispose(),Z.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let g=0;g<6;g++){if(Array.isArray(R.__webglFramebuffer[g]))for(let t=0;t<R.__webglFramebuffer[g].length;t++)J.deleteFramebuffer(R.__webglFramebuffer[g][t]);else J.deleteFramebuffer(R.__webglFramebuffer[g]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[g])}else{if(Array.isArray(R.__webglFramebuffer))for(let g=0;g<R.__webglFramebuffer.length;g++)J.deleteFramebuffer(R.__webglFramebuffer[g]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let g=0;g<R.__webglColorRenderbuffer.length;g++)if(R.__webglColorRenderbuffer[g])J.deleteRenderbuffer(R.__webglColorRenderbuffer[g])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let T=z.textures;for(let g=0,t=T.length;g<t;g++){let Z0=Z.get(T[g]);if(Z0.__webglTexture)J.deleteTexture(Z0.__webglTexture),X.memory.textures--;Z.remove(T[g])}Z.remove(z)}let l=0;function r(){l=0}function p(){return l}function u(z){l=z}function i(){let z=l;if(z>=K.maxTextures)f0("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+K.maxTextures);return l+=1,z}function x(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function J0(z,R){let T=Z.get(z);if(z.isVideoTexture)gJ(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&T.__version!==z.version){let g=z.image;if(g===null)f0("WebGLRenderer: Texture marked for update but no image data found.");else if(g.complete===!1)f0("WebGLRenderer: Texture marked for update but image is incomplete");else{T0(T,z,R);return}}else if(z.isExternalTexture)T.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,T.__webglTexture,J.TEXTURE0+R)}function Q0(z,R){let T=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&T.__version!==z.version){T0(T,z,R);return}else if(z.isExternalTexture)T.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,T.__webglTexture,J.TEXTURE0+R)}function G0(z,R){let T=Z.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&T.__version!==z.version){T0(T,z,R);return}$.bindTexture(J.TEXTURE_3D,T.__webglTexture,J.TEXTURE0+R)}function A0(z,R){let T=Z.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&T.__version!==z.version){d0(T,z,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+R)}let z0={[ZK]:J.REPEAT,[q6]:J.CLAMP_TO_EDGE,[KK]:J.MIRRORED_REPEAT},HJ={[i9]:J.NEAREST,[WK]:J.NEAREST_MIPMAP_NEAREST,[L7]:J.NEAREST_MIPMAP_LINEAR,[LJ]:J.LINEAR,[N6]:J.LINEAR_MIPMAP_NEAREST,[U8]:J.LINEAR_MIPMAP_LINEAR},o0={[OK]:J.NEVER,[LK]:J.ALWAYS,[EK]:J.LESS,[k6]:J.LEQUAL,[DK]:J.EQUAL,[L6]:J.GEQUAL,[RK]:J.GREATER,[kK]:J.NOTEQUAL};function a(z,R){if(R.type===T9&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===LJ||R.magFilter===N6||R.magFilter===L7||R.magFilter===U8||R.minFilter===LJ||R.minFilter===N6||R.minFilter===L7||R.minFilter===U8))f0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,z0[R.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,z0[R.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,z0[R.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,HJ[R.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,HJ[R.minFilter]),R.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,o0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===i9)return;if(R.minFilter!==L7&&R.minFilter!==U8)return;if(R.type===T9&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let T=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,K.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function U0(z,R){let T=!1;if(z.__webglInit===void 0)z.__webglInit=!0,R.addEventListener("dispose",_);let g=R.source,t=D.get(g);if(t===void 0)t={},D.set(g,t);let Z0=x(R);if(Z0!==z.__cacheKey){if(t[Z0]===void 0)t[Z0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,T=!0;t[Z0].usedTimes++;let H0=t[z.__cacheKey];if(H0!==void 0){if(t[z.__cacheKey].usedTimes--,H0.usedTimes===0)d(R)}z.__cacheKey=Z0,z.__webglTexture=t[Z0].texture}return T}function L0(z,R,T){return Math.floor(Math.floor(z/T)/R)}function V0(z,R,T,g){let Z0=z.updateRanges;if(Z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,T,g,R.data);else{Z0.sort((C0,q0)=>C0.start-q0.start);let H0=0;for(let C0=1;C0<Z0.length;C0++){let q0=Z0[H0],$0=Z0[C0],P0=q0.start+q0.count,w0=L0($0.start,R.width,4),a0=L0(q0.start,R.width,4);if($0.start<=P0+1&&w0===a0&&L0($0.start+$0.count-1,R.width,4)===w0)q0.count=Math.max(q0.count,$0.start+$0.count-q0.start);else++H0,Z0[H0]=$0}Z0.length=H0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),o=$.getParameter(J.UNPACK_SKIP_PIXELS),E0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let C0=0,q0=Z0.length;C0<q0;C0++){let $0=Z0[C0],P0=Math.floor($0.start/4),w0=Math.ceil($0.count/4),a0=P0%R.width,S=Math.floor(P0/R.width),Y0=w0,n=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,a0),$.pixelStorei(J.UNPACK_SKIP_ROWS,S),$.texSubImage2D(J.TEXTURE_2D,0,a0,S,Y0,1,T,g,R.data)}z.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,o),$.pixelStorei(J.UNPACK_SKIP_ROWS,E0)}}function T0(z,R,T){let g=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)g=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)g=J.TEXTURE_3D;let t=U0(z,R),Z0=R.source;$.bindTexture(g,z.__webglTexture,J.TEXTURE0+T);let H0=Z.get(Z0);if(Z0.version!==H0.__version||t===!0){if($.activeTexture(J.TEXTURE0+T),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let n=s0.getPrimaries(s0.workingColorSpace),N0=R.colorSpace===G8?null:s0.getPrimaries(R.colorSpace),R0=R.colorSpace===G8||n===N0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let o=G(R.image,!1,K.maxTextureSize);o=e0(R,o);let E0=W.convert(R.format,R.colorSpace),C0=W.convert(R.type),q0=E(R.internalFormat,E0,C0,R.normalized,R.colorSpace,R.isVideoTexture);a(g,R);let $0,P0=R.mipmaps,w0=R.isVideoTexture!==!0,a0=H0.__version===void 0||t===!0,S=Z0.dataReady,Y0=I(R,o);if(R.isDepthTexture){if(q0=A(R.format===q8,R.type),a0)if(w0)$.texStorage2D(J.TEXTURE_2D,1,q0,o.width,o.height);else $.texImage2D(J.TEXTURE_2D,0,q0,o.width,o.height,0,E0,C0,null)}else if(R.isDataTexture)if(P0.length>0){if(w0&&a0)$.texStorage2D(J.TEXTURE_2D,Y0,q0,P0[0].width,P0[0].height);for(let n=0,N0=P0.length;n<N0;n++)if($0=P0[n],w0){if(S)$.texSubImage2D(J.TEXTURE_2D,n,0,0,$0.width,$0.height,E0,C0,$0.data)}else $.texImage2D(J.TEXTURE_2D,n,q0,$0.width,$0.height,0,E0,C0,$0.data);R.generateMipmaps=!1}else if(w0){if(a0)$.texStorage2D(J.TEXTURE_2D,Y0,q0,o.width,o.height);if(S)V0(R,o,E0,C0)}else $.texImage2D(J.TEXTURE_2D,0,q0,o.width,o.height,0,E0,C0,o.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(w0&&a0)$.texStorage3D(J.TEXTURE_2D_ARRAY,Y0,q0,P0[0].width,P0[0].height,o.depth);for(let n=0,N0=P0.length;n<N0;n++)if($0=P0[n],R.format!==R9)if(E0!==null)if(w0){if(S)if(R.layerUpdates.size>0){let R0=y$($0.width,$0.height,R.format,R.type);for(let e of R.layerUpdates){let X0=$0.data.subarray(e*R0/$0.data.BYTES_PER_ELEMENT,(e+1)*R0/$0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,e,$0.width,$0.height,1,E0,X0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,$0.width,$0.height,o.depth,E0,$0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,n,q0,$0.width,$0.height,o.depth,0,$0.data,0,0);else f0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(w0){if(S)$.texSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,$0.width,$0.height,o.depth,E0,C0,$0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,n,q0,$0.width,$0.height,o.depth,0,E0,C0,$0.data)}else{if(w0&&a0)$.texStorage2D(J.TEXTURE_2D,Y0,q0,P0[0].width,P0[0].height);for(let n=0,N0=P0.length;n<N0;n++)if($0=P0[n],R.format!==R9)if(E0!==null)if(w0){if(S)$.compressedTexSubImage2D(J.TEXTURE_2D,n,0,0,$0.width,$0.height,E0,$0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,n,q0,$0.width,$0.height,0,$0.data);else f0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(w0){if(S)$.texSubImage2D(J.TEXTURE_2D,n,0,0,$0.width,$0.height,E0,C0,$0.data)}else $.texImage2D(J.TEXTURE_2D,n,q0,$0.width,$0.height,0,E0,C0,$0.data)}else if(R.isDataArrayTexture)if(w0){if(a0)$.texStorage3D(J.TEXTURE_2D_ARRAY,Y0,q0,o.width,o.height,o.depth);if(S)if(R.layerUpdates.size>0){let n=y$(o.width,o.height,R.format,R.type);for(let N0 of R.layerUpdates){let R0=o.data.subarray(N0*n/o.data.BYTES_PER_ELEMENT,(N0+1)*n/o.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,N0,o.width,o.height,1,E0,C0,R0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,o.width,o.height,o.depth,E0,C0,o.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,q0,o.width,o.height,o.depth,0,E0,C0,o.data);else if(R.isData3DTexture)if(w0){if(a0)$.texStorage3D(J.TEXTURE_3D,Y0,q0,o.width,o.height,o.depth);if(S)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,o.width,o.height,o.depth,E0,C0,o.data)}else $.texImage3D(J.TEXTURE_3D,0,q0,o.width,o.height,o.depth,0,E0,C0,o.data);else if(R.isFramebufferTexture){if(a0)if(w0)$.texStorage2D(J.TEXTURE_2D,Y0,q0,o.width,o.height);else{let{width:n,height:N0}=o;for(let R0=0;R0<Y0;R0++)$.texImage2D(J.TEXTURE_2D,R0,q0,n,N0,0,E0,C0,null),n>>=1,N0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let n=J.canvas;if(!n.hasAttribute("layoutsubtree"))n.setAttribute("layoutsubtree","true");if(o.parentNode!==n){n.appendChild(o),F.add(R),n.onpaint=(N0)=>{let R0=N0.changedElements;for(let e of F)if(R0.includes(e.image))e.needsUpdate=!0},n.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,o);else{let{RGBA:R0,RGBA:e,UNSIGNED_BYTE:X0}=J;J.texElementImage2D(J.TEXTURE_2D,0,R0,e,X0,o)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(P0.length>0){if(w0&&a0){let n=ZJ(P0[0]);$.texStorage2D(J.TEXTURE_2D,Y0,q0,n.width,n.height)}for(let n=0,N0=P0.length;n<N0;n++)if($0=P0[n],w0){if(S)$.texSubImage2D(J.TEXTURE_2D,n,0,0,E0,C0,$0)}else $.texImage2D(J.TEXTURE_2D,n,q0,E0,C0,$0);R.generateMipmaps=!1}else if(w0){if(a0){let n=ZJ(o);$.texStorage2D(J.TEXTURE_2D,Y0,q0,n.width,n.height)}if(S)$.texSubImage2D(J.TEXTURE_2D,0,0,0,E0,C0,o)}else $.texImage2D(J.TEXTURE_2D,0,q0,E0,C0,o);if(O(R))w(g);if(H0.__version=Z0.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function d0(z,R,T){if(R.image.length!==6)return;let g=U0(z,R),t=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+T);let Z0=Z.get(t);if(t.version!==Z0.__version||g===!0){$.activeTexture(J.TEXTURE0+T);let H0=s0.getPrimaries(s0.workingColorSpace),c=R.colorSpace===G8?null:s0.getPrimaries(R.colorSpace),o=R.colorSpace===G8||H0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,o);let E0=R.isCompressedTexture||R.image[0].isCompressedTexture,C0=R.image[0]&&R.image[0].isDataTexture,q0=[];for(let e=0;e<6;e++){if(!E0&&!C0)q0[e]=G(R.image[e],!0,K.maxCubemapSize);else q0[e]=C0?R.image[e].image:R.image[e];q0[e]=e0(R,q0[e])}let $0=q0[0],P0=W.convert(R.format,R.colorSpace),w0=W.convert(R.type),a0=E(R.internalFormat,P0,w0,R.normalized,R.colorSpace),S=R.isVideoTexture!==!0,Y0=Z0.__version===void 0||g===!0,n=t.dataReady,N0=I(R,$0);a(J.TEXTURE_CUBE_MAP,R);let R0;if(E0){if(S&&Y0)$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,a0,$0.width,$0.height);for(let e=0;e<6;e++){R0=q0[e].mipmaps;for(let X0=0;X0<R0.length;X0++){let v0=R0[X0];if(R.format!==R9)if(P0!==null)if(S){if(n)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0,0,0,v0.width,v0.height,P0,v0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0,a0,v0.width,v0.height,0,v0.data);else f0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0,0,0,v0.width,v0.height,P0,w0,v0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0,a0,v0.width,v0.height,0,P0,w0,v0.data)}}}else{if(R0=R.mipmaps,S&&Y0){if(R0.length>0)N0++;let e=ZJ(q0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,a0,e.width,e.height)}for(let e=0;e<6;e++)if(C0){if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,q0[e].width,q0[e].height,P0,w0,q0[e].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,a0,q0[e].width,q0[e].height,0,P0,w0,q0[e].data);for(let X0=0;X0<R0.length;X0++){let qJ=R0[X0].image[e].image;if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0+1,0,0,qJ.width,qJ.height,P0,w0,qJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0+1,a0,qJ.width,qJ.height,0,P0,w0,qJ.data)}}else{if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,P0,w0,q0[e])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,a0,P0,w0,q0[e]);for(let X0=0;X0<R0.length;X0++){let v0=R0[X0];if(S){if(n)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0+1,0,0,P0,w0,v0.image[e])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,X0+1,a0,P0,w0,v0.image[e])}}}if(O(R))w(J.TEXTURE_CUBE_MAP);if(Z0.__version=t.version,R.onUpdate)R.onUpdate(R)}z.__version=R.version}function x0(z,R,T,g,t,Z0){let H0=W.convert(T.format,T.colorSpace),c=W.convert(T.type),o=E(T.internalFormat,H0,c,T.normalized,T.colorSpace),E0=Z.get(R),C0=Z.get(T);if(C0.__renderTarget=R,!E0.__hasExternalTextures){let q0=Math.max(1,R.width>>Z0),$0=Math.max(1,R.height>>Z0);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)$.texImage3D(t,Z0,o,q0,$0,R.depth,0,H0,c,null);else $.texImage2D(t,Z0,o,q0,$0,0,H0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,z),j(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,g,t,C0.__webglTexture,0,DJ(R));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,g,t,C0.__webglTexture,Z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function m0(z,R,T){if(J.bindRenderbuffer(J.RENDERBUFFER,z),R.depthBuffer){let g=R.depthTexture,t=g&&g.isDepthTexture?g.type:null,Z0=A(R.stencilBuffer,t),H0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(j(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,DJ(R),Z0,R.width,R.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ(R),Z0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,Z0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,H0,J.RENDERBUFFER,z)}else{let g=R.textures;for(let t=0;t<g.length;t++){let Z0=g[t],H0=W.convert(Z0.format,Z0.colorSpace),c=W.convert(Z0.type),o=E(Z0.internalFormat,H0,c,Z0.normalized,Z0.colorSpace);if(j(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,DJ(R),o,R.width,R.height);else if(T)J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ(R),o,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,o,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function JJ(z,R,T){let g=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let t=Z.get(R.depthTexture);if(t.__renderTarget=R,!t.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(g){if(t.__webglInit===void 0)t.__webglInit=!0,R.depthTexture.addEventListener("dispose",_);if(t.__webglTexture===void 0){t.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,t.__webglTexture),a(J.TEXTURE_CUBE_MAP,R.depthTexture);let E0=W.convert(R.depthTexture.format),C0=W.convert(R.depthTexture.type),q0;if(R.depthTexture.format===H8)q0=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===q8)q0=J.DEPTH24_STENCIL8;for(let $0=0;$0<6;$0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0,q0,R.width,R.height,0,E0,C0,null)}}else J0(R.depthTexture,0);let Z0=t.__webglTexture,H0=DJ(R),c=g?J.TEXTURE_CUBE_MAP_POSITIVE_X+T:J.TEXTURE_2D,o=R.depthTexture.format===q8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===H8)if(j(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,c,Z0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,c,Z0,0);else if(R.depthTexture.format===q8)if(j(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,c,Z0,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,o,c,Z0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function n0(z){let R=Z.get(z),T=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let g=z.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(g){let t=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,g.removeEventListener("dispose",t)};g.addEventListener("dispose",t),R.__depthDisposeCallback=t}R.__boundDepthTexture=g}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(T)for(let g=0;g<6;g++)JJ(R.__webglFramebuffer[g],z,g);else{let g=z.texture.mipmaps;if(g&&g.length>0)JJ(R.__webglFramebuffer[0],z,0);else JJ(R.__webglFramebuffer,z,0)}else if(T){R.__webglDepthbuffer=[];for(let g=0;g<6;g++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[g]),R.__webglDepthbuffer[g]===void 0)R.__webglDepthbuffer[g]=J.createRenderbuffer(),m0(R.__webglDepthbuffer[g],z,!1);else{let t=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=R.__webglDepthbuffer[g];J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,Z0)}}else{let g=z.texture.mipmaps;if(g&&g.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),m0(R.__webglDepthbuffer,z,!1);else{let t=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Z0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,Z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function g0(z,R,T){let g=Z.get(z);if(R!==void 0)x0(g.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(T!==void 0)n0(z)}function VJ(z){let R=z.texture,T=Z.get(z),g=Z.get(R);z.addEventListener("dispose",k);let t=z.textures,Z0=z.isWebGLCubeRenderTarget===!0,H0=t.length>1;if(!H0){if(g.__webglTexture===void 0)g.__webglTexture=J.createTexture();g.__version=R.version,X.memory.textures++}if(Z0){T.__webglFramebuffer=[];for(let c=0;c<6;c++)if(R.mipmaps&&R.mipmaps.length>0){T.__webglFramebuffer[c]=[];for(let o=0;o<R.mipmaps.length;o++)T.__webglFramebuffer[c][o]=J.createFramebuffer()}else T.__webglFramebuffer[c]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){T.__webglFramebuffer=[];for(let c=0;c<R.mipmaps.length;c++)T.__webglFramebuffer[c]=J.createFramebuffer()}else T.__webglFramebuffer=J.createFramebuffer();if(H0)for(let c=0,o=t.length;c<o;c++){let E0=Z.get(t[c]);if(E0.__webglTexture===void 0)E0.__webglTexture=J.createTexture(),X.memory.textures++}if(z.samples>0&&j(z)===!1){T.__webglMultisampledFramebuffer=J.createFramebuffer(),T.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let c=0;c<t.length;c++){let o=t[c];T.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,T.__webglColorRenderbuffer[c]);let E0=W.convert(o.format,o.colorSpace),C0=W.convert(o.type),q0=E(o.internalFormat,E0,C0,o.normalized,o.colorSpace,z.isXRRenderTarget===!0),$0=DJ(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,$0,q0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,T.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)T.__webglDepthRenderbuffer=J.createRenderbuffer(),m0(T.__webglDepthRenderbuffer,z,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Z0){$.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture),a(J.TEXTURE_CUBE_MAP,R);for(let c=0;c<6;c++)if(R.mipmaps&&R.mipmaps.length>0)for(let o=0;o<R.mipmaps.length;o++)x0(T.__webglFramebuffer[c][o],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,o);else x0(T.__webglFramebuffer[c],z,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(O(R))w(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(H0){for(let c=0,o=t.length;c<o;c++){let E0=t[c],C0=Z.get(E0),q0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)q0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(q0,C0.__webglTexture),a(q0,E0),x0(T.__webglFramebuffer,z,E0,J.COLOR_ATTACHMENT0+c,q0,0),O(E0))w(q0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)c=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,g.__webglTexture),a(c,R),R.mipmaps&&R.mipmaps.length>0)for(let o=0;o<R.mipmaps.length;o++)x0(T.__webglFramebuffer[o],z,R,J.COLOR_ATTACHMENT0,c,o);else x0(T.__webglFramebuffer,z,R,J.COLOR_ATTACHMENT0,c,0);if(O(R))w(c);$.unbindTexture()}if(z.depthBuffer)n0(z)}function hJ(z){let R=z.textures;for(let T=0,g=R.length;T<g;T++){let t=R[T];if(O(t)){let Z0=P(z),H0=Z.get(t).__webglTexture;$.bindTexture(Z0,H0),w(Z0),$.unbindTexture()}}}let t0=[],MJ=[];function FJ(z){if(z.samples>0){if(j(z)===!1){let{textures:R,width:T,height:g}=z,t=J.COLOR_BUFFER_BIT,Z0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=Z.get(z),c=R.length>1;if(c)for(let E0=0;E0<R.length;E0++)$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,H0.__webglMultisampledFramebuffer);let o=z.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer);for(let E0=0;E0<R.length;E0++){if(z.resolveDepthBuffer){if(z.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[E0]);let C0=Z.get(R[E0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,C0,0)}if(J.blitFramebuffer(0,0,T,g,0,0,T,g,t,J.NEAREST),U===!0){if(t0.length=0,MJ.length=0,t0.push(J.COLOR_ATTACHMENT0+E0),z.depthBuffer&&z.resolveDepthBuffer===!1)t0.push(Z0),MJ.push(Z0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,MJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,t0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let E0=0;E0<R.length;E0++){$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[E0]);let C0=Z.get(R[E0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+E0,J.TEXTURE_2D,C0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&U){let R=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function DJ(z){return Math.min(K.maxSamples,z.samples)}function j(z){let R=Z.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function gJ(z){let R=X.render.frame;if(N.get(z)!==R)N.set(z,R),z.update()}function e0(z,R){let{colorSpace:T,format:g,type:t}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return R;if(T!==X$&&T!==G8)if(s0.getTransfer(T)===YJ){if(g!==R9||t!==H9)f0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else j0("WebGLTextures: Unsupported texture color space:",T);return R}function ZJ(z){if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement)H.width=z.naturalWidth||z.width,H.height=z.naturalHeight||z.height;else if(typeof VideoFrame<"u"&&z instanceof VideoFrame)H.width=z.displayWidth,H.height=z.displayHeight;else H.width=z.width,H.height=z.height;return H}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=p,this.setTextureUnits=u,this.setTexture2D=J0,this.setTexture2DArray=Q0,this.setTexture3D=G0,this.setTextureCube=A0,this.rebindTextures=g0,this.setupRenderTarget=VJ,this.updateRenderTargetMipmap=hJ,this.updateMultisampleRenderTarget=FJ,this.setupDepthRenderbuffer=n0,this.setupFrameBufferTexture=x0,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function b5(J,Q){function $(Z,K=G8){let W,X=s0.getTransfer(K);if(Z===H9)return J.UNSIGNED_BYTE;if(Z===IQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===AQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===UK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===HK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===XK)return J.BYTE;if(Z===YK)return J.SHORT;if(Z===V7)return J.UNSIGNED_SHORT;if(Z===BQ)return J.INT;if(Z===o9)return J.UNSIGNED_INT;if(Z===T9)return J.FLOAT;if(Z===S9)return J.HALF_FLOAT;if(Z===qK)return J.ALPHA;if(Z===NK)return J.RGB;if(Z===R9)return J.RGBA;if(Z===H8)return J.DEPTH_COMPONENT;if(Z===q8)return J.DEPTH_STENCIL;if(Z===GK)return J.RED;if(Z===CQ)return J.RED_INTEGER;if(Z===N8)return J.RG;if(Z===PQ)return J.RG_INTEGER;if(Z===_Q)return J.RGBA_INTEGER;if(Z===G6||Z===F6||Z===O6||Z===E6)if(X===YJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===G6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===F6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===O6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===E6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===G6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===F6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===O6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===E6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===wQ||Z===TQ||Z===SQ||Z===jQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===wQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===TQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===SQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===jQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===fQ||Z===vQ||Z===yQ||Z===bQ||Z===hQ||Z===D6||Z===xQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===fQ||Z===vQ)return X===YJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===yQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===bQ)return W.COMPRESSED_R11_EAC;if(Z===hQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===D6)return W.COMPRESSED_RG11_EAC;if(Z===xQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===gQ||Z===pQ||Z===mQ||Z===lQ||Z===dQ||Z===uQ||Z===cQ||Z===nQ||Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===rQ||Z===tQ)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===gQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===pQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===mQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===lQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===dQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===uQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===cQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===nQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===sQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===iQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===oQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===aQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===rQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===tQ)return X===YJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===eQ||Z===J$||Z===Q$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===eQ)return X===YJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===J$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===Q$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===$$||Z===Z$||Z===R6||Z===K$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===$$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===Z$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===R6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===K$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===a8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var h5=`
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

}`;class HW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new C6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new eJ({vertexShader:h5,fragmentShader:x5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new S0(new dJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qW extends j9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,U=null,H=null,N=null,F=null,q=null,D=null,V=typeof XRWebGLBinding<"u",B=new HW,G={},O=Q.getContextAttributes(),w=null,P=null,E=[],A=[],I=new u0,_=null,k=new vJ;k.viewport=new GJ;let M=new vJ;M.viewport=new GJ;let d=[k,M],C=new S$,l=null,r=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let U0=E[a];if(U0===void 0)U0=new I7,E[a]=U0;return U0.getTargetRaySpace()},this.getControllerGrip=function(a){let U0=E[a];if(U0===void 0)U0=new I7,E[a]=U0;return U0.getGripSpace()},this.getHand=function(a){let U0=E[a];if(U0===void 0)U0=new I7,E[a]=U0;return U0.getHandSpace()};function p(a){let U0=A.indexOf(a.inputSource);if(U0===-1)return;let L0=E[U0];if(L0!==void 0)L0.update(a.inputSource,a.frame,U||W),L0.dispatchEvent({type:a.type,data:a.inputSource})}function u(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",i);for(let a=0;a<E.length;a++){let U0=A[a];if(U0===null)continue;A[a]=null,E[a].disconnect(U0)}l=null,r=null,B.reset();for(let a in G)delete G[a];J.setRenderTarget(w),q=null,F=null,N=null,Z=null,P=null,o0.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(I.width,I.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(K=a,$.isPresenting===!0)f0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if(X=a,$.isPresenting===!0)f0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(a){U=a},this.getBaseLayer=function(){return F!==null?F:q},this.getBinding=function(){if(N===null&&V)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return D},this.getSession=function(){return Z},this.setSession=async function(a){if(Z=a,Z!==null){if(w=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",i),O.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(I),!(V&&("createProjectionLayer"in XRWebGLBinding.prototype))){let L0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:K};q=new XRWebGLLayer(Z,Q,L0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),P=new tJ(q.framebufferWidth,q.framebufferHeight,{format:R9,type:H9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let L0=null,V0=null,T0=null;if(O.depth)T0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,L0=O.stencil?q8:H8,V0=O.stencil?a8:o9;let d0={colorFormat:Q.RGBA8,depthFormat:T0,scaleFactor:K};N=this.getBinding(),F=N.createProjectionLayer(d0),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),P=new tJ(F.textureWidth,F.textureHeight,{format:R9,type:H9,depthTexture:new r9(F.textureWidth,F.textureHeight,V0,void 0,void 0,void 0,void 0,void 0,void 0,L0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(Y),U=null,W=await Z.requestReferenceSpace(X),o0.setContext(Z),o0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function i(a){for(let U0=0;U0<a.removed.length;U0++){let L0=a.removed[U0],V0=A.indexOf(L0);if(V0>=0)A[V0]=null,E[V0].disconnect(L0)}for(let U0=0;U0<a.added.length;U0++){let L0=a.added[U0],V0=A.indexOf(L0);if(V0===-1){for(let d0=0;d0<E.length;d0++)if(d0>=A.length){A.push(L0),V0=d0;break}else if(A[d0]===null){A[d0]=L0,V0=d0;break}if(V0===-1)break}let T0=E[V0];if(T0)T0.connect(L0)}}let x=new y,J0=new y;function Q0(a,U0,L0){x.setFromMatrixPosition(U0.matrixWorld),J0.setFromMatrixPosition(L0.matrixWorld);let V0=x.distanceTo(J0),T0=U0.projectionMatrix.elements,d0=L0.projectionMatrix.elements,x0=T0[14]/(T0[10]-1),m0=T0[14]/(T0[10]+1),JJ=(T0[9]+1)/T0[5],n0=(T0[9]-1)/T0[5],g0=(T0[8]-1)/T0[0],VJ=(d0[8]+1)/d0[0],hJ=x0*g0,t0=x0*VJ,MJ=V0/(-g0+VJ),FJ=MJ*-g0;if(U0.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.translateX(FJ),a.translateZ(MJ),a.matrixWorld.compose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),T0[10]===-1)a.projectionMatrix.copy(U0.projectionMatrix),a.projectionMatrixInverse.copy(U0.projectionMatrixInverse);else{let DJ=x0+MJ,j=m0+MJ,gJ=hJ-FJ,e0=t0+(V0-FJ),ZJ=JJ*m0/j*DJ,z=n0*m0/j*DJ;a.projectionMatrix.makePerspective(gJ,e0,ZJ,z,DJ,j),a.projectionMatrixInverse.copy(a.projectionMatrix).invert()}}function G0(a,U0){if(U0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(U0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(Z===null)return;let{near:U0,far:L0}=a;if(B.texture!==null){if(B.depthNear>0)U0=B.depthNear;if(B.depthFar>0)L0=B.depthFar}if(C.near=M.near=k.near=U0,C.far=M.far=k.far=L0,l!==C.near||r!==C.far)Z.updateRenderState({depthNear:C.near,depthFar:C.far}),l=C.near,r=C.far;C.layers.mask=a.layers.mask|6,k.layers.mask=C.layers.mask&-5,M.layers.mask=C.layers.mask&-3;let V0=a.parent,T0=C.cameras;G0(C,V0);for(let d0=0;d0<T0.length;d0++)G0(T0[d0],V0);if(T0.length===2)Q0(C,k,M);else C.projectionMatrix.copy(k.projectionMatrix);A0(a,C,V0)};function A0(a,U0,L0){if(L0===null)a.matrix.copy(U0.matrixWorld);else a.matrix.copy(L0.matrixWorld),a.matrix.invert(),a.matrix.multiply(U0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(U0.projectionMatrix),a.projectionMatrixInverse.copy(U0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=X6*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(F===null&&q===null)return;return Y},this.setFoveation=function(a){if(Y=a,F!==null)F.fixedFoveation=a;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=a},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(C)},this.getCameraTexture=function(a){return G[a]};let z0=null;function HJ(a,U0){if(H=U0.getViewerPose(U||W),D=U0,H!==null){let L0=H.views;if(q!==null)J.setRenderTargetFramebuffer(P,q.framebuffer),J.setRenderTarget(P);let V0=!1;if(L0.length!==C.cameras.length)C.cameras.length=0,V0=!0;for(let m0=0;m0<L0.length;m0++){let JJ=L0[m0],n0=null;if(q!==null)n0=q.getViewport(JJ);else{let VJ=N.getViewSubImage(F,JJ);if(n0=VJ.viewport,m0===0)J.setRenderTargetTextures(P,VJ.colorTexture,VJ.depthStencilTexture),J.setRenderTarget(P)}let g0=d[m0];if(g0===void 0)g0=new vJ,g0.layers.enable(m0),g0.viewport=new GJ,d[m0]=g0;if(g0.matrix.fromArray(JJ.transform.matrix),g0.matrix.decompose(g0.position,g0.quaternion,g0.scale),g0.projectionMatrix.fromArray(JJ.projectionMatrix),g0.projectionMatrixInverse.copy(g0.projectionMatrix).invert(),g0.viewport.set(n0.x,n0.y,n0.width,n0.height),m0===0)C.matrix.copy(g0.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(V0===!0)C.cameras.push(g0)}let T0=Z.enabledFeatures;if(T0&&T0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&V){N=$.getBinding();let m0=N.getDepthInformation(L0[0]);if(m0&&m0.isValid&&m0.texture)B.init(m0,Z.renderState)}if(T0&&T0.includes("camera-access")&&V){J.state.unbindTexture(),N=$.getBinding();for(let m0=0;m0<L0.length;m0++){let JJ=L0[m0].camera;if(JJ){let n0=G[JJ];if(!n0)n0=new C6,G[JJ]=n0;let g0=N.getCameraImage(JJ);n0.sourceTexture=g0}}}}for(let L0=0;L0<E.length;L0++){let V0=A[L0],T0=E[L0];if(V0!==null&&T0!==void 0)T0.update(V0,U0,U||W)}if(z0)z0(a,U0);if(U0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:U0});D=null}let o0=new tK;o0.setAnimationLoop(HJ),this.setAnimationLoop=function(a){z0=a},this.dispose=function(){}}}var g5=new WJ,NW=new y0;NW.set(-1,0,0,0,1,0,0,0,1);function p5(J,Q){function $(G,O){if(G.matrixAutoUpdate===!0)G.updateMatrix();O.value.copy(G.matrix)}function Z(G,O){if(O.color.getRGB(G.fogColor.value,E$(J)),O.isFog)G.fogNear.value=O.near,G.fogFar.value=O.far;else if(O.isFogExp2)G.fogDensity.value=O.density}function K(G,O,w,P,E){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)W(G,O);else if(O.isMeshLambertMaterial){if(W(G,O),O.envMap)G.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)W(G,O),F(G,O);else if(O.isMeshPhongMaterial){if(W(G,O),N(G,O),O.envMap)G.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(W(G,O),q(G,O),O.isMeshPhysicalMaterial)D(G,O,E)}else if(O.isMeshMatcapMaterial)W(G,O),V(G,O);else if(O.isMeshDepthMaterial)W(G,O);else if(O.isMeshDistanceMaterial)W(G,O),B(G,O);else if(O.isMeshNormalMaterial)W(G,O);else if(O.isLineBasicMaterial){if(X(G,O),O.isLineDashedMaterial)Y(G,O)}else if(O.isPointsMaterial)U(G,O,w,P);else if(O.isSpriteMaterial)H(G,O);else if(O.isShadowMaterial)G.color.value.copy(O.color),G.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function W(G,O){if(G.opacity.value=O.opacity,O.color)G.diffuse.value.copy(O.color);if(O.emissive)G.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)G.map.value=O.map,$(O.map,G.mapTransform);if(O.alphaMap)G.alphaMap.value=O.alphaMap,$(O.alphaMap,G.alphaMapTransform);if(O.bumpMap){if(G.bumpMap.value=O.bumpMap,$(O.bumpMap,G.bumpMapTransform),G.bumpScale.value=O.bumpScale,O.side===yJ)G.bumpScale.value*=-1}if(O.normalMap){if(G.normalMap.value=O.normalMap,$(O.normalMap,G.normalMapTransform),G.normalScale.value.copy(O.normalScale),O.side===yJ)G.normalScale.value.negate()}if(O.displacementMap)G.displacementMap.value=O.displacementMap,$(O.displacementMap,G.displacementMapTransform),G.displacementScale.value=O.displacementScale,G.displacementBias.value=O.displacementBias;if(O.emissiveMap)G.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,G.emissiveMapTransform);if(O.specularMap)G.specularMap.value=O.specularMap,$(O.specularMap,G.specularMapTransform);if(O.alphaTest>0)G.alphaTest.value=O.alphaTest;let w=Q.get(O),P=w.envMap,E=w.envMapRotation;if(P){if(G.envMap.value=P,G.envMapRotation.value.setFromMatrix4(g5.makeRotationFromEuler(E)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)G.envMapRotation.value.premultiply(NW);G.reflectivity.value=O.reflectivity,G.ior.value=O.ior,G.refractionRatio.value=O.refractionRatio}if(O.lightMap)G.lightMap.value=O.lightMap,G.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,G.lightMapTransform);if(O.aoMap)G.aoMap.value=O.aoMap,G.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,G.aoMapTransform)}function X(G,O){if(G.diffuse.value.copy(O.color),G.opacity.value=O.opacity,O.map)G.map.value=O.map,$(O.map,G.mapTransform)}function Y(G,O){G.dashSize.value=O.dashSize,G.totalSize.value=O.dashSize+O.gapSize,G.scale.value=O.scale}function U(G,O,w,P){if(G.diffuse.value.copy(O.color),G.opacity.value=O.opacity,G.size.value=O.size*w,G.scale.value=P*0.5,O.map)G.map.value=O.map,$(O.map,G.uvTransform);if(O.alphaMap)G.alphaMap.value=O.alphaMap,$(O.alphaMap,G.alphaMapTransform);if(O.alphaTest>0)G.alphaTest.value=O.alphaTest}function H(G,O){if(G.diffuse.value.copy(O.color),G.opacity.value=O.opacity,G.rotation.value=O.rotation,O.map)G.map.value=O.map,$(O.map,G.mapTransform);if(O.alphaMap)G.alphaMap.value=O.alphaMap,$(O.alphaMap,G.alphaMapTransform);if(O.alphaTest>0)G.alphaTest.value=O.alphaTest}function N(G,O){G.specular.value.copy(O.specular),G.shininess.value=Math.max(O.shininess,0.0001)}function F(G,O){if(O.gradientMap)G.gradientMap.value=O.gradientMap}function q(G,O){if(G.metalness.value=O.metalness,O.metalnessMap)G.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,G.metalnessMapTransform);if(G.roughness.value=O.roughness,O.roughnessMap)G.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,G.roughnessMapTransform);if(O.envMap)G.envMapIntensity.value=O.envMapIntensity}function D(G,O,w){if(G.ior.value=O.ior,O.sheen>0){if(G.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),G.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)G.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,G.sheenColorMapTransform);if(O.sheenRoughnessMap)G.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,G.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(G.clearcoat.value=O.clearcoat,G.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)G.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,G.clearcoatMapTransform);if(O.clearcoatRoughnessMap)G.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,G.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(G.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,G.clearcoatNormalMapTransform),G.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===yJ)G.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)G.dispersion.value=O.dispersion;if(O.iridescence>0){if(G.iridescence.value=O.iridescence,G.iridescenceIOR.value=O.iridescenceIOR,G.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],G.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)G.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,G.iridescenceMapTransform);if(O.iridescenceThicknessMap)G.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,G.iridescenceThicknessMapTransform)}if(O.transmission>0){if(G.transmission.value=O.transmission,G.transmissionSamplerMap.value=w.texture,G.transmissionSamplerSize.value.set(w.width,w.height),O.transmissionMap)G.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,G.transmissionMapTransform);if(G.thickness.value=O.thickness,O.thicknessMap)G.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,G.thicknessMapTransform);G.attenuationDistance.value=O.attenuationDistance,G.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(G.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)G.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,G.anisotropyMapTransform)}if(G.specularIntensity.value=O.specularIntensity,G.specularColor.value.copy(O.specularColor),O.specularColorMap)G.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,G.specularColorMapTransform);if(O.specularIntensityMap)G.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,G.specularIntensityMapTransform)}function V(G,O){if(O.matcap)G.matcap.value=O.matcap}function B(G,O){let w=Q.get(O).light;G.referencePosition.value.setFromMatrixPosition(w.matrixWorld),G.nearDistance.value=w.shadow.camera.near,G.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function m5(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(E,A){let I=A.program;Z.uniformBlockBinding(E,I)}function H(E,A){let I=K[E.id];if(I===void 0)G(E),I=N(E),K[E.id]=I,E.addEventListener("dispose",w);let _=A.program;Z.updateUBOMapping(E,_);let k=Q.render.frame;if(W[E.id]!==k)q(E),W[E.id]=k}function N(E){let A=F();E.__bindingPointIndex=A;let I=J.createBuffer(),_=E.__size,k=E.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,_,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,A,I),I}function F(){for(let E=0;E<Y;E++)if(X.indexOf(E)===-1)return X.push(E),E;return j0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(E){let A=K[E.id],I=E.uniforms,_=E.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let k=0,M=I.length;k<M;k++){let d=I[k];if(Array.isArray(d))for(let C=0,l=d.length;C<l;C++)D(d[C],k,C,_);else D(d,k,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(E,A,I,_){if(B(E,A,I,_)===!0){let{__offset:k,value:M}=E;if(Array.isArray(M)){let d=0;for(let C=0;C<M.length;C++){let l=M[C],r=O(l);if(V(l,E.__data,d),typeof l!=="number"&&typeof l!=="boolean"&&!l.isMatrix3&&!ArrayBuffer.isView(l))d+=r.storage/Float32Array.BYTES_PER_ELEMENT}}else V(M,E.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,E.__data)}}function V(E,A,I){if(typeof E==="number"||typeof E==="boolean")A[0]=E;else if(E.isMatrix3)A[0]=E.elements[0],A[1]=E.elements[1],A[2]=E.elements[2],A[3]=0,A[4]=E.elements[3],A[5]=E.elements[4],A[6]=E.elements[5],A[7]=0,A[8]=E.elements[6],A[9]=E.elements[7],A[10]=E.elements[8],A[11]=0;else if(ArrayBuffer.isView(E))A.set(new E.constructor(E.buffer,E.byteOffset,A.length));else E.toArray(A,I)}function B(E,A,I,_){let k=E.value,M=A+"_"+I;if(_[M]===void 0){if(typeof k==="number"||typeof k==="boolean")_[M]=k;else if(ArrayBuffer.isView(k))_[M]=k.slice();else _[M]=k.clone();return!0}else{let d=_[M];if(typeof k==="number"||typeof k==="boolean"){if(d!==k)return _[M]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(d.equals(k)===!1)return d.copy(k),!0}return!1}function G(E){let A=E.uniforms,I=0,_=16;for(let M=0,d=A.length;M<d;M++){let C=Array.isArray(A[M])?A[M]:[A[M]];for(let l=0,r=C.length;l<r;l++){let p=C[l],u=Array.isArray(p.value)?p.value:[p.value];for(let i=0,x=u.length;i<x;i++){let J0=u[i],Q0=O(J0),G0=I%_,A0=G0%Q0.boundary,z0=G0+A0;if(I+=A0,z0!==0&&_-z0<Q0.storage)I+=_-z0;p.__data=new Float32Array(Q0.storage/Float32Array.BYTES_PER_ELEMENT),p.__offset=I,I+=Q0.storage}}}let k=I%_;if(k>0)I+=_-k;return E.__size=I,E.__cache={},this}function O(E){let A={boundary:0,storage:0};if(typeof E==="number"||typeof E==="boolean")A.boundary=4,A.storage=4;else if(E.isVector2)A.boundary=8,A.storage=8;else if(E.isVector3||E.isColor)A.boundary=16,A.storage=12;else if(E.isVector4)A.boundary=16,A.storage=16;else if(E.isMatrix3)A.boundary=48,A.storage=48;else if(E.isMatrix4)A.boundary=64,A.storage=64;else if(E.isTexture)f0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(E))A.boundary=16,A.storage=E.byteLength;else f0("WebGLRenderer: Unsupported uniform value type.",E);return A}function w(E){let A=E.target;A.removeEventListener("dispose",w);let I=X.indexOf(A.__bindingPointIndex);X.splice(I,1),J.deleteBuffer(K[A.id]),delete K[A.id],delete W[A.id]}function P(){for(let E in K)J.deleteBuffer(K[E]);X=[],K={},W={}}return{bind:U,update:H,dispose:P}}var l5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),L9=null;function d5(){if(L9===null)L9=new I6(l5,16,16,N8,S9),L9.name="DFG_LUT",L9.minFilter=LJ,L9.magFilter=LJ,L9.wrapS=q6,L9.wrapT=q6,L9.generateMipmaps=!1,L9.needsUpdate=!0;return L9}class c${constructor(J={}){let{canvas:Q=VK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:q=H9}=J;this.isWebGLRenderer=!0;let D;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=$.getContextAttributes().alpha}else D=W;let V=q,B=new Set([_Q,PQ,CQ]),G=new Set([H9,o9,V7,a8,IQ,AQ]),O=new Uint32Array(4),w=new Int32Array(4),P=new y,E=null,A=null,I=[],_=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=U9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,d=!1,C=null,l=null,r=null,p=null;this._outputColorSpace=q9;let u=0,i=0,x=null,J0=-1,Q0=null,G0=new GJ,A0=new GJ,z0=null,HJ=new c0(0),o0=0,a=Q.width,U0=Q.height,L0=1,V0=null,T0=null,d0=new GJ(0,0,a,U0),x0=new GJ(0,0,a,U0),m0=!1,JJ=new A7,n0=!1,g0=!1,VJ=new WJ,hJ=new y,t0=new GJ,MJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},FJ=!1;function DJ(){return x===null?L0:1}let j=$;function gJ(L,v){return Q.getContext(L,v)}try{let L={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BZ}`);if(Q.addEventListener("webglcontextlost",v0,!1),Q.addEventListener("webglcontextrestored",qJ,!1),Q.addEventListener("webglcontextcreationerror",KJ,!1),j===null){if(j=gJ("webgl2",L),j===null)if(gJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw j0("WebGLRenderer: "+L.message),L}let e0,ZJ,z,R,T,g,t,Z0,H0,c,o,E0,C0,q0,$0,P0,w0,a0,S,Y0,n,N0,R0;function e(){if(e0=new aU(j),e0.init(),n=new b5(j,e0),ZJ=new lU(j,e0,J,n),z=new v5(j,e0),ZJ.reversedDepthBuffer&&F)z.buffers.depth.setReversed(!0);l=j.createFramebuffer(),r=j.createFramebuffer(),p=j.createFramebuffer(),R=new eU(j),T=new V5,g=new y5(j,e0,z,T,ZJ,n,R),t=new oU(M),Z0=new ZX(j),N0=new pU(j,Z0),H0=new rU(j,Z0,R,N0),c=new QH(j,H0,Z0,N0,R),a0=new JH(j,ZJ,g),$0=new dU(T),o=new L5(M,t,e0,ZJ,N0,$0),E0=new p5(M,T),C0=new M5,q0=new _5(e0),w0=new gU(M,t,z,c,D,Y),P0=new f5(M,c,ZJ),R0=new m5(j,R,ZJ,z),S=new mU(j,e0,R),Y0=new tU(j,e0,R),R.programs=o.programs,M.capabilities=ZJ,M.extensions=e0,M.properties=T,M.renderLists=C0,M.shadowMap=P0,M.state=z,M.info=R}if(e(),V!==H9)k=new ZH(V,Q.width,Q.height,X,Z,K);let X0=new qW(M,j);this.xr=X0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let L=e0.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=e0.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return L0},this.setPixelRatio=function(L){if(L===void 0)return;L0=L,this.setSize(a,U0,!1)},this.getSize=function(L){return L.set(a,U0)},this.setSize=function(L,v,m=!0){if(X0.isPresenting){f0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(a=L,U0=v,Q.width=Math.floor(L*L0),Q.height=Math.floor(v*L0),m===!0)Q.style.width=L+"px",Q.style.height=v+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,L,v)},this.getDrawingBufferSize=function(L){return L.set(a*L0,U0*L0).floor()},this.setDrawingBufferSize=function(L,v,m){a=L,U0=v,L0=m,Q.width=Math.floor(L*m),Q.height=Math.floor(v*m),this.setViewport(0,0,L,v)},this.setEffects=function(L){if(V===H9){j0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let v=0;v<L.length;v++)if(L[v].isOutputPass===!0){f0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(G0)},this.getViewport=function(L){return L.copy(d0)},this.setViewport=function(L,v,m,b){if(L.isVector4)d0.set(L.x,L.y,L.z,L.w);else d0.set(L,v,m,b);z.viewport(G0.copy(d0).multiplyScalar(L0).round())},this.getScissor=function(L){return L.copy(x0)},this.setScissor=function(L,v,m,b){if(L.isVector4)x0.set(L.x,L.y,L.z,L.w);else x0.set(L,v,m,b);z.scissor(A0.copy(x0).multiplyScalar(L0).round())},this.getScissorTest=function(){return m0},this.setScissorTest=function(L){z.setScissorTest(m0=L)},this.setOpaqueSort=function(L){V0=L},this.setTransparentSort=function(L){T0=L},this.getClearColor=function(L){return L.copy(w0.getClearColor())},this.setClearColor=function(){w0.setClearColor(...arguments)},this.getClearAlpha=function(){return w0.getClearAlpha()},this.setClearAlpha=function(){w0.setClearAlpha(...arguments)},this.clear=function(L=!0,v=!0,m=!0){let b=0;if(L){let h=!1;if(x!==null){let F0=x.texture.format;h=B.has(F0)}if(h){let F0=x.texture.type,M0=G.has(F0),O0=w0.getClearColor(),I0=w0.getClearAlpha(),_0=O0.r,b0=O0.g,p0=O0.b;if(M0)O[0]=_0,O[1]=b0,O[2]=p0,O[3]=I0,j.clearBufferuiv(j.COLOR,0,O);else w[0]=_0,w[1]=b0,w[2]=p0,w[3]=I0,j.clearBufferiv(j.COLOR,0,w)}else b|=j.COLOR_BUFFER_BIT}if(v)b|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)b|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)j.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),C=L},this.dispose=function(){Q.removeEventListener("webglcontextlost",v0,!1),Q.removeEventListener("webglcontextrestored",qJ,!1),Q.removeEventListener("webglcontextcreationerror",KJ,!1),w0.dispose(),C0.dispose(),q0.dispose(),T.dispose(),t.dispose(),c.dispose(),N0.dispose(),R0.dispose(),o.dispose(),X0.dispose(),X0.removeEventListener("sessionstart",W7),X0.removeEventListener("sessionend",A8),K9.stop()};function v0(L){L.preventDefault(),q$("WebGLRenderer: Context Lost."),d=!0}function qJ(){q$("WebGLRenderer: Context Restored."),d=!1;let L=R.autoReset,v=P0.enabled,m=P0.autoUpdate,b=P0.needsUpdate,h=P0.type;e(),R.autoReset=L,P0.enabled=v,P0.autoUpdate=m,P0.needsUpdate=b,P0.type=h}function KJ(L){j0("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function pJ(L){let v=L.target;v.removeEventListener("dispose",pJ),oJ(v)}function oJ(L){$7(L),T.remove(L)}function $7(L){let v=T.get(L).programs;if(v!==void 0){if(v.forEach(function(m){o.releaseProgram(m)}),L.isShaderMaterial)o.releaseShaderCache(L)}}this.renderBufferDirect=function(L,v,m,b,h,F0){if(v===null)v=MJ;let M0=h.isMesh&&h.matrixWorld.determinantAffine()<0,O0=y7(L,v,m,b,h);z.setMaterial(b,M0);let I0=m.index,_0=1;if(b.wireframe===!0){if(I0=H0.getWireframeAttribute(m),I0===void 0)return;_0=2}let b0=m.drawRange,p0=m.attributes.position,f=b0.start*_0,s=(b0.start+b0.count)*_0;if(F0!==null)f=Math.max(f,F0.start*_0),s=Math.min(s,(F0.start+F0.count)*_0);if(I0!==null)f=Math.max(f,0),s=Math.min(s,I0.count);else if(p0!==void 0&&p0!==null)f=Math.max(f,0),s=Math.min(s,p0.count);let K0=s-f;if(K0<0||K0===1/0)return;N0.setup(h,b,O0,m,I0);let B0,k0=S;if(I0!==null)B0=Z0.get(I0),k0=Y0,k0.setIndex(B0);if(h.isMesh)if(b.wireframe===!0)z.setLineWidth(b.wireframeLinewidth*DJ()),k0.setMode(j.LINES);else k0.setMode(j.TRIANGLES);else if(h.isLine){let r0=b.linewidth;if(r0===void 0)r0=1;if(z.setLineWidth(r0*DJ()),h.isLineSegments)k0.setMode(j.LINES);else if(h.isLineLoop)k0.setMode(j.LINE_LOOP);else k0.setMode(j.LINE_STRIP)}else if(h.isPoints)k0.setMode(j.POINTS);else if(h.isSprite)k0.setMode(j.TRIANGLES);if(h.isBatchedMesh)if(!e0.get("WEBGL_multi_draw")){let{_multiDrawStarts:r0,_multiDrawCounts:W0,_multiDrawCount:NJ}=h,h0=I0?Z0.get(I0).bytesPerElement:1,_J=T.get(b).currentProgram.getUniforms();for(let cJ=0;cJ<NJ;cJ++)_J.setValue(j,"_gl_DrawID",cJ),k0.render(r0[cJ]/h0,W0[cJ])}else k0.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)k0.renderInstances(f,K0,h.count);else if(m.isInstancedBufferGeometry){let r0=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,W0=Math.min(m.instanceCount,r0);k0.renderInstances(f,K0,W0)}else k0.render(f,K0)};function Z7(L,v,m){if(L.transparent===!0&&L.side===E9&&L.forceSinglePass===!1)L.side=yJ,L.needsUpdate=!0,P8(L,v,m),L.side=s8,L.needsUpdate=!0,P8(L,v,m),L.side=E9;else P8(L,v,m)}this.compile=function(L,v,m=null){if(m===null)m=L;if(A=q0.get(m),A.init(v),_.push(A),m.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(A.pushLight(h),h.castShadow)A.pushShadow(h)}}),L!==m)L.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(A.pushLight(h),h.castShadow)A.pushShadow(h)}});A.setupLights();let b=new Set;return L.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let F0=h.material;if(F0)if(Array.isArray(F0))for(let M0=0;M0<F0.length;M0++){let O0=F0[M0];Z7(O0,m,h),b.add(O0)}else Z7(F0,m,h),b.add(F0)}),A=_.pop(),b},this.compileAsync=function(L,v,m=null){let b=this.compile(L,v,m);return new Promise((h)=>{function F0(){if(b.forEach(function(M0){if(T.get(M0).currentProgram.isReady())b.delete(M0)}),b.size===0){h(L);return}setTimeout(F0,10)}if(e0.get("KHR_parallel_shader_compile")!==null)F0();else setTimeout(F0,10)})};let I8=null;function K7(L){if(I8)I8(L)}function W7(){K9.stop()}function A8(){K9.start()}let K9=new tK;if(K9.setAnimationLoop(K7),typeof self<"u")K9.setContext(self);this.setAnimationLoop=function(L){I8=L,X0.setAnimationLoop(L),L===null?K9.stop():K9.start()},X0.addEventListener("sessionstart",W7),X0.addEventListener("sessionend",A8),this.render=function(L,v){if(v!==void 0&&v.isCamera!==!0){j0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(C!==null)C.renderStart(L,v);let m=X0.enabled===!0&&X0.isPresenting===!0,b=k!==null&&(x===null||m)&&k.begin(M,x);if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(X0.enabled===!0&&X0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(X0.cameraAutoUpdate===!0)X0.updateCamera(v);v=X0.getCamera()}if(L.isScene===!0)L.onBeforeRender(M,L,v,x);if(A=q0.get(L,_.length),A.init(v),A.state.textureUnits=g.getTextureUnits(),_.push(A),VJ.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),JJ.setFromProjectionMatrix(VJ,H$,v.reversedDepth),g0=this.localClippingEnabled,n0=$0.init(this.clippingPlanes,g0),E=C0.get(L,I.length),E.init(),I.push(E),X0.enabled===!0&&X0.isPresenting===!0){let M0=M.xr.getDepthSensingMesh();if(M0!==null)h9(M0,v,-1/0,M.sortObjects)}if(h9(L,v,0,M.sortObjects),E.finish(),M.sortObjects===!0)E.sort(V0,T0,v.reversedDepth);if(FJ=X0.enabled===!1||X0.isPresenting===!1||X0.hasDepthSensing()===!1,FJ)w0.addToRenderList(E,L);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(n0===!0)$0.beginShadows();let h=A.state.shadowsArray;if(P0.render(h,L,v),n0===!0)$0.endShadows();if((b&&k.hasRenderPass())===!1){let{opaque:M0,transmissive:O0}=E;if(A.setupLights(),v.isArrayCamera){let I0=v.cameras;if(O0.length>0)for(let _0=0,b0=I0.length;_0<b0;_0++){let p0=I0[_0];uJ(M0,O0,L,p0)}if(FJ)w0.render(L);for(let _0=0,b0=I0.length;_0<b0;_0++){let p0=I0[_0];M9(E,L,p0,p0.viewport)}}else{if(O0.length>0)uJ(M0,O0,L,v);if(FJ)w0.render(L);M9(E,L,v)}}if(x!==null&&i===0)g.updateMultisampleRenderTarget(x),g.updateRenderTargetMipmap(x);if(b)k.end(M);if(L.isScene===!0)L.onAfterRender(M,L,v);if(N0.resetDefaultState(),J0=-1,Q0=null,_.pop(),_.length>0){if(A=_[_.length-1],g.setTextureUnits(A.state.textureUnits),n0===!0)$0.setGlobalState(M.clippingPlanes,A.state.camera)}else A=null;if(I.pop(),I.length>0)E=I[I.length-1];else E=null;if(C!==null)C.renderEnd()};function h9(L,v,m,b){if(L.visible===!1)return;if(L.layers.test(v.layers)){if(L.isGroup)m=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(v)}else if(L.isLightProbeGrid)A.pushLightProbeGrid(L);else if(L.isLight){if(A.pushLight(L),L.castShadow)A.pushShadow(L)}else if(L.isSprite){if(!L.frustumCulled||JJ.intersectsSprite(L)){if(b)t0.setFromMatrixPosition(L.matrixWorld).applyMatrix4(VJ);let M0=c.update(L),O0=L.material;if(O0.visible)E.push(L,M0,O0,m,t0.z,null)}}else if(L.isMesh||L.isLine||L.isPoints){if(!L.frustumCulled||JJ.intersectsObject(L)){let M0=c.update(L),O0=L.material;if(b){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();t0.copy(L.boundingSphere.center)}else{if(M0.boundingSphere===null)M0.computeBoundingSphere();t0.copy(M0.boundingSphere.center)}t0.applyMatrix4(L.matrixWorld).applyMatrix4(VJ)}if(Array.isArray(O0)){let I0=M0.groups;for(let _0=0,b0=I0.length;_0<b0;_0++){let p0=I0[_0],f=O0[p0.materialIndex];if(f&&f.visible)E.push(L,M0,f,m,t0.z,p0)}}else if(O0.visible)E.push(L,M0,O0,m,t0.z,null)}}}let F0=L.children;for(let M0=0,O0=F0.length;M0<O0;M0++)h9(F0[M0],v,m,b)}function M9(L,v,m,b){let{opaque:h,transmissive:F0,transparent:M0}=L;if(A.setupLightsView(m),n0===!0)$0.setGlobalState(M.clippingPlanes,m);if(b)z.viewport(G0.copy(b));if(h.length>0)C8(h,v,m);if(F0.length>0)C8(F0,v,m);if(M0.length>0)C8(M0,v,m);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function uJ(L,v,m,b){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[b.id]===void 0){let f=e0.has("EXT_color_buffer_half_float")||e0.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[b.id]=new tJ(1,1,{generateMipmaps:!0,type:f?S9:H9,minFilter:U8,samples:Math.max(4,ZJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:s0.workingColorSpace})}let F0=A.state.transmissionRenderTarget[b.id],M0=b.viewport||G0;F0.setSize(M0.z*M.transmissionResolutionScale,M0.w*M.transmissionResolutionScale);let O0=M.getRenderTarget(),I0=M.getActiveCubeFace(),_0=M.getActiveMipmapLevel();if(M.setRenderTarget(F0),M.getClearColor(HJ),o0=M.getClearAlpha(),o0<1)M.setClearColor(16777215,0.5);if(M.clear(),FJ)w0.render(m);let b0=M.toneMapping;M.toneMapping=U9;let p0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(A.setupLightsView(b),n0===!0)$0.setGlobalState(M.clippingPlanes,b);if(C8(L,m,b),g.updateMultisampleRenderTarget(F0),g.updateRenderTargetMipmap(F0),e0.has("WEBGL_multisampled_render_to_texture")===!1){let f=!1;for(let s=0,K0=v.length;s<K0;s++){let B0=v[s],{object:k0,geometry:r0,material:W0,group:NJ}=B0;if(W0.side===E9&&k0.layers.test(b.layers)){let h0=W0.side;W0.side=yJ,W0.needsUpdate=!0,x9(k0,m,b,r0,W0,NJ),W0.side=h0,W0.needsUpdate=!0,f=!0}}if(f===!0)g.updateMultisampleRenderTarget(F0),g.updateRenderTargetMipmap(F0)}if(M.setRenderTarget(O0,I0,_0),M.setClearColor(HJ,o0),p0!==void 0)b.viewport=p0;M.toneMapping=b0}function C8(L,v,m){let b=v.isScene===!0?v.overrideMaterial:null;for(let h=0,F0=L.length;h<F0;h++){let M0=L[h],{object:O0,geometry:I0,group:_0}=M0,b0=M0.material;if(b0.allowOverride===!0&&b!==null)b0=b;if(O0.layers.test(m.layers))x9(O0,v,m,I0,b0,_0)}}function x9(L,v,m,b,h,F0){if(L.onBeforeRender(M,v,m,b,h,F0),L.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),h.onBeforeRender(M,v,m,b,L,F0),h.transparent===!0&&h.side===E9&&h.forceSinglePass===!1)h.side=yJ,h.needsUpdate=!0,M.renderBufferDirect(m,v,b,h,L,F0),h.side=s8,h.needsUpdate=!0,M.renderBufferDirect(m,v,b,h,L,F0),h.side=E9;else M.renderBufferDirect(m,v,b,h,L,F0);L.onAfterRender(M,v,m,b,h,F0)}function P8(L,v,m){if(v.isScene!==!0)v=MJ;let b=T.get(L),h=A.state.lights,F0=A.state.shadowsArray,M0=h.state.version,O0=o.getParameters(L,h.state,F0,v,m,A.state.lightProbeGridArray),I0=o.getProgramCacheKey(O0),_0=b.programs;b.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?v.environment:null,b.fog=v.fog;let b0=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;if(b.envMap=t.get(L.envMap||b.environment,b0),b.envMapRotation=b.environment!==null&&L.envMap===null?v.environmentRotation:L.envMapRotation,_0===void 0)L.addEventListener("dispose",pJ),_0=new Map,b.programs=_0;let p0=_0.get(I0);if(p0!==void 0){if(b.currentProgram===p0&&b.lightsStateVersion===M0)return v7(L,O0),p0}else{if(O0.uniforms=o.getUniforms(L),C!==null&&L.isNodeMaterial)C.build(L,m,O0);L.onBeforeCompile(O0,M),p0=o.acquireProgram(O0,I0),_0.set(I0,p0),b.uniforms=O0.uniforms}let f=b.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)f.clippingPlanes=$0.uniform;if(v7(L,O0),b.needsLights=b7(L),b.lightsStateVersion=M0,b.needsLights)f.ambientLightColor.value=h.state.ambient,f.lightProbe.value=h.state.probe,f.directionalLights.value=h.state.directional,f.directionalLightShadows.value=h.state.directionalShadow,f.spotLights.value=h.state.spot,f.spotLightShadows.value=h.state.spotShadow,f.rectAreaLights.value=h.state.rectArea,f.ltc_1.value=h.state.rectAreaLTC1,f.ltc_2.value=h.state.rectAreaLTC2,f.pointLights.value=h.state.point,f.pointLightShadows.value=h.state.pointShadow,f.hemisphereLights.value=h.state.hemi,f.directionalShadowMatrix.value=h.state.directionalShadowMatrix,f.spotLightMatrix.value=h.state.spotLightMatrix,f.spotLightMap.value=h.state.spotLightMap,f.pointShadowMatrix.value=h.state.pointShadowMatrix;return b.lightProbeGrid=A.state.lightProbeGridArray.length>0,b.currentProgram=p0,b.uniformsList=null,p0}function _8(L){if(L.uniformsList===null){let v=L.currentProgram.getUniforms();L.uniformsList=T7.seqWithValue(v.seq,L.uniforms)}return L.uniformsList}function v7(L,v){let m=T.get(L);m.outputColorSpace=v.outputColorSpace,m.batching=v.batching,m.batchingColor=v.batchingColor,m.instancing=v.instancing,m.instancingColor=v.instancingColor,m.instancingMorph=v.instancingMorph,m.skinning=v.skinning,m.morphTargets=v.morphTargets,m.morphNormals=v.morphNormals,m.morphColors=v.morphColors,m.morphTargetsCount=v.morphTargetsCount,m.numClippingPlanes=v.numClippingPlanes,m.numIntersection=v.numClipIntersection,m.vertexAlphas=v.vertexAlphas,m.vertexTangents=v.vertexTangents,m.toneMapping=v.toneMapping}function g6(L,v){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;P.setFromMatrixPosition(v.matrixWorld);for(let m=0,b=L.length;m<b;m++){let h=L[m];if(h.texture!==null&&h.boundingBox.containsPoint(P))return h}return null}function y7(L,v,m,b,h){if(v.isScene!==!0)v=MJ;g.resetTextureUnits();let F0=v.fog,M0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?v.environment:null,O0=x===null?M.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:s0.workingColorSpace,I0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,_0=t.get(b.envMap||M0,I0),b0=b.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,p0=!!m.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),f=!!m.morphAttributes.position,s=!!m.morphAttributes.normal,K0=!!m.morphAttributes.color,B0=U9;if(b.toneMapped){if(x===null||x.isXRRenderTarget===!0)B0=M.toneMapping}let k0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,r0=k0!==void 0?k0.length:0,W0=T.get(b),NJ=A.state.lights;if(n0===!0){if(g0===!0||L!==Q0){let UJ=L===Q0&&b.id===J0;$0.setState(b,L,UJ)}}let h0=!1;if(b.version===W0.__version){if(W0.needsLights&&W0.lightsStateVersion!==NJ.state.version)h0=!0;else if(W0.outputColorSpace!==O0)h0=!0;else if(h.isBatchedMesh&&W0.batching===!1)h0=!0;else if(!h.isBatchedMesh&&W0.batching===!0)h0=!0;else if(h.isBatchedMesh&&W0.batchingColor===!0&&h.colorTexture===null)h0=!0;else if(h.isBatchedMesh&&W0.batchingColor===!1&&h.colorTexture!==null)h0=!0;else if(h.isInstancedMesh&&W0.instancing===!1)h0=!0;else if(!h.isInstancedMesh&&W0.instancing===!0)h0=!0;else if(h.isSkinnedMesh&&W0.skinning===!1)h0=!0;else if(!h.isSkinnedMesh&&W0.skinning===!0)h0=!0;else if(h.isInstancedMesh&&W0.instancingColor===!0&&h.instanceColor===null)h0=!0;else if(h.isInstancedMesh&&W0.instancingColor===!1&&h.instanceColor!==null)h0=!0;else if(h.isInstancedMesh&&W0.instancingMorph===!0&&h.morphTexture===null)h0=!0;else if(h.isInstancedMesh&&W0.instancingMorph===!1&&h.morphTexture!==null)h0=!0;else if(W0.envMap!==_0)h0=!0;else if(b.fog===!0&&W0.fog!==F0)h0=!0;else if(W0.numClippingPlanes!==void 0&&(W0.numClippingPlanes!==$0.numPlanes||W0.numIntersection!==$0.numIntersection))h0=!0;else if(W0.vertexAlphas!==b0)h0=!0;else if(W0.vertexTangents!==p0)h0=!0;else if(W0.morphTargets!==f)h0=!0;else if(W0.morphNormals!==s)h0=!0;else if(W0.morphColors!==K0)h0=!0;else if(W0.toneMapping!==B0)h0=!0;else if(W0.morphTargetsCount!==r0)h0=!0;else if(!!W0.lightProbeGrid!==A.state.lightProbeGridArray.length>0)h0=!0}else h0=!0,W0.__version=b.version;let _J=W0.currentProgram;if(h0===!0){if(_J=P8(b,v,h),C&&b.isNodeMaterial)C.onUpdateProgram(b,_J,W0)}let cJ=!1,g9=!1,w8=!1,XJ=_J.getUniforms(),kJ=W0.uniforms;if(z.useProgram(_J.program))cJ=!0,g9=!0,w8=!0;if(b.id!==J0)J0=b.id,g9=!0;if(W0.needsLights){let UJ=g6(A.state.lightProbeGridArray,h);if(W0.lightProbeGrid!==UJ)W0.lightProbeGrid=UJ,g9=!0}if(cJ||Q0!==L){if(z.buffers.depth.getReversed()&&L.reversedDepth!==!0)L._reversedDepth=!0,L.updateProjectionMatrix();XJ.setValue(j,"projectionMatrix",L.projectionMatrix),XJ.setValue(j,"viewMatrix",L.matrixWorldInverse);let m9=XJ.map.cameraPosition;if(m9!==void 0)m9.setValue(j,hJ.setFromMatrixPosition(L.matrixWorld));if(ZJ.logarithmicDepthBuffer)XJ.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)XJ.setValue(j,"isOrthographic",L.isOrthographicCamera===!0);if(Q0!==L)Q0=L,g9=!0,w8=!0}if(W0.needsLights){if(NJ.state.directionalShadowMap.length>0)XJ.setValue(j,"directionalShadowMap",NJ.state.directionalShadowMap,g);if(NJ.state.spotShadowMap.length>0)XJ.setValue(j,"spotShadowMap",NJ.state.spotShadowMap,g);if(NJ.state.pointShadowMap.length>0)XJ.setValue(j,"pointShadowMap",NJ.state.pointShadowMap,g)}if(h.isSkinnedMesh){XJ.setOptional(j,h,"bindMatrix"),XJ.setOptional(j,h,"bindMatrixInverse");let UJ=h.skeleton;if(UJ){if(UJ.boneTexture===null)UJ.computeBoneTexture();XJ.setValue(j,"boneTexture",UJ.boneTexture,g)}}if(h.isBatchedMesh){if(XJ.setOptional(j,h,"batchingTexture"),XJ.setValue(j,"batchingTexture",h._matricesTexture,g),XJ.setOptional(j,h,"batchingIdTexture"),XJ.setValue(j,"batchingIdTexture",h._indirectTexture,g),XJ.setOptional(j,h,"batchingColorTexture"),h._colorsTexture!==null)XJ.setValue(j,"batchingColorTexture",h._colorsTexture,g)}let p9=m.morphAttributes;if(p9.position!==void 0||p9.normal!==void 0||p9.color!==void 0)a0.update(h,m,_J);if(g9||W0.receiveShadow!==h.receiveShadow)W0.receiveShadow=h.receiveShadow,XJ.setValue(j,"receiveShadow",h.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&v.environment!==null)kJ.envMapIntensity.value=v.environmentIntensity;if(kJ.dfgLUT!==void 0)kJ.dfgLUT.value=d5();if(g9){if(XJ.setValue(j,"toneMappingExposure",M.toneMappingExposure),W0.needsLights)X7(kJ,w8);if(F0&&b.fog===!0)E0.refreshFogUniforms(kJ,F0);if(E0.refreshMaterialUniforms(kJ,b,L0,U0,A.state.transmissionRenderTarget[L.id]),W0.needsLights&&W0.lightProbeGrid){let UJ=W0.lightProbeGrid;kJ.probesSH.value=UJ.texture,kJ.probesMin.value.copy(UJ.boundingBox.min),kJ.probesMax.value.copy(UJ.boundingBox.max),kJ.probesResolution.value.copy(UJ.resolution)}T7.upload(j,_8(W0),kJ,g)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)T7.upload(j,_8(W0),kJ,g),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)XJ.setValue(j,"center",h.center);if(XJ.setValue(j,"modelViewMatrix",h.modelViewMatrix),XJ.setValue(j,"normalMatrix",h.normalMatrix),XJ.setValue(j,"modelMatrix",h.matrixWorld),b.uniformsGroups!==void 0){let UJ=b.uniformsGroups;for(let m9=0,T8=UJ.length;m9<T8;m9++){let r$=UJ[m9];R0.update(r$,_J),R0.bind(r$,_J)}}return _J}function X7(L,v){L.ambientLightColor.needsUpdate=v,L.lightProbe.needsUpdate=v,L.directionalLights.needsUpdate=v,L.directionalLightShadows.needsUpdate=v,L.pointLights.needsUpdate=v,L.pointLightShadows.needsUpdate=v,L.spotLights.needsUpdate=v,L.spotLightShadows.needsUpdate=v,L.rectAreaLights.needsUpdate=v,L.hemisphereLights.needsUpdate=v}function b7(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}if(this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(L,v,m){let b=T.get(L);if(b.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;T.get(L.texture).__webglTexture=v,T.get(L.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:m,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,v){let m=T.get(L);m.__webglFramebuffer=v,m.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(L,v=0,m=0){x=L,u=v,i=m;let b=null,h=!1,F0=!1;if(L){let O0=T.get(L);if(O0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(j.FRAMEBUFFER,O0.__webglFramebuffer),G0.copy(L.viewport),A0.copy(L.scissor),z0=L.scissorTest,z.viewport(G0),z.scissor(A0),z.setScissorTest(z0),J0=-1;return}else if(O0.__webglFramebuffer===void 0)g.setupRenderTarget(L);else if(O0.__hasExternalTextures)g.rebindTextures(L,T.get(L.texture).__webglTexture,T.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let b0=L.depthTexture;if(O0.__boundDepthTexture!==b0){if(b0!==null&&T.has(b0)&&(L.width!==b0.image.width||L.height!==b0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(L)}}let I0=L.texture;if(I0.isData3DTexture||I0.isDataArrayTexture||I0.isCompressedArrayTexture)F0=!0;let _0=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(_0[v]))b=_0[v][m];else b=_0[v];h=!0}else if(L.samples>0&&g.useMultisampledRTT(L)===!1)b=T.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(_0))b=_0[m];else b=_0;G0.copy(L.viewport),A0.copy(L.scissor),z0=L.scissorTest}else G0.copy(d0).multiplyScalar(L0).floor(),A0.copy(x0).multiplyScalar(L0).floor(),z0=m0;if(m!==0)b=l;if(z.bindFramebuffer(j.FRAMEBUFFER,b))z.drawBuffers(L,b);if(z.viewport(G0),z.scissor(A0),z.setScissorTest(z0),h){let O0=T.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+v,O0.__webglTexture,m)}else if(F0){let O0=v;for(let I0=0;I0<L.textures.length;I0++){let _0=T.get(L.textures[I0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+I0,_0.__webglTexture,m,O0)}}else if(L!==null&&m!==0){let O0=T.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,O0.__webglTexture,m)}J0=-1},this.readRenderTargetPixels=function(L,v,m,b,h,F0,M0,O0=0){if(!(L&&L.isWebGLRenderTarget)){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let I0=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&M0!==void 0)I0=I0[M0];if(I0){z.bindFramebuffer(j.FRAMEBUFFER,I0);try{let _0=L.textures[O0],b0=_0.format,p0=_0.type;if(L.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+O0);if(!ZJ.textureFormatReadable(b0)){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ZJ.textureTypeReadable(p0)){j0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=L.width-b&&(m>=0&&m<=L.height-h))j.readPixels(v,m,b,h,n.convert(b0),n.convert(p0),F0)}finally{let _0=x!==null?T.get(x).__webglFramebuffer:null;z.bindFramebuffer(j.FRAMEBUFFER,_0)}}},this.readRenderTargetPixelsAsync=async function(L,v,m,b,h,F0,M0,O0=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let I0=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&M0!==void 0)I0=I0[M0];if(I0)if(v>=0&&v<=L.width-b&&(m>=0&&m<=L.height-h)){z.bindFramebuffer(j.FRAMEBUFFER,I0);let _0=L.textures[O0],b0=_0.format,p0=_0.type;if(L.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+O0);if(!ZJ.textureFormatReadable(b0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ZJ.textureTypeReadable(p0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let f=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.bufferData(j.PIXEL_PACK_BUFFER,F0.byteLength,j.STREAM_READ),j.readPixels(v,m,b,h,n.convert(b0),n.convert(p0),0);let s=x!==null?T.get(x).__webglFramebuffer:null;z.bindFramebuffer(j.FRAMEBUFFER,s);let K0=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await MK(j,K0,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,F0),j.deleteBuffer(f),j.deleteSync(K0),F0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,v=null,m=0){let b=Math.pow(2,-m),h=Math.floor(L.image.width*b),F0=Math.floor(L.image.height*b),M0=v!==null?v.x:0,O0=v!==null?v.y:0;g.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,m,0,0,M0,O0,h,F0),z.unbindTexture()},this.copyTextureToTexture=function(L,v,m=null,b=null,h=0,F0=0){let M0,O0,I0,_0,b0,p0,f,s,K0,B0=L.isCompressedTexture?L.mipmaps[F0]:L.image;if(m!==null)M0=m.max.x-m.min.x,O0=m.max.y-m.min.y,I0=m.isBox3?m.max.z-m.min.z:1,_0=m.min.x,b0=m.min.y,p0=m.isBox3?m.min.z:0;else{let kJ=Math.pow(2,-h);if(M0=Math.floor(B0.width*kJ),O0=Math.floor(B0.height*kJ),L.isDataArrayTexture)I0=B0.depth;else if(L.isData3DTexture)I0=Math.floor(B0.depth*kJ);else I0=1;_0=0,b0=0,p0=0}if(b!==null)f=b.x,s=b.y,K0=b.z;else f=0,s=0,K0=0;let k0=n.convert(v.format),r0=n.convert(v.type),W0;if(v.isData3DTexture)g.setTexture3D(v,0),W0=j.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)g.setTexture2DArray(v,0),W0=j.TEXTURE_2D_ARRAY;else g.setTexture2D(v,0),W0=j.TEXTURE_2D;z.activeTexture(j.TEXTURE0),z.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,v.flipY),z.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),z.pixelStorei(j.UNPACK_ALIGNMENT,v.unpackAlignment);let NJ=z.getParameter(j.UNPACK_ROW_LENGTH),h0=z.getParameter(j.UNPACK_IMAGE_HEIGHT),_J=z.getParameter(j.UNPACK_SKIP_PIXELS),cJ=z.getParameter(j.UNPACK_SKIP_ROWS),g9=z.getParameter(j.UNPACK_SKIP_IMAGES);z.pixelStorei(j.UNPACK_ROW_LENGTH,B0.width),z.pixelStorei(j.UNPACK_IMAGE_HEIGHT,B0.height),z.pixelStorei(j.UNPACK_SKIP_PIXELS,_0),z.pixelStorei(j.UNPACK_SKIP_ROWS,b0),z.pixelStorei(j.UNPACK_SKIP_IMAGES,p0);let w8=L.isDataArrayTexture||L.isData3DTexture,XJ=v.isDataArrayTexture||v.isData3DTexture;if(L.isDepthTexture){let kJ=T.get(L),p9=T.get(v),UJ=T.get(kJ.__renderTarget),m9=T.get(p9.__renderTarget);z.bindFramebuffer(j.READ_FRAMEBUFFER,UJ.__webglFramebuffer),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,m9.__webglFramebuffer);for(let T8=0;T8<I0;T8++){if(w8)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(L).__webglTexture,h,p0+T8),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(v).__webglTexture,F0,K0+T8);j.blitFramebuffer(_0,b0,M0,O0,f,s,M0,O0,j.DEPTH_BUFFER_BIT,j.NEAREST)}z.bindFramebuffer(j.READ_FRAMEBUFFER,null),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(h!==0||L.isRenderTargetTexture||T.has(L)){let kJ=T.get(L),p9=T.get(v);z.bindFramebuffer(j.READ_FRAMEBUFFER,r),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,p);for(let UJ=0;UJ<I0;UJ++){if(w8)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,kJ.__webglTexture,h,p0+UJ);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,kJ.__webglTexture,h);if(XJ)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,p9.__webglTexture,F0,K0+UJ);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,p9.__webglTexture,F0);if(h!==0)j.blitFramebuffer(_0,b0,M0,O0,f,s,M0,O0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(XJ)j.copyTexSubImage3D(W0,F0,f,s,K0+UJ,_0,b0,M0,O0);else j.copyTexSubImage2D(W0,F0,f,s,_0,b0,M0,O0)}z.bindFramebuffer(j.READ_FRAMEBUFFER,null),z.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(XJ)if(L.isDataTexture||L.isData3DTexture)j.texSubImage3D(W0,F0,f,s,K0,M0,O0,I0,k0,r0,B0.data);else if(v.isCompressedArrayTexture)j.compressedTexSubImage3D(W0,F0,f,s,K0,M0,O0,I0,k0,B0.data);else j.texSubImage3D(W0,F0,f,s,K0,M0,O0,I0,k0,r0,B0);else if(L.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,F0,f,s,M0,O0,k0,r0,B0.data);else if(L.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,F0,f,s,B0.width,B0.height,k0,B0.data);else j.texSubImage2D(j.TEXTURE_2D,F0,f,s,M0,O0,k0,r0,B0);if(z.pixelStorei(j.UNPACK_ROW_LENGTH,NJ),z.pixelStorei(j.UNPACK_IMAGE_HEIGHT,h0),z.pixelStorei(j.UNPACK_SKIP_PIXELS,_J),z.pixelStorei(j.UNPACK_SKIP_ROWS,cJ),z.pixelStorei(j.UNPACK_SKIP_IMAGES,g9),F0===0&&v.generateMipmaps)j.generateMipmap(W0);z.unbindTexture()},this.initRenderTarget=function(L){if(T.get(L).__webglFramebuffer===void 0)g.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)g.setTextureCube(L,0);else if(L.isData3DTexture)g.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)g.setTexture2DArray(L,0);else g.setTexture2D(L,0);z.unbindTexture()},this.resetState=function(){u=0,i=0,x=null,z.reset(),N0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return H$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=s0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=s0._getUnpackColorSpace()}}var j7=new y;function Q9(J,Q,$,Z,K,W){let X=2*Math.PI*K/4,Y=Math.max(W-2*K,0),U=Math.PI/4;j7.copy(Q),j7[Z]=0,j7.normalize();let H=0.5*X/(X+Y),N=1-j7.angleTo(J)/U;if(Math.sign(j7[$])===1)return N*H;else return Y/(X+Y)+H+H*(1-N)}class z9 extends OJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let X=this.toNonIndexed();this.index=null,this.attributes.position=X.attributes.position,this.attributes.normal=X.attributes.normal,this.attributes.uv=X.attributes.uv;let Y=new y,U=new y,H=new y(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,F=this.attributes.normal.array,q=this.attributes.uv.array,D=N.length/6,V=new y,B=0.5/W;for(let G=0,O=0;G<N.length;G+=3,O+=2)switch(Y.fromArray(N,G),U.copy(Y),U.x-=Math.sign(U.x)*B,U.y-=Math.sign(U.y)*B,U.z-=Math.sign(U.z)*B,U.normalize(),N[G+0]=H.x*Math.sign(Y.x)+U.x*K,N[G+1]=H.y*Math.sign(Y.y)+U.y*K,N[G+2]=H.z*Math.sign(Y.z)+U.z*K,F[G+0]=U.x,F[G+1]=U.y,F[G+2]=U.z,Math.floor(G/D)){case 0:V.set(1,0,0),q[O+0]=Q9(V,U,"z","y",K,$),q[O+1]=1-Q9(V,U,"y","z",K,Q);break;case 1:V.set(-1,0,0),q[O+0]=1-Q9(V,U,"z","y",K,$),q[O+1]=1-Q9(V,U,"y","z",K,Q);break;case 2:V.set(0,1,0),q[O+0]=1-Q9(V,U,"x","z",K,J),q[O+1]=Q9(V,U,"z","x",K,$);break;case 3:V.set(0,-1,0),q[O+0]=1-Q9(V,U,"x","z",K,J),q[O+1]=1-Q9(V,U,"z","x",K,$);break;case 4:V.set(0,0,1),q[O+0]=1-Q9(V,U,"x","y",K,J),q[O+1]=1-Q9(V,U,"y","x",K,Q);break;case 5:V.set(0,0,-1),q[O+0]=Q9(V,U,"x","y",K,J),q[O+1]=1-Q9(V,U,"y","x",K,Q);break}}static fromJSON(J){return new z9(J.width,J.height,J.depth,J.segments,J.radius)}}class n$ extends r8{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new OJ;J.deleteAttribute("uv");let Q=new BJ({side:yJ}),$=new BJ,Z=new S6(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let K=new S0(J,Q);K.position.set(-0.757,13.219,0.717),K.scale.set(31.713,28.305,28.591),this.add(K);let W=new O8(J,$,6),X=new RJ;X.position.set(-10.906,2.009,1.846),X.rotation.set(0,-0.195,0),X.scale.set(2.328,7.905,4.651),X.updateMatrix(),W.setMatrixAt(0,X.matrix),X.position.set(-5.607,-0.754,-0.758),X.rotation.set(0,0.994,0),X.scale.set(1.97,1.534,3.955),X.updateMatrix(),W.setMatrixAt(1,X.matrix),X.position.set(6.167,0.857,7.803),X.rotation.set(0,0.561,0),X.scale.set(3.927,6.285,3.687),X.updateMatrix(),W.setMatrixAt(2,X.matrix),X.position.set(-2.017,0.018,6.124),X.rotation.set(0,0.333,0),X.scale.set(2.002,4.566,2.064),X.updateMatrix(),W.setMatrixAt(3,X.matrix),X.position.set(2.291,-0.756,-2.621),X.rotation.set(0,-0.286,0),X.scale.set(1.546,1.552,1.496),X.updateMatrix(),W.setMatrixAt(4,X.matrix),X.position.set(-2.193,-0.369,-5.547),X.rotation.set(0,0.516,0),X.scale.set(3.875,3.487,2.986),X.updateMatrix(),W.setMatrixAt(5,X.matrix),this.add(W);let Y=new S0(J,Q7(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let U=new S0(J,Q7(50));U.position.set(-16.109,18.021,-8.207),U.scale.set(0.1,2.425,2.751),this.add(U);let H=new S0(J,Q7(17));H.position.set(14.904,12.198,-1.832),H.scale.set(0.15,4.265,6.331),this.add(H);let N=new S0(J,Q7(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let F=new S0(J,Q7(20));F.position.set(3.235,11.486,-12.541),F.scale.set(2.5,2,0.1),this.add(F);let q=new S0(J,Q7(100));q.position.set(0,20,0),q.scale.set(1,0.1,1),this.add(q)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function Q7(J){return new P6({color:0,emissive:16777215,emissiveIntensity:J})}var e9=653429,EJ="#09F875",$J="rgba(9,248,117,0.55)",s$="rgba(9,248,117,0.28)",u5="#0A0A0A",a$="#070808";var CJ="#CFFFE2",B8="'SF Mono', ui-monospace, Menlo, Consolas, monospace",V8="'Space Grotesk', -apple-system, sans-serif",J8=["HOME","CHAT","SEARCH","X LOOKUP","LEDGER","LANES"],Z9=matchMedia("(prefers-reduced-motion: reduce)").matches,GW=null,z8=()=>GW=GW||new(window.AudioContext||window.webkitAudioContext);function G9(J,Q,$,Z=0.045,K="triangle"){let W=z8(),X=W.createOscillator(),Y=W.createGain();X.type=K,X.frequency.value=J,Y.gain.setValueAtTime($,Q),Y.gain.exponentialRampToValueAtTime(0.0001,Q+Z),X.connect(Y),Y.connect(W.destination),X.start(Q),X.stop(Q+Z+0.02)}var SJ={detent(J=0){try{let Q=z8();if(Q.state==="suspended")Q.resume();G9(640+J*46,Q.currentTime+0.01,0.022,0.03)}catch{}},lever(){try{let J=z8();G9(420,J.currentTime+0.01,0.04,0.05),G9(640,J.currentTime+0.06,0.03,0.04)}catch{}},press(){try{let J=z8();G9(120,J.currentTime+0.01,0.09,0.08,"sine"),G9(88,J.currentTime+0.05,0.05,0.09,"sine")}catch{}},ok(){try{let J=z8();G9(660,J.currentTime+0.02,0.05),G9(880,J.currentTime+0.1,0.045)}catch{}},err(){try{let J=z8();G9(220,J.currentTime+0.02,0.05,0.07),G9(180,J.currentTime+0.1,0.05,0.09)}catch{}},dock(){try{let J=z8();G9(240,J.currentTime+0.01,0.05,0.05,"sine"),G9(180,J.currentTime+0.07,0.07,0.06,"sine")}catch{}}};class M8{k;d;v;target;vel=0;constructor(J,Q=120,$=18){this.k=Q;this.d=$;this.v=J,this.target=J}step(J){let Q=-this.k*(this.v-this.target)-this.d*this.vel;return this.vel+=Q*J,this.v+=this.vel*J,this.v}settled(){return Math.abs(this.v-this.target)<0.0001&&Math.abs(this.vel)<0.0001}}var c5=[new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),new Path2D("M238 151 L239 215 L203 253 L134 253 Z")],h6={w:240,h:254};function x6(J,Q,$,Z,K,W=1){J.save(),J.globalAlpha=W,J.translate(Q,$),J.scale(Z/h6.w,Z/h6.w),J.fillStyle=K;for(let X of c5)J.fill(X);J.restore()}var n5=[[5,8,12,7],[12,3,6,6],[1,6,3,3],[3,8,3,3]],s5=[[18,5,3,2]],i$=[[6,4,8,4]],i5=[[6,9,8,4]],o$=[[7,12,7,3]],f7=[15.2,4.6,1.6,1.6];class OW{state="sleep";t=0;unfold=0;flapRate=0;blinkAt=2.5;hopV=0;hopY=0;set(J){if(this.state===J)return;if(J==="wake"&&this.state!=="sleep")return;if(this.state=J,this.t=0,J==="happy")this.hopV=-46}poke(){if(this.state==="sleep")this.set("wake")}step(J){this.t+=J;let Q=this.state==="sleep"?0:1;if(this.unfold+=(Q-this.unfold)*Math.min(1,J*(this.state==="wake"?9:5)),this.state==="wake"&&this.unfold>0.98)this.set("idle"),this.hopV=-34;if(this.state==="happy"&&this.t>1.5)this.set("idle");if(this.state==="alert"&&this.t>1.1)this.set("idle");if(this.state==="idle"&&this.t>45)this.state="sleep",this.t=0;if(this.hopV+=340*J,this.hopY=Math.max(0,this.hopY-this.hopV*J*0.28),this.hopY===0&&this.hopV>0)this.hopV=0;if(this.state==="happy"&&this.hopY===0&&this.t<1&&this.hopV===0)this.hopV=-40;if(this.t>this.blinkAt)this.blinkAt=this.t+2.5+Math.random()*3.5}blinking(){return this.state!=="sleep"&&this.t>this.blinkAt-0.12&&this.t<this.blinkAt}wingCells(J){if(this.state==="work"){let Q=Math.max(3,this.flapRate);return Math.floor(J*Q*2)%2?i$:o$}if(this.state==="happy")return Math.floor(J*8)%2?i$:o$;if(this.state==="droop")return o$;return Math.floor(J)%7===6?i$:i5}draw(J,Q,$,Z,K){let W=Math.floor(K*10)/10,X=1-Math.min(1,this.unfold*1.6),Y=Math.max(0,this.unfold*1.4-0.4),U=18*Z;if(X>0.01){let H=1+Math.sin(W*1.1)*0.012,N=15*Z*H;x6(J,Q+(24*Z-N)/2,$+U-N*(h6.h/h6.w),N,EJ,X)}if(Y>0.01){let H=this.state==="droop",N=this.state==="idle"&&Math.floor(W*2)%4===3?0.6:0;J.save(),J.globalAlpha=Y,J.fillStyle=EJ;let F=(q,D,V,B,G=0)=>{let O=Q+q*Z,w=$+(D+N-this.hopY/24)*Z;if(G>0)J.beginPath(),J.roundRect(O,w,V*Z,B*Z,G*Z),J.fill();else J.fillRect(O,w,V*Z,B*Z)};for(let[q,D,V,B]of n5){let G=H&&q>=12&&D<=4?D+2:D;F(q,G,V,B,Math.min(V,B)*0.42)}for(let[q,D,V,B]of s5)F(q,H?D+2:D,V,B,0.6);for(let[q,D,V,B]of this.wingCells(W))F(q,H?D+2:D,V,B,1.1);if(!this.blinking()){J.fillStyle=a$;let q=H?f7[1]+2:f7[1];J.fillRect(Q+f7[0]*Z,$+(q+N-this.hopY/24)*Z,f7[2]*Z,f7[3]*Z)}J.restore()}}}var $9=1024,b9=768;class EW{canvas=document.createElement("canvas");ctx;tex;vireo=new OW;mode=0;lane="inference";meta=null;history=[];booted=Z9;bootT=0;powered=Z9;busy=!1;status="";chat=null;search=null;xprof=null;err=null;armed=null;tabRects=[];lastDrawAt=-1e9;crt=null;crtOverlay(){if(this.crt)return this.crt;let J=document.createElement("canvas");J.width=$9*1.5,J.height=b9*1.5;let Q=J.getContext("2d");Q.fillStyle="rgba(0,0,0,0.16)";for(let Z=0;Z<J.height;Z+=5)Q.fillRect(0,Z,J.width,2);let $=Q.createRadialGradient(J.width/2,J.height/2,J.height*0.34,J.width/2,J.height/2,J.height*0.92);return $.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(1,"rgba(0,6,3,0.42)"),Q.fillStyle=$,Q.fillRect(0,0,J.width,J.height),this.crt=J,J}dirty=!0;acc=0;lastKey="";constructor(){this.canvas.width=$9*1.5,this.canvas.height=b9*1.5,this.ctx=this.canvas.getContext("2d"),this.ctx.setTransform(1.5,0,0,1.5,0,0),this.tex=new k9(this.canvas),this.tex.colorSpace=q9,this.tex.generateMipmaps=!1,this.tex.minFilter=LJ}modeName(){return J8[this.mode]}frameKey(J){let Q=this.vireo,$=Q.state!=="sleep"||Q.unfold>0.001,Z=!this.powered?Math.floor(J*2):!this.booted||$||this.busy?Math.floor(J*10):0,K=this.meta;return[this.mode,this.lane,this.powered,this.booted,this.busy,this.err,this.status,this.armed?.quote,Z,Q.state,this.chat?`${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}`:"",this.search?.query,this.search?.results?.length,this.xprof?.profile?.handle,this.history.length,K?`${K.main_balance_usd}|${K.lanes?.inference?.balance_usd}|${K.lanes?.devtools?.balance_usd}|${K.handle}`:""].join("~")}step(J,Q){if(this.powered&&!this.booted){if(this.bootT+=J,this.bootT>2.1)this.booted=!0}if(this.vireo.step(J),this.armed&&Q*1000>this.armed.until)this.armed=null;if(this.chat&&this.chat.shown<this.chat.text.length){let Z=Z9?1e9:60;if(this.chat.shown=Math.min(this.chat.text.length,this.chat.shown+Z*J),this.vireo.flapRate=Math.max(2.5,Z/12),this.chat.shown>=this.chat.text.length&&!this.busy)this.vireo.set("idle")}this.acc+=J;let $=!this.booted?0.05:0.1;if(this.acc>=$){this.acc=0;let Z=this.frameKey(Q);if(Z!==this.lastKey||Q-this.lastDrawAt>2)return this.lastKey=Z,this.lastDrawAt=Q,this.draw(Q),this.tex.needsUpdate=!0,this.dirty=!1,!0}return!1}text(J,Q,$,Z,K=EJ,W=B8,X="500"){this.ctx.fillStyle=K,this.ctx.font=`${X} ${Z}px ${W}`,this.ctx.textBaseline="top",this.ctx.fillText(J,Q,$)}wrap(J,Q){let $=[];for(let Z of J.split(/\n+/)){let K="";for(let W of Z.split(/\s+/))if((K+" "+W).trim().length>Q)$.push(K.trim()),K=W;else K+=" "+W;if(K.trim())$.push(K.trim())}return $}draw(J){let Q=this.ctx;if(Q.fillStyle=a$,Q.fillRect(0,0,$9,b9),!this.powered){if(Math.floor(J*2)%2===0)Q.fillStyle=EJ,Q.fillRect($9/2-14,b9/2-24,28,7);this.text("READING CARD",$9/2-84,b9/2+12,21,$J),this.compositeCrt();return}if(!this.booted){let Y=this.bootT,H=["VANTIS UNIFIED OPERATING SYSTEM","COPYRIGHT 2026 VANTIS.SH","WLT-01 WALLET TERMINAL","","MEMORY CHECK ............... OK","RAIL LINK .................. OK",`CARD ....................... ${this.meta?.handle?"@"+String(this.meta.handle).replace(/^@+/,"").toUpperCase():"…"}`,"LANES ...................... INF · DEV","","BOOT COMPLETE"],N=340,F=Math.floor(Y*340),q=96;this.ctx.shadowColor=EJ,this.ctx.shadowBlur=7;for(let D of H){if(F<=0)break;let V=D.slice(0,F);F-=D.length+6,this.text(V,72,q,24,EJ),q+=40}if(this.ctx.shadowBlur=0,Math.floor(J*3)%2===0)this.ctx.fillStyle=EJ,this.ctx.fillRect(72,q+4,15,26);this.compositeCrt();return}this.tabRects=[];let $=44;for(let Y=0;Y<J8.length;Y++){let U=Y===this.mode;Q.font=`600 22px ${B8}`;let H=Q.measureText(J8[Y]).width;if(U)Q.fillStyle=EJ,Q.beginPath(),Q.roundRect($-14,24,H+28,40,8),Q.fill();this.text(J8[Y],$,33,22,U?a$:$J),this.tabRects.push({x:$-14,y:16,w:H+28,h:56,mode:Y}),$+=H+42}let Z=this.meta?`$${(this.meta.main_balance_usd||0).toFixed(2)}`:"$—";Q.font=`600 22px ${B8}`,this.text(`MAIN ${Z}`,$9-44-Q.measureText(`MAIN ${Z}`).width,33,22,CJ),Q.fillStyle=s$,Q.fillRect(44,80,$9-88,2);let K=108,W=this.modeName();if(this.err)this.text("PROBLEM",64,K+8,22,$J),this.wrap(this.err,52).slice(0,4).forEach((Y,U)=>this.text(Y,64,K+46+U*34,24,CJ));else if(W==="HOME")this.drawHome(K);else if(W==="CHAT")this.drawChat(K);else if(W==="SEARCH")this.drawSearch(K);else if(W==="X LOOKUP")this.drawX(K);else if(W==="LEDGER")this.drawLedger(K);else this.drawLanes(K);Q.fillStyle=s$,Q.fillRect(44,b9-140,$9-88,2),this.vireo.draw(Q,52,b9-126,6,J);let X=this.busy?"WORKING…":this.status||"TAP A TAB · GREEN KEY FIRES";Q.font=`600 21px ${B8}`,this.text(X,$9-44-Q.measureText(X).width,b9-72,21,this.busy?EJ:$J),this.compositeCrt()}compositeCrt(){let J=this.ctx;J.save(),J.setTransform(1,0,0,1,0,0),J.drawImage(this.crtOverlay(),0,0),J.restore()}drawHome(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools;if(this.text("ONE CARD. EVERY RAIL.",44,J+2,21,$J),this.ctx.shadowColor=EJ,this.ctx.shadowBlur=10,this.text(Q?`$${(Q.main_balance_usd||0).toFixed(2)}`:"$—",44,J+34,104,CJ,V8,"700"),this.ctx.shadowBlur=0,this.text("MAIN BALANCE",46,J+156,20,$J),Q?.tier){let X=this.ctx;X.font=`600 20px ${B8}`;let Y=`TIER ${String(Q.tier).toUpperCase()}`,U=X.measureText(Y).width;X.strokeStyle=$J,X.lineWidth=2,X.beginPath(),X.roundRect(44,J+198,U+28,38,19),X.stroke(),this.text(Y,58,J+207,20,EJ),this.text(`${(Q.vantis_burned||0).toFixed(2)} VANTIS BURNED`,94+U,J+207,20,$J)}let K=(X,Y,U,H)=>{let N=this.ctx;this.text(X,560,U,22,H?EJ:$J);let F=Y?`$${Y.balance_usd.toFixed(2)}`:"$—";N.font=`700 30px ${V8}`,this.text(F,$9-44-N.measureText(F).width,U-6,30,CJ,V8,"700");let q=Math.max(0.01,(Q?.main_balance_usd||0)+($?.balance_usd||0)+(Z?.balance_usd||0)),D=Math.max(6,(Y?.balance_usd||0)/q*420);N.fillStyle="rgba(9,248,117,0.16)",N.fillRect(560,U+44,420,10),N.fillStyle=H?EJ:$J,N.fillRect(560,U+44,D,10),this.text(H?"LIVE — BILLS THE MODEL RAIL":"ROUTES OPENING — FUND AHEAD",560,U+68,18,$J)};K("INFERENCE",$,J+10,!0),K("DEV TOOLS",Z,J+130,!1);let W=this.history[0];if(W){let X=W.amount_usd>=0?`+$${W.amount_usd.toFixed(2)}`:`−$${Math.abs(W.amount_usd).toFixed(2)}`;this.text("LAST MOVE",44,J+268,18,$J),this.text(`${X}  ${String(W.description||"").slice(0,52)}`,200,J+268,20,CJ)}this.status="GREEN KEY = FUND INFERENCE"}drawChat(J){let Q=this.chat;if(this.armed){this.text("QUOTE",64,J+6,22,$J),this.text(this.armed.quote,64,J+44,25,CJ),this.text("ARMED — PRESS AGAIN TO FIRE",64,J+100,30,EJ,V8,"700"),this.status="SETTLES FROM REAL USAGE";return}if(!Q){this.text("TEST-FIRE THE RAIL",64,J+6,22,$J),this.text("DeepSeek V4 Flash. Real call, real cost,",64,J+44,26,CJ),this.text("billed to your Inference lane.",64,J+80,26,CJ),this.text("Type below, then press the green key.",64,J+138,24,$J),this.status="TYPE A PROMPT · GREEN KEY FIRES";return}this.text("> "+Q.prompt.slice(0,46),64,J+4,22,$J);let $=Q.text.slice(0,Math.floor(Q.shown)),Z=this.wrap($,62),K=8;if(Z.slice(-K).forEach((W,X)=>this.text(W,64,J+42+X*34,24,CJ)),Q.line&&Q.shown>=Q.text.length)this.text(Q.line,64,J+42+Math.min(Z.length,K)*34+10,20,EJ)}drawSearch(J){let Q=this.search;if(!Q){this.text("WEB SEARCH — EXA CLASS",64,J+6,22,$J),this.text("One real query against the open web.",64,J+44,26,CJ);let $=this.meta?.tools?.find((Z)=>Z.key==="search");this.text($?`${$.left_today} OF ${$.per_day} ON THE HOUSE TODAY`:"",64,J+100,22,$J),this.status="TYPE A QUERY · GREEN KEY FIRES";return}this.text("? "+Q.query.slice(0,46),64,J+4,22,$J),Q.results.slice(0,5).forEach(($,Z)=>{this.text(($.title||"").slice(0,54),64,J+42+Z*62,24,CJ),this.text(($.url||"").replace(/^https?:\/\//,"").slice(0,58),64,J+42+Z*62+28,19,$J)}),this.text(`${Q.left} LEFT TODAY`,64,J+358,20,EJ)}drawX(J){let Q=this.xprof?.profile;if(!Q){this.text("X PROFILE LOOKUP",64,J+6,22,$J),this.text("Public metrics for any handle —",64,J+44,26,CJ),this.text("the same read the scoring agent makes.",64,J+80,26,CJ);let Z=this.meta?.tools?.find((K)=>K.key==="x");this.text(Z?.status==="off"?"ROUTE OFFLINE":Z?`${Z.left_today} OF ${Z.per_day} ON THE HOUSE TODAY`:"",64,J+138,22,$J),this.status="TYPE @HANDLE · GREEN KEY FIRES";return}this.text(`@${Q.handle}`,64,J+4,34,CJ,V8,"700"),this.text(String(Q.name||"").slice(0,40),64,J+50,22,$J);let $=(Z)=>Z>=1e6?(Z/1e6).toFixed(1)+"M":Z>=1000?(Z/1000).toFixed(1)+"K":String(Z);if(this.text(`${$(Q.followers)} FOLLOWERS · ${$(Q.posts)} POSTS`,64,J+96,26,EJ),Q.created_at)this.text(`SINCE ${String(Q.created_at).slice(0,4)}`,64,J+138,22,$J);this.wrap(Q.bio||"",58).slice(0,3).forEach((Z,K)=>this.text(Z,64,J+182+K*30,21,CJ))}drawLedger(J){if(this.text("RECENT MOVES",64,J+6,22,$J),!this.history.length)this.text("Nothing yet — fund a lane, fire a call.",64,J+48,24,CJ);this.history.slice(0,7).forEach((Q,$)=>{let Z=Q.amount_usd>=0?`+$${Q.amount_usd.toFixed(2)}`:`−$${Math.abs(Q.amount_usd).toFixed(2)}`;this.text(Z.padStart(9),64,J+46+$*42,23,Q.amount_usd>=0?EJ:$J),this.text(String(Q.description||Q.type||"").slice(0,44),220,J+46+$*42,23,CJ)}),this.status="THE FULL LEDGER LIVES IN THE BELL"}drawLanes(J){let Q=this.meta,$=Q?.lanes?.inference,Z=Q?.lanes?.devtools,K=(W,X,Y,U,H,N)=>{let F=this.ctx;F.strokeStyle=U?EJ:s$,F.lineWidth=U?3:2,F.strokeRect(Y,J+10,420,300),this.text(W,Y+28,J+34,24,U?EJ:$J),this.text(X?`$${X.balance_usd.toFixed(2)}`:"$—",Y+28,J+76,56,CJ,V8,"700"),this.text(X?`SPENT $${X.consumed_usd.toFixed(2)}`:"",Y+28,J+152,20,$J),this.wrap(N,30).slice(0,3).forEach((q,D)=>this.text(q,Y+28,J+196+D*28,19,H?CJ:$J))};K("INFERENCE",$,64,this.lane==="inference",!0,"Bills the model rail. Live now."),K("DEV TOOLS",Z,520,this.lane==="devtools",!1,"Metered catalog — routes opening. Fund ahead if you like."),this.status="LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP"}}function o5(J,Q){let $=document.createElement("canvas");$.width=512,$.height=684;let Z=$.getContext("2d"),K={ink:{top:"#0C0C0B",bottom:"#191917",fg:"#FFFFFF",accent:EJ},carbon:{top:"#151515",bottom:"#2B2B29",fg:"#E8E8E4",accent:EJ},signal:{top:"#0AF77A",bottom:"#05C75F",fg:"#0A0A0A",accent:"#0A0A0A"},mint:{top:"#F2FFF8",bottom:"#BFFADA",fg:"#0A0A0A",accent:"#0B7A3E"},mono:{top:"#FFFFFF",bottom:"#E8E8E2",fg:"#0A0A0A",accent:"#0B7A3E"}},W=K[Q||"ink"]||K.ink,X=Z.createLinearGradient(0,0,512,684);X.addColorStop(0,W.top),X.addColorStop(1,W.bottom),Z.fillStyle=X,Z.fillRect(0,0,512,684);let Y=(J||"").replace(/^@+/,"");x6(Z,40,36,88,W.accent),Z.font=`700 44px ${V8}`,Z.fillStyle=W.fg,Z.fillText(Y?`@${Y}`:"VANTIS",152,96),Z.font=`600 20px ${B8}`,Z.fillStyle=W.accent,Z.fillText("VANTIS CARD",154,134),Z.fillStyle=W.accent,Z.globalAlpha=0.28,Z.fillRect(0,176,512,3),Z.globalAlpha=1;let U=new k9($);return U.colorSpace=q9,U.generateMipmaps=!1,U.minFilter=LJ,U}function a5(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),$=Q.createRadialGradient(128,128,10,128,128,126);$.addColorStop(0,"rgba(8,10,9,0.5)"),$.addColorStop(0.6,"rgba(8,10,9,0.22)"),$.addColorStop(1,"rgba(8,10,9,0)"),Q.fillStyle=$,Q.fillRect(0,0,256,256);let Z=new k9(J);return Z.colorSpace=q9,Z}function FW(){let J=document.getElementById("device-stage");if(!J)return;let Q=Math.min(2,devicePixelRatio||1),$;try{$=new c$({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{document.body.classList.add("dv-fail");return}$.setPixelRatio(Q),$.outputColorSpace=q9,$.toneMapping=R7,$.toneMappingExposure=1,J.appendChild($.domElement),$.domElement.setAttribute("aria-hidden","true");let Z=new r8,K=new S7($);Z.environment=K.fromScene(new n$,0.04).texture;let W=new t8(16777215,1.15);W.position.set(-1.6,2.4,1.8),Z.add(W);let X=new t8(14680046,0.16);X.position.set(1.8,0.6,1.2),Z.add(X);let Y=new t8(10485709,0.4);Y.position.set(2.2,1.4,-2),Z.add(Y);let U=new vJ(28,1,0.1,20);U.position.set(0,0.94,4.35),U.lookAt(0,0.8,0);function H(f,s,K0="rgba(9,248,117,0.65)"){let B0=document.createElement("canvas"),k0=Math.max(64,f.length*s*0.75),r0=s*2;B0.width=k0*2,B0.height=r0*2;let W0=B0.getContext("2d");W0.scale(2,2),W0.font=`600 ${s}px ${B8}`,W0.fillStyle=K0,W0.textBaseline="middle",W0.textAlign="center",W0.fillText(f,k0/2,r0/2);let NJ=new k9(B0);NJ.colorSpace=q9,NJ.generateMipmaps=!1,NJ.minFilter=LJ;let h0=new S0(new dJ(k0/640,r0/640),new TJ({map:NJ,transparent:!0}));return h0.material.toneMapped=!1,h0}let N=new BJ({color:724236,roughness:0.64,metalness:0.2,envMapIntensity:0.3}),F=new BJ({color:658186,roughness:0.75,metalness:0.25}),q=new BJ({color:e9,roughness:0.42,metalness:0,envMapIntensity:0.3,emissive:e9,emissiveIntensity:0.42});q.toneMapped=!1;let D=new TJ({color:e9});D.toneMapped=!1;let V=new c0(1327146),B=new xJ;Z.add(B);let G=new xJ,O=new S0(new z9(0.94,1.64,0.13,4,0.05),N);G.add(O),G.position.set(0,0.86,0),G.rotation.x=-0.09,B.add(G);let w=G,P=new S0(new OJ(0.82,0.64,0.02),F);P.position.set(0,0.4,0.062),G.add(P);let E=new EW,A=new S0(new dJ(0.76,0.57),new TJ({map:E.tex}));A.position.set(0,0.4,0.076),G.add(A);let I=new S0(new dJ(0.8,0.61),new BJ({color:16777215,transparent:!0,opacity:0.045,roughness:0.12,metalness:0,envMapIntensity:1.5}));I.position.set(0,0.4,0.082),G.add(I);let _=new S0(new OJ(0.86,0.01,0.012),D);_.position.set(0,0.03,0.066),G.add(_);let k=new xJ,M=new S0(new z9(0.26,0.26,0.07,3,0.024),q);k.add(M);let d=document.createElement("canvas");d.width=d.height=128,x6(d.getContext("2d"),28,24,72,u5);let C=new k9(d);C.colorSpace=q9,C.generateMipmaps=!1,C.minFilter=LJ;let l=new S0(new dJ(0.12,0.12),new TJ({map:C,transparent:!0}));l.material.toneMapped=!1,l.position.z=0.037,M.add(l);let r=new S0(new OJ(0.32,0.32,0.02),F);r.position.z=-0.028,k.add(r),k.position.set(-0.24,-0.33,0.075),G.add(k);let p=H("FIRE",12);p.position.set(-0.24,-0.53,0.07),G.add(p);let u=new xJ,i=new S0(new y9(0.15,0.15,0.075,48),new BJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));i.rotation.x=Math.PI/2,u.add(i);let x=new S0(new y9(0.132,0.132,0.014,40),new BJ({color:790029,roughness:0.42,metalness:0.4,envMapIntensity:0.45}));x.rotation.x=Math.PI/2,x.position.z=0.042,u.add(x);let J0=new O8(new OJ(0.016,0.03,0.062),new BJ({color:1711131,roughness:0.5,metalness:0.5,envMapIntensity:0.7}),28),Q0=new RJ;for(let f=0;f<28;f++){let s=f/28*Math.PI*2;Q0.position.set(Math.cos(s)*0.152,Math.sin(s)*0.152,0),Q0.rotation.z=s,Q0.updateMatrix(),J0.setMatrixAt(f,Q0.matrix)}u.add(J0);let G0=new S0(new OJ(0.014,0.07,0.012),D);G0.position.set(0,0.096,0.05),u.add(G0),u.position.set(0.24,-0.33,0.075),G.add(u);let A0=H("DIAL",12);A0.position.set(0.24,-0.53,0.07),G.add(A0);let z0=new xJ,HJ=new S0(new z9(0.24,0.09,0.03,2,0.012),F);z0.add(HJ);let o0=new xJ,a=new S0(new OJ(0.04,0.09,0.04),new BJ({color:1053201,roughness:0.5,metalness:0.35,envMapIntensity:0.45}));a.position.y=0.045,o0.add(a);let U0=new S0(new z9(0.065,0.05,0.05,2,0.014),q);U0.position.y=0.1,o0.add(U0),o0.position.z=0.03,z0.add(o0),z0.position.set(0,-0.13,0.07),G.add(z0);let L0=H("INF",11);L0.position.set(-0.2,-0.1,0.07),G.add(L0);let V0=H("DEV",11);V0.position.set(0.2,-0.1,0.07),G.add(V0);let T0=new y9(0.012,0.012,0.014,12),d0=new S0(T0,new TJ({color:e9}));d0.material.toneMapped=!1,d0.rotation.x=Math.PI/2,d0.position.set(-0.2,-0.16,0.07),G.add(d0);let x0=new S0(T0,new TJ({color:V}));x0.material.toneMapped=!1,x0.rotation.x=Math.PI/2,x0.position.set(0.2,-0.16,0.07),G.add(x0);let m0=document.createElement("canvas");m0.width=240,m0.height=254,x6(m0.getContext("2d"),0,0,240,EJ);let JJ=new k9(m0);JJ.colorSpace=q9,JJ.generateMipmaps=!1,JJ.minFilter=LJ;let n0=new S0(new dJ(0.08,0.0847),new TJ({map:JJ,transparent:!0}));n0.material.toneMapped=!1,n0.position.set(0,-0.66,0.07),G.add(n0);let g0=new xJ;g0.position.set(0.2,0.84,0),G.add(g0);let VJ=new S0(new z9(0.56,0.07,0.11,2,0.02),F);g0.add(VJ);let hJ=new S0(new OJ(0.5,0.005,0.004),D);hJ.position.set(0,0.037,0.056),g0.add(hJ);let t0=new xJ,MJ=new S0(new z9(0.48,0.5,0.02,2,0.01),new BJ({color:1645337,roughness:0.45,metalness:0.3,envMapIntensity:0.8}));t0.add(MJ);let FJ=new TJ;FJ.toneMapped=!1;let DJ=new S0(new dJ(0.46,0.48),FJ);DJ.position.z=0.0115,t0.add(DJ),t0.position.y=-0.06,g0.add(t0);let j=new BJ({color:2764075,roughness:0.42,metalness:0.75,envMapIntensity:0.9}),gJ=new y9(0.014,0.014,0.01,12);for(let[f,s]of[[-0.4,0.74],[0.4,0.74],[-0.4,-0.72],[0.4,-0.72]]){let K0=new S0(gJ,j);K0.rotation.x=Math.PI/2,K0.position.set(f,s,0.066),G.add(K0);let B0=new S0(new OJ(0.018,0.003,0.004),F);B0.position.set(f,s,0.072),B0.rotation.z=f*s>0?0.6:-0.5,G.add(B0)}for(let f=0;f<6;f++){let s=new S0(new OJ(0.16,0.008,0.006),F);s.position.set(0.26,-0.6-f*0.024,0.066),G.add(s)}for(let f of[-0.02,-0.58]){let s=new S0(new OJ(0.8,0.004,0.004),new BJ({color:395015,roughness:0.9,metalness:0.1}));s.position.set(0,f,0.066),G.add(s)}let e0=new BJ({color:658443,roughness:0.85,metalness:0.15}),ZJ=new O8(new OJ(0.03,0.075,0.128),e0,16),z=new RJ;for(let f=0;f<16;f++){let s=f<8?-1:1;z.position.set(s*0.458,-0.5+f%8*0.115,0),z.updateMatrix(),ZJ.setMatrixAt(f,z.matrix)}G.add(ZJ);let R=new S0(new z9(0.88,0.7,0.02,2,0.02),new BJ({color:724236,roughness:0.6,metalness:0.3,envMapIntensity:0.5}));R.position.set(0,0.4,0.052),G.add(R);let T=document.createElement("canvas");T.width=T.height=256;let g=T.getContext("2d");g.translate(128,128),g.strokeStyle="rgba(9,248,117,0.4)",g.lineWidth=3;for(let f=0;f<24;f++)g.beginPath(),g.moveTo(0,-104),g.lineTo(0,f%6===0?-88:-96),g.stroke(),g.rotate(Math.PI/12);let t=new k9(T);t.colorSpace=q9,t.generateMipmaps=!1,t.minFilter=LJ;let Z0=new S0(new dJ(0.42,0.42),new TJ({map:t,transparent:!0}));Z0.material.toneMapped=!1,Z0.position.set(0.24,-0.33,0.068),G.add(Z0);let H0=new S0(new y9(0.011,0.011,0.012,10),new TJ({color:e9}));H0.material.toneMapped=!1,H0.rotation.x=Math.PI/2,H0.position.set(0.4,0.03,0.07),G.add(H0);let c=H("WLT-01",11,"rgba(9,248,117,0.5)");c.position.set(-0.37,-0.66,0.068),G.add(c);let o=new S0(new dJ(2.4,1.6),new TJ({map:a5(),transparent:!0,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=-0.12,Z.add(o),B.position.y=0.02;let E0=new M8(0,60,14),C0=new M8(0,60,14),q0=new M8(0,170,20),$0=new M8(0,400,24),P0=new M8(-0.22,240,20),w0=new M8(Z9?-0.06:0.62,70,13),a0={t:0},S=(f,s=!1)=>{let K0=(f%J8.length+J8.length)%J8.length;if(K0===E.mode)return;if(E.mode=K0,E.err=null,E.armed=null,E.dirty=!0,q0.target=-K0*(Math.PI*2/8),!s)SJ.detent(K0);E.vireo.poke(),qJ(),X0(`Mode: ${J8[K0]}`)},Y0=document.getElementById("dv-input-row"),n=document.getElementById("dv-input"),N0=document.getElementById("dv-go"),R0=document.getElementById("dv-alt"),e=document.getElementById("dv-live"),X0=(f)=>{if(e)e.textContent=f},v0={CHAT:{ph:"Ask the rail anything…",go:"Fire"},SEARCH:{ph:"Search the open web…",go:"Search"},"X LOOKUP":{ph:"@handle",go:"Look up"}};function qJ(){let f=E.modeName(),s=v0[f];if(Y0)Y0.style.display=s?"flex":"none";if(s&&n)n.placeholder=s.ph;if(s&&N0)N0.textContent=s.go;if(R0)if(f==="HOME"||f==="LANES")R0.style.display="",R0.textContent=f==="LANES"?"Sweep lane":"Fund lane";else R0.style.display="none"}async function KJ(){try{let f=await fetch("/api/playground/meta");if(!f.ok)return;if(E.meta=await f.json(),E.meta?.handle){if(FJ.map=o5(E.meta.handle,E.meta.variant),FJ.needsUpdate=!0,w0.target>0){if(w0.target=-0.06,!Z9)setTimeout(()=>SJ.dock(),420);setTimeout(()=>{E.powered=!0},Z9?0:750)}}E.dirty=!0}catch{}}async function pJ(){try{let f=await fetch("/api/credits/history");if(!f.ok)return;let s=await f.json();E.history=s.entries||[],E.dirty=!0}catch{}}addEventListener("vc-balances",(f)=>{let s=f.detail||{};if(!E.meta)return;let K0=E.meta.main_balance_usd;E.meta.main_balance_usd=s.main??E.meta.main_balance_usd;for(let B0 of s.wallets||[]){let k0=B0.purpose==="inference"?E.meta.lanes?.inference:E.meta.lanes?.devtools;if(k0)k0.balance_usd=B0.balance_usd,k0.consumed_usd=B0.consumed_usd}if(typeof s.main==="number"&&s.main!==K0)E.vireo.set("happy");E.dirty=!0,pJ()});function oJ(f){let s=E.meta?.lanes?.[f];return s?{id:s.id,name:f==="inference"?"Inference":"Developer tools"}:null}function $7(f){let s=oJ(f);if(!s)return;dispatchEvent(new CustomEvent("vc-device-fund",{detail:s}))}async function Z7(f){let s=oJ(f);if(!s)return;dispatchEvent(new CustomEvent("vc-device-sweep",{detail:s}))}let I8=null,K7=!1;function W7(){if(E.busy)return!1;if(v0[E.modeName()]&&!(n?.value||"").trim())return n?.focus(),E.vireo.set("alert"),E.dirty=!0,SJ.err(),!1;return!0}async function A8(){if(E.busy)return;let f=E.modeName();if(E.err=null,f==="HOME"){$7("inference");return}if(f==="LANES"){$7(E.lane);return}if(f==="LEDGER"){pJ();return}let s=v0[f],K0=(n?.value||"").trim();if(s&&!K0){n?.focus(),E.vireo.set("alert"),SJ.err();return}if(f==="CHAT"&&!E.armed){let k0=(Math.ceil((K0.length+180)/4)*0.14+112.00000000000001)/1e6,r0=E.meta?.vantis_price_usd?k0/E.meta.vantis_price_usd:null;E.armed={until:performance.now()+3000,quote:`UP TO $${k0.toFixed(6)}${r0?` · ~${r0.toFixed(4)} VANTIS`:""} AT LIST`},E.dirty=!0,X0("Armed. Press again to fire.");return}E.armed=null,E.busy=!0,E.vireo.set("work"),E.vireo.flapRate=3,E.dirty=!0;try{if(f==="CHAT"){E.chat={prompt:K0,text:"",shown:0,line:""};let B0=await fetch("/api/playground/fire",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:K0})}),k0=await B0.json();if(!B0.ok){if(E.chat=null,k0.error==="lane_empty")E.err=`Inference lane is empty — it needs about $${(k0.required_usd||0.001).toFixed(4)} for this call. Green key on HOME funds it.`,E.vireo.set("droop");else if(k0.error==="rate_limited")E.err="Easy — a few seconds between fires.",E.vireo.set("alert");else E.err="The rail refused that one. Try again.",E.vireo.set("alert");SJ.err()}else{if(E.chat.text=k0.text||"",E.chat.line=`${(k0.latency_ms/1000).toFixed(1)}s · ${k0.tokens_out} TOK OUT · $${(k0.cost_usd||0).toFixed(6)} → ${(k0.vantis_burned||0).toFixed(4)} VANTIS BURNED`,E.meta?.lanes?.inference)E.meta.lanes.inference.balance_usd=k0.lane_balance_usd;SJ.ok(),X0(`Answer: ${k0.text}`)}}else if(f==="SEARCH"){let B0=await fetch("/api/playground/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:K0})}),k0=await B0.json();if(!B0.ok){if(k0.error==="demo_exhausted")E.err="Today's free searches are spent — more tomorrow.";else E.err="Search did not go through.";E.vireo.set("alert"),SJ.err()}else E.search={query:K0,results:k0.results,left:k0.left_today},E.vireo.set("happy"),SJ.ok(),X0(`${k0.results.length} results`)}else if(f==="X LOOKUP"){let B0=await fetch("/api/playground/x",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:K0})}),k0=await B0.json();if(!B0.ok)E.err=k0.error==="demo_exhausted"?"Today's free lookups are spent — more tomorrow.":k0.error==="handle_not_found"?"No such handle — check the spelling.":k0.error==="tool_off"?"This route is offline right now.":"Lookup did not go through.",E.vireo.set("alert"),SJ.err();else E.xprof={profile:k0.profile,left:k0.left_today},E.vireo.set("happy"),SJ.ok(),X0(`@${k0.profile.handle}: ${k0.profile.followers} followers`)}}catch{E.err="Network hiccup — try again.",E.vireo.set("alert"),SJ.err()}finally{if(E.busy=!1,E.vireo.state==="work")E.vireo.set("idle");E.dirty=!0}}let K9=-1e9,h9=new j6,M9=new u0,uJ=null,C8=new TJ({visible:!1}),x9=(f,s,K0,B0,k0,r0=0,W0=0,NJ=0)=>{let h0=new S0(new OJ(s,K0,B0),C8);return h0.position.set(r0,W0,NJ),h0.userData.hit=f,k0.add(h0),h0},P8=[x9("knob",0.38,0.38,0.22,u),x9("key",0.36,0.36,0.2,k),x9("lever",0.3,0.26,0.18,z0,0,0.06,0.03),x9("card",0.6,0.3,0.24,g0,0,0.1,0.02),x9("screen",0.8,0.61,0.06,w,0,0.4,0.08)];function _8(f){let s=$.domElement.getBoundingClientRect();M9.x=(f.clientX-s.left)/s.width*2-1,M9.y=-((f.clientY-s.top)/s.height)*2+1,h9.setFromCamera(M9,U);let K0=h9.intersectObjects(P8,!1);return K0.length?K0[0].object.userData.hit:null}function v7(f){let s=$.domElement.getBoundingClientRect();M9.x=(f.clientX-s.left)/s.width*2-1,M9.y=-((f.clientY-s.top)/s.height)*2+1,h9.setFromCamera(M9,U);let K0=h9.intersectObject(A,!1)[0];if(!K0?.uv)return null;return{cx:K0.uv.x*$9,cy:(1-K0.uv.y)*b9}}function g6(f){let s=v7(f);if(!s)return;for(let K0 of E.tabRects)if(s.cx>=K0.x&&s.cx<=K0.x+K0.w&&s.cy>=K0.y&&s.cy<=K0.y+K0.h){S(K0.mode);return}if(E.modeName()==="LANES"&&s.cy>100&&s.cy<460){let K0=s.cx<$9/2?"inference":"devtools";if(K0!==E.lane)E.lane=K0,P0.target=K0==="inference"?-0.22:0.22,SJ.lever(),E.dirty=!0,X0(`Lane: ${E.lane}`)}}$.domElement.addEventListener("pointerdown",(f)=>{K9=performance.now();let s=_8(f);if(!s)return;if(E.vireo.poke(),s==="knob")uJ={x:f.clientX,base:E.mode,acc:0},$.domElement.setPointerCapture(f.pointerId);else if(s==="key"){if(!W7())return;$0.target=-0.032,SJ.press(),K7=!1,I8=setTimeout(()=>{if(K7=!0,E.modeName()==="LANES")Z7(E.lane)},650)}else if(s==="lever"){if(E.lane=E.lane==="inference"?"devtools":"inference",P0.target=E.lane==="inference"?-0.22:0.22,SJ.lever(),E.dirty=!0,E.modeName()!=="LANES")S(5,!0);X0(`Lane: ${E.lane}`)}else if(s==="screen")g6(f);else if(s==="card")S(0)});let y7=0,X7=null;$.domElement.addEventListener("pointermove",(f)=>{K9=performance.now();let s=$.domElement.getBoundingClientRect(),K0=(f.clientX-s.left)/s.width*2-1,B0=(f.clientY-s.top)/s.height*2-1;if(!Z9)C0.target=K0*0.1,E0.target=B0*0.055;if(uJ){let r0=f.clientX-uJ.x,W0=Math.round(r0/52);if(W0!==uJ.acc)S(uJ.base+W0),uJ.acc=W0;$.domElement.style.cursor="grabbing";return}let k0=performance.now();if(k0-y7>80)y7=k0,X7=_8(f),$.domElement.style.cursor=X7?"pointer":"default"});let b7=(f)=>{if(uJ){uJ=null;try{$.domElement.releasePointerCapture(f.pointerId)}catch{}}if($0.target!==0){if($0.target=0,clearTimeout(I8),!K7)A8()}};$.domElement.addEventListener("pointerup",b7),$.domElement.addEventListener("pointerleave",(f)=>{if(!uJ)E0.target=0,C0.target=0;b7(f)});let L=0,v=null;$.domElement.addEventListener("wheel",(f)=>{if(X7!=="knob"&&!uJ)return;f.preventDefault(),L+=f.deltaY,clearTimeout(v),v=setTimeout(()=>L=0,200);while(Math.abs(L)>=100)S(E.mode+(L>0?1:-1)),L-=Math.sign(L)*100},{passive:!1});let m=()=>{if(!W7())return;$0.target=-0.032,setTimeout(()=>$0.target=0,130),SJ.press(),A8()};addEventListener("keydown",(f)=>{if(f.target===n){if(f.key==="Enter")f.preventDefault(),m();return}if(f.target?.tagName==="INPUT"||f.target?.tagName==="TEXTAREA")return;if(f.key==="ArrowRight")S(E.mode+1);else if(f.key==="ArrowLeft")S(E.mode-1);else if(f.key==="Enter")m();else if(f.key.toLowerCase()==="l")E.lane=E.lane==="inference"?"devtools":"inference",P0.target=E.lane==="inference"?-0.22:0.22,SJ.lever(),E.dirty=!0}),N0?.addEventListener("click",m),R0?.addEventListener("click",()=>{if(E.modeName()==="LANES")Z7(E.lane);else $7("inference")});function b(){let f=J.clientWidth,s=Math.max(480,Math.min(780,Math.round(f*0.82)));$.setSize(f,s),U.aspect=f/s,U.position.z=f<560?5.6:f<760?4.95:4.35,U.updateProjectionMatrix(),E.dirty=!0}new ResizeObserver(b).observe(J),b();let h=performance.now(),F0=0,M0=[E0,C0,q0,$0,P0,w0];function O0(f){F0=requestAnimationFrame(O0);let s=Math.min(0.25,(f-h)/1000),K0=Math.min(0.05,s);h=f;let B0=f/1000;a0.t=B0;let k0=E.step(s,B0),r0=f-K9<2500;if(!(!E.booted||E.busy||k0||r0||M0.some((NJ)=>!NJ.settled())))if(Math.abs(B.position.y-0.02)>0.0004)B.position.y+=(0.02-B.position.y)*Math.min(1,K0*3);else return;else if(!Z9&&r0)B.position.y=0.02+Math.sin(B0*0.9)*0.012;if(!Z9)B.rotation.x=E0.step(K0),B.rotation.y=C0.step(K0);u.rotation.z=q0.step(K0),M.position.z=$0.step(K0),o0.rotation.z=P0.step(K0),t0.position.y=w0.step(K0),x0.material.color.set(E.lane==="devtools"?e9:1327146),d0.material.color.set(E.lane==="inference"?e9:1327146),D.color.setHex(e9).multiplyScalar(E.busy?0.75+Math.sin(B0*9)*0.25:1),$.render(Z,U)}if(Z9){let f=()=>{E.step(0.03333333333333333,performance.now()/1000),u.rotation.z=q0.target,M.position.z=$0.target,o0.rotation.z=P0.target,t0.position.y=w0.target,$.render(Z,U)};setInterval(f,250),f()}else{let f=!0,s=!1,K0=()=>{let B0=f&&!document.hidden;if(B0&&!s)s=!0,h=performance.now(),F0=requestAnimationFrame(O0);else if(!B0&&s)s=!1,cancelAnimationFrame(F0)};new IntersectionObserver((B0)=>{f=B0[0]?.isIntersecting!==!1,K0()},{threshold:0.02}).observe(J),document.addEventListener("visibilitychange",K0),K0()}let I0=new y;function _0(f){return f.getWorldPosition(I0),I0.project(U),{x:(I0.x+1)/2*$.domElement.clientWidth,y:(1-I0.y)/2*$.domElement.clientHeight}}function b0(){let f=[{obj:A,ring:200,k:"The screen",txt:"Everything happens here. Tap the tabs to switch tools — chat, search, lookups, your ledger."},{obj:k,ring:110,k:"The green key",txt:"Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press."},{obj:u,ring:110,k:"The dial",txt:"Steps through the same tools. Drag it, scroll over it, or use the arrow keys."},{obj:z0,ring:110,k:"The lanes",txt:"The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge."}],s=document.createElement("div");s.className="dv-coach",s.innerHTML='<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>',J.appendChild(s);let K0=s.querySelector(".dv-coach-ring"),B0=s.querySelector(".dv-coach-step"),k0=s.querySelector(".dv-coach-txt"),r0=s.querySelector('[data-a="next"]'),W0=0,NJ=()=>{let _J=f[W0],cJ=_0(_J.obj);K0.style.left=cJ.x+"px",K0.style.top=cJ.y+"px",K0.style.width=K0.style.height=_J.ring+"px",B0.textContent=`${W0+1} / ${f.length} — ${_J.k}`,k0.textContent=_J.txt,r0.textContent=W0===f.length-1?"Start":"Next",SJ.detent(W0)},h0=()=>{try{localStorage.setItem("vc-device-coach","1")}catch{}s.remove()};s.querySelector('[data-a="skip"]').addEventListener("click",h0),r0.addEventListener("click",()=>{if(W0++,W0>=f.length)h0();else NJ()}),NJ()}let p0=!1;try{p0=!!localStorage.getItem("vc-device-coach")}catch{}if(!p0&&!Z9)setTimeout(b0,Z9?0:2200);document.body.classList.add("dv-on"),document.getElementById("dv-console")?.removeAttribute("open"),qJ(),KJ().then(pJ),setTimeout(()=>{E.powered=!0},3200),window.__device={ready:!0,os:E,setMode:(f)=>S(f),pickAt:(f,s)=>_8({clientX:f,clientY:s}),frames:()=>$.info.render.frame,screenClientPoint:(f,s)=>{let K0=new y((f-0.5)*0.76,(s-0.5)*0.57,0);A.localToWorld(K0),K0.project(U);let B0=$.domElement.getBoundingClientRect();return{x:B0.left+(K0.x+1)/2*B0.width,y:B0.top+(1-K0.y)/2*B0.height}},fire:A8,snapshot:()=>{return $.render(Z,U),$.domElement.toDataURL("image/png")}}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",FW);else FW();
