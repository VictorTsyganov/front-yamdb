import { ProductionInterface } from "./production";

export class PaginatedProductions {

    constructor(
        public total: number,
        public rows: ProductionInterface[],
        public search: string
    ) { }
}