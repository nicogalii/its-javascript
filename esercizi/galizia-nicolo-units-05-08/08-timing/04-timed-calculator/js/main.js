/**
 * @file: main.js
 * @author: Nicolò Galizia
 *
 * 4.Timed calculator
   ● We will modify ‘Calculator’ exercise from the lesson about functions
   ● Rewrite the last function that performs all 4 operations so that there is a 
   delay of 3 seconds between one operation and the next
 */

/**
 * Function to calculate the operation
 * @param {number} num - First number
 * @param {number} num2 - Second number
 */
function operations(num, num2) {
  // setTimeout halfNumber function
  setTimeout(
    /**
     * Function to calculate the half of the number
     * @param {number} num - First number
     */
    function halfNumber(num) {
      let half = num / 2;
      console.log(`La metà di ${num} é ${half}`);

      // setTimeout squareNuber function
      setTimeout(
        /**
         * Function to calculate the square of the number
         * @param {number} num - First number
         */
        function squareNumber(num) {
          let square = num * num;
          console.log(`Il quadrato di ${num} é ${square}`);

          // setTimeout calcArea function
          setTimeout(
            /**
             * Function to calculate the area with the radius(num)
             * @param {number} num - First number
             */
            function calcArea(num) {
              let radius = num;
              let area = 3.14 * radius * radius;
              console.log(`L'area è ${area}`);

              // setTimeout percentOf function
              setTimeout(
                /**
                 * Function to calculate the percent between the numbers
                 * @param {number} num - First number
                 * @param {number} num2 - Second number
                 */
                function percentOf(num, num2) {
                  let percent = (num / num2) * 100;
                  console.log(`${num} é il ${percent}% di ${num2}`);
                },
                3000,
                num,
                num2
              );
            },
            3000,
            num
          );
        },
        3000,
        num
      );
    },
    3000,
    num
  );
}

// Function calls and testing
operations(2, 4);