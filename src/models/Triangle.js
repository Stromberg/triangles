import _ from 'lodash';

// Enum of the different types of Triangles.
export let TriangleType = {
  NotATriangle: "Not a Triangle",
  Equilateral: "Equilateral",
  Isosceles: "Isosceles",
  Scalene: "Scalene"
};

// Determines if the different side lengths make up a Triangle.
export function isTriangle(length1, length2, length3) {
  return (
    typeof (length1) === "number" &&
    typeof (length2) === "number" &&
    typeof (length3) === "number" &&
    length1 > 0 && length1 <= Number.MAX_VALUE &&
    length2 > 0 && length2 <= Number.MAX_VALUE &&
    length3 > 0 && length3 <= Number.MAX_VALUE);
}

// Returns the type of a Triangle.
export function triangleType(length1, length2, length3) {
  if (!isTriangle(length1, length2, length3)) {
    return TriangleType.NotATriangle;
  }

  // TODO: should probably allow for delta diffs in lengths.
  let numUniqueLengths = Object.keys(_.groupBy([length1, length2, length3])).length;

  if (numUniqueLengths === 1) {
    return TriangleType.Equilateral;
  }

  if (numUniqueLengths === 2) {
    return TriangleType.Isosceles;
  }

  return TriangleType.Scalene;
}
