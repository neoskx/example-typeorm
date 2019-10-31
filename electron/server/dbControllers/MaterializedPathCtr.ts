import { getRepository } from "typeorm";
import { Category } from "../entity/EntityFeatures/MaterializedPath.sql";

export async function createCategories() {
  const repo = getRepository("category");
  const a1 = new Category();
  a1.name = "a1";
  await repo.save(a1);

  const a11 = new Category();
  a11.name = "a11";
  a11.parent = a1;
  await repo.save(a11);

  const a12 = new Category();
  a12.name = "a12";
  a12.parent = a1;
  await repo.save(a12);

  const a111 = new Category();
  a111.name = "a111";
  a111.parent = a11;
  await repo.save(a111);

  const a112 = new Category();
  a112.name = "a112";
  a112.parent = a11;
  await repo.save(a112);
}
