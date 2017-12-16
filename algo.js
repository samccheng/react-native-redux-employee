const reverse = (str) => str.split('').reverse().join('')

console.log(reverse('hello'))

const fizzbuzz = num => {
  for( var i = 0; i < num ; i++ ) {
    if(i % 3 === 0 && i % 5 === 0 ) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0 ) {
      console.log('fizz')
    } else if (i % 5 === 0 ) {
      console.log('buzz')
    } else {
      console.log(i)
    }
}
}

// console.log(fizzbuzz(100))

const r = str => {
  let rev = ''
  for( var i = str.length-1; i >= 0; i--) {
    rev += str[i]
  }
  return rev
}

console.log(r('reverse'))

const fib = num => {
  for(var n= 1; n < num; n++) {
    if(n < 2) {
      console.log(n)
    }
    console.log((n-1) + (n-2))
  }
}

console.log(fib(7))

const palindrome = str => {
  const reverse = str.split('').reverse().join('')
  return str === reverse
}

console.log(palindrome('abba'))
console.log(palindrome('hello'))

const i = (n) => {
    let rev = n.toString().split('').reverse().join('')
    return parseInt(rev) * Math.sign(n)
}

console.log(i(300))

const word = "hello"
const obj = {}

for(let char of word) {
  !obj[char]? obj[char] = 1 : obj[char]++
}

console.log(obj)

const chunk = (arr, size) => {
  const chunked = []

  for(let el of arr) {
    const last = chunked[chunked.length - 1]

    if(!last || last.length === size ) {
      chunked.push([el])
    } else {
      last.push(el)
    }
  }

  return chunked
}

console.log(chunk([2,3,4,5], 3))
