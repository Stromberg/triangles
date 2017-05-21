import { isTriangle, triangleType, TriangleType } from '../models/Triangle';


test('isTriangle', () => {
  expect(isTriangle(0, 0, 0)).toBeFalsy();
  expect(isTriangle(0, 1, 1)).toBeFalsy();
  expect(isTriangle(1, 0, 1)).toBeFalsy();
  expect(isTriangle(1, 1, 0)).toBeFalsy();

  expect(isTriangle(null, 0, 0)).toBeFalsy();
  expect(isTriangle(0, null, 0)).toBeFalsy();
  expect(isTriangle(0, 0, null)).toBeFalsy();

  expect(isTriangle(1, 1, 1)).toBeTruthy();
  expect(isTriangle(0.1, 0.1, 0.1)).toBeTruthy();
})

test('triangleType', () => {
  expect(triangleType(0, 0, 0)).toBe(TriangleType.NotATriangle);

  expect(triangleType(0.1, 0.1, 0.1)).toBe(TriangleType.Equilateral);
  expect(triangleType(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)).toBe(TriangleType.Equilateral);

  expect(triangleType(0.2, 0.1, 0.1)).toBe(TriangleType.Isosceles);
  expect(triangleType(0.1, 0.2, 0.1)).toBe(TriangleType.Isosceles);
  expect(triangleType(0.1, 0.1, 0.2)).toBe(TriangleType.Isosceles);

  expect(triangleType(0.1, 0.2, 0.3)).toBe(TriangleType.Scalene);
  expect(triangleType(0.2, 0.1, 0.3)).toBe(TriangleType.Scalene);
  expect(triangleType(0.2, 0.3, 0.1)).toBe(TriangleType.Scalene);
})