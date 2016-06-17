'use strict';
(function(){

class TetrisComponent {
  constructor(Auth, $http, socket) {
    //this.document = document;
    this.$http = $http;
    this.socket = socket;
    //this.$window = $window;

    // this.canvas = document.getElementsByTagName('canvas')[0];
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext( '2d' );
    this.W = 300;
    this.H = 600;
    this.COLS = 10;
    this.ROWS = 20;
    this.BLOCK_W = this.W / this.COLS;
    this.BLOCK_H = this.H / this.ROWS;
    this.board = [];
    this.lose = false;
    this.interval;
    this.current; // current moving shape
    this.currentX;
    this.currentY; // position of current shape
    this.shapes = [
    [ 1, 1, 1, 1 ],
    [ 1, 1, 1, 0, 1 ],
    [ 1, 1, 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 0, 1, 1 ],
    [ 1, 1, 0, 0, 0, 1, 1 ],
    [ 0, 1, 1, 0, 1, 1 ],
    [ 0, 1, 0, 0, 1, 1, 1 ]];
    this.colors = ['cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'];
    // document.body.onkeydown(e) {
    //   var keys = {
    //       37: 'left',
    //       39: 'right',
    //       40: 'down',
    //       38: 'rotate'
    //   };
    //   if ( typeof keys[ e.keyCode ] != 'undefined' ) {
    //       keyPress( keys[ e.keyCode ] );
    //       render();
    //   }
    // }
  }

  startGame() {
    this.newGame();
  }

  allowDrop(ev) {
      ev.preventDefault();
  }

  drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  }

  // checks if the resulting position of current shape will be feasible
  valid(offsetX, offsetY, newCurrent) {
      offsetX = offsetX || 0;
      offsetY = offsetY || 0;
      offsetX = this.currentX + offsetX;
      offsetY = this.currentY + offsetY;
      newCurrent = newCurrent || this.current;
      for ( var y = 0; y < 4; ++y ) {
          for ( var x = 0; x < 4; ++x ) {
              if ( newCurrent[ y ][ x ] ) {

                try {
                  var outcome = this.board[ y + offsetY ][ x + offsetX ] === 'undefined'
                  || x + this.offsetX < 0
                  || y + this.offsetY >= this.ROWS
                  || x + this.offsetX >= this.COLS;
                } catch (err) {
                  return false;
                }

                  if ( //typeof this.board[ y + this.offsetY ] === 'undefined'
                    /*||this.board[ y + Number(this.offsetY) ][ Number(x + this.offsetX) ] === 'undefined'
                    ||*/outcome) {
                      if (this.offsetY === 1) {
                        this.lose = true;
                      }// lose if the current shape at the top row when checked
                      return false;
                  }
              }
          }
      }
      return true;
  }

  newGame() {
      clearInterval(this.interval);
      this.init();
      this.newShape();
      this.render();
      this.lose = false;
      this.interval = window.setInterval(this.tick(), 1000);
  }

  // creates a new 4x4 shape in global variable 'current'
  // 4x4 so as to cover the size when the shape is rotated
  newShape() {
    var id = Math.floor( Math.random() * this.shapes.length );
    var shape = this.shapes[ id ]; // maintain id for color filling

    this.current = [];
    for ( var y = 0; y < 4; ++y ) {
        this.current[ y ] = [];
        for ( var x = 0; x < 4; ++x ) {
            var i = 4 * y + x;
            if ( typeof shape[ i ] !== 'undefined' && shape[ i ] ) {
                this.current[ y ][ x ] = id + 1;
            }
            else {
                this.current[ y ][ x ] = 0;
            }
        }
    }
    // position where the shape will evolve
    this.currentX = 5;
    this.currentY = 0;
  }

  // clears the board

  init() {
    for ( var y = 0; y < this.ROWS; ++y ) {
        this.board[ y ] = [];
        for ( var x = 0; x < this.COLS; ++x ) {
            this.board[ y ][ x ] = 0;
        }
    }
  }

  // keep the element moving down, creating new shapes and clearing lines
  tick() {
    //var result = this.valid(0, 1);
    var result = this.valid(0,1, this.current);
    // var result = true;
    if ( result ) {
        ++this.currentY;
          this.render()
          //this.tick().delay(1000);
          //window.setTimeout(this.tick(), 1000);
          this.tick();
    }
    // if the element settled
    else {
        this.freeze();
        this.clearLines();
        if (this.lose) {
            console.log("lost the game");
            this.newGame();
            return false;
        }
        this.newShape();
        //this.render();
        this.tick();
    }
  }

  // stop shape at its position and fix it to board
  freeze() {
    for ( var y = 0; y < 4; ++y ) {
        for ( var x = 0; x < 4; ++x ) {
            if ( this.current[ y ][ x ] ) {
                this.board[ y + this.currentY ][ x + this.currentX ] = this.current[ y ][ x ];
            }
        }
      }
  }

  // returns rotates the rotated shape 'current' perpendicularly anticlockwise
  rotate( current ) {
    var newCurrent = [];
    for ( var y = 0; y < 4; ++y ) {
        newCurrent[ y ] = [];
        for ( var x = 0; x < 4; ++x ) {
            newCurrent[ y ][ x ] = current[ 3 - x ][ y ];
        }
    }
    return newCurrent;
  }

  // check if any lines are filled and clear them
  clearLines() {
    for ( var y = this.ROWS - 1; y >= 0; --y ) {
        var rowFilled = true;
        for ( var x = 0; x < this.COLS; ++x ) {
            if ( this.board[ y ][ x ] === 0 ) {
                rowFilled = false;
                break;
            }
        }
        if ( rowFilled ) {
            document.getElementById( 'clearsound' ).this.play();
            for ( var yy = y; yy > 0; --yy ) {
                for ( x = 0; x < this.COLS; ++x ) {
                    this.board[ yy ][ x ] = this.board[ yy - 1 ][ x ];
                }
            }
            ++y;
        }
    }
  }

  keyPress( key ) {
    console.log("key was pressed");
    switch ( key ) {
        case 'left':
            if ( this.valid( -1 ) ) {
                --this.currentX;
            }
            break;
        case 'right':
            if ( this.valid( 1 ) ) {
                ++this.currentX;
            }
            break;
        case 'down':
            if ( this.valid( 0, 1 ) ) {
                ++this.currentY;
            }
            break;
        case 'rotate':
            var rotated = this.rotate( this.current );
            if ( this.valid( 0, 0, rotated ) ) {
                this.current = rotated;
            }
            break;
    }
  }

  // draw a single square at (x, y)
  drawBlock( x, y ) {
    this.ctx.fillRect( this.BLOCK_W * x, this.BLOCK_H * y, this.BLOCK_W - 1 , this.BLOCK_H - 1 );
    this.ctx.strokeRect( this.BLOCK_W * x, this.BLOCK_H * y, this.BLOCK_W - 1 , this.BLOCK_H - 1 );
  }

  // draws the board and the moving shape
  render() {
    this.ctx.clearRect( 0, 0, this.W, this.H );
    var y = 0;
    var x = 0;
    for ( y = 0; y < this.ROWS; ++y ) {
        this.board[ y ] = [];
        for ( x = 0; x < this.COLS; ++x ) {
            this.board[ y ][ x ] = 0;
        }
    }

    this.ctx.strokeStyle = 'black';
    for ( x = 0; x < this.COLS; ++x ) {
        for ( y = 0; y < this.ROWS; ++y ) {
            if ( this.board[ y ][ x ] ) {
                this.ctx.fillStyle = this.colors[ this.board[ y ][ x ] - 1 ];
                this.drawBlock( x, y );
            }
        }
    }
    this.ctx.fillStyle = 'red';
    this.ctx.strokeStyle = 'black';
    for ( y = 0; y < 4; ++y ) {
        for ( x = 0; x < 4; ++x ) {
            if ( this.current[ y ][ x ] ) {
                this.ctx.fillStyle = this.colors[ this.current[ y ][ x ] - 1 ];
                this.drawBlock( this.currentX + x, this.currentY + y );
            }
        }
    }
  }


}

angular.module('beckmenProjectApp')
  .component('tetris', {
    templateUrl: 'app/tetris/tetris.html',
    controller: TetrisComponent
  });

})();
