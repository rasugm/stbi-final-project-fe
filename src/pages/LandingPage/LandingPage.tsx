import { Button, Card, TextField } from '@/components/base';
import { Field, Form } from '@/components/base/FormBase';
import { useSearchBert, useSearchVms } from '@/hooks/useServices/useSearch';
import { useState } from 'react';

function LandingPage() {

    const [paramsVms, setParamsVms] = useState({
        query: '',
    });

    const [paramsBert, setParamsBert] = useState({
        query: '',
    });

    const initialValuesVms = {
        query: '',
    };

    const initialValuesBert = {
        query: '',
    };

    const { data: result_vms } = useSearchVms(paramsVms, {
        enabled: !!paramsVms.query,
    });

    const { data: result_bert } = useSearchBert(paramsBert, {
        enabled: !!paramsBert.query,
    });

    // CHECK FIRST NAME AND LAST NAME IF SAME SHOW ONLY FIRST NAME
    const checkFirstName = (first_name: string, last_name: string) => {
        if (first_name === last_name) {
            return first_name;
        } else {
            return `${first_name} ${last_name}`;
        }
    };

    // CONVERT TO PERCENTAGE
    const handleSimiliarity = (score: number) => {
        return `${Math.round(score * 100)}%`;
    };

    const onSubmitVms = (values: any) => {
        setParamsVms({
            query: values.query,
        });
    };

    const onSubmitBert = (values: any) => {
        setParamsBert({
            query: values.query,
        });
    };

    return (
        <div className="m-10 flex flex-col gap-3">
            <div>
                <h6 className="text-md font-bold">Search Engine KPU</h6>
                <p className="text-sm text-gray-400">Search Engine KPU adalah aplikasi pencarian data caleg yang diambil dari data KPU</p>
            </div>
            <div className="flex gap-5">

                <div className="w-full">
                    <h6 className="text-sm mb-2 font-bold">Vector Space Model (VSM)</h6>
                    <div className="flex items-center w-full gap-1">
                        <Form
                            className="w-full flex items-center gap-0"
                            initialValues={initialValuesVms}
                            onSubmit={onSubmitVms}
                        >
                            <div className="w-full">
                                <Field
                                    name="query"
                                    className="h-[44px] rounded-none rounded-l-lg"
                                    component={TextField}
                                    placeholder={'Masukan Kata Kunci anda'}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-[5%] rounded-none rounded-r-lg"
                                size="xs"
                            >
                                Search
                            </Button>
                        </Form>
                    </div>
                    {result_vms?.metadata && (
                        <div className="w-full flex justify-between mt-4">
                            <div className="text-sm font-bold ">Hasil Pencarian - "{result_vms?.metadata?.query}"</div>
                            <small className="text-gray-400">{result_vms?.metadata?.processing_time}ms </small>
                        </div>

                    )}

                    <div className="w-full flex flex-col gap-3 mt-3">
                        {result_vms?.documents.map((item: any, index: number) => (
                            <Card
                                key={index}
                                className="flex border items-center shadow-sm border-gray-200 p-3 gap-3"
                            >
                                <div className="w-[20%] flex flex-col items-center justify-center">
                                    <div className="text-lg font-bold">{item.nomor_urut_caleg}</div>
                                    <small>
                                        <div className="text-xs text-center">Nomor Urut Caleg</div>
                                    </small>
                                </div>
                                <div className="w-full">
                                    <div className="text-md font-bold">{checkFirstName(item.first_name, item.last_name).toUpperCase()}</div>
                                    <p className="text-xs text-gray-400">
                                        {item.dapil.toUpperCase()}
                                    </p>
                                    <p className="text-xs">
                                        {item.provinsi.toUpperCase()} - {item.nama_dapil.toUpperCase()}
                                    </p>
                                    <p className="text-xs">
                                        {item.nama_partai.toUpperCase()} - {item.nama_partai_acronym.toUpperCase()}
                                    </p>
                                </div>
                                <div className="w-[20%] flex flex-col items-center justify-center">
                                    <div className="text-lg font-bold">{handleSimiliarity(item?.score)}</div>
                                    <small>
                                        <div className="text-xs text-center">Similarity Score</div>
                                    </small>
                                </div>
                            </Card>
                        ))}

                    </div>
                </div>
                <div className="w-full">
                    <h6 className="text-sm mb-2 font-bold">Bidirectional Encoder Representations from Transformers (BERT)</h6>
                    <div className="flex items-center w-full gap-1">
                        <Form
                            className="w-full flex items-center gap-0"
                            initialValues={initialValuesBert}
                            onSubmit={onSubmitBert}
                        >
                            <div className="w-full">
                                <Field
                                    name="query"
                                    className="h-[44px] rounded-none rounded-l-lg"
                                    component={TextField}
                                    placeholder={'Masukan Kata Kunci anda'}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-[5%] rounded-none rounded-r-lg"
                                size="xs"
                            >
                                Search
                            </Button>
                        </Form>
                    </div>
                    {result_bert?.metadata && (
                        <div className="w-full flex justify-between mt-4">
                            <div className="text-sm font-bold ">Hasil Pencarian - "{result_bert?.metadata?.query}"</div>
                            <small className="text-gray-400">{result_bert?.metadata?.processing_time}ms </small>
                        </div>

                    )}

                    <div className="w-full flex flex-col gap-3 mt-3">
                        {result_bert?.documents.map((item: any, index: number) => (
                            <Card
                                key={index}
                                className="flex border items-center shadow-sm border-gray-200 p-3 gap-3"
                            >
                                <div className="w-[20%] flex flex-col items-center justify-center">
                                    <div className="text-lg font-bold">{item.nomor_urut_caleg}</div>
                                    <small>
                                        <div className="text-xs text-center">Nomor Urut Caleg</div>
                                    </small>
                                </div>
                                <div className="w-full">
                                    <div className="text-md font-bold">{checkFirstName(item.first_name, item.last_name).toUpperCase()}</div>
                                    <p className="text-xs text-gray-400">
                                        {item.dapil.toUpperCase()}
                                    </p>
                                    <p className="text-xs">
                                        {item.provinsi.toUpperCase()} - {item.nama_dapil.toUpperCase()}
                                    </p>
                                    <p className="text-xs">
                                        {item.nama_partai.toUpperCase()} - {item.nama_partai_acronym.toUpperCase()}
                                    </p>
                                </div>
                                <div className="w-[20%] flex flex-col items-center justify-center">
                                    <div className="text-lg font-bold">{handleSimiliarity(item?.score)}</div>
                                    <small>
                                        <div className="text-xs text-center">Similarity Score</div>
                                    </small>
                                </div>
                            </Card>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
