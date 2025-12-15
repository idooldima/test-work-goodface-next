import { ContentBox } from "@/components/common/ContentBox";
import { Icon } from "@iconify/react";

type ProductHeaderProps = {
  title: string;
  description?: string;
  icon?: string;
};

export function ProductHeader({ title, description, icon }: ProductHeaderProps) {
  return (
    <ContentBox className="flex items-start gap-4">
      {icon && (
        <div className="bg-muted flex h-16 w-16 items-center justify-center rounded-md">
          <Icon icon={icon} className="h-6 w-6" />
        </div>
      )}

      <div>
        <h4>{title}</h4>
        {description && <p className="subtitle2 text-grey-500">{description}</p>}
      </div>
    </ContentBox>
  );
}
