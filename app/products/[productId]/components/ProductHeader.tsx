import { ContentBox } from "@/components/common/ContentBox";

type ProductHeaderProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export function ProductHeader({ title, description, icon }: ProductHeaderProps) {
  return (
    <ContentBox className="flex items-center gap-4">
      {icon && <div className="flex items-center justify-center rounded-md">{icon}</div>}

      <div>
        <h4>{title}</h4>
        {description && <p className="subtitle2 text-grey-500">{description}</p>}
      </div>
    </ContentBox>
  );
}
