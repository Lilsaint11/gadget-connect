import ProductSkeletonCard from "./productSkeletonCard";

const ProductSkeleton = () => {
    return ( 
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            <ProductSkeletonCard />
            <ProductSkeletonCard />
            <ProductSkeletonCard />
            <ProductSkeletonCard />
            <ProductSkeletonCard />
        </div>
     );
}
 
export default ProductSkeleton;