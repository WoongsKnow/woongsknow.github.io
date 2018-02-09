// 다른 전역 변수와 충돌을 피하기 위해 namespace를 생성
var rj3 = {};

// svg라는 하위 namespace 만들기
// 두줄 테스트
rj3.svg = {};

// line 함수 추가
rj3.svg.line = function() {
  var getX = function(point) {
        return point[0];
      },
      getY = function(point) {
        return point[1];
      },
      interpolate = function(points) {
        return points.join('L');
      };
  
  function line(data) {
    var segments = [],
        points = [],
        i = -1,
        n = data.length,
        d;
    function segment() {
      segments.push("M", interpolate(points));
    }
    while (++i < n) {
      d = data[i];
      points.push([+getX.call(this, d, i), +getY.call(this,d,i)]);
      
    }
    if(points.length) {
      segment();
      
    }
    return segments.length ? segments.join('') : null;
  }
  
  line.x = function(funcToGetX) {
    
  }
  line.y = function(funcToGetY) {
    
  }
  return line;
}

