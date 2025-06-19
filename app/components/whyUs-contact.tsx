import React from 'react';
import { Card, CardContent } from './ui/card';

function WhyUscontact() {
  return (
    <div className="my-8 flex items-center justify-center">
            <Card className="bg-[#708090] border-0 h-[320px]">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-4 ml-4">Why Choose Us?</h2>
                <ul className="list-disc ml-6 space-y-2 p-2">
                  <li>Compliance with government policies and asset management indicators.</li>
                  <li>Streamlined asset verification and maintenance scheduling.</li>
                  <li>Expertise in barcoding and asset depreciation tracking.</li>
                  <li>Proven track record with government ministries and corporations.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
  );
}

export default WhyUscontact;
