import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PortfolioData} from "../types/portfolio-data.types";

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private dataSubject: BehaviorSubject<PortfolioData[]> = new BehaviorSubject<PortfolioData[]>([]);
  public data$: Observable<PortfolioData[]> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchNovelData();
  }

  private fetchNovelData(): void {
    const documentId = '1FLCDJkNpMJpOEkBmYP0NaCpqX-95vAQ4kGQ4_Th2N-Q';
    const exportUrl = `https://docs.google.com/spreadsheets/d/${documentId}/gviz/tq?tqx=out:json`;

    this.http.get(exportUrl, { responseType: 'text' }).subscribe(
      (response: string) => {
        const startIndex = response.indexOf('google.visualization.Query.setResponse');
        if (startIndex !== -1) {
          const jsonStartIndex = response.indexOf('{', startIndex);
          const jsonEndIndex = response.lastIndexOf('}') + 1;
          if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
            const jsonResponse = JSON.parse(response.substring(jsonStartIndex, jsonEndIndex));
            const rawData = jsonResponse.table.rows;
            const formattedData = rawData.map((row: any) => {
              return {
                id: row.c[0].v,
                name: row.c[1].v,
                field: row.c[2].v,
                value: row.c[3].v,
                link: row.c[4].v,
                imageUrl: row.c[5].v,
              };
            });
            this.dataSubject.next(formattedData)
          } else {
            console.error('Unexpected response format:', response);
          }
        } else {
          console.error('Response does not contain expected data:', response);
        }
      },
      (error) => {
        console.error('Error fetching novel data:', error);
      }
    );
  }

  getDataByField(field: string){
    return this.data$.pipe(
      map(
        (imageData)=>{
          return imageData.filter(image=> image.field === field)
        }
      )
    )
  }
}
