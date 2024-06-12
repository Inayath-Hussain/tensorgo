import { FormEventHandler, useState } from "react";
import { getUserEmail } from "../utilities/localStorage/email";



const categoryOptions = ["Product Features", "Product Pricing", "Product Usability"] as const;

interface Form {
    productName: string
    category: typeof categoryOptions[number] | ""
    rating: string
    comment: string
}


const HomePage = () => {

    const userEmail = getUserEmail();



    const [formValue, setFormValue] = useState<Form>({
        productName: "",
        category: "",
        rating: "0",
        comment: ""
    });


    const handleChange = (key: keyof Form, value: string) => setFormValue(prev => ({ ...prev, [key]: value }))


    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center">

            {/* signed in email */}
            <div className="fixed right-4 top-8 py-2 px-6 border-2 rounded-2xl">
                {userEmail}
            </div>



            <form onSubmit={handleSubmit}>

                <h1 className="mb-7 text-center text-3xl">Feedback Form</h1>

                <label htmlFor="product-name" className="block">Product Name</label>
                <input id="product-name" type="text" className="py-2 px-5 mt-2 rounded-lg border-[1px] border-black outline-0"
                    value={formValue.productName} onChange={e => handleChange("productName", e.target.value)}
                    required />


                <label className="block mt-6 mb-2" htmlFor="category">Category</label>
                <select id="category" className="border-[1px] border-black px-3 py-2"
                    value={formValue.category} onChange={e => handleChange("category", e.target.value)}
                    required>
                    <option value="" hidden>Select Category</option>

                    {categoryOptions.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}

                </select>



                <label className="block mt-6" htmlFor="rating">Rating</label>
                <input className="py-2 pl-5 mt-2  rounded-sm border-[1px]" id="rating" type="number"
                    value={formValue.rating} onChange={e => handleChange("rating", e.target.value)}
                    min={0} max={5} required />


                <label className="mt-6 mb-2 block" htmlFor="">Comment</label>
                <textarea cols={40} rows={8} className="resize-none py-2 px-5 rounded-lg border-[1px] border-black"
                    value={formValue.comment} onChange={e => handleChange("comment", e.target.value)} />


                <button className="py-2 px-4 rounded-lg block border-[1px] border-black mt-6 mx-auto">Submit</button>

            </form>


        </main>
    );
}

export default HomePage;